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
  it('Teste se ao invocar a função passando Tuesday e "09:00-AM" como parametro, retorne a string "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow();
  });
  it('Teste se ao invocar a função passando Tuesday e "09:00-AM" como parametro, retorne a string "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow();
  });
  it('Teste se ao invocar a função passando Tuesday e "09:00-AM" como parametro, retorne a string "The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow();
  });
  it('Teste se ao invocar a função passando o primeiro parametro vazio, a função não funciona', () => {
    expect(() => getOpeningHours(' ', '09:00-ZM')).toThrow();
  });
  it('testa se nao receber nenhum parametros retonar um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
