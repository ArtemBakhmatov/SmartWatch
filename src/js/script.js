import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";
import { offerTimer } from "./modules/offerTimer";
import { reviewsSlider } from "./modules/reviewsSlider";
import { menuCardChildren } from "./modules/menuCardChildren";
import { menuCardGrown } from "./modules/menuCardGrown";
import { tabsCards } from "./modules/tabsCards";
import { menuCardElderly } from "./modules/menuCardElderly";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
    offerTimer();
    reviewsSlider();
    menuCardChildren();
    menuCardGrown();
    menuCardElderly();
    tabsCards();
});