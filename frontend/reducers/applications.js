export default function (applications = [], action) {
    if (action.type === "initialiseApplicationInfo") {
      return action.applicationInfo;
    } else return applications;
}
  