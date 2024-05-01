

import {Yapilacak,YapilacakPros} from './Yapilacak'

const rootElement=document.querySelector('.root')!


function YapilacakTemplateUret(yapilacak:YapilacakPros):string{
    return `
        <div class="todo">
            <h2>${yapilacak.title}</h2>
            <p class="grup">${yapilacak.grup.join(',')}</p>
            <p>${yapilacak.description}</p>
        </div>

    `
}

function renderTemplates(templeates:string[],parent:Element):void{

    const templateElement=document.createElement('template')

    for(const t of templeates){
        templateElement.innerHTML+=t
    }

    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded',async ()=>{
    const yapilacaklar=await Yapilacak.verileriYukle()

    const yapilacakTemplates=yapilacaklar.map(YapilacakTemplateUret)

    renderTemplates(yapilacakTemplates,rootElement)
  
    
})