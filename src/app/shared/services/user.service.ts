import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_TOKEN} from "../../app.config";
import {map, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly _httpClient = inject(HttpClient);
    private readonly _apiEndpoint = inject(API_TOKEN);

    public getUsers(): Observable<User[]> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/users`)
            .pipe(
                map(result => result['users'])
            );
    }
}
