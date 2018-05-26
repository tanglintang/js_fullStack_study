function Player(name) {
    this.name = name
    this.enemys = []
}

Player.prototype.victory = function() {
    console.log(`${this.name} win the game`)
}

Player.prototype.defeat = function() {
    console.log(`${this.name} lose the game`)
}

Player.prototype.die = function() {
    this.defeat()
    this.enemys.victory()
}
// enemy Player 的实例 instanceof Player

const player1 = new Player('皮蛋')
const player2 = new Player('小乖')
// player1 player2 互为敌人 匹配到一起
player1.enemys = player2
player2.enemys = player1

// const team1 = []
// const team2 = []
// for (let i = 0; i < 8; i++) {
//     if (i < 4) {
//         team1.push(new Player(i+1))
//     } else {
//         team2.push(new Player(i+1))
//     }
// }
// let [...name] = [...team2]
// console.log(name)
// team1.map(player => {
//     // player.enemys = [...team2]
// })
// console.log(team1)


// player1.die()

