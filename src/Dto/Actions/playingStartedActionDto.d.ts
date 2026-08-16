import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';
import { CardDto } from '../CardGame/cardDto';
import { BidDto } from '../CardGame/bidDto';
import { AnnounceDto } from '../CardGame/announceDto';

export interface PlayingStartedActionDto extends ActionDto {
    deck: CardDto[];
    playerCards: Array<CardDto[]>;
    playerAnnounces: Array<AnnounceDto[]>;
    firstToPlay: PlayerPosition;
    contract: BidDto
    validCards: CardDto[];
    timer: number;
}
