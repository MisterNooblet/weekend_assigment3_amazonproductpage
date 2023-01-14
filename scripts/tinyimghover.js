const tinyimg1 = document.getElementById("tinyimg1");
const tinyimg2 = document.getElementById("tinyimg2");
const tinyimg3 = document.getElementById("tinyimg3");

tinyimg1.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklejarbox.jpg") center center/contain no-repeat';
});

tinyimg2.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklejar.jpg") center center/contain no-repeat';
});

tinyimg3.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklebox.jpg") center center/contain no-repeat';
});
