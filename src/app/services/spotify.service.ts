import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  artistas: any[] = [];

  private urlSpotify: string = 'https://api.spotify.com/v1/';
  private token = 'BQA4tgdftKvw6ZsnWzLkyvceJROq19-2dYsKWRYMIxkmrUJvwKlwNl7oUAZs_FU3zEQBjI9rUZbWayR6rDKZbP9K4rZnoM5Q_igwc4gaK0Vx7J-xpIg'

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
    const url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;

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
