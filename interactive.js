const title = "Title of the task";


translateWord = new Map();

function parseTextAndShow(text) {
    var taskTextDiv = document.getElementById("tasktext");
    taskTextDiv.innerHTML = "";
    taskTextDiv.style.display = "inline-block";
    var title = document.createElement('h1');
    title.innerHTML = "Task title";
    taskTextDiv.appendChild(title);
    const re = "([a-zA-Z]+)"
    const array = [...text.matchAll(re)];
    for (let i = 0; i < array.length; i++) {
        var elem = document.createElement('label');

        elem.onmouseover = function () { this.style.background = "rgb(207, 255, 199)"; };
        elem.onmouseleave = function () { this.style.background = "rgb(169, 240, 176)"; };
        elem.innerHTML = array[i][0];

        interactiveTextArray.push(elem);
        textArray.push(array[i][0]);

        var toolTipPlusWord = document.createElement("div");
        toolTipPlusWord.style.display = "inline-block";
        toolTipPlusWord.style.marginRight = "5px";
        toolTipPlusWord.appendChild(elem);

        var toolTipWrapper = document.createElement("div");
        var q = document.createElement('label');
        q.innerHTML = array[i][0];
        toolTipWrapper.appendChild(q);
        toolTipPlusWord.appendChild(toolTipWrapper);
        translateWord.set(array[i][0], toolTipWrapper);

        elem.onclick = function () {
            var toolTipWrapper = translateWord.get(this.innerHTML);
            toolTipWrapper.style.visibility = "visible";
            toolTipWrapper.style.opacity = "1";
            setTimeout(() => { toolTipWrapper.style.opacity = "0"; }, 800)
        };

        toolTipWrapper.style.width = "120px";
        toolTipWrapper.style.backgroundColor = "rgb(124, 99, 84)";
        toolTipWrapper.style.color = "rgb(207, 255, 199)";
        toolTipWrapper.style.textAlign = "center";
        toolTipWrapper.style.padding = "5px 0";
        toolTipWrapper.style.position = "absolute";
        toolTipWrapper.style.zIndex = "1";
        toolTipWrapper.style.bottom = "100%";
        toolTipWrapper.style.left = "50%";
        toolTipWrapper.style.marginLeft = "-60px";
        toolTipWrapper.style.opacity = "0";
        toolTipWrapper.style.transition = "0.4s";
        taskTextDiv.appendChild(toolTipPlusWord);
    }
}

window.onload = function () {
    titleArray = [];
    textArray = [];
    interactiveTextArray = [];
    interactiveTitleArray = [];
    var opt = "textContent" in document.body ? "textContent" : "innerText";
    const text = document.getElementById("tasktext").getElementsByTagName("h8")[0][opt];
    console.log(text);
    parseTextAndShow(text);

    var rect = document.getElementById("rectangle");
    var rectBack = document.getElementById("rectangleBack");
    var box = document.getElementById("boxcontent");
    var answer = document.getElementById("answer");

    rectBack.style.left = "45%";
    rectBack.style.opacity = "1";
    rect.style.left = "50%";
    rect.style.opacity = "1";
    box.style.left = "50%";
    box.style.opacity = "1";


    const buttons = document.querySelectorAll('input');
    for (i of buttons) {
        i.addEventListener('click', buttonAction, false);
    }

    function buttonAction(button) {
        if (button.currentTarget.value == "next question") {
            rect.style.left = "0%";
            rectBack.style.left = "0%";
            box.style.left = "0%";
            rect.style.opacity = "0";
            rectBack.style.opacity = "0";
            box.style.opacity = "0";
        }
        if (button.currentTarget.value == "translate") {
            //rect.style.opacity = "0";
            // rectBack.style.opacity = "0";
            // box.style.opacity = "0";
            var tranButt = document.getElementById("translateButton");
            tranButt.value = "hide translation";
            box.style.top = "95%";
            rect.style.top = "95%";
        }
        else if (button.currentTarget.value == "hide translation") {
            var tranButt = document.getElementById("translateButton");
            tranButt.value = "translate";
            box.style.top = "50%";
            rect.style.top = "50%";
        }
        if (button.currentTarget.value == "show answer") {
            answer.style.opacity = "1";
        }
        // alert(button.currentTarget.value);
    }


};