import { PlayerPosition } from './playerPosition';
import { AnnounceType } from './announceType';
import { CardDto } from './cardDto';

export interface AnnounceDto
{
    Player: PlayerPosition;
    Type: AnnounceType;
    Card: CardDto;
}