import { GameState } from '../Enum/gameState';
import { GamePlayersList } from './gamePlayersList';

export interface GameDto {
    id: string;
    gameCode: string;
    playState: GameState;
    
    players: GamePlayersList;
}