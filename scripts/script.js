
    let downloadButton = document.querySelector("#downloadbtn");
    let downloadInformation = document.querySelector(".information-download-container");

    downloadButton.addEventListener("click", function () {
        downloadInformation.classList.toggle("open");
    });


        let downloadCloseButton = document.querySelector("#closedownloadbtn");
        let downloadCloseInformation = document.querySelector(".information-download-container");
    
        downloadCloseButton.addEventListener("click", function () {
            downloadCloseInformation.classList.toggle("close");
        });
    
    