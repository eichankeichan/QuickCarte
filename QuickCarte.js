console.log("QuickCarte");

var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "moz-extension://50e58a22-ed1b-4e28-a836-c32e53087a5a/style.css");

var bootstrapCSS = document.createElement("link");
bootstrapCSS.setAttribute("rel", "stylesheet");
bootstrapCSS.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");

var jQueryLib = document.createElement("script");
jQueryLib.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

var bootstrapJS = document.createElement("script");
bootstrapJS.setAttribute("src", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
	
document.getElementsByTagName("head")[0].appendChild(fileref);
document.getElementsByTagName("head")[0].appendChild(bootstrapCSS);
document.getElementsByTagName("head")[0].appendChild(jQueryLib);
document.getElementsByTagName("head")[0].appendChild(bootstrapJS);
	
document.body.style.fontFamily = "verdana";

//document.body.style.background = "#f3f3f3";
//var header = document.getElementsByClassName("top")[0];
//header.style.backgroundColor = "white";
//document.header.write("<style>.font-blackSmall1 { font-family: arial; }</style>");
// var fontSmall = document.getElementsByClassName("font-blackSmall1");
// console.log(fontSmall);

/* function changeFont (){
	for (var i = 0; i < fontSmall.length; i++) {
		fontSmall[i].setAttribute("font-family", "Arial");
		fontSmall[i].removeAttribute("class");
		console.log(fontSmall[i] + " changed.");
	}
} */

/* function changeFont (){
	for (var i = 0; i < fontSmall.length; i++) {
		fontSmall[i].style.font-family "verdana";
		console.log(fontSmall[i] + " changed.");
	}
} */

/* changeFont(); */



function extendMessageBox(){
	var messageBoxList = document.getElementsByName("message");
		for (var i = 0; i < messageBoxList.length; i++) {
			messageBoxList[i].setAttribute("rows", "20");
			//messageBoxList[i].setAttribute("cols", "100");
			messageBoxList[i].removeAttribute("style");
	}
}

extendMessageBox();

function extendTables(){
	var tableList = document.getElementsByTagName("table");
		for (var i = 0; i < tableList.length; i++) {
			tableList[i].removeAttribute("style");
			//tableList[i].setAttribute("width", "100%");
	}
}

//extendTables();

function extendDiv(){
	var divList = document.getElementsByTagName("div");
		for (var i = 0; i < divList.length; i++) {
			divList[i].removeAttribute("style");
			//divList[i].setAttribute("width", "100%");
	}
}

//extendDiv();

function removeObject(id){
	var x = document.getElementById(id)
	x.parentNode.removeChild(x);
}
//removeObject("reserveDlg");
//removeObject("unregistDlg");

function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}

function autoPerformance(){
	for (var j = 0; j < performanceNodeList.length; j++) {
		setSelectedValue(performanceNodeList[j],"X");
	}
	console.log("autoPerformance run");
};

var performanceNodeList = document.getElementsByName("selectPerformance");
var accNodeList = document.getElementsByName("selectAccuracyEvaluation");
var vocNodeList = document.getElementsByName("selectVocabularyEvaluation");
var proNodeList = document.getElementsByName("selectPronunciationEvaluation");
var fluNodeList = document.getElementsByName("selectFluencyEvaluation");
var lisNodeList = document.getElementsByName("selectListeningComprehensionEvaluation");

function fillAll(defaultScore){

	for (var j = 0; j < performanceNodeList.length; j++) {
		setSelectedValue(performanceNodeList[j],"X");
	}

	
	for (var j = 0; j < accNodeList.length; j++) {
		setSelectedValue(accNodeList[j],defaultScore);
	}


	for (var j = 0; j < vocNodeList.length; j++) {
		setSelectedValue(vocNodeList[j],defaultScore);
	}


	for (var j = 0; j < proNodeList.length; j++) {
		setSelectedValue(proNodeList[j],defaultScore);
	}


	for (var j = 0; j < fluNodeList.length; j++) {
		setSelectedValue(fluNodeList[j],defaultScore);
	}


	for (var j = 0; j < lisNodeList.length; j++) {
		setSelectedValue(lisNodeList[j],defaultScore);
	}
}

