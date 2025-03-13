let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function GenerateQr() {
    let x = qrText.value.trim();
    if (x !== "") {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(x)}`;
        
        // Wait for the image to load before applying animation
        qrImg.onload = () => {
            imgBox.classList.add("show-img"); // Add class for animation
        };
    } else {
        alert("Please enter text or a valid URL");
    }
}

function DownloadQr() {
    const qrImg = document.getElementById("qrImg");

    if (qrImg.src && qrImg.src !== window.location.href) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.crossOrigin = "Anonymous"; // Avoid CORS issues
        img.src = qrImg.src;

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png"); // Convert to base64
            link.download = "QR_Code.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    } else {
        alert("Please generate a QR code first!");
    }
}
