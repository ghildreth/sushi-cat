// input = 2;
// output = ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']

var rps = function(rounds) {
    let results = [];
    let diffPoss = ['r', 'p', 's'];

    let play = function(playedSoFar, rounds) {
        if(rounds === 0) {
            results.push(playedSoFar)
            return;
        }
        for(let i = 0; i < 3; i ++) {
            play(playedSoFar + diffPoss[i], rounds - 1)
        }
    }

    play('', rounds)
    return results;

}

var maple = rps(3);
console.log(maple);