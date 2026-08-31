import { PlayerPosition } from '../Enum/playerPosition';

/**
 * Help Get Player Positions Clockwise and Back-Clockwise
 */
export class PlayerPositions
{
    private static PlayerPositions: PlayerPosition[] = [
        PlayerPosition.south,
        PlayerPosition.west,
        PlayerPosition.north,
        PlayerPosition.east
    ];
    
    public static GetAll(): PlayerPosition[]
    {
        return PlayerPositions.PlayerPositions;
    }
    
    public static Next( playerPosition: PlayerPosition ): PlayerPosition
    {
        const PlayerPositionIndex = PlayerPositions.PlayerPositions.findIndex(
            ( positions: PlayerPosition ) => positions === playerPosition
        );
        const NextPlayerPositionIndex   = ( PlayerPositionIndex + 1 ) % PlayerPositions.PlayerPositions.length;
        
        return PlayerPositions.PlayerPositions[NextPlayerPositionIndex];
    }
    
    public static Prev( playerPosition: PlayerPosition ): PlayerPosition
    {
        const PlayerPositionIndex = PlayerPositions.PlayerPositions.findIndex(
            ( positions: PlayerPosition ) => positions === playerPosition
        );
        const NextPlayerPositionIndex   = ( PlayerPositionIndex - 1 ) % PlayerPositions.PlayerPositions.length;
        
        return PlayerPositions.PlayerPositions[NextPlayerPositionIndex];
    }
}