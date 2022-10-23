import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";
import { offerTimer } from "./modules/offerTimer";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
    offerTimer();
});