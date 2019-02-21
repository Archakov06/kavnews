import unirest from "unirest";
import cheerio from "cheerio";
var iconv = require("iconv-lite");

async function parsePost(url, elems) {
  return new Promise(async (resolve, reject) => {
    await unirest.get(url).end(({ body, error }) => {
      const $ = cheerio.load(body);

      const domain = url.match(/\/\/(.*?)\//)[1];
      const title = $(elems.title)
        .text()
        .trim();
      let image = $(elems.image).attr("src");
      image = image.indexOf("http") >= 0 ? image : `http://${domain}${image}`;
      let text = $(elems.text)
        .text()
        .trim();
      const views = $(elems.views)
        .text()
        .trim();

      // text = new Buffer(text, "binary");
      text = iconv.encode(iconv.decode(text, "cp1251"), "utf8").toString();

      const post = {
        title: title,
        image: image,
        text: text,
        views: views
      };

      if (error) {
        return reject(error);
      }

      resolve(post);
    });
  });
}

export default parsePost;
