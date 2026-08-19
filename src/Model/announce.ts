import { CardGameAnnounceSymbolModel } from '../Type/CardGameAnnounceSymbolModel';
import { BidTrump } from '../Enum/bidTrump';

class AnnounceClover implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Clubs;
    key = "btnClover";
    tooltip = "Clover";
    value = '<i class="fi fi-sr-club"></i>';
}

class AnnounceDiamond implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Diamonds;
    key = "btnDiamond";
    tooltip = "Diamond";
    value = '<i class="fi fi-sr-card-diamond"></i>';
}

class AnnounceHeart implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Hearts;
    key = "btnHeart";
    tooltip = "Heart";
    value = '<i class="fi fi-sr-heart"></i>';
}

class AnnounceSpade implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Spades;
    key = "btnSpade";
    tooltip = "Spade";
    value = '<i class="fi fi-sr-spade"></i>';
}

class AnnounceBezKoz implements CardGameAnnounceSymbolModel
{
    id = BidTrump.NoTrumps;
    key = "btnBezKoz";
    tooltip = "Bez Koz";
    value = 'a';
}

class AnnounceVsichkoKoz implements CardGameAnnounceSymbolModel
{
    id = BidTrump.AllTrumps;
    key = "btnVsichkoKoz";
    tooltip = "Vsichko Koz";
    value = 'j';
}

class AnnounceKontra implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Double;
    key = "btnKontra";
    tooltip = "Kontra";
    value = 'kr';
}

class AnnounceReKontra implements CardGameAnnounceSymbolModel
{
    id = BidTrump.ReDouble;
    key = "btnReKontra";
    tooltip = "Re-Kontra";
    value = 're-kr';
}

class AnnouncePass implements CardGameAnnounceSymbolModel
{
    id = BidTrump.Pass;
    key = "btnPass";
    tooltip = "Pass";
    value = '<span class="announce-button">pass</span>';
}

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

export function GetAnnounceSymbols(): Array<CardGameAnnounceSymbolModel>
{
    return AnnounceSymbols;
}

export function GetAnnounceSymbol( symbolId: BidTrump )
{
    return AnnounceSymbols.find( ( x: any ) => x.id === symbolId );
}
