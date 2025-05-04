import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-recipe-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-post.component.html',
  styleUrl: './recipe-post.component.css'
})
export class RecipePostComponent {
  post = {
    title: '',
    image: '',
    description: '',
    date:new Date(),
    price:0,
    categorie:''

  };

  constructor(private postService: ServiceService ) {}

  onSubmit() {
    this.postService.createPost(this.post).subscribe(
      (response) => {
        console.log('Post envoye avec succes', response);
      },
      (error) => {
        console.error("Erreur lors de l'envoi du post", error);
      }
    );
  }
}
