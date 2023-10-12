class AppBar extends HTMLElement{
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="fw-bold navbar-brand" href="#">FILM APPS</a>
                </div>
            </nav>
        `
    }
}

customElements.define('app-bar', AppBar);