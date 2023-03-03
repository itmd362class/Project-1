const submitButton = document.getElementById("submit");
submitButton.addEventListener("mouseover", function() {
  submitButton.style.backgroundColor = "grey";
});

submitButton.addEventListener("mouseout", function() {
  submitButton.style.backgroundColor = "";
});

