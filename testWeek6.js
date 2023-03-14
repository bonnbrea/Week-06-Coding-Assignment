var expect= chai.expect;


describe('MyFunctions', function(){
    describe('#dealHand', function(){
        it ('should give equal card counts to each player', function() {
            const playerOne= new Player('Bre');
            const playerTwo= new Player('Luke');
            let game= new Game(playerOne,playerTwo);
            game.dealHand();
            expect(game.playerOne.playerHand.length).to.equal(26);
            expect(game.playerTwo.playerHand.length).to.equal(26);
        })
    })
})