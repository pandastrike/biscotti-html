import {loader, fallback, buffer, include,
  sandbox, engine} from "biscotti"
import {HTML} from "panda-vdom"

import filter from "./filter"

processor = (global = {}) ->

  globals = Object.assign {}, {require}, HTML, globals

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

export {processor as default}
