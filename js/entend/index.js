// es6 class 实质还是函数
function Person(name) {
    this.name = name

}
Person.prototype = {
    getName: function() {
       return  this.name
    }
}

function Author(name, books) {
    
    Person.call(this, name)
    this.books = books

}

extend(Author, Person)
Author.prototype.getBooks = function() {
    return this.books
}
function extend(subClass, superClass) {

    subClass.prototype = new superClass()

    subClass.prototype.constructor = subClass
    console.log(subClass.prototype.constructor)
    console.log(superClass.prototype.constructor)
    
    
}

const author = new Author('高尔基', ['海燕哪'])
console.log(author.constructor.prototype)
