import { GameState } from '../../gameState';

export interface GameDto {
    id: string;
    gameCode: string;
    playState: GameState;
}