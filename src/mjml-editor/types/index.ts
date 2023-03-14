export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default (all)
   */
  blocks?: string[];

  /**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => (blockId === 'mj-hero' ? { attributes: {...} } : {})
   */
  block?: (blockId: string) => {};

  /**
   * Code viewer theme.
   * @default 'hopscotch'
   */
  codeViewerTheme?: string;

  /**
   * Placeholder MJML template for the import modal
   * @default ''
   */
  importPlaceholder?: string;

  /**
   * Image placeholder source for mj-image block
   * @default ''
   */
  imagePlaceholderSrc?: string;

  /**
   * Overwrite default export command
   * @default true
   */
  overwriteExport?: boolean;

  /**
   * String before the MJML in export code
   * @default ''
   */
  preMjml?: string;

  /**
   * String after the MJML in export code
   * @default ''
   */
  postMjml?: string;

  /**
   * Clean all previous blocks if true
   * @default true
   */
  resetBlocks?: boolean;

  /**
   * Reset the Style Manager and add new properties for MJML
   * @default true
   */
  resetStyleManager?: boolean;

  /**
   * Clean all previous devices and set a new one for mobile
   * @default true
   */
  resetDevices?: boolean;

  /**
   * Hide the default selector manager
   * @default true
   */
  hideSelector?: boolean;

  /**
   * Experimental: use XML parser instead of HTML.
   * This should allow importing void MJML elements (without closing tags) like <mj-image/>.
   * @default false
   * @experimental
   */
  useXmlParser?: boolean;

  /**
   * Column padding (this way it's easier to select columns)
   * @default '10px 0'
   */
  columnsPadding?: string;

  /**
   * I18n object containing languages, [more info](https://grapesjs.com/docs/modules/I18n.html#configuration).
   * @default {}
   */
  i18n?: Record<string, any>;

  /**
   * Custom fonts on exported HTML header, [more info](https://github.com/mjmlio/mjml#inside-nodejs).
   * @default {}
   * @example
   * {
   *   Montserrat: 'https://fonts.googleapis.com/css?family=Montserrat',
   *   'Open Sans': 'https://fonts.googleapis.com/css?family=Open+Sans'
   * }
   */
  fonts?: Record<string, any>;

  /**
   * Load custom preset theme.
   * @default true
   */
  useCustomTheme?: boolean;

  /**
   * primaryColor
   * @default #373d49
   */
  primaryColor?: string;

  /**
   * secondaryColor
   * @default #dae5e6
   */
  secondaryColor?: string;

  /**
   * tertiaryColor
   * @default #4c9790
   */
  tertiaryColor?: string;

  /**
   * quaternaryColor
   * @default #35d7bb
   */
  quaternaryColor?: string;
};

export type RequiredPluginOptions = Required<PluginOptions>;
