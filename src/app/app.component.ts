import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-github-search';

profileRepos: any =[];
  constructor(private profileServices: ProfileService){
    this.getRepos();
  }

getRepos(){
  this.profileServices.getProfileRepos().subscribe(_repos =>{
      this.profileRepos = _repos;
  });
}


}
