import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

    actualVal = 0;

    @Output("actualVal")
    actualValEvent = new EventEmitter<number>()


    public increment(){
        this.actualVal++;
        this.actualValEvent.emit(this.actualVal);
    }


}
