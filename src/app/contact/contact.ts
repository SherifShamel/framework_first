import { Component } from '@angular/core';
import { Star } from "../components/star/star";

@Component({
  selector: 'app-contact',
  imports: [Star],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  typing: boolean = false;
  showLabel(e: KeyboardEvent) {
    if(e.key!=null){
      this.typing=true;
      console.log("text addeed");
      console.log(e.key);
      
    } else{
      this.typing=false
      console.log("removed");
      console.log(e.key);
    }    
  }
}
