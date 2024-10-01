import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_TOKEN} from "../../app.config";
import {map, Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private readonly _httpClient = inject(HttpClient);
    private readonly _apiEndpoint = inject(API_TOKEN);

    public getAllProducts(): Observable<Product[]> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/products`);
    }

    public getProduct(productId: number): Observable<Product> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/products/${productId}`);
    }

    public getProductsByCategory(category: string): Observable<Product[]> {
        return this._httpClient.get<any>(`${this._apiEndpoint}/products/category/${category}`)
            .pipe(
                map(result => result['products'])
            );
    }
}
