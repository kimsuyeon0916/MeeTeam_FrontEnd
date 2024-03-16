import React from 'react'
import TitleAndIntro from './TitleAndIntro'

describe('<TitleAndIntro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TitleAndIntro />)
  })
})