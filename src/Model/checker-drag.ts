import { CheckerArea } from './';
import { PlayerColor } from '../Enum/playerColor';

export class CheckerDrag
{
    constructor(
        public checkerArea: CheckerArea,
        public xDown: number,
        public yDown: number,
        public fromIdx: number,
        public color: PlayerColor
    ) {}
}
