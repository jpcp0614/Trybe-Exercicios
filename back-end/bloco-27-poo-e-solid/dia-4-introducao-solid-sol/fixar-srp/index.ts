import BooksWishList from "./BooksWishList";
import ReadingTracker from "./ReadingTracker";

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);

const wishList = new BooksWishList();
wishList.addToWishList({ book: 'Lógica de Programação', author: 'Edécio Fernandes', genre: 'TI' });
wishList.addToWishList({ book: 'Refatoração', author: 'Fowler', genre: 'TI' })
wishList.showWishlist();