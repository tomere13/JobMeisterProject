const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Signup module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="container"></div> <p></p> <div class="navbar"></div> <h3></h3> <p></p> <div class="nav-item"></div> <h1></h1> <h4></h4> <h5></h5> <h2></h2> <div class="row"></div> <div class="bgf"></div> <div class="bgdark"></div> <div id="divDark"></div>  <body></body> <button id="darkBtn"></button> <a class="loginbtn"></a> <button id="largeFont"></button> <div class="navG"></div> <div class="form-label"></div>';
    require('./signup.js')
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('Signup dark mode test', () => {
   
    
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
    expect($(".container")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgdark")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(false);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);

  
   darkBtn.click();
   expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("h5")[0].classList.contains("text-black")).toBe(false);
    expect($("p")[0].classList.contains("text-black")).toBe(true);
    expect($("p")[0].classList.contains("whitetext")).toBe(false);
    expect($(".container")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgdark")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(true);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);

  });

  test('Signup large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);
    expect($(".form-label")[0].classList.contains("largerH3")).toBe(true);
    expect($("h4")[0].classList.contains("largerH2")).toBe(true);
    expect($(".navG")[0].classList.contains("mediumFont")).toBe(true);
    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
    expect($(".form-label")[0].classList.contains("largerH3")).toBe(false);
    expect($("h4")[0].classList.contains("largerH2")).toBe(false);
    expect($("body")[0].classList.contains("largeFont")).toBe(false);
    expect($(".navG")[0].classList.contains("mediumFont")).toBe(false);
  });
});