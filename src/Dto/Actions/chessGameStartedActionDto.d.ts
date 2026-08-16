import { ActionDto } from './actionDto';

import { PlayerColor } from '../../Enum/playerColor';
import { BoardGameDto } from '../BoardGame/gameDto';

export interface ChessGameStartedActionDto extends ActionDto {
    playerToMove: PlayerColor;
    moveTimer: number;
    game: BoardGameDto;
}
