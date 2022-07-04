export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  // private wishlist: Book[];

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    // this.wishlist = [];
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.progressNotification(
      'There are still some books to go!',
    );
  }

  // addToWishList(book: Book): void {
  //   this.wishlist.push(book);
  // }

  // showWishlist(): void {
  //   console.log(this.wishlist);
  // }

  private progressNotification(message: string): void {
    console.log(message);
  }
}