const text =
  ".Babii, Happy 4th Monthsary! Can you believe it's already been four months since we started this journey together? I know we've had our share of fights and misunderstandings, often because of my immaturity 🥹, and for that, I'm truly sorry.  I hope you won't get tired of me po : ( . I promise to keep trying to be better and to learn from my mistakes.  Thank you for being patient and understanding. I love you so much babii. .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
