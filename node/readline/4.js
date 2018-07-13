const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI>'
})

const preHint = `This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`
console.log(preHint)

const questions = ['package name', 'version', 'author']
const defaultAnswers = ['name', '1.0.0', 'none']
const answers = []
let index = 0

function createPackageJSON () {
    var map = {}
    questions.forEach((que, index) => {
        map[que] = answers[index]
    })
    fs.writeFileSync('./package.json', JSON.stringify(map, null, 4))
}

// function runQuestionLoop () {
//     rl.question(questions.splice(0, 1), answer => {
//         let def = defaultAnswers.splice(0, 1)
//         answers.push(answer || [...def])
//         if (questions.length > 0) { 
//             runQuestionLoop()
//         } else {
//             createPackageJSON()
//             rl.close()
//         }
//     })
// }

function runQuestionLoop() {
    if (index === questions.length) {
      createPackageJSON()
      rl.close()
      return
    }
  
    let defAns =  defaultAnswers[index]
    let question = questions[index] + ':(' + defAns + ')'
    rl.question(question, function(answer) {
      answers.push(answer || defAns)
      index++
      runQuestionLoop()
    })
}

runQuestionLoop()
    
