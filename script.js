const textElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
let count = 0;
let textIndex = 0;
let currentTxt = 0;
let words = '';


(function ngetik(){
    if(count == textElement.length){
        count == 0;
    }
    currentTxt = textElement[count];

    words = currentTxt.slice(0, ++textIndex);
    document.querySelector('.efek-ngetik').textContent = words;
   
   
    if(words.length == currentTxt.length){
        count++;
        textIndex == 0;
    }
    setTimeout(ngetik, 500);
})();