const intervalID = setInterval(()=> {
const time = new Date();
const hour  =  time.getHours();
const amPm = hour>=12 ? "PM" : "AM"
const min = time.getMinutes().toString().padStart(2,"0");
const sec= time.getSeconds().toString().padStart(2,"0");
let livetime=(`${hour > 12 ? hour-12:hour}:${min}:${sec} ${amPm}`);

    console.log(livetime)
}
,1000);