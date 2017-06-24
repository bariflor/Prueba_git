var assert = require('assert');

function suma(op1, op2)
{
  if(!op2)
  {
    op2 = 0;
  }
  return op1 + op2;
}


describe('Función suma', function(){
  it('5 de la suma de 3 y 2', function(){
    assert.equal(5, suma(3,2));
  });
  it('3 de la suma de 3 y nada', function(){
    assert.equal(3, suma(3));
  });
  it('3 de la suma de nada y 3', function(){
    assert.equal(3, suma("null", 3));
  });
});
