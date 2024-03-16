import React from 'react'
import InputRoleList from './InputRoleList'

describe('<InputRoleList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputRoleList />)
  })
})