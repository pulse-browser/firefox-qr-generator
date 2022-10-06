async function generateQRCode() {
    var url = await browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      return(tabs[0].url);
    })

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 205,
        height: 205,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

generateQRCode();