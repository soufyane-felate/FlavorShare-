import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-recipe-post',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './recipe-post.component.html',
  styleUrl: './recipe-post.component.css',
  animations: [
    trigger('fadeInForm', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class RecipePostComponent {
  post = {
    title: '',
    image: '',
    description: '',
    date: new Date().toISOString(),
    price: 0,
    categorie: '',
    satars: 0
  };

  constructor(
    private postService: ServiceService,
    private router: Router
  ) {}

  onSubmit() {
    // Validate required fields
    if (!this.post.title || !this.post.description || !this.post.categorie || this.post.price <= 0) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    this.postService.createPost(this.post).subscribe(
      (response) => {
        console.log('Post sent successfully', response);
        // Navigate to recipes list after successful submission
        this.router.navigate(['/posts']);
      },
      (error) => {
        console.error("Error sending post", error);
        alert('Error submitting recipe. Please try again.');
      }
    );
  }
}
