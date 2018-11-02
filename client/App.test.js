import App from './App.js'

test('App Component test should exist',()=>{
    expect(true).toBeTruthy();
});

test('Should be able to connect to App.js and get access to App component',()=>{
    expect(App).toBeDefined();
});