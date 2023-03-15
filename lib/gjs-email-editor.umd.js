(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".gjs-pn-views-container,.gjs-pn-views{width:20%}.gjs-pn-commands{width:80%}.gjs-pn-options{right:20%}.gjs-cv-canvas{width:80%}.gjs-editor-cont input::-webkit-input-placeholder{color:#ccc}.gjs-editor-cont input::-moz-input-placeholder{color:#ccc}.gjs-editor-cont input::-ms-input-placeholder{color:#ccc}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();(function(m,u){typeof exports=="object"&&typeof module<"u"?module.exports=u(require("juice")):typeof define=="function"&&define.amd?define(["juice"],u):(m=typeof globalThis<"u"?globalThis:m||self,m["gjs-email-editor"]=u(m.juice))})(this,function(m){"use strict";const u="",y=(r,a)=>{const i=r.Commands,t=r.getConfig().stylePrefix;i.add(a.cmdOpenImport,{createCodeViewer(){return r.CodeManager.createViewer({codeName:"htmlmixed",theme:a.codeViewerTheme,readOnly:!1})},createCodeEditor(){const e=document.createElement("div"),o=this.createCodeViewer();return e.style.flex="1 0 auto",e.style.boxSizing="border-box",e.className=`${t}import-code`,e.appendChild(o.getElement()),{codeEditor:o,el:e}},getCodeContainer(){let e=this.containerEl;return e||(e=document.createElement("div"),e.className=`${t}import-container`,e.style.display="flex",e.style.gap="5px",e.style.flexDirection="column",e.style.justifyContent="space-between",this.containerEl=e),e},run(e){const o=this.getCodeContainer();let{codeEditorHtml:l}=this;if(!l){const n=this.createCodeEditor(),s=document.createElement("button");if(l=n.codeEditor,this.codeEditorHtml=l,a.modalLabelImport){let d=document.createElement("div");d.className=`${t}import-label`,d.innerHTML=a.modalLabelImport,o.appendChild(d)}s.innerHTML=a.modalBtnImport,s.className=`${t}btn-prim ${t}btn-import`,s.style.alignSelf="flex-start",s.onclick=()=>{const d=n.codeEditor.editor.getValue();e.Components.clear(),e.Css.clear(),e.setComponents(d),e.Modal.close()},o.appendChild(n.el),o.appendChild(s)}e.Modal.open({title:a.modalTitleImport,content:o}),l&&(l.setContent(a.importPlaceholder||""),l.editor.refresh())}})},L=(r,a)=>{const i=r.Commands,t=r.getConfig().stylePrefix;i.add(a.cmdInlineHtml,{run(e,o,l={}){const n=e.getHtml()+`<style>${e.getCss()}</style>`;return m(n,{...l.juiceOpts,...l})}}),i.add("export-template",{createCodeViewer(){return r.CodeManager.createViewer({codeName:"htmlmixed",theme:a.codeViewerTheme})},createCodeEditor(){const e=document.createElement("div"),o=this.createCodeViewer();return e.style.flex="1 0 auto",e.style.boxSizing="border-box",e.className=`${t}export-code`,e.appendChild(o.getElement()),{codeEditor:o,el:e}},getCodeContainer(){let e=this.containerEl;return e||(e=document.createElement("div"),e.className=`${t}export-container`,e.style.display="flex",e.style.gap="5px",e.style.flexDirection="column",e.style.justifyContent="space-between",this.containerEl=e),e},run(e){let{codeEditorHtml:o}=this;const l=this.getCodeContainer();if(!o){const n=this.createCodeEditor();if(o=n.codeEditor,this.codeEditorHtml=o,a.modalLabelExport){let s=document.createElement("div");s.className=`${t}export-label`,s.innerHTML=a.modalLabelExport,l.appendChild(s)}l.appendChild(n.el)}if(e.Modal.open({title:a.modalTitleExport,content:l}),o){const n=`${e.getHtml()}<style>${e.getCss()}</style>`;o.setContent(a.inlineCss?m(n,a.juiceOpts):n),o.editor.refresh()}}})},x=(r,a)=>r.Commands.add(a.cmdTglImages,{run(i){const t=i.getComponents();this.toggleImages(t)},stop(i){const t=i.getComponents();this.toggleImages(t,!0)},toggleImages(i,t=!1){const e="##";i.forEach(o=>{if(o.get("type")==="image"){const l=o.get("src");t?l===e&&o.set("src",o.get("src_bkp")):l!==e&&(o.set("src_bkp",o.get("src")),o.set("src",e))}this.toggleImages(o.get("components"),t)})}}),H="set-device-desktop",h="set-device-tablet",C="set-device-mobile",v="canvas-clear",M=(r,a)=>{const{Commands:i}=r,t=a.textCleanCanvas;y(r,a),L(r,a),x(r,a),i.add(H,{run:e=>e.setDevice("Desktop"),stop:()=>{}}),i.add(h,{run:e=>e.setDevice("Tablet"),stop:()=>{}}),i.add(C,{run:e=>e.setDevice("Mobile portrait"),stop:()=>{}}),i.add(v,{run:e=>{const o="core:canvas-clear";t?confirm(t)&&e.runCommand(o):e.runCommand(o)}})};function w(r,a){r.Blocks;let i="",t="",e=a.tableStyle||{},o=a.cellStyle||{};const l=(d,g)=>{a.blocks.indexOf(d)>=0&&r.Blocks.add(d,{select:!0,...g,...a.block(d)})};for(let d in e)i+=`${d}: ${e[d]}; `;for(let d in o)t+=`${d}: ${o[d]}; `;l("sect100",{label:"1 Section",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,content:`
      <table style="${i}">
        <tr>
          <td style="${t}"></td>
        </tr>
      </table>
    `}),l("sect50",{label:"1/2 Section",media:`<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,content:`
      <table style="${i}">
        <tr>
          <td style="${t} width: 50%"></td>
          <td style="${t} width: 50%"></td>
        </tr>
      </table>
    `}),l("sect30",{label:"1/3 Section",media:`<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,content:`
      <table style="${i}">
        <tr>
          <td style="${t} width: 33.3333%"></td>
          <td style="${t} width: 33.3333%"></td>
          <td style="${t} width: 33.3333%"></td>
        </tr>
      </table>
    `}),l("sect37",{label:"3/7 Section",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    </svg>`,content:`
      <table style="${i}">
        <tr>
          <td style="${t} width:30%"></td>
          <td style="${t} width:70%"></td>
        </tr>
      </table>
    `}),l("button",{label:"Button",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,content:'<a class="button">Button</a>'}),l("divider",{label:"Divider",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,content:`
      <table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
        .divider {
          background-color: rgba(0, 0, 0, 0.1);
          height: 1px;
        }
      </style>
    `}),l("text",{label:"Text",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,activate:!0,content:{type:"text",content:"Insert your text here",style:{padding:"10px"}}}),l("text-sect",{label:"Text Section",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,content:`
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
    `}),l("image",{label:"Image",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,activate:!0,content:{type:"image",style:{color:"black"}}}),l("quote",{label:"Quote",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,content:'<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>'}),l("link",{label:"Link",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,content:{type:"link",content:"Link",style:{color:"#3b97e3"}}}),l("link-block",{label:"Link Block",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,content:{type:"link",editable:!1,droppable:!0,style:{display:"inline-block",padding:"5px","min-height":"50px","min-width":"50px"}}});const n=`<table class="grid-item-card">
      <tr>
        <td class="grid-item-card-cell">
          <img class="grid-item-image" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>
          <table class="grid-item-card-body">
            <tr>
              <td class="grid-item-card-content">
                <h1 class="card-title">Title here</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;l("grid-items",{label:"Grid Items",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
    </svg>`,content:`
      <table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${n}</td>
          <td class="grid-item-cell2-r">${n}</td>
        </tr>
      </table>
    `});const s=`<table class="list-item">
      <tr>
        <td class="list-item-cell">
          <table class="list-item-content">
            <tr class="list-item-row">
              <td class="list-cell-left">
                <img class="list-item-image" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>
              </td>
              <td class="list-cell-right">
                <h1 class="card-title">Title here</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;l("list-items",{label:"List Items",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>
    </svg>`,content:s+s})}const $=(r,a)=>{const{Panels:i}=r,{cmdOpenImport:t,cmdTglImages:e}=a,o="export-template",l="open-sm",n="open-tm",s="open-layers",d="open-blocks",g="sw-visibility",f="fullscreen",b="preview",c='style="display: block; max-width: 22px"';r.getConfig().showDevices=!1,i.getPanels().reset([{id:"commands",buttons:[{}]},{id:"devices-c",buttons:[{id:H,command:H,active:!0,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`},{id:h,command:h,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`},{id:C,command:C,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`}]},{id:"options",buttons:[{id:g,command:g,context:g,label:`<svg ${c} viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`},{id:b,context:b,command:b,label:`<svg ${c} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`},{id:f,command:f,context:f,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        </svg>`},{id:o,command:o,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>`},{id:t,command:t,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>`},{id:e,command:e,label:`<svg ${c} viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 3C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H14.09C14.03 20.67 14 20.34 14 20C14 19.32 14.12 18.64 14.35 18H5L8.5 13.5L11 16.5L14.5 12L16.73 14.97C17.7 14.34 18.84 14 20 14C20.34 14 20.67 14.03 21 14.09V5C21 3.89 20.1 3 19 3H5M16.47 17.88L18.59 20L16.47 22.12L17.88 23.54L20 21.41L22.12 23.54L23.54 22.12L21.41 20L23.54 17.88L22.12 16.46L20 18.59L17.88 16.47L16.46 17.88Z"/>
        </svg>`},{id:"undo",command:"core:undo",label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`},{id:"redo",command:"core:redo",label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`},{id:v,command:v,label:`<svg ${c} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`}]},{id:"views",buttons:[{id:l,command:l,active:!0,label:`<svg ${c} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
        </svg>`},{id:n,command:n,label:`<svg ${c} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`},{id:s,command:s,label:`<svg ${c} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
      </svg>`},{id:d,command:d,label:`<svg ${c} viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>`}]}]),a.showStylesOnChange&&r.on("component:selected",()=>{const p=i.getButton("views",s);if((!p||!p.get("active"))&&r.getSelected()){const V=i.getButton("views",l);V==null||V.set("active",!0)}}),r.onReady(()=>{if(a.showBlocksOnLoad){const p=i.getButton("views",d);p==null||p.set("active",!0)}})};function B(r,a){let i=r.StyleManager.getSectors();if(a.updateStyleManager){const t=[{name:"Dimension",open:!1,buildProps:["width","height","max-width","min-height","margin","padding"],properties:[{property:"margin",properties:[{name:"Top",property:"margin-top"},{name:"Left",property:"margin-left"},{name:"Right",property:"margin-right"},{name:"Bottom",property:"margin-bottom"}]},{property:"padding",properties:[{name:"Top",property:"padding-top"},{name:"Right",property:"padding-right"},{name:"Bottom",property:"padding-bottom"},{name:"Left",property:"padding-left"}]}]},{name:"Typography",open:!1,buildProps:["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","text-decoration","font-style","vertical-align","text-shadow"],properties:[{name:"Font",property:"font-family"},{name:"Weight",property:"font-weight"},{name:"Font color",property:"color"},{property:"text-align",type:"radio",defaults:"left",list:[{value:"left",name:"Left",className:"fa fa-align-left"},{value:"center",name:"Center",className:"fa fa-align-center"},{value:"right",name:"Right",className:"fa fa-align-right"},{value:"justify",name:"Justify",className:"fa fa-align-justify"}]},{property:"text-decoration",type:"radio",defaults:"none",list:[{value:"none",name:"None",className:"fa fa-times"},{value:"underline",name:"underline",className:"fa fa-underline"},{value:"line-through",name:"Line-through",className:"fa fa-strikethrough"}]},{property:"font-style",type:"radio",defaults:"normal",list:[{value:"normal",name:"Normal",className:"fa fa-font"},{value:"italic",name:"Italic",className:"fa fa-italic"}]},{property:"vertical-align",type:"select",defaults:"baseline",list:[{value:"baseline"},{value:"top"},{value:"middle"},{value:"bottom"}]},{property:"text-shadow",properties:[{name:"X position",property:"text-shadow-h"},{name:"Y position",property:"text-shadow-v"},{name:"Blur",property:"text-shadow-blur"},{name:"Color",property:"text-shadow-color"}]}]},{name:"Decorations",open:!1,buildProps:["background-color","border-collapse","border-radius","border","background"],properties:[{property:"background-color",name:"Background"},{property:"border-radius",properties:[{name:"Top",property:"border-top-left-radius"},{name:"Right",property:"border-top-right-radius"},{name:"Bottom",property:"border-bottom-left-radius"},{name:"Left",property:"border-bottom-right-radius"}]},{property:"border-collapse",type:"radio",defaults:"separate",list:[{value:"separate",name:"No"},{value:"collapse",name:"Yes"}]},{property:"border",properties:[{name:"Width",property:"border-width",defaults:"0"},{name:"Style",property:"border-style"},{name:"Color",property:"border-color"}]},{property:"background",properties:[{name:"Image",property:"background-image"},{name:"Repeat",property:"background-repeat"},{name:"Position",property:"background-position"},{name:"Attachment",property:"background-attachment"},{name:"Size",property:"background-size"}]}]}];r.onReady(()=>{i.reset(),i.add(t)})}}const k={blocks:["sect100","sect50","sect30","sect37","button","divider","text","text-sect","image","quote","link","link-block","grid-items","list-items"],block:()=>({}),juiceOpts:{},cmdOpenImport:"gjs-open-import-template",cmdTglImages:"gjs-toggle-images",cmdInlineHtml:"gjs-get-inlined-html",modalTitleImport:"Import template",modalTitleExport:"Export template",modalLabelImport:"",modalLabelExport:"",modalBtnImport:"Import",codeViewerTheme:"hopscotch",importPlaceholder:"",inlineCss:!0,cellStyle:{padding:"0",margin:"0","vertical-align":"top"},tableStyle:{height:"150px",margin:"0 auto 10px auto",padding:"5px 5px 5px 5px",width:"100%"},updateStyleManager:!0,showStylesOnChange:!0,showBlocksOnLoad:!0,useCustomTheme:!0,primaryColor:"#373d49",secondaryColor:"#dae5e6",tertiaryColor:"#4c9790",quaternaryColor:"#35d7bb"};return(r,a={})=>{let i=r.getConfig();r.I18n;const t={...k,...a};if(i.devicePreviewMode=!0,t.useCustomTheme&&typeof window<"u"){const e="gjs-";let o="";[["one",t.primaryColor],["two",t.secondaryColor],["three",t.tertiaryColor],["four",t.quaternaryColor]].forEach(([n,s])=>{o+=`
        .${e}${n}-bg {
          background-color: ${s};
        }
        .${e}${n}-color {
          color: ${s};
        }
        .${e}${n}-color-h:hover {
          color: ${s};
        }
      `});const l=document.createElement("style");l.innerText=o,document.head.appendChild(l)}M(r,t),w(r,t),$(r,t),B(r,t)}});
