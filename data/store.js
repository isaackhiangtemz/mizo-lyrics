const fs=require("fs"); const path=require("path"); const file=path.join(__dirname,"songs.json");
function readSongs(){return JSON.parse(fs.readFileSync(file,"utf8"));}
function writeSongs(songs){const tmp=file+".tmp";fs.writeFileSync(tmp,JSON.stringify(songs,null,2),"utf8");fs.renameSync(tmp,file);}
module.exports={readSongs,writeSongs};