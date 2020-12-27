class Welcome {

  constructor(name, majors){
    this.name = name;
    this.majors = majors;
  }
  
  getName(){
    return this.name;
  }

  getMajors(){
    return this.majors;
  }

}

const greeting = new Welcome('gufron', 'network engineering');

console.log(greeting.getName());
