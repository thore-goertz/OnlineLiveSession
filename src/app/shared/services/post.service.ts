import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_TOKEN} from "../../app.config";
import {Post} from "../models/post";
import {map, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private readonly _httpClient = inject(HttpClient);
    private readonly _apiEndpoint = inject(API_TOKEN);

    public getPosts(): Observable<Post[]> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/posts`)
            .pipe(
                map(result => result['posts'])
            );
    }

    public getPost(postId: number): Observable<Post> {
        return this._httpClient.get<Post>(`${this._apiEndpoint}/posts/${postId}`);
    }

    public getPostByUserId(userId: number): Observable<Post[]> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/carts/user/${userId}`)
            .pipe(
                map(result => result['posts'])
            );
    }
}
