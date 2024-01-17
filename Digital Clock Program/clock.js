function updatetimer(){

    const now = new Date();
    let Hours = now.getHours();
    const meridian = Hours >= 12 ? "PM" : "AM";
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2, 0);
    const Minutes = now.getMinutes().toString().padStart(2, 0);
    const Seconds = now.getSeconds().toString().padStart(2, 0);
    const timenow = `${Hours}:${Minutes}:${Seconds} ${meridian}`;
    document.getElementById("clock").textContent = timenow; 
}
updatetimer();
setInterval(updatetimer, 1000);
 