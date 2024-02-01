import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.idx = id - 1
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMekl3TXpJM01USTRMMjl5YVdkcGJtRnNMekV2TWpBeU15MHdOQzB4TWxRd055VXpRVFV5SlROQk1ETXVNVFkyTURBd0pUSkNNREFsTTBFd01DOHlNRE15TnpFeU9GOHhMbXB3Wnc9PS5qcGc.png",
                title: "Яйца 10 шт",
                text: "Цена: 160₽",
                action1: "В корзину",
                action2: "Подробнее"
            },
            {
                id: 2,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMekl3TXpFME56TTJMMjl5YVdkcGJtRnNMekV2TWpBeU1pMHdPQzB5TTFRd01TVXpRVEU0SlROQk5UQXVPVEl6TURBd0pUSkNNREFsTTBFd01DOHlNRE14TkRjek5sOHhMbXB3Wnc9PS5qcGc.png",
                title: "Бананы",
                text: "Цена: 48₽",
                action1: "В корзину",
                action2: "Подробнее"
            },
            {
                id: 3,
                src: "https://imgproxy.sbermarket.ru/imgproxy/size-1646-1646/aHR0cHM6Ly9pbWdwcm94eS5zYmVybWFya2V0LnJ1L2ltZ3Byb3h5L3dpZHRoLWF1dG8vY3pNNkx5OWpiMjUwWlc1MExXbHRZV2RsY3kxd2NtOWtMM0J5YjJSMVkzUnpMek13TWpReEwyOXlhV2RwYm1Gc0x6RXZNakF5TXkweE1TMHlORlF4TmlVelFUSTVKVE5CTVRZdU1qUXhOakl5SlRKQ01EQWxNMEV3TUM4ek1ESTBNVjh4TG1wd1p3PT0uanBn.png",
                title: "Жевательная резинка",
                text: "Цена: 24,99₽",
                action1: "В корзину",
                action2: "Подробнее"
            },
        ]
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()[this.idx]
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}