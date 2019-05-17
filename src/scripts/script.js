import LazyLoadImages from './lazyload';
const _ = {
    throttle: require('lodash.throttle')
};

document.querySelectorAll('a[href^="#"]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.querySelector(el.getAttribute('href')).offsetTop-186
    });
}));
    
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
  
    while (length--) {
      method = methods[length];
  
      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }
  }());


const showButtonEl = document.querySelector('.js-menu-show');
const hideButtonEl = document.querySelector('.js-menu-hide');
const sideNavEl = document.querySelector('aside');
const sideNavContainerEl = document.querySelector('.side-nav-container');

showButtonEl.addEventListener('click', () => sideNavEl.classList.add('side-nav-visible'));
hideButtonEl.addEventListener('click', () => sideNavEl.classList.remove('side-nav-visible'));
sideNavEl.addEventListener('click', e => e.target==sideNavContainerEl?null:sideNavEl.classList.remove('side-nav-visible'));

const headerEl = document.querySelector('.header-container');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => scrollHandler(), 250));

const scrollHandler = () => {
    console.log('poopa');
    const headerOffset = headerEl.scrollHeight-44;
    const h = window.pageYOffset+document.body.offsetHeight;
    const half = document.body.scrollHeight/1.5;

    window.pageYOffset >= headerOffset ? 
        headerEl.classList.add('sticky'):headerEl.classList.remove('sticky');

    h >= half ?
        toTopEl.classList.add('visible'):toTopEl.classList.remove('visible');
}

document.addEventListener("DOMContentLoaded", () => {
    sideNavContainerEl.style.display = 'flex';
    new LazyLoadImages();
    scrollHandler();
});