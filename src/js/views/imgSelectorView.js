// import img1 from "url:../../images/image-product-1.jpg";
// import img2 from "url:../../images/image-product-2.jpg";
// import img3 from "url:../../images/image-product-3.jpg";
// import img4 from "url:../../images/image-product-4.jpg";

const images = ['./src/images/image-product-1.jpg', './src/images/image-product-2.jpg', './src/images/image-product-3.jpg', './src/images/image-product-4.jpg'];

export default class ImgSelectorComponent {
    _selectedImg = 0;

    _handleThumbnailClick() {
        this._parentElement.querySelector('.images__thumbnail').addEventListener('click', this._getImageNumber.bind(this));
    }

    _changeMainImage(imageNumber) {
        this._parentElement.querySelector('.images__main').src = images[imageNumber];
    }

    _toggleSelection(number) {
        const fig = this._getFigureFromImgNumber(number);
        const caption = fig.querySelector('figcaption');
        caption.classList.remove('hide');
        fig.classList.add('add-border');

        this._captions.forEach(img => {
            img !== caption ? img.classList.add('hide') : null;
            img.parentElement !== fig ? img.parentElement.classList.remove('add-border') : null;
        });
    }

    _getFigureFromImgNumber(number) {

        return this._figures.filter(function (fig) {
            return fig.querySelector('img').dataset.img == number;
        })[0];
    }

    _getImageNumber(e) {
        const imageEle = e.target.nextElementSibling;
        if (!imageEle || imageEle.tagName !== 'IMG') return;
        const imgNumber = imageEle.dataset.img;
        if (!imgNumber) return

        this._selectedImg = imgNumber;
        this._toggleSelection.call(this, imgNumber);
        this._changeMainImage(imgNumber)
    }

    _toggleThumbnailFromArrowButtons() {
        this._parentElement.querySelector(`.${this._parentName}`).addEventListener('click', (e) => {
            if (!e.target.closest('.btn')) return;
            if (e.target.closest('.btn').tagName !== 'BUTTON') return

            e.target.closest('.btn').dataset.type === 'button-right' ? this._selectedImg++ : this._selectedImg--
            if (this._selectedImg > this._figures.length - 1) this._selectedImg = 0;
            if (this._selectedImg < 0) this._selectedImg = this._figures.length - 1;
            this._toggleSelection.call(this, this._selectedImg);
            this._changeMainImage(this._selectedImg);
        });
    }
}