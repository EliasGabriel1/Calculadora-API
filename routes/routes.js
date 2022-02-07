module.exports = function (server) {

    //route About
    server.route({
        method: 'GET',
        path: '/calculadora/about',
        handler: function (pedido) {

            var data = {
                msg: 'API Calculadora'
            };

            return data;
        }
    });

    //route Soma
    server.route({
        method: 'GET',
        path: '/calculadora/soma/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 + num2
            };

            return data;
        }
    });

    //route Subtração
    server.route({
        method: 'GET',
        path: '/calculadora/sub/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 - num2
            };

            return data;
        }
    });
    //route Multiplicação
    server.route({
        method: 'GET',
        path: '/calculadora/multi/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 * num2
            };

            return data;
        }
    });

    //route Divisão
    server.route({
        method: 'GET',
        path: '/calculadora/div/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 / num2
            };

            return data;
        }
    });
}