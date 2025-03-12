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


   
