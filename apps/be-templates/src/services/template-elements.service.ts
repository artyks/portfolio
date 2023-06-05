import { CreateManyTemplateElementInput, ReplaceManyTemplateElementInput } from '@be-templates/types';
import { Injectable } from '@nestjs/common';

import { TemplatesPagesPrismaWriteModelClient, Prisma } from '@prisma-clients/templates-pages-write-model';

@Injectable()
class TemplateElementsService {
  constructor(private readonly prismaService: TemplatesPagesPrismaWriteModelClient) {}

  getThis() {
    return this;
  }

  async createMany(elements: CreateManyTemplateElementInput[]) {
    return await this.prismaService.$transaction(async (tx) => {
      /**
       * Create new template elements
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const createElementsPromises = elements.map(async ({ prevElementId, ...payload }) => {
        return await tx.templateElement.create({
          data: {
            id: payload.id,
            codename: payload.codename,
            name: payload.name,
            type: payload.type,
            template: payload.template,
          },
        });
      });

      await Promise.all(createElementsPromises);

      /**
       * Connect new template elements with their prevElements
       */
      const connectPrevElementsPromises = elements.map(async ({ id, prevElementId }) => {
        return await tx.templateElement.update({
          where: { id },
          data: {
            prevElement: prevElementId ? { connect: { id: prevElementId } } : undefined,
          },
        });
      });

      return await Promise.all(connectPrevElementsPromises);
    });
  }

  async deleteMany(where: Prisma.TemplateElementWhereInput) {
    return await this.prismaService.templateElement.deleteMany({ where });
  }

  /**
   * Note: Previous elements must be already created, otherwise transaction will fail
   */
  async replaceMany(elements: ReplaceManyTemplateElementInput[]) {
    return await this.prismaService.$transaction(async (tx) => {
      const replaceElementsPromises = elements.map(async ({ id, prevElementId, ...payload }) => {
        return await tx.templateElement.update({
          where: { id },
          data: {
            codename: payload.codename,
            name: payload.name,
            prevElement: prevElementId ? { connect: { id: prevElementId } } : { disconnect: true },
          },
        });
      });
      return await Promise.all(replaceElementsPromises);
    });
  }
}

export { TemplateElementsService };
