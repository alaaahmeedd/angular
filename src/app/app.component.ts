import { Component } from '@angular/core';
import { BookFinderService} from './services/book-finder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-finder';
  search: String
  data: String[]
  constructor (private bookFinderService: BookFinderService){
    this.bookFinderService.getBooks(this.search)
  }

  searchBooks(){
    this.bookFinderService.getBooks(this.search).subscribe(
      (data) =>{
        console.log(data)
        this.data = data.items
      }, (error) => {
        console.log(error)
      }
    )
  }

}
