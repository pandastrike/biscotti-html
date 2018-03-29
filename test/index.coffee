import assert from "assert"
import {resolve} from "path"
import {print, test} from "amen"
import processor from "../src"
import {HTML} from "panda-vdom"

do ->

  print await test "biscotti-html", ->
    render = do processor
    documents = await render path: resolve "./test/files/index.vhtml"
    assert.equal documents.length, 1
    result = HTML.render documents[0]
    assert.equal result,
      "<html><body><h1>Hello, World!</h1></body></html>",
