import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";
import { offerTimer } from "./modules/offerTimer";
import { reviewsSlider } from "./modules/reviewsSlider";
import { menuCardChildren } from "./modules/menuCardChildren";
import { modalCardChildren } from "./modules/modalCardChildren";
import { menuCardGrown } from "./modules/menuCardGrown";
import { menuCardElderly } from "./modules/menuCardElderly";
import { tabsCards } from "./modules/tabsCards";
import { modalCard } from "./modules/modalCard";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
    offerTimer();
    reviewsSlider();
    menuCardChildren();
    modalCardChildren();
    menuCardGrown();
    menuCardElderly();
    tabsCards();
    modalCard();
});