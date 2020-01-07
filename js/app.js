'use strict';

(function () {
    const API_KEY = '&key=UNFYHJYNHGwWmFmG5Go1';
    const API_ADDRESS = 'https://api.postit.lt/?term=';
    const DEFAULT_ADDRESS = 'Savanorių+12,+Vilnius';

    const postcodeBox = document.getElementById('postcode');
    const getPostcodeBtn = document.querySelector('button');

    class Postcode {
        constructor() {
            this.address = DEFAULT_ADDRESS;
        }

        makeUrlAddress(inputAddress) {
            return inputAddress.replace(/\s/g, '+');
        }

        async fetchPostcode (address) {
            let response = await fetch(`${API_ADDRESS}${address}${API_KEY}`);
            let data = await response.json();

            postcodeBox.value = await data.data[0].post_code;
        }
    }

    const postcode = new Postcode();
    getPostcodeBtn.addEventListener('click', () =>{
        const address = document.getElementById('address');
        if (address.value) {
            let urlAddress = postcode.makeUrlAddress(address.value);
            postcode.fetchPostcode(urlAddress);
        } else {
            postcodeBox.value = '...'
        }
    });
})();
