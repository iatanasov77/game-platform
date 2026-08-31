import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';
import { CardDto } from '../CardGame/cardDto';

export interface DummyPlayCardActionDto extends ActionDto {
    Card: CardDto;
    Belote: boolean;
    Player: PlayerPosition;
    TrickNumber: number;
}
