const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Index module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <p></p> <div class="container-xxl"></div> <div class="navbar"></div> <h3></h3> <p></p> <div class="nav-item"></div> <h1></h1> <h4></h4> <h5></h5> <div class="row"></div> <div class="bgf"></div> <div class="bgdark"></div> <div id="divDark"></div>  <body></body> <button id="darkBtn"></button> <a class="loginbtn"></a> <button id="largeFont"></button>';
    require('./index.js')
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('Index dark mode test', () => {
   
    
    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(true);
    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("h5")[0].classList.contains("whitetext")).toBe(true);
    expect($("p")[0].classList.contains("text-black")).toBe(false);
    expect($("p")[0].classList.contains("whitetext")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(false);

  
   darkBtn.click();
   expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("h5")[0].classList.contains("text-black")).toBe(false);
    expect($("p")[0].classList.contains("text-black")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(true);

  });

  test('Index large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
  });
});