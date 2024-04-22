import fs from "fs"
import path from "path"

// console.log(fs)
const folderlocation = 'D:\\WEB DEV\\PRACTICE\\clear clutter'

let AllFiles =  fs.readdirSync(folderlocation)
// console.log(AllFiles)

for (const i of AllFiles) {
    const ext = i.split(".")[i.split(".").length - 1]
    // console.log(ext)
    if(ext !== 'js' && ext !== 'json' && i !== ext){
        if (!fs.existsSync(ext)){
            fs.mkdirSync(ext)
            fs.renameSync(path.join(folderlocation, i), path.join(folderlocation , ext , i))
        }
        else {
            fs.renameSync(path.join(folderlocation, i), path.join(folderlocation , ext , i))
        }
    }
}

