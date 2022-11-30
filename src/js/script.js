import { modalCatalog } from "./modules/modalCatalog";
import { modalBuyer } from "./modules/modalBuyer";
import { offerSlider } from "./modules/offerSlider";
import { offerTimer } from "./modules/offerTimer";
import { reviewsSlider } from "./modules/reviewsSlider";
import { menuCardChildren } from "./modules/menuCardChildren";
import { modalCardChildren } from "./modules/modalCardChildren";
import { menuCardGrown } from "./modules/menuCardGrown";
import { modalCardGrown } from "./modules/modalCardGrown";
import { menuCardElderly } from "./modules/menuCardElderly";
import { modalCardElderly } from "./modules/modalCardElderly";
import { tabsCards } from "./modules/tabsCards";
import { modalComparison } from "./modules/modalComparison";
import { modalFavourites} from "./modules/modalFavourites";
import { modalBasket } from "./modules/modalBasket";

window.addEventListener('DOMContentLoaded', () => {
    modalCatalog();
    modalBuyer();
    offerSlider();
    offerTimer();
    reviewsSlider();
    modalComparison();
    modalFavourites();
    modalBasket();
    menuCardChildren();
    modalCardChildren();
    menuCardGrown();
    modalCardGrown();
    menuCardElderly();
    modalCardElderly();
    tabsCards();
    
});