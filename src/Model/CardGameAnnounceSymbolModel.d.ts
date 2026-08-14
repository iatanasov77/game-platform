import { BidType } from './CardGame/bidType';

export interface CardGameAnnounceSymbolModel
{
    id: BidType;
    key: string;
    tooltip: string;
    value: string;
}