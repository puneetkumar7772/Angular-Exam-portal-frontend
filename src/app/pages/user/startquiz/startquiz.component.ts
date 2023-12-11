import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent {

  constructor(private Locationstrategy:LocationStrategy){}

  ngOnInit(){
  this.preventBackButton()
  }

  preventBackButton(){
    history.pushState(null, location.href);
    this.Locationstrategy.onPopState(()=>{
      history.pushState(null,location.href)
    })
  }

}
