import fs from 'fs'
import http from 'http'

const server = http.createServer();

server.on('request', (req, res)=>{
    // fs.readFile('./new.txt', (err, data)=>{
    //     if(err) return console.error(err)
    //     res.end(data.toString())
    // })
    //2nd method so we can stream
    // const rstream = fs.createReadStream('./new.txt');
    // // using am event,, 'data' is mathod here.. when its ready it will send chunk by chunk 
    // rstream.on('data', (chunkData)=>{
    //       res.write(chunkData); 
    // })
    // //when data is over we end the stream
    // rstream.on('end', ()=>{
    //     res.end()
    // })
    // //if error
    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end("file not found")
    // })
    //3rd way stream PIPe which is best
    const rstream = fs.createReadStream('./new.txt');
    rstream.pipe(res)

})

server.listen(8000, '127.0.0.1')

// BASICALL STREAM HAS FOUR MATHODS WHICH IS 
//DATA - END - ERROR - FINISH