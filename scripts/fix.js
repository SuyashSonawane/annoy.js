const fs = require('fs')

// remove the dist folder before building to avoid multiple files
// fs.rmdirSync('dist', { recursive: true })
let option = process.argv.slice(2);
if (option) {
    switch (option[0]) {
        case '1':
            console.log('Deleting dist & docs folder..')
            fs.rmdirSync('dist', { recursive: true })
            fs.rmdirSync('docs', { recursive: true })
            break
        case '2':
            fs.renameSync('dist', 'docs')
            break
        case '3':
            fs.mkdir("lib/css", () => {
                console.log("created directory")
                fs.copyFileSync("src/css/main.css", "lib/css/main.css")
            })
            break
    }
}
else {
    console.log("provide arguments")
}
