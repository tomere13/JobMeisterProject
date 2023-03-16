const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');

describe('Favorites module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="footer"></div> <div class="card"></div> <p></p> <div class="container-xxl"></div> <div class="navbar"></div> <h3></h3> <p></p> <div class="nav-item"></div> <h1></h1> <h4></h4>  <div class="row"></div> <div class="bgf"></div> <div class="bgdark"></div> <div id="divDark"></div> <h5></h5> <body></body> <button id="darkBtn"></button> <button id="largeFont"></button> <a class="loginbtn"></a>';
    require('./favorites')
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('favorites dark mode test', () => {
   
    
    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(true);
    expect($("#divDark")[0].classList.contains("bg-light")).toBe(false);

    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("p")[0].classList.contains("text-white")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);

    expect($(".card")[0].classList.contains("bg-dark")).toBe(true);
    expect($(".footer")[0].classList.contains("bg-white")).toBe(false);
    expect($("h5")[0].classList.contains("whitetext")).toBe(true);
    

  
   darkBtn.click();
   expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(false);
    expect($("#divDark")[0].classList.contains("bg-light")).toBe(true);

    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("p")[0].classList.contains("text-white")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);

    expect($(".card")[0].classList.contains("bg-dark")).toBe(false);
    expect($(".footer")[0].classList.contains("bg-white")).toBe(true);
    expect($("h5")[0].classList.contains("whitetext")).toBe(false);

  });

  test('favorites large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
  });
});