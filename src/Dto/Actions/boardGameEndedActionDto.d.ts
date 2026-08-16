import { ActionDto } from './actionDto';

import { BoardGameDto } from '../BoardGame/gameDto';
import { NewScoreDto } from '../newScoreDto';

export interface BoardGameEndedActionDto extends ActionDto {
    game: BoardGameDto;
    newScore: NewScoreDto;
}
