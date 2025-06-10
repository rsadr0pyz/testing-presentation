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
    
    //Teste de unidade.
    it("Displays the correct amount of buttons clicks", () => {
        let counter : MockedCounterComponent = counterEl.componentInstance

        //Como é um teste de unidade, não temos acesso aos botões do componente
        
        //Notem, o teste de unidade requer que os mocks estejam sincronizados com o verdadeiro componente
        //Aqui estamos assumindo que em um clique, o counter irá enviar 1, mas suponha que o comportamento
        //do counter foi alterado, e este teste não foi atualizado. O teste irá passar, mesmo que na prática o código não
        //funciona. Este é um dos problemas dos testes de unidade, requer que os mocks funcionem como os componentes, e requer manter
        //os mocks sincronizados. Mas, isso é trabalho extra. Sabe o que mais está sincronizado com o componente original? O próprio
        //componente original, por isso prefiro sempre usar ele (testes de integração) em vez de mocks (testes de unidade).
        //Usando mocks apenas em serviços que requerem conexão com o backend.
        counter.actualValEvent.emit(1) 

        
        fixture.detectChanges() // NAO ESQUECER DISSO

        let el = fixture.debugElement.query(By.css(`[data-testid="button-clicked-amount"]`))
        expect(el.nativeElement.innerHTML).toEqual('1') 
    })

});
