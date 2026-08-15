import { PlayerPosition } from '../../Enum/playerPosition';
import { AnnounceType } from '../../Enum/announceType';
import { CardDto } from './cardDto';

export interface AnnounceDto
{
    Player: PlayerPosition;
    Type: AnnounceType;
    Card: CardDto;
}