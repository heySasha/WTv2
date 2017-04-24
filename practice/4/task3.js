class SwitchButton {
    constructor(elementId) {
        const div = document.getElementById(elementId);

        this.div = div;
        if (div === null) {
            return;
        }

        let options = div.dataset.options;
        if (options !== undefined) {
            options = options.split(';');
        } else {
            options = [];
        }

        this.options = options;

        let defaultValue = div.dataset.defaultValue;

        this.inputElement = document.createElement('input');
        this.inputElement.type = 'button';
        this.inputElement.onclick = () => { this.switchValue() };

        //this.label = document.createElement('label');
        // сначала проверить в localStorage
        this.setValue( (window.localStorage[`${elementId}_SwitchButton`])
            ? window.localStorage[`${elementId}_SwitchButton`]
            : (defaultValue)
                ? defaultValue
                : options.length
                    ? options[0]
                    : 'None' );

        div.appendChild( this.inputElement );
    }

    static createButtons() {
        const divs = document.querySelectorAll('div[data-widget="SwitchButton"]');
        for (let div of divs) {
            new SwitchButton(div.id);
        }
    }

    getValue() {
        return this.inputElement.value;
    }

    setValue(text) {
        this.inputElement.textContent = text;
        this.inputElement.value  = text;
    }

    switchValue() {
        let options = this.options;

        for (let i = 0, len = options.length; i < len; i++) {
            if (options[i] === this.getValue()) {
                this.setValue( len === ++i ? options[0] : options[i] );
                break;
            }
        }
    }

    getDiv() {
        return this.div;
    }
}

