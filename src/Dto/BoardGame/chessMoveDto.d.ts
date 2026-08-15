import { PlayerColor } from '../../Enum/playerColor';
import { ChessMoveType } from '../../Enum/chessMoveType';
import { ChessPieceType } from '../../Enum/chessPieceType';

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