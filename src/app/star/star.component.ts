import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star, [comp-star]',
  templateUrl: './star.component.svg',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() selected = false
  @Input() value = 0
  @Output() starSelected: EventEmitter<number> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    
  }

    selectedStar(){     
      //this.selected = !this.selected  
    this.starSelected.emit(this.value)
    }

}
