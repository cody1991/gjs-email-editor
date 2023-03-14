import type grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import loadCommands from './commands';
import loadPanels from './panels';
import loadStyle from './style';
import en from './locale/en';
import zh from './locale/zh';
export { en, zh };

import { PluginOptions, RequiredPluginOptions } from './types';
import defaultOpts from './defaults';
const plugin: grapesjs.Plugin<PluginOptions> = (editor, opt = {}) => {
  const opts: RequiredPluginOptions = {
    ...defaultOpts,
    ...opt,
  };
  const config = editor.getConfig();

  // I need to prevent forced class creation as classes aren't working
  // at the moment
  // @ts-ignore
  config.forceClass = false;

  // Don't need to create css rules with media
  // @ts-ignore
  config.devicePreviewMode = true;

  // Doesn't work without inline styling
  // @ts-ignore
  config.avoidInlineStyle = false;

  // Hide default selector manager
  if (opts.hideSelector) {
    const smConfig = editor.SelectorManager.getConfig();
    // @ts-ignore
    smConfig.custom = true;
  }

  // Use XML Parser
  if (opts.useXmlParser) {
    editor.Parser.getConfig().optionsHtml.htmlType = 'text/xml';
  }

  if (opts.useCustomTheme && typeof window !== 'undefined') {
    const prefix = 'gjs-';
    let cssString = '';

    [
      ['one', opts.primaryColor],
      ['two', opts.secondaryColor],
      ['three', opts.tertiaryColor],
      ['four', opts.quaternaryColor],
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

  // @ts-ignore Load i18n files
  editor.I18n.addMessages({
    en,
    zh,
    ...opts.i18n,
  });

  [loadBlocks, loadComponents, loadCommands, loadPanels, loadStyle].forEach(
    (module) => module(editor, opts),
  );
};

export default plugin;
