const fs = require("fs")

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    if (file.match(/'/)) {
      let newname = file.split("'").join("");
      fs.rename("./" + file, newname, err => {
        if (err) throw err;
        console.log("renamed ", file, " to ", newname);
      });
    }
  });
});
