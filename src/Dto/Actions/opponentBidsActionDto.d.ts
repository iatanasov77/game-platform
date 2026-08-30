import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';
import { GameState } from '../../Enum/gameState';
import { BidDto } from '../CardGame/bidDto';
import { CardDto } from '../CardGame/cardDto';

export interface OpponentBidsActionDto extends ActionDto {
    bid: BidDto;
    validBids: BidDto[];
    bidHistory: BidDto[];
    nextPlayer: PlayerPosition;
    playState: GameState;
    
    MyCards: CardDto[] | undefined;
}
