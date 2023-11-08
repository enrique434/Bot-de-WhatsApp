const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conexion exitosa');
});


client.on('message', message => {
	if(message.body === 'hola mundo') {
		client.sendMessage(message.from, 'hola soy un bot, kike anda ocupado ');
	}
});


client.initialize();
