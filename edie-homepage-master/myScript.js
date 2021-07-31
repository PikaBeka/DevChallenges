function toggle() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav wrapper-wide") {
    x.className += " responsive";
  } else {
    x.className = "topnav wrapper-wide";
  }
}
