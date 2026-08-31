import { CardGameAnnounceSymbolModel } from '../Type/CardGameAnnounceSymbolModel';
import { BidTrump } from '../Enum/bidTrump';

class AnnounceClover implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Clubs;
    key = "btnClover";
    tooltip = "Clover";
    value = '<i class="fi fi-sr-club"></i>';
    htmlEntity = '&#9827;';
}

class AnnounceDiamond implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Diamonds;
    key = "btnDiamond";
    tooltip = "Diamond";
    value = '<i class="fi fi-sr-card-diamond"></i>';
    htmlEntity = '&#9830;';
}

class AnnounceHeart implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Hearts;
    key = "btnHeart";
    tooltip = "Heart";
    value = '<i class="fi fi-sr-heart"></i>';
    htmlEntity = '&#9829;';
}

class AnnounceSpade implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Spades;
    key = "btnSpade";
    tooltip = "Spade";
    value = '<i class="fi fi-sr-spade"></i>';
    htmlEntity = '&#9824;';
}

class AnnounceBezKoz implements CardGameAnnounceSymbolModel
{
    id = BidTrump.NoTrumps;
    key = "btnBezKoz";
    tooltip = "Bez Koz";
    value = 'a';
    htmlEntity = 'BA';
}

class AnnounceVsichkoKoz implements CardGameAnnounceSymbolModel
{
    id = BidTrump.AllTrumps;
    key = "btnVsichkoKoz";
    tooltip = "Vsichko Koz";
    value = 'j';
    htmlEntity = 'J';
}

class AnnounceKontra implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Double;
    key = "btnKontra";
    tooltip = "Kontra";
    value = 'kr';
    htmlEntity = 'KR';
}

class AnnounceReKontra implements CardGameAnnounceSymbolModel
{
    id = BidTrump.ReDouble;
    key = "btnReKontra";
    tooltip = "Re-Kontra";
    value = 're-kr';
    htmlEntity = 'REKR';
}

class AnnouncePass implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Pass;
    key = "btnPass";
    tooltip = "Pass";
    value = '<span class="announce-button">pass</span>';
    htmlEntity = 'PASS';
}

var Trumps: Array<CardGameAnnounceSymbolModel> = [
    new AnnounceClover(),
    new AnnounceDiamond(),
    new AnnounceHeart(),
    new AnnounceSpade(),
    new AnnounceBezKoz(),
    //new AnnounceVsichkoKoz(),
];

var AnnounceSymbols: Array<CardGameAnnounceSymbolModel> = [
    new AnnounceClover(),
    new AnnounceDiamond(),
    new AnnounceHeart(),
    new AnnounceSpade(),
    new AnnounceBezKoz(),
    new AnnounceVsichkoKoz(),
    new AnnounceKontra(),
    new AnnounceReKontra(),
    new AnnouncePass()
];

export function GetTrumps(): Array<CardGameAnnounceSymbolModel>
{
    return Trumps;
}

export function GetAnnounceSymbols(): Array<CardGameAnnounceSymbolModel>
{
    return AnnounceSymbols;
}

export function GetAnnounceSymbol( symbolId: BidTrump ): CardGameAnnounceSymbolModel
{
    return AnnounceSymbols.find( ( { id } ) => id === symbolId );
}
