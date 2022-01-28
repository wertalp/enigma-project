import { Subject } from 'rxjs';

const subject = new Subject<string>();


export const messageService = {
    sendMessage  : (message: any) => subject.next(message),
    clearMessages: () => subject.next(""),
    getMessage   : () => subject.asObservable()
};