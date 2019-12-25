import wait from './index'

(async function () {
  // 测试监听的是对象属性
  const obj: { prop?: string } = {}

  setTimeout(() => {
    obj.prop = 'aaa'
  }, 2000)

  const wait_prop = await wait(() => obj.prop)
  console.log(wait_prop) // 2秒之后输出'aaa'

  // 测试监听值是普通值
  let n: number

  setTimeout(() => {
    n = 0
  }, 2000)

  const wait_n = await wait(() => n)
  console.log(wait_n) // 2秒之后输出 0

  let s: string

  setTimeout(() => {
    s = 'ludongmin'
  }, 2000)

  const wait_s = await wait(() => s)
  console.log(wait_s) // 2秒之后输出 'ludongmin'

})()

