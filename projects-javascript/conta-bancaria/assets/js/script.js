class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0;
        this.tipo = tipo;
    }
    get saldo(){
        return this._saldo;
    }

    
    set saldo(value){
        this._saldo = value;
    }

    sacar(value){
        if(value > this._saldo){
            return "Operação Inválida!"
        } else {
            this.saldo = this.saldo - value;
            console.log('Saquado: ' + value + ' - Saldo de ' + this.saldo);
        }
    }

    depositar(value){
        this.saldo = this._saldo + value;
        console.log('Depositado: ' + value + ' - Saldo de ' + this._saldo);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cartaoCredito, agencia, numero){
        super(agencia, numero, tipo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = 'Conta Corrente';
    }
    

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero, tipo);
        this.tipo = 'universitária';
    }
    sacar(value){
        if(value > 500 || value > this._saldo){
            console.log('Você está tentando sacar ' + value + ', Saldo: '+ this._saldo + ' - limite  de R$500 por saque');
        }else {
            super.sacar(value);
        }
    }
}