export class Ingredient{
  // public name:string;
  // public amount:number;

  // As we want to recieve them as argument soo defining constructor
  // constructor(name: string, amount: number) {
  //   this.name=name;
  //   this.amount=amount;

  //As we see above we declare the properties then assign all those inside the constructor
   //we won't do above as type script gives us some features like we do below
   //By just simply declare the argument properties public then we dont need to write above all
   constructor(public name: string, public amount: number) {  }
}
//Now we will use these in shopping list component
