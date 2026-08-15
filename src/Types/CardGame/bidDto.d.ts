import { PlayerPosition } from '../../CardGame/playerPosition';
import { BidType } from '../../CardGame/bidType';

export interface BidDto
{
    Player: PlayerPosition;
    KontraPlayer?: PlayerPosition;
    ReKontraPlayer?: PlayerPosition;
    
    Type: BidType;
    NextBids: BidDto[];
}