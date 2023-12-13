function solution(word) {
  const letter = ['A', 'E', 'I', 'O', 'U'];
  let new_word = "";
  let dict = [];
  for (let i = 0; i < 5; i++) { // recursive? 
    dict.push(new_word + letter[i]);  
    
    for (let j = 0; j < 5; j++) {
      dict.push(new_word + letter[i] + letter[j]);
      
        for (let k = 0; k < 5; k++) {
          dict.push(new_word + letter[i] + letter[j] + letter[k]);
          
            for (let l = 0; l < 5; l++) {
              dict.push(new_word + letter[i] + letter[j] + letter[k] + letter[l]);
                
              for (let m = 0; m < 5; m++) { 
                dict.push(new_word + letter[i] + letter[j] + letter[k] + letter[l] + letter[m]);
              }
            }
        } 
    }
  }  
  return dict.indexOf(word) + 1
}