window.onload = function loadStuff() {
  var win, doc, img, header, enhancedClass;
  
  if (!('addEventListener' in window)) {
    return;
  }
  
  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.content');
  enhancedClass = 'content-enhanced';
  
	var test = doc.querySelector('style').sheet.cssRules;
console.log(test);

  var bigSrc = (function() {
    
    var styles = doc.querySelector('style').sheet.cssRules;
    
    var bgDecl = (function() {

      var bgStyle, i, l = styles.length;
      for (i = 0; i < l; i++) {

        if (styles[i].selectorText &&
          styles[i].selectorText == '.' + enhancedClass) {
          
          bgStyle = styles[i].style.backgroundImage;

          break;
        }
      }

      return bgStyle;
    }());
      
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());
  
  img.onload = function() {
    alert('loaded!')
    header.className += ' ' + enhancedClass;
  };

  if (bigSrc) {
    img.src = bigSrc;
  }
};

// var path = document.querySelector('.branding path');
// var length = path.getTotalLength();
//  alert(length);
// // Clear any previous transition
// path.style.transition = path.style.WebkitTransition =
//   'none';
// // Set up the starting positions
// path.style.strokeDasharray = length + " " + length;
// path.style.strokeDashoffset = length;
// 
// // Trigger a layout so styles are calculated & the browser
// // picks up the starting position before animating
// path.getBoundingClientRect();
// // Define our transition
// path.style.transition = path.style.WebkitTransition =
//   'stroke-dashoffset ss ease-in-out';
// // Go!
// path.style.strokeDashoffset = '0';
