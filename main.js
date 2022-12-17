const findPossibleMoves = (matrix, p, q) => {
    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1];
    let result = []

    const n = matrix.length;
    const m = matrix[0].length;

    
    for (let i = 0; i < 8; i++) {
        
        let x = p + X[i];
        let y = q + Y[i];
        console.log('before result', x, ' ' , y)

        if (x >= 0 && y >= 0 && x < n && y < m && matrix[x][y] == 0)
            console.log('hello', x, y)
            result.push({ xAxis: x, yAxis: y })
    }
    console.log('result', result)
    return result;
}

const onSubmit = (e) => {
    e.preventDefault();

    const xValue = parseInt(document.querySelector('#prompt1').value)
    const yValue = parseInt(document.querySelector('#prompt2').value)

    const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const tableBody = document.querySelector('.table-body')
    tableBody.innerHTML = ""

    findPossibleMoves(matrix, xValue, yValue).forEach(({ xAxis, yAxis }) => {

        const rowElement = document.createElement('tr');

        const xElement = document.createElement('td');
        const yElement = document.createElement('td');

        xElement.textContent = xAxis;
        yElement.textContent = yAxis;

        rowElement.appendChild(xElement)
        rowElement.appendChild(yElement)

        tableBody.appendChild(rowElement)
    })
}

document.querySelector('#form').addEventListener('submit', onSubmit);
