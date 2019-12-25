# Wait to generate 等待值的生成

等待值的生成，比如等待dom的生成之后取到值，再执行后续代码。
Wait for the generation of values, such as waiting for dom generation to fetch the values before executing the following code.

## Getting Started 使用指南

适用于浏览器和nodejs等。

### Installation 安装

通过一步步实例告诉你如何安装部署、怎样运行使用。

npm install:

```sh
npm i install --save
```

use require 使用requie:

```sh
const wait = require('wait-to-generate').default
```

use import 使用import:

```sh
import wait from 'wait-to-generate'
```

### Usage example 使用示例

use promise 使用promise:

```
const wait = require('wait-to-generate').default

let aaa;

setTimeout(() => {
  aaa = 'aaa'
}, 2000)

wait(() => aaa).then(v => {
  console.log(v) // 'aaa'
})
```

use async await 使用async await:

```
import wait from 'wait-to-generate'

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
```

## Authors 关于作者

* **LuDongmin** 
