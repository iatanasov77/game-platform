import { ActionDto } from './actionDto';

import { ChessMoveDto } from '../BoardGame/chessMoveDto';

export interface ChessInvalidMoveMadeActionDto extends ActionDto {
    move: ChessMoveDto;
}
