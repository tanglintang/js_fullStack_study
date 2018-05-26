function Player(name, teamColor) {
    this.name = name
    this.enemies = []
    this.partners = []

    this.state = 'alive'
    this.teamColor = teamColor
    this.enemys = null
}

Player.prototype.victory = function() {
    console.log(`${this.name} victory`)
}

Player.prototype.defeat = function() {
    this.state = 'died'
    console.log(`${this.name} has been slain`)
}

Player.prototype.ace = function() {
    console.log('RED ACE!')
}

Player.prototype.die = function() {
    this.defeat()

    // console.log(fun(this))  

    let all_dead = true
    
    for (let i = 0; i < this.partners.length; i++) {
        if (this.partners[i].state == 'alive') {
            all_dead = false
            break
        }
    }

    if (all_dead) {
        this.ace()
        // for (let j = 0; j < this.partners.length; j++) {
        //     this.partners[j].ace()            
        // }
        for (let k = 0; k < this.enemies.length; k++) {
            this.enemies[k].victory()
        }
    }
}
// function fun(p) {
//     let all_diea = false
//     p.partners.forEach(p => {
//         if (p.state == 'alive') {
//             all_diea = true
//         }
//     })
//     return all_diea
// }
// enemy Player 的实例 instanceof Player

// const player1 = new Player('皮蛋', 'red')
// const player2 = new Player('小乖', 'blue')
// player1 player2 互为敌人 匹配到一起
// player1.enemys = player2
// player2.enemys = player1
// player1.die()

// 流程 ---> 工厂模式 
const players = []
function playerFactory(name, teamColor) {
    // 实例化 分配队伍
    var newPlayer = new Player(name, teamColor)

    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        if (player.teamColor == newPlayer.teamColor) {
            player.partners.push(newPlayer)
            newPlayer.partners.push(player)
        } else {
            player.enemies.push(newPlayer)
            newPlayer.enemies.push(player)
        }        
    }
    players.push(newPlayer)
    return newPlayer
}
const player1 = playerFactory('皮蛋', 'red')
const player2 = playerFactory('小乖', 'red')
const player3 = playerFactory('宝宝', 'red')
const player4 = playerFactory('小强', 'red')

const player5 = playerFactory('黑妞', 'blue');
const player6 = playerFactory('葱头', 'blue');
const player7 = playerFactory('胖墩', 'blue');
const player8 = playerFactory('海盗', 'blue');


player1.die()
player2.die()
player3.die()
player4.die()