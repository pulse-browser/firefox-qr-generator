async function generateQRCode() {
    var url = await browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      return(tabs[0].url);
    })

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

generateQRCode();