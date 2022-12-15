import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  termino: string ='';

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtistas()
      .subscribe((artistas: any) => {
        console.log(artistas);
      })
  }

}
