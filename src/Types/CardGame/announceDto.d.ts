import { PlayerPosition } from '../../CardGame/playerPosition';
import { AnnounceType } from '../../CardGame/announceType';
import { CardDto } from './cardDto';

export interface AnnounceDto
{
    Player: PlayerPosition;
    Type: AnnounceType;
    Card: CardDto;
}