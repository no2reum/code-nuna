 //랜번번호 지정
    //유저가 번호를 입력한다 그리고go 라는 버튼을 누름
    //만약에 유저가 랜덤번호를 맞춘다면, 마맞췄습니다.
    //랜덤번호가 < 유저번호 Down.
    //랜덤번호가 > 유저번호 Up.
    //Reset버튼을 누르면 게임이 리셋
    //5번의 기회 다쓰면 게임이 끝(더이상 추측불가, 버튼이 disable)
    //유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 까지 않는다
    //유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 까지 않는다

    let computerNum = 0
    let palyBtn = document.getElementById("palyBtn")
    let userInput = document.getElementById("user-input")
    let resultArea = document.getElementById("result")

    palyBtn.addEventListener("click", play)
    //play = 함수도 변수처럼 넘길 수 있다.

    function pickRandomNum(){
        computerNum = Math.floor(Math.random()*100)
        //random => 0~1 사이의 렌덤숫자/floor -> 소숫점이하 생량/ +1 => 1~100 으로 범위 설정
        console.log("정답", computerNum)
    }

    pickRandomNum() 

    function play(){
        let userValue = userInput.value;
        if(userValue < computerNum){
            resultArea.textContent = "Up!"
        }
        else if(userValue > computerNum){
            resultArea.textContent = "Down!"
        }
        else {
            resultArea.textContent = "정답!"
        }
    }