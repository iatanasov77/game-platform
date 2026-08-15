import { PlayerDto } from '../playerDto';
import { PlayerPosition } from '../../Enum/playerPosition';

export interface CardGamePlayerDto extends PlayerDto {
    playerPosition: PlayerPosition;
}