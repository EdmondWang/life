import 'babel-polyfill';
import { expect } from 'chai';
import is from './is.js';

describe('My.is', () => {
  it('Object.is(0, -0) == false', () => {
    expect(is(0, -0)).to.be.false;
  });
  it('Object.is(NaN, NaN) == true', () => {
    expect(is(NaN, NaN)).to.be.true;
  });
  it('Object.is(1, 1) == true', () => {
    expect(is(1, 1)).to.be.true;
  });
  it('Object.is({a: 1}, {a: 1}) == true', () => {
    expect(is({a: 1}, {a:1})).to.be.false;
  });
  
});
