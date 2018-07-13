const readline = require('readline')

const completer = (line) => {
  const command = 'npm'
  const subCommands = ['help', 'init', 'install']
  // npm 补全
  if (line.length < command.length) {
    return [command.indexOf(line) === 0 ? [command] : [], line]
  }

  // npm i => init install 
  // npm h => help
  let hints = subCommands.filter(subCommand => {
    const lineTrippedCommand = line.replace(command, '').trim()
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  })

  if (hints.length === 1) {
    hints = hints.map(function (hint) {
      return [command, hint].join(' ')
    })
  }

  // 匹配多个或者没有匹配到
  return [hints.length ? hints : subCommands, line]
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})
