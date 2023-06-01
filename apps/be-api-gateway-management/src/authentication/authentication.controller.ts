import { Controller } from '@nestjs/common';
import { ENDPOINT_SLUG } from './authentication.constants';

@Controller(ENDPOINT_SLUG)
export class AuthenticationController {}
