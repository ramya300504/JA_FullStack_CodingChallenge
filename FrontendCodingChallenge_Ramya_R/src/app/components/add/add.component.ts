import { Component } from '@angular/core';
import { PlayerDTO } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private playerService:PlayerService){}

  addPlayer(playerdto:PlayerDTO){

    this.playerService.addPlayer(playerdto).subscribe(

      (player)=>{
        console.log("Player Added Successfully",player);
        alert("Player Added Successfully");
      }
    )
  }

}
