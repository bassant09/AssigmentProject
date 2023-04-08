import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData: any = {};
  probability_status:any
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
  this.probability_status= this.cardData.probability_status.split('%',1)
  //console.log(this.probability_status[0])
  }


  onDragStart(e: any) {
    e.dataTransfer.setData('text/plain', JSON.stringify(this.cardData));

  }
  

}
