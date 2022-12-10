//  DNS Module

import dns from 'dns';

// dns.lookup('www.wikipedia.org', (error, address, family) => {
//     if (error) throw error;
//     console.log(address);
//     console.log(family);
// });

dns.resolve('www.wikipedia.org', 'NS', (error, records) => {
    if (error) throw error;
    console.log(records);
});