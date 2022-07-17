const dropDown=document.querySelector(".btn-drop-down");
const btn = document.querySelectorAll(".btn");
const sortList=document.querySelector(".sort-list")
const productContainer = document.querySelector(".product-container");
dropDown.addEventListener("click",() =>{
    
    if(sortList.classList.contains("open"))
    {
        sortList.classList.remove("open");
        
    }else{
        sortList.classList.add("open");
    }
})

btn.forEach(element => {
    element.addEventListener("click", (event) => {
        console.log(event.target.id);
        const eventID = event.target.id;
        if(eventID === "price"){
            const data=iPhone.sort((a,b) => {
              return b.price - a.price
            })
            productUI(data);
        }else if(eventID === "date"){
            const data = iPhone.sort((a,b) => b.productDate.getTime() - a.productDate.getTime());
            productUI(data);
        }
    })
})

const iPhone = [
    {
        imagePath : "iPhone_image/iPhone-11pro.jpg",
        price : 1000,
        productDate : new Date(2019,2,10),
    
    },
    {
        imagePath : "iPhone_image/iPhone-12.jpg",
        price : 1500,
        productDate : new Date(2020,2,10)
    },
    {
        imagePath : "iPhone_image/iPhone-13.jpg",
        price : 1800,
        productDate : new Date(2021,2,10)
    }
]
// iPhone.forEach((arg) => {
//     const productUI = `
//     <div>
//         <img src="${arg.imagePath}" class = "iPhone-image">
//     </div>
//     <h5>${arg.price} </h5>
//     <h6>${arg.productDate.toLocaleDateString()} </h6>

// `
//     productContainer.innerHTML += productUI;       
// })



const productUI = (args) => {
    productContainer.innerHTML = "";
    args.forEach( element => {

        const product = `
            <div>
                <img src="${element.imagePath}" class = "iPhone-image">
            </div>
            <h5>${element.price} </h5>
            <h6>${element.productDate.toLocaleDateString()} </h6>
        `;
        productContainer.innerHTML += product;

    });
}

productUI(iPhone);


/*
Date() // return a string representation of the current tiem and date
        ခေါမယ်ဆိုရင် အခု လက်ရှီ နေ အချိန် ကိ ု string အနေနဲ့ ထုပ် return ပြန်ပေးပါတယ်

const todayDate = new Date() //construcotr ခေါရင် object ထုပ်ပေးပါတယ်


todayDate.getDay() // monday ဆိုရင် 1 ,tuesday ဆိုရင်2
todayDate.getMonth() // ဆိုရင်  လကို ၀ စပြပါတယ် january ၀, febuary 1 , march 2 ,
todayDate.getFullYear() //year ပြန်ပါတယ်
todayDate.getTime() // ခေါလိုက်ရင် 1970 jaunry 1 စပြီး ယခုအချိန်ထိ အချိန်ပြပါတယ်  millisecond ပြပါတယ်

new Date('05,08,2021') // not recommend to use
//new Date(year,month,day,hour,minute,second,millisecond) //ရေလို့ရပါတယ်
console.log(new Date(2021,5,10)) // monthe စရည်တွက်တာ ၀ စပါတ ယ်

todayDate.setDate(7)// ရက် ကိုပြောင်းပေးပါတယ်
todayDate.setMonth(5) // လကိုပြောင်းပေးပါတယ်
todayDate.setFullYear(2022)// year ကိုပြောင်‌ေးပါတယ်

const custimerbookingDate = new Date();
*/
/* 
    sort () သည် information  sort ရပါတယ် string ပြောင်းပေးလိုက်ပါတယ် UTF-16 unique order ခြေပြုပြီး sort လုပ်ပေးသွားမှာပါ
    sort(compareFunction)
    sort((a,b) => a - b) ဆိုရင် ငယ်စဥ◌် ကြီးလိုက် sort လုပ်ပေးသွားမှာ
    sort((a,b) => b - a) ဆိုရင် ကြီးစဥ◌် ငယ်လိုက် sort လုပ်ပေးသွားမှာ
    const stringOne = "apple" ; 
    const stringTwo = "Lemon"
    stringOne.localeCompare(stringTwo) string အချင်းချင်းနှိင်းယဥ◌်တာပါ 
    
 */