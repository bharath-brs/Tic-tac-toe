$(document).ready(function() {
  var turn = 1;
  var squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var wins = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var gameOver = false;
  var player1Name = '';
  var player2Name = '';
  
  $('.square').click(function() {
    if (!gameOver && $(this).text() === '') {
      var playerName = turn % 2 === 1 ? player1Name : player2Name;
      var playerMark = turn % 2 === 1 ? 'X' : 'O';
      $(this).text(playerMark);
      squares[$(this).attr('id')-1] = playerMark;
      $(this).addClass('clicked');
      turn++;
      checkForWinner(playerName);
    }
  });
  
  $('#reset').click(function() {
    player1Name = $('#player1').val();
    player2Name = $('#player2').val();
    turn = 1;
    squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameOver = false;
    $('.square').text('');
    $('.square').removeClass('clicked');
    $('.square').css('filter', 'none');
    $('#result').text('');
  });
  
  function checkForWinner() {
    for (var i = 0; i < wins.length; i++) {
      if (squares[wins[i][0]-1] === squares[wins[i][1]-1] && squares[wins[i][1]-1] === squares[wins[i][2]-1] && squares[wins[i][0]-1] !== 0) {
        $('#result').text(squares[wins[i][0]-1] + ' wins!');
        gameOver = true;
        $('.square').not('.clicked').css('filter', 'blur(5px)');
        break;
      }
    }
  }
});
