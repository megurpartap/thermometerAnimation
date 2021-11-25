// thermIcon

const thermIcon = document.getElementById('thermIcon');

const imgChange = () => {
    
    thermIcon.className = "fas fa-thermometer-empty";
    thermIcon.style.color = "white"
    
    setTimeout(() => {
    thermIcon.className = "fas fa-thermometer-quarter";
    thermIcon.style.color = "yellow"
    }, 1000);

    setTimeout(() => {
        thermIcon.className = "fas fa-thermometer-half";
        thermIcon.style.color = "orange"
        }, 2000);

    setTimeout(() => {
    thermIcon.className = "fas fa-thermometer-three-quarters";
    thermIcon.style.color = "red"
    }, 3000);
    
    setTimeout(() => {
    thermIcon.className = "fas fa-thermometer-full";
    thermIcon.style.color = "red"
    }, 4000);
    
}

imgChange();

setInterval(imgChange,5000);