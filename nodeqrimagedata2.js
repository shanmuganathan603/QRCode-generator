const QRCode = require('qrcode');
const generateQR = async text =>{
	try{
		console.log(await QRCode.toString(text,{type:'terminal'}))
	}catch(err){
		console.error(err)
	}
}
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });
  
 readline.question('Type your URL : ', url => {
	generateQR(url);
	readline.close();
  });
