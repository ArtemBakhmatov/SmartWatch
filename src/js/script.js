import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";
import { offerTimer } from "./modules/offerTimer";
import { reviewsSlider } from "./modules/reviewsSlider";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
    offerTimer();
    reviewsSlider();
});