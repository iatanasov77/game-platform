/* Auto Generated */

import { MessageType } from '../../Enum/messageType';

export interface MessageDto {
    id: number;
    date: string;
    text: string;
    type: MessageType;
    sender: string;
    receiver: string;
}
