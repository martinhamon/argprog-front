import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  emitEventToChild() {
    this.eventsSubject.next();
  }

}
