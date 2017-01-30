document.registerElement('felds-tap-to-hover', class extends HTMLElement {
  createdCallback() {
    this._interact = this._interact.bind(this)
  }

  attachedCallback() {
    this.addEventListener('touchstart', this._interact, { passive: true })
    this.addEventListener('mousemove', this._interact)
    this.addEventListener('mouseleave', this._interact)
  }

  _interact(e) {
    const className = this.getAttribute('hover-class') || '_ftth-hover'
    const querySelector = this.getAttribute('query-selector')
    const ch = querySelector
      ? this.querySelectorAll(querySelector)
      : this.children

    for (let i = 0; i < ch.length; i++) {
      const el = ch.item(i)
      e.path.indexOf(el) >= 0
        ? el.classList.add(className)
        : el.classList.remove(className)
    }
  }
})