var btnText = ("Fill");
var defaultScore = 3;

var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode(btnText);       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
btn.setAttribute("id", "autofill");
document.body.appendChild(btn);                    // Append <button> to <body> 

var allStudentsText = document.createTextNode("All students: ");
var student1Text = document.createTextNode("Student 1: ");
var student2Text = document.createTextNode("Student 2: ");
var student3Text = document.createTextNode("Student 3: ");
var student4Text = document.createTextNode("Student 4: ");

var student1Fillbtn = document.createElement("BUTTON");
var student2Fillbtn = document.createElement("BUTTON");
var student3Fillbtn = document.createElement("BUTTON");
var student4Fillbtn = document.createElement("BUTTON");

var student1FillbtnText = document.createTextNode(btnText);
var student2FillbtnText = document.createTextNode(btnText);
var student3FillbtnText = document.createTextNode(btnText);
var student4FillbtnText = document.createTextNode(btnText);

var s1AccInput = document.createElement("input");
s1AccInput.setAttribute("id", "s1AccInput");
s1AccInput.setAttribute("maxlength", "1");
	
var s1VocInput = document.createElement("input");
s1VocInput.setAttribute("id", "s1VocInput");
s1VocInput.setAttribute("maxlength", "1");

var s1ProInput = document.createElement("input");
s1ProInput.setAttribute("id", "s1ProInput");
s1ProInput.setAttribute("maxlength", "1");

var s1FluInput = document.createElement("input");
s1FluInput.setAttribute("id", "s1FluInput");
s1FluInput.setAttribute("maxlength", "1");

var s1LisInput = document.createElement("input");
s1LisInput.setAttribute("id", "s1LisInput");
s1LisInput.setAttribute("maxlength", "1");

var s2AccInput = document.createElement("input");
s2AccInput.setAttribute("id", "s2AccInput");
var s2VocInput = document.createElement("input");
s2VocInput.setAttribute("id", "s2VocInput");
var s2ProInput = document.createElement("input");
s2ProInput.setAttribute("id", "s2ProInput");
var s2FluInput = document.createElement("input");
s2FluInput.setAttribute("id", "s2FluInput");
var s2LisInput = document.createElement("input");
s2LisInput.setAttribute("id", "s2LisInput");

var s3AccInput = document.createElement("input");
s3AccInput.setAttribute("id", "s3AccInput");
var s3VocInput = document.createElement("input");
s3VocInput.setAttribute("id", "s3VocInput");
var s3ProInput = document.createElement("input");
s3ProInput.setAttribute("id", "s3ProInput");
var s3FluInput = document.createElement("input");
s3FluInput.setAttribute("id", "s3FluInput");
var s3LisInput = document.createElement("input");
s3LisInput.setAttribute("id", "s3LisInput");

var s4AccInput = document.createElement("input");
s4AccInput.setAttribute("id", "s4AccInput");
var s4VocInput = document.createElement("input");
s4VocInput.setAttribute("id", "s4VocInput");
var s4ProInput = document.createElement("input");
s4ProInput.setAttribute("id", "s4ProInput");
var s4FluInput = document.createElement("input");
s4FluInput.setAttribute("id", "s4FluInput");
var s4LisInput = document.createElement("input");
s4LisInput.setAttribute("id", "s4LisInput");

student1Fillbtn.appendChild(student1FillbtnText);
student2Fillbtn.appendChild(student2FillbtnText);
student3Fillbtn.appendChild(student3FillbtnText);
student4Fillbtn.appendChild(student4FillbtnText);

var allStudentsInput = document.createElement("input");
var student1Input = document.createElement("input");
var student2Input = document.createElement("input");
var student3Input = document.createElement("input");
var student4Input = document.createElement("input");

