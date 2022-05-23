export default function(jobOffers = [], action) {
    if (action.type === 'initialiseJobOffers') {
       return action.jobOffers;
    } else if (action.type === "updateJobOffers") {
        let jobOffersCopy = {...jobOffers};
        // code to write 

        return jobOffersCopy;
    } else {
        return jobOffers;
    }
}