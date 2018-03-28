import {loader, fallback, buffer, include,
  filters, sandbox, engine} from "biscotti"
import {HTML} from "panda-vdom"

render = do ->

  globals = Object.assign {}, {require}, HTML

  engine [
    sandbox: sandbox globals
    loader
      coffeescript:
        index: true
        extensions: [ ".vhtml" ]
    do fallback
    include isBuffered: false
    buffer
    filter
  ]

export {render as default}
