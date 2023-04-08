import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    BoardComponent,
    PipelineComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    BoardComponent,
    PipelineComponent,
    CardComponent,
  
  ]
})
export class PiplineModule { }
