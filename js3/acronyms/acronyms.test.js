const acronymize = require('./acronyms');

describe('test acronymize', () => {
  test('should be create Acronyms from given sentence', () => {
    const nasa = 'National Aeronautics and Space Administration';

    expect(acronymize(nasa)).toBe('NASA');

    const dunderMifflin = 'dunder mifflin paper company.';

    expect(acronymize(dunderMifflin)).toBe('DMPC');

    const barc = 'Bhabha atomic Research centre';

    expect(acronymize(barc)).toBe('BARC');
  });
});
