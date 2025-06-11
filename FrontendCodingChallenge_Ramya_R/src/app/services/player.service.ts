import { Injectable } from '@angular/core';
import { PlayerDTO } from '../models/player';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  baseURL:string="http://localhost:8080/api/players";

  addPlayer(player:PlayerDTO):Observable<PlayerDTO>{

    return this.http.post<PlayerDTO>(this.baseURL,player);
  }

  updatePlayer(player:PlayerDTO):Observable<PlayerDTO>{

    return this.http.put<PlayerDTO>(this.baseURL+`/${player.playerId}`,player);
  }

  deletePlayer(playerId:number):Observable<string>{

    return this.http.delete<string>(this.baseURL+`/${playerId}`);
  }

  getAllPlayers():Observable<PlayerDTO[]>
  {
    return this.http.get<PlayerDTO[]>(this.baseURL);
  }

  getById(playerId:number): Observable<PlayerDTO> 
  {
  return this.http.get<PlayerDTO>(this.baseURL + `/${playerId}`);
  }
}
