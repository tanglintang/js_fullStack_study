class TreeNode {
    constructor () {
        this.value = value
        this.descendents = []
    }
}

// root
const abe = new TreeNode('abe')
const homer = new TreeNode('Homer')
const bart = new TreeNode('Bart')
const lisa = new TreeNode('Lisa')
const maggie = new TreeNode('Maggie')

abe.descendents.push(homer)
homer.descendents(bart, lisa, maggie)
