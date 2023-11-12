import 'bootstrap';
// import 'lity';
// import 'aos';
// import 'rellax';

// Utils
// import './utils/jquery-touch-reset';
import { ready } from './utils/utils';
    
// Components
import { rwdTables, iframeCms } from './components/cms';
// import { accessibility } from './components/accessibility';
// import { datepicker } from './components/datepicker';
// import { inputFile } from './components/input-file';
// import { select } from './components/select';
// import { tooltip, altTooltip } from './components/tooltip';

// CMS Layout Components
// import { accordion } from './components/accordion';
// import { backTop } from './components/backtop';
// import { fullCarousel, defaultCarousel, paginationCarousel } from'./components/carousels';
// import { footerAccordion } from './components/footer';
// import { headerFix, menuMobileBtn, menuMobile } from './components/header';
// import { lazyloadVideo } from'./components/lazyload-video';
// import { marquee } from'./components/marquee';
// import { search } from './components/search';
// import { videoPlaceholder } from './components/video-placeholder';

// Pages
import { home } from './pages/home';

// Init
ready(() => {

    // Components
    rwdTables();
    iframeCms();
    // accessibility();
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
    // footerAccordion();
    // headerFix();
    // menuMobileBtn();
    // menuMobile();
    // lazyloadVideo();
    // marquee();
    // backTop();
    // search();
    // videoPlaceholder();

    // Pages
    home();
});