import { ChessPieceType } from '../../BoardGame/chessPieceType';
import { PlayerColor } from '../../BoardGame/playerColor';

export interface ChessPieceDto
{
    Type: ChessPieceType;
    Side: PlayerColor;
    Moves: number;
}