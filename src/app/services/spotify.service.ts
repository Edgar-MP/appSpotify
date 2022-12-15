import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Spotify service ready');
  }
  
  getArtistas() {

    let url = "https://api.spotify.com/v1/search?query=The+Rolling+Stones&type=artist&market=US&offset=0&limit=20";

    let headers = new HttpHeaders({
      'authorization':'Bearer BQBT9mFlpMeskV6lztCZr_JLQUIkxQQ2BFWNQaqPN45eynZMG-Mi0s5CbHLr1qzxt9Vjp1oHIJMYkgdQQnM-6CynYLmjPNqutogSpGVVTyvkb6CGqLw'
    });

    return this.http.get(url, {headers})
      .pipe(map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      }))
  }
}
