const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jquery = require('jquery');

let $;
let dom;
beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><head></head><body>
    <div class="sticky-top"></div>
  </body></html>`,{
    runScripts: "dangerously",
    resources: "usable",
  });
  global.console = console;
  $ = jquery(dom.window);
});
test('scroll event adds shadow-sm class and sets top to 0px', () => {
    dom.window.pageYOffset = 301;
    $(dom.window).trigger($.Event('scroll'));
    expect($('.sticky-top').hasClass('shadow-sm')).toBe(false);
    expect($('.sticky-top').css('top')).not.toBe('-100px');
  });
  
  test('scroll event removes shadow-sm class and sets top to -100px', () => {
    dom.window.pageYOffset = 299;
    $(dom.window).trigger($.Event('scroll'));
    expect($('.sticky-top').hasClass('shadow-sm')).toBe(false);
    expect($('.sticky-top').css('top')).toBe('');
  });
  