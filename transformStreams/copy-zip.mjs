import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const [,,src, dest] = process.argv;

const sourceStream = createReadStream(src);
const destinationStream = createWriteStream(dest);
const gzipStream = createGzip();

sourceStream.on('data', (chunk) => {
    const canContinue = gzipStream.write(chunk);

    if(!canContinue){
        sourceStream.pause();
        gzipStream.once('drain', () => sourceStream.resume());
    }

}); 

gzipStream.on('data', (chunk) => {

    const canContinue = destinationStream.write(chunk);

    if(!canContinue){
        gzipStream.pause();
        destinationStream.once('drain', () => gzipStream.resume());
    }

});

sourceStream.on('end', () => {

    const remaingData = gzipStream.read();

    if(remaingData !== null){
        destinationStream.write(remaingData);
    }

    gzipStream.end();
});

gzipStream.on('end', () => destinationStream.end());