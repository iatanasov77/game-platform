import { ActionDto } from './actionDto';

import { CardGameDto } from '../CardGame/gameDto';
import { PlayerPosition } from '../../Enum/playerPosition';

export interface CardGameRestoreActionDto extends ActionDto {
    game: CardGameDto;
    position: PlayerPosition;
}
