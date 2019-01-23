var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './sock.jpeg',
        link: 'https://www.google.com/search?q=socks&oq=socks&aqs=chrome..69i57j69i60l3j69i61j0.411j0j7&sourceid=chrome&ie=UTF-8',
        altText: 'Some sock.',
        inStock: true,
        onSale: true,
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [{
            variandId: 2234,
            variantColor: 'Green'
        },
        {
            variantId: 2235,
            variantColor: 'Blue'
        }],
        sizes: [ "S", "L", "M", "XL"]
        
    }

})

