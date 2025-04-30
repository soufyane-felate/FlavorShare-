import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  constructor(private service:ServiceService){}
  selectCategory=''
  list:any[]=[];

  ngOnInit():void{
    this.service.getReciep().subscribe((data)=>{
      this.list=data;
      console.log((this.list = data));
    })
  }


}
