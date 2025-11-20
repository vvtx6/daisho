const items = [
    {id:"D001",name:"オレンジジュース",price:150,stock:20,minStock:5},
    {id:"D001",name:"コーラ",price:150,stock:12,minStock:5},
    {id:"D001",name:"お茶",price:120,stock:30,minStock:10}
];

const tbody = document.getElementByld("item-list");

function render() {
    tbody.innerHTML = "";
    items.forEach(items => {
        const tr = document.createElement("tr");

        if(items.stock<item.minStock){
            tr.classList.add("low-stock");
        }

        tr.innerHTML=`
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.stock}</td>
            <td>
                <button onclick = "change('${item.id}',1)"> + </button>
                <button onclick = "change('${item.id}',-1)"> - </button>
            </td>
            `;

            tbody.appendChild(tr);
    });
}

function changeStock(id,diff){
    const item = items.find(i => i.id === id);
    if(!item){
        return;
    }

    item.stock += diff;

    if(item.stock < 0){
        item.stock = 0;
    }

    render();
}

render();