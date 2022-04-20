import * as fun from '../src/module';
import { describe, it, expect } from '@jest/globals';

describe('function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(fun.sum(1, 2)).toBe(3);
  });
});
