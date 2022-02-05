class converter {
    constructor() {
        this.units = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        this.tenToSixteen = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis'];
        this.tens = ['treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        this.elementMessage = document.getElementById('printResponse')
        this.addListener();
    }

    addListener() {
        let elementInput = document.getElementById('userNumber');
        elementInput.addEventListener('keyup', () => {
            if (elementInput.value !== '') {
                this.convertToText(elementInput.value);
            }
            else {
                this.elementMessage.innerText = ''
            }
        });
    }

    convertToText(number) {
        number = this.deleteZerosLeft(number)
        if (!this.validateNUmber(number)) {
            this.elementMessage.innerText = 'Solo se aceptan numeros enteros positivos'
            return
        }

        this.elementMessage.innerText = this.getName(number);
    }

    deleteZerosLeft(number) {
        let i = 0;
        let isZero = true;
        for (i = 0; i < number.length; i++) {
            if (number.charAt(i) != 0) {           // .charAt() = trae el carácter de la posición del parámetro que le indiquemos
                isZero = false;
                break;
            }
        }
        return isZero ? '0' : number.substr(i)     // .substr() = trae todos los carácteres de izquierda a derecha empezando por
    }                                              //             el número de posición que le indiquemos como parámetro

    validateNUmber(number) {
        if (isNaN(number) || number === '') {
            return false;
        }

        if (number.indexOf('.') >= 0) {                // .indexOf() = busca si hay un carácter igual al que le hemos indicado en el parámetro,
            return false;                         //             si lo hay, escoge el primero que encuentre y devuelve el número de su posición
        }                                         //             si no lo hay, devuelve el número negativo -1

        if (number.indexOf('-') >= 0) {
            return false;
        }
        return true;
    }

    getName(number) {
        if (number.length === 1) {
            return this.getUnits(number)
        }
        if (number.length === 2) {
            return this.getTens(number)
        }
        return 'Solo traducimos números del 0 al 99'
    }

    getUnits(number) {
        let numberInt = parseInt(number)
        return this.units[numberInt]
    }

    getTens(number) {
        let units = number.charAt(1);
        if (number < 17) {
            return this.tenToSixteen[number - 10]
        }
        if (number < 20) {
            return 'dieci' + this.getUnits(units)
        }
        if (number === '20') {
            return 'Veinte'
        }
        if (number < 30) {
            return 'Veinti' + this.getUnits(units)
        }

        let name = this.tens[number.charAt(0) -3]
        if (units > 0) {
            return name + ' y ' + this.getUnits(units)
        }
        return name
    }
}

new converter();