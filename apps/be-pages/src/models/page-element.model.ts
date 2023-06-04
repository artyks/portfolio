import { CreatePageElementDtoType } from '@be-pages/dtos';
import { CreatePageElementValue, SetPageElementValue } from '@be-pages/types';
import { TemplateElementType } from '@be-templates/constants';
import { InternalServerErrorException } from '@nestjs/common';
import { PageElement, Prisma } from '@prisma-clients/templates-pages-write-model';

type PageElementUpdate = { where: { id: string }; data: Prisma.PageElementUpdateInput };

class PageElementModel<PayloadT extends CreatePageElementDtoType | PageElement> {
  private id?: string;
  private templateElementId: string;
  private pageId: string;
  private type: TemplateElementType;
  private value: CreatePageElementValue | SetPageElementValue;

  constructor(payload: PayloadT) {
    this.initElement(payload);
  }

  getElementCreateInput(): Prisma.PageElementCreateInput {
    return {
      valueJsonString: JSON.stringify(this.value),
      page: { connect: { id: this.pageId } },
      templateElement: { connect: { id: this.templateElementId } },
      type: this.type,
    };
  }

  getElementUpdate(): PageElementUpdate {
    const id = this.validateIdOrThrow(this.id);
    return {
      where: { id },
      data: {
        valueJsonString: JSON.stringify(this.value),
      },
    };
  }

  setElementValue(newValue: SetPageElementValue) {
    this.value = newValue;
  }

  private initElement(payload: PayloadT) {
    if ('id' in payload) {
      this.id = payload.id;
    }
    if ('value' in payload) {
      this.value = payload.value;
    }
    this.templateElementId = payload.templateElementId;
    this.pageId = payload.pageId;
    this.type = payload.type as TemplateElementType;
  }

  private validateIdOrThrow(id?: string): string {
    if (!id) {
      throw new InternalServerErrorException('Set page element id first');
    }
    return id;
  }
}

export { PageElementModel };
