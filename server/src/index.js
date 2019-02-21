import configs from './configs';
import unirest from 'unirest';
import cheerio from 'cheerio';

import parsePost from './parsePost';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const parsePosts = async ({ url, maxPage, startWith = 0, delay = 1000 }) => {
  let urls = [];
  for (let page = startWith; page <= maxPage; page++) {
    await unirest.get(url.replace('{page}', page)).end(({ body }) => {
      const $ = cheerio.load(body);
      $('.partition_news p a').each(function(i) {
        let postUrl = $(this).attr('href');
        if (postUrl.indexOf('://') < 0) {
          postUrl = url.match(/(http|https):\/\/(.+?)\//)[0] + postUrl;
        }
        urls.push(postUrl);
      });
    });
    await sleep(delay);
  }
  return urls;
};

parsePosts({
  url: configs.groznyinform.paginateUrl,
  maxPage: 1,
  delay: 1000,
}).then(async urls => {
  console.log(await parsePost(urls[0], configs.groznyinform));
});
