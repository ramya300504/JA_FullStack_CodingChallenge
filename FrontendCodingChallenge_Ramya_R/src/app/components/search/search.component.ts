import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerDTO } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  player!:PlayerDTO;

  constructor(private playerService:PlayerService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getById();
  }


  searchInput:number=0;

  getById(){

  this.route.params.subscribe((param)=>{

    const playerId=Number(param['input']);


    this.playerService.getById(playerId).subscribe(

      (player)=>{
        this.player=player;
      }
    )
  })}


  deleteById(playerId:number){

    this.playerService.deletePlayer(playerId).subscribe(

      ()=>{
        console.log("Player Deleted Successfully");
        alert("Player Deleted Successfully"+playerId);
      }
    )
  }
  
}
