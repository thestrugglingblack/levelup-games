require('dotenv').config();
import {request} from './request'

const API_KEY = process.env.API_KEY;

const words = async (type) => {
  const acceptedParams = ['noun', 'adjective', 'verb']

  if(!(acceptedParams.includes(type))){
     throw new TypeError(`Enter noun, adjective or verb you typed in ${type}`);
  }

  if(type === 'noun') {
    let nounList = [];
    const wordNikResults = await request(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=${type}&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=100&api_key=${API_KEY}`)

  wordNikResults.map(wordObj => {
      nounList.push(wordObj.word);
    });

    return nounList.sort();
  }

  if(type === 'adjective') {
    let adjectiveList = [];
    const wordNikResults = await request(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=${type}&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=100&api_key=${API_KEY}`)


    wordNikResults.map(wordObj => {
      adjectiveList.push(wordObj.word);
    });

    return adjectiveList.sort();
  }


  if(type === 'verb') {
    let verbList = [];
    const wordNikResults = await request(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=${type}&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=100&api_key=${API_KEY}`)


    wordNikResults.map(wordObj => {
      verbList.push(wordObj.word);
    });

    return verbList.sort();
  }
}

export {request, words};
