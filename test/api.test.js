import {generate, constructSentence} from '../src/api';
import * as util from '../src/util/words';

describe('[ API ]', () => {
  describe('generate', () => {
    test('returns a string',async  ()=>{
      const expected = await generate();
      expect(typeof expected === "string").toEqual(true)
    })
  })

  describe('constructSentence', () => {
    test('returns a string', async () => {
      const expected = await constructSentence();
      expect(expected.length).toBe(3);
      expect(typeof expected[0] === "string").toBe(true);
    })
  })
})
