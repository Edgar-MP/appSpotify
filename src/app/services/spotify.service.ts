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
  
  getArtistas(termino:string) {

    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=0&limit=20`;

    let headers = new HttpHeaders({
      'authorization':'Bearer BQBD9RMrIBWceb8UTJHj8O-3r7jCevPkOlY-1B-7NTSU6EBt8N2CGpacqjOSB-CwBz4uG2kKg7LonpwJEBLft76uYfUiRjhExAKs6Fq31JLoQilefD4'
    });

    return this.http.get(url, {headers})
      .pipe(map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      }))
  }
}
