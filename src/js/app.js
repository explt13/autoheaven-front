import $ from 'jquery';
window.$ = $;
import { input } from './modules/input.js';
import { search } from './modules/search.js';
import { burgerMenu } from './modules/burgerMenu.js';
import { products } from './modules/products.js';
import { ibg } from './modules/ibg.js';
import { showMore } from './modules/showContent.js';
import { header } from './modules/header.js';
import { showList } from './modules/showList.js';

import './modules/slickSlider.js';
import './modules/swiper.js';


$(document).ready(function(){
    input();
    search();
    burgerMenu();
    products();
    ibg();
    showMore();
    header();
    showList();

})