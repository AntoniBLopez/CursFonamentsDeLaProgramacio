
function showDataToCalculateGeometricFigure() {
    const userFigureGeometric = document.getElementById('userFigureGeometric').value

    if (userFigureGeometric === 'Square') {
        document.getElementById('enterSquareData').style.display = 'block'
    }
    if (userFigureGeometric === 'Triangle') {
        document.getElementById('enterTriangleData').style.display = 'block'
    }
    if (userFigureGeometric === 'Rectangle') {
        document.getElementById('enterRectangleData').style.display = 'block'
    }
    if (userFigureGeometric === 'Circle') {
        document.getElementById('enterCircleData').style.display = 'block'
    }
}

function hideSquareData() {
    document.getElementById('enterSquareData').style.display = 'none'
}
function hideTriangleData() {
    document.getElementById('enterTriangleData').style.display = 'none'
}
function hideRectangleData() {
    document.getElementById('enterRectangleData').style.display = 'none'
}
function hideCircleData() {
    document.getElementById('enterCircleData').style.display = 'none'
}

function showSquareArea() {
    const userSquareSide = document.getElementById('userSquareSide').value
    const showResultAreaSquare = document.getElementById('showResultAreaSquare')
    
    const squareAreaResult = userSquareSide * userSquareSide
    
    showResultAreaSquare.innerText = `The area of the square is: ${squareAreaResult}cm²`

    squareBorderStylingWithCss(showResultAreaSquare)
}
function squareBorderStylingWithCss(showResultAreaSquare) {
    showResultAreaSquare.style.border = '4px groove yellow'
    showResultAreaSquare.style.transition = '1s'
}

function showTriangleArea() {
    const userTriangleBase = document.getElementById('userTriangleBase').value
    const userTriangleHeight = document.getElementById('userTriangleHeight').value
    const showResultAreaTriangle = document.getElementById('showResultAreaTriangle')

    const triangleAreaResult = (userTriangleBase * userTriangleHeight) / 2

    showResultAreaTriangle.innerText = `The area of the triangle is: ${triangleAreaResult}cm²`

    triangleBorderStylingWithCss(showResultAreaTriangle)
}
function triangleBorderStylingWithCss(showResultAreaTriangle) {
    showResultAreaTriangle.style.border = '4px groove red'
    showResultAreaTriangle.style.transition = '1s'
}


function showRectangleArea() {
    const userRectangleSideA = document.getElementById('userRectangleSideA').value
    const userRectangleSideB = document.getElementById('userRectangleSideB').value
    const showResultAreaRectangle = document.getElementById('showResultAreaRectangle')

    const rectangleAreaResult = userRectangleSideA * userRectangleSideB

    showResultAreaRectangle.innerText = `The area of the rectangle is: ${rectangleAreaResult}cm²`

    rectangleBorderStylingWithCss(showResultAreaRectangle)
}
function rectangleBorderStylingWithCss(showResultAreaRectangle) {
    showResultAreaRectangle.style.border = '4px groove rgb(146, 146, 146)'
    showResultAreaRectangle.style.transition = '1s'
}

function showCircleArea() {
    const userCircleRadius = document.getElementById('userCircleRadius').value
    const showResultAreaCircle = document.getElementById('showResultAreaCircle')

    const circleAreaResult = userCircleRadius * userCircleRadius * 3.1416

    showResultAreaCircle.innerText = `The area of the circle is: ${parseInt(circleAreaResult)}cm²`
    circleBorderStylingWithCss(showResultAreaCircle)
}
function circleBorderStylingWithCss(showResultAreaCircle) {
    showResultAreaCircle.style.border = '4px groove rgb(214, 91, 214)'
    showResultAreaCircle.style.transition = '1s'
}