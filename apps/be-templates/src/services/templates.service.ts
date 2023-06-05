import { Injectable } from '@nestjs/common';
import {
  Prisma,
  Template,
  TemplateElement,
  TemplatesPagesPrismaWriteModelClient,
} from '@prisma-clients/templates-pages-write-model';
import { TemplateElementsService } from './template-elements.service';
import { callWithInjectedPrismaTransaction } from '@common/utility';
import {
  CreateManyTemplateElementInput,
  CreateTemplateInput,
  ReplaceManyTemplateElementInput,
  ReplaceTemplateInput,
} from '@be-templates/types';

@Injectable()
class TemplatesService {
  constructor(
    private readonly prismaService: TemplatesPagesPrismaWriteModelClient,
    private readonly templateElementsService: TemplateElementsService,
  ) {}

  async create({ elements, ...templatePayload }: CreateTemplateInput) {
    return await this.prismaService.$transaction(async (tx) => {
      /**
       * Create new template
       */
      const newTemplate = await tx.template.create({
        data: {
          ...templatePayload,
        },
        include: { elements: true },
      });

      /**
       * Return the created template if nothing more to create
       */
      if (elements.length === 0) {
        return newTemplate;
      }

      /**
       * Create new template elements
       */
      await callWithInjectedPrismaTransaction({
        tx,
        service: this.templateElementsService,
        method: 'createMany',
        args: [elements],
      });

      /**
       * Return new template filled with new elements
       */
      return tx.template.findUniqueOrThrow({
        where: { id: newTemplate.id },
        include: { elements: true },
      });
    });
  }

  async replace({ id, elements, ...templatePayload }: ReplaceTemplateInput) {
    return await this.prismaService.$transaction(async (tx) => {
      /**
       * Get old template with elements
       */
      const oldTemplate = await tx.template.findUniqueOrThrow({
        where: { id },
        include: { elements: true },
      });

      /**
       * Handle replace of elements
       */
      await this.handleReplaceOfElements(oldTemplate, elements, tx);

      /**
       * Update current template
       */
      return await tx.template.update({
        where: { id },
        data: templatePayload,
        include: { elements: true },
      });
    });
  }

  private async handleReplaceOfElements(
    oldTemplate: Template & { elements: TemplateElement[] },
    newElements: CreateManyTemplateElementInput[],
    tx: Prisma.TransactionClient,
  ) {
    /**
     * Prepare elements
     */
    const {
      added: addedElements,
      removed: removedElementIds,
      same: sameElements,
    } = this.prepareElementsOnReplace(oldTemplate.elements, newElements);

    /**
     * Create added elements
     */
    await callWithInjectedPrismaTransaction({
      tx,
      service: this.templateElementsService,
      method: 'createMany',
      args: [addedElements],
    });

    /**
     * Update same template elements
     */
    await callWithInjectedPrismaTransaction({
      tx,
      service: this.templateElementsService,
      method: 'replaceMany',
      args: [sameElements],
    });

    /**
     * Delete removed template elements
     */
    await callWithInjectedPrismaTransaction({
      tx,
      service: this.templateElementsService,
      method: 'deleteMany',
      args: [
        {
          id: { in: removedElementIds },
        },
      ],
    });
  }

  private prepareElementsOnReplace(oldElements: TemplateElement[], newElements: CreateManyTemplateElementInput[]) {
    const added: CreateManyTemplateElementInput[] = [];
    const removed: string[] = [];
    const same: ReplaceManyTemplateElementInput[] = [];

    newElements.forEach((newElement) => {
      /** Find same and added elements */
      if (this.includesElement(oldElements, newElement)) {
        same.push(newElement);
      } else {
        added.push(newElement);
      }
    });

    /** Find removed elements */
    oldElements.forEach((oldElement) => {
      if (!this.includesElement(newElements, oldElement)) {
        removed.push(oldElement.id);
      }
    });

    return {
      added,
      removed,
      same,
    };
  }

  private includesElement(entities: { id: string }[], entity: { id: string }): boolean {
    return entities.some((someEntity) => someEntity.id === entity.id);
  }
}

export { TemplatesService };
export type { CreateTemplateInput, ReplaceTemplateInput };
