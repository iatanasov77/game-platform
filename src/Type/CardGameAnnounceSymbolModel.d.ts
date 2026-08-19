import { BidTrump } from '../Enum/bidTrump';

export interface CardGameAnnounceSymbolModel
{
    id: BidTrump;
    key: string;
    tooltip: string;
    value: string;
}