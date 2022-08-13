const email = document.getElementById("email");
const tooltip = document.getElementById("tooltiptext");

email.addEventListener("click", copyEmailToClipboard);

function copyEmailToClipboard() {
  let range = document.createRange();
  range.selectNode(document.getElementById("email"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
  tooltip.innerText = "Copied :)";
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
