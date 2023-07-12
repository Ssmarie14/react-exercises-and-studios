export default function BookList() {
   let pageTitle = "Book's I've read this month";
   let book1 = "https://m.media-amazon.com/images/I/511hkXlSvLL._SL500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61Yu7zVGD0L._SY425_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71S5PVQRdOL._SY425_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="You're Not Dying, You're Just Waking Up" />
         <img src={book2} alt="The ChatGPT Millionaire" />
         <img src={book3} alt="The People We Keep" />
      </div>      
   );
}