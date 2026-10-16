import { Point } from './point';
import { IThemes } from './themes';

import { CardDto } from '../Dto/CardGame/cardDto';
import { PlayerPosition } from '../Enum/playerPosition';

export class Card
{
    static draw(
        cx: CanvasRenderingContext2D | null,
        cardImagesPath: string,
        cardBack: string,
        card: CardDto,
        point: Point,
        width: number,
        height: number,
        angle: number,
        theme: IThemes,
        position: PlayerPosition,
        openCard: boolean,
        highLighted: boolean,
        debugCards: boolean
    ): void {
        if ( ! cx ) {
            return;
        }
        
        const { x, y } = point;
        const image = new Image( width, height );
        
        image.src = cardBack;
        if ( position === PlayerPosition.south || openCard || debugCards ) {
            image.src = `${cardImagesPath}/${card.cardIndex}.png`;
        }
        
        cx.save();
        cx.translate( x, y );
        cx.rotate( angle );
        
        cx.drawImage(
            image,
            0,
            0,
            width,
            height
        );
        
        if ( highLighted ) {
            cx.globalAlpha = .50;
            cx.fillStyle = "black";
            cx.fillRect( 0, 0, width, height );
        }
        
        cx.restore();
    }
}
