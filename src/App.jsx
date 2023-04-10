import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import FileSaver from 'file-saver';
import plugin from './email-editor';
// import plugin, { zh as pluginZh, en as pluginEn } from './mjml-editor';
import zh from 'grapesjs/locale/zh';
import en from 'grapesjs/locale/en';

import './App.css'

function App() {
  let editor;
  useEffect(() => {
    editor = grapesJS.init({
      i18n: {
        locale: 'zh',
        localeFallback: 'en',
        detectLocale: false,
        messages: {
          zh, en
        }
      },
      canvasCss: `
        .gjs-selected {
          outline: 2px solid #14CC97 !important;
        }
        .gjs-dashed *[data-gjs-highlightable] {
          outline: 1px dashed #14CC97;
        }
      `,
      colorPicker: {
        appendTo: 'parent',
        offset: { top: 26, left: -166 },
      },
      assetManager: {
        uploadFile: (ev) => {
          const files = ev.dataTransfer ? ev.dataTransfer.files : ev.target.files;
          // ...send somewhere
          // 文件上传
          console.log(files)
        }
      },
      fromElement: true,
      container: '#gjs',
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: {
          // i18n: {
          //   zh: { ...pluginZh },
          //   en: { ...pluginEn }
          // }
          updateStyleManager: false
        },
      },
    });

    editor.onReady(() => {
      editor.getWrapper().set('stylable', true)
      editor.DomComponents.clear();
      editor.setComponents(
        localStorage.getItem('gjs-email-editor') || '<mjml><mj-body><mj-section><mj-column><mj-text>Content 1</mj-text></mj-column></mj-section></mj-body></mjml>',
      );


      // The upload is started
      editor.on('asset:upload:start', () => {
        console.log('asset:upload:start')
      });

      // The upload is ended (completed or not)
      editor.on('asset:upload:end', () => {
        console.log('asset:upload:end');
      })

      // Error handling
      editor.on('asset:upload:error', (err) => {
        console.log('asset:upload:error', err)
      });

      // Do something on response
      editor.on('asset:upload:response', (response) => {
        console.log('asset:upload:response', response)
      });

      editor.Components.addType('image', {
        model: {
          defaults: {
            traits: [{ name: 'alt' }, { name: 'src' }, { name: 'id' }]
          }
        }
      });


    })
  }, [])
  return <div>
    <div id="gjs" >
    </div>

    <button onClick={() => {
      localStorage.setItem('gjs-email-editor', editor.runCommand('gjs-get-inlined-html'))
      const blob = new Blob([editor.runCommand('gjs-get-inlined-html')], { type: "text/html;charset=utf-8" });
      FileSaver.saveAs(blob, "hello world.html");
    }}>
      Click
    </button>

    <button onClick={() => {
      localStorage.setItem('gjs-email-editor', editor.runCommand('gjs-get-inlined-html'))
    }}>
      Save
    </button>
  </div>
}

export default App
