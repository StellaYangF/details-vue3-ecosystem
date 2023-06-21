import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 参数一，划分状态空间，id必须唯一，否则会覆盖
// 参数二，可以时是optionsAPI，也可以是 compositionAPI
// ssr 要求，state都是函数
export const useCounterStore = defineStore('counter', {
  state() {
    return { count: 0 }
  },
  getters: { // computed
    double(): number {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})


// createPinia()
// defineStore
