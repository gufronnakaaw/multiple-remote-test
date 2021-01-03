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
  
  setHobby(hobby){
   this.hobby = hobby;
  }

  setName(name){
    this.name = name;
  }

}

const greeting = new Welcome('gufron', 'network engineering');

console.log(greeting.getName());
