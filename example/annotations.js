import objectAssign from 'object-assign';
import uuid from '../src/utils/uuid';

const template = {
  class: 'Annotation',
  uuid: uuid(),
  page: 1,
  owner: 'admin'
};

let create = (type, def = {}) => objectAssign({}, template, {type}, def);

let createText = (x, y, content) => create('textbox', {
  x,
  y,
  width: 100,
  height: 50,
  size: 20,
  color: '000',
  content
});

let createLabel = (y, content) => createText(25, y, content);

export default [
  createLabel(175, 'Highlight:'),
  create('highlight', {
    color: 'FFFF00',
    rectangles: [{
      x: 125,
      y: 150,
      width: 275,
      height: 40
    }]
  }),
  createText(125, 175, 'Highlight this text so it stands out'),
  
  createLabel(250, 'Area:'),
  createText(125, 250, 'I\'m the text in the box'),
  create('area', {
    x: 125,
    y: 225,
    width: 175,
    height: 40
  }),
  
  createLabel(325, 'Strikeout:'),
  createText(125, 325, 'Text to be struck from the record'),
  create('strikeout', {
    color: 'FF0000',
    rectangles: [{
      x: 125,
      y: 320,
      width: 270,
      height: 1
    }],
  }),

  createLabel(400, 'Textbox:'),
  create('textbox', {
    x: 125,
    y: 400,
    width: 50,
    height: 100,
    size: 20,
    color: '000000',
    content: 'Custom text that has been provided by user'
  }),

  createLabel(475, 'Point:'),
  create('point', {
    x: 125,
    y: 460
  }),
  
  createLabel(550, 'Drawing:'),
  create('drawing', {
    color: '000000',
    x: 100,
    y: 50,
    lines: [[244, 561],[244, 560],[243, 559],[242, 559],[242, 557],[241, 556],[241, 556],[241, 555],[241, 554],[240, 553],[239, 552],[239, 552],[237, 552],[237, 551],[237, 550],[235, 550],[235, 548],[234, 547],[233, 547],[231, 547],[230, 546],[228, 544],[228, 544],[226, 544],[225, 543],[224, 543],[223, 542],[222, 542],[221, 541],[220, 541],[218, 541],[217, 541],[216, 541],[214, 541],[213, 541],[212, 540],[211, 540],[209, 540],[208, 540],[205, 540],[205, 540],[202, 540],[201, 540],[198, 540],[197, 540],[195, 540],[194, 540],[192, 540],[191, 540],[190, 540],[189, 540],[186, 541],[185, 541],[184, 542],[183, 542],[181, 543],[180, 543],[179, 544],[177, 544],[176, 544],[174, 546],[174, 547],[174, 548],[173, 549],[172, 549],[172, 550],[171, 551],[170, 551],[169, 552],[167, 553],[167, 554],[165, 556],[164, 557],[162, 558],[161, 560],[159, 561],[159, 563],[156, 564],[154, 566],[153, 566],[152, 568],[151, 569],[151, 570],[151, 571],[151, 572],[151, 573],[151, 574],[151, 575],[151, 576],[151, 577],[151, 579],[151, 580],[151, 581],[151, 583],[151, 584],[152, 585],[152, 587],[152, 588],[157, 600],[157, 603],[159, 606],[162, 611],[163, 614],[165, 615],[167, 619],[168, 620],[171, 622],[174, 625],[175, 625],[175, 626],[177, 626],[177, 626],[180, 626],[182, 626],[183, 626],[186, 626],[188, 628],[191, 628],[192, 628],[195, 628],[197, 628],[200, 628],[203, 628],[208, 630],[211, 631],[214, 631],[217, 631],[220, 633],[224, 634],[225, 634],[230, 636],[233, 636],[237, 637],[240, 639],[243, 639],[247, 642],[250, 643],[254, 646],[257, 648],[260, 651],[262, 653],[263, 653],[265, 656],[268, 657],[270, 659],[271, 661],[273, 663],[276, 666],[277, 668],[279, 670],[280, 672],[281, 674],[282, 676],[282, 677],[283, 679],[283, 681],[283, 683],[283, 685],[283, 687],[283, 689],[283, 691],[283, 693],[283, 694],[283, 697],[283, 698],[283, 699],[283, 701],[283, 702],[283, 704],[282, 705],[282, 706],[280, 708],[280, 708],[280, 709],[280, 710],[278, 711],[277, 712],[274, 715],[272, 717],[269, 718],[268, 719],[266, 720],[265, 722],[262, 723],[260, 725],[257, 726],[254, 727],[251, 728],[247, 729],[243, 731],[239, 731],[236, 731],[231, 732],[227, 732],[223, 732],[219, 732],[214, 732],[213, 732],[207, 732],[203, 732],[200, 732],[196, 732],[193, 732],[191, 732],[188, 732],[187, 731],[185, 731],[183, 731],[182, 731],[179, 729],[177, 729],[177, 728],[176, 727],[174, 727],[174, 726],[173, 725],[172, 725],[172, 724],[171, 722],[171, 722],[169, 722],[169, 720],[168, 720],[167, 719],[167, 717],[166, 716],[166, 714],[166, 713],[165, 711],[165, 710],[165, 708],[165, 707],[165, 706],[165, 705],[165, 704],[165, 702],[165, 702],[165, 700],[165, 699],[165, 698],[165, 697],[165, 696],[165, 695],[165, 692],[165, 691],[165, 690],[165, 689],[165, 688],[165, 687],[165, 685],[165, 685],[165, 684],[165, 682],[165, 682],[165, 680],[165, 679],[165, 678],[165, 678],[165, 676],[165, 676],[166, 675],[166, 674],[166, 673],[168, 673],[168, 672],[168, 671],[169, 670],[169, 669],[169, 668],[170, 667],[172, 667],[172, 666],[174, 664],[175, 663],[176, 661],[177, 660],[178, 660],[179, 658],[180, 657],[180, 656],[181, 655],[182, 654],[183, 653],[183, 652],[184, 650],[185, 650],[186, 649],[186, 648],[186, 647],[186, 646],[187, 644],[189, 643],[189, 642],[192, 640],[192, 639],[194, 639],[198, 637],[200, 637],[206, 634],[209, 632],[213, 631],[215, 629],[217, 628],[221, 626],[224, 626],[226, 625],[229, 623],[232, 623],[235, 621],[238, 620],[240, 620],[242, 619],[244, 617],[246, 617],[247, 616],[249, 615],[250, 615],[252, 615],[252, 614],[254, 612],[255, 612],[256, 611],[256, 610],[258, 610],[258, 609],[259, 608],[260, 607],[260, 606],[262, 606],[262, 605],[262, 604],[262, 603],[262, 603],[262, 602],[262, 601],[262, 600],[262, 599],[262, 598],[262, 597],[262, 596],[262, 595],[262, 594],[262, 593],[262, 592],[262, 592],[262, 590],[262, 589],[264, 587],[264, 587],[264, 586],[264, 585],[264, 582],[264, 581],[263, 581],[263, 579],[263, 579],[262, 579],[262, 578],[262, 576],[262, 576],[262, 575],[261, 574],[261, 573],[260, 572],[260, 571],[260, 570],[258, 570],[258, 569],[257, 568],[256, 567],[256, 566],[255, 566],[255, 566],[253, 566],[252, 565],[251, 565],[251, 564],[250, 564],[250, 563],[249, 563],[249, 562],[248, 562],[248, 561],[248, 561],[248, 560],[247, 560],[247, 559],[246, 559],[246, 557],[245, 557],[245, 557],[245, 557],[245, 556]]
  })
];
