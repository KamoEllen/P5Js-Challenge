function bestMove()
{
    // let available = [];
    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i< 3;i++)
    {
for (let j = 0; j < 3; j++)
{
    //is there a spot available
    if (boar[i][j] == '')
    {
        board[i][j] = ai;
       let score = minimax[board];
       board[i][j] = '';
       if (score > bestScore)
       {
        bestScore = score;
        bestMove = {i,j};
       }
    }
    // if (board[i][j] == '')
    // {
    //     available.push({i,j});
    // }
}
    }

    // let move = random(available);
    board[bestMove.i][bestMove.j] = ai;
    currentPlayer = human;
}