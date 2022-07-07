function device() {
    var Device;
    var dev = document.forms["frm1"].devices.value;
    if (dev == "ipod") {
        Device = "small and used to listen to songs.";
    }
    if (dev == "ipad") {
        Device = "used by some community called rich..";
    }
    if (dev == "iphone") {
        Device = "mobile phone used by me..";
    }
    document.getElementById("deve").innerHTML =
        "The speciality of device is: " + Device;
}