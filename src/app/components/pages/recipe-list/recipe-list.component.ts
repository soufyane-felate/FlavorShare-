import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule, NgFor, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { filter } from 'rxjs';
import { log } from 'node:console';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, DatePipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  animations: [
    trigger('fadeInUpStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeInHeader', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class RecipeListComponent {
  constructor(private service:ServiceService){}
  selectCategory='';
  searchTitle='';
  posts:any[]=[];
  filteredPosts:any[]=[];

  ngOnInit():void{
    this.service.getPosts().subscribe((data)=>{
      this.posts=data;
      this.filteredPosts = [...data];
    });
  }

  // Filter posts by category
  filterByCategory(category: string) {
    this.selectCategory = category;
    this.applyFilters();
  }

  // Apply all filters
  applyFilters() {
    this.filteredPosts = this.posts.filter(post => {
      const matchesCategory = !this.selectCategory || post.categorie.toLowerCase() === this.selectCategory.toLowerCase();
      const matchesSearch = !this.searchTitle || post.title.toLowerCase().includes(this.searchTitle.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // Reset filters
  resetFilters() {
    this.selectCategory = '';
    this.searchTitle = '';
    this.filteredPosts = [...this.posts];
  }
}
