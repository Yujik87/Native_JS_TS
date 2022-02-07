const comfortableWord = word => {
    let separetedWord = [...word];
    let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let odd = [];
    let even = [];


    for (let i=0; i<separetedWord.length; i++){
        if (i % 2 !== 0) {
            odd.push(separetedWord[i]);
        } else {
            even.push(separetedWord[i]);
        }
    }
    console.log(odd);
    console.log(even);

    if (left.includes(odd[0])) {
        return (odd.every(el => left.includes(el)) && even.every(el => right.includes(el)))
    } else {
        return (odd.every(el => right.includes(el)) && even.every(el => left.includes(el)))
    }



};