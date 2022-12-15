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
      'authorization':'Bearer BQC7bS2QjbRz4A7vfPxxTv2d-BH-o3KWGk39uXfUiAI2KGHnon0_8Bvi8wXqb8sm-1qbRBmCdkPwNX14YhbTrcAU3CEd8LP4CjegjofcK6WqLypTUTs'
    });

    return this.http.get(url, {headers})
      .pipe(map((resp:any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      }))
  }
}
