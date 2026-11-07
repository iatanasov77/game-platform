import { IGame } from './GameInterface'
import { IPlayer } from './PlayerInterface'

export interface IGameRoom
{
    id: number;
    owner: string;
    
    // game: string;
    game: IGame;
    
    status: string;
    isPlaying: boolean;
    slug: string;
    name: string;
    
    players: IPlayer[];
    teams: Array<any>;
}