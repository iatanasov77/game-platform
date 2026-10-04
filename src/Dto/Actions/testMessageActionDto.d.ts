import { ActionDto } from './actionDto';
import { TestMessageDto } from '../testMessageDto';

export interface TestMessageActionDto extends ActionDto {
    message: TestMessageDto;
}
