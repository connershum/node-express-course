// started operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
}, 0) // done last even though time is set to 0
console.log('third')
// completed and exited operating system process