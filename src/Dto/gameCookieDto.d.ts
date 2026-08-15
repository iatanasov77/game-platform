import { PlayerColor } from '../Enum/playerColor';
import { PlayerPosition } from '../Enum/playerPosition';

export interface GameCookieDto
{
    id: string;
    game: string;
    
    color?: PlayerColor;
    position?: PlayerPosition;
    
    roomSelected: boolean;
}