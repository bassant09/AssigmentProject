import { Component, OnInit ,Input, Output,EventEmitter,Renderer2,ElementRef} from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {
  @Input() data:any={};
  @Output() ondropEvent=new EventEmitter();
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
   //console.log(this.data);
  }
  onDrop(e:any){
    let  cardData = e.dataTransfer.getData('text/plain');
  // console.log(id);
  cardData= JSON.parse(cardData)
  cardData.newStatus=this.data.Name;
   this.ondropEvent.emit(cardData);
  }
  enterDrag(e:any){
    e.preventDefault();
  }
  overDrag(e:any){
    e.preventDefault();
  }
  

}
