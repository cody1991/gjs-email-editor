import type grapesjs from 'grapesjs';
import { PluginOptions } from '../types';
import { getI18nLabelFactory } from '../utils';

export default function (
  editor: grapesjs.Editor,
  opts: Required<PluginOptions>,
) {
  const bm = editor.Blocks;
  let tableStyleStr = '';
  let cellStyleStr = '';
  let tableStyle = opts.tableStyle || {};
  let cellStyle = opts.cellStyle || {};

  const addBlock = (id: string, blockDef: grapesjs.BlockOptions) => {
    opts.blocks.indexOf(id)! >= 0 &&
      editor.Blocks.add(id, {
        select: true,
        ...blockDef,
        ...opts.block(id),
      });
  };

  const getI18nLabel = getI18nLabelFactory(editor, 'blocks.names');

  for (let prop in tableStyle) {
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle) {
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }

  console.log(getI18nLabel('wrapper'));
  addBlock('wrapper', {
    label: getI18nLabel('wrapper'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="4.5" y="9.5" width="37" height="27" rx="1.5"/>
    </svg>`,
    content: `
    <table style="min-height:100px;width:100%;max-width:700px;margin-left:auto;margin-right:auto">
      <tr>
        <td></td>
      </tr>
    </table>
  `,
    // content: {
    //   editable: false,
    //   droppable: true,
    //   style: {
    //     'min-height': '100px',
    //     width: '700px',
    //     'margin-left': 'auto',
    //     'margin-right': 'auto',
    //   },
    // },
  });

  addBlock('sect100', {
    label: getI18nLabel('1 Section'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="4.5" y="9.5" width="37" height="27" rx="1.5"/>
    </svg>`,
    content: `
      <table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect50', {
    label: getI18nLabel('1/2 Section'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="2.5" y="9.5" width="19" height="27" rx="1.5"/>
      <rect fill="white" stroke="#333" x="24.5" y="9.5" width="19" height="27" rx="1.5"/>
    </svg>`,
    content: `
      <table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 50%"></td>
          <td style="${cellStyleStr} width: 50%"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect30', {
    label: getI18nLabel('1/3 Section'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x=".5" y="9.5" width="13" height="27" rx="1.5"/>
      <rect fill="white" stroke="#333" x="16.5" y="9.5" width="13" height="27" rx="1.5"/>
      <rect fill="white" stroke="#333" x="32.5" y="9.5" width="13" height="27" rx="1.5"/>
    </svg>`,
    content: `
      <table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect37', {
    label: getI18nLabel('3/7 Section'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333"x="8" y="9.5" width="9" height="27" rx="1.5"/>
      <rect fill="white" stroke="#333"x="20" y="9.5" width="19" height="27" rx="1.5"/>
      </svg`,
    content: `
      <table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width:30%"></td>
          <td style="${cellStyleStr} width:70%"></td>
        </tr>
      </table>
    `,
  });

  addBlock('button', {
    label: getI18nLabel('Button'),
    media: `<svg viewBox="0 0 46 46">
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M8 10H37C37.5523 10 38 10.4477 38 11V23H39V11C39 9.89543 38.1046 9 37 9H8C6.89543 9 6 9.89543 6 11V35C6 36.1046 6.89543 37 8 37H23V36H8C7.44772 36 7 35.5523 7 35V11C7 10.4477 7.44772 10 8 10Z"/>
      <path fill="#333" d="M36.6464 37.3536C36.8417 37.5488 37.1583 37.5488 37.3536 37.3536C37.5488 37.1583 37.5488 36.8417 37.3536 36.6464L36.6464 37.3536ZM26 25.5C25.7239 25.5 25.5 25.7239 25.5 26V30.5C25.5 30.7761 25.7239 31 26 31C26.2761 31 26.5 30.7761 26.5 30.5V26.5H30.5C30.7761 26.5 31 26.2761 31 26C31 25.7239 30.7761 25.5 30.5 25.5H26ZM37.3536 36.6464L26.3536 25.6464L25.6464 26.3536L36.6464 37.3536L37.3536 36.6464Z"/>
    </svg>`,
    content:
      '<table style="width: 100%;padding:10px 25px;"><tr><td style="text-align: center;"><a class="button" style="display: inline-block; background: #e7faf5;color: #14CC97;font-family: Ubuntu, Helvetica, Arial, sans-serif;font-size: 13px;font-weight: 400;line-height: 120%;margin: 0;text-decoration: none;text-transform: none;padding: 10px 25px;border-radius: 4px;">Button</a></td></tr></table>',
  });

  addBlock('divider', {
    label: getI18nLabel('Divider'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="6.5" y="12.5" width="33" height="21" rx="1.5"/>
      <path stroke="#333" d="M7 9L40 9" stroke-linecap="round"/>
      <path stroke="#333" d="M6 37L39 37" stroke-linecap="round"/>
    </svg>`,
    content: `
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
    `,
  });

  addBlock('text', {
    label: getI18nLabel('Text'),
    media: `<svg viewBox="0 0 46 46">
      <path fill="white" stroke="#333" d="M19.5972 11.1586C19.6545 10.6619 19.6545 10.6619 19.6544 10.6618L19.6542 10.6618L19.6535 10.6618L19.6513 10.6615L19.6428 10.6605L19.6109 10.657C19.5831 10.6539 19.5425 10.6495 19.4904 10.6441C19.3861 10.6333 19.2357 10.6183 19.0495 10.6016C18.6775 10.5681 18.1615 10.5275 17.5855 10.499C16.4499 10.4427 15.0241 10.4298 14.0197 10.6343C12.9749 10.8463 11.6053 11.5661 10.4359 12.6503C9.35106 13.6562 8.39564 15.0156 8.04095 16.648L7.5 16.6623V8.5H39.5V16.7893H38.8451C38.7604 16.6297 38.6396 16.4086 38.4868 16.1447C38.1677 15.5937 37.7062 14.8518 37.1377 14.0918C36.5706 13.3338 35.8879 12.5453 35.1241 11.9101C34.3638 11.278 33.4904 10.7703 32.5439 10.6277C30.8677 10.3752 29.4458 10.3356 28.4401 10.3595C27.9371 10.3715 27.5377 10.3993 27.262 10.4244C27.1241 10.437 27.0172 10.4489 26.9436 10.4578C26.9068 10.4623 26.8783 10.466 26.8585 10.4687L26.8354 10.4719L26.8287 10.4728L26.8266 10.4731L26.8259 10.4733L26.8256 10.4733C26.8255 10.4733 26.8254 10.4733 26.8992 10.9679L26.8254 10.4733L26.3999 10.5368L26.3992 10.967L26.3581 34.6498L26.3578 34.7828L26.4236 34.8983L26.8581 34.6507C26.4236 34.8983 26.4237 34.8984 26.4238 34.8986L26.424 34.8989L26.4245 34.8997L26.4256 34.9017L26.429 34.9076L26.4399 34.9259C26.4489 34.941 26.4616 34.9617 26.4779 34.9874C26.5103 35.0386 26.5572 35.1097 26.618 35.1942C26.7389 35.3627 26.9175 35.5886 27.1496 35.8196C27.6055 36.2736 28.3159 36.794 29.2382 36.8636L29.2569 36.865H29.2758H32.1081V37.5H14.9084L14.9272 36.8179L17.366 36.7857L17.4268 36.7849L17.4857 36.7695L17.3594 36.2857C17.4857 36.7695 17.4858 36.7695 17.486 36.7694L17.4863 36.7693L17.4872 36.7691L17.4895 36.7685L17.4964 36.7666L17.5194 36.7603C17.5387 36.7549 17.5656 36.7471 17.5992 36.7368C17.6663 36.7164 17.7602 36.6862 17.8722 36.6456C18.0945 36.565 18.3958 36.4409 18.7012 36.2683C19.2692 35.9473 20.051 35.343 20.051 34.3807C20.051 33.716 20.0626 27.9114 20.0741 22.2716L20.09 14.6009L20.0953 12.1029L20.0967 11.4058L20.0971 11.2225L20.0972 11.1755L20.0972 11.1636L20.0972 11.1606L20.0972 11.1599C20.0972 11.1597 20.0972 11.1596 19.5972 11.1586ZM19.5972 11.1586L19.6545 10.6619L20.0982 10.713L20.0972 11.1596L19.5972 11.1586Z"/>
    </svg>`,
    activate: true,
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: { padding: '10px' },
    },
  });

  // editor.Blocks.add('placeholder', {
  //   label: getI18nLabel('placeholder'),
  //   content: { type: 'placeholder' },
  //   media: `<svg viewBox="0 0 24 24">
  //   <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
  // </svg>`,
  //   select: true,
  // });

  addBlock('text-sect', {
    label: getI18nLabel('Text Section'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="4.5" y="9.5" width="37" height="27" rx="1.5"/>
      <path stroke="#333" d="M11 19L35 19" stroke-linecap="round"/>
      <path stroke="#333" d="M11 27H29" stroke-linecap="round"/>
    </svg>`,
    content: `
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
    `,
  });

  addBlock('image', {
    label: getI18nLabel('Image'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="2.90234" y="9.5" width="39.1935" height="27" rx="1.5"/>
      <path fill="white" stroke="#333" d="M12.338 13.564480000000001A3.56452 3.56452 0 1 0 12.338 20.69352A3.56452 3.56452 0 1 0 12.338 13.564480000000001Z"/>
      <path fill="white" stroke="#333" stroke-linecap="round" d="M3.30664 28.2262C6.03398 26.4608 12.1984 24.3842 16.645 28.841C17.2008 29.3981 18.2167 29.2835 18.5969 28.5946C21.5886 23.1745 29.2433 16.3513 41.6937 23.1142"/>
    </svg>`,
    activate: true,
    content: {
      type: 'image',
      style: { color: 'black', 'max-width': '100%' },
    },
  });

  addBlock('quote', {
    label: getI18nLabel('Quote'),
    media: `<svg viewBox="0 0 46 46">
      <path fill="#333"fill-rule="evenodd" clip-rule="evenodd" d="M8 10H25.6562C26.2085 10 26.6562 10.4477 26.6562 11V28C26.6562 28.5523 26.2085 29 25.6562 29H20.4375V30H25.6562C26.7608 30 27.6562 29.1046 27.6562 28V11C27.6562 9.89543 26.7608 9 25.6562 9H8C6.89543 9 6 9.89543 6 11V28C6 29.1046 6.89543 30 8 30H13.2188V29H8C7.44772 29 7 28.5523 7 28V11C7 10.4477 7.44772 10 8 10Z"/>
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M24 16H19.3438C18.2392 16 17.3438 16.8954 17.3438 18V35C17.3438 36.1046 18.2392 37 19.3438 37H37C38.1046 37 39 36.1046 39 35V18C39 16.8954 38.1046 16 37 16H32V17H37C37.5523 17 38 17.4477 38 18V35C38 35.5523 37.5523 36 37 36H19.3438C18.7915 36 18.3438 35.5523 18.3438 35V18C18.3438 17.4477 18.7915 17 19.3438 17H24V16Z"/>
    </svg>`,
    content:
      '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
  });

  addBlock('link', {
    label: getI18nLabel('Link'),
    media: `<svg viewBox="0 0 46 46">
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M24.8321 18.291C22.2781 17.1082 19.1977 18.0501 17.7632 20.5347L13.7508 27.4844C12.232 30.115 13.1333 33.4788 15.7639 34.9976C18.3945 36.5163 21.7583 35.615 23.277 32.9844L26.1594 27.9919C26.0094 27.9225 25.8612 27.8456 25.7152 27.7614C25.5693 27.6771 25.4286 27.5871 25.2934 27.4919L22.411 32.4844C21.1684 34.6367 18.4162 35.3742 16.2639 34.1315C14.1116 32.8889 13.3741 30.1367 14.6168 27.9844L18.6292 21.0347C19.7873 19.0288 22.2567 18.2518 24.3296 19.1614L24.8321 18.291Z"/>
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M20.9311 17.046L23.1151 13.2631C24.3578 11.1108 27.1099 10.3734 29.2623 11.616C31.4146 12.8587 32.152 15.6108 30.9094 17.7631L28.0787 22.6659C26.9206 24.6719 24.4513 25.4489 22.3784 24.5393L21.8758 25.4097C24.4298 26.5925 27.5102 25.6506 28.9448 23.1659L31.7754 18.2631C33.2942 15.6325 32.3929 12.2688 29.7623 10.75C27.1316 9.23122 23.7679 10.1325 22.2491 12.7631L20.0651 16.546C20.2151 16.6155 20.3633 16.6923 20.5093 16.7766C20.6553 16.8609 20.7959 16.9508 20.9311 17.046Z"/>
    </svg>`,
    content: {
      type: 'link',
      content: 'Link',
      style: { color: '#3b97e3' },
    },
  });

  addBlock('link-block', {
    label: getI18nLabel('Link Block'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="9" y="9.5" width="27" height="27" rx="1.5"/>
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M24.1939 19.906C22.2776 19.0169 19.9653 19.7233 18.8888 21.5879L15.879 26.8011C14.7397 28.7744 15.4158 31.2976 17.3891 32.4369C19.3624 33.5762 21.8856 32.9001 23.0249 30.9268L25.1876 27.1809C25.0759 27.1291 24.9655 27.0719 24.8569 27.0092C24.672 26.9024 24.4986 26.7836 24.337 26.6542L22.1589 30.4268C21.2957 31.9218 19.3841 32.434 17.8891 31.5709C16.3941 30.7077 15.8819 28.7961 16.745 27.3011L19.7548 22.0879C20.555 20.702 22.2562 20.1607 23.6912 20.7767L24.1939 19.906Z"/>
      <path fill="#333" fill-rule="evenodd" clip-rule="evenodd" d="M21.4763 19.12L23.1299 16.2559C23.993 14.7609 25.9047 14.2486 27.3997 15.1118C28.8947 15.9749 29.4069 17.8866 28.5438 19.3816L26.4204 23.0593C25.6207 24.4445 23.9207 24.986 22.4861 24.3714C22.4802 24.3817 22.4743 24.392 22.4684 24.4023L21.9835 25.2422C23.8994 26.1298 26.2103 25.4232 27.2865 23.5593L29.4098 19.8816C30.5491 17.9083 29.873 15.385 27.8997 14.2457C25.9264 13.1065 23.4032 13.7826 22.2639 15.7559L20.6254 18.5937C20.7378 18.6458 20.8489 18.7034 20.9583 18.7665C21.1424 18.8728 21.3152 18.9911 21.4763 19.12Z"/>
    </svg>`,
    content: {
      type: 'link',
      editable: false,
      droppable: true,
      style: {
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px',
      },
    },
  });

  const gridItem = `<table class="grid-item-card">
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
    </table>`;

  addBlock('grid-items', {
    label: getI18nLabel('Grid Items'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="#fff" stroke="#333" x="16.5547" y="9.5" width="18.4444" height="20" rx="1.5"/>
      <rect fill="#fff" stroke="#333" x="11" y="16.5" width="18.4444" height="20" rx="1.5"/>
      <path stroke="#333" stroke-linecap="round" d="M11 23.5H29"/>
      <path stroke="#333" stroke-linecap="round" d="M13 20.5H20.5"/>
      <path stroke="#333" fill="#fff" d="M25.5 18.5A1.5 1.5 0 1 0 25.5 21.5A1.5 1.5 0 1 0 25.5 18.5Z"/>
    </svg>`,
    content: `
      <table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${gridItem}</td>
          <td class="grid-item-cell2-r">${gridItem}</td>
        </tr>
      </table>
    `,
  });

  const listItem = `<table class="list-item">
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
    </table>`;

  addBlock('list-items', {
    label: getI18nLabel('List Items'),
    media: `<svg viewBox="0 0 46 46">
      <rect fill="white" stroke="#333" x="11.5" y="9.5" width="23" height="27" rx="1.5"/>
      <path stroke="#333" stroke-linecap="round" d="M21 17L31 17"/>
      <rect fill="#333" x="15" y="16" width="2" height="2" rx="1"/>
      <path stroke="#333" stroke-linecap="round" d="M21 23L31 23"/>
      <rect fill="#333" x="15" y="22" width="2" height="2" rx="1"/>
      <path stroke="#333" stroke-linecap="round" d="M21 29L31 29"/>
      <rect fill="#333" x="15" y="28" width="2" height="2" rx="1"/>
    </svg>`,
    content: listItem + listItem,
  });
}
