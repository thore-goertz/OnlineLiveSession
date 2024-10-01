import {Injectable} from '@angular/core';
import {ProductUpdate} from "../models/product";
import {interval, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LiveUpdateService {

    private productUpdateSubject = new Subject<ProductUpdate>();
    public productUpdate$ = this.productUpdateSubject.asObservable();

    constructor() {
        interval(25).subscribe(() => {
            //id between 1 and 130
            const id = Math.floor(Math.random() * 130) + 1;

            this.productUpdateSubject.next({
                id: id,
                status: this.getRandomIcon()
            });
        });
    }

    private getRandomIcon(): string {
        const icons = ['sentiment_satisfied', 'sentiment_dissatisfied', 'sentiment_very_satisfied', 'sentiment_very_dissatisfied',
            'sentiment_very_dissatisfied', 'sentiment_very_dissatisfied', 'sentiment_very_dissatisfied'];
        return icons[Math.floor(Math.random() * icons.length)];
    }
}
