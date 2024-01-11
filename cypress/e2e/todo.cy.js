describe('Agregar tareas', () => {
    it('Agregar una tarea a las listas', () => {
      cy.visit('https://todomvc.com/examples/react/#/completed')
  
      cy.get('.new-todo').type('Tarea 1')
      cy.get('.new-todo').type('{enter}')
      cy.contains('Active').click()
      
      cy.get('.todo-list').contains('Tarea 1')
    });
  
    it('2', () => {
      cy.visit('https://todomvc.com/examples/react/#/completed')
  
      cy.get('.new-todo').type('Tarea2')
      cy.get('.new-todo').type('{enter}')
      cy.contains('Active').click()
      cy.get('.toggle').click()
      cy.contains('completed').click()
    });
  
    it('3', () => {
      cy.visit('https://todomvc.com/examples/react/#/completed')
      cy.get('.new-todo').type('Tarea3')
      cy.get('.new-todo').type('{enter}')
      cy.contains('Active').click()
      cy.get('.toggle').click()
      cy.contains('Completed').click()
      cy.get('.toggle').click()
  
    });   
  })
  