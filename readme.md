How to replicate:

`yarn install && yarn watch`

Error recieved:

```yarn run v1.5.1
$ bili --plugin eslint,vue --format es-min --watch
🚨  Multiple files are emitting to the same path.
Please check if  is missing in filename option.
📖  https://egoist.moe/bili/#/api?id=filename
⏳  Bundling 3 files: src/Search/Search.vue.0.vue.component.scss

/Users/Gustav/bili-error/src/Search/Search.vue.0.vue.component.scss
  97:1  error  Parsing error: Unexpected token .

✖ 1 problem (1 error, 0 warnings)
``` 