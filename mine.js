//  Book id  - Book Title -     Author -   Price - Quantity
//   0              1              2         3        4

const BookStore = [
[1,'Start with why','Simon Sinek',80.0,13 ],
[2,'But how do it','J.clark scott',59.9,22],
[3,'Clean Cod','Robert Cecil Martin',50.0 ,5],
[4,'Zero to One ','Peter Thiel',45.0 ,12],
[5,'You dont know JS','Kyle Simpson',39.9,9]
];



for(let Books of BookStore){
    console.log(Books);
}




 

 let BooksInformation = 1
switch(BooksInformation){
     case 1: 
    console.log(BookStore[2][0]);
     
     case 2:
     console.log(BookStore[2][1]);
     
     case 3:
     console.log(BookStore[2][2]);
     
     case 4:
     console.log(BookStore[2][4]);
     break
     case 5:
    console.log(BookStore[4][3]);
     break 


}
 




let CleanCod = 2
if(CleanCod < 5){
    console.log('This book is availble');
}else if(CleanCod > 5  ){
    console.log('Sorry quantity this book not avalible');
}

let Quantity = 2
if(Quantity > 5){
    console.log('Sorry, this quantity is not available');
}else{
    console.log('Quantity is available 5');
}








let customerPrice = 250

if(customerPrice < 100){
    console.log('Sorry your price is not enough to buy ' ); 
}else if(customerPrice > 100){
    console.log('Your balance is sufficient to purchase the required quantity');
  
}
BookStore[2][4]= 5-2
console.log(BookStore);

