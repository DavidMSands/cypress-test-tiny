import { cy, describe, it } from 'local-cypress';
import { AppComponent } from './app.component';
import { createOutputSpy, mount } from 'cypress/angular';


describe('AppComponent', () => {
 it('should emit events on button click', () => {
    mount(AppComponent, {
        componentProperties: {
            newOutput: createOutputSpy('newOutput'),
            oldOutput: createOutputSpy('oldOutput'),
        },
    });
    cy.get('#test-button').click();
    cy.get('@oldOutput').should('have.been.called');
    cy.get('@newOutput').should('have.been.called');
 });
});