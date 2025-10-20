import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  animations: [
    trigger('fadeInUpStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('150ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
export class DetailsComponent {
  postId: string | null = null;
  post: any;
  loading: boolean = true;
  error: string | null = null;
  
  comments: any[] = []; 
  comment = {
    date: new Date(),
    articlComment: '',
    postId: ''
  };

  constructor(private route: ActivatedRoute, private postService: ServiceService) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      // Load post data
      this.postService.getPostById(this.postId).subscribe({
        next: (data) => {
          this.post = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading post:', error);
          this.error = 'Failed to load recipe details';
          this.loading = false;
        }
      });

      // Load comments
      this.postService.getCommentsByPostId(this.postId).subscribe({
        next: (data) => {
          this.comments = data;
        },
        error: (error) => {
          console.error('Error loading comments:', error);
          // Don't show error for comments as it's secondary
        }
      });
    }
  }

  onSubmit() {
    if (!this.postId || !this.comment.articlComment.trim()) return;

    const newComment = {
      date: new Date().toISOString(),
      articlComment: this.comment.articlComment.trim(),
      postId: this.postId
    };

    this.postService.createComment(newComment).subscribe({
      next: (response) => {
        console.log('Comment sent successfully', response);
        this.comments.push(response);
        this.comment.articlComment = ''; 
      },
      error: (error) => {
        console.error("Error sending comment", error);
        alert('Error submitting comment. Please try again.');
      }
    });
  }
}
