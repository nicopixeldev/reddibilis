import React from 'react'
import HipotecasPage from './page'

describe('<HipotecasPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HipotecasPage />)
  })
})