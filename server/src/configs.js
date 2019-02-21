const elems = {
  riadagestan: {
    title: '.itemTitle',
    image: '.preview_picture',
    text: '#qaz',
    views: '.itemHits b',
  },
  groznyinform: {
    title: '.news h1',
    image: '.imgA img',
    text: '.news p',
    views: '.news p.views',
    paginateUrl: 'http://grozny-inform.ru/news/?Pos={page}',
  },
  magastimes: {
    title: '.td-post-title .entry-title',
    image: '.size-full',
    text: '.td-post-content p',
    views: '.td-post-views span',
  },
};

export default elems;
