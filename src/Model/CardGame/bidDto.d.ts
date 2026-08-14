import { PlayerPosition } from './playerPosition';
import { BidType } from './bidType';

export interface BidDto
{
    Player: PlayerPosition;
    KontraPlayer?: PlayerPosition;
    ReKontraPlayer?: PlayerPosition;
    
    Type: BidType;
    NextBids: BidDto[];
}