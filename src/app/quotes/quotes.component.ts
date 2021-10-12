import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Insightful Quotes';
  quotes:Quote[] = [
    new Quote (1, 'Selb', 'Love Theory', 'The best feeling is when one is in love.', 'Tim Kim', new Date(2021, 10, 12), 0, 0),
    new Quote (2, 'Danny', 'Music', 'Music is medicine to every soul.', 'Mike Ray', new Date(2021, 10, 14), 0, 0),
    new Quote (4, 'Tomashi', 'Technology', 'Technology stimulates laziness', 'Clay Shirky', new Date(2021,9,7),0,0),
    new Quote (4, 'Betty', 'Religion', 'Religin is the bridge between human races.', 'Clay Shirky', new Date(2021,7,7),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote){
    let  arraysize = this.quotes.length;
    quote.id = arraysize+ 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Confirm to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  displayInfo(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
