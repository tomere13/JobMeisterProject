const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Admin module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="body"></div> <p></p> <div class="buttonadmin"></div> <div class="buttonadmin2"></div> <div id="editNow"></div> <div id="pagesDark"></div> <div id="adminDark"></div> <button id="largeFont"></button> <button id="darkBtn"></button> <h1></h1> <div class=navG></div> <h3></h3> <div id="RealAbout"></div>';
    require('./admin.js');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Admin dark mode test', () => {
    const darkBtn = document.getElementById('darkBtn');

    darkBtn.click();
    expect($("#body")[0].classList.contains("darkMode")).toBe(true);
    expect($("p")[0].classList.contains("bg-white")).toBe(false);
    expect($(".buttonadmin")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".buttonadmin")[0].classList.contains("btn-outline-white")).toBe(true);
    expect($(".buttonadmin2")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".buttonadmin2")[0].classList.contains("btn-outline-white")).toBe(true);
    expect($("#editNow")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($("#editNow")[0].classList.contains("btn-outline-white")).toBe(true);
    expect($("p")[0].classList.contains("border-dark")).toBe(false);
    expect($("#body")[0].classList.contains("bg-gray-200")).toBe(false);
    expect($("#pagesDark")[0].classList.contains("text-white")).toBe(true);
    expect($("#adminDark")[0].classList.contains("text-white")).toBe(true);

    darkBtn.click();
    expect($("#body")[0].classList.contains("darkMode")).toBe(false);
    expect($("#RealAbout")[0].classList.contains("bg-white")).toBe(false);
    expect($("p")[0].classList.contains("bg-white")).toBe(true);
    expect($("p")[0].classList.contains("border-dark")).toBe(true);
    expect($(".buttonadmin")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".buttonadmin")[0].classList.contains("btn-outline-white")).toBe(false);
    expect($(".buttonadmin2")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".buttonadmin2")[0].classList.contains("btn-outline-white")).toBe(false);
    expect($("#editNow")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($("#editNow")[0].classList.contains("btn-outline-white")).toBe(false);
    expect($("#body")[0].classList.contains("bg-gray-200")).toBe(true);
    expect($("#pagesDark")[0].classList.contains("text-white")).toBe(false);
    expect($("#adminDark")[0].classList.contains("text-white")).toBe(false);
  });

  test('Admin large text test', () => {
    const largeFont = document.getElementById('largeFont');
    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
    expect($("body")[0].classList.contains("largeFont")).toBe(false);
    expect($(".navG")[0].classList.contains("mediumFont")).toBe(false);
  });
});
