import { ActionDto } from './actionDto';

import { CardGameDto } from '../CardGame/gameDto';
import { BridgeBeloteScoreDto } from '../CardGame/bridgeBeloteScoreDto';
import { CardDto } from '../CardGame/cardDto';

export interface RoundEndedActionDto extends ActionDto {
    game: CardGameDto;
    newScore: BridgeBeloteScoreDto;
    
    SouthNorthTricks: CardDto[];
    EastWestTricks: CardDto[];
}
