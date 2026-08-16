import { ActionDto } from './actionDto';

import { CardGameDto } from '../CardGame/gameDto';
import { NewScoreDto } from '../newScoreDto';

export interface CardGameEndedActionDto extends ActionDto {
    game: CardGameDto;
    newScore: NewScoreDto;
}
