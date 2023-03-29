const title = "Title of the task";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan mi ut nibh sodales, et tempor nisi efficitur. Aenean porttitor risus quis orci rhoncus facilisis. Quisque enim neque, laoreet vel rhoncus eu, gravida a elit. Fusce consectetur nunc volutpat dui commodo, et scelerisque nulla volutpat. Quisque a ante ante. Nullam blandit ligula eu enim volutpat, dignissim tempor sapien aliquam. Donec vitae nunc nec mi cursus commodo quis at quam. Cras gravida lectus id tortor aliquet convallis. Vestibulum ultrices finibus semper. Nunc nec accumsan arcu, id facilisis nisl. Nam sit amet leo nunc."
const re = "([a-zA-Z]+)"
translateWord = new Map();

window.onload = function () {

    var taskTextDiv = document.getElementById("tasktext");
    taskTextDiv.style.display = "inline-block";

    var textHolder = document.createElement("h8");
    var taskText = document.createTextNode(text);

    titleArray = [];
    textArray = [];
    interactiveTextArray = [];
    interactiveTitleArray = [];
    const titleMatches = [...text.matchAll(re)];
    for (let i = 0; i < titleMatches.length; i++) {
        var elem = document.createElement('label');
        elem.innerHTML = titleMatches[i][0];
        interactiveTitleArray.push(elem);
        titleArray.push(titleMatches[i][0]);
    }
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

    // console.log(textArray);

    taskTextDiv.appendChild(textHolder);


};