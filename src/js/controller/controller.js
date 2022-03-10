"use strict"
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

//import model
import * as model from "../model/model.js";

//import views
import cartComponent from "../views/cartView.js";
import sidebarView from '../views/sidebar.js';
import imageView from "../views/imageView.js";
import modalView from "../views/modalView.js";
import informationView from '../views/informationView.js';

//controls
const controllerLoadCart = function () {
    cartComponent.render(model.state);
}

const controllerAddToCart = function (qty) {
    //update qty and total in state
    model.state.qty = qty;

    //update Cart.
    cartComponent.render(model.state);
    model.state.qty > 0 && cartComponent.addHandlerDeleteOrder(controllerRemoveFromCart);

    //update Cart Icon.
    cartComponent.updateIcon();

}

const controllerRemoveFromCart = function () {
    //set state
    model.state.qty = 0;

    //update cart view
    cartComponent.render(model.state);

    //update cart icon
    cartComponent.updateIcon();
}

const controllerShowModal = function () {
    modalView.toggleAppear();
}

const controllerSidebar = function () {
    sidebarView.toggleSidebar();
}

//events
const init = function () {
    cartComponent.addHandlerRender(controllerLoadCart);
    cartComponent.addHandlerIconPressed(controllerSidebar);
    informationView.addHandlerAddToCart(controllerAddToCart);
    imageView.showModal(controllerShowModal);
}
init();