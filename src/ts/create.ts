
// const titleInput=document.querySelector('input[name="title"]') as HTMLInputElement

import { Yapilacak, YapilacakPros } from "./Yapilacak"

// const description=document.querySelector('textarea') as HTMLTextAreaElement


const form =document.querySelector('.create') as HTMLFormElement


form.addEventListener('submit',async (e)=>{
    e.preventDefault()

    const data=new FormData(form)

    const yeniYapilacak:YapilacakPros={
        title:data.get('title') as string,
        description:data.get('description') as string,
        grup:data.getAll('grup') as string[]

    }

    const res=await Yapilacak.kaydet(yeniYapilacak)

    if(!res.ok){
        console.log('yapılacak eklenmedi');
        
    }

    if(res.ok){
        window.location.href='/'
    }


})