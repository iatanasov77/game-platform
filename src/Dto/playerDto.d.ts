import { PlayerColor } from '../Enum/playerColor';
import { PlayerPosition } from '../Enum/playerPosition';

export interface PlayerDto {
    name: string;
    photoUrl: string;
    
    playerColor?: PlayerColor;
    playerPosition?: PlayerPosition;
    
    pointsLeft: number;
    elo: number;
    gold: number;
    
    // My Property to Detect If Player is AI in Frontend
    isAi: boolean;
}