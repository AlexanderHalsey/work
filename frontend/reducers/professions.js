export default function(professions = [], action) {
    if (action.type === 'initialiseProfessionInfo') {
        console.log("is this registeing");
       return action.professionInfo;
    } else if (action.type === "updateProfessionInfo") {
        let professionsCopy = {...professions};
        // code to write

        return professionsCopy;
    } else {
        return professions;
    }
}