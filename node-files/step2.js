const { default: axios } = require('axios');
const fs = require('fs');
const process = require('process');



/** read file at path and print it out. */
function cat(path){
  fs.readFile(path, 'utf8', function(err, data) {
    if (err){
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

/** read page at URL and print it out. */

async function webCat(url) {
  try{
      data = await axios.get(url);
      console.log(data)
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

path = process.argv[2];

if ( path.slice(0,4) === 'http') {
  webCat(path);
} else {
  cat(path);
}


