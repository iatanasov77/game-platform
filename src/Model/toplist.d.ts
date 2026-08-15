import { ToplistResult } from './toplistResult';

export interface Toplist
{
    results: ToplistResult[];
    you: ToplistResult;
}