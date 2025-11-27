function saveLoginStyle() {
    let selected = document.querySelector("input[name='loginStyle']:checked");

    if (!selected) {
        document.getElementById("statusText").innerText = "Please select a style.";
        return;
    }

    localStorage.setItem("loginStyle", selected.value);

    document.getElementById("statusText").innerText = "Login style saved!";
}
