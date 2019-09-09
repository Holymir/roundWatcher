const ethers = require('ethers');

const network = 'ropsten';
const votingContractAddress = '0xBe7B4A6Fdc2aeCeDbeC7f173dBe485B54bcaAa10';
const votingContractAbi = require('./contract-interfaces/Voting');


class VotingContract {

    constructor() {

        this.provider = new ethers.providers.InfuraProvider(network);
        this.votingContract = new ethers.Contract(votingContractAddress, votingContractAbi, this.provider);
    }

    async getCurrentRound() {
        return await this.votingContract.currentRound();
    }

    async getRoundEndDate() {
        let currentRound = await this.getCurrentRound();
        let roundInfo = await this.votingContract.getRoundInfo(currentRound);

        // return roundInfo end date /element 1/
        return roundInfo[1];
    }

}

module.exports = VotingContract;
