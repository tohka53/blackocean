

exports.handler = async (event, context)=> {
    switch(event.httpMethod){
        case "POST":
            const params = JSON.parse(event.body);
            console.log("RECIBÍ UNA SOLICITUD",params)
            return await enviarMail({
                from: process.env.EMAIL_USER,
                to: "mecg1994@gmail.com",
                subject: "CONTACTO - " + params.asunto,
                text: generarCuerpoMensaje(params),
            });
        default:
            return{
                statusCode: 405,
                message: "Método no soportado"
            }
    }
}

