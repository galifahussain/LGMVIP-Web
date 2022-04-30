function addList() {
    var outerBox = document.createElement("div");
    outerBox.className = "outerBox";
    document.getElementById("items").appendChild(outerBox);
    var addTaskItems = document.createElement("p");
    addTaskItems.className = "list-items-para"
    addTaskItems.innerHTML = document.getElementById("textBoxInput").value;
    outerBox.appendChild(addTaskItems);

    // Completion Button
    var doneBTN = document.createElement("button");
    doneBTN.innerHTML = "&#10003";
    doneBTN.className = "doneBtn";
    outerBox.appendChild(doneBTN);
    var done = document.getElementsByClassName("doneBtn");
    var j;
    for (j = 0; j < done.length; j++) {
        done[j].onclick = function () {
            var doneDiv = this.parentElement;
            var subDiv = doneDiv.children[0];
            subDiv.style.textDecoration = "line-through";
            subDiv.style.color = "grey";
            subDiv.style.backgroundColor = "#063d00";
        }
    }

    //Close button
    var closeBTN = document.createElement("button");
    closeBTN.innerHTML = "&#128473";
    closeBTN.className = "closeButton";
    outerBox.appendChild(closeBTN);
    var close = document.getElementsByClassName("closeButton");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var closeDiv = this.parentElement;
            closeDiv.style.display = "none";
        }
    }


}