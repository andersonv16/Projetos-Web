function criaCalculadora() {
    return {

        display: document.querySelector('.display'),
        inicio() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        pressionaEnter() {
            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.equals()
                }
            })
        },
        clearDisplay() {
            this.display.value = ''
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },
        equals() {
            let conta = this.display.value.replace('x', '*');
            try {
                conta = eval(conta)
                if (!conta) {
                    this.display.value = 'Error'
                    return;
                }
                this.display.value = conta
            } catch (e) {
                this.display.value = 'Conta Invalida'
            }
        },

        cliqueBotoes() {

            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne()
                }
                if (el.classList.contains('btn-eq')) {
                    this.equals()
                }
            })
        },
        btnDisplay(valor) {
            this.display.value += valor
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicio()