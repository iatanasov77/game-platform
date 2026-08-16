import { ActionDto } from './actionDto';

import { BoardGameDto } from '../BoardGame/gameDto';
import { PlayerColor } from '../../Enum/playerColor';

export interface BoardGameCreatedActionDto extends ActionDto {
    game: BoardGameDto;
    myColor: PlayerColor;
}
