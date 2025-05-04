import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { log } from 'node:console';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  constructor(private service:ServiceService){}
  selectCategory='';
  searchTitle='';
  posts:any[]=[];
  num=1;

  ngOnInit():void{
    this.service.getPosts().subscribe((data)=>{
      this.posts=data;
      console.log((this.posts = data));



   const filterByTitle=this.posts.filter(post=>post.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
      filterByTitle.forEach(post => console.log("filter title : "+post.title));
      
      
   const mapByTitle=this.posts.map(post=>post.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
      filterByTitle.forEach(post =>  console.log("map title : "+post.title)); 

  
   const hghitStars=this.posts.reduce((d1,d2)=>{
    return(d1.stars||0)>(d2.stars||0)?d1:d2;
  });
  console.log("the largest stars :" +hghitStars);


  const highestRatedPost = this.posts.reduce((prev, current) => {
    return (prev.satars || 0) > (current.satars || 0) ? prev : current;
  });
  
  console.log("🌟 Highest Rated Post:", highestRatedPost);
  

  });


  
    

    
  }

}
