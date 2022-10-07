var url = new URL(window.location.href);
var url = url.searchParams.get("url");
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 205,
    height: 205,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});
