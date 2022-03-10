import ImgSelectorComponent from "./imgSelectorView.js";

class ModalComponent extends ImgSelectorComponent {
    _parentElement = document.querySelector('.modal__background');
    _parentName = 'modal__main-image-container';
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



}

export default new ModalComponent();