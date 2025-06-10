import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CounterComponent } from "../counter/counter.component";

@Component({
    selector: 'app-counter',
    template: '',
  })
export class MockedCounterComponent implements Partial<CounterComponent> {

    actualVal = 0;
  
    @Output("actualVal")
    public actualValEvent = new EventEmitter<number>()

}