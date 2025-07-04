class Library{
    static nextId=1;
    #id 
    #title 
    #available 
    constructor(title){
        this.#id=Library.nextId++;
        this.#title=title;
        this.#available=true;

    }
   borrow() {
    this.#available=false;
   }
   returnItem() {
  this.#available = true;
}

   getInfo(){
     return `ID: ${this.#id}, Title: ${this.#title}, Available: ${this.#available}`;
   }

}
class Book extends Library{
    #pages
    #author
    constructor(title,author,pages){
       
        super(title);
      this.#author = author;
    this.#pages = pages;

    }
    getInfo() {
    return super.getInfo() + `, Author: ${this.#author}, Pages: ${this.#pages}`;
  }

}
const myBook = new Book("Harry Potter", "J.K. Rowling", 300);

console.log(myBook.getInfo()); 
myBook.borrow();               
console.log(myBook.getInfo());
myBook.returnItem();           
console.log(myBook.getInfo()); 

