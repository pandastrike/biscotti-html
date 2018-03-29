# Biscotti HTML

CoffeeScript VDOM templates.

```coffee
$$ html [
  body [ h1 "Hello, World!" ]
]
```


# Install

`npm i -s biscotti-html`

# Usage

```coffee
import processor from "biscotti-html"
render = do processor
render  path: "./templates/index.vhtml"
```
