import './assets/custom.css';
import loadCommands from './commands';
import loadBlocks from './blocks';
import loadPanels from './panels';
import loadStyles from './styles';
import type grapesjs from 'grapesjs';
import en from './locale/en';
import zh from './locale/zh';

import { PluginOptions, RequiredPluginOptions } from './types';
import defaultOpts from './defaults';

const plugin: grapesjs.Plugin<PluginOptions> = (
  editor,
  opts: Partial<PluginOptions> = {},
) => {
  let config = editor.getConfig();

  const options: RequiredPluginOptions = {
    ...defaultOpts,
    ...opts,
  };

  // Change some config
  config.devicePreviewMode = true;

  if (options.useCustomTheme && typeof window !== 'undefined') {
    const prefix = 'gjs-';
    let cssString = '';

    [
      ['one', options.primaryColor],
      ['two', options.secondaryColor],
      ['three', options.tertiaryColor],
      ['four', options.quaternaryColor],
    ].forEach(([cnum, ccol]) => {
      cssString += `
        .${prefix}${cnum}-bg {
          background-color: ${ccol};
        }
        .${prefix}${cnum}-color {
          color: ${ccol};
        }
        .${prefix}${cnum}-color-h:hover {
          color: ${ccol};
        }
      `;
    });

    const style = document.createElement('style');
    style.innerText = cssString;
    document.head.appendChild(style);
  }

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

  editor.I18n.addMessages({
    en,
    zh,
    ...opts.i18n,
  });

  loadCommands(editor, options);
  loadBlocks(editor, options);
  loadPanels(editor, options);

  loadStyles(editor, options);
};

export default plugin;
