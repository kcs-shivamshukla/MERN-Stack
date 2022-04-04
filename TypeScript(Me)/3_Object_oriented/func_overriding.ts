// ** By Using Super
class parentClass { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
 
 class childClass extends parentClass { 
    display():void { 
       super.display() 
       console.log("dislay method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
 
 var parentObj = new parentClass();
 parentObj.display();
 var childObj = new childClass();
 childObj.display();
 childObj.hello();

 
 
 // ** Without Using Super
 class parentClass2 { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
  
 class childClass2 extends parentClass2 { 
    display():void { 
       
       console.log("dislay method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
  
 var parentObj = new parentClass();
 parentObj.display();
 var childObj = new childClass();
 childObj.display();
 childObj.hello();