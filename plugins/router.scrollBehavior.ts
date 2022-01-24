import { defineNuxtPlugin } from '#app'

// #TODO: check this behavior
const wait = (timeToDelay: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay))

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, _from, savedPosition) => {
    if (to.hash) {
      await wait(200) // wait to have hash element rendered in page
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth',
      }
    }
    // if (savedPosition) {
    //   await wait(200)
    //   return { left: savedPosition.x, top: savedPosition.y, behavior: 'smooth' }
    // }

    return {
      left: 0,
      top: 0,
      behavior: 'smooth',
    }
  }
})
