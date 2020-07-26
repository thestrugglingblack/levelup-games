import * as util from '../src/util/words';
import * as request from '../src/util/request';

describe('[ UTIL ]', () => {
  describe('words', () => {
    test('returns list of words', async ()=> {
      const fakeData = [
        { id: 0, word: 'caimito' },
        { id: 0, word: 'apportioner' },
        { id: 0, word: "Jeanne d'Arc" },
        { id: 0, word: 'anisoptera' },
        { id: 0, word: 'water-cow' },
        { id: 0, word: 'preliminary' },
        { id: 0, word: 'malpractice' },
        { id: 0, word: 'streaks' },
        { id: 0, word: 'Sanger' },
        { id: 0, word: 'nostril' },
        { id: 0, word: 'charmer' },
        { id: 0, word: 'endoskeletons' },
        { id: 0, word: 'velocipedes' },
        { id: 0, word: 'tetrachloride' },
        { id: 0, word: 'Bronze Age' },
        { id: 0, word: 'sphæristerium' },
        { id: 0, word: 'Scorpios' },
        { id: 0, word: 'ratcher' },
        { id: 0, word: 'maddock' }
      ];

      const addRequest = jest.spyOn(request, 'request');
      addRequest.mockImplementation(() => {
        return fakeData;
      })

      expect(await util.words('noun')).toStrictEqual([ "caimito", "apportioner", "Jeanne d'Arc", "anisoptera", "water-cow", "preliminary", "malpractice", "streaks", "Sanger", "nostril", "charmer", "endoskeletons", "velocipedes", "tetrachloride", "Bronze Age", "sphæristerium", "Scorpios", "ratcher", "maddock"].sort())
    })

    test('return error message if parameters not met', () => {
      try {
       util.words('articles')
      } catch (error){
        expect(error.message).toBe('Enter noun, adjective or verb');
      }
    })
  })
})
