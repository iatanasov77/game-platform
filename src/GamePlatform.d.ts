declare module 'game-platform' {
    export interface ConnectionDto
    {
        connected: boolean;
        pingMs: number;
    }

    export interface ErrorReportDto
    {
        error: string;
        reproduce: string;
    }

    export interface UserDto {
        id: string;
        name: string;
        email: string;
        photoUrl: string;
        showPhoto: boolean;
        socialProvider: string;
        socialProviderId: string;
        createdNew: boolean;
        isAdmin: boolean;
        preferredLanguage: string;
        theme: string;
        emailNotification: boolean;
        gold: number;
        lastFreeGold: number;
        elo: number;
        passHash: number;
        localLoginName: string;
        acceptedLanguages: string[];
        muteIntro: boolean;
    }

    export enum GameState
    {
        opponentConnectWaiting,
        firstThrow,
        playing,
        requestedDoubling,
        ended,
        
        // Chess States
        firstMove,
        
        // Card Games States
        firstBid,
        bidding,
        firstRound,
        roundEnded
    }

    export interface GameDto
    {
        id: string;
        gameCode: string;
        playState: GameState;
    }

    export interface GameCookieDto
    {
        id: string;
        game: string;
        
        color?: PlayerColor;
        position?: PlayerPosition;
        
        roomSelected: boolean;
    }

    export interface PlayerDto
    {
        name: string;
        photoUrl: string;
        
        // My Property to Detect If Player is AI in Frontend
        isAi: boolean;
    }

    export interface NewScoreDto {
        score: number;
        increase: number;
    }

    export interface Toplist
    {
        results: ToplistResult[];
        you: ToplistResult;
    }

    export interface ToplistResult
    {
        place: number;
        name: string;
        elo: number;
        you: boolean;
    }

    export interface BoardGameDto extends GameDto
    {
        blackPlayer: BoardGamePlayerDto;
        whitePlayer: BoardGamePlayerDto;
        currentPlayer: PlayerColor;
        winner: PlayerColor;
        points: PointDto[];
        squares: ChessSquareDto[];
        validMoves: MoveDto[];
        thinkTime: number;
        goldMultiplier: number;
        isGoldGame: boolean;
        lastDoubler?: PlayerColor;
        stake: number;
    }

    export interface MoveDto
    {
        color: PlayerColor;
        from: number;
        to: number;
        nextMoves: MoveDto[];
        animate: boolean;
        hint: boolean;
    }

    export interface BoardGamePlayerDto extends PlayerDto
    {
        playerColor: PlayerColor;
        pointsLeft: number;
        elo: number;
        gold: number;
    }

    export enum PlayerColor
    {
        black,
        white,
        neither
    }

    export interface PointDto {
        blackNumber: number;
        checkers: CheckerDto[];
        whiteNumber: number;
    }

    export interface CheckerDto {
        color: PlayerColor;
    }
    
    export interface DiceDto {
        used: boolean;
        value: number;
    }

    export interface CardGameDto extends GameDto {
        players: CardGamePlayerDto[];
        validBids: any;
        validCards: any;
        contract: any;
        
        currentPlayer: PlayerPosition;
        winner: CardGameTeam;
        thinkTime: number;
        
        FirstToPlayInTheRound: PlayerPosition;
        RoundNumber: number;
        TrickNumber: number;
        
        SouthNorthPoints: number;
        EastWestPoints: number;
        
        MyCards: any;
        Bids: any;
    }

    export enum PlayerPosition
    {
        south,
        east,
        north,
        west,
        neither
    }

    export enum BidType
    {
        Pass,
        Clubs,
        Diamonds,
        Hearts,
        Spades,
        
        NoTrumps,
        AllTrumps,
        Double,
        ReDouble
    }

    export enum CardSuit
    {
        Club,
        Diamond,
        Heart,
        Spade,
    }

    export enum BridgeBeloteCardType
    {
        Seven,
        Eight,
        Nine,
        Ten,
        Jack,
        Queen,
        King,
        Ace,
    }

    export enum ContractBridgeCardType
    {
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eight,
        Nine,
        Ten,
        Jack,
        Queen,
        King,
        Ace,
    }

    export enum CardGameTeam
    {
        SouthNorth,
        EastWest,
        Neither
    }

    export interface CardGamePlayerDto extends PlayerDto
    {
        playerPosition: PlayerPosition;
    }
    
    export interface CardDto
    {
        Suit: CardSuit;
        Type: BridgeBeloteCardType | ContractBridgeCardType;
        
        position: PlayerPosition;
        cardIndex: string;
        animate: boolean;
    }

    export interface BidDto
    {
        Player: PlayerPosition;
        KontraPlayer?: PlayerPosition;
        ReKontraPlayer?: PlayerPosition;
        
        Type: BidType;
        NextBids: BidDto[];
    }

    export interface BridgeBeloteScoreDto
    {
        contract: any;
        SouthNorthPoints: number;
        SouthNorthTotalInRoundPoints: number;
        EastWestPoints: number;
        EastWestTotalInRoundPoints: number;
    }
    
    export interface IGame {
        id: number;
        slug: string;
        title: string;
        url: string;
        
        room?: any;
        deck?: any;
    }
    
    export interface IGamePlay {
        id: any;
        room: null | IGameRoom;
    }
    
    export interface IPlayer {
        rooms: IGameRoom[];
    
        id: number;
        type: string;
        name: string;
        connected: any;
    }
    
    export interface IGameRoom {
        id: number;
        isPlaying: boolean;
        game: IGame;
        slug: string;
        name: string;
        players: IPlayer[];
    }

    /*
    export interface IGameRoom {
        id: string;
        players: Array<any>;
    }
    */
    
    export interface IGamePlayer
    {
        id: string;
        
        containerId: string;
        name: string;
        type: string;
    }
    
    export interface IGamePlay
    {
        id: any;
        room: null | IGameRoom;
        players: null | Iterator<IGamePlayer>;
    }

    interface CardGamePlayerModel {
        id: string;
        announce: null | string;
    }

    export interface CardGameAnnounceSymbolModel {
        id: BidType;
        key: string;
        tooltip: string;
        value: string;
    }

    export enum AnnounceType
    {
        Belot,
        SequenceOf3,
        SequenceOf4,
        SequenceOf5,
        SequenceOf6,
        SequenceOf7,
        SequenceOf8,
        FourOfAKind,
        FourNines,
        FourJacks,
    }
    
    export interface AnnounceDto
    {
        Player: PlayerPosition;
        Type: AnnounceType;
        Card: CardDto;
    }

    export enum ChessMoveType
    {
        NormalMove,
        CaputreMove,
        TowerMove,
        PromotionMove,
        EnPassant
    }

    export enum ChessPieceType
    {
        King,
        Queen,
        Rook,
        Bishop,
        Knight,
        Pawn
    }

    export interface ChessSquareDto
    {
        Rank: number;
        File: string;
        Piece?: ChessPieceDto;
    }

    export interface ChessPieceDto
    {
        Type: ChessPieceType;
        Side: PlayerColor;
        Moves: number;
    }

    export interface ChessMoveDto
    {
        color: PlayerColor;
        type: ChessMoveType;
        from: string;
        to: string;
        
        causeCheck: boolean;
        
        piece: ChessPieceType;
        capturedPiece?: ChessPieceType;
        promoPiece?: ChessPieceType;
        enpassantPiece?: ChessPieceType;
        
        nextMoves: ChessMoveDto[];
        totalMoves: ChessMoveDto[];
        
        animate: boolean;
        hint: boolean;
    }
}
