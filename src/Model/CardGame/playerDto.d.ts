import { PlayerDto } from '../Core/playerDto';
import { PlayerPosition } from './playerPosition';

export interface CardGamePlayerDto extends PlayerDto {
    playerPosition: PlayerPosition;
}