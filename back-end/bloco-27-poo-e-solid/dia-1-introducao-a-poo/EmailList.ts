import Email from './Email';

class EmailList {
  constructor(private emailList: Email[] = []) { }

  get all(): Email[] { return this.emailList; }

  getByEmailFrom(emailAddress: string): Email[] {
    return this.emailList.filter((mail) => mail.from === emailAddress);
  }

  getByEmailTo(emailAddress: string): Email[] {
    return this.emailList.filter((mail) => mail.to === emailAddress);
  }

  getBySubject(searchString: string): Email[] {
    return this.emailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1
    );
  }

  addEmail(newMail: Email): void { this.emailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    this.emailList = this.emailList.filter((mail) => mail !== mailToRemove);
  }
}

export default EmailList;