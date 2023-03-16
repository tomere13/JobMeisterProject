const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Contact module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="navbar"></div> <div class="nav-item"></div> <h1></h1> <h4></h4> <div class="footS"></div> <body></body> <div id="bgHead"></div> <p></p>  <button id="darkBtn"></button> <button id="largeFont"></button>';
    require('./contact.js');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('Contact dark mode test', () => {
    

    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("h4")[0].classList.contains("whitetext")).toBe(true);

    expect($("body")[0].classList.contains("darkMode")).toBe(true);
    expect($(".footS")[0].classList.contains("bg-light")).toBe(false);
  
   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("h4")[0].classList.contains("whitetext")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);
    expect($(".footS")[0].classList.contains("bg-light")).toBe(true);
  });

  test('Contact large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
  });

});