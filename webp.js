const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(['src/work/assets/*.{jpg,png}'], {
  destination: __dirname + '/src/work/assets/webp/',
  plugins: [
    webp({
      quality: 75
    })
  ]
}).then(() => {
  console.log('Images optimized');
});