import ImgSelectorComponent from "./imgSelectorView.js";

class ModalComponent extends ImgSelectorComponent {
    _parentElement = document.querySelector('.modal__background');
    _figures = Array.from(this._parentElement.querySelectorAll('.images__thumbnail-fig'));
    _captions = Array.from(this._parentElement.querySelectorAll('.images__thumbnail-caption'));

    constructor() {
        super();
        this._handleThumbnailClick();
        this._toggleThumbnailFromArrowButtons();
        this._parentElement.querySelector('.modal__close').addEventListener('click', this.toggleAppear.bind(this));
        this._parentElement.addEventListener('click', (e) => {
            if ([...e.target.classList].some(classItem => classItem === 'modal__background')) {
                this.toggleAppear();
            }
        });
    }

    toggleAppear() {
        this._parentElement.classList.toggle('no-display');
    }

    _toggleThumbnailFromArrowButtons() {
        this._parentElement.querySelector('.modal__main-image-container').addEventListener('click', (e) => {
            if (!e.target.closest('.btn')) return;
            if (e.target.closest('.btn').tagName !== 'BUTTON') return

            e.target.closest('.btn').ariaLabel === 'button-right' ? this._selectedImg++ : this._selectedImg--
            if (this._selectedImg > this._figures.length - 1) this._selectedImg = 0;
            if (this._selectedImg < 0) this._selectedImg = this._figures.length - 1;
            this._toggleSelection.call(this, this._selectedImg);
            this._changeMainImage(this._selectedImg);
        });
    }

}

export default new ModalComponent();