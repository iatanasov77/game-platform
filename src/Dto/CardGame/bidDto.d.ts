import { PlayerPosition } from '../../Enum/playerPosition';
import { BidType } from '../../Enum/bidType';

export interface BidDto
{
    Player: PlayerPosition;
    KontraPlayer?: PlayerPosition;
    ReKontraPlayer?: PlayerPosition;
    
    Type: BidType;
    NextBids: BidDto[];
}