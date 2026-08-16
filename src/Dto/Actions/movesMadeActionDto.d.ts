import { ActionDto } from './actionDto';

import { MoveDto } from '../BoardGame/moveDto';

export interface MovesMadeActionDto extends ActionDto {
    moves: MoveDto[];
}
