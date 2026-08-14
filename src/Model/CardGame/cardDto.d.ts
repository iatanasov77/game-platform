import { CardSuit } from './cardSuit';
import { BridgeBeloteCardType } from './bridgeBeloteCardType';
import { ContractBridgeCardType } from './contractBridgeCardType';
import { PlayerPosition } from './playerPosition';

export interface CardDto
{
    Suit: CardSuit;
    Type: BridgeBeloteCardType | ContractBridgeCardType;
    
    position: PlayerPosition;
    cardIndex: string;
    animate: boolean;
}