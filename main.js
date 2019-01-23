var app = new Vue({
    el: '#app',
    data: {

        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        link: 'https://www.google.com/search?q=socks&oq=socks&aqs=chrome..69i57j69i60l3j69i61j0.411j0j7&sourceid=chrome&ie=UTF-8',
        altText: 'Some sock.',
        onSale: true,
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [{
            variandId: 2234,
            variantColor: 'Green',
            variantImage: './greensock.jpeg',
            variantQuantity: 10
        },
        {
            variantId: 2235,
            variantColor: 'Blue',
            variantImage: './bluesock.jpeg',
            variantQuantity: 0
        }],
        sizes: [ "S", "L", "M", "XL"],
        cart: 0
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale(){
            if(this.onSale)
            return this.brand + ' ' + this.product
        }
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
        removeFromCart(){
            if(this.cart > 0)
            this.cart -= 1
        }
    }

})

