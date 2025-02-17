import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../../domain/model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ListClientsService {
  private http = inject(HttpClient);
  
  execute(): Observable<IClient[]>{
    return this.http.get<IClient[]>('/clientes');
  }
}
