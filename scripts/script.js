
    let downloadButton = document.querySelector(".downloadfirst");
    let downloadCloseButton1 = document.querySelector(".closebutton");
    let downloadInformation = document.querySelector(".information-download-container");
    let textInformation = document.querySelector(".information-text")

    downloadButton.addEventListener("click", function () {
        downloadInformation.style.display = 'block';
        downloadCloseButton1.style.display = 'block';
        textInformation.style.display = 'none';
        downloadButton.style.display= 'none';
    });
    

    
    
        let downloadFirstButton = document.querySelector(".downloadfirst");
        let downloadCloseButton = document.querySelector(".closebutton");
        let downloadCloseInformation = document.querySelector(".information-download-container");
        let textOpenInformation = document.querySelector(".information-text")
    
        downloadCloseButton.addEventListener("click", function (event) {
            downloadCloseInformation.style.display = 'none';
            downloadCloseButton.style.display = 'none';
            textOpenInformation.style.display = 'block';
            downloadFirstButton.style.display = 'block';

        });
       
    