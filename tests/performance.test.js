const { throttle, debounce } = require('../dist/index')

test('test debounce method', () => {
  // let flag = true
  //
  // debounce(() => {
  //   flag = false
  // }, 3000)
  //
  // // (async () => {
  // //   await new Promise((resolve) => {
  // //     setTimeout(() => {
  // //       flag = false
  // //     })
  // //   })
  // // })()
  //
  // expect(flag).toBeTruthy()
  // setTimeout(() => {
  //   expect(flag).toBeFalsy()
  // },3000)

  document.body.innerHTML =
    '<div id="app">'+
    '</div>'

  let arr = []
  const app = document.getElementById('app')

  app.onclick = debounce(() => {
    arr.push(1)
  }, 800)
  app.click()
  app.click()
  app.click()
  app.click()
  setTimeout(() => {
    expect(arr.length).toBe(4)
  }, 800)
})

// test('test throttle method', () => {
//
// })