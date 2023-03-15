import './assets/custom.css';
import loadCommands from './commands';
import loadBlocks from './blocks';
import loadPanels from './panels';
import loadStyles from './styles';
import type grapesjs from 'grapesjs';

import { PluginOptions, RequiredPluginOptions } from './types';
import defaultOpts from './defaults';

const plugin: grapesjs.Plugin<PluginOptions> = (
  editor,
  opts: Partial<PluginOptions> = {},
) => {
  let config = editor.getConfig();

  const i18n = editor.I18n;

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

  loadCommands(editor, options);
  loadBlocks(editor, options);
  loadPanels(editor, options);

  loadStyles(editor, options);

  editor.Components.addType('image', {
    model: {
      defaults: {
        traits: ['href', 'rel', 'alt', 'title'],
      },
    },
  });
};

export default plugin;
