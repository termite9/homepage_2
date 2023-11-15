const startTime = document.querySelector("#start-time");

function diffDay() {
    const masTime = new Date("2023-09-14");
    const todayTime = new Date();
    
    const diff = todayTime -masTime;

    const diffDay = String(Math.floor(diff / (1000*60*60*24)));
    
    startTime.innerText = `It's been ${diffDay} days `;
}
diffDay();
