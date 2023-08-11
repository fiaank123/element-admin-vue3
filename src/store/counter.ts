import { defineStore } from "pinia";
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// 这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
// defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
export const useCounterStore = defineStore("counter", () => {
  // ref变量 → state 属性
  const count = ref(0);
  // computed计算属性 → getters
  // 当参数为函数时，计算属性double的值随着num.count的值的变化而变化，但是计算属性的值不可直接修改；当参数为对象时，计算属性的值可读可写。
  const double = computed(() => {
    return count.value * 2;

  });
  // function函数 → actions
  function increment() {
    count.value++;
  }

  return { count, double, increment };
});