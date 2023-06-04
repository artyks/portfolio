import { CreatePageDto, CreatePageElementDtoType } from '@be-pages/dtos';
import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Page, Prisma } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from './page-element.model';

type PageUpdate = { where: { id: string }; data: Prisma.PageUpdateInput };

class PageModel<PayloadT extends CreatePageDto | Page> extends AggregateRoot {
  private id?: string;
  private name: string;
  private codename: string;
  private templateId: string;
  private isPublished: boolean;
  private isArchived: boolean;
  private elementsCreateDtos?: CreatePageElementDtoType[];

  constructor(payload: PayloadT) {
    super();
    this.initPage(payload);
  }

  publishPage() {
    this.validateIdOrThrow(this.id);
    this.isPublished = true;
    // this.apply(
    //   new PagePublished(),
    // )
  }

  unpublishPage() {
    this.validateIdOrThrow(this.id);
    this.isPublished = false;
    // this.apply(
    //   new PageUnpublished(),
    // )
  }

  archivePage() {
    this.validateIdOrThrow(this.id);
    this.isArchived = true;
    // this.apply(
    //   new PageArchived(),
    // )
  }

  getPageCreateInput(): Prisma.PageCreateInput {
    if (!this.elementsCreateDtos) {
      throw new BadRequestException('Set page id first');
    }
    return {
      codename: this.codename,
      name: this.name,
      template: { connect: { id: this.templateId } },
      isPublished: this.isPublished,
      isArchived: this.isArchived,
      elements: {
        create: [
          ...this.elementsCreateDtos.map((createElementDto) =>
            new PageElementModel(createElementDto).getElementCreateInput(),
          ),
        ],
      },
    };
  }

  getPageUpdate(): PageUpdate {
    const id = this.validateIdOrThrow(this.id);
    return {
      where: { id },
      data: {
        codename: this.codename,
        isPublished: this.isPublished,
        name: this.name,
      },
    };
  }

  private initPage(payload: PayloadT) {
    if (payload instanceof CreatePageDto) {
      /* Handle create dto */
      this.name = payload.name;
      this.codename = payload.codename;
      this.templateId = payload.templateId;
      this.elementsCreateDtos = payload.elements;
    } else {
      /* Handle page retrieved from database */
      this.id = payload.id;
      this.isArchived = payload.isArchived;
      this.isPublished = payload.isPublished;
      this.name = payload.name;
      this.codename = payload.codename;
      this.templateId = payload.templateId;
    }
  }

  private validateIdOrThrow(id?: string): string {
    if (!id) {
      throw new BadRequestException('Set page id first');
    }
    return id;
  }
}

export { PageModel };
