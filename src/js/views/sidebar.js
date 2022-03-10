class SidebarComponent {
    _parentElement = document.querySelector('.sidebar');
    _navBar = document.querySelector('.header__nav');

    constructor() {
        this._onResize();
        this._closeButton();
    }

    _onResize() {
        ['load', 'resize'].forEach(trigger => {
            window.addEventListener(trigger, () => {
                if (document.documentElement.clientWidth <= 715) {
                    if (this._parentElement.querySelector('.header__nav')) return
                    this._parentElement.append(this._navBar);
                }
            });
        })

    }

    _closeButton() {
        this._parentElement.querySelector('.sidebar__close').addEventListener('click', this.toggleSidebar.bind(this));
    }

    toggleSidebar() {
        this._parentElement.classList.toggle('show-sidebar');
    }

}
export default new SidebarComponent();