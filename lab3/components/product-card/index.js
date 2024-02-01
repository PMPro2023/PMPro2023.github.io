export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="buy-${data.id}" data-id="${data.id}">${data.action1}</button>
                        <button class="btn btn-primary" id="details-${data.id}" data-id="${data.id}">${data.action2}</button>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        document
            .getElementById(`buy-${data.id}`)
            .addEventListener("click", listener)
    }
    
    addCart(data, lsd) {
        document
            .getElementById(`details-${data.id}`)
            .addEventListener("click", lsd)
    }

    render(data, listener, lsd) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
        this.addCart(data, lsd)
    }
}