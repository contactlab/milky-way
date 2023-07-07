type langType = 'it' | 'en';

interface HTMLElements {
  wrapper: HTMLDivElement;
  buttons: HTMLButtonElement[];
}

document.addEventListener('DOMContentLoaded', run);

function run(): void {
  const browserLocale = getBrowserLocale();
  const wrapper = document.querySelector('#locale') as HTMLDivElement;
  const buttons = Array.from<HTMLButtonElement>(
    document.querySelectorAll('.button-lang')
  );

  loadLocaleContent(browserLocale, {wrapper, buttons});

  if (buttons.length >= 1) {
    buttons.forEach(
      btn =>
        (btn.onclick = evt => {
          evt.preventDefault();
          setLocaleContent(evt.target as HTMLElement, {wrapper, buttons});
        })
    );
  }
}

function getBrowserLocale(): langType {
  const [lang] = window.navigator.language.split('-');
  return lang === 'it' ? lang : 'en';
}

function loadLocaleContent(lang: langType, htmlElements: HTMLElements): void {
  const {wrapper, buttons} = htmlElements;

  const button = buttons.find(btn => btn.id === lang);
  button?.classList.add('active');

  wrapper.innerHTML = '';
  wrapper.appendChild(
    lang === 'it'
      ? getLocalizedTemplate('#tmpl-it')
      : getLocalizedTemplate('#tmpl-en')
  );
}

function setLocaleContent(
  trigger: HTMLElement,
  htmlElements: HTMLElements
): void {
  const {buttons} = htmlElements;

  buttons.forEach(btn => btn.classList.remove('active'));
  trigger.classList.add('active');

  loadLocaleContent(trigger.id as langType, htmlElements);
}

function getLocalizedTemplate(id: string): DocumentFragment {
  return new Template(id).clone();
}

class Template {
  constructor(id: string) {
    this.id = id;
    this.templateElement = document.querySelector(
      this.id
    ) as HTMLTemplateElement;
  }

  public clone(): DocumentFragment {
    return document.importNode(this.templateElement.content, true);
  }

  id: string;
  templateElement: HTMLTemplateElement;
}
