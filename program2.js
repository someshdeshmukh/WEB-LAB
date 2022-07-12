function Capt() {
    var Country = document.forms["frm1"].country.value;
    var capt;
    if (Country == "India") capt = "Delhi";
    if (Country == "Sri Lanka") capt = "Colombia";
    if (Country == "Bangladesh") capt = "Kabul";

    document.getElementById("p1").innerHTML =
        "Capital of Selected country is:" + capt;
}