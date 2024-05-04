const {
    createReadStream
} = require('fs');

const file = createReadStream(process.argv[2], { encoding: 'utf-8' });

file.on('readable', () => {
    
    let chunk;

    if((chunk = file.read()) !== null){
        console.log(chunk);
    }
    
})
