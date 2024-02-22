class Parent {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }

  getMessage() {
    return "Hello " + super.getName();
  }
}
describe("Test Parent Child Classes", function() {
    it("Get Message Test", function(){
        let someone = new Child('person');
        expect(someone.getMessage()).toEqual("Hello person");
    });
       
  });  
  