import { ChessPieceType } from './chessPieceType';
import { PlayerColor } from './playerColor';

export interface ChessPieceDto
{
    Type: ChessPieceType;
    Side: PlayerColor;
    Moves: number;
}