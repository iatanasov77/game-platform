import { IGameRoom } from './GameRoomInterface';

export interface IPlayer
{
    rooms: IGameRoom[];
    
    id: number;
    type: string;
    name: string;
    connected: any;
}