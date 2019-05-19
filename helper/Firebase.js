const axios = require("axios");
const authKey = "AAAAUEZiUxE:APA91bETFmP6EXUzX6kBMDLMwsCm07NnFqfFYjDTn1sd30S46wCaFTU2wpqAu6b6bYoUE855mOsw_fH-luSsvMSjFP9NAEx5R6isq9bjUsTkpwI-9jpvkT8zm6aBrH7ukmgxhtHWnsy8";
//const atoken = "fx40nQHnpcY:APA91bFlJjPEggWuohIFNM04el3NmuENQtVZ_otQESgmiuXPYJPX59DW7bsb9ugbUqhyhm9344mfaO-vMcWYmf-MOH4NqZAeJ_YUlIQJf8QhTO7aBoFIdVP_6gO6axxfEBpQ_go5cXiS"


class Firebase {

    async enviarNotificacao(token, notificacao) {
        let bodyRequest = {
            to: token,
            priority: 'high',
            notification: notificacao
        }
        await this.fazerRequest(bodyRequest);
    }

    fazerRequest(body) {
        axios("https://fcm.googleapis.com/fcm/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "key=" + authKey,
                "Accept": "application/json"
            },
            data: body
        }).then(resposta => console.log("resp", resposta)).catch(error => console.log(error));
    }

}

module.exports = Firebase
