window.onload = function () {
  const forward = document.getElementById("nextpage");
  const back = document.getElementById("previouspage");

  let currentPage = 1;

  forward.addEventListener("click", function () {
    currentPage = 2;
    document.getElementById("pagecount").textContent = currentPage;
    for (let element of document.getElementsByClassName("pg1")) {
      element.style.display = "none";
    }
    for (let element of document.getElementsByClassName("pg2")) {
      element.style.display = "inline";
    }
    document.getElementById("startover").style.display = "inline";
  });

  back.addEventListener("click", function () {
    currentPage = 1;
    document.getElementById("pagecount").textContent = currentPage;
    for (let element of document.getElementsByClassName("pg1")) {
      element.style.display = "inline";
    }
    for (let element of document.getElementsByClassName("pg2")) {
      element.style.display = "none";
    }
    document.getElementById("startover").style.display = "none";
  });
};

function resetcarousel() {
  currentPage = 1;
  document.getElementById("pagecount").textContent = currentPage;
  for (let element of document.getElementsByClassName("pg1")) {
    element.style.display = "inline";
  }
  for (let element of document.getElementsByClassName("pg2")) {
    element.style.display = "none";
  }
  document.getElementById("startover").style.display = "none";
}
