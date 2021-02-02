const cds = require('@sap/cds')

module.exports = cds.service.impl( srv => {
    srv.on('send', async(req)=> {
        const message = {
            data: 'customer1'
        }
        const topic = 'testtopic'
        srv.emit (topic, message)
        return 'OK'
    })

    srv.on('S4H1809/BO/BusinessPartner/Changed', async(msg) => {
        console.log('==> Message received : ' + JSON.stringify(msg))
    })

    srv.on('testtopic2', async(msg) => {
        console.log('==> Message received to t2: ' + JSON.stringify(msg))
    })    

})