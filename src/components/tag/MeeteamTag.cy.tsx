import React from 'react'
import MeeteamTag from './MeeteamTag'

describe('<MeeteamTag />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MeeteamTag />)
  })
})