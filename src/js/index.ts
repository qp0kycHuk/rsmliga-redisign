import showPass from './show-pass'
import theme from './theme'
import fancybox from './fancybox'
import phonemask from './phonemask/phonemask'
import scrollTo from './scrollTo'
import tab from 'npm-kit-tab'
import toggle from 'npm-kit-toggle'
import ripple from '@qpokychuk/ripple'
import swiper from './swiper'
import ymaps from './ymaps'
import animations from './animations'

import '../scss/index.scss'

window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
  showPass.init()
  scrollTo.init()
  tab.init()
  toggle.init()
  ripple.init()
  theme.init()
  fancybox.init()
  phonemask.init('[type="tel"]')

  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn-text')

  swiper.init()
  ymaps.init()
  animations.init()

  window.addEventListener('scroll', scrollHandler)
  scrollHandler()
}

let nav: Element | null
let header: Element | null

function scrollHandler() {
  nav = nav || document.querySelector('.nav')
  header = header || document.querySelector('.header')

  nav?.classList.toggle('nav-sticky', nav?.getBoundingClientRect().top <= 1)
  header?.classList.toggle('header-sticky', header?.getBoundingClientRect().top <= 1)
}

document.addEventListener('toggleopen', menuOpenHandler)
document.addEventListener('toggleclose', menuCloseHandler)

function menuOpenHandler(event: any) {
  if (event.detail.target.id == 'menu') {
    document.body.classList.add('menu-opened')
  }
}

function menuCloseHandler(event: any) {
  if (event.detail.target.id == 'menu') {
    document.body.classList.remove('menu-opened')
  }
}
