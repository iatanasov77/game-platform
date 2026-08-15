import { CardSuit } from '../../CardGame/cardSuit';
import { BridgeBeloteCardType } from '../../CardGame/bridgeBeloteCardType';
import { ContractBridgeCardType } from '../../CardGame/contractBridgeCardType';
import { PlayerPosition } from '../../CardGame/playerPosition';

export interface CardDto
{
    Suit: CardSuit;
    Type: BridgeBeloteCardType | ContractBridgeCardType;
    
    position: PlayerPosition;
    cardIndex: string;
    animate: boolean;
}