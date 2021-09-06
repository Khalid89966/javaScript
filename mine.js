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




 

 let PriceBooks = 1
switch(PriceBooks){
     case 1: 
    console.log(BookStore[2][0]);
     
     case 2:
     console.log(BookStore[2][1]);
     
     case 3:
     console.log(BookStore[2][2]);
     break
     case 4:
     console.log(BookStore[3][3]);
     break
     case 5:
    console.log(BookStore[4][3]);
     break 


}
 

console.log(BookStore[2][4]);
let Quantity = 2
if(Quantity > 5){
    console.log('Sorry, this quantity is not available');
}else{
    console.log('Quantity is available');
}

BookStore[2][4]= 3


function add (Book , boook){
    
    return Book +boook
}

let value = add('Clean ','Cod')
console.log(value);



let customerPrice = 250

if(customerPrice < 50){
    console.log('Sorry your price is not enough to buy ' ); 
}else{
    console.log('Thank you for buying the Books');
    console.log('You now have tow copies of the clean cod book');
    console.log('Yhank you payment been made');
}