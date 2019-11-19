import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model=new Post();


  constructor(private data:DataService,private shared:SharedService ) {

  }

  /**
   * Create a shared service
   * put a Username Attribute in the service
   * Inject the service into this component
   * change Ln 28 to this model.from=this.shared.userName;
   */

  sendPost(){

    if(!this.model.message && !this.model.imageUrl)return;

    this.model.from=this.shared.userName;
    this.model.createdOn=new Date();// set this moment on time
    console.log("Saving post",this.model);

    //save the object
    this.data.savePost(this.model);
    

    //create new model (clear form)
    this.model=new Post();
  }

}
