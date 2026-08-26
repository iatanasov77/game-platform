import { PlayerPosition } from '../../Enum/playerPosition';
import { BidTrump } from '../../Enum/bidTrump';

export interface BidDto
{
    Player: PlayerPosition;
    KontraPlayer?: PlayerPosition;
    ReKontraPlayer?: PlayerPosition;
    
    Trump: BidTrump;
    LastBid: boolean;
    NextBids: BidDto[];
}