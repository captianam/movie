import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

   
  
  searchMovies(query: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.tmdbApiKey)
      .set('query', query);

    return this.http.get(`${this.apiUrl}/search/movie`, { params });
  }

  

 
   
  getMovieDetails(movieId: number): Observable<any> {
    const params = new HttpParams().set('api_key', environment.tmdbApiKey);

    return this.http.get(`${this.apiUrl}/movie/${movieId}`, { params });
  }

 
  getPopularMovies(): Observable<any> {
    const params = new HttpParams().set('api_key', environment.tmdbApiKey);

    return this.http.get(`${this.apiUrl}/movie/popular`, { params });
  }
}