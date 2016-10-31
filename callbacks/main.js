// This JavaScript program reads "books.json" and renders
// the data to the page.

(function () {

  // Adds a DOM structure for each post.
  function renderBooks(books) {

    // Get the DOM element that will contain the posts.
      
      
    var booksDiv = document.getElementById("books");
    var bookSubDiv = document.createElement("div");
    bookSubDiv.setAttribute("class","subDiv");
      
    books.forEach(function (book) {

      // Create the DOM elements.
      
        
            var bookDiv= document.createElement("div");
            var bookName=document.createElement("p");
            var bookImg=document.createElement("img");
            var btn=document.createElement("BUTTON");
            var t = document.createTextNode("Buy"); 
            bookName.innerHTML=book.name+"<br/>"+ "₹" +book.price;
            bookImg.src=book.sourceImage;
            
            bookDiv.setAttribute("class", "book");
            btn.appendChild(t);
            bookDiv.appendChild(bookImg);
            bookDiv.appendChild(bookName);
            bookDiv.appendChild(btn);

            bookSubDiv.appendChild(bookDiv);
    
        
        booksDiv.appendChild(bookSubDiv);
    });
      
  }

  // Fetches the file "books.json" and passes the parsed JSON object 
  // into the given callback function.
  function getBooks(callback){

    // Fetch the JSON file using XMLHttpRequest.

    var request = new XMLHttpRequest();

    // When the file has loaded,
    request.onload = function () {

      // parse the JSON text into an array of book objects.
      var books = JSON.parse(request.responseText);

      // Pass the books array to the callback.
      callback(books);
    };
    request.open("GET", "books.json", true);
    request.send(null);
  }

  // The main program, which gets then renders posts.
  getBooks(function (books) {
    renderBooks(books);
  });
}());
