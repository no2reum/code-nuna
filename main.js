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
    let playBtn = document.getElementById("playBtn")
    let userInput = document.getElementById("user-input")
    let resultArea = document.getElementById("result")
    let resetBtn = document.getElementById("resetBtn")
    let chance = 3
    // let gameOver = false
    let chanceArea = document.getElementById("chance-count")
    let history = []
    let answer = document.getElementById("answer")
    let inputHistory = document.getElementById("input-history")

    playBtn.addEventListener("click", play)
    //play = 함수도 변수처럼 넘길 수 있다.
    resetBtn.addEventListener("click", reset)
    userInput.addEventListener("focus",function(){userInput.value = ""})

    function pickRandomNum(){
        computerNum = Math.floor(Math.random()*100)
        //random => 0~1 사이의 렌덤숫자/floor -> 소숫점이하 생량/ +1 => 1~100 으로 범위 설정
        // console.log("정답", computerNum)
    }

    pickRandomNum() 
    answer.textContent = `정답: ${computerNum}`;


    function play(){
        let userValue = userInput.value;
        if(userValue < 1 || userValue > 100){
            resultArea.textContent = "1 과 100 사이 숫자를 입력해 주세요"
            return
        }
        if(history.includes(userValue)){
            resultArea.textContent = "이미 입련한 숫자입니다."
            return
        }
        chance --;
        chanceArea.textContent = `남은기회: ${chance} 번` //(`)동적인 값 / (")정적인 값

        if(userValue < computerNum){
            resultArea.textContent = "Up!"
        }
        else if(userValue > computerNum){
            resultArea.textContent = "Down!"
        }
        else {
            resultArea.textContent = "정답!"
            resultArea.style.fontSize = "30px"
            resultArea.style.fontWeight = "bold"
            playBtn.disabled = true
        }
        history.push(userValue)
        //  console.log(history)

        if(chance < 1){
            playBtn.disabled = true
            chanceArea.textContent = "기회를 모두 소진 하였습니다."
            chanceArea.style.color = "red";  
        }
        inputHistory.textContent = `입력history: ${history}`;
    }
    

    function reset(){
        userInput.value = "";//입력창 정리
        pickRandomNum();//레덤숫자 호출
        playBtn.disabled = false;
        history = [];
        inputHistory.textContent = ""
        
        chance = 3;
        chanceArea.textContent = `남은기회: ${chance} 번`;

        chanceArea.style.color = "black";
        resultArea.style.fontSize = "16px";
        resultArea.style.fontWeight = "normal";

        answer.textContent = `정답: ${computerNum}`;
        resultArea.textContent="숫자를 입력해주세요";
    }

