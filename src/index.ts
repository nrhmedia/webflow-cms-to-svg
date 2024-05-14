function decodeHTMLEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

function decodeSVGTextElements() {
  const svgTextElements = document.querySelectorAll('[text-to-svg="true"]');
  svgTextElements.forEach(function (element) {
    const decodedText = decodeHTMLEntities(element.innerHTML);
    element.innerHTML = decodedText;
  });
}

document.addEventListener('DOMContentLoaded', decodeSVGTextElements);
