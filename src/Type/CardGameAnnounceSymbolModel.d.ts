import { BidType } from '../Enum/bidType';

export interface CardGameAnnounceSymbolModel
{
    id: BidType;
    key: string;
    tooltip: string;
    value: string;
}