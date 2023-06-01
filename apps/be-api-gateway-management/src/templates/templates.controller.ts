import { Controller, Get, Post } from '@nestjs/common';
import {
  ARCHIVE_TEMPLATE_SLUG,
  CREATE_TEMPLATE_SLUG,
  ENDPOINT_TEMPLATES_SLUG,
  FIND_MANY_TEMPLATES_SLUG,
  FIND_ONE_TEMPLATE_SLUG,
  PUBLISH_TEMPLATE__SLUG,
  REPLACE_TEMPLATE_SLUG,
} from './templates.constants';

@Controller(ENDPOINT_TEMPLATES_SLUG)
export class TemplatesController {
  @Post(CREATE_TEMPLATE_SLUG)
  create() {
    return;
  }

  @Post(ARCHIVE_TEMPLATE_SLUG)
  archive() {
    return;
  }

  @Post(PUBLISH_TEMPLATE__SLUG)
  publish() {
    return;
  }

  @Post(REPLACE_TEMPLATE_SLUG)
  replace() {
    return;
  }

  @Get(FIND_ONE_TEMPLATE_SLUG)
  findOne() {
    return;
  }

  @Get(FIND_MANY_TEMPLATES_SLUG)
  findMany() {
    return;
  }
}
