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
const sections = document.querySelectorAll('main > section');

window.addEventListener('scroll', () => {
    scrollHandler();
    slowScrollHandler();
});

const scrollHandler = _.throttle(() =>
    window.pageYOffset >= (headerEl.scrollHeight-44) ? 
        headerEl.classList.add('sticky'):headerEl.classList.remove('sticky'), 100);

const slowScrollHandler = _.throttle(() => {
    const h = window.pageYOffset+document.body.offsetHeight;
    const half = document.body.scrollHeight/1.5;
    h >= half ?
    toTopEl.classList.add('visible'):toTopEl.classList.remove('visible');

    document.querySelectorAll("[data-id] > a").forEach(el => el.classList.remove('active'));

    sections.forEach(el => {
        if(isWithinViewport(el.getBoundingClientRect())) {
            const exists = document.querySelector("[data-id="+CSS.escape(el.id)+"] > a");
            if(exists != null)
                exists.classList.add('active');
        }
    });
}, 400);

const isWithinViewport = rect => {
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return ((rect.top + (rect.height / 4)) <= windowHeight) && ((rect.top + (rect.height / 4)) >= -(rect.height / 4));
}


document.addEventListener("DOMContentLoaded", () => {
    sideNavContainerEl.style.display = 'flex';
    new LazyLoadImages();
    scrollHandler();
});