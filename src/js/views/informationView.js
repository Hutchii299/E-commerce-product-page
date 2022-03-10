class InformationComponent {
    _parentElement = document.querySelector('.container__right');
    _qty = 0;

    constructor() {
        this._addHandlerQtyChange();
    }


    _changeQty(e) {
        const btnClicked = e.target;
        if (btnClicked.tagName !== 'BUTTON') return
        const qtyChange = btnClicked.dataset.type === 'plus' ? 1 : -1;
        return this._changeQtyField(qtyChange);
    }

    _changeQtyField(qtyChange) {
        const qtyLabel = this._parentElement.querySelector('.controls__items .heading-h2');
        const qtyCurrent = +qtyLabel.innerText;
        qtyLabel.innerText = (qtyChange + qtyCurrent >= 0) ? qtyChange + qtyCurrent : 0;
        return +qtyLabel.innerText;
    }

    _addHandlerQtyChange() {
        this._parentElement.querySelector('.controls__items').addEventListener('click', (e) => {
            this._qty = this._changeQty(e);
        });
    }

    addHandlerAddToCart(handler) {
        this._parentElement.querySelector('.btn-main').addEventListener('click', (e) => {
            e.preventDefault();
            handler(this._qty);
        });
    }



}

export default new InformationComponent();