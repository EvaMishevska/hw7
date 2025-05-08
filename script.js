var paragraf = document.getElementsByTagName('div');

function makeCounter() {
    var currentCount = 1;
  
    return function() {
      return currentCount++;
    };
  }
  
  var counter = makeCounter();
  var countertwo = makeCounter()
 
for (let i = 0; i < paragraf.length; i++) {

    if (i % 2 !== 0) {
        paragraf[i].textContent = 'Я нечетный элемент №' + counter();
    } else if (i % 2 == 0) {
        paragraf[i].textContent = 'Я четный элемент №' + countertwo();
    }
    }