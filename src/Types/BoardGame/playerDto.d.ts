import { PlayerDto } from '../Core/playerDto';
import { PlayerColor } from '../../BoardGame/playerColor';

export interface BoardGamePlayerDto extends PlayerDto {
    playerColor: PlayerColor;
    pointsLeft: number;
    elo: number;
    gold: number;
}