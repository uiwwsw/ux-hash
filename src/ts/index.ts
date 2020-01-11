export default class UxHash {
    private id: string;
    private querySelector: string;
    private wrapperElement: HTMLDivElement;
    private textareaElement: HTMLTextAreaElement;
    private displayElement: HTMLDivElement;
    private keys: string[];
    private colors: string[];
    private bgs: string[];
    constructor(querySelector: string, themes: Theme[]) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.querySelector = querySelector;
        this.keys = themes.map((theme: Theme) => theme.key);
        this.colors = themes.map((theme: Theme) => theme.color);
        this.bgs = themes.map((theme: Theme) => theme.bg);
        const style = document.createElement('style');
        style.innerHTML = this.makeStyle();
        this.wrapperElement = document.querySelector(this.querySelector) as HTMLDivElement;
        this.wrapperElement.classList.add(this.id);
        this.textareaElement = document.createElement('textarea');
        this.textareaElement.style.display = 'none';
        this.textareaElement.classList.add(`${this.id}__textarea`);
        this.displayElement = document.createElement('div');
        this.displayElement.classList.add(`${this.id}__display`);
        this.displayElement.style.display = 'none';
        this.wrapperElement.appendChild(style);
        this.wrapperElement.appendChild(this.textareaElement);
        this.wrapperElement.appendChild(this.displayElement);
        this.displayElement.style.right = this.textareaElement.scrollWidth - this.textareaElement.clientWidth + 'px';
        this.textareaElement.onkeyup = this.keyEvent.bind(this);
        this.textareaElement.onscroll = this.scrollEvent.bind(this);
    }

    makeStyle() {
        return `.${this.id} {
            position: relative;
            font-size: 12px; }
            .${this.id}__textarea, .${this.id}__display {
              overflow: auto;
              overflow-x: hidden;
              display: block !important;
              height: 100%;
              margin: 0;
              padding: 0;
              border: 0;
              line-height: inherit;
              word-spacing: inherit;
              color: inherit;
              font: inherit;
              resize: none;
              outline: none;
              word-break: initial;
              white-space: pre-wrap;
              transform: translate3d(0, 0, 0); }
            .${this.id}__textarea {
              width: 100%; }
            .${this.id}__display {
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              overflow: hidden;
              color: transparent;
              pointer-events: none; }
            .${this.id}__tag {
              margin: -.2em;
              padding-top: 0;
              padding-right: .2em;
              padding-bottom: 0;
              padding-left: .2em;
              border-radius: 1em; }`.replace(/\s+/g, '')
    }

    scrollEvent() {
        this.displayElement.scrollTop = this.textareaElement.scrollTop;
        this.textareaElement.scrollTop = this.displayElement.scrollTop;
    }

    static keyEvent(querySelector: string, themes: Theme[]) {
        const wrapperElement = document.querySelector(querySelector) as HTMLDivElement;
        const textareaElement = wrapperElement.querySelector('textarea') as HTMLTextAreaElement;
        const displayElement = wrapperElement.querySelector('div') as HTMLDivElement;
        const id = wrapperElement.className;
        const value = wrapperElement.querySelector('textarea')!.value;
        const keys = themes.map((theme: Theme) => theme.key);
        const colors = themes.map((theme: Theme) => theme.color);
        const bgs = themes.map((theme: Theme) => theme.bg);
        let res = '';
        value.split('\n').forEach((line: string, i: number) => {
            res += (i === 0 ? '' : '\n');
            line.split(' ').forEach((word: string, j: number) => {
                res += (j === 0 ? '' : ' ');
                const index = keys.indexOf(word[0]);
                if (index === -1) {
                    res += word;
                } else {
                    res += `<span class="${id}__tag" style="color:${colors[index]};background:${bgs[index]};">${word}</span>`
                }
            });
        });
        displayElement.scrollTop = textareaElement.scrollTop;
        textareaElement.scrollTop = displayElement.scrollTop;
        displayElement.innerHTML = res + '\n\n';
    }

    mask() {
        let res = '';
        this.textareaElement.value.split('\n').forEach((line: string, i: number) => {
            res += (i === 0 ? '' : '\n');
            line.split(' ').forEach((word: string, j: number) => {
                res += (j === 0 ? '' : ' ');
                const index = this.keys.indexOf(word[0]);
                if (index === -1) {
                    res += word;
                } else {
                    res += `<span class="${this.id}__tag" style="color:${this.colors[index]};background:${this.bgs[index]};">${word}</span>`
                }
            });
        });
        return res + '\n\n';
    }

    keyEvent() {
        this.displayElement.innerHTML = this.mask();
        this.scrollEvent();
    }
}