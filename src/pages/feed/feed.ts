import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MovieProvider]
})
export class FeedPage {

  public objFeed: object = {
    titulo: 'Paulo França',
    data: 'November 5, 1955',
    descricao: 'Estou criando um APP...',
    qtdLikes: 12,
    qtdComentarios: 4,
    timeComentario: '11h ago'
  }

  public listaFilmes = new Array<any>()

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) { }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies()
      .subscribe((data) => {
        const response = (data as any)
        this.listaFilmes = JSON.parse(response._body).results
        console.log(this.listaFilmes)
      }, (error) => {
        console.log(error)
      })
  }

}
