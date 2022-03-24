/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }


  /** Pick random choice from array */
  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];
   
    while ( out.length < numWords && key !== null ){
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return out.join(" ");
  }
  
  /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();
    let arr = [];

    for(let i=0; i<this.words.length; i += 1){
      let word = this.words[i];
      let nextWord = this.words[i+1];
      
      if ( !nextWord ) {
        nextWord = null;
      }
    
      if (chains.has(word)){
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]); 
      }
    }
    this.chains = chains;
  }

}

module.exports = {
  MarkovMachine,
};

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  // makeChains() {
  //   // TODO
  //   let chains = new Map();
  //   let arr = [];

  //   for(let i=0; i<this.words.length; i += 1){
  //       let word = this.words[i];
  //       let nextWord = this.words[i+1];
  //       if ( !nextWord ) {
  //         nextWord = null;
  //       }
       
  //       if (chains.has(word)){
  //         arr = chains.get(word);
  //         arr.push(nextWord);
  //         chains.set(word, arr); 
          
  //       } else {
  //         chains.set(word, [nextWord]); 
  //       }
  //   }
  //   this.chains = chains;
  // }

//}


module.exports = {
  MarkovMachine,
};