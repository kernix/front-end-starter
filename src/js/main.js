import 'bootstrap';
// import './utils/lity.js';
// import 'aos';
// import 'rellax';

// Utils
// import './utils/jquery-touch-reset';
import { ready } from './utils/utils';
    
// Components
import { accessibility } from './components/accessibility';
import { iframeCms, rwdTables } from './components/cms';
// import { datepicker } from './components/datepicker';
// import { inputFile } from './components/input-file';
// import { select } from './components/select';
// import { tooltip, altTooltip } from './components/tooltip';

// CMS Layout Components
// import { accordion } from './components/accordion';
// import { backTop } from './components/backtop';
// import { fullCarousel, defaultCarousel, paginationCarousel, logoCarousel } from'./components/carousels';
// import { footerAccordion } from './components/footer';
// import { headerFix, menuMobileBtn, menuMobile, menuAccessibility } from './components/header';
// import { lazyloadVideo } from'./components/lazyload-video';
// import { marquee } from'./components/marquee';
// import { search } from './components/search';
// import { playPauseVideoBg, videoPlaceholder } from './components/video-placeholder';

// Pages
import { home } from './pages/home';

// Init
ready(() => {

    // Components
    rwdTables();
    iframeCms();
    accessibility();
    // datepicker();
    // inputFile();
    // select();
    // tooltip();
    // altTooltip();

    // Layout
    // accordion();
    // fullCarousel();
    // defaultCarousel();
    // paginationCarousel();
    // logoCarousel();
    // footerAccordion();
    // headerFix();
    // menuMobileBtn();
    // menuMobile();
    // menuAccessibility();
    // lazyloadVideo();
    // marquee();
    // backTop();
    // search();
    // videoPlaceholder();
    // playPauseVideoBg();

    // Pages
    home();
});