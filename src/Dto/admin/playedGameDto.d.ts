/* Auto Generated */

import { PlayerColor } from '../../Enum/playerColor';

export interface PlayedGameDto {
    utcStarted: Date;
    black: string;
    white: string;
    winner?: PlayerColor;
}
