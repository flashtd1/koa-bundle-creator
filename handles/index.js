const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const inputPath = '../input/'
const outputPath = '../output/'

const input = (body) => {
    const currentPath = Date.now()
    const folderPath = `${path.join(__dirname, inputPath)}/${currentPath}`
    const output = `${path.join(__dirname, outputPath)}/${currentPath}`
    console.log(output)
    fs.mkdirSync(folderPath)
    fs.mkdirSync(output)
    let filename = 'main.bundle.js'
    let inputFilename = `${folderPath}/test.js`
    let script = `window.bundletest = ${body}`
    fs.writeFileSync(inputFilename, script)
    return new Promise((resolve) => {
        webpack({
            entry: inputFilename,
            output: {
                filename: '[name].bundle.js',
                path: output
            }
        }, (err, stats) => {
            if (err) {
                console.error(err)
                return ;
            }
    
            console.log(stats.toString())
            resolve({currentPath, filename})
        })
    })
    
}

module.exports = {
    input
}