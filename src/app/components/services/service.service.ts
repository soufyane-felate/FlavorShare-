import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/api/post';
  private baseApiUrl = 'http://localhost:3000/api/comment';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getCommentsByPostId(postId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseApiUrl}?postId=${postId}`);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl, comment);
  }

}
