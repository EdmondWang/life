function *launch() {
    console.log("We are goingt to launch our gundam!");
    try {
        var pilot = yield ;
        console.log("Pilot is " + pilot);
    } catch(e) {
        console.log("Somehting is wrong here: " + e);
    }

}

var gundam = launch();
gundam.next();
gundam.throw('There is no polit available now.');
gundam.next("edmond");
