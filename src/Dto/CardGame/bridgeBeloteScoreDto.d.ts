import { ScoreDto } from './scoreDto';

export interface BridgeBeloteScoreDto extends ScoreDto
{
    SouthNorthPoints: number;
    SouthNorthTotalInRoundPoints: number;
    EastWestPoints: number;
    EastWestTotalInRoundPoints: number;
}