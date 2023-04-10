# gjs-email-editor

基于 [GrapesJS](https://grapesjs.com/) 框架及其插件 [preset-newsletter](https://github.com/GrapesJS/preset-newsletter) 二次开发的邮件编辑器

GrapesJS 是一个开源的 HTML 编辑器，通过低代码的形式，快速创建 HTML / Email 代码来使用，有很不错的扩展性，开发者可以在 GrapesJS 核心功能上自定义自己的编辑器

官方已经提供了不少的插件，详情列表可参考：https://github.com/GrapesJS/grapesjs#plugins 。可以重点关注下面三个插件：

* [grapesjs-preset-webpage](https://github.com/GrapesJS/preset-webpage) - Webpage Builder
* [grapesjs-preset-newsletter](https://github.com/GrapesJS/preset-newsletter) - Newsletter Builder
* [grapesjs-mjml](https://github.com/GrapesJS/mjml) - Newsletter Builder with MJML components

GrapesJS 提供了不少的组件和 API，但是要组件成型的编辑器还是要花不少的功夫的（参考官方教程 [getting-started](https://grapesjs.com/docs/getting-started.html)），上面三个插件类似于 脚手架，帮你完成了初始的编辑器模型。

而这个仓库就是基于 [grapesjs-preset-newsletter](https://github.com/GrapesJS/preset-newsletter) 的基础上，再进行二次开发的。

# 学习建议

官方的学习文档：https://grapesjs.com/docs/ ，以及 API介绍：https://grapesjs.com/docs/api/ ，基本能掌握 GrapesJS 的使用

之后阅读 https://github.com/GrapesJS/preset-newsletter 的源码（也很简单，几百行代码而已），基本就能自己进行二次开发了

# 注意事项

## Ckeditor 插件接入

官网提供了 ckeditor 编辑器的插件：[ckeditor](https://github.com/GrapesJS/ckeditor)

使用的 ckeditor 的 v4 版本，不支持 `import` 的方式，需要在入口 `html` 加入 `ckeditor` 链接，参考如下 https://github.com/cody1991/gjs-email-editor/blob/master/vite.config.js#L7-L14：

```ts
const htmlPluginConfig = htmlConfig({
  headScripts: [
    {
      src: 'https://grapesjs.com/js/ckeditor/ckeditor.js',
    },
    'CKEDITOR.dtd.$editable.td = 1;',
  ],
});
```

## TD 支持编辑

TD 元素本身是不支持编辑的，所以进行了以下的改造，具体代码在：https://github.com/cody1991/gjs-email-editor/blob/master/src/email-editor/index.ts#L55-L83 

GrapesJS 的 issues 也有几个相关的提问，比如 https://github.com/GrapesJS/grapesjs/issues/1262，可做参考

```ts
editor.Components.addType('cell', {
    isComponent(el) {
      if (!(['td', 'th'].indexOf(el.tagName?.toLowerCase()) >= 0)) {
        return false;
      }

      const allChildNodes: Node[] = [];
      function collectChildNodes(arr: Node) {
        const { childNodes } = arr;
        if (childNodes.length > 0) {
          for (let index = 0; index < childNodes.length; index += 1) {
            const arrayChildNode = childNodes[index];
            if (arrayChildNode.childNodes?.length > 0) {
              collectChildNodes(arrayChildNode);
            } else {
              allChildNodes.push(arrayChildNode);
            }
          }
        } else {
          allChildNodes.push(arr);
        }
      }
      collectChildNodes(el);

      return !allChildNodes.every(
        (item) => item.nodeType === 3 || item.nodeName?.toLowerCase() === 'br',
      );
    },
  });
```

这里修改了 `Cell` 的 `isComponent` 定义，循环遍历收集了 `TD` 内部的所有的子节点，最终判断全部都是文本节点或者 `br` 元素的时候，就不认定为 `TD` 元素，而认为是一个文本组件。那么就可以支持编辑了

## 自定义样式

编辑器部分内容是嵌到 `iframe` 内部的，所以在外部我们无法方便的调整样式，可以参考这里的代码 https://github.com/cody1991/gjs-email-editor/blob/master/src/App.jsx#L25-L32：

```js
canvasCss: `
  .gjs-selected {
    outline: 2px solid #14CC97 !important;
  }
  .gjs-dashed *[data-gjs-highlightable] {
    outline: 1px dashed #14CC97;
  }
`,
```

配置 `canvasCss`，加入自定义的 `CSS` 代码，最终会插入到编辑器 `iframe` 的头部 `style` 标签内

GrapesJS 本身可提供配置项挺多的，但是官方文档并没有列出来，只能自己看看源码了，幸运的是他们的注释很详细

## 多语言支持

框架对于多语言的说明并不多，这个也是看了源码之后才了解了如何配置，具体可以参考文件：https://github.com/cody1991/gjs-email-editor/blob/master/src/email-editor/locale/zh.ts

```ts
export default {
  'gjs-email-editor': {
    blocks: {
      names: {
        placeholder: '占位符',
        wrapper: '背景板',
        '1 Section': '排版',
        '1/2 Section': '1/2排版',
        '1/3 Section': '1/3排版',
        '3/7 Section': '3/7排版',
        Button: '按钮',
        Divider: '分隔线',
        Text: '文字',
        'Text Section': '文字块',
        Image: '图片',
        Quote: '引用',
        Link: '链接',
        'Link Block': '链接块',
        'Grid Items': '网格项',
        'List Items': '列表项',
      },
    },
  },
  styleManager: {
    properties: {
      margin: '外边距',
      'margin-top-sub': '上',
      'margin-right-sub': '右',
      'margin-bottom-sub': '下',
      'margin-left-sub': '左',

      padding: '内边距',
      'padding-top-sub': '上',
      'padding-right-sub': '右',
      'padding-bottom-sub': '下',
      'padding-left-sub': '左',

      'text-shadow-h': 'X',
      'text-shadow-v': 'Y',

      'text-shadow-blur': '模糊半径',
      'text-shadow-color': '颜色',

      'box-shadow-h': 'X',
      'box-shadow-v': 'Y',
      'box-shadow-blur': '模糊半径',
      'box-shadow-spread': '扩展半径',
      'box-shadow-color': '颜色',
      'box-shadow-type': '类型',

      'border-width-sub': '宽度',
      'border-style-sub': '样式',
      'border-color-sub': '颜色',
      'border-top-left-radius-sub': '左上',
      'border-top-right-radius-sub': '右上',
      'border-bottom-right-radius-sub': '右下',
      'border-bottom-left-radius-sub': '左下',

      'transform-rotate-x': 'Rotate X',
      'transform-rotate-y': 'Rotate Y',
      'transform-rotate-z': 'Rotate Z',
      'transform-scale-x': 'Scale X',
      'transform-scale-y': 'Scale Y',
      'transform-scale-z': 'Scale Z',

      'transition-property-sub': '属性',
      'transition-duration-sub': '间隔',
      'transition-timing-function-sub': '时间',

      'background-image-sub': '图片',
      'background-repeat-sub': '重复',
      'background-position-sub': '位置',
      'background-attachment-sub': '附件',
      'background-size-sub': '尺寸',

      'width-sub': '宽度',
      'height-sub': '高度',
      'max-width-sub': '最大宽度',
      'min-height-sub': '最小高度',
      width: '宽度',
      height: '高度',
      'max-width': '最大宽度',
      'min-height': '最小高度',

      'font-family': '字型',
      'font-size': '字体大小',
      'font-weight': '字体粗细',
      color: '颜色',
      'letter-spacing': '字体间隙',
      'line-height': '行高',
      'text-align': '文字排列',
      'text-decoration': '文字装饰',
      'font-style': '文字样式',
      'vertical-align': '垂直对齐方式',
      'text-shadow': '文字阴影',

      background: '背景',

      'background-color': '背景颜色',
      'border-collapse': '边框折叠',
      'border-radius': '边框圆角',
      border: '边框',
    },
  },
};
```

`styleManager` 中有我们常用需要配置的一些属性，需要给他们配置多语言，比如给 `padding` 配置，除了外围的 `padding` 需要配置，上下左右属性也要有对应的文案配置，`key` 值最后需要加上 `-sub`

```
padding: '内边距',
'padding-top-sub': '上',
'padding-right-sub': '右',
'padding-bottom-sub': '下',
'padding-left-sub': '左',
```

![image](https://oit-portal-singapore-1300342648.file.myqcloud.com/oit-docs/20230410111624_ece1daefe6a4fa49c29b1998ab64c761.png?imageView2/format/jpg)

## 颜色选择器错位问题

Color picker displays wrong position

参考：https://github.com/GrapesJS/grapesjs/issues/596#issuecomment-415044955

项目中也加入了下面的配置：https://github.com/cody1991/gjs-email-editor/blob/master/src/App.jsx#L33-L36

```ts
colorPicker: {
  appendTo: 'parent',
  offset: { top: 26, left: -166 },
},
```

## 参考线错位问题

BUG: Block Highlight Display Bug

参考：https://github.com/GrapesJS/grapesjs/issues/3063

如果编辑器所在的页面超过一屏，滚动的时候可能会导致参考线错位，我们可以指定 `listenToEl` 属性，那么当指定的元素发生滚动的时候，画布会整体 `resize`，纠正 参考线错位 错位问题

## 自定义上传

这个也是直接看源码知道了使用方法的：https://github.com/GrapesJS/grapesjs/blob/6184b6c86c92af2cc30fe79665351747b346bfa2/src/asset_manager/config/config.ts

```ts
assetManager: {
  uploadFile: (param: any) => {
    const files = param.dataTransfer
      ? param.dataTransfer.files
      : param.target.files;
    const [file] = files;
    // upload file
    const cos = new Cosapi({
      file,
      onProgress: () => {
        console.log(1);
      },
    });
    return cos.uploadFile((err: any, res: any) => {
      if (err) {
        // handle error
        return;
      }
      if (res) {
        // res is a url
        curEditor.AssetManager.add([res]);
      }
    });
  },
},
```