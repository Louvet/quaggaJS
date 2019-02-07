import jsQR from "jsqr";

const properties = {
    FORMAT: {value: "qrcode", writeable: false}
};

QrCodeReader.prototype = Object.create(QrCodeReader.prototype, properties);
QrCodeReader.prototype.constructor = QrCodeReader;

function QrCodeReader(config, supplements) {
	this._row = [];
    this.config = config || {};
    this.supplements = supplements;
    return this;
}

QrCodeReader.prototype.decodePattern  = function(pattern, inputImageWrapper) {
    console.log(inputImageWrapper);
	// const result = jsQR(inputImageWrapper.data, inputImageWrapper.size.x, inputImageWrapper.size.y);
	const result = "123456";
	if(result === null ) {
		return null;
	}
	return { code: result };
};

export default QrCodeReader;