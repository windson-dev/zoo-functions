const assert = require('assert');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se ao invocar a função passando Monday, retorne a string "The zoo is closed"', () => {
    assert.strictEqual(getOpeningHours('Monday', '09:00-AM'), 'The zoo is closed');
  });
  it('Teste se ao invocar a função passando Wednesday e "09:00-PM" como parametro, retorne a string "The zoo is closed"', () => {
    assert.strictEqual(getOpeningHours('Wednesday', '09:00-PM'), 'The zoo is closed');
  });
  it('Teste se ao invocar a função passando Tuesday e "09:00-AM" como parametro, retorne a string "The zoo is open"', () => {
    assert.strictEqual(getOpeningHours('Tuesday', '09:00-AM'), 'The zoo is open');
  });
});
