const fs = require("fs")

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    // renaming gba files that had no extension
    if (!(/\.[a-zA-Z]{3}$/.test(file))) {
      const newname = file + '.gba'
      fs.rename('./' + file, newname, (err) => {
        if (err) throw err;
        console.log('renamed ', file, ' to ', newname)
      })
    }
    // removes apostrophes from filenames
    // if (file.match(/'/)) {
    //   let newname = file.split("'").join("");
    //   fs.rename("./" + file, newname, err => {
    //     if (err) throw err;
    //     console.log("renamed ", file, " to ", newname);
    //   });
    // }
  });
});
