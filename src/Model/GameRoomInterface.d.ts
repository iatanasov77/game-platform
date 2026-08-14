import { IGame } from './GameInterface'
import { IPlayer } from './PlayerInterface'

export interface IGameRoom
{
    id: number;
    isPlaying: boolean;
    game: IGame;
    slug: string;
    name: string;
    players: IPlayer[];
}