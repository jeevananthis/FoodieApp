export class Recipe {
  public id:number;
  public name: string;
  public description: string;
  public imagePath: string;
  public catagory : string[];
  public ratings : number;
  public price : number;
  

  constructor(id : number,name: string, desc: string, imagePath: string,  catagory : string[],ratings : number,price : number) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.price = price;
    this.ratings = ratings;
    this.catagory = catagory 
  }
}