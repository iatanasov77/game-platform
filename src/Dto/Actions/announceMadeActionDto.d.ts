import { ActionDto } from './actionDto';

import { AnnounceDto } from '../CardGame/announceDto';

export interface AnnounceMadeActionDto extends ActionDto {
    announce: AnnounceDto;
}
