import { ActionDto } from './actionDto';

import { PlayerPosition } from '../../Enum/playerPosition';

export interface DummyFaceupActionDto extends ActionDto {
    DummyPlayer: PlayerPosition;
    Player: PlayerPosition;
}
