import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerDTO } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  player!: PlayerDTO;

  constructor(private playerService:PlayerService,private route:ActivatedRoute){}

 
  

  

  updatePlayer(playerdto:PlayerDTO){

     console.log('Updating player:', playerdto);
    this.playerService.updatePlayer(playerdto).subscribe(

      (player)=>{
        console.log("Player Updated Sucessfully");
        alert("Player updated Successfully");
      }
    )

  }

}
