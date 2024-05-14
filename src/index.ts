function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

function decodeSVGTextElements() {
  var svgTextElements = document.querySelectorAll('[text-to-svg="true"]');
  svgTextElements.forEach(function(element) {
    var decodedText = decodeHTMLEntities(element.innerHTML);
    element.innerHTML = decodedText;
  });
}

document.addEventListener('DOMContentLoaded', decodeSVGTextElements);