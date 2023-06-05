import { BadRequestException } from '@nestjs/common';
import { Prisma, Template } from '@prisma-clients/templates-pages-write-model';
import { CreateTemplateDto, CreateTemplateElementDto } from '@be-templates/dtos';
import { CreateTemplateInput, ReplaceTemplateInput } from '../services/templates.service';
import { generateCodename } from '@common/utility';
import { DEFAULT_TEMPLATE_ELEMENT_NAME } from '@be-templates/constants';
import { AggregateRoot } from '@nestjs/cqrs';

type TemplateUpdate = { where: { id: string }; data: Prisma.TemplateUpdateInput };

class TemplateModel<PayloadT extends CreateTemplateDto | Template> extends AggregateRoot {
  private id: string;
  private name: string;
  private codename: string;
  private isPublished: boolean;
  private isArchived: boolean;
  private elementsCreateDtos?: CreateTemplateElementDto[];

  constructor(payload: PayloadT) {
    super();
    this.initTemplate(payload);
  }

  publishTemplate() {
    this.isPublished = true;
  }

  unpublishTemplate() {
    this.isPublished = false;
  }

  archiveTemplate() {
    this.isArchived = true;
  }

  getTemplateCreateInput(): CreateTemplateInput {
    if (!this.elementsCreateDtos) {
      throw new BadRequestException('No template elementsCreateDtos setted');
    }
    return {
      codename: this.codename,
      name: this.name,
      isPublished: this.isPublished,
      isArchived: this.isArchived,
      elements: this.elementsCreateDtos.map((createElementDto, index, createElementDtoList) => {
        return {
          ...createElementDto,
          template: { connect: { id: this.id } },
          name: createElementDto.name || DEFAULT_TEMPLATE_ELEMENT_NAME,
          codename: generateCodename(createElementDto.name || DEFAULT_TEMPLATE_ELEMENT_NAME),
          prevElementId: this.getPrevElementId(index, createElementDtoList),
        };
      }),
    };
  }

  getTemplateReplaceInput(): ReplaceTemplateInput {
    if (!this.elementsCreateDtos) {
      throw new BadRequestException('No template elementsCreateDtos setted');
    }
    return {
      ...this.getTemplateCreateInput(),
      id: this.id,
    };
  }

  getTemplateUpdateWithoutElements(): TemplateUpdate {
    return {
      where: { id: this.id },
      data: {
        name: this.name,
        codename: this.codename,
        isPublished: this.isPublished,
        isArchived: this.isArchived,
      },
    };
  }

  private initTemplate(payload: PayloadT) {
    this.name = payload.name;
    this.codename = generateCodename(payload.name);
    if (payload instanceof CreateTemplateDto) {
      /* Handle create dto */
      this.id = crypto.randomUUID();
      this.elementsCreateDtos = payload.elements;
    } else {
      /* Handle template retrieved from database */
      this.id = payload.id;
      this.isArchived = payload.isArchived;
      this.isPublished = payload.isPublished;
      this.codename = payload.codename;
    }
  }

  private getPrevElementId(index: number, list: { id: string }[]) {
    return index === 0 ? null : list[index - 1].id;
  }
}

export { TemplateModel };
