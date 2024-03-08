const downloadBtn = document.querySelector(".download-btn");
// google drive's file link

const fileLink = "https://drive.google.com/file/d/1KyJbHh0T9sjB_Vx8zNmMKurCQyKUJa8m/view?usp=sharing";

const initTimer = () => {
    // Getting data-timer attribute from html
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

    // creating initCounter variable with setInterval function
    const initCounter = setInterval(() => {
        if(timer > 0){
            timer--;
             return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "Your file is downloading...";
        // setTimeout(() => {
        //     downloadBtn.classList.replace("timer", "disable-timer");
        //     downloadBtn.innerHTML = `<span class="icon material-symbols-rounded"><i class="fa-solid fa-download"></i>
        //     <span class="text">Download Again</span>`;
        // }, 3000);
     
    }, 1000) ;

};


downloadBtn.addEventListener("click", initTimer);