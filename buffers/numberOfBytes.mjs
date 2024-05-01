import {
    createReadStream
} from 'fs'

async function countBytes(srcStream){
    return new Promise((resolve, reject) => {
        let bytes = 0;

        srcStream.on('error', (error) => reject(error))
        srcStream.on('data', (chunk) => bytes += chunk.length)
        srcStream.on('end', () => resolve(bytes))
    })
}

const [,, src] = process.argv;

const readStream = createReadStream(src);
const numberOfBytes = await countBytes(readStream);

console.log(`The file ${src} have ${numberOfBytes} bytes`)