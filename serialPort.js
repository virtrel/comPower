class SerialPort {
    constructor() {
        const SerialPort = require('@serialport/stream')
    }

    serialPortList() {
        SerialPort.list().then(
            ports => ports.forEach(console.log),
            err => console.error(err)
        )
    }

    serialPortOpen(path, _baudRate, _dataBits, _stopBits, _parity, _rtscts, _xOn, _xOff, _xAny) {
        const port = new SerialPort(path, function (err) {
            if (err) {
                return console.log('Error: ', err.message)
            }
        })

        port = new SerialPort(path, {
            baudRate: _baudRate,
            dataBits: _dataBits,
            stopBits: _stopBits,
            parity: _parity,
            rtscts: _rtscts,
            xon: _xOn,
            xoff: _xOff,
            xany: _xAny,
        })
    }

    serialPortWrite() {
        port.write('', function(err) {
            if (err) {
                return console.log('Error on write: ', err.message)
            }
            console.log('Write success')
        })
    }
}