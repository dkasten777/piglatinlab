"use strict";

const piggy = (word) => {
    
    //first convert to lower case
    word = word.toLowerCase();
    const vowels = ['a','e', 'i', 'o', 'u'];
    if (vowels.includes(word[0])) {
        //if word starts w/ vowel
        return word + "way";
    }else{
        let prefix = "";
        //if word starts w/ consonant
        for (let i = 0; i < word.length; i++){
            if (!vowels.includes(word[i])) {
                prefix += word[i];
            }else{
                return word.slice(i) + prefix + "ay"
            }
        }

    }
    
}




module.exports = piggy;