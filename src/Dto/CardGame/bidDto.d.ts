import { PlayerPosition } from '../../Enum/playerPosition';
import { BidTrump } from '../../Enum/bidTrump';

export interface BidDto
{
    Player: PlayerPosition;
    BidOwner?: PlayerPosition; // Used in Contract Bridge
    
    KontraPlayer?: PlayerPosition;
    ReKontraPlayer?: PlayerPosition;
    
    Trump: BidTrump;
    LastBid: boolean;
    NextBids: BidDto[];
}