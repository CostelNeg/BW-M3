function showFullReview(button) {
  let reviewIndex = button.getAttribute("data-review");
  let shortReview = document.querySelectorAll(".short-review")[reviewIndex - 1];
  let fullReview = document.querySelectorAll(".full-review")[reviewIndex - 1];
  let btnMore = document.querySelectorAll(".read-more-btn")[reviewIndex - 1];
  let btnLess = document.querySelectorAll(".read-less-btn")[reviewIndex - 1];

  // Mostra la recensione completa e nasconde il pulsante "Mostra di più"
  shortReview.style.display = "none";
  fullReview.style.display = "block";
  btnMore.style.display = "none";
  btnLess.style.display = "inline-block";
}

function hideFullReview(button) {
  let reviewIndex = button.getAttribute("data-review");
  let shortReview = document.querySelectorAll(".short-review")[reviewIndex - 1];
  let fullReview = document.querySelectorAll(".full-review")[reviewIndex - 1];
  let btnMore = document.querySelectorAll(".read-more-btn")[reviewIndex - 1];
  let btnLess = document.querySelectorAll(".read-less-btn")[reviewIndex - 1];

  // Nasconde la recensione completa e mostra il pulsante "Mostra di più"
  shortReview.style.display = "block";
  fullReview.style.display = "none";
  btnMore.style.display = "inline-block";
  btnLess.style.display = "none";
}