allStudentsInput.setAttribute("id", "input");

document.body.appendChild(allStudentsInput); 

document.getElementById("autofill").onclick = function() {
	console.log("autofill");
	fillAll(document.getElementById("input").value);
};

var div = document.createElement("div");
div.setAttribute("id", "div");

/* var div2 = document.createElement("div");
div2.setAttribute("id", "div2");

var div3 = document.createElement("div");
div3.setAttribute("id", "div3");

var div4 = document.createElement("div");
div4.setAttribute("id", "div4");

var div5 = document.createElement("div");
div5.setAttribute("id", "div5"); */

var p = document.createElement("p");
p.setAttribute("id", "p");

p.appendChild(allStudentsText);
p.appendChild(allStudentsInput);
p.appendChild(btn);

/* p.appendChild(student1Text);
p.appendChild(student1Input);
p.appendChild(student1Fillbtn);
p.appendChild(student2Text);
p.appendChild(student2Input);
p.appendChild(student2Fillbtn);
p.appendChild(student3Text);
p.appendChild(student3Input);
p.appendChild(student3Fillbtn);
p.appendChild(student4Text);
p.appendChild(student4Input);
p.appendChild(student4Fillbtn);

div2.appendChild(s1AccInput);
div2.appendChild(s1VocInput);
div2.appendChild(s1ProInput);
div2.appendChild(s1FluInput);
div2.appendChild(s1LisInput);

div3.appendChild(s2AccInput);
div3.appendChild(s2VocInput);
div3.appendChild(s2ProInput);
div3.appendChild(s2FluInput);
div3.appendChild(s2LisInput);

div4.appendChild(s3AccInput);
div4.appendChild(s3VocInput);
div4.appendChild(s3ProInput);
div4.appendChild(s3FluInput);
div4.appendChild(s3LisInput);

div5.appendChild(s4AccInput);
div5.appendChild(s4VocInput);
div5.appendChild(s4ProInput);
div5.appendChild(s4FluInput);
div5.appendChild(s4LisInput);
 */
div.appendChild(p);

document.body.appendChild(div);
/* document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);
document.body.appendChild(div5); */

var studentList = document.getElementsByClassName("div-List")[0];
studentList.setAttribute("class", "container");

document.getElementById("input").value = defaultScore;

document.body.insertAdjacentHTML('beforeend', '<div id="container" class="container"><div class="row"></div><div id="col1" class="col-sm-3"><h3>Student 1</h3></div><div id="col2" class="col-sm-3"><h3>Student 2</h3></div><div id="col3" class="col-sm-3"><h3>Student 3</h3></div><div id="col4" class="col-sm-3"><h3>Student 4</h3></div></div></div>');

document.getElementById("col1").insertAdjacentHTML('beforeend', '<input id="s1AccInput" type="number" min="1" max="5" placeholder="Accuracy"><input id="s1VocInput" type="number" min="1" max="5" placeholder="Vocabulary"><input id="s1ProInput" type="number" min="1" max="5" placeholder="Pronunciation"><input id="s1FluInput" type="number" min="1" max="5" placeholder="Fluency"><input id="s1LisInput" type="number" min="1" max="5" placeholder="Listening">');
document.getElementById("col2").insertAdjacentHTML('beforeend', '<input id="s2AccInput" type="number" min="1" max="5" placeholder="Accuracy"><input id="s2VocInput" type="number" min="1" max="5" placeholder="Vocabulary"><input id="s2ProInput" type="number" min="1" max="5" placeholder="Pronunciation"><input id="s2FluInput" type="number" min="1" max="5" placeholder="Fluency"><input id="s2LisInput" type="number" min="1" max="5" placeholder="Listening">');
document.getElementById("col3").insertAdjacentHTML('beforeend', '<input id="s3AccInput" type="number" min="1" max="5" placeholder="Accuracy"><input id="s3VocInput" type="number" min="1" max="5" placeholder="Vocabulary"><input id="s3ProInput" type="number" min="1" max="5" placeholder="Pronunciation"><input id="s3FluInput" type="number" min="1" max="5" placeholder="Fluency"><input id="s3LisInput" type="number" min="1" max="5" placeholder="Listening">');
document.getElementById("col4").insertAdjacentHTML('beforeend', '<input id="s4AccInput" type="number" min="1" max="5" placeholder="Accuracy"><input id="s4VocInput" type="number" min="1" max="5" placeholder="Vocabulary"><input id="s4ProInput" type="number" min="1" max="5" placeholder="Pronunciation"><input id="s4FluInput" type="number" min="1" max="5" placeholder="Fluency"><input id="s4LisInput" type="number" min="1" max="5" placeholder="Listening">');

