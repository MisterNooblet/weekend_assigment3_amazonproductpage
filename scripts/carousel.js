window.onload = function () {
  const forward = document.getElementById("nextpage");
  const back = document.getElementById("previouspage");

  forward.addEventListener("click", function () {
    console.log("text");
    for (let element of document.getElementsByClassName("pg1")) {
      element.style.display = "none";
    }
    for (let element of document.getElementsByClassName("pg2")) {
      element.style.display = "inline";
    }
  });

  back.addEventListener("click", function () {
    for (let element of document.getElementsByClassName("pg1")) {
      element.style.display = "inline";
    }
    for (let element of document.getElementsByClassName("pg2")) {
      element.style.display = "none";
    }
  });
};
