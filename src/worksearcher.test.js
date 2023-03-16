const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Work searcher module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="row"></div> <div class="bgdark"></div> <p></p> <div class="bgf"></div> <div class="navbar"></div> <h3></h3> <p></p> <div class="nav-item"></div> <h1></h1> <h4></h4>  <div class="row"></div> <div class="bgf"></div> <div class="bgdark"></div> <div id="divDark"></div> <h5></h5> <body></body> <button id="darkBtn"></button> <button id="largeFont"></button> <a class="loginbtn"></a>';
    require('./worksearcher')
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('worksearcher dark mode test', () => {
   
    
    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(true);

    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("h3")[0].classList.contains("text-black")).toBe(false);
    expect($("h3")[0].classList.contains("whitetext")).toBe(true);

    expect($("p")[0].classList.contains("text-white")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);

    expect($(".row")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(false);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(true);
    

  
   darkBtn.click();
   expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(false);

    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("h3")[0].classList.contains("text-black")).toBe(true);
    expect($("h3")[0].classList.contains("whitetext")).toBe(false);

    expect($("p")[0].classList.contains("text-white")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);

    expect($(".row")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(true);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(false);
  });

  test('worksearcher large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
  });
});