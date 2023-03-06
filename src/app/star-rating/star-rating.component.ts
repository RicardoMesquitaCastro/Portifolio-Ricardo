import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.svg',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit{

  stars= [1, 2, 3, 4, 5]

  @Input() ratingValue = 0
  @Output() ratingValueChange: EventEmitter<number> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    
  }

  selectStar($value: number){
    this.ratingValue = $value
    this. ratingValueChange.emit($value)
  }
}
