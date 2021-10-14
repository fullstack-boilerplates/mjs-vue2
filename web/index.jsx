const { useEffect, useState } = require("react")
const { render } = require("react-dom")
const { hello } = require("../apis/hello")

const Index = () => {
  let [msg, setMsg] = useState('...loading')
  useEffect(() => {
    (async () => setMsg(await hello('world')))()
  })
  return <div>{msg}</div>
}

render(<Index />, document.getElementById('react-root'))


