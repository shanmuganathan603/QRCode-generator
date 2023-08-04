const QRCode = require('qrcode');
const generateQR = async text =>{
	try{
		console.log(await QRCode.toDataURL(text))
	} catch(err){
		console.log(err)
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
