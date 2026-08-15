import { PlayerColor } from '../../BoardGame/playerColor';

export interface MoveDto
{
    color: PlayerColor;
    from: number;
    to: number;
    nextMoves: MoveDto[];
    animate: boolean;
    hint: boolean;
}