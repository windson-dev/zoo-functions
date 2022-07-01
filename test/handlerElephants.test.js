const assert = require('assert');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função handlerElephants retorna undefined se não for passado nenhum parametro', () => {
    assert.strictEqual(handlerElephants(), undefined);
  });
  it('Testa se ao invocar função retorna um erro se o parametro passado não for uma string', () => {
    assert.strictEqual(handlerElephants(1), 'Parâmetro inválido, é necessário uma string');
  });
  it('Testa se ao invocar a função passando count como parametro, retorna o Length de count (4)', () => {
    assert.strictEqual(handlerElephants('count'), 4);
  });
  it('Testa se ao invocar a função passando names como parametro, retorna o nome de todos os Elefantes)', () => {
    expect(handlerElephants('names')).toContain('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('Testa se ao invocar a função passando averageAge como parametro, retorna a média de idade dos elefantes', () => {
    assert.strictEqual(handlerElephants('averageAge'), 10.5);
  });
  it('Testa se ao invocar a função passando popularity como parametro, retorna a popularidade dos elefantes', () => {
    assert.strictEqual(handlerElephants('popularity'), 5);
  });
  it('Testa se ao invocar a função passando availability como parametro, retorna os dias para visitar os elefantes', () => {
    expect(handlerElephants('availability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  it('Testa se ao invocar a função passando location como parametro, retorna a localização dos elefantes dentro do Zoológico', () => {
    assert.strictEqual(handlerElephants('location'), 'NW');
  });
});
