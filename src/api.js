import {words} from './util/words';

const constructSentence = async  () => {
  const nounArr = await words('noun');
  const adjArr = await words('adjective');
  const verbArr = await words('verb');
  const bodyPartsArr = ["heads", "shoulder", "knees", "toes", "arms", "legs"];
  const proNounsArr = [ "his", "hers", "its", "her"];

  const bodyPart = bodyPartsArr[Math.floor(Math.random() * bodyPartsArr.length)];
  const proNoun = proNounsArr[Math.floor(Math.random() * proNounsArr.length)]


  return [
    `A ${adjArr[Math.floor(Math.random() * adjArr.length)]} ${nounArr[Math.floor(Math.random() * nounArr.length)]} ${verbArr[Math.floor(Math.random() * verbArr.length)]} ${nounArr[Math.floor(Math.random() * nounArr.length)]} while being ${verbArr[Math.floor(Math.random() * verbArr.length)]}ed by ${adjArr[Math.floor(Math.random() * adjArr.length)]} ${nounArr[Math.floor(Math.random() * nounArr.length)]}`,
    `A ${nounArr[Math.floor(Math.random() * nounArr.length)]} ${verbArr[Math.floor(Math.random() * verbArr.length)]}s on the ${bodyPart} of ${nounArr[Math.floor(Math.random() * nounArr.length)]}  to ${verbArr[Math.floor(Math.random() * verbArr.length)]} ${proNoun} ${nounArr[Math.floor(Math.random() * nounArr.length)]}`,
    `A ${nounArr[Math.floor(Math.random() * nounArr.length)]} ${verbArr[Math.floor(Math.random() * verbArr.length)]}s ${nounArr[Math.floor(Math.random() * nounArr.length)]} by ${verbArr[Math.floor(Math.random() * verbArr.length)]}ing  ${nounArr[Math.floor(Math.random() * nounArr.length)]}  of  ${adjArr[Math.floor(Math.random() * adjArr.length)]} into  ${adjArr[Math.floor(Math.random() * adjArr.length)]} ${nounArr[Math.floor(Math.random() * nounArr.length)]} of  ${adjArr[Math.floor(Math.random() * adjArr.length)]}`
  ]
};

// const TYPES = [
//  `A ${randomSelection("adjective")} ${randomSelection("noun")} ${randomSelection("verb")} ${randomSelection("noun")} while being ${randomSelection("verb")}ed by ${randomSelection("adjective")} ${randomSelection("noun")}.`,
//  `A ${randomSelection("noun")} ${randomSelection("verb")}s on the ${randomSelection("body part")} of ${randomSelection("noun")}s to ${randomSelection("verb")} ${randomSelection("pronouns")} ${randomSelection("noun")}.`,
//  `A ${randomSelection("noun")} ${randomSelection("verb")}s ${randomSelection("noun")} by ${randomSelection("verb")}ing ${randomSelection("noun")} of ${randomSelection("adjective")} into ${randomSelection("adjective")} ${randomSelection("noun")} of ${randomSelection("adjective")}`
// ];

const generate = async () => {
  const randNum = Math.floor(Math.random() * (3 - 1)) + 1;
  const sentenceArr = await constructSentence()
  const sentencedPicked = sentenceArr[randNum];
  return sentencedPicked.toString();
}

export {
  generate,
  constructSentence
};
