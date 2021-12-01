import { Tema } from "./tema"
import { User } from "./User"

export class Postagem{

    public id:  number
    public foto: string
    public titulo: string
    public texto: string
    public data: Date
    public usuario: User
    public link: string 
    public tema: Tema


}