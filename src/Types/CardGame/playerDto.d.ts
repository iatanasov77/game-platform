import { PlayerDto } from '../Core/playerDto';
import { PlayerPosition } from '../../CardGame/playerPosition';

export interface CardGamePlayerDto extends PlayerDto {
    playerPosition: PlayerPosition;
}