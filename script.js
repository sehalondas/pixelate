// Your code here
const newTable = document.getElementsByTagName("table")[0];

function makeRow () {
    const row = document.createElement("tr")
    for(let i = 0; i < 20; i++) {
        const td = document.createElement("td")
        row.appendChild(td)
    }
    newTable.appendChild(row);
}

function colorSelect (event) {
    event.target.value;
}

    let selectedColor = 'red';
    const select = document.getElementsByTagName("select")[0];
    select.addEventListener("change", function (event) {
        selectedColor = event.target.value;
    })

function colorize (event) {
    event.stopImmediatePropagation();
    const target = event.target
    if(target.className == false) {
        target.className = selectedColor
    }
    else if(target.className !== selectedColor) {
        target.className = selectedColor
    } else if(target.className === selectedColor) {
        target.className = ""
    }
    

}

makeRow()
makeRow()

const button = document.getElementById("add-row").addEventListener("click", makeRow);

const selector = document.getElementsByTagName("select")[0].addEventListener("change", colorSelect);

const cell = document.getElementsByTagName('table')[0].addEventListener("click", colorize);