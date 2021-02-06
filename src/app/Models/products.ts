export class product {
    public id = 0;
    public name = "";
    public texture = "";
    public grammage = "";
    public couleur = "";

    constructor(data?:any){
        if (data){
          if (data.hasOwnProperty('id'))
          this.id = data.id;
          if (data.hasOwnProperty('name'))
          this.name = data.name;
          if (data.hasOwnProperty('texture'))
          this.texture = data.texture;
          if (data.hasOwnProperty('couleur'))
          this.couleur = data.couleur;
        }
      }

      getName(){
        return `${this.name}`;
      }
}
