import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  pistas: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotify: SpotifyService
  ) {}
 
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTop( params['id']);
    })

  }
  
  getTop( id: string) {
    this._spotify.getTop(id).pipe(
    map( (resp: any) => resp.tracks))
    .subscribe(pistas => {
      console.log(pistas);
      this.pistas = pistas;
    })
  }

  getArtist( id: string ){
    this._spotify.getArtista(id).subscribe((artista) => {
      console.log(artista);
      this.artista = artista;
      
    });
    // this._spotify.getTop(id)
    // .subscribe(pistas => {
    //   console.log(pistas);
    // });
  }
}