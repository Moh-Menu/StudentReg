// Show correct login style based on admin settings
function loadLoginStyle() {
    let style = localStorage.getItem("loginStyle");

    document.getElementById("floatingLogin").style.display = "none";
    document.getElementById("centerLogin").style.display = "none";
    document.getElementById("topRightLogin").style.display = "none";

    if (style === "floating") {
        document.getElementById("floatingLogin").style.display = "block";
    } else if (style === "center") {
        document.getElementById("centerLogin").style.display = "flex";
    } else {
        document.getElementById("topRightLogin").style.display = "block";
    }
}
