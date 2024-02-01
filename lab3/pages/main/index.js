import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
var amount = []
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMekl3TXpJM01USTRMMjl5YVdkcGJtRnNMekV2TWpBeU15MHdOQzB4TWxRd055VXpRVFV5SlROQk1ETXVNVFkyTURBd0pUSkNNREFsTTBFd01DOHlNRE15TnpFeU9GOHhMbXB3Wnc9PS5qcGc.png",
                title: "Яйца 10 шт",
                text: "Цена: 160₽",
                action2: "В корзину",
                action1: "Подробнее"
            },
            {
                id: 2,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMekl3TXpFME56TTJMMjl5YVdkcGJtRnNMekV2TWpBeU1pMHdPQzB5TTFRd01TVXpRVEU0SlROQk5UQXVPVEl6TURBd0pUSkNNREFsTTBFd01DOHlNRE14TkRjek5sOHhMbXB3Wnc9PS5qcGc.png",
                title: "Бананы",
                text: "Цена: 48₽",
                action2: "В корзину",
                action1: "Подробнее"
            },
            {
                id: 3,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMek13TWpReEwyOXlhV2RwYm1Gc0x6RXZNakF5TXkweE1TMHlORlF4TmlVelFUSTVKVE5CTVRZdU1qUXhOakl5SlRKQ01EQWxNMEV3TUM4ek1ESTBNVjh4TG1wd1p3PT0uanBn.png",
                title: "Жевательная резинка",
                text: "Цена: 24,99₽",
                action2: "В корзину",
                action1: "Подробнее"
            },
        ]
    }
        
    clickCard(e) {
        const cardId = e.target.dataset.id;
    
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render()
    }

    clickInCart(e){
        const cardId = e.target.dataset.id;
        if (amount.indexOf(cardId) === -1)
            amount.push(cardId)
        this.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()

        const root = document.getElementById('root');
        root.insertAdjacentHTML('beforeend', `<div style="width: 200px;"><div style="height: 100px; margin: 10px;"><button type="button" class="btn btn-primary position-relative">Корзина<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${amount.length}<span class="visually-hidden">непрочитанные сообщения</span></span></button></div></div>`)

        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this), this.clickInCart.bind(this))
        })
    }
}