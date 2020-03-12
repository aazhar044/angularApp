// First of all we will export the ts class , and we are not using any
//  decorator ad there is no need of it and we use the Vanilla Script here
export class Recipe{
  public name:string;
  public description:string;
  public imagePath:string;

  /**
   *
   */
  constructor(name:string, desc:string, imagePath:string) {
    this.name=name;
    this.description=this.description;
    this.imagePath=imagePath;

  }
}
//We added our Recipe model now lets use it

