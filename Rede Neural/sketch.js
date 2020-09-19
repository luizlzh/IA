function setup() {
    createCanvas(500, 500)
    background(0)

    //var mat1 = new Matriz(1, 2)
    //var mat2 = new Matriz(2, 1)

    var redeN = new RedeNeural(1,3,8)
    var arrayAleatorio = [1,2]
    redeN.feedforward(arrayAleatorio)

}

function draw() {

}