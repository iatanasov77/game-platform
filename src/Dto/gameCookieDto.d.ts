import { PlayerColor } from '../Enum/playerColor';
import { PlayerPosition } from '../Enum/playerPosition';

export interface GameCookieDto
{
    id: string;
    game: string;
    
    myColor?: PlayerColor;
    
    myPosition?: PlayerPosition;
    myTeamMate?: PlayerPosition;
    dummyPlayer?: PlayerPosition;
    
    roomSelected: boolean;
}