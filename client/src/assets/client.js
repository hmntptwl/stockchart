export const getStockList = (type,symbol) => {
  fetch('/stocks', {
    method:'post',
    body:JSON.stringify({type,symbol})
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
