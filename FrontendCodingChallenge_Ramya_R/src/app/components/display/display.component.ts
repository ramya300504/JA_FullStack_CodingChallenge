import { Component, OnInit } from '@angular/core';
import { PlayerDTO } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  playerList:PlayerDTO[]=[];

  constructor(private playerService:PlayerService){}

  ngOnInit(): void {
   this.getAllPlayers();
  }

  getAllPlayers(){

    this.playerService.getAllPlayers().subscribe(

      (list)=>{

        this.playerList=list;
        console.log(list);
      }
    )
  }
}
