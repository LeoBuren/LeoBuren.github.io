import LazyLoadImages from './lazyload';

/*$(document).on('click', 'a[href^="#"]', function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-48
    }, 350)
});*/

document.querySelectorAll('a[href^="#"]').forEach(el => console.log(el));
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
let headerOffset = headerEl.scrollHeight-44;

window.addEventListener('scroll', () => window.pageYOffset >= headerOffset ? 
    headerEl.classList.add('sticky'):headerEl.classList.remove('sticky'), 
    {
        capture: true,
        passive: true
    }
);

document.addEventListener("DOMContentLoaded", () => {
    sideNavContainerEl.style.display = 'flex';
    new LazyLoadImages();
});