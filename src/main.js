var url = new URL(window.location.href);
var url = url.searchParams.get("url");
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});