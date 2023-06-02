import { Controller, Get, Post } from '@nestjs/common';
import {
  ENDPOINT_PAGES_SLUG,
  CREATE_PAGE_DRAFT_SLUG,
  ARCHIVE_PAGE_SLUG,
  PUBLISH_PAGE_SLUG,
  UNPUBLISH_PAGE_SLUG,
  SET_PAGE_ELEMENT_VALUE_SLUG,
  FIND_ONE_PAGE_SLUG,
} from './constants';

@Controller(ENDPOINT_PAGES_SLUG)
export class PagesController {
  @Post(CREATE_PAGE_DRAFT_SLUG)
  createDraft() {
    return;
  }

  @Post(ARCHIVE_PAGE_SLUG)
  archive() {
    return;
  }

  @Post(PUBLISH_PAGE_SLUG)
  publish() {
    return;
  }

  @Post(UNPUBLISH_PAGE_SLUG)
  unpublish() {
    return;
  }

  @Post(SET_PAGE_ELEMENT_VALUE_SLUG)
  setElementValue() {
    return;
  }

  @Get(FIND_ONE_PAGE_SLUG)
  findOneDraft() {
    return;
  }

  @Get()
  findMany() {
    return;
  }
}
