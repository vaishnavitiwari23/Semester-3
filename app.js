const fs=require('fs');
fs.writeFile('example.txt','Hello world!My name is Vaishnavi Tiwari',(err) => {
    if(err) throw err;
    console.log('file.created!');

    fs.readFile('example.txt','utf8',(err,data)=> {
        console.log('File.comntent:',data);

       
    });
});
 fs.writeFile('example.txt','Hello world!My name is Vaishnavi Tiwari and I am a student of B.Tech 2nd year',(err) => {
            if(err) throw err;
            console.log('File overwritten(updated!');
        });

        fs.appendFile('example.txt','I am learning Node.js',(err) => {
            if(err) throw err;
            console.log('File updated(append)!');
        });

        fs.unlink('example.txt',(err) => {
            if(err) throw err;
            console.log('File deleted!');
        });