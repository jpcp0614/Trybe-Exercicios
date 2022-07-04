const student = {
  name: 'João Paulo',
  tryber: true,
  greet: function() {
    // console.log(this);

    if(this.tryber) {
      return 'Olá, eu sou Tryber!';
    }
    return 'Olá, não sou Tryber!';
  }
}

console.log(student.greet());