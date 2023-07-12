let length = parseInt(prompt("Введіть довжину масиву:"))

while (isNaN(length)) {
    length = parseInt(prompt("Введіть довжину масиву (будь ласка, введіть число):"))
}

const array = []

for (let i = 0; i < length; i++) {
    let element = parseInt(prompt("Введіть елемент " + (i + 1) + ":"))

    while (isNaN(element)) {
        element = parseInt(prompt("Введіть елемент " + (i + 1) + " (будь ласка, введіть число):"))
    }

    array.push(element)
}

alert("Вихідний масив: " + array)

array.sort(function (a, b) {
    return a - b
})

alert("Відсортований масив: " + array)

array.splice(1, 4)

alert("Остаточний масив: " + array)
