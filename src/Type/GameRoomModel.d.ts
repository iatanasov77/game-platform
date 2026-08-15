import { IGamePlayer } from './GamePlayerModel';

export interface IGameRoom
{
    id: string;
    players: Array<IGamePlayer>;
}