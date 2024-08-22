import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    buttonClicked = 0


    onCounterIncrease(counter : number){
        this.buttonClicked = counter;
    }
}
