export const getStockData = (stock) => (
  fetch('/stocks', {
    method : 'post',
    body: JSON.stringify({stock : stock}),
    headers:{
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
)
