const tinyimg1 = document.getElementById("tinyimg1");
const tinyimg2 = document.getElementById("tinyimg2");
const tinyimg3 = document.getElementById("tinyimg3");
tinyimg1.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklejarbox.jpg") center center/contain no-repeat';
  document.getElementById("hugepic").style.background =
    'url("/assets/images/picklejarbox.jpg")';
  document.getElementById("hugepic").style.backgroundRepeat = "no-repeat";
  document.getElementById("hugepic").style.backgroundSize = "contain";
  document.getElementById("hugepic").style.width = "200%";
  document.getElementById("hugepic").style.height = "200%";
  document.getElementById("hugepic").style.position = "absolute";
});

tinyimg2.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklejar.jpg") center center/contain no-repeat';
  document.getElementById("hugepic").style.background =
    'url("/assets/images/picklejar.jpg")';
  document.getElementById("hugepic").style.backgroundRepeat = "no-repeat";
  document.getElementById("hugepic").style.backgroundSize = "contain";
  document.getElementById("hugepic").style.width = "200%";
  document.getElementById("hugepic").style.height = "200%";
  document.getElementById("hugepic").style.position = "absolute";
  document.getElementById("hugepic").style.backgroundPosition = "center";
});

tinyimg3.addEventListener("mouseover", function () {
  document.getElementById("bigimg").style.background =
    'url("/assets/images/picklebox.jpg") center center/contain no-repeat';
  document.getElementById("hugepic").style.background =
    'url("/assets/images/picklebox.jpg")';
  document.getElementById("hugepic").style.backgroundRepeat = "no-repeat";
  document.getElementById("hugepic").style.backgroundSize = "contain;";
  document.getElementById("hugepic").style.width = "200%";
  document.getElementById("hugepic").style.height = "200%";
  document.getElementById("hugepic").style.position = "absolute";
  document.getElementById("hugepic").style.backgroundPosition = "center";
});
