export const getItemFromLocalStorage = () =>
JSON.parse(localStorage.getItem("stocks"));

export const formatData = (data) => {
  //convert key value pairs to array of arrays
  let arr = Object.entries(data);
  arr.forEach((v,i) => {
    arr[i][0] = + new Date(arr[i][0])
    arr[i][1] = Number(arr[i][1]["1. open"])
  })
  //highchart do not accept unsorted enteries.
  arr.sort();
  return arr;
}
