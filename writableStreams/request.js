const { request } = require('http');

const req = request({
    hostname: 'webhook.site',
    method: 'POST',
    path: 'WEBHOOKSITE_ID'
},
(resp) => {
    console.log(`Server responde with ${resp.statusCode}`);
} 
)

req.on('finish', () => console.log('Request sent'));
req.on('close', () => console.log('Connection Closed'));
req.on('error', (error) => console.error('An Error has Ocurred ' + error));


const buffer = Buffer.from('ICgnLS4gLi0uICAgKCctLgooIE9PICkgIC8gXyggIE9PKQosLS0uICwtLS4oLC0tLS0tLS4sLS0uICAgICAgLC0tLiAgICAgIC4tJyksLS0tLS0uCnwgIHwgfCAgfCB8ICAuLS0tJ3wgIHwuLScpICB8ICB8Li0nKSAoIE9PJyAgLi0uICAnCnwgICAufCAgfCB8ICB8ICAgIHwgIHwgT08gKSB8ICB8IE9PICkvICAgfCAgfCB8ICB8CnwgICAgICAgfCh8ICAnLS0uIHwgIHxgLScgfCB8ICB8YC0nIHxfKSAgfCAgfCB8ICB8CnwgIC4tLiAgfCB8ICAuLS0nKHwgICctLS0uJyh8ICAnLS0tLicgICAgfCAgfCB8ICB8CnwgIHwgfCAgfCB8ICBgLS0tLnwgICAgICB8ICB8ICAgICAgfCAgICBgJyAgJy0nICAnCmAtLScgYC0tJyBgLS0tLS0tJ2AtLS0tLS0nICBgLS0tLS0tJyAgICAgIGAtLS0tLScK', 'base64');

req.write(buffer);
req.end();