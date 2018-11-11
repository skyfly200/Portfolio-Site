// get hash from url
var section = window.location.hash;

// if hash is a skill then open that skill section

// target section element
var el = document.querySelector("#feature");

if (el.length === 0) {
  return;
}

document.documentElement.scrollTop = el.offset().top;
