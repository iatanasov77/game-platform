import { PlayerColor } from '../../BoardGame/playerColor';
import { PlayerPosition } from '../../CardGame/playerPosition';

export interface GameCookieDto
{
    id: string;
    game: string;
    
    color?: PlayerColor;
    position?: PlayerPosition;
    
    roomSelected: boolean;
}