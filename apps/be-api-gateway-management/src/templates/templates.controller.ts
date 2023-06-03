import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import {
  ARCHIVE_TEMPLATE_SLUG,
  CREATE_TEMPLATE_SLUG,
  ENDPOINT_TEMPLATES_SLUG,
  FIND_ONE_TEMPLATE_SLUG,
  PUBLISH_TEMPLATE_SLUG,
  REPLACE_TEMPLATE_SLUG,
} from './templates.constants';

import {
  ArchiveTemplateDto,
  CreateTemplateDto,
  FindManyTemplatesDto,
  FindOneTemplateDto,
  PublishTemplateDto,
  ReplaceTemplateDto,
} from '@be-templates/dtos';
import { TEMPLATES_CLIENT_NAME } from '@be-templates/utility';
import { ClientProxy } from '@nestjs/microservices';
import {
  ARCHIVE_TEMPLATE_EVENT,
  CREATE_TEMPLATE_EVENT,
  FIND_MANY_TEMPLATES_MESSAGE,
  FIND_ONE_TEMPLATE_MESSAGE,
  PUBLISH_TEMPLATE_EVENT,
  REPLACE_TEMPLATE_EVENT,
} from '@be-templates/constants';
import { firstValueFrom } from 'rxjs';

@Controller(ENDPOINT_TEMPLATES_SLUG)
export class TemplatesController {
  constructor(@Inject(TEMPLATES_CLIENT_NAME) private readonly templatesClient: ClientProxy) {}

  @Post(CREATE_TEMPLATE_SLUG)
  create(@Body() payload: CreateTemplateDto) {
    this.templatesClient.emit(CREATE_TEMPLATE_EVENT, payload);
  }

  @Post(ARCHIVE_TEMPLATE_SLUG)
  archive(@Body() payload: ArchiveTemplateDto) {
    this.templatesClient.emit(ARCHIVE_TEMPLATE_EVENT, payload);
  }

  @Post(PUBLISH_TEMPLATE_SLUG)
  publish(@Body() payload: PublishTemplateDto) {
    this.templatesClient.emit(PUBLISH_TEMPLATE_EVENT, payload);
  }

  @Post(REPLACE_TEMPLATE_SLUG)
  replace(@Body() payload: ReplaceTemplateDto) {
    this.templatesClient.emit(REPLACE_TEMPLATE_EVENT, payload);
  }

  @Get(FIND_ONE_TEMPLATE_SLUG)
  async findOne(@Param() payload: FindOneTemplateDto) {
    return await firstValueFrom(this.templatesClient.send(FIND_ONE_TEMPLATE_MESSAGE, payload));
  }

  @Get()
  async findMany(@Query() payload: FindManyTemplatesDto) {
    return await firstValueFrom(this.templatesClient.send(FIND_MANY_TEMPLATES_MESSAGE, payload));
  }
}
