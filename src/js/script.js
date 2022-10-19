import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
});