const {
    readFile,
    writeFile
} = require('fs/promises');

async function copyFile(src, dest){
    const content = await readFile(src);

    return writeFile(dest, content);
}

const [,,src, dest] = process.argv;

copyFile(src, dest)
    .then(() => console.log(`${src} copied into ${dest}`))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })