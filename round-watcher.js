const schedule = require('node-schedule');
const VotingContract = require('./voting-contract');


const votingContract = new VotingContract();

// every day schedule at 15:00
schedule.scheduleJob('30 15 * * *', async() => {

    let endDate = await votingContract.getRoundEndDate();
    let currentDate = Date.now().toString();
    let currentDateSec = currentDate / 1000;
    if (currentDateSec >= endDate.toNumber()) {
        // current round is expired
        console.log(true);
    } else {
        // currentRound is ongoing
        console.log(false);
    }

});
