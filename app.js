class RandomPicker {

    // this will list all the items to be selected randomly 
    items
    constructor(items) {

        // this will store the use set of items 
        this.items = items;
    }


    pickRandom() {

        return this.items[Math.floor(Math.random() * this.items.length)];
    }

}

class fortuneCookie extends RandomPicker {
    outputElement

    constructor(element) {
        super(["A amazing future is coming to you", "peace and clarity is the way", "through the storm is calm", "clarity"]);
        this.outputElement = element;
    }


    open() {

        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
    }
}

// this gets the id from the HTML so that it can be passed through in javascript for the output
let cookieF = new fortuneCookie(document.getElementById("cookieAnswer"));
cookieF.open();
