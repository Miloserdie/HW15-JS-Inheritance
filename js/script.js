function Clock(e) {
	this.element = e;
	this.fullFormat = true;
	this.interval = setInterval(() => this.render(), 1000);
	this.element.addEventListener('click', () => this.changeFormat());
}

Clock.prototype.render = function () {
	if (this.fullFormat) {
		this.element.innerHTML = new Date().toLocaleTimeString();
	} else {
		this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
	}
}

Clock.prototype.changeFormat = function () {
	this.fullFormat = !this.fullFormat;
}

const clock = new Clock(document.querySelector('.first-clock'));


function SecondClock(e) {
	Clock.call(this, e);
}

SecondClock.prototype = Object.create(Clock.prototype);
SecondClock.prototype.constructor = SecondClock;

const secondClock = new SecondClock(document.querySelector('.second-clock'));


function ShortClock(e) {
	Clock.call(this, e);
}

ShortClock.prototype = Object.create(Clock.prototype);
ShortClock.prototype.constructor = SecondClock;
ShortClock.prototype.render = function () {
	if (this.fullFormat) {
		this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
	} else {
		this.element.innerHTML = new Date().toLocaleTimeString();
	}
}

const shortClock = new ShortClock(document.querySelector('.short-clock'));
