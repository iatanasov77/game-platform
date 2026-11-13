import { MercureActionDto } from './mercureActionDto';
import { IPlayer } from '../../PlayerInterface'

export interface MercureDisconnectPlayerActionDto extends MercureActionDto {
    player: IPlayer;
}
