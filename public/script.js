let desc = document.getElementById("desc");
let orderButton = document.getElementById("order-text");
let langChange = document.getElementById("langChange");
let popUp = document.getElementById("pop-up")
let mainDiv = document.getElementById("main")
let buttonCommand = document.getElementById("command-button")
let buttonGoods = document.getElementById("goods-button")
let choice = document.getElementById("choice")
let command = document.getElementById("command")
let goods = document.getElementById("goods")
let buttonBack = document.getElementById("back")
let langChangeClass = document.getElementsByClassName("langChanger");

let lang = 0, visibleTracker = 0, currentPage = 1, langNumber = 0, oldNumber = 0;
let descText, btnText
let arLangChanger = ["توصيل طلبية", "توصيل سلعة", "الاسم الكامل" , "رقم الهاتف", "وزن السلعة", "عنوان الاخد", "عنوان التوصيل", "تأكيد" , "الاسم الكامل", "رقم الهاتف", "الطلب", "عنوان التوصيل", "تأكيد"],
    engLangChanger = ["Order delevery", "Item delevery", "Full name", "Phone number", "Items weight", "Taking adress", "Delevery adress", "Submit", "Full name", "Phone number", "Order", "Delevery adress", "Submit"],
    frLangChanger = ["Livraison d'une commande", "Livraison de marchandises", "Nom complet ", "Numéro de téléphone", "Poids des articles", "Adresse de prise en charge", "Adresse de livraison", "Envoyer", "Nom complet", "Numéro de téléphone", "Commande", "Adresse de livraison", "Envoyer"],
    langHolder = [];

function changeLang(index) {
    desc.style.transition = 'opacity 0.5s';
    orderButton.style.transition = 'opacity 0.5s';
    if (langNumber != oldNumber) {
        oldNumber = langNumber;
        desc.style.opacity = 0;
        orderButton.style.opacity = 0;
        setTimeout(() => {
            desc.style.opacity = 1;
            orderButton.style.opacity = 1;

            if (index == 0) {
                descText = "توصيل السلع الخفيفة و طلبات الاكل و الدواء في جميع انحاء مدينة طنجة ابتداء من 10 دراهم";
                btnText = "اطلب";
            } 
            if (index == 1) {
                descText = "Delivery of light items, food and medicine orders throughout the city of Tangier, starting from 10 dirhams";
                btnText = "Request";
            }
            if (index == 2) {
                descText = "Livraison des commandes de produits légers, de nourriture et de médicaments dans toute la ville de Tanger, à partir de 10 dirhams";
                btnText = "Demander";
            }
            desc.innerHTML = descText;
            orderButton.innerHTML = btnText;
        }, 500);
        for (let i = 0; i < langChangeClass.length; i++){
            langChangeClass[i].innerHTML = langHolder [i]
        }
    }
}

langChange.addEventListener("click", () => {
    if (langChange.value == "ع") {
        langHolder = arLangChanger;
        langNumber = 0;
        changeLang(langNumber) ;
    } else if (langChange.value == "ENG") {
        langHolder = engLangChanger;
        langNumber = 1;
        changeLang(langNumber)  
    } else if (langChange.value == "FR") {
        langHolder = frLangChanger;
        langNumber = 2
        changeLang(langNumber) 
    } 
    
})

mainDiv.addEventListener("click", (e) => {
    if (e.target.id != "order-text") {
        popUp.style.display = "none";
        choice.style.display = "block"
        command.style.display = "none"
        goods.style.display = "none"
        currentPage = 1;
    } 
    
})

orderButton.addEventListener("click", () => {   
    popUp.style.display = "block";
})

buttonCommand.addEventListener("click", () => {
    currentPage = 2;
    choice.style.display = "none"
    command.style.display = "block"
    goods.style.display = "none"
})
buttonGoods.addEventListener("click", () => {
    currentPage = 2;
    choice.style.display = "none"
    command.style.display = "none"
    goods.style.display = "block"
})

buttonBack.addEventListener("click", () => {
    if (currentPage == 1) {
        popUp.style.display = "none";
    } else {
        choice.style.display = "block"
        command.style.display = "none"
        goods.style.display = "none"
        currentPage = 1
    }
})





