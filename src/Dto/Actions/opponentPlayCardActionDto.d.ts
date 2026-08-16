import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';
import { CardDto } from '../CardGame/cardDto';

export interface OpponentPlayCardActionDto extends ActionDto {
    Card: CardDto;
    Belote: boolean;
    Player: PlayerPosition;
    TrickNumber: number;
    
    validCards: CardDto[];
    nextPlayer: PlayerPosition;
}
