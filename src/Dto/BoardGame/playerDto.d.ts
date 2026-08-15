import { PlayerColor } from '../../Enum/playerColor';
import { PlayerDto } from '../playerDto';

export interface BoardGamePlayerDto extends PlayerDto {
    playerColor: PlayerColor;
    pointsLeft: number;
    elo: number;
    gold: number;
}