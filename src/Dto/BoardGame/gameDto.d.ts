import { PlayerColor } from '../../Enum/playerColor';

import { GameDto } from '../gameDto';
import { BoardGamePlayerDto } from './playerDto';
import { PointDto } from './pointDto';
import { MoveDto } from './moveDto';
import { ChessSquareDto } from './chessSquareDto';

export interface BoardGameDto extends GameDto {
    blackPlayer: BoardGamePlayerDto;
    whitePlayer: BoardGamePlayerDto;
    currentPlayer: PlayerColor;
    winner: PlayerColor;
    points: PointDto[];
    squares: ChessSquareDto[];
    validMoves: MoveDto[];
    thinkTime: number;
    goldMultiplier: number;
    isGoldGame: boolean;
    lastDoubler?: PlayerColor;
    stake: number;
}