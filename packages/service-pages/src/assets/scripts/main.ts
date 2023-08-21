document.addEventListener('DOMContentLoaded', (): void => {
  const [lang] = window.navigator.language.split('-');
  const locale = lang === 'it' ? lang : 'en';

  const btns = Array.from(
    document.querySelectorAll<HTMLButtonElement>('.button-lang')
  );

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      showTemplate(this);
    });
  });

  btns.find(btn => btn.dataset.lang === locale)?.click();
});

const ACTIVE = 'active';

const showTemplate = (btn: HTMLButtonElement): void => {
  const lang = btn.dataset.lang;
  const alt = document.querySelector(`.button-lang:not([data-lang="${lang}"])`);

  // Toggle
  btn.classList.add(ACTIVE);
  alt?.classList.remove(ACTIVE);

  const wrapper = document.querySelector('#locale');
  const tpl = document.querySelector<HTMLTemplateElement>(`#tmpl-${lang}`);

  if (!wrapper || !tpl) {
    return;
  }

  wrapper.innerHTML = '';
  wrapper.appendChild(document.importNode(tpl.content, true));
};
