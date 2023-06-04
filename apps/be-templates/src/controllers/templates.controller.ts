import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import {
  ArchiveTemplateDto,
  CreateTemplateDto,
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

@Controller()
export class TemplatesController {
  @EventPattern(CREATE_TEMPLATE_EVENT)
  handleTemplateCreate(@Payload() payload: CreateTemplateDto) {
    return;
  }

  @EventPattern(ARCHIVE_TEMPLATE_EVENT)
  handleTemplateArchive(@Payload() payload: ArchiveTemplateDto) {
    return;
  }

  @EventPattern(PUBLISH_TEMPLATE_EVENT)
  handleTemplatePublish(@Payload() payload: PublishTemplateDto) {
    return;
  }

  @EventPattern(REPLACE_TEMPLATE_EVENT)
  handleTemplateReplace(@Payload() payload: ReplaceTemplateDto) {
    return;
  }

  @MessagePattern(FIND_ONE_TEMPLATE_MESSAGE)
  findOne(@Payload() payload: FindOneTemplateDto) {
    return;
  }

  @MessagePattern(FIND_MANY_TEMPLATES_MESSAGE)
  findMany() {
    return;
  }
}
