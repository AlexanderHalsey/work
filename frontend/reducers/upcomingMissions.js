export default function(upcomingMissions = [], action) {
    if (action.type === 'initialiseUpcomingMissions') {
       return action.upcomingMissions;
    } else if (action.type === "addUpcomingMission") {
        let upcomingMissionsCopy = [...upcomingMissions];
        // code to write

        return upcomingMissionsCopy;
    } else {
        return upcomingMissions;
    }
}