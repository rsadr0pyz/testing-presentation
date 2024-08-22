import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    counterVal = 0


    onCounterIncrease(counter : number){
        this.counterVal = counter;
    }
}
