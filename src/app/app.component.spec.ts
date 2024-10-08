import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockedCounterComponent } from "./spec-helpers/counter.mock.component"
import { CounterComponent } from './counter/counter.component';

describe('AppComponent', () => {

    let fixture : ComponentFixture<AppComponent>
    let counterEl : DebugElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, MockedCounterComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        counterEl = fixture.debugElement.query(By.directive(MockedCounterComponent))
    })

    it("initiates with zero", () => {
        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-amount"]`))
        expect(el.nativeElement.innerHTML).toEqual('0') 
    })

    //OBS: A implementação é falha, mesmo assim o teste passa.
    //Esse teste é praticamente inútil.
    it("Displays the correct amount of buttons clicks", () => {
        let counter : MockedCounterComponent = counterEl.componentInstance

        //Como é um teste de unidade, não temos acesso aos botões do componente
        counter.actualValEvent.emit(1)
        
        fixture.detectChanges() // NAO ESQUECER DISSO

        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-amount"]`))
        expect(el.nativeElement.innerHTML).toEqual('1') 
    })

});


describe("AppComponent Integration", () => {
    let fixture : ComponentFixture<AppComponent>
    let counterEl : DebugElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, CounterComponent], //Componente Real
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        counterEl = fixture.debugElement.query(By.directive(MockedCounterComponent))
    })

    it("Displays the correct amount of buttons clicks", () => {
        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-amount"]`))
        let buttons = fixture.debugElement.queryAll(By.css("button"))

        let buttonsClicked = 0;
        for(let btt of buttons){
            clickIn(btt)
            buttonsClicked++
        }

        fixture.detectChanges()
        expect(el.nativeElement.innerHTML).toEqual(`${buttonsClicked}`) 
    })


})


function clickIn(element : DebugElement, ignoreDisable = false){
    expect(element).toBeTruthy()
    if(ignoreDisable || !element.properties['disabled'])
        element.triggerEventHandler("click", null)
}