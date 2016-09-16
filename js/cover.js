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
      
    return bgDecl;
  }());
  alert("Hey!!!");
  img.onload = function() {
    
    header.className += ' ' + enhancedClass;
  };

  if (bigSrc) {
    alert('loaded!')
    img.src = bigSrc;
  }
};
