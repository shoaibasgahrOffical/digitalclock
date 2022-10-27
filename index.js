const hour1 = document.getElementById("hours");
const Minute1 = document.getElementById("minute");
const Second1 = document.getElementById("second");

function update1() {
    let hou = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    
hour1.innerText = hou;
Minute1.innerText = m;
Second1.innerText = s;
setTimeout(() => {
    update1()
}, 1000);

}




update1()




