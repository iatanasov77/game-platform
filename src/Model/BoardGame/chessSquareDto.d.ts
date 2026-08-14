import { ChessPieceDto } from './chessPieceDto';

export interface ChessSquareDto
{
    Rank: number;
    File: string;
    Piece?: ChessPieceDto;
}