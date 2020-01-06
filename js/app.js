'use strict';

(function () {

    const  API_KEY = '&key=UNFYHJYNHGwWmFmG5Go1';
    const API_ADDRESS = 'https://api.postit.lt/?term=';
    const DEFAULT_ADDRESS = 'Savanorių+12,+Vilnius';

    const postcodeBox = document.getElementById('postcode');
    const address = document.getElementById('address');
    const getPostcodeBtn = document.querySelector('button');
    console.log(address.value)

    class Postcode {
        constructor() {
            this.address = DEFAULT_ADDRESS;
        }

        async fetchPostcode (address = this.address) {
            let response = await fetch(`${API_ADDRESS}${address}${API_KEY}`);
            let data = await response.json();

            postcodeBox.value = await data.data[0].post_code;

        }

    }



    const postcode = new Postcode();
    getPostcodeBtn.addEventListener('click', adress.value => postcode.fetchPostcode());


})();
