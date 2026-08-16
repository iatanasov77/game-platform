import { ActionDto } from './actionDto';

import { ChessMoveDto } from '../BoardGame/chessMoveDto';
import { BoardGameDto } from '../BoardGame/gameDto';
import { PlayerColor } from '../../Enum/playerColor';

export interface ChessOpponentMoveActionDto extends ActionDto {
    move?: ChessMoveDto;
    myColor: PlayerColor;
    
    game?: BoardGameDto;
    moveTimer?: number;
}
