import { ActionDto } from './actionDto';

import { PlayerColor } from '../../Enum/playerColor';
import { DiceDto } from '../BoardGame/diceDto';
import { MoveDto } from '../BoardGame/moveDto';

export interface DicesRolledActionDto extends ActionDto {
    dices: DiceDto[];
    playerToMove: PlayerColor;
    validMoves: MoveDto[];
    moveTimer: number;
}
