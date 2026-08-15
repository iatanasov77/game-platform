import { PlayerColor } from '../../BoardGame/playerColor';
import { ChessMoveType } from '../../BoardGame/chessMoveType';
import { ChessPieceType } from '../../BoardGame/chessPieceType';

export interface ChessMoveDto
{
    color: PlayerColor;
    type: ChessMoveType;
    from: string;
    to: string;
    
    causeCheck: boolean;
    
    piece: ChessPieceType;
    capturedPiece?: ChessPieceType;
    promoPiece?: ChessPieceType;
    enpassantPiece?: ChessPieceType;
    
    nextMoves: ChessMoveDto[];
    totalMoves: ChessMoveDto[];
    
    animate: boolean;
    hint: boolean;
}