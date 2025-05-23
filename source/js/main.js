import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {sliderHero} from './modules/slider';
import {initAccordions} from './modules/accordion/init-accordion';
import {sliderPrograms} from './modules/slider';
import {sliderNews} from './modules/slider';
import {sliderNewsButtons} from './modules/slider';
import {mainMenu} from './modules/main-menu';
import {modalForm} from './modules/modal-form';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    mainMenu();
    modalForm();
    initAccordions();
    sliderHero.init();
    sliderPrograms.init();
    sliderNews.init();
    sliderNewsButtons.init();
  });
});


// <!-- пример использования спрайта >
//     <img src="/__spritemap#sprite-logo-view" alt="Это спрайт">
//     <svg>
//       <use href="/__spritemap#sprite-user"></use>
//     </svg>
//     <!-- примеры требуемых атрибутов data-test="*" >
//     <div data-test="hero">hero</div>
//     <div data-test="about">about</div>
//     <div data-test="programs">programs</div>
//     <div data-test="grant">grant</div>
//     <div data-test="news">news</div>
//     <div data-test="FAQ">FAQ</div>
//     <div data-test="reviews">reviews</div>
//     <div data-test="contacts">contacts</div>
//     <div data-test="form">form</div>
//     <div-- data-test="footer">footer</div-->
