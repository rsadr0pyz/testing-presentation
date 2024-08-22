import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockedCounterComponent } from "./spec-helpers/counter.mock.component"

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
    
    //Esse teste é inútil, pois somos incapazes de acessar 
    //Os botões para simular o clique. Isso é só para inglês ver.
    it("Displays the correct amount of buttons clicks", () => {
        let counter : MockedCounterComponent = counterEl.componentInstance

        //Como é um teste de unidade, não temos acesso aos botões do componente
        counter.actualValEvent.emit(1)
        
        fixture.detectChanges() // NAO ESQUECER DISSO

        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-amount"]`))
        expect(el.nativeElement.innerHTML).toEqual('1') 
    })

});
