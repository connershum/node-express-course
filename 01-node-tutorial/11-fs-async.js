const {readFile, writeFile} = require('fs');

console.log('start')
// callback functions
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result ${first}, ${second}`,
        (err, result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
// prints 'start' then 'starting next task' before 'done' - offloads this task, allowing application to serve other users while task is being done elsewhere