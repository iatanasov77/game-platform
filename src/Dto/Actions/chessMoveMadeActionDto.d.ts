import { ActionDto } from './actionDto';

import { ChessMoveDto } from '../BoardGame/chessMoveDto';

export interface ChessMoveMadeActionDto extends ActionDto {
    move?: ChessMoveDto;
}
