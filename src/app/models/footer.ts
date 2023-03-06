export class footer{
    constructor(
    public id: number, 
    public subject_matter: string,    
    public comment: string,
   
    public contact:{
        name: string,
        tel: string,
        email: string,

    }
    
    ){}
}