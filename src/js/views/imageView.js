import ImgSelectorComponent from "./imgSelectorView.js";

class ImageContainer extends ImgSelectorComponent {
    _parentElement = document.querySelector('.container__left');
    _thumbnails = this._parentElement.querySelector('.images__thumbnail');
    _figures = Array.from(this._parentElement.querySelectorAll('.images__thumbnail-fig'));
    _captions = Array.from(this._parentElement.querySelectorAll('.images__thumbnail-caption'));
    _mainImage = document.querySelector('.images__main');

    constructor() {
        super();
        this._handleThumbnailClick();
        this._onResize();
    }

    showModal(handler) {
        this._mainImage.addEventListener('click', handler);
    }

    _onResize() {
        ['load', 'resize'].forEach(trigger => {
            window.addEventListener(trigger, () => {
                if (document.documentElement.clientWidth <= 715) {
                    if (!this._parentElement.querySelector('.images__thumbnail')) return
                    this._parentElement.querySelector('.images__thumbnail').remove();
                } else {
                    if (this._parentElement.querySelector('.images__thumbnail')) return
                    this._parentElement.append(this._thumbnails);
                }
            });
        })
    }

}
export default new ImageContainer();