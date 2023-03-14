import React, { useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import FileSaver from 'file-saver';
// import plugin from 'gjs-email-editor';
import plugin, { zh as pluginZh, en as pluginEn } from './mjml-editor';
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
      fromElement: true,
      container: '#gjs',
      plugins: [plugin,],
      pluginsOpts: {
        [plugin]: {
          i18n: {
            zh: { ...pluginZh },
            en: { ...pluginEn }
          }
        },
      },
    });

    editor.onReady(() => {
      editor.DomComponents.clear();
      editor.setComponents(
        localStorage.getItem('gjs-email-editor') || '<mjml><mj-body><mj-section><mj-column><mj-text>Content 1</mj-text></mj-column></mj-section></mj-body></mjml>',
      );
    })
  }, [])
  return <div>
    <div id="gjs" >
    </div>

    <button onClick={() => {
      localStorage.setItem('gjs-email-editor', editor.runCommand('mjml-code'))
      const blob = new Blob([editor.runCommand('mjml-code-to-html').html], { type: "text/html;charset=utf-8" });
      FileSaver.saveAs(blob, "hello world.html");
    }}>
      Click
    </button>

    <button onClick={() => {
      localStorage.setItem('gjs-email-editor', editor.runCommand('mjml-code'))
    }}>
      Save
    </button>
  </div>
}

export default App
