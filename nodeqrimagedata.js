const QRCode = require('qrcode');
const generateQR = async text =>{
	try{
		await QRCode.toFile('./shanmu-portfolio-qr-code.png',text)
	}catch(err){
		console.error(err)
	}
}
generateQR("https://shanmuganathan.netlify.app/");