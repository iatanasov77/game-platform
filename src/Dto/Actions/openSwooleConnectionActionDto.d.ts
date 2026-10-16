import { ActionDto } from './actionDto';

export interface OpenSwooleConnectionActionDto extends ActionDto {
    type: string;
    fd: number;
}