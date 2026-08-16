import { ActionDto } from './actionDto';

import { CardGameDto } from '../CardGame/gameDto';
import { PlayerPosition } from '../../Enum/playerPosition';

export interface CardGameCreatedActionDto extends ActionDto {
    game: CardGameDto;
    myPosition: PlayerPosition;
}
