import { ActionDto } from './actionDto';

import { MoveDto } from '../BoardGame/moveDto';

export interface OpponentMoveActionDto extends ActionDto {
    move: MoveDto;
}
