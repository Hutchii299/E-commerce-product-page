// import imgThumbnail from "../../images/image-product-1-thumbnail.jpg";
// import binImg from "../../images/icon-delete.svg"

class CartComponent {
    _parentElement = document.querySelector('.header');
    _cart = this._parentElement.querySelector('.cart');
    _navBar = document.querySelector('.header__nav');
    _data;

    constructor() {
        this._addHandlerShowCart();
        this._renderResizeNav();
    }

    render(data) {
        this._data = data;
        const markUp = this._data.qty > 0 ? this._cartMarkUp() : this._noCartMarkUp();
        this._clear();
        this._cart.insertAdjacentHTML('afterbegin', markUp);
    }

    updateIcon() {
        this._data.qty > 0 ? this._parentElement.querySelector('.header__cart-item').classList.remove('hide') : this._parentElement.querySelector('.header__cart-item').classList.add('hide');
        this._parentElement.querySelector('.header__cart-item').innerText = this._data.qty;
    }

    addHandlerDeleteOrder(handler) {
        this._cart.querySelector('.btn').addEventListener('click', handler);
    }

    _clear() {
        this._cart.innerHTML = '';
    }

    _addHandlerShowCart() {
        this._parentElement.querySelector('.header__cart').addEventListener('click', (e) => {
            this._cart.classList.toggle('no-display');
        });
    }

    _noCartMarkUp() {
        return `
            <p class="cart__title bold paragraph dark-color margin-bottom-xsmall">
            Cart
            </p>
            <div class="no-items dark-color">Your cart is empty.</div>
        `;
    }

    _cartMarkUp() {
        return `
            <p class="cart__title bold paragraph dark-color margin-bottom-xsmall">
            Cart
            </p>
            <div class="items">
                <div class="cart__items">
                <img
                    class="cart__img"
                    src="./src/images/image-product-1-thumbnail.jpg"
                    alt="item-in-cart"
                />
                <div class="cart__details">
                    <p class="paragraph capitalise">fall limited edition sneakers</p>
                    <p class="paragraph">
                    $125.00 x ${this._data.qty} <span class="dark-color bold">$${this._data.totalCost().toFixed(2)}</span>
                    </p>
                </div>
                <button class="btn" aria-label="remove-from-cart" type="button">
                    <img
                    class="cart__bin"
                    src="./src/images/icon-delete.svg"
                    alt="bin-icon"
                    />
                </button>
                </div>
                <form>
                <button
                    class="btn btn-main btn-checkout"
                    aria-label="checkout"
                    type="submit"
                >
                    Checkout
                </button>
                </form>
                </div>
            </div>
        `;
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    addHandlerIconPressed(handler) {
        this._parentElement.querySelector('.btn-icon').addEventListener('click', handler);
    }

    _renderResizeNav() {
        ['load', 'resize'].forEach(trigger => {
            window.addEventListener(trigger, () => {
                if (document.documentElement.clientWidth > 715) {
                    if (this._parentElement.querySelector('.header__nav')) return
                    this._parentElement.querySelector('.header__logo').after(this._navBar);
                }
            });
        })

    }


}
export default new CartComponent();