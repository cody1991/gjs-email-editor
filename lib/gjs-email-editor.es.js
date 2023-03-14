import Y from "mjml-browser";
const K = (e, a) => {
  const { Blocks: t } = e, n = a.imagePlaceholderSrc || "https://via.placeholder.com/350x250/78c5d6/fff", l = `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
  </svg>`;
  a.resetBlocks && t.getAll().reset();
  const i = (m, r) => {
    a.blocks.indexOf(m) >= 0 && t.add(m, {
      select: !0,
      // @ts-ignore
      category: e.I18n.t("grapesjs-mjml.category"),
      ...r,
      ...a.block(m)
    });
  }, o = (m) => e.I18n.t(`grapesjs-mjml.components.names.${m}`);
  i("mj-1-column", {
    label: o("oneColumn"),
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
      </mj-section>`
  }), i("mj-2-columns", {
    label: o("twoColumn"),
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `<mj-section>
      <mj-column><mj-text>Content 1</mj-text></mj-column>
      <mj-column><mj-text>Content 2</mj-text></mj-column>
    </mj-section>`
  }), i("mj-3-columns", {
    label: o("threeColumn"),
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
        <mj-column><mj-text>Content 3</mj-text></mj-column>
      </mj-section>`
  }), i("mj-text", {
    label: o("text"),
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
    content: "<mj-text>Insert text here</mj-text>",
    activate: !0
  }), i("mj-button", {
    label: o("button"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,
    content: "<mj-button>Button</mj-button>"
  }), i("mj-image", {
    label: o("image"),
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
    content: `<mj-image src="${n}"/>`,
    activate: !0
  }), i("mj-divider", {
    label: o("divider"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,
    content: "<mj-divider/>"
  }), i("mj-social-group", {
    label: o("socialGroup"),
    media: l,
    content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element name="facebook"></mj-social-element>
        <mj-social-element name="google"></mj-social-element>
        <mj-social-element name="twitter"></mj-social-element>
      </mj-social>`
  }), i("mj-social-element", {
    label: o("socialElement"),
    media: l,
    content: '<mj-social-element name="facebook" />'
  }), i("mj-spacer", {
    label: o("spacer"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />
    </svg>`,
    content: "<mj-spacer/>"
  }), i("mj-navbar", {
    label: o("navBar"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>`,
    content: `<mj-navbar>
      <mj-navbar-link>Getting started</mj-navbar-link>
      <mj-navbar-link>Try it live</mj-navbar-link>
      <mj-navbar-link>Templates</mj-navbar-link>
      <mj-navbar-link>Components</mj-navbar-link>
    </mj-navbar>`
  }), i("mj-navbar-link", {
    label: o("navLink"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />
    </svg>`,
    content: "<mj-navbar-link>Link</mj-navbar-link>"
  }), i("mj-hero", {
    label: o("hero"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,
    content: `<mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg" background-color="#2a3448" padding="100px 0px">
      <mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center" font-size="45px" line-height="45px" font-weight="900">
        GO TO SPACE
      </mj-text>
      <mj-button href="https://mjml.io/" align="center">
        ORDER YOUR TICKET NOW
      </mj-button>
    </mj-hero>`
  }), i("mj-wrapper", {
    label: o("wrapper"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />
    </svg>`,
    content: `<mj-wrapper border="1px solid #000000" padding="50px 30px">
      <mj-section border-top="1px solid #aaaaaa" border-left="1px solid #aaaaaa" border-right="1px solid #aaaaaa" padding="20px">
        <mj-column>
          <mj-image padding="0" src="${n}" />
        </mj-column>
      </mj-section>
      <mj-section border-left="1px solid #aaaaaa" border-right="1px solid #aaaaaa" padding="20px" border-bottom="1px solid #aaaaaa">
        <mj-column border="1px solid #dddddd">
          <mj-text padding="20px"> First line of text </mj-text>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" padding="0 20px" />
          <mj-text padding="20px"> Second line of text </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>`
  }), i("mj-raw", {
    label: o("raw"),
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
    </svg>`,
    content: `<mj-raw>
      <div class="container">
        <img class="item" src="https://source.unsplash.com/random/200x141" alt="Example image">
        <img class="item" src="https://source.unsplash.com/random/200x142" alt="Example image">
        <img class="item" src="https://source.unsplash.com/random/200x143" alt="Example image">
        <img class="item" src="https://source.unsplash.com/random/200x144" alt="Example image">
        <img class="item" src="https://source.unsplash.com/random/200x145" alt="Example image">
        <img class="item" src="https://source.unsplash.com/random/200x146" alt="Example image">
      </div>
    </mj-raw>`
  });
}, u = (e) => (a) => (a.tagName || "").toLowerCase() === e;
function L(e, a, t = {}) {
  const n = {
    useMjmlConfigOptions: !1,
    mjmlConfigPath: null,
    filePath: null,
    ...t
  };
  return a && Object.keys(a).length > 0 && a.constructor === Object && (n.fonts = a), Y(e, n);
}
const p = (e) => (Array.isArray(e) ? e : [e]).map((t) => `[data-gjs-type="${t}"]`).join(", "), h = (e, a) => e.I18n.t(`grapesjs-mjml.components.names.${a}`);
function Q(e, a) {
  let t;
  return function(...n) {
    clearTimeout(t), t = setTimeout(() => {
      clearTimeout(t), e.apply(this, n);
    }, a);
  };
}
const w = "mj-head", ee = (e) => {
  e.Components.addType(w, {
    isComponent: u(w),
    model: {
      defaults: {
        draggable: !1,
        droppable: p([
          "mj-preview",
          "mj-attributes",
          "mj-style",
          "mj-font",
          "mj-title",
          "mj-raw"
        ])
      }
    }
  });
}, V = "mj-wrapper", te = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(V, {
    isComponent: u(V),
    model: {
      ...a,
      defaults: {
        name: h(e, "wrapper"),
        draggable: p(M),
        droppable: p(T),
        traits: [
          "id",
          "title",
          {
            type: "checkbox",
            label: "Full width",
            name: "full-width",
            valueTrue: "full-width",
            valueFalse: ""
          }
        ]
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: {
        style: "pointer-events: all; display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body>",
          end: "</mj-body></mjml>"
        };
      },
      getChildrenSelector() {
        return this.model.getAttributes()["full-width"] ? "table > tbody > tr > td > div > table > tbody > tr > td" : "table > tbody > tr > td";
      },
      init() {
        t.init.call(this), this.listenTo(this.model.get("components"), "add remove", () => {
          this.getChildrenContainer().innerHTML = this.model.get("content"), this.renderChildren();
        });
      }
    }
  });
}, y = "mj-column", ne = (e, { opt: a, coreMjmlModel: t, coreMjmlView: n, sandboxEl: l }) => {
  const i = a.columnsPadding;
  e.Components.addType(y, {
    isComponent: u(y),
    model: {
      ...t,
      defaults: {
        name: h(e, "column"),
        draggable: p(T),
        stylable: [
          "background-color",
          "vertical-align",
          "width",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border",
          "border-width",
          "border-style",
          "border-color"
        ],
        "style-default": {
          "vertical-align": "top"
        }
      }
    },
    view: {
      ...n,
      tagName: "div",
      attributes: {
        style: i ? `padding: ${i};` : ""
      },
      getTemplateFromMjml() {
        const o = this.getMjmlTemplate(), m = this.getInnerMjmlTemplate(), s = L(
          `${o.start}
          ${m.start}${m.end}${o.end}`,
          a.fonts
        ).html, d = [];
        l.innerHTML = s, Array.from(
          l.querySelectorAll("style")
        ).forEach((C) => {
          d.push(C.innerHTML);
        });
        const g = s.replace(/<body(.*)>/, "<body>"), b = g.indexOf("<body>") + 6, j = g.indexOf("</body>");
        l.innerHTML = g.substring(b, j).trim();
        const v = this.getTemplateFromEl(l), H = {}, x = v.attributes;
        for (let C, $ = 0, U = x.length; $ < U; $++)
          C = x[$], H[C.name] = C.value;
        return {
          attributes: H,
          content: v.innerHTML,
          style: d.join(" ")
        };
      },
      render() {
        this.renderAttributes();
        const o = this.getTemplateFromMjml();
        return this.el.innerHTML = o.content, this.$el.attr(o.attributes), e.addComponents(`<style>${o.style}</style>`), this.getChildrenContainer().innerHTML = this.model.get("content"), this.renderChildren(), this.renderStyle(), this.updateStatus(), this;
      },
      renderStyle() {
        const o = this.model.get("style") || {}, m = Object.keys(this.model.get("style")).map(
          (r) => `${r}:${o[r]};`
        );
        this.el.setAttribute(
          "style",
          `${this.attributes.style} ${m.join(" ")} ${this.el.getAttribute(
            "style"
          )}`
        ), this.checkVisibility();
      },
      getMjmlTemplate() {
        let o = this.model.collection.length - 1;
        return o = o || 0, {
          start: "<mjml><mj-body><mj-section>",
          end: `${Array(o).fill("<mj-column></mj-column>").join("")}</mj-section></mj-body></mjml>`
        };
      },
      getTemplateFromEl(o) {
        return o.firstChild.querySelector(
          "div > table > tbody > tr > td > div"
        );
      },
      getChildrenSelector() {
        return "table";
      }
    }
  });
}, B = "mj-group", le = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(B, {
    isComponent: u(B),
    model: {
      ...a,
      defaults: {
        name: h(e, "group"),
        draggable: p(T),
        droppable: p(y),
        stylable: ["width", "vertical-align", "background-color", "direction"],
        "style-default": {
          "vertical-align": "top"
        }
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: {
        style: "display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body>",
          end: "</mj-body></mjml>"
        };
      },
      getChildrenSelector() {
        return "div";
      }
    }
  });
}, T = "mj-section", oe = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(T, {
    isComponent: u(T),
    model: {
      ...a,
      defaults: {
        name: h(e, "section"),
        draggable: p([M, V]),
        droppable: p([y, B]),
        "style-default": {
          "padding-left": "0px",
          "padding-right": "0px",
          "padding-top": "10px",
          "padding-bottom": "10px",
          "text-align": "center"
        },
        stylable: [
          "text-align",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "background-color",
          "background-url",
          "background-repeat",
          "background-size",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border",
          "border-width",
          "border-style",
          "border-color"
        ],
        traits: [
          "id",
          "title",
          {
            type: "checkbox",
            label: "Full width",
            name: "full-width",
            valueTrue: "full-width",
            valueFalse: ""
          }
        ]
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: {
        style: "pointer-events: all;"
      },
      getMjmlTemplate() {
        const n = this.model.parent(), l = n == null ? void 0 : n.view, i = n == null ? void 0 : n.attributes.tagName;
        if ((l == null ? void 0 : l.getInnerMjmlTemplate) && i === M) {
          let m = t.getInnerMjmlTemplate.call(l);
          return {
            start: `<mjml><mj-body>${m.start}`,
            end: `${m.end}</mj-body></mjml>`
          };
        } else
          return {
            start: "<mjml><mj-body>",
            end: "</mj-body></mjml>"
          };
      },
      getChildrenSelector() {
        return this.model.getAttributes()["full-width"] ? "table > tbody > tr > td > div table > tbody > tr > td" : "table > tbody > tr > td";
      },
      init() {
        t.init.call(this), this.listenTo(this.model.get("components"), "add remove", this.render);
      }
    }
  });
}, I = "mj-text", re = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(I, {
    extend: "text",
    extendFnView: ["onActive"],
    isComponent: u(I),
    model: {
      ...a,
      defaults: {
        name: h(e, "text"),
        draggable: p([y, f]),
        highlightable: !1,
        stylable: [
          "height",
          "font-style",
          "font-size",
          "font-weight",
          "font-family",
          "color",
          "line-height",
          "letter-spacing",
          "text-decoration",
          "align",
          "text-transform",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "container-background-color"
        ],
        "style-default": {
          "padding-top": "10px",
          "padding-bottom": "10px",
          "padding-right": "25px",
          "padding-left": "25px",
          "font-size": "13px",
          "line-height": "22px",
          align: "left"
        }
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "pointer-events: all; display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "td > div";
      },
      /**
       * Prevent content repeating
       */
      rerender() {
        this.render();
      },
      /**
       * Need to make text selectable.
       */
      onActive() {
        this.getChildrenContainer().style.pointerEvents = "all";
      }
    }
  });
}, F = "mj-button", ae = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(F, {
    isComponent: u(F),
    extend: "link",
    model: {
      ...a,
      defaults: {
        name: h(e, "button"),
        draggable: p([y, f]),
        highlightable: !1,
        stylable: [
          "width",
          "height",
          "background-color",
          "container-background-color",
          "font-style",
          "font-size",
          "font-weight",
          "font-family",
          "color",
          "text-decoration",
          "align",
          "vertical-align",
          "text-transform",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border",
          "border-width",
          "border-style",
          "border-color"
        ],
        "style-default": {
          "background-color": "#414141",
          "border-radius": "3px",
          "font-size": "13px",
          "font-weight": "400",
          color: "#ffffff",
          "vertical-align": "middle",
          "padding-top": "10px",
          "padding-bottom": "10px",
          "padding-right": "25px",
          "padding-left": "25px",
          align: "center"
        },
        traits: ["href"]
        // 'container-background-color', 'inner-padding'
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "a,p";
      },
      /**
       * Prevent content repeating
       */
      rerender() {
        this.render();
      }
    }
  });
}, O = "mj-image", ie = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(O, {
    isComponent: u(O),
    extend: "image",
    model: {
      ...a,
      defaults: {
        resizable: !1,
        highlightable: !1,
        name: h(e, "image"),
        draggable: p([T, y, f]),
        stylable: [
          "width",
          "height",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border",
          "border-width",
          "border-style",
          "border-color",
          "container-background-color",
          "align"
        ],
        "style-default": {
          "padding-top": "10px",
          "padding-bottom": "10px",
          "padding-right": "25px",
          "padding-left": "25px",
          align: "center"
        },
        traits: ["href", "rel", "alt", "title"],
        void: !1
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "pointer-events: all; display: table; width: 100%; user-select: none;"
      },
      getMjmlTemplate() {
        return {
          start: '<mjml><mj-body width="auto"><mj-column>',
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "img";
      }
    }
  });
}, Z = "mj-divider", se = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(Z, {
    isComponent: u(Z),
    model: {
      ...a,
      defaults: {
        name: h(e, "divider"),
        draggable: p([y, f]),
        droppable: !1,
        "style-default": {
          width: "100%",
          "border-width": "4px",
          "border-style": "solid",
          "border-color": "#000000",
          "padding-top": "10px",
          "padding-bottom": "10px",
          "padding-right": "25px",
          "padding-left": "25px"
        },
        stylable: [
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "width",
          "container-background-color",
          "border-detached",
          "border-width",
          "border-style",
          "border-color"
        ],
        void: !1
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "display: table; width: 100%; user-select: none;"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "p";
      }
    }
  });
}, k = "mj-navbar-link", de = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(k, {
    isComponent: u(k),
    extend: "link",
    model: {
      ...a,
      defaults: {
        name: h(e, "navLink"),
        draggable: p(E),
        highlightable: !1,
        stylable: [
          "font-style",
          "font-size",
          "font-weight",
          "font-family",
          "color",
          "text-decoration",
          "text-transform",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom"
        ],
        "style-default": {
          "font-size": "13px",
          "padding-top": "25px",
          "padding-bottom": "25px",
          "padding-left": "10px",
          "padding-right": "10px",
          "text-transform": "uppercase"
        },
        traits: ["href"]
      }
    },
    view: {
      ...t,
      tagName: "a",
      attributes: {
        style: "float: none; display: inline-table;"
      },
      getMjmlTemplate() {
        var l;
        let n = (l = this.model.parent()) == null ? void 0 : l.view;
        if (n != null && n.getInnerMjmlTemplate) {
          let i = t.getInnerMjmlTemplate.call(n);
          return {
            start: `<mjml><mj-body><mj-column>${i.start}`,
            end: `${i.end}</mj-column></mj-body></mjml>`
          };
        } else
          return {
            start: "<mjml><mj-body><mj-column><mj-navbar>",
            end: "</mj-navbar></mj-column></mj-body></mjml>"
          };
      },
      getTemplateFromEl(n) {
        return n.querySelector("div").innerHTML;
      },
      getChildrenSelector() {
        return "a,p";
      }
    }
  });
}, E = "mj-navbar", me = (e, { opt: a, coreMjmlModel: t, coreMjmlView: n, sandboxEl: l }) => {
  e.Components.addType(E, {
    isComponent: u(E),
    model: {
      ...t,
      defaults: {
        name: h(e, "navBar"),
        draggable: p([y, f]),
        droppable: p(k),
        "style-default": {
          // TODO
        },
        stylable: [
          // TODO
        ],
        traits: [
          {
            type: "select",
            label: "Hamburger",
            name: "hamburger",
            options: [
              { value: "hamburger", name: "ON" },
              { value: "", name: "OFF" }
            ]
          }
        ]
      }
    },
    view: {
      ...n,
      tagName: "tr",
      attributes: {
        style: "pointer-events: all; display: table; width: 100%"
      },
      init() {
        n.init.call(this), this.listenTo(
          this.model.get("components"),
          "add remove update",
          this.render
        );
      },
      getTemplateFromMjml() {
        const i = this.getMjmlTemplate(), o = this.getInnerMjmlTemplate(), r = L(
          `${i.start}
          ${o.start}${o.end}${i.end}`,
          a.fonts
        ).html, s = [];
        l.innerHTML = r, Array.from(
          l.querySelectorAll("style")
        ).forEach((x) => {
          s.push(x.innerHTML);
        });
        const c = r.replace(/<body(.*)>/, "<body>"), g = c.indexOf("<body>") + 6, b = c.indexOf("</body>");
        l.innerHTML = c.substring(g, b).trim();
        const j = this.getTemplateFromEl(l), v = {}, H = j.attributes;
        for (let x, C = 0, $ = H.length; C < $; C++)
          x = H[C], v[x.name] = x.value;
        return {
          attributes: v,
          content: j.innerHTML,
          style: s.join(" ")
        };
      },
      render() {
        this.renderAttributes();
        const i = this.getTemplateFromMjml();
        return this.el.innerHTML = i.content, this.$el.attr(i.attributes), e.addComponents(`<style>${i.style}</style>`), this.getChildrenContainer().innerHTML = this.model.get("content"), this.renderChildren(), this.renderStyle(), this;
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(i) {
        return i.firstChild.querySelector("tr");
      },
      getChildrenSelector() {
        return "div.mj-inline-links";
      },
      rerender() {
        n.rerender.call(this), this.model.components().models.forEach((i) => {
          i.attributes.type == k && i.view.rerender();
        });
      }
    }
  });
}, S = "mj-social-element", ce = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(S, {
    isComponent: u(S),
    model: {
      ...a,
      defaults: {
        name: h(e, "socialElement"),
        draggable: p(N),
        stylable: [
          "icon-size",
          "text-decoration",
          "align",
          "font-family",
          "font-size",
          "line-height",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "background-color",
          "color",
          "vertical-align"
        ],
        "style-default": {
          align: "center",
          "font-size": "13px",
          "line-height": "22px",
          "vertical-align": "middle"
        },
        traits: [
          {
            type: "select",
            label: "Icon",
            name: "name",
            options: [
              { value: "custom", name: "Custom" },
              { value: "facebook", name: "Facebook" },
              { value: "twitter", name: "Twitter" },
              { value: "google", name: "Google" },
              { value: "instagram", name: "Instagram" },
              { value: "web", name: "Web" },
              { value: "youtube", name: "Youtube" },
              { value: "pinterest", name: "Pinterest" },
              { value: "linkedin", name: "Linkedin" },
              { value: "snapchat", name: "Snapchat" },
              { value: "vimeo", name: "Vimeo" },
              { value: "tumblr", name: "Tumblr" },
              { value: "github", name: "Github" },
              { value: "soundcloud", name: "SoundCloud" },
              { value: "medium", name: "Medium" },
              { value: "dribbble", name: "Dribbble" },
              { value: "xing", name: "Xing" }
            ]
          },
          { name: "src" },
          { name: "href" }
        ]
      }
    },
    view: {
      ...t,
      tagName: "table",
      attributes: {
        style: "float: none; display: inline-table;"
      },
      getMjmlTemplate() {
        var l;
        let n = (l = this.model.parent()) == null ? void 0 : l.view;
        if (n.getInnerMjmlTemplate) {
          let i = t.getInnerMjmlTemplate.call(n);
          return {
            start: `<mjml><mj-body><mj-column>${i.start}`,
            end: `${i.end}</mj-column></mj-body></mjml>`
          };
        } else
          return {
            start: "<mjml><mj-body><mj-column><mj-social>",
            end: "</mj-social></mj-column></mj-body></mjml>"
          };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr > td > table").innerHTML;
      },
      getChildrenSelector() {
        return "img";
      }
    }
  });
}, N = "mj-social", pe = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(N, {
    isComponent: u(N),
    model: {
      ...a,
      defaults: {
        name: h(e, "socialGroup"),
        draggable: p([y, f]),
        droppable: p(S),
        stylable: [
          "icon-size",
          "text-decoration",
          "align",
          "font-family",
          "font-size",
          "line-height",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "container-background-color",
          "color"
        ],
        "style-default": {
          align: "center",
          "icon-size": "20px",
          "font-size": "13px",
          "line-height": "22px"
        },
        traits: [
          {
            type: "select",
            label: "Mode",
            name: "mode",
            options: [
              { value: "horizontal", name: "Horizontal" },
              { value: "vertical", name: "Vertical" }
            ]
          }
        ]
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "td";
      },
      rerender() {
        t.rerender.call(this), this.model.components().models.forEach((n) => {
          n.attributes.type === S && n.view.rerender();
        });
      },
      init() {
        t.init.call(this), this.listenTo(
          this.model.get("components"),
          "add remove update",
          this.render
        );
      }
    }
  });
}, z = "mj-spacer", ge = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(z, {
    isComponent: u(z),
    model: {
      ...a,
      defaults: {
        name: h(e, "spacer"),
        draggable: p([y, f]),
        droppable: !1,
        "style-default": { height: "20px" },
        stylable: ["height", "container-background-color"],
        void: !1
      }
    },
    view: {
      ...t,
      tagName: "tr",
      attributes: {
        style: "display: table; width: 100%; user-select: none;"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl(n) {
        return n.querySelector("tr").innerHTML;
      },
      getChildrenSelector() {
        return "td";
      }
    }
  });
}, f = "mj-hero", ue = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(f, {
    isComponent: u(f),
    model: {
      ...a,
      defaults: {
        name: h(e, "hero"),
        draggable: p(M),
        droppable: p([
          I,
          F,
          O,
          Z,
          E,
          N,
          z
        ]),
        stylable: [
          "background-color",
          "background-height",
          "background-position",
          "background-url",
          "background-width",
          "css-class",
          "height",
          "mode",
          "padding",
          "padding-top",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "vertical-align",
          "width"
        ],
        "style-default": {
          "vertical-align": "top"
        }
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: {
        style: "display: table; width: 100%"
      },
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-body>",
          end: "</mj-body></mjml>"
        };
      },
      getChildrenSelector() {
        return "table tr td";
      }
    }
  });
}, A = "mj-raw", he = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(A, {
    isComponent: u(A),
    model: {
      ...a,
      defaults: {
        name: h(e, "raw"),
        draggable: p([M, w]),
        stylable: !1,
        "style-default": {},
        style: {},
        attributes: {}
      }
    },
    view: {
      ...t,
      tagName: "section",
      attributes: {
        style: "pointer-events: all;"
      },
      getMjmlTemplate() {
        const n = this.model.parent(), l = n == null ? void 0 : n.view, i = n == null ? void 0 : n.attributes.tagName, o = l == null ? void 0 : l.getInnerMjmlTemplate;
        if (o && i === "mj-body") {
          let m = t.getInnerMjmlTemplate.call(l);
          return {
            start: `<mjml>${m.start}`,
            end: `${m.end}</mjml>`
          };
        } else if (o && i === "mj-head") {
          let m = t.getInnerMjmlTemplate.call(l);
          return {
            start: `<mjml>${m.start}`,
            end: `${m.end}</mjml>`
          };
        } else
          return {
            start: "<mjml><mj-body>",
            end: "</mj-body></mjml>"
          };
      },
      getTemplateFromEl(n) {
        return n.innerHTML;
      },
      getChildrenSelector() {
        return "*";
      },
      init() {
        t.init.call(this), this.listenTo(this.model.get("components"), "add remove", this.render);
      }
    }
  });
}, M = "mj-body", be = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(M, {
    isComponent: u(M),
    model: {
      ...a,
      defaults: {
        name: h(e, "body"),
        droppable: p([
          T,
          V,
          f,
          A
        ]),
        draggable: !1,
        copyable: !1,
        removable: !1,
        highlightable: !1,
        "style-default": { width: "600px" },
        stylable: ["width", "background-color"]
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: {
        style: "width: 100%; min-height: 100vh"
      },
      getChildrenSelector() {
        return "div";
      },
      getInnerMjmlTemplate() {
        const n = t.getInnerMjmlTemplate.call(this);
        return {
          start: `${n.start}<mj-section></mj-section>`,
          end: n.end
        };
      },
      renderStyle() {
        this.getChildrenContainer().style.maxWidth = "none", this.getChildrenContainer().style.width = "100%", this.el.setAttribute(
          "style",
          `${this.el.getAttribute("style") + this.attributes.style}`
        );
      },
      rerender() {
        t.rerender.call(this), this.model.components().models.forEach((n) => {
          [T, A].indexOf(n.attributes.type) < 0 || n.view.rerender();
        });
      }
    }
  });
}, J = "mjml", je = (e, { coreMjmlModel: a, coreMjmlView: t }) => {
  e.Components.addType(J, {
    isComponent: u(J),
    model: {
      ...a,
      defaults: {
        droppable: p([w, M]),
        draggable: !1,
        stylable: !1,
        copyable: !1,
        removable: !1,
        highlightable: !1,
        traits: [
          {
            name: "owa",
            placeholder: "eg. desktop"
          },
          {
            name: "lang",
            placeholder: "eg. en"
          },
          {
            name: "dir",
            placeholder: "eg. rtl"
          }
        ]
      }
    },
    view: {
      ...t,
      tagName: "div",
      attributes: { style: "min-height: 100vh" },
      rerender() {
        this.render();
      },
      getTemplateFromMjml() {
        return "";
      }
    }
  });
}, _ = "mj-style", ye = (e, { opt: a, coreMjmlModel: t, coreMjmlView: n, sandboxEl: l }) => {
  e.Components.addType(_, {
    isComponent: u(_),
    model: {
      ...t,
      defaults: {
        draggable: p(w)
      }
    },
    view: {
      ...n,
      tagName: "style",
      getMjmlTemplate() {
        return {
          start: "<mjml><mj-head>",
          end: "</mj-head><mj-body></mj-body></mjml>"
        };
      },
      getTemplateFromEl(i) {
        return i.querySelector("style").innerHTML;
      },
      renderStyle() {
      },
      getTemplateFromMjml() {
        let i = this.getMjmlTemplate(), o = this.getInnerMjmlTemplate(), r = L(
          `${i.start}
          ${o.start}${o.end}${i.end}`,
          a.fonts
        ).html, s = r.indexOf("<head>") + 6, d = r.indexOf("</head>");
        return r = r.substring(s, d).trim(), l.innerHTML = r, this.getTemplateFromEl(l);
      }
    }
  });
}, X = "mj-font", fe = (e, { opt: a, coreMjmlModel: t, coreMjmlView: n, sandboxEl: l }) => {
  e.Components.addType(X, {
    isComponent: u(X),
    model: {
      ...t,
      defaults: {
        draggable: p(w),
        void: !1
      }
    },
    view: {
      ...n,
      tagName: "style",
      getMjmlTemplate() {
        var o;
        return {
          start: "<mjml><mj-head>",
          end: `</mj-head><mj-body><mj-text font-family="${(o = this.model.get("attributes")) == null ? void 0 : o.name}"></mj-text></mj-body></mjml>`
        };
      },
      getTemplateFromEl(i) {
        return i.querySelectorAll("style")[1].innerHTML;
      },
      renderStyle() {
      },
      getTemplateFromMjml() {
        let i = this.getMjmlTemplate(), o = this.getInnerMjmlTemplate(), r = L(
          `${i.start}
          ${o.start}${o.end}${i.end}`,
          a.fonts
        ).html, s = r.indexOf("<head>") + 6, d = r.indexOf("</head>");
        return r = r.substring(s, d).trim(), l.innerHTML = r, this.getTemplateFromEl(l);
      }
    }
  });
}, ve = (e, a) => {
  const { Components: t } = e, n = t.ComponentsView, l = document.createElement("div"), m = { coreMjmlModel: {
    init() {
      const r = { ...this.get("attributes") }, s = { ...this.get("style-default"), ...this.get("style") };
      for (let d in s)
        d in r || (r[d] = s[d]);
      this.set("attributes", r), this.set("style", r), this.listenTo(this, "change:style", this.handleStyleChange), this.listenTo(this, "change:attributes", this.handleAttributeChange);
    },
    handleAttributeChange(r, s, d) {
      this.setStyle(this.get("attributes"), d);
    },
    handleStyleChange(r, s, d) {
      const c = this.getStyle();
      delete c.__p, this.set("attributes", c, d);
    },
    getMjmlAttributes() {
      const r = this.get("attributes") || {};
      delete r.style;
      const s = this.get("src");
      return s && (r.src = s), r;
    },
    /**
     * This will avoid rendering default attributes
     * @return {Object}
     */
    getAttrToHTML() {
      const r = { ...this.get("attributes") }, s = { ...this.get("style-default") };
      delete r.style;
      for (let d in r) {
        const c = r[d];
        c && c === s[d] && delete r[d];
      }
      return r;
    },
    /**
     * Have to change a few things for the MJML's xml (no id, style, class)
     */
    toHTML() {
      const r = this, s = r.get("tagName"), d = r.get("void"), c = this.getAttrToHTML();
      let g = "", b = "";
      for (let j in c) {
        const v = c[j];
        b += typeof v < "u" && v !== "" ? ` ${j}="${v}"` : "";
      }
      return g += `<${s}${b}${d ? "/" : ""}>` + r.get("content"), r.components().forEach((j) => {
        g += j.toHTML();
      }), d || (g += `</${s}>`), g;
    },
    isHidden() {
      return this.getStyle().display === "none";
    }
  }, coreMjmlView: {
    init() {
      this.stopListening(this.model, "change:style"), this.listenTo(this.model, "change:attributes change:src", this.rerender), this.debouncedRender = Q(this.render.bind(this), 0);
    },
    rerender() {
      this.render(null, null, {}, 1);
    },
    /**
     * Get the base MJML template wrapper tags
     */
    getMjmlTemplate() {
      return {
        start: "<mjml>",
        end: "</mjml>"
      };
    },
    /**
     * Build the MJML of the current component
     */
    getInnerMjmlTemplate() {
      const { model: r } = this, s = r.get("tagName"), d = r.getMjmlAttributes();
      let c = "";
      for (let g in d) {
        const b = d[g];
        c += typeof b < "u" && b !== "" ? " " + g + '="' + b + '"' : "";
      }
      return {
        start: `<${s}${c}>`,
        end: `</${s}>`
      };
    },
    /**
     * Get the proper HTML string from the element containing compiled MJML template.
     */
    getTemplateFromEl(r) {
      return r.firstChild.innerHTML;
    },
    /**
     * Get HTML from MJML template.
     */
    getTemplateFromMjml() {
      const r = this.getMjmlTemplate(), s = this.getInnerMjmlTemplate(), d = `${r.start}${s.start}${s.end}${r.end}`;
      let g = L(d, a.fonts).html;
      g = g.replace(/<body(.*)>/, "<body>");
      let b = g.indexOf("<body>") + 6, j = g.indexOf("</body>");
      return g = g.substring(b, j).trim(), l.innerHTML = g, this.getTemplateFromEl(l);
    },
    /**
     * Render children components
     * @private
     */
    renderChildren(r) {
      this.updateContent();
      const s = this.getChildrenContainer();
      r ? this.childrenView.parentEl = s : (this.childrenView = this.childrenView || new n({
        collection: this.model.get("components"),
        config: this.config,
        componentTypes: this.opts.componentTypes
      }), this.childNodes = this.childrenView.render(s).el.childNodes);
      const d = Array.prototype.slice.call(this.childNodes);
      for (let c = 0, g = d.length; c < g; c++)
        s.appendChild(d.shift());
    },
    checkVisibility() {
      var r, s;
      (s = (r = this.model).isHidden) != null && s.call(r) && (this.el.style.display = "none");
    },
    renderStyle() {
      this.el.style.cssText = this.attributes.style, this.checkVisibility();
    },
    render(r, s, d, c) {
      return this.renderAttributes(), this.el.innerHTML = this.getTemplateFromMjml(), this.renderChildren(c), this.childNodes = this.getChildrenContainer().childNodes, this.renderStyle(), this;
    }
  }, opt: a, sandboxEl: l };
  e.Components.addType("wrapper", {
    model: {
      defaults: {
        highlightable: !1
      },
      toHTML(r) {
        return this.getInnerHTML(r);
      }
    }
  }), [
    je,
    ee,
    ye,
    fe,
    be,
    te,
    oe,
    le,
    ne,
    ae,
    re,
    ie,
    pe,
    ce,
    se,
    ge,
    me,
    de,
    ue,
    he
  ].forEach((r) => r(e, m));
}, Ce = (e, a, t) => {
  const l = e.getConfig().stylePrefix || "", i = (o) => e.I18n.t(`grapesjs-mjml.panels.import.${o}`);
  e.Commands.add(t, {
    onImport(o) {
      e.Components.getWrapper().set("content", ""), e.setComponents(o.trim()), e.Modal.close();
    },
    createCodeEditor() {
      const o = document.createElement("div"), m = this.createCodeViewer(), r = m.getElement(), s = i("label"), d = document.createElement("button");
      if (d.innerHTML = i("button"), d.className = `${l}btn-prim ${l}btn-import`, d.onclick = () => this.onImport(m.editor.getValue()), s) {
        const c = document.createElement("div");
        c.className = `${l}import-label`, c.innerHTML = s, o.appendChild(c);
      }
      return r.className = `${l}code-viewer`, r.style.margin = "10px 0", o.appendChild(r), o.appendChild(d), { codeEditor: m, el: o };
    },
    createCodeViewer() {
      return e.CodeManager.createViewer({
        codeName: "htmlmixed",
        theme: a.codeViewerTheme,
        readOnly: !1
      });
    },
    getCodeContainer() {
      let o = this.containerEl;
      return o || (o = document.createElement("div"), this.containerEl = o), o;
    },
    run(o, m = {}) {
      const r = this.getCodeContainer();
      let s = this.codeEditorMjml;
      if (!s) {
        const d = this.createCodeEditor();
        s = d.codeEditor, this.codeEditorMjml = s, r.appendChild(d.el);
      }
      s && (s.setContent(a.importPlaceholder), s.editor.refresh()), o.Modal.open({
        title: i("title"),
        content: r
      }).onceClose(() => {
        m.set && m.set("active", !1), o.stopCommand(t);
      });
    },
    stop(o) {
      o.Modal.close();
    }
  });
}, xe = (e, a, t) => {
  const { Commands: n } = e;
  n.add(t, {
    createCodeEditor(l) {
      const i = document.createElement("div"), o = document.createElement("div"), m = this.createCodeViewer();
      return o.innerHTML = l, i.style.flex = "1 0 auto", i.style.padding = "5px", i.style.maxWidth = "50%", i.style.boxSizing = "border-box", i.appendChild(o), i.appendChild(m.getElement()), { codeEditor: m, el: i };
    },
    createCodeViewer() {
      return e.CodeManager.createViewer({
        codeName: "htmlmixed",
        theme: a.codeViewerTheme
      });
    },
    getCodeContainer() {
      let l = this.containerEl;
      return l || (l = document.createElement("div"), l.style.display = "flex", l.style.justifyContent = "space-between", this.containerEl = l), l;
    },
    run(l, i) {
      var s;
      const o = this.getCodeContainer();
      let m = this.codeEditorMjml, r = this.codeEditorHtml;
      if (!m) {
        const d = this.createCodeEditor("MJML");
        m = d.codeEditor, this.codeEditorMjml = m, o.appendChild(d.el);
      }
      if (!r) {
        const d = this.createCodeEditor("HTML");
        r = d.codeEditor, this.codeEditorHtml = r, o.appendChild(d.el);
      }
      if (l.Modal.open({
        title: l.I18n.t("grapesjs-mjml.panels.export.title"),
        content: o
      }).onceClose(() => {
        i.set && i.set("active", !1), l.stopCommand(t);
      }), m && (m.setContent(n.run(G)), m.editor.refresh()), r) {
        const d = n.run(W);
        (s = d.errors) == null || s.forEach((c) => {
          l.log(c.formattedMessage, {
            ns: W,
            level: "warning",
            // @ts-ignore
            error: c
          });
        }), r.setContent(d.html), r.editor.refresh();
      }
    },
    stop(l) {
      l.Modal.close();
    }
  });
}, P = "set-device-desktop", D = "set-device-tablet", R = "set-device-mobile", q = "mjml-import", Te = "mjml-export", G = "mjml-code", W = "mjml-code-to-html", Me = (e, a) => {
  const { Commands: t } = e, n = a.overwriteExport ? "export-template" : Te;
  t.add(G, () => `${a.preMjml}${e.getHtml().trim()}${a.postMjml}`), t.add(W, (l, i, o) => {
    const m = t.run(G);
    return L(m, a.fonts, o);
  }), xe(e, a, n), Ce(e, a, q), t.add(P, {
    run: (l) => l.setDevice("Desktop"),
    stop: () => {
    }
  }), t.add(D, {
    run: (l) => l.setDevice("Tablet"),
    stop: () => {
    }
  }), t.add(R, {
    run: (l) => l.setDevice("Mobile portrait"),
    stop: () => {
    }
  });
}, He = (e, a) => {
  const { Panels: t } = e, n = 'style="display: block; max-width:22px"', l = (i) => e.I18n.t(`grapesjs-mjml.panels.buttons.${i}`);
  t.addButton("options", {
    id: q,
    command: q,
    attributes: { title: l("import") },
    label: `<svg ${n} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </svg>`
  }), t.addButton("options", {
    id: "undo",
    command: "core:undo",
    attributes: { title: l("undo") },
    label: `<svg ${n} viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
    </svg>`
  }), t.addButton("options", {
    id: "redo",
    command: "core:redo",
    attributes: { title: l("redo") },
    label: `<svg ${n} viewBox="0 0 24 24">
        <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
    </svg>`
  }), a.resetDevices && (e.getConfig().showDevices = !1, t.addPanel({ id: "devices-c" }).get("buttons").add([
    {
      id: P,
      command: P,
      active: !0,
      attributes: { title: l("desktop") },
      label: `<svg ${n} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`
    },
    {
      id: D,
      command: D,
      attributes: { title: l("tablet") },
      label: `<svg ${n} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`
    },
    {
      id: R,
      command: R,
      attributes: { title: l("mobile") },
      label: `<svg ${n} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`
    }
  ]));
}, we = (e, a) => {
  a.resetStyleManager && e.onReady(() => {
    const t = e.StyleManager.getSectors();
    t.reset(), t.add([
      {
        name: "Dimension",
        open: !1,
        buildProps: [
          "width",
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
          "vertical-align"
        ],
        properties: [
          {
            property: "margin",
            properties: [
              { name: "Top", property: "margin-top" },
              { name: "Right", property: "margin-right" },
              { name: "Bottom", property: "margin-bottom" },
              { name: "Left", property: "margin-left" }
            ]
          },
          {
            property: "padding",
            detached: !0,
            properties: [
              { name: "Top", property: "padding-top" },
              { name: "Right", property: "padding-right" },
              { name: "Bottom", property: "padding-bottom" },
              { name: "Left", property: "padding-left" }
            ]
          },
          {
            property: "icon-size",
            type: "integer",
            defaults: "20px",
            units: ["px", "%"]
          },
          {
            property: "vertical-align",
            type: "select",
            list: [
              { value: "top" },
              { value: "middle" },
              { value: "bottom" }
            ]
          }
        ]
      },
      {
        name: "Typography",
        open: !1,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
          "align",
          "text-decoration",
          "font-style"
        ],
        properties: [
          { name: "Font", property: "font-family" },
          { name: "Weight", property: "font-weight" },
          { name: "Font color", property: "color" },
          {
            property: "text-align",
            type: "radio",
            defaults: "left",
            list: [
              { value: "left", name: "Left", className: "fa fa-align-left" },
              {
                value: "center",
                name: "Center",
                className: "fa fa-align-center"
              },
              {
                value: "right",
                name: "Right",
                className: "fa fa-align-right"
              },
              {
                value: "justify",
                name: "Justify",
                className: "fa fa-align-justify"
              }
            ]
          },
          {
            property: "align",
            type: "radio",
            defaults: "left",
            list: [
              { value: "left", name: "Left", className: "fa fa-align-left" },
              {
                value: "center",
                name: "Center",
                className: "fa fa-align-center"
              },
              {
                value: "right",
                name: "Right",
                className: "fa fa-align-right"
              },
              {
                value: "justify",
                name: "Justify",
                className: "fa fa-align-justify"
              }
            ]
          },
          {
            property: "text-decoration",
            type: "radio",
            defaults: "none",
            list: [
              { value: "none", name: "None", className: "fa fa-times" },
              {
                value: "underline",
                name: "underline",
                className: "fa fa-underline"
              },
              {
                value: "line-through",
                name: "Line-through",
                className: "fa fa-strikethrough"
              }
            ]
          },
          {
            property: "font-style",
            type: "radio",
            defaults: "normal",
            list: [
              { value: "normal", name: "Normal", className: "fa fa-font" },
              { value: "italic", name: "Italic", className: "fa fa-italic" }
            ]
          }
        ]
      },
      {
        name: "Decorations",
        open: !1,
        buildProps: [
          "background-color",
          "container-background-color",
          "background-url",
          "background-repeat",
          "background-size",
          "border-radius",
          "border"
        ],
        properties: [
          {
            name: "Background color",
            property: "container-background-color",
            type: "color"
          },
          {
            property: "background-url",
            type: "file"
          },
          {
            property: "border-radius",
            properties: [
              { name: "Top", property: "border-top-left-radius" },
              { name: "Right", property: "border-top-right-radius" },
              { name: "Bottom", property: "border-bottom-left-radius" },
              { name: "Left", property: "border-bottom-right-radius" }
            ]
          },
          {
            property: "border-detached",
            name: "Border detached",
            type: "composite",
            detached: !0,
            properties: [
              {
                name: "Width",
                property: "border-width",
                type: "integer",
                units: ["px", "%"]
              },
              {
                name: "Style",
                property: "border-style",
                type: "select",
                list: [
                  { value: "none" },
                  { value: "solid" },
                  { value: "dotted" },
                  { value: "dashed" },
                  { value: "double" },
                  { value: "groove" },
                  { value: "ridge" },
                  { value: "inset" },
                  { value: "outset" }
                ]
              },
              { name: "Color", property: "border-color", type: "color" }
            ]
          }
        ]
      }
    ]);
  });
}, Le = {
  "grapesjs-mjml": {
    category: "",
    panels: {
      buttons: {
        undo: "Undo",
        redo: "Redo",
        desktop: "Desktop",
        tablet: "Tablet",
        mobile: "Mobile",
        import: "Import MJML"
      },
      import: {
        title: "Import MJML",
        button: "Import",
        label: ""
      },
      export: {
        title: "Export MJML"
      }
    },
    components: {
      names: {
        body: "Body",
        button: "Button",
        column: "Column",
        oneColumn: "1 Column",
        twoColumn: "2 Columns",
        threeColumn: "3 Columns",
        divider: "Divider",
        group: "Group",
        hero: "Hero",
        image: "Image",
        navBar: "Navbar",
        navLink: "Navbar Link",
        section: "Section",
        socialGroup: "Group Social",
        socialElement: "Social Element",
        spacer: "Spacer",
        text: "Text",
        wrapper: "Wrapper",
        raw: "Raw"
      }
    }
  }
}, Ve = (e, a = {}) => {
  const t = {
    blocks: [
      "mj-1-column",
      "mj-2-columns",
      "mj-3-columns",
      "mj-text",
      "mj-button",
      "mj-image",
      "mj-divider",
      "mj-social-group",
      "mj-social-element",
      "mj-spacer",
      "mj-navbar",
      "mj-navbar-link",
      "mj-hero",
      "mj-wrapper",
      "mj-raw"
    ],
    block: () => ({}),
    codeViewerTheme: "hopscotch",
    importPlaceholder: "",
    imagePlaceholderSrc: "",
    overwriteExport: !0,
    preMjml: "",
    postMjml: "",
    resetBlocks: !0,
    resetStyleManager: !0,
    resetDevices: !0,
    hideSelector: !0,
    useXmlParser: !1,
    useCustomTheme: !0,
    columnsPadding: "10px 0",
    i18n: {},
    fonts: {},
    // Export 'mjml', 'html' or both (leave empty) TODO
    // exportOnly: '',
    ...a
  }, n = e.getConfig();
  if (n.forceClass = !1, n.devicePreviewMode = !0, n.avoidInlineStyle = !1, t.hideSelector) {
    const l = e.SelectorManager.getConfig();
    l.custom = !0;
  }
  if (t.useXmlParser && (e.Parser.getConfig().optionsHtml.htmlType = "text/xml"), t.useCustomTheme && typeof window < "u") {
    const l = "#2c2e35", i = "#888686", o = "#f45e43", m = "gjs-";
    let r = "";
    [
      ["one", l],
      ["two", i],
      ["four", o]
    ].forEach(([d, c]) => {
      r += `
        .${m}${d}-bg {
          background-color: ${c};
        }
        .${m}${d}-color {
          color: ${c};
        }
        .${m}${d}-color-h:hover {
          color: ${c};
        }
      `;
    });
    const s = document.createElement("style");
    s.innerText = r, document.head.appendChild(s);
  }
  e.I18n.addMessages({
    en: Le,
    ...t.i18n
  }), [K, ve, Me, He, we].forEach(
    (l) => l(e, t)
  );
};
export {
  Ve as default
};