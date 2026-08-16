import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';
import { CardDto } from '../CardGame/cardDto';
import { BidDto } from '../CardGame/bidDto';

export interface BiddingStartedActionDto extends ActionDto {
    deck: CardDto[];
    playerCards: Array<CardDto[]>;
    firstToBid: PlayerPosition;
    validBids: BidDto[];
    timer: number;
}
