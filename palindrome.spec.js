import palindrome from './palindrome';

describe('Palindrome', ()=> {

  it('works with integers', ()=> {
    expect(palindrome(323)).toEqual(true);
  });

  it('works with integers', ()=> {
    expect(palindrome(332)).toEqual(false);
  });

});