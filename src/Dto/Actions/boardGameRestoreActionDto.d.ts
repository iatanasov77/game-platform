import { ActionDto } from './actionDto';

import { PlayerColor } from '../../Enum/playerColor';
import { BoardGameDto } from '../BoardGame/gameDto';
import { DiceDto } from '../BoardGame/diceDto';

export interface BoardGameRestoreActionDto extends ActionDto {
    game: BoardGameDto;
    color: PlayerColor;
    dices: DiceDto[];
}
