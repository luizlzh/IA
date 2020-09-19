class RedeNeural {
    constructor(qtde_nodes_entrada, qtde_nodes_ocultos, qtde_nodes_saida) {
        this.num_nodes_entrada = qtde_nodes_entrada
        this.num_nodes_ocultos = qtde_nodes_ocultos
        this.num_nodes_saida = qtde_nodes_saida


        /***** criando os pesos dos bias *****/
        this.bias_ih = new Matriz(this.num_nodes_ocultos, 1)
        this.bias_ih.randomize()
        this.bias_ho = new Matriz(this.num_nodes_saida, 1)
        this.bias_ho.randomize()

        // this.bias_ih.print() // imprime os "bias" pra ver se está ok
        // this.bias_ho.print()


        /***** criando os pesos dos neuronios/nós *****/
        this.pesos_ih = new Matriz(this.num_nodes_ocultos, this.num_nodes_entrada)
        this.pesos_ih.randomize()
        this.pesos_ho = new Matriz(this.num_nodes_saida, this.num_nodes_ocultos)
        this.pesos_ho.randomize()

        // this.pesos_ho.print()
        // this.pesos_ih.print()
    }


    /*****  funcao para criar o feedforward  *****/
    feedforward(array) {
        // processo da camada INPUT -> HIDDEN
        let input = Matriz.arrayToMatriz(array)

        let ocultos = Matriz.multiplicacao(this.pesos_ih, input)
        ocultos = Matriz.add(ocultos, this.bias_ih)
        ocultos.map(sigmoid)

        // processo da camada HIDDEN -> OUTPUT
        let output = Matriz.multiplicacao(this.pesos_ho, ocultos)
        output = Matriz.add(output, this.bias_ho)
        output.map(sigmoid)
        output.print()

    }
}






/*****   funcao para calcular uma sigmoid    *****/
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x))
}