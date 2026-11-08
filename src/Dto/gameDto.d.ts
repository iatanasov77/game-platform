import { GameState } from '../Enum/gameState';
import { GamePlayersList } from './gamePlayersList';

export interface GameDto {
    id: string;
    gameCode: string;
    title: string;
    playState: GameState;
    
    players: GamePlayersList;
    maxPlayers: number;
    
    thinkTime: number;
    goldMultiplier: number;
    isGoldGame: boolean;
}