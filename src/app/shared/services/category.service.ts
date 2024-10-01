import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_TOKEN} from "../../app.config";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private readonly _httpClient = inject(HttpClient);
    private readonly _apiEndpoint = inject(API_TOKEN);

}
