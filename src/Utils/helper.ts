import { CardSuit } from '../Enum/cardSuit';
import { BridgeBeloteCardType } from '../Enum/bridgeBeloteCardType';
import { ContractBridgeCardType } from '../Enum/contractBridgeCardType';
import { PlayerPosition } from '../Enum/playerPosition';
import { BidTrump } from '../Enum/bidTrump';

export class Helper
{
    public static delay( ms: number )
    {
        return new Promise( ( resolve ) => setTimeout( resolve, ms ) );
    }
    
    public static splitAtN( arrayToSplit: any[], n: number )
    {
        const output = [], i = 0;
        
        while ( arrayToSplit.length ) {
            output.push( arrayToSplit.slice( i == 0 ? 0 : i + 1, i + n ) );
            arrayToSplit = arrayToSplit.slice( i + n );
        }
        
        return output;
    }
    
    public static cardSuit( suit: CardSuit ): string
    {
        switch( suit ) {
            case CardSuit.Club:
                return 'Club';
                break;
            case CardSuit.Diamond:
                return 'Diamond';
                break;
            case CardSuit.Heart:
                return 'Heart';
                break;
            case CardSuit.Spade:
                return 'Spade';
                break;
            default:
                throw new Error( `Invalid Card Suit ${suit}` );
        }
    }
    
    public static bridgeBeloteCardType( type: BridgeBeloteCardType ): string
    {
        switch( type ) {
            case BridgeBeloteCardType.Seven:
                return 'Seven';
                break;
            case BridgeBeloteCardType.Eight:
                return 'Eight';
                break;
            case BridgeBeloteCardType.Nine:
                return 'Nine';
                break;
            case BridgeBeloteCardType.Ten:
                return 'Ten';
                break;
            case BridgeBeloteCardType.Jack:
                return 'Jack';
                break;
            case BridgeBeloteCardType.Queen:
                return 'Queen';
                break;
            case BridgeBeloteCardType.King:
                return 'King';
                break;
            case BridgeBeloteCardType.Ace:
                return 'Ace';
                break;
            default:
                throw new Error( `Invalid Card Type ${type}` );
        }
    }
    
    public static contractBridgeCardType( type: ContractBridgeCardType ): string
    {
        switch( type ) {
            case ContractBridgeCardType.Two:
                return 'Two';
                break;
            case ContractBridgeCardType.Three:
                return 'Three';
                break;
            case ContractBridgeCardType.Four:
                return 'Four';
                break;
            case ContractBridgeCardType.Five:
                return 'Five';
                break;
            case ContractBridgeCardType.Six:
                return 'Six';
                break;
            case ContractBridgeCardType.Seven:
                return 'Seven';
                break;
            case ContractBridgeCardType.Eight:
                return 'Eight';
                break;
            case ContractBridgeCardType.Nine:
                return 'Nine';
                break;
            case ContractBridgeCardType.Ten:
                return 'Ten';
                break;
            case ContractBridgeCardType.Jack:
                return 'Jack';
                break;
            case ContractBridgeCardType.Queen:
                return 'Queen';
                break;
            case ContractBridgeCardType.King:
                return 'King';
                break;
            case ContractBridgeCardType.Ace:
                return 'Ace';
                break;
            default:
                throw new Error( `Invalid Card Type ${type}` );
        }
    }
    
    public static cardgamePlayerPosition( position: PlayerPosition ): string
    {
        switch( position ) {
            case PlayerPosition.south:
                return 'South';
                break;
            case PlayerPosition.east:
                return 'East';
                break;
            case PlayerPosition.north:
                return 'North';
                break;
            case PlayerPosition.west:
                return 'West';
                break;
            default:
                return 'Neither';
        }
    }
    
    public static shortBidTrump( trump: BidTrump ): string
    {
        switch( trump ) {
            case BidTrump.Clubs:
                return 'C';
                break;
            case BidTrump.Diamonds:
                return 'D';
                break;
            case BidTrump.Hearts:
                return 'H';
                break;
            case BidTrump.Spades:
                return 'S';
                break;
            case BidTrump.NoTrumps:
                return 'BE';
                break;
            case BidTrump.AllTrumps:
                return 'J';
                break;
            default:
                return 'Neither';
        }
    }
}
