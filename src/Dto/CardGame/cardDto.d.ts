import { CardSuit } from '../../Enum/cardSuit';
import { BridgeBeloteCardType } from '../../Enum/bridgeBeloteCardType';
import { ContractBridgeCardType } from '../../Enum/contractBridgeCardType';
import { PlayerPosition } from '../../Enum/playerPosition';

export interface CardDto
{
    Suit: CardSuit;
    Type: BridgeBeloteCardType | ContractBridgeCardType;
    
    position: PlayerPosition;
    cardIndex: string;
    animate: boolean;
}