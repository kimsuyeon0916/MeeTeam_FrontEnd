import React from 'react'
import InputContainer from './InputContainer'

describe('<InputContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputContainer />)
  })
})