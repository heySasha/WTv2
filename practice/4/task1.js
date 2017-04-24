function filterTable(tableId, filterData) {
    //let tableElement = document.getElementById(tableId);
    let tableRows = document.querySelectorAll("table tr");
    /*
    for (let rowElement of tableRows) {
        if ( rowSatisfyFilter(rowElement, filterData) ) {
            // Убрать CSS класс "hidden"
            rowElement.classList.remove('hidden');
        } else {
            // Добавить CSS класс "hidden"
            rowElement.classList.add('hidden');
        }
    }
    */
    tableRows.forEach(rowElement =>
        rowSatisfyFilter(rowElement, filterData) ? rowElement.classList.remove('hidden') : rowElement.classList.add('hidden')
    );

}

function rowSatisfyFilter(rowElement, filterData) {
    let cells = rowElement.children;
    /*
    for (let cell of cells) {
        let fieldName = cell.dataset.fieldName;
        // проверить есть ли fieldName ключ  в filterData
        if (filterData[fieldName]) {

            if (!cell.innerText.includes(filterData[fieldName])) {
                return false;
            }
        }
    }
*/
    return [].every.call(cells ,cell => {
        let fieldName = cell.dataset.fieldName;
        return filterData[fieldName] ? cell.innerText.includes(filterData[fieldName]) : true;

    });

}
