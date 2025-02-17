import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../../domain/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class ListMenusService {
  private http = inject(HttpClient);

  execute(): Observable<IMenu[]>{
    return this.http.get<IMenu[]>('/menus');
  }
}
