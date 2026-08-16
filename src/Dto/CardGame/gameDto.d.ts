import { GameDto } from '../gameDto';
import { CardGamePlayerDto } from './playerDto';
import { PlayerPosition } from '../../Enum/playerPosition';
import { CardGameTeam } from '../../Enum/cardGameTeam'

export interface CardGameDto extends GameDto {
    players: CardGamePlayerDto[];
    validBids: any;
    validCards: any;
    contract: any;
    
    currentPlayer: PlayerPosition;
    winner: CardGameTeam;
    thinkTime: number;
    
    FirstToPlayInTheRound: PlayerPosition;
    RoundNumber: number;
    TrickNumber: number;
    
    SouthNorthPoints: number;
    EastWestPoints: number;
    
    MyCards: any;
    Bids: any;
}