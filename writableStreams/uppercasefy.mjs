import { createServer } from 'http'

const PORT = 8080;

function handleError(stream){
  stream.on('error', (error) => {
    console.log(error)
    process.exitCode = 1;
  })
}

const server = createServer((req, res) => {
  req.on('data', (chunk) => {
      const canContinue = res.write(chunk.toString().toUpperCase());

      if(!canContinue){
          req.pause();

          res.once('drain', () => req.resume());
      }
  });

  handleError(req);
  handleError(res);

  req.on('end', () => res.end());
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})