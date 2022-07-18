const switchers = document.querySelectorAll('[data-switcher]');
console.log(switchers);

for (let i = 0; i < switchers.length; i++) {
  const page_id = switchers[i].dataset.tab;
  console.log(`page_id ${page_id}`);
  switchers[i].addEventListener('click', function () {
    document
      .querySelector('.menu__item.is-active')
      .classList.remove('is-active');
    switchers[i].parentNode.classList.add('is-active');

    switchPage(page_id);
    removeCheckbox(page_id);
  });
}

function removeCheckbox(page_id) {
  if (page_id === '2') {
    console.log('PAGEID' + page_id);
    document.querySelector('.toggle__btn').style.display = 'none';
  } else if (page_id === '3') {
    document.querySelector('.toggle__btn').style.display = 'none';
  } else if (page_id === '1') {
    document.querySelector('.toggle__btn').style.display = 'block';
  }
}

function switchPage(page_id) {
  console.log('page id is: ' + page_id);
  const current_page = document
    .querySelector('.main__pages .main__page.is-active')
    .classList.remove('is-active');
  // current_page.classList.remove('is-active');
  console.log(`current page: ${current_page}`);

  const next_page = document.querySelector(
    `.main__pages .main__page[data-page="${page_id}"]`,
  );
  console.log(`next page: ${next_page}`);
  next_page.classList.add('is-active');
  console.log(`next page: ${next_page}`);
}

//////////////////////////////////////////////////////////////
let myAudio = document.querySelector('.audio');
let running = false;
let endTime = null;
let timerID = null;
let now;

function startTimer1() {
  running = true;
  now = new Date();
  console.log(now);
  now = now.getTime();
  console.log(now);
  // change last multiple for the number of minutes
  endTime = now + 1000 * 60 * 1;
  console.log(endTime);
  showCountDown1();
}

function showCountDown1() {
  let now = new Date();
  now = now.getTime();
  if (endTime - now <= 0) {
    stopTimer();
    myAudio.play();
  } else {
    let delta = new Date(endTime - now);
    let theMin = delta.getMinutes();
    let theSec = delta.getSeconds();
    let theTime = theMin;
    theTime += (theSec < 10 ? ':0' : ':') + theSec;
    document.forms[0].timerDisplay.value = theTime;
    if (running) {
      timerID = setTimeout('showCountDown1()', 1000);
    }
  }
}

//--------------------------------------------------------
function startTimer2() {
  running = true;
  now = new Date();
  console.log(now);
  now = now.getTime();
  console.log(now);
  // change last multiple for the number of minutes
  endTime = now + 1000 * 60 * 20;
  console.log(endTime);
  showCountDown2();
}

function showCountDown2() {
  let now = new Date();
  now = now.getTime();
  if (endTime - now <= 0) {
    stopTimer();
    myAudio.play();
  } else {
    let delta = new Date(endTime - now);
    let theMin = delta.getMinutes();
    let theSec = delta.getSeconds();
    let theTime = theMin;
    theTime += (theSec < 10 ? ':0' : ':') + theSec;
    document.forms[0].timerDisplay.value = theTime;
    if (running) {
      timerID = setTimeout('showCountDown2()', 1000);
    }
  }
}
//--------------------------------------------------------
function startTimer3() {
  running = true;
  now = new Date();
  console.log(now);
  now = now.getTime();
  console.log(now);
  // change last multiple for the number of minutes
  endTime = now + 1000 * 60 * 40;
  console.log(endTime);
  showCountDown2();
}

function showCountDown3() {
  let now = new Date();
  now = now.getTime();
  if (endTime - now <= 0) {
    stopTimer();
    myAudio.play();
  } else {
    let delta = new Date(endTime - now);
    let theMin = delta.getMinutes();
    let theSec = delta.getSeconds();
    let theTime = theMin;
    theTime += (theSec < 10 ? ':0' : ':') + theSec;
    document.forms[0].timerDisplay.value = theTime;
    if (running) {
      timerID = setTimeout('showCountDown2()', 1000);
    }
  }
}
//--------------------------------------------------------
function startTimer4() {
  running = true;
  now = new Date();
  console.log(now);
  now = now.getTime();
  console.log(now);
  // change last multiple for the number of minutes
  endTime = now + 1000 * 60 * 60;
  console.log(endTime);
  showCountDown2();
}

function showCountDown4() {
  let now = new Date();
  now = now.getTime();
  if (endTime - now <= 0) {
    stopTimer();
    myAudio.play();
  } else {
    let delta = new Date(endTime - now);
    let theMin = delta.getMinutes();
    let theSec = delta.getSeconds();
    let theTime = theMin;
    theTime += (theSec < 10 ? ':0' : ':') + theSec;
    document.forms[0].timerDisplay.value = theTime;
    if (running) {
      timerID = setTimeout('showCountDown2()', 1000);
    }
  }
}
//--------------------------------------------------------

function stopTimer() {
  clearTimeout(timerID);
  running = false;
  document.forms[0].timerDisplay.value = '0:00';
}
//--------------------------------------------------------
let isPlaying = false;
let stop = document.querySelector('.timer__stop');

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};
stop.addEventListener('click', togglePlay);

function togglePlay() {
  isPlaying === true ? myAudio.pause() : myAudio.play();
}

//////////////////////////////////////////////////////////////
function toggleDayNight() {
  let checkbox = document.querySelector('.toggle__btn');
  let body = document.body;

  checkbox.addEventListener('change', () => body.classList.toggle('daylight'));
}
toggleDayNight();
