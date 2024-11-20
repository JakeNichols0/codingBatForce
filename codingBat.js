let successes = [];
let button = document.getElementsByClassName("go")[0];
let i=0;
let stop = false;

const check =  setInterval(() => {
    let table = document.getElementById("tests").firstElementChild.firstElementChild;
    let rows = table.children;
    for(let j=1; j<rows.length; j++) {
        let cols = rows[j].children;
        if(cols[3].className == "no") {
            successes[j-1] = "fail";
            console.log("f")
        } else {
            successes[j-1] = "succeed";
        }
    }
    console.log(successes);
    i++;
    console.log(i)
    if (successes.indexOf("fail") < 0 || i>10) {
        clearInterval(check);
        stop = true;
    }
    if(!stop) {
        button.click();
    }
}, 1000);