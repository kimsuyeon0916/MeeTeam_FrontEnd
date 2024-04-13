import React from 'react'
import RecruitPage from './RecruitPage'

describe('<RecruitPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecruitPage />)
  })
})