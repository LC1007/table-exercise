let tableBody = document.querySelector('#table-body')
let tableData = [{
    id: Math.floor(Math.random() * 1000),
    name: 'XBOX Controller',
    price: 100,
    img: 'https://i.postimg.cc/YSvFVq03/pexels-stas-knop-1298601.jpg'
},{
    id: Math.floor(Math.random() * 1000),
    name: 'PS4 Controller',
    price: 300,
    img: 'https://i.postimg.cc/0QmwkWpK/pexels-j-shoots-21067.jpg'
},{
    id: Math.floor(Math.random() * 1000),
    name: 'Classic Controller',
    price: 600,
    img: 'https://i.postimg.cc/Z573Vybn/pexels-jens-mahnke-776092.jpg'
}]

tableBody.innerHTML = ''
tableData.forEach((data) =>{
    tableBody.innerHTML +=
    `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>R${data.price}</td>
        <td><img src="${data.img}" style="width: 10rem" alt=""></td>
        <td>
            <button>Add</button>
            <button>Delete</button>
        </td>
    </tr>
    `
})
