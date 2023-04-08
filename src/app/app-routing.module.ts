import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pipline/board/board.component';
import { PipelineComponent } from './pipline/pipeline/pipeline.component';

const routes: Routes = [
  {path:'',component:BoardComponent},
  {path:'pip',component:PipelineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
