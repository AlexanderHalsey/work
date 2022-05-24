export default function (likes = [], action) {
  if (action.type === "updateLikes") {
    var likesCopy = [...likes];
    if (likes.find((el) => el === action.id)) {
      likesCopy = likes.filter((el) => el !== action.id);
    } else {
      likesCopy.push(action.id);
    }
    return likesCopy;
  }
  return likes;
}
