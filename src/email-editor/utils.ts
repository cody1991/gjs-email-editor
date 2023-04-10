import type grapesjs from 'grapesjs';
export const getI18nLabelFactory = (
  editor: grapesjs.Editor,
  belongs: string,
) => {
  return (label: string) => {
    console.log(`gjs-email-editor.${belongs}.${label}`);
    return editor.I18n.t(`gjs-email-editor.${belongs}.${label}`);
  };
};
