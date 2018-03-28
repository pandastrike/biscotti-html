import assert from "assert"
import {print, test} from "amen"
import render from "../src"
import {HTML} from "panda-vdom"

do ->

  print await test "biscotti-html", ->
    documents = await render path: resolve "./test/files/vdom/index.vhtml"
    assert.equal documents.length, 1
    result = HTML.render documents[0]
    assert.equal result,
      "<html><body><h1>Hello, World!</h1></body></html>",
