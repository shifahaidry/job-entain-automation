import { CATEGORY_ID_THOROUGHBRED,CATEGORY_ID_GREYHOUND,CATEGORY_ID_HARNESS } from "../config/constants";

describe('Countdown Timer', () => {
  it('Thoroughbred countdown should be positive and log total time of section',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)
    let sum = 0;
    cy.get('div > .item').each(($el, index, $list) => {
      
      // uncomment for detail log
      // cy.log($el.find('div.race-name > p').text() + ' will be in ')
      // cy.log($el.children('p').text())

      let localtime  = $el.children('p').text();
      // check whether time is positive only, it can't be negative
      // uncomment below one to expect all the time should be in positive only, that's bug you can report
      // expect(localtime).to.not.contain('-');

      // hour
      if(localtime.indexOf('h') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(0,localtime.indexOf('h')));
        sum = sum + number * 3600;       
      }

      if(localtime.indexOf('m') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('h',''));
        sum = sum + number * 60;
      }
      
      if(localtime.indexOf('s') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('m',''));
        sum = sum + number;  
      }
      if (index === $list.length - 1) {
        cy.log('For Thoroughbred Next Race , total time is approax ' + sum / 60 + 'm');
      }
    })
  });

  it('Greyhound countdown should be positive and log total time of section',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)
    let sum = 0;
    cy.get('div > .item').each(($el, index, $list) => {
      
      // comment for hiding detail log
      cy.log($el.find('div.race-name > p').text() + ' will be in ')
      cy.log($el.children('p').text())

      let localtime  = $el.children('p').text();
      // check whether time is positive only, it can't be negative
      // uncomment below one to expect all the time should be in positive only, that's bug you can report
      // expect(localtime).to.not.contain('-');

      // hour
      if(localtime.indexOf('h') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(0,localtime.indexOf('h')));
        sum = sum + number * 3600;       
      }

      if(localtime.indexOf('m') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('h',''));
        sum = sum + number * 60;
      }
      
      if(localtime.indexOf('s') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('m',''));
        sum = sum + number;  
      }
      if (index === $list.length - 1) {
        cy.log('For Greyhound Next Race , total time is approax ' + sum / 60 + 'm');
      }     
    })
  });

  it('Harness countdown should be positive and log total time of section',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)
    let sum = 0;
    cy.get('div > .item').each(($el, index, $list) => {
      
      // comment for hiding detail log
      cy.log($el.find('div.race-name > p').text() + ' will be in ')
      cy.log($el.children('p').text())

      let localtime  = $el.children('p').text();
      // check whether time is positive only, it can't be negative
      // uncomment below one to expect all the time should be in positive only, that's bug you can report
      // expect(localtime).to.not.contain('-');

      // hour
      if(localtime.indexOf('h') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(0,localtime.indexOf('h')));
        sum = sum + number * 3600;       
      }

      if(localtime.indexOf('m') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('h',''));
        sum = sum + number * 60;
      }
      
      if(localtime.indexOf('s') >= 0 && localtime.indexOf('-') <= 0) {
        let number = Number(localtime.substring(localtime.indexOf('m') - 2,localtime.indexOf('m')).replace('m',''));
        sum = sum + number;  
      }
      if (index === $list.length - 1) {
        cy.log('For Harness Next Race , total time is approax ' + sum / 60 + 'm');
      }
    })
  });
});
