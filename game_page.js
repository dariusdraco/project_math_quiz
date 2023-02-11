player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

localStorage.setItem("player1_score", 0);
localStorage.setItem("player2_score", 0);

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

pl1_score = parseInt(localStorage.getItem("player1_score"));
pl2_score = parseInt(localStorage.getItem("player2_score"));

document.getElementById("player1_score").innerHTML = pl1_score;
document.getElementById("player2_score").innerHTML = pl2_score;

document.getElementById("player_question").innerHTML =
  "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML =
  "Answer turn - " + player2_name;

function send() {
  get_n1 = parseInt(document.getElementById("no1").value);
  get_n2 = parseInt(document.getElementById("no2").value);
  ques_mul = get_n1 + " x " + get_n2;
  console.log(ques_mul);

  question_mul = "<h4 id= 'ques_disp' > Q. " + ques_mul + "</h4>";
  input_box = "<br> Answer: <input type='text' id= 'input_check_box' >";
  check_button =
    "<br> <br> <button onclick='check()' class='btn btn-info'> check </button>";
  row = question_mul + input_box + check_button;
  document.getElementById("output").innerHTML = row;
}
