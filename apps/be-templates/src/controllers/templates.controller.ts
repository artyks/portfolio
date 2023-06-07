import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import {
  ArchiveTemplateDto,
  CreateTemplateDto,
  FindManyTemplatesDto,
  FindOneTemplateDto,
  PublishTemplateDto,
  ReplaceTemplateDto,
} from '@be-templates/dtos';
import {
  CREATE_TEMPLATE_EVENT,
  ARCHIVE_TEMPLATE_EVENT,
  PUBLISH_TEMPLATE_EVENT,
  REPLACE_TEMPLATE_EVENT,
  FIND_ONE_TEMPLATE_MESSAGE,
  FIND_MANY_TEMPLATES_MESSAGE,
} from '@be-templates/constants';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTemplateCommand } from '../commands/implementations/create-template.command';
import { ArchiveTemplateCommand } from '../commands/implementations/archive-template.command';
import { PublishTemplateCommand } from '../commands/implementations/publish-template.command';
import { ReplaceTemplateCommand } from '../commands/implementations/replace-template.command';
import { FindOneTemplateQuery } from '../queries/implementations/find-one-template.query';
import { FindManyTemplatesQuery } from '../queries/implementations/find-many-templates.query';

@Controller()
export class TemplatesController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @EventPattern(CREATE_TEMPLATE_EVENT)
  async handleTemplateCreate(@Payload() payload: CreateTemplateDto) {
    return this.commandBus.execute(new CreateTemplateCommand(payload));
  }

  @EventPattern(ARCHIVE_TEMPLATE_EVENT)
  async handleTemplateArchive(@Payload() payload: ArchiveTemplateDto) {
    return this.commandBus.execute(new ArchiveTemplateCommand(payload));
  }

  @EventPattern(PUBLISH_TEMPLATE_EVENT)
  async handleTemplatePublish(@Payload() payload: PublishTemplateDto) {
    return this.commandBus.execute(new PublishTemplateCommand(payload));
  }

  @EventPattern(REPLACE_TEMPLATE_EVENT)
  async handleTemplateReplace(@Payload() payload: ReplaceTemplateDto) {
    return this.commandBus.execute(new ReplaceTemplateCommand(payload));
  }

  @MessagePattern(FIND_ONE_TEMPLATE_MESSAGE)
  findOne(@Payload() payload: FindOneTemplateDto) {
    return this.queryBus.execute(new FindOneTemplateQuery(payload));
  }

  @MessagePattern(FIND_MANY_TEMPLATES_MESSAGE)
  findMany(@Payload() payload: FindManyTemplatesDto) {
    return this.queryBus.execute(new FindManyTemplatesQuery(payload));
  }
}
