import { Book } from './Types';

export default class BooksWishList {
  private wishlist: Book[];

  constructor() {
    this.wishlist = [];
    // this.wishlist.push(book);
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}