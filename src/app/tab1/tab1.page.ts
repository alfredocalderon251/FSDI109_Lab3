import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private data: DataService) {
    console.log("Data from service:",this.data.getAllPosts());
  }

  getPostsToDisplay(){
    return this.data.getAllPosts();
  }
}
