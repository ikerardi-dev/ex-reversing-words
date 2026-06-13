/**
 * Invierte el orden de las palabras de un string.
 * Elimina espacios al inicio/final y normaliza
 * múltiples espacios intermedios.
 * @param {string} str
 * @returns {string}
 */
export function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}