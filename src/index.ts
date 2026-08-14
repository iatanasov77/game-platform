/**
 * Global Interfaces
 */
import { IGame } from "./Model/GameInterface";
import { IGamePlay } from "./Model/GamePlayInterface";
import { IPlayer } from "./Model/PlayerInterface";
import { IGameRoom } from "./Model/GameRoomInterface";
import { CardGameAnnounceSymbolModel } from "./Model/CardGameAnnounceSymbolModel";
import { IGamePlayer } from "./Model/GamePlayerModel";
//import { IGameRoom } from "./Model/GameRoomModel";

/**
 * Core Game Interfaces
 */
import { ConnectionDto } from "./Model/Core/connectionDto";
import { ErrorReportDto } from "./Model/Core/errorReportDto";
import { UserDto } from "./Model/Core/userDto";
import { GameState } from "./Model/Core/gameState";
import { GameDto } from "./Model/Core/gameDto";
import { GameCookieDto } from "./Model/Core/gameCookieDto";
import { PlayerDto } from "./Model/Core/playerDto";
import { NewScoreDto } from "./Model/Core/newScoreDto";

/**
 * Board Game Interfaces
 */
import { Toplist } from "./Model/BoardGame/toplist";
import { ToplistResult } from "./Model/BoardGame/toplistResult";
import { BoardGameDto } from "./Model/BoardGame/gameDto";
import { MoveDto } from "./Model/BoardGame/moveDto";
import { BoardGamePlayerDto } from "./Model/BoardGame/playerDto";
import { PlayerColor } from "./Model/BoardGame/playerColor";
import { PointDto } from "./Model/BoardGame/pointDto";
import { CheckerDto } from "./Model/BoardGame/checkerDto";
import { DiceDto } from "./Model/BoardGame/diceDto";
import { ChessMoveDto } from "./Model/BoardGame/chessMoveDto";
import { ChessMoveType } from "./Model/BoardGame/chessMoveType";
import { ChessPieceDto } from "./Model/BoardGame/chessPieceDto";
import { ChessPieceType } from "./Model/BoardGame/chessPieceType";
import { ChessSquareDto } from "./Model/BoardGame/chessSquareDto";

/**
 * Card Game Interfaces
 */
import { CardGameDto } from "./Model/CardGame/gameDto";
import { PlayerPosition } from "./Model/CardGame/playerPosition";
import { BidType } from "./Model/CardGame/bidType";
import { CardSuit } from "./Model/CardGame/cardSuit";
import { BridgeBeloteCardType } from "./Model/CardGame/bridgeBeloteCardType";
import { ContractBridgeCardType } from "./Model/CardGame/contractBridgeCardType";
import { CardGameTeam } from "./Model/CardGame/cardGameTeam";
import { CardGamePlayerDto } from "./Model/CardGame/playerDto";
import { CardDto } from "./Model/CardGame/cardDto";
import { BidDto } from "./Model/CardGame/bidDto";
import { BridgeBeloteScoreDto } from "./Model/CardGame/bridgeBeloteScoreDto";
import { AnnounceDto } from "./Model/CardGame/announceDto";
import { AnnounceType } from "./Model/CardGame/announceType";

/* ***************************************************************************************
Export aws-cdk-helpers to the world
*************************************************************************************** */
export {
    // Global Interfaces
    IGame,
    IGamePlay,
    IPlayer,
    IGameRoom,
    CardGameAnnounceSymbolModel,
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
    AnnounceType
};
