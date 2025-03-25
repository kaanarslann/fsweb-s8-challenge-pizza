describe('Temel Input Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.get("[data-cy='order-form']").click()
  })
  it('Inputa bir metin girer', () => {
    cy.get("[data-cy='name-input']").type('Kaan')
    cy.get("[data-cy='name-input']").should('have.value',"Kaan")
  })
  it('Birden fazla malzeme seçer', () => {
    cy.get("[data-cy='checkbox']").each((checkbox, index) => {
      cy.wrap(checkbox).check().should('be.checked')
    })
  })
})

describe('Form Gönderme', () => {
  it('Formu doldurur ve gönderir', () => {
    cy.visit('http://localhost:5173/')
    cy.get("[data-cy='order-form']").click()
    cy.get("[data-cy='radio-medium']").check()
    cy.get("[data-cy='select']").select("Normal")
    cy.get("[data-cy='checkbox']").each((checkbox, index) => {
      if (index < 4) {
        cy.wrap(checkbox).check()
      }
    })
    cy.get("[data-cy='name-input']").type('Kaan')
    cy.get("[data-cy='textarea']").type('Lütfen zili çalmayın')
    cy.get("[data-cy='submit-button']").click()
    cy.url().should('include', '/success')
    cy.contains('SİPARİŞİNİZ ALINDI!').should('be.visible')
  })
})