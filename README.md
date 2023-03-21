# check-it-type

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/asura-eye.svg?style=flat)](https://www.npmjs.com/package/check-it-type)

<!-- - [Api docs](https://guanruihua.github.io/OpenSource/abandonjs/index.html#/) -->
- 类型判断方法的封装
- 日常开发太少用到的类型, 不添加

## 使用

```shell
npm install check-it-type -D
```

```js
import { type, isFunction } from 'check-it-type'
```

## 参考

> - <https://github.com/nodejs/node/blob/v18.0.0/lib/util.js>

## 日志

### 0.1.6

- 移除`isSameDate`,  转移至 `abandonjs` 方法中