document.getElementById("s1AccInput").onchange = function() {
	setSelectedValue(accNodeList[0],document.getElementById("s1AccInput").value);
};

document.getElementById("s1VocInput").onchange = function() {
	setSelectedValue(vocNodeList[0],document.getElementById("s1VocInput").value);
};

document.getElementById("s1ProInput").onchange = function() {
	setSelectedValue(proNodeList[0],document.getElementById("s1ProInput").value);
};

document.getElementById("s1FluInput").onchange = function() {
	setSelectedValue(fluNodeList[0],document.getElementById("s1FluInput").value);
};

document.getElementById("s1LisInput").onchange = function() {
	setSelectedValue(lisNodeList[0],document.getElementById("s1LisInput").value);
};

document.getElementById("s2AccInput").onchange = function() {
	setSelectedValue(accNodeList[1],document.getElementById("s2AccInput").value);
};

document.getElementById("s2VocInput").onchange = function() {
	setSelectedValue(vocNodeList[1],document.getElementById("s2VocInput").value);
};

document.getElementById("s2ProInput").onchange = function() {
	setSelectedValue(proNodeList[1],document.getElementById("s2ProInput").value);
};

document.getElementById("s2FluInput").onchange = function() {
	setSelectedValue(fluNodeList[1],document.getElementById("s2FluInput").value);
};

document.getElementById("s2LisInput").onchange = function() {
	setSelectedValue(lisNodeList[1],document.getElementById("s2LisInput").value);
};

document.getElementById("s3AccInput").onchange = function() {
	setSelectedValue(accNodeList[2],document.getElementById("s3AccInput").value);
};

document.getElementById("s3VocInput").onchange = function() {
	setSelectedValue(vocNodeList[2],document.getElementById("s3VocInput").value);
};

document.getElementById("s3ProInput").onchange = function() {
	setSelectedValue(proNodeList[2],document.getElementById("s3ProInput").value);
};

document.getElementById("s3FluInput").onchange = function() {
	setSelectedValue(fluNodeList[2],document.getElementById("s3FluInput").value);
};

document.getElementById("s3LisInput").onchange = function() {
	setSelectedValue(lisNodeList[2],document.getElementById("s3LisInput").value);
};

document.getElementById("s4AccInput").onchange = function() {
	setSelectedValue(accNodeList[3],document.getElementById("s4AccInput").value);
};

document.getElementById("s4VocInput").onchange = function() {
	setSelectedValue(vocNodeList[3],document.getElementById("s4VocInput").value);
};

document.getElementById("s4ProInput").onchange = function() {
	setSelectedValue(proNodeList[3],document.getElementById("s4ProInput").value);
};

document.getElementById("s4FluInput").onchange = function() {
	setSelectedValue(fluNodeList[3],document.getElementById("s4FluInput").value);
};

document.getElementById("s4LisInput").onchange = function() {
	setSelectedValue(lisNodeList[3],document.getElementById("s4LisInput").value);
};
var s1Name = document.querySelectorAll("table.table-List:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1)")[0].firstChild.textContent
console.log(s1Name);

