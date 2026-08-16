import { ChessPieceType } from '../../Enum/chessPieceType';
import { PlayerColor } from '../../Enum/playerColor';

export interface ChessPieceDto
{
    Type: ChessPieceType;
    Side: PlayerColor;
    Moves: number;
}