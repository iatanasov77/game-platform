import { ActionDto } from './actionDto';

import { CardGameDto } from '../CardGame/gameDto';

export interface TrickEndedActionDto extends ActionDto {
    game: CardGameDto;
}
