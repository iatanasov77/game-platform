import { GameDto } from '../gameDto';
import { CardGamePlayerDto } from './playerDto';
import { PlayerPosition } from '../../Enum/playerPosition';
import { CardGameTeam } from '../../Enum/cardGameTeam'

export interface CardGameDto extends GameDto {
    players: CardGamePlayerDto[];
    validBids: any;
    validCards: any;
    bidHistory: any;
    contract: any;
    
    DummyPlayer: PlayerPosition;
    DummyOwner: PlayerPosition;
    currentPlayer: PlayerPosition;
    
    thinkTime: number;
    
    FirstToPlayInTheRound: PlayerPosition;
    RoundNumber: number;
    TrickNumber: number;
    
    SouthNorthPoints: number;
    EastWestPoints: number;
    winner: CardGameTeam;
    
    MyCards: any;
    Bids: any;
    LastBid: boolean;
}