type langType = 'it' | 'en';
type ButtonsType = HTMLButtonElement[];

interface DomProps {
  wrapper: HTMLDivElement;
  buttons: ButtonsType;
}

document.addEventListener('DOMContentLoaded', run);

function run(): void {
  const defaultLang = grabDefaultLang();
  const dom = {
    wrapper: document.querySelector('#locale') as HTMLDivElement,
    buttons: Array.from(document.querySelectorAll('.btn-lang')) as ButtonsType
  };

  loadingContent(defaultLang, dom);

  if (dom.buttons.length >= 1) {
    dom.buttons.forEach(
      button => (button.onclick = ev => setLang(ev.target, dom))
    );
  }
}

function grabDefaultLang(): langType {
  const [lang] = window.navigator.language.split('-');
  return lang === 'it' || lang === 'en' ? lang : 'en';
}

function loadingContent(lang: langType, collection: DomProps): void {
  const {wrapper} = collection;
  const it = new Template('#tmpl-it').clone();
  const en = new Template('#tmpl-en').clone();

  wrapper.innerHTML = '';
  wrapper.appendChild(lang === 'en' ? en : it);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setLang(trigger: any, collection: DomProps): void {
  const {buttons} = collection;

  buttons.forEach(button => button.classList.remove('active'));
  trigger.classList.add('active');

  loadingContent(trigger.id as langType, collection);
}

class Template {
  id: string;
  templateElement: HTMLTemplateElement;

  constructor(id: string) {
    this.id = id;
    this.templateElement = document.querySelector(
      this.id
    ) as HTMLTemplateElement;
  }

  public clone(): DocumentFragment {
    return document.importNode(this.templateElement.content, true);
  }
}
