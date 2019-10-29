const getWordCount = datas => {
  const wordCounts2 = {};

  datas.forEach(data => {
    const word = data.toLowerCase(); // küçük harf
    // if this word is not already a property of the wordCounts object,
    // create it with the value of 1
    if (!wordCounts2[word]) {
      wordCounts2[word] = 1;
    } else {
      // if this word IS already a property of wordCounts, then increase its count value
      wordCounts2[word] += 1;
    }
  });

  console.log(wordCounts2);

  return wordCounts2;
};

export default getWordCount;
