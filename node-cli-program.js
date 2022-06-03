const path = require('path')
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve))

function scanDirectory (path) {
  fs.readdir(path, (err, files) => {

  })
}

function writeLPL (data, filename) {
  const formattedFilename = /.*\.lpl$/i.test(filename) ? filename : `${filename}.lpl`
  fs.writeFile(formattedFilename, JSON.stringify(data, ' ', 2))
}

class PlaylistBuilder {
  constructor () {
    this.files = []
    this.running = true
  }

  async promptUser () {
    try {
      // let command
      // await prompt('enter command')
      //   .then((cmd) => {command = cmd})
      // return command
      return prompt('enter command: ')
    } catch (err) {
      console.error('something went wrong in promptUser:', err)
    }
  }

  printCommandList () {
    const listOfCommands = [
      'q - quit program',
      'l - something else',
      'c - another thing'
    ]

    listOfCommands.forEach(cmd => {
      console.log(cmd)
    })
  }


  writeConsole (stringArr) {
    console.clear()
    stringArr.forEach(str => console.log(str))
  }

  async promptUserForName () {
    try {
      const name = await prompt('what\'s your name?')
      const lastname = await prompt(`hello ${name}, what\'s your last name?`)
      console.log(`your first name is ${name}, and your last name is ${lastname}`)
      rl.close()
    } catch (err) {
      console.error('something wrong with promptUserForName:', err)
    }
  }

  async runProgram () {
    do {
      console.clear()
      this.printCommandList()
      const command = await this.promptUser()
      console.log('your command ', command)
      this.parseCommand(command)
      // if (command === 'q') {
      //   this.running = false
      // }
    } while (this.running)
    console.log('bye!')
    process.exit(0)
  }

  parseCommand (cmd) {
    switch (cmd) {
      case 'q': {
        this.running = false
        break
      }
      case 'l': {
        console.log('you pushed L, whatever')
        break
      }
      default: console.log('default case')
    }
  }
}

const builder = new PlaylistBuilder()

builder.runProgram()

// builder.promptUserForName()
