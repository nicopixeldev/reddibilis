import React from 'react'
import HipotecasList from './list'

describe('<HipotecasList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HipotecasList />)
  })
})