var s1AverageAcc = document.querySelectorAll("table.table-List:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s1AverageAcc);
document.getElementById("s1AccInput").value = Math.round(s1AverageAcc);

var s1AverageVoc = document.querySelectorAll(".table-List > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s1AverageVoc);
document.getElementById("s1VocInput").value = Math.round(s1AverageVoc);

var s1AveragePro = document.querySelectorAll(".table-List > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s1AveragePro);
document.getElementById("s1ProInput").value = Math.round(s1AveragePro);

var s1AverageFlu = document.querySelectorAll(".table-List > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s1AverageFlu);
document.getElementById("s1FluInput").value = Math.round(s1AverageFlu);

var s1AverageLis = document.querySelectorAll(".table-List > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(5) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s1AverageLis);
document.getElementById("s1LisInput").value = Math.round(s1AverageLis);

setSelectedValue(accNodeList[0],Math.round(s1AverageAcc));
setSelectedValue(vocNodeList[0],Math.round(s1AverageVoc));
setSelectedValue(proNodeList[0],Math.round(s1AveragePro));
setSelectedValue(fluNodeList[0],Math.round(s1AverageFlu));
setSelectedValue(lisNodeList[0],Math.round(s1AverageLis));

var s2Name = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1)")[0].firstChild.textContent
console.log(s2Name);

var s2AverageAcc = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s2AverageAcc);
var s2AverageVoc = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s2AverageVoc);
var s2AveragePro = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s2AveragePro);
var s2AverageFlu = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s2AverageFlu);
var s2AverageLis = document.querySelectorAll("table.table-List:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(5) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
console.log(s2AverageLis);

document.getElementById("s2AccInput").value = Math.round(s2AverageAcc);
document.getElementById("s2VocInput").value = Math.round(s2AverageVoc);
document.getElementById("s2ProInput").value = Math.round(s2AveragePro);
document.getElementById("s2FluInput").value = Math.round(s2AverageFlu);
document.getElementById("s2LisInput").value = Math.round(s2AverageLis);

var s3Name = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1)")[0].firstChild.textContent
console.log(s3Name);

var s3AverageAcc = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s3AverageVoc = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s3AveragePro = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s3AverageFlu = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s3AverageLis = document.querySelectorAll("table.table-List:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(5) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');

console.log(s3AverageAcc);
console.log(s3AverageVoc);
console.log(s3AveragePro);
console.log(s3AverageFlu);
console.log(s3AverageLis);

document.getElementById("s3AccInput").value = Math.round(s3AverageAcc);
document.getElementById("s3VocInput").value = Math.round(s3AverageVoc);
document.getElementById("s3ProInput").value = Math.round(s3AveragePro);
document.getElementById("s3FluInput").value = Math.round(s3AverageFlu);
document.getElementById("s3LisInput").value = Math.round(s3AverageLis);

var s4Name = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1)")[0].firstChild.textContent
console.log(s4Name);

var s4AverageAcc = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s4AverageVoc = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s4AveragePro = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s4AverageFlu = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');
var s4AverageLis = document.querySelectorAll("table.table-List:nth-child(4) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(5) > span:nth-child(1) > b:nth-child(1)")[0].firstChild.textContent.replace( /^\D+/g, '');

console.log(s4AverageAcc);
console.log(s4AverageVoc);
console.log(s4AveragePro);
console.log(s4AverageFlu);
console.log(s4AverageLis);

document.getElementById("s4AccInput").value = Math.round(s4AverageAcc);
document.getElementById("s4VocInput").value = Math.round(s4AverageVoc);
document.getElementById("s4ProInput").value = Math.round(s4AveragePro);
document.getElementById("s4FluInput").value = Math.round(s4AverageFlu);
document.getElementById("s4LisInput").value = Math.round(s4AverageLis);

/* var saveButton = document.getElementById("saveButton");
var col4 = document.getElementById("col4");
col4.appendChild(saveButton); */

//autoPerformance();

