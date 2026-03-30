const valorConta = 100;
const percentualGorjeta = 3;

const valorGorjeta = valorConta * percentualGorjeta / 100;
const valorTotal = valorConta + valorGorjeta;

console.log(`Total a pagar: R$ ${valorConta.toFixed(2)}, Gorjeta: R$ ${valorGorjeta.toFixed(2)}, Valor Total: R$ ${valorTotal.toFixed(2)}`);