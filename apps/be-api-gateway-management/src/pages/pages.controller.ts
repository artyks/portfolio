import { Controller, Get, Post } from '@nestjs/common';
import {
  ENDPOINT_SLUG,
  CREATE_PAGE_DRAFT_SLUG,
  ARCHIVE_PAGE_SLUG,
  PUBLISH_PAGE_SLUG,
  UNPUBLISH_PAGE_SLUG,
  SET_PAGE_ELEMENT_VALUE_SLUG,
  FIND_ONE_PAGE_DRAFT_SLUG,
  FIND_MANY_PAGE_DRAFTS_SLUG,
  FIND_ONE_PAGE_PUBLISHED_SLUG,
  FIND_MANY_PAGES_PUBLISHED_SLUG,
} from './constants';

@Controller(ENDPOINT_SLUG)
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

  @Get(FIND_ONE_PAGE_DRAFT_SLUG)
  findOneDraft() {
    return;
  }

  @Get(FIND_MANY_PAGE_DRAFTS_SLUG)
  findManyDrafts() {
    return;
  }

  @Get(FIND_ONE_PAGE_PUBLISHED_SLUG)
  findOnePublished() {
    return;
  }

  @Get(FIND_MANY_PAGES_PUBLISHED_SLUG)
  findManyPublished() {
    return;
  }
}
