import { GameState } from "./gameState";

// Board Games
import { PlayerColor } from "./BoardGame/playerColor";
import { ChessPieceType } from "./BoardGame/chessPieceType";
import { ChessMoveType } from "./BoardGame/chessMoveType";

// Card Games
import { PlayerPosition } from "./CardGame/playerPosition";
import { CardGameTeam } from "./CardGame/cardGameTeam";
import { BridgeBeloteCardType } from "./CardGame/bridgeBeloteCardType";
import { ContractBridgeCardType } from "./CardGame/contractBridgeCardType";
import { CardSuit } from "./CardGame/cardSuit";
import { BidType } from "./CardGame/bidType";
import { AnnounceType } from "./CardGame/announceType";

/**
 * Global Interfaces
 */
import { IGame } from "./Types/GameInterface";
import { IGamePlay } from "./Types/GamePlayInterface";
import { IPlayer } from "./Types/PlayerInterface";
import { IGameRoom } from "./Types/GameRoomInterface";
import { IGamePlayer } from "./Types/GamePlayerModel";
//import { IGameRoom } from "./Types/GameRoomModel";

/**
 * Core Game Interfaces
 */
import { ConnectionDto } from "./Types/Core/connectionDto";
import { ErrorReportDto } from "./Types/Core/errorReportDto";
import { UserDto } from "./Types/Core/userDto";
import { GameDto } from "./Types/Core/gameDto";
import { GameCookieDto } from "./Types/Core/gameCookieDto";
import { PlayerDto } from "./Types/Core/playerDto";
import { NewScoreDto } from "./Types/Core/newScoreDto";

/**
 * Board Game Interfaces
 */
import { Toplist } from "./Types/BoardGame/toplist";
import { ToplistResult } from "./Types/BoardGame/toplistResult";
import { BoardGameDto } from "./Types/BoardGame/gameDto";
import { MoveDto } from "./Types/BoardGame/moveDto";
import { BoardGamePlayerDto } from "./Types/BoardGame/playerDto";
import { PointDto } from "./Types/BoardGame/pointDto";
import { CheckerDto } from "./Types/BoardGame/checkerDto";
import { DiceDto } from "./Types/BoardGame/diceDto";
import { ChessMoveDto } from "./Types/BoardGame/chessMoveDto";
import { ChessPieceDto } from "./Types/BoardGame/chessPieceDto";
import { ChessSquareDto } from "./Types/BoardGame/chessSquareDto";

/**
 * Card Game Interfaces
 */
import { CardGameDto } from "./Types/CardGame/gameDto";
import { CardGamePlayerDto } from "./Types/CardGame/playerDto";
import { CardDto } from "./Types/CardGame/cardDto";
import { BidDto } from "./Types/CardGame/bidDto";
import { BridgeBeloteScoreDto } from "./Types/CardGame/bridgeBeloteScoreDto";
import { AnnounceDto } from "./Types/CardGame/announceDto";
import { CardGameAnnounceSymbolModel } from "./Types/CardGame/CardGameAnnounceSymbolModel";

/* ***************************************************************************************
Export aws-cdk-helpers to the world
*************************************************************************************** */
export {
    

    // Global Interfaces
    IGame,
    IGamePlay,
    IPlayer,
    IGameRoom,
    IGamePlayer,
    
    // Core Game Interfaces
    ConnectionDto,
    ErrorReportDto,
    UserDto,
    GameState,
    GameDto,
    GameCookieDto,
    PlayerDto,
    NewScoreDto,
    
    // Board Game Interfaces
    Toplist,
    ToplistResult,
    BoardGameDto,
    MoveDto,
    BoardGamePlayerDto,
    PlayerColor,
    PointDto,
    CheckerDto,
    DiceDto,
    ChessMoveDto,
    ChessMoveType,
    ChessPieceDto,
    ChessPieceType,
    ChessSquareDto,
    
    // Card Game Interfaces
    CardGameDto,
    PlayerPosition,
    BidType,
    CardSuit,
    BridgeBeloteCardType,
    ContractBridgeCardType,
    CardGameTeam,
    CardGamePlayerDto,
    CardDto,
    BidDto,
    BridgeBeloteScoreDto,
    AnnounceDto,
    AnnounceType,
    CardGameAnnounceSymbolModel,
};
