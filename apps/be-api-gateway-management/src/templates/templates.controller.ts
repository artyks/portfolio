import { Body, Controller, Get, Inject, NotFoundException, Param, Post, Query } from '@nestjs/common';
import {
  ARCHIVE_TEMPLATE_SLUG,
  CREATE_TEMPLATE_SLUG,
  ENDPOINT_TEMPLATES_SLUG,
  FIND_ONE_TEMPLATE_SLUG,
  PUBLISH_TEMPLATE_SLUG,
  REPLACE_TEMPLATE_SLUG,
} from './templates.constants';
import { FindManyTemplatesQueryResult, FindOneTemplateQueryResult } from '@be-templates/types';
import {
  ArchiveTemplateDto,
  ArchiveTemplateGatewayDto,
  CreateTemplateDto,
  CreateTemplateGatewayDto,
  FindManyTemplatesDto,
  FindOneTemplateDto,
  PublishTemplateDto,
  PublishTemplateGatewayDto,
  ReplaceTemplateDto,
  ReplaceTemplateGatewayDto,
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
import { UserWithoutPassword } from '@be-authentication/types';
import { User } from '@be-authentication/decorators';

@Controller(ENDPOINT_TEMPLATES_SLUG)
export class TemplatesController {
  constructor(@Inject(TEMPLATES_CLIENT_NAME) private readonly templatesClient: ClientProxy) {}

  @Post(CREATE_TEMPLATE_SLUG)
  create(@Body() payload: CreateTemplateGatewayDto, @User() { id }: UserWithoutPassword) {
    this.templatesClient.emit<unknown, CreateTemplateDto>(CREATE_TEMPLATE_EVENT, { ...payload, userId: id });
  }

  @Post(ARCHIVE_TEMPLATE_SLUG)
  archive(@Body() payload: ArchiveTemplateGatewayDto, @User() { id }: UserWithoutPassword) {
    this.templatesClient.emit<unknown, ArchiveTemplateDto>(ARCHIVE_TEMPLATE_EVENT, { ...payload, userId: id });
  }

  @Post(PUBLISH_TEMPLATE_SLUG)
  publish(@Body() payload: PublishTemplateGatewayDto, @User() { id }: UserWithoutPassword) {
    this.templatesClient.emit<unknown, PublishTemplateDto>(PUBLISH_TEMPLATE_EVENT, { ...payload, userId: id });
  }

  @Post(REPLACE_TEMPLATE_SLUG)
  replace(@Body() payload: ReplaceTemplateGatewayDto, @User() { id }: UserWithoutPassword) {
    this.templatesClient.emit<unknown, ReplaceTemplateDto>(REPLACE_TEMPLATE_EVENT, { ...payload, userId: id });
  }

  @Get(FIND_ONE_TEMPLATE_SLUG)
  async findOne(@Param() payload: FindOneTemplateDto) {
    const findTemplateQuery$ = this.templatesClient.send<FindOneTemplateQueryResult>(
      FIND_ONE_TEMPLATE_MESSAGE,
      payload,
    );
    const template = await firstValueFrom(findTemplateQuery$);
    if (template === null) {
      throw new NotFoundException();
    }
    return template;
  }

  @Get()
  async findMany(@Query() payload: FindManyTemplatesDto) {
    const findTemplatesQuery$ = this.templatesClient.send<FindManyTemplatesQueryResult>(
      FIND_MANY_TEMPLATES_MESSAGE,
      payload,
    );
    return await firstValueFrom(findTemplatesQuery$);
  }
}
