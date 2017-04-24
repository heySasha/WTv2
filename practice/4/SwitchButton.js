class SwitchButton extends HTMLInputElement{
    constructor(elementId) {
        super();
        this.type = 'button';
        const div = document.getElementById(elementId);
        div.appendChild(this);
    }
}