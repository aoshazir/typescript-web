

export class VeriKaynak<T>{
    constructor(private endpoint:string){}

    async verileriYukle():Promise<T[]>{
        const res=await fetch(this.endpoint)
        return res.json()
    }

    async veriYukle(id:number):Promise<T>{
        const res=await fetch(`${this.endpoint}/${id}`)
        return res.json()
    }

    async sil(id:number):Promise<Response>{

        const res=await fetch(`${this.endpoint}/${id}`,{
            method:'DELETE'
        })

        return res;
    }

    async kaydet(veri:T):Promise<Response>{
        const res=await fetch(this.endpoint,{
            method:'POST',
            body:JSON.stringify(veri),
            headers:{'Content-Type':'application/json'}
        })

        return res
    }
}