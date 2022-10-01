export function bubblesort(numbers) {

    const array = numbers

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let aux;
            if (array[j] <= array[i]) {
                aux = array[j];
                array[j] = array[i];
                array[i] = aux;
            }
        }
    }


    return array

}
