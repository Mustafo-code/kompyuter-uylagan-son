let random=Number.parseInt(Math.random()*100)
let javobList=[]
let ism= prompt("Isminggizni kiriting")
let urinishlarSoni=0
function topdim(){
    let son=document.getElementById("son").value;
    let natija=document.getElementById("natija")
   if(son ===""){
    natija.style.display="block"
    natija.style.color="green"
    natija.innerText=ism +"  Siz buyerga son kiritmog'inggiz darkor"
   }else{
    urinishlarSoni++;
    if(son>100){
        natija.style.color="red"
        natija.style.display="block";
        natija.innerText="100 dan katta son kiritish mumkin emas";
    }else if(son<0){
        natija.style.color="red"
        natija.style.display="block"
        natija.innerText="0 dan kichik son kiritish mumkin emas";
    }else{
        if(son>random){
        natija.style.color="red"
            natija.style.display="block"
            natija.innerText="Katta son kiritinggiz"
        }
        else if(son<random){
        natija.style.color="red"
            natija.style.display="block";
            natija.innerText="Kichik son kiritinggiz"
        }
        else{
        natija.style.color="white"
        natija.style.display="block"
        natija.innerText="Topdinggiz!"
        if(ism===""){
            ism="Noma'lum shaxs"
        }
         let a={name:ism, urinishlar:urinishlarSoni}
        javobList.push(a)
        natijalar=[]
        javobList.map(item=>{
            natijalar.push(`<h4 class="text-center m-3" style="color: white;">${item.name} ${item.urinishlar} Ta urinish</h4> `
        
            )
        })
        natijalar=natijalar.join('')
        document.getElementById("javob").innerHTML=natijalar
        setTimeout(() => {
        random=Number.parseInt(Math.random()*100)  
            document.getElementById("son").value=""
            document.getElementById("natija").style.display="none"
            ism= prompt("Isminggizni kiriting")
            urinishlarSoni=0
        }, 3000);
         }
    }
   }
}