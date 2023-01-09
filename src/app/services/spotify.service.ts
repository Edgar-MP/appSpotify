import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  artistas: any[] = [];

  private urlSpotify: string = 'https://api.spotify.com/v1/';
  private token = 'BQDQjsEP2jzgfHWdTLPh-rezCjViga1vBD16mKI5Ag725e49AbiPJkIo0PSfOLxHLrSuysOcE-zPENQQ6UfVRKiuOc0TEtk4q7WI1LXhYr8tJBLrfeA'

  constructor(public http: HttpClient) {
    console.log('Spotify service ready');
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&market=US&offset=0&limit=20`;

    let headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token,
    });

    return this.http.get(url, { headers }).pipe(
      map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      })
    );
  }

  getTop(id:string) {
    const url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=ES`;

    const headers = this.getHeaders();
    
    return this.http.get(url, {headers})
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      authorization: 'Bearer ' + this.token,
    });
    return headers;
  }
}
