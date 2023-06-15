const bigimg = document.getElementById("bigimg");

bigimg.addEventListener("mouseover", function () {
  document.getElementById("zoombox").style.display = "inline";
  document.getElementById("zoombox").style.display = "inline";
});
bigimg.addEventListener("mouseleave", function () {
  document.getElementById("zoombox").style.display = "none";
});

bigimg.addEventListener("mousemove", function (event) {
  let rect = bigimg.getBoundingClientRect();

  let heightPercent = (
    ((event.clientY - rect.top) / rect.height) *
    100
  ).toFixed();
  let widthPercent = (
    ((event.clientX - rect.left) / rect.width) *
    100
  ).toFixed();

  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  document.getElementById("hugepic").style.top = `-${heightPercent}%`;
  document.getElementById("hugepic").style.left = `-${widthPercent}%`;
});
