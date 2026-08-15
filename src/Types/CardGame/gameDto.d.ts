import { GameDto } from '../Core/gameDto';
import { CardGamePlayerDto } from './playerDto';
import { PlayerPosition } from '../../CardGame/playerPosition';
import { CardGameTeam } from '../../CardGame/cardGameTeam'

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