import { describe, it, expect } from 'vitest';
import { reverseWords } from '../js/main.js';

describe('reverseWords', () => {

  it('invierte dos palabras simples', () => {
    expect(reverseWords('Hello World')).toBe('World Hello');
  });

  it('invierte palabras con puntuación', () => {
    expect(reverseWords('Hi There.')).toBe('There. Hi');
  });

  it('elimina espacios al inicio y al final', () => {
    expect(reverseWords('   espacios al rededor   ')).toBe('rededor al espacios');
  });

  it('normaliza múltiples espacios intermedios', () => {
    expect(reverseWords('Muchos      espacios       intermedios')).toBe('intermedios espacios Muchos');
  });

  it('devuelve cadena vacía si la entrada es vacía', () => {
    expect(reverseWords('')).toBe('');
  });

  it('devuelve la palabra si solo hay una', () => {
    expect(reverseWords('   solo   ')).toBe('solo');
  });

  it('devuelve cadena vacía si solo hay espacios', () => {
    expect(reverseWords('     ')).toBe('');
  });

  it('invierte tres palabras simples', () => {
    expect(reverseWords('a b c')).toBe('c b a');
  });

  it('maneja caracteres especiales y tildes', () => {
    expect(reverseWords('¿Cómo estás tú?')).toBe('tú? estás ¿Cómo');
  });

  it('normaliza tabs y espacios mezclados', () => {
    expect(reverseWords('uno\t\tdos   tres')).toBe('tres dos uno');
  });

});