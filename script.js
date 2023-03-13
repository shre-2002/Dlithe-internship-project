function myFunc() {

    var correctAnswers = 0;

    var q1 = document.getElementById("q1d").checked;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3b").checked;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5a").checked;
    var q6 = document.getElementById("q6d").checked;
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8c").checked;
    var q9 = document.getElementById("q9d").checked;
    var q10 = document.getElementById("q10d").checked;
    var q11 = document.getElementById("q11b").checked;
    var q12 = document.getElementById("q12a").checked;
    var q13 = document.getElementById("q13a").checked;
    var q14 = document.getElementById("q14c").checked;
    var q15 = document.getElementById("q15a").checked;
    var q16 = document.getElementById("q16b").checked;
    var q17 = document.getElementById("q17c").checked;
    var q18 = document.getElementById("q18a").checked;
    var q19 = document.getElementById("q19b").checked;
    var q20 = document.getElementById("q20d").checked;

    //checking the answer
      if (q1) {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if (q3) {
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    } if (q6) {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if (q8)  {
        correctAnswers += 1;
    }  if (q9) {
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } if (q11) {
        correctAnswers += 1;
    } if (q12) {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14) {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    }  if (q16) {
        correctAnswers += 1;
    }  if (q17) {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19) {
        correctAnswers += 1;
    }  if (q20) {
        correctAnswers += 1;
    }

         //result
         if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 20 answers correct";}
    else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "You only got " + correctAnswers + " answers correct. Better luck next time!!";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "You only got 1 answer correct. Try hard the next time!!";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "Sorry!! No answers are correct!";}
        document.getElementById("answers").innerHTML = "Correct answers: 1)Rabindra Nath Tagore 2)Kenzaburo Oye 3)Per capita income 4)True 5)Football 6)60 7)Triskaidecagon 8)1200 9)14 10)150 11)Bromine 12)Salt 13)weakest force 14)Kidney 15)Hydrogen 16)on 17)Pride oneself 18)Amass 19)FOSTER 20)Drive";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}


