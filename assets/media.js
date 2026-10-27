/* Фото и видео в порядке добавления. Пути — от корня сайта.
Пример для "01":
{type: "photo", src: "media/01/photo1.jpg", alt: "Фото мероприятия"},
{type: "video", src: "media/01/video1.mp4"}
Заголовки, подписи и текстовые блоки не выводятся.
*/
const MATERIALS = {
  "01": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/lmi2880q0am5htfa9dhhq/18859407903404.mp4?rlkey=xdl3zmv5u41fnwb8spo6g2gi1&st=zhl6juxr&raw=1"},
    {type: "photo", src: "media/01/1.jpg"},
    {type: "photo", src: "media/01/2.jpg"},
    {type: "photo", src: "media/01/3.jpg"},
    {type: "photo", src: "media/01/4.jpg"},
    {type: "photo", src: "media/01/5.jpg"},
    {type: "photo", src: "media/01/6.jpg"}
        ],
  "02": [],
  "03": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/2hj65fu5vwg21797z7ygn/20471952378493.mp4?rlkey=d4al9r218qbpny9kuf46t6p8o&st=9jwecne0&raw=1"}
  ],
  "04": [
    {type: "photo", src: "media/04/41.jpg"},
    {type: "photo", src: "media/04/42.jpg"},
    {type: "photo", src: "media/04/43.jpg"},
    {type: "photo", src: "media/04/44.jpg"},
    {type: "photo", src: "media/04/45.jpg"},
    {type: "photo", src: "media/04/46.jpg"},
    {type: "photo", src: "media/04/47.jpg"},
    {type: "photo", src: "media/04/48.jpg"},
    {type: "photo", src: "media/04/49.jpg"},
    {type: "photo", src: "media/04/410.jpg"}
  ],
  "05": [],
  "06": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/zoxmz08qez3kcml9jsvzq/18934600895148.mp4?rlkey=it9uqtm3r8ivgpi47kcka1rj0&st=556m8kkk&raw=1"},
    {type: "photo", src: "media/06/61.jpg"},
    {type: "photo", src: "media/06/62.jpg"},
    {type: "photo", src: "media/06/63.jpg"},
    {type: "photo", src: "media/06/64.jpg"},
    {type: "photo", src: "media/06/65.jpg"},
    {type: "photo", src: "media/06/66.jpg"},
    {type: "photo", src: "media/06/67.jpg"},
    {type: "photo", src: "media/06/68.jpg"},
    {type: "photo", src: "media/06/69.jpg"},
    {type: "photo", src: "media/06/610.jpg"}
  ],
  "07": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/fzekvlcr8r65jnpsnrpor/19205476125399.mp4?rlkey=ovct9xqatf9p73v576v42amq9&st=heo8h2h2&raw=1"}
  ],
  "08": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/9r6rkagmrd2qtga002dl2/18946098137772.mp4?rlkey=u0r0r714d7glu4cpogvxpo0k7&st=g7wgbinr&raw=1"},
    {type: "photo", src: "media/08/81.jpg"},
    {type: "photo", src: "media/08/82.jpg"},
    {type: "photo", src: "media/08/83.jpg"},
    {type: "photo", src: "media/08/84.jpg"},
    {type: "photo", src: "media/08/85.jpg"},
    {type: "photo", src: "media/08/86.jpg"},
    {type: "photo", src: "media/08/87.jpg"},
    {type: "photo", src: "media/08/88.jpg"},
    {type: "photo", src: "media/08/89.jpg"},
    {type: "photo", src: "media/08/810.jpg"},
    {type: "photo", src: "media/08/811.jpg"},
    {type: "photo", src: "media/08/812.jpg"},
    {type: "photo", src: "media/08/813.jpg"},
    {type: "photo", src: "media/08/814.jpg"},
    {type: "photo", src: "media/08/815.jpg"},
    {type: "photo", src: "media/08/816.jpg"},
    {type: "photo", src: "media/08/817.jpg"},
    {type: "photo", src: "media/08/818.jpg"}
  ],
  "09": [
    {type: "video", src: "https://www.dropbox.com/scl/fi/t6f67djphniis3cvqjlax/18947487435436.mp4?rlkey=awifi8mrrjcvccbcmvqfcrzlo&st=yu9j7bjt&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/bt0n4767s707m8va9ue7u/18947488352940.mp4?rlkey=kmgi0payxygp9zbc41axzpulb&st=5kz3k2fu&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/1g0a0pipr5b51l8f78znb/18947491564204.mp4?rlkey=yppcn0i6kb92j9imzc8w19bm0&st=xy0le32z&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/0r6tmywp9zroowf9b5r81/18947492416172.mp4?rlkey=ciex5pn9sj1ufaor8937sgpxu&st=p9febkh7&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/by3vbxydlgb7kq2ya3ib8/18947492809388.mp4?rlkey=wriwu1ly4ptpx9ywvrbs6ecrq&st=es0vusob&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/efj7qcn38bxmqtvdulk18/18947499690668.mp4?rlkey=6ynem9p97q06xfupzec66woc9&st=05brvdsy&raw=1"},
    {type: "video", src: "https://www.dropbox.com/scl/fi/ohipds97nv398gd7rhj8v/18947641707180.mp4?rlkey=e6ns11q8e5hvezgcg2yvdl1m7&st=5cgvdrfm&raw=1"},
    {type: "photo", src: "media/09/91.jpg"},
    {type: "photo", src: "media/09/92.jpg"},
    {type: "photo", src: "media/09/93.jpg"},
    {type: "photo", src: "media/09/94.jpg"},
    {type: "photo", src: "media/09/95.jpg"},
    {type: "photo", src: "media/09/96.jpg"},
    {type: "photo", src: "media/09/97.jpg"},
    {type: "photo", src: "media/09/98.jpg"},
    {type: "photo", src: "media/09/99.jpg"},
    {type: "photo", src: "media/09/910.jpg"},
    {type: "photo", src: "media/09/911.jpg"},
    {type: "photo", src: "media/09/912.jpg"},
    {type: "photo", src: "media/09/913.jpg"},
    {type: "photo", src: "media/09/914.jpg"},
    {type: "photo", src: "media/09/915.jpg"},
    {type: "photo", src: "media/09/916.jpg"},
    {type: "photo", src: "media/09/917.jpg"},
    {type: "photo", src: "media/09/918.jpg"},
    {type: "photo", src: "media/09/919.jpg"},
    {type: "photo", src: "media/09/920.jpg"},
    {type: "photo", src: "media/09/921.jpg"},
    {type: "photo", src: "media/09/922.jpg"},
    {type: "photo", src: "media/09/923.jpg"},
    {type: "photo", src: "media/09/924.jpg"},
    {type: "photo", src: "media/09/925.jpg"},
    {type: "photo", src: "media/09/926.jpg"}
  ],
  "10": [],
  "11": [],
  "12": [],
  "13": [],
  "14": []
};
const section = document.querySelector('.materials');
if (section) {
  const gallery = section.querySelector('.gallery');
  const list = MATERIALS[section.dataset.event] || [];
  let dialog;
  function showPhoto(src, alt) {
    if (!dialog) {
      dialog = document.createElement('dialog');
      document.body.append(dialog);
    }
    dialog.replaceChildren();
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Закрыть ×';
    close.onclick = () => dialog.close();
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    dialog.append(close, img);
    dialog.showModal();
  }
  if (gallery) {
    gallery.replaceChildren();
    for (const item of list) {
      if (!item || !['photo', 'video'].includes(item.type) || typeof item.src !== 'string' || !item.src.trim()) continue;
      const external = /^https?:\/\//i.test(item.src);
      if (!external && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(item.src)) continue;
      const src = external ? item.src : '../' + item.src;
      const figure = document.createElement('figure');
      figure.className = 'feed-media';
      if (item.type === 'photo') {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', 'Открыть фото');
        const img = document.createElement('img');
        img.src = src;
        img.alt = item.alt || 'Фото мероприятия';
        img.loading = 'lazy';
        button.append(img);
        button.onclick = () => showPhoto(src, img.alt);
        figure.append(button);
      } else {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.preload = 'metadata';
        video.playsInline = true;
        video.setAttribute('aria-label', 'Видео мероприятия');
        figure.append(video);
      }
      gallery.append(figure);
    }
    section.hidden = gallery.children.length === 0;
  }
}
