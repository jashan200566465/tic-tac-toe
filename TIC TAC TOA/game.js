let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log('clicked');
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const boxesdisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const resetGame = () => {
    turn0 = true;
    boxesenabled();
    msgcontainer.classList.add("hide");
}
const boxesenabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const showwinner = (winner) => {
    msg.innerText = `Congratulations...Winner is ${winner}`;
    msgcontainer.classList.remove("hide");

}
const checkwinner = () => {
    for (let pattern of winpattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log('winner');
                boxesdisabled();
                showwinner(posval1);

            }
        }
    }

}

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
