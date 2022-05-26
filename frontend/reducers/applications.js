export default function (applications = [], action) {
    if (action.type === "initialiseApplicationInfo") {
      return action.applicationInfo;
    } else if (action.type === "addApplication") {
      let applicationsCopy = [...applications];
      applicationsCopy.push(action.application);
      return applicationsCopy;
    } else return applications;

}
  