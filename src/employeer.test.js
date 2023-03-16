const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');


describe('Employeer module', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="bgf"></div> <div class="navbar"></div> <div class="nav-item"></div> <h1></h1> <h2></h2> <p></p><h3></h3> <div class="bgdark"></div> <div class="row"></div> <button type="button" class="loginbtn"></button> <body></body> <button id="darkBtn"></button> <button id="largeFont"></button>';
    require('./emloyeer.js')
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

test('Employeer dark mode test', () => {
    
    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(true);
    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("h3")[0].classList.contains("whitetext")).toBe(true);
    expect($("h2")[0].classList.contains("whitetext")).toBe(true);
    expect($(".row")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(true);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(false);

    expect($("body")[0].classList.contains("darkMode")).toBe(true);
  
   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("h3")[0].classList.contains("whitetext")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("bg-white")).toBe(false);
    expect($(".loginbtn")[0].classList.contains("btn-outline-dark")).toBe(true);
    expect($("h3")[0].classList.contains("whitetext")).toBe(false);
    expect($("h3")[0].classList.contains("text-black")).toBe(true);
    expect($("p")[0].classList.contains("text-black")).toBe(false);
    expect($(".row")[0].classList.contains("darkMode")).toBe(false);
    expect($(".bgdark")[0].classList.contains("bg-light")).toBe(true);
    expect($(".bgf")[0].classList.contains("darkMode")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);

  });

  test('Employer large text test', () => {
    const largeFont = document.getElementById('largeFont');

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(true);
    expect($("h1")[0].classList.contains("largerH")).toBe(true);

    largeFont.click();
    expect($("p")[0].classList.contains("largeFont")).toBe(false);
    expect($("h1")[0].classList.contains("largerH")).toBe(false);
  });


});

describe('changeVariable', () => {
  const {testDel,changeVariable } = require('./emloyeer.js');
  it('should set testDel to false', () => {
    changeVariable(false);
    expect(testDel).toBeFalsy();
  });
});


// describe('Test click event listener', () => {
//   let buttonE;
//   beforeEach(() => {
//     buttonE = document.createElement('button');
//     buttonE.id = 'YesDelete';
//     document.body.appendChild(buttonE);
//   });

//   afterEach(() => {
//     document.body.removeChild(buttonE);
//   });

//   it('should call the event listener when clicked', () => {
//     const spy = jest.spyOn(buttonE, 'addEventListener');

//     if (buttonE) {
//       buttonE.addEventListener('click', function () {});

//       expect(spy).toHaveBeenCalled();

//       spy.mockRestore();
//     }
//   });

//   it('should update the Ads status to false when clicked', () => {
//     const index = 0;

//     if (buttonE) {
//       buttonE.addEventListener("click", function () {});

//       var buttonD = document.getElementById("YesDelete");

//       if (buttonD) {
//         buttonD.addEventListener("click", function () {});

//         expect(testDel).toBeFalsy();      
//       }      
//     }    
//   });  
// });