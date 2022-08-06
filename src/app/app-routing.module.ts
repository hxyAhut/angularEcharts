import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartComponent } from './echart/echart.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'echarts', component: EchartComponent},
  { path: '', redirectTo: 'table', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
