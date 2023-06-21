import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// tip
// vue3更简单，无论性能还是编程方式

// 核心方法：
// createPinia()
// defineStore


// 参数一，划分状态空间，id必须唯一，否则会覆盖
// 参数二，可以时是optionsAPI，也可以是 compositionAPI
// ssr 要求，state都是函数

// 在 effect/组件中，取值时会收集依赖。
// 因此可以直接在组件中调用 store.count ++

// vue3 的实现原理就是，调用了 reactivity({ count: 0 })，配合 vue3使用
// vue2 的实现原理，就是 vm = new Vue({ data: { count: 0 } })