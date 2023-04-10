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

