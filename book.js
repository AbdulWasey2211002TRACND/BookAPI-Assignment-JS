class Books {
    constructor(title, author,year,length) {
      this.author = author;
      this.title = title;
      this.year = year;
      this.length = length;
    }
  }



class ReadingList {
    constructor (books,dateRead,rating)
    {
        this.books = books;
        this.dateRead=dateRead;
        this.rating = rating;
        this.booksread = [];
    }

    addbooks()
    {
        this.books["dateread"] = this.dateRead;
        this.books["rating"] = this.rating;
        this.booksread.push(this.books);
    }

    deletebook(title)
    {
        for(let i=0;i<this.booksread.length;i++){

			var b = this.booksread[i];
			if(b.title == title){
				this.booksread.splice(i,1);
			}

		}
    }

    numberRead() {
		return this.booksread.length;
	}

    getbooks() {
		return this.booksread;
	}

    getBooksByRating(rating){
        var booksbyratings = [];
        for(let i=0;i<this.booksread.length;i++){
			var b = this.booksread[i];
			if(b.rating == rating){
				booksbyratings.push(b);
			}

		}
        return booksbyratings;


    }


}


//books object
var book1 = new Books("wasey", "jj",2015,"22");
var book2 = new Books("maham", "jj",2013,"2");

//reading books object
var reading1 = new ReadingList(book1,"22 jan",5);
var reading2 = new ReadingList(book2,"22 jan",1);

//books adding
reading1.addbooks();
reading2.addbooks();

//checking count
console.log(reading2.numberRead());

//deleting books
var del = reading1.deletebook("wasey");

//checking count after deletion
console.log(reading1.numberRead());


//checking books
console.log(reading2.getbooks());

//getting books by ratings
console.log(reading2.getBooksByRating(1));