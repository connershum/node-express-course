// GLOBALS (NO WINDOW OBJECT) (these are just a few, there are many more):
// __dirname  - path to current directory
// __filename - file name
// require   - function to use modules (CommonJS)
// module    - info abount current module (file)
// process   - info abount env where the program is being executed (very useful)
 
console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)
