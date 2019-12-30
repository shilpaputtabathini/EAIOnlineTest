import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
    providedIn:'root'
})

export class PostDataServices {
    constructor(private http: HttpClient) {}

    baseUrl = 'https://hn.algolia.com/api/v1';

    getPostData() {
        return this.http.get(this.baseUrl + '/search_by_date?tags=story');
    }
}