import html from '../core.js'


function Header() {
    return html`
        <header class="header">
            <h1>todolist</h1>
            <input 
                class="new-todo" 
                placeholder="Thêm việc cần làm" 
                autofocus
                onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
            >
        </header>
    `
}

export default Header