import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

    let fixture : ComponentFixture<AppComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents()

        fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
    })
    
    
    it("initiates with zero", () => {
        expect(fixture.componentInstance.buttonClicked).toEqual(0) 
        //Teste ruim pois checa a implementação, não o comportamento, e se a variavel mudasse?
    })

    it("initiates with zero 1", () => {
        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-1"]`))
        expect(el.nativeElement.innerHTML).toEqual("How many times was button clicked: 0") 
        //Teste ruim pois checa a implementação, não o comportamento, e se o texto mudasse?
    })

    it("initiates with zero 2", () => {
        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-2"]`))
        expect(el.nativeElement.innerHTML).toEqual('0') 
    })

});
