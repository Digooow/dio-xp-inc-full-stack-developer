
import { describe, it, expect } from 'vitest';
import { somar } from './math';

describe('função somar', () => {
  it('deve somar dois números positivos', () => {
    expect(somar(2, 3)).toBe(5);
  });

  it('deve somar números negativos', () => {
    expect(somar(-1, -1)).toBe(-2);
  });
});