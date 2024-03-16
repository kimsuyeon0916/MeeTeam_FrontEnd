import React from 'react';
import InputProfessor from './InputProfessor';

describe('<InputProfessor />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<InputProfessor />);
	});
});
