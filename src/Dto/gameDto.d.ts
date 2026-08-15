import { GameState } from '../Enum/gameState';

export interface GameDto {
    id: string;
    gameCode: string;
    playState: GameState;
}