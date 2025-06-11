import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private playerService:PlayerService,private router:Router){}

  navigateToSearch(input:any){

    const playerId=input.form.value.id;
    this.router.navigate(['/search',playerId]);

    console.log('Searched ID:', playerId);
  }

}
