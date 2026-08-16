import { ActionDto } from './actionDto';

import { BidDto } from '../CardGame/bidDto';

export interface BidMadeActionDto extends ActionDto {
    bid: BidDto;
}
