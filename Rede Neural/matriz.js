class Matriz {
    constructor(linhas, colunas) {
        this.linhas = linhas
        this.colunas = colunas

        /***** criando uma matriz pra conter os dados   *****/
        /***** basicamento fazendo um vetor de vetores  *****/
        this.data = []

        for (let i = 0; i < linhas; i++) {
            let vetor = []
            for (let j = 0; j < colunas; j++) {
                vetor.push(Math.floor(Math.random() * 10))
            }
            this.data.push(vetor)
        }
    }

    
    /*****  apenas mostrar informações no console   *****/
    static arrayToMatriz(arr){
        let matriz = new Matriz(arr.length, 1)
        
        matriz.map((elemento, i, j) => {
            return arr[i]
        })

        return matriz
    }


    /*****  apenas mostrar informações no console   *****/
    print(){
        console.table(this.data)
    }


    /***** retornar numeros randomicos   *****/
    randomize() {
        this.map((elemento, i, j) => {
            return Math.random() * 2 - 1
        })
    }


    /***** adaptando a funcão map para nosso tipo de array   *****/
    map(funcao) {
        this.data = this.data.map((elemento, i) => {
            return elemento.map((num, j) => {
                return funcao(num, i, j)
            })
        })
        return this
    }


    /***** adaptando a funcão map para estatica   *****/
    static map(A, funcao) {
        let matriz = new Matriz(A.linhas, B.linhas)

        matriz.data = matriz.data.map((elemento, i) => {
            return elemento.map((num, j) => {
                return funcao(num, i, j)
            })
        })
        return matriz
    }


    // método para somar duas matrizes
    static add(A, B) {
        var matriz = new Matriz(A.linhas, B.colunas)

        matriz.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j]
        })
        return matriz
    }


    // método para multiplicar matrizes
    static multiplicacao(A, B) {
        var matriz = new Matriz(A.linhas, B.colunas)
        matriz.map((num, i, j) => {
            let soma = 0

            for (let k = 0; k < A.colunas; k++) {
                let elemento1 = A.data[i][k]
                let elemento2 = B.data[k][j]
                soma += elemento1 * elemento2
            }
            return soma
        })

        return matriz
    }
}