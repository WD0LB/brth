//version of birthday calculator
//DOM
let result = document.getElementById('result');
let goBtn = document.getElementById('goBtn');
let restBtn = document.getElementById('restBtn');
let inputDate = document.getElementById('inputDate');
let inputDiv = document.getElementById('inputDiv');
let num = document.getElementById('num');
let inputTxt = document.getElementById('inputTxt');
let dayBtn = document.getElementById('dayBtn');
let hourBtn = document.getElementById('hourBtn');
let minBtn = document.getElementById('minBtn');
let cvBtn = document.getElementById('cvBtn');
let footer = document.getElementById('footer');
let days = 0;
//consts
const EnterDateFirst = "Enter Birthday First";
const DayTxt = " Days on your age";
const HourTxt = " Hours on your age";
const MinTxt = " Minutes on your age";
const InpTxt = " Thanks!! Enter Another Birthday!";
const WrongBirthTxt = "Hi dude !! Are kidding me! lock at Date of today";
//funs
//fn calcule time en msc between today and date
calD = (date) => {
	let today = new Date();
	today = convToMscn(today, false);
	return convMsToD(today - date);
}

//converter fn
daysToHours = (days) => { return days*24 }
daysToMin = (days) => { return days*1440 }
convMsToD = (mscn) => { return mscn/86400000 }
convToMscn = (time, str) => {
	let t;
	if (str) {
		//type time "22-03-2020
		t = new Date(time);
	} else {
		//time type: 99,5,24,11,33,30,0
		t = new Date(String(time));
	}
	return t.getTime();
}
//btns fn
helpGoFn = () => {
	inputDate.focus();
	restBtn.removeAttribute("hidden", true);
	cvBtn.removeAttribute("hidden", true);
}
goFn = () => {
	if (inputDate.value !== "") {
		brthday = convToMscn(inputDate.value, true);
		days = calD(brthday).toFixed();
		if (Number(days) > 0) {
			num.innerHTML = days + DayTxt;
			inputTxt.innerHTML = InpTxt;
			result.removeAttribute("hidden", true);
			helpGoFn();
			footer.removeAttribute("hidden", true);
		} else {
			inputTxt.innerHTML = WrongBirthTxt +"  And  " +InpTxt;
			helpGoFn();
		}

	} else {
		inputTxt.innerHTML = EnterDateFirst;
	}
}
dayFn = () => {
	num.innerHTML = days + DayTxt;
	dayBtn.setAttribute('hidden', true);
	hourBtn.removeAttribute("hidden", true);
	minBtn.removeAttribute("hidden", true);
}
hourFn = () => {
	num.innerHTML = daysToHours(days) + HourTxt;
	hourBtn.setAttribute('hidden', true);
	dayBtn.removeAttribute("hidden", true);
	minBtn.removeAttribute("hidden", true);
}
minFn = () => {
	num.innerHTML = daysToMin(days) + MinTxt;
	minBtn.setAttribute('hidden', true);
	hourBtn.removeAttribute("hidden", true);
	dayBtn.removeAttribute("hidden", true);
}
restFn = () => {
	inputDate.value = "";
	num.innerHTML = DayTxt;
	inputTxt.innerHTML = InpTxt;
	days = 0;
	restBtn.setAttribute('hidden', true);
	result.setAttribute("hidden", true);
	result.setAttribute("hidden", true);
	footer.setAttribute("hidden", true);
	inputDate.focus();
}
//input fn
inputFn = (ev) => {
	if (ev.keyCode === 13) {
			goFn();
	}
}
//Events
goBtn.addEventListener('click', goFn);
restBtn.addEventListener('click', restFn);
inputDate.addEventListener('keypress', (ev) => inputFn(ev));
dayBtn.addEventListener('click', dayFn);
hourBtn.addEventListener('click', hourFn);
minBtn.addEventListener('click', minFn);