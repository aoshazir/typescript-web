
import { VeriKaynak } from './services/VeriKaynak'

export interface YapilacakPros{
    title:string 
    description:string 
    grup:string[]
}

export const Yapilacak=new VeriKaynak<YapilacakPros>('http://localhost:3000/yapilacaklar')