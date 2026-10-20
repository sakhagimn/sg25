/* Фото и видео в порядке добавления. Пути — от корня сайта.
Пример для "01":
{type: "photo", src: "media/01/photo1.jpg", alt: "Фото мероприятия"},
{type: "video", src: "media/01/video1.mp4"}
Заголовки, подписи и текстовые блоки не выводятся.
*/
const MATERIALS = {
  "01": [],
  "02": [],
  "03": [],
  "04": [],
  "05": [],
  "06": [],
  "07": [],
  "08": [],
  "09": [],
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
