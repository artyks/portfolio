import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ARCHIVE_TEMPLATE_SLUG,
  CREATE_TEMPLATE_SLUG,
  ENDPOINT_TEMPLATES_SLUG,
  FIND_ONE_TEMPLATE_SLUG,
  PUBLISH_TEMPLATE__SLUG,
  REPLACE_TEMPLATE_SLUG,
} from './templates.constants';

import { ArchiveTemplateDto, CreateTemplateDto, PublishTemplateDto, ReplaceTemplateDto } from '@be-templates/dtos';
import { FindOneTemplateParams } from './templates.dto';

@Controller(ENDPOINT_TEMPLATES_SLUG)
export class TemplatesController {
  @Post(CREATE_TEMPLATE_SLUG)
  create(@Body() payload: CreateTemplateDto) {
    return;
  }

  @Post(ARCHIVE_TEMPLATE_SLUG)
  archive(@Body() payload: ArchiveTemplateDto) {
    return;
  }

  @Post(PUBLISH_TEMPLATE__SLUG)
  publish(@Body() payload: PublishTemplateDto) {
    return;
  }

  @Post(REPLACE_TEMPLATE_SLUG)
  replace(@Body() payload: ReplaceTemplateDto) {
    return;
  }

  @Get(FIND_ONE_TEMPLATE_SLUG)
  findOne(@Param() { id }: FindOneTemplateParams) {
    return;
  }

  @Get()
  findMany() {
    return;
  }
}
