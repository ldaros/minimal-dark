var isNavOpen = false;

/* Set the width of the side navigation*/
function toggleSideNavigation() {
  if (isNavOpen) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    document.getElementById("transparent").style.display = "none";
    isNavOpen = false;
    return;
  }

  document.getElementById("mySidenav").style.width = "240px";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  document.getElementById("transparent").style.display = "block";
  isNavOpen = true;
  return;
}
