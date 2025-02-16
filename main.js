// 랜덤 번호(정답) 설정
// 유저가 번호 입력 후 go 버튼 클릭
// 정답 번호 == 랜덤 번호(정답) 이면 : 정답
// 정답 번호 < 랜덤 번호(정답) 이면 : down
// 정답 번호 > 랜덤 번호(정답) 이면 : up
// 리셋버튼을 누르면 게임이 초기화된다
// 유저는 3번의 기회가 주어짐. 버튼 비활성화
// 유저가 1~100범위 이외의 숫자를 입력하면 기회를 깎지 않음
// 유저가 이미 입력한 값을 또 입력할 시 기회를 깎지 않음

// Math.random() : 0~1 사이의 랜덤한 숫자를 뽑는 함수

let computerNum = 0;
let goButton = document.getElementById("goBtn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

goButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("correct", computerNum);
}

function play() {
  let userValue = Number(userInput.value);
  if(userValue < computerNum) {
    resultArea.textContent = "up!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!"
  } else {
    resultArea.textContent = "correct!"
  }
}

pickRandomNum(); //꼭 함수 호출해야!