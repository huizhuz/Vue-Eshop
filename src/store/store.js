import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'

import { router } from '../main.js'

class Item {
    constructor(pics, name, price, stock, description, brand, category) {
        this.pics = pics;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.brand = brand;
        this.category = category;
    }
}
export class User {
    constructor(newUser) {
        this.username = newUser.username;
        this.email = newUser.email;
        this.password = newUser.password;
    }
}

export const store = new Vuex.Store({
    state: {
        merchList: { // all products
            ukulele: [ // all ukulele
                new Item(
                    ['t1k-uke.jpg', 't1k-uke-h.jpg', 't1k-uke-b.jpg'], 'T1K Uke', 699, 0,
                    'Martin has built the world’s finest ukuleles since 1916, and tenor ukes since 1929 that have long been prized for their full-bodied voice and great volume. The T1K tenor-sized model features top, back and sides crafted of solid Hawaiian koa, a wood native to Hawaii and a favorite of island players. The entire body is finished in high quality satin lacquer, and features an applied dovetail neck joint. The T1K Uke is a beautiful example of why Martin is still the name in superior quality ukuleles.',
                    'Martin', 'ukulele'
                ),
                new Item(
                    ['c1k-uke.jpg', 'c1k-uke-h.jpg', 'c1k-uke-b.jpg'], 'C1K Uke', 649, 10,
                    'Martin has built the world’s finest ukuleles since 1916, and tenor ukes since 1929 that have long been prized for their full-bodied voice and great volume. The C1K concert-sized model features top, back and sides crafted of solid Hawaiian koa, a wood native to Hawaii and a favorite of island players. Entire body is finished in high quality satin lacquer, and features an applied dovetail neck joint. The C1K Uke is a beautiful example of why Martin is still the name in superior quality ukuleles.',
                    'Martin', 'ukulele'
                ),
                new Item(
                    ['2k-concert-uke.png', '2k-concert-uke-h.png', '2k-concert-uke-b.png'], '2K Concert Ukulele', 2149, 15,
                    'The 2K Concert Uke features characteristics of the Style 2 ukulele (2K Uke), but in a concert-size model crafted with solid Hawaiian koa top, back and sides, a wood native to Hawaii and a favorite of island players. Appointments include ivoroid binding with black/white top inlay, black/white multi-layered single rosette ring, and a rosewood bridge. Entire body is finished in a satin lacquer.',
                    'Martin', 'ukulele'
                )
            ], // -- ukulele ends here
            guitar: [ // all guitar
                new Item(
                    ['new-d28.jpg', 'new-d28-h.jpg', 'new-d28-b.jpg'], 'D-28', 699, 10,
                    "Sometimes innovation is in the details and this is certainly true with Martin’s re-imagined D-28. After nearly a century at the helm, and as the quintessential workhorse of music legends like Hank Williams, The Beatles, Johnny Cash, Neil Young, Bob Dylan, and so many more, Martin's legendary D-28 has been lovingly and artfully enhanced. The post WWII D-28 had a slightly different look than its predecessor and became the centerpiece of the folk and folk rock movements at their pinnacle in the 1950s and 1960s. The all new D-28 blends the rich history of the guitar with Martin’s newest and most heralded innovations. The 184 year old guitar maker has combined vintage appointments, including open gear tuners, an aged toner top, antique white accents, and a faux tortoise pickguard with a new neck profile to give D-28 enthusiasts a modern feel and comfortable playing experience. Martin has also added forward-shifted bracing to allow greater vibration of the top. The legend just got better!",
                    'Martin', 'guitar'
                ),
                new Item(
                    ['om-28e.jpg', 'om-28e-h.jpg', 'om-28e-b.jpg'], 'OM-28E', 4399, 5,
                    "Born for jazz clubs and blues haunts, it's the versatile sound you can't put down. Compact and commanding, scalloped bracing brings your sound to life—fingerpicking, strumming or soloing. Discreet, dynamic electronics so you can hear every nuance, no matter the venue. Sound as good plugged in as you do unplugged. Bold herringbone, authentic East Indian rosewood, ebony, Sitka spruce, and vintage appointments give a classic look to a timeless sound.",
                    'Martin', 'guitar'
                ),
                new Item(
                    ['0017-authentic.jpg', '0017-authentic-h.jpg', '0017-authentic-b.jpg'], '00-17 Authentic 1931 ', 5999, 6,
                    'Meticulously reproduced with hide glue construction, dovetail neck joint, a genuine mahogany VTS (Vintage Tone System) top and genuine mahogany back and sides. Featuring a Brazilian rosewood fingerboard and bridge with an Authentic 1931 neck shape and heel, this 00 12 fret classic will appeal to players of all musical styles who love the vintage look and sound of mahogany. Remaining true to its origins as a Depression Era instrument, the 00-17 Authentic 1931 features authentic scalloped X-bracing, a Vintage Gloss finish, and historically accurate appointments, such as Golden Age Relic Nickel Side Mount tuners.',
                    'Martin', 'guitar'
                ),
                new Item(
                    ['000-17-whiskey-sunset.png', '000-17-whiskey-sunset-h.png', '000-17-whiskey-sunset-b.png'], '000-17E Whiskey Sunset', 2249, 2,
                    'The 000-17 Whiskey Sunset Auditorium model boasts a rich, warm sunburst finish that will delight any player with its aesthetic beauty. Skillfully crafted from a solid Sitka spruce top and mahogany back and sides with antique white binding, a modified low oval neck with a Performing Artist taper, and a rosewood fingerboard and bridge, this guitar produces beautiful dynamic tones that will please the most discerning musician. ',
                    'Martin', 'guitar'
                )
                // new Item(
                //     ['','',''],'',price,stock,
                //     '',
                //     '', ''
                // )
            ], // --guitar ends here
            accessory: [
                new Item(
                    ['strap-daisy.jpg', 'strap-daisy-2.jpg', 'strap-daisy-3.jpg'], 'Denim strap: Daisy', 37, 20,
                    'Show your love of nature with this simple daisy. Perfect for every player,  this comfortable, reliable strap is the perfect addition to any gig.',
                    'Martin', 'accessory'
                ),
                new Item(
                    ['strap-peace-dove.jpg', 'strap-peace-dove-2.jpg'], 'Denim strap: Peace dove', 37, 20,
                    'If you play guitar to bring people together, the Martin Dove Strap is the accessory for you. Perfect for anyone who wants to share a little peace, love and understanding through their music.',
                    'Martin', 'accessory'
                ),
                new Item(
                    ['pickpack.jpg'], 'multi-color pearloid pick pack', 5, 50,
                    'Martin picks provide high-performance flexibility and are the perfect fit for you and your instrument.',
                    'Martin', 'accessory'
                )
            ]
        },
        errorMessage: '',
    },

    actions: {
        login({ commit }, authData) {
            axios
                .post(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqv2jR-WIHUTiYLcN33DUJb88c07O_zaY',
                    {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }
                )
                .then(res => {
                    router.push('/Vue-Eshop');
                })
                .catch(error => console.log(error));
        },
        signup({ commit }, authData) {
            this.errorMessage = '';
            axios
                .post(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqv2jR-WIHUTiYLcN33DUJb88c07O_zaY',
                    {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }
                )
                .then(res => {
                    this.showLoading = true;
                    setTimeout(() => {
                        router.push("/login");
                    }, 1500);
                })
                .catch(error => {
                    this.errorMessage = "The email address already exists.";
                });
        }
    }
})
