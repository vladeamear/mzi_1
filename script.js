//////////////////////////////////
function switchMethod(){
    let arr = document.getElementsByName('secondtask');
    for (let i = 0; i < arr.length; i++){
        if (arr[i].checked){ document.getElementById(arr[i].value).style.display = 'block'; } 
        else { document.getElementById(arr[i].value).style.display = 'none'; }
    }
}
//////////////////////////////////

function genNumRaz(n){
    let k;
    do {
        k = Math.round(Math.random()*Math.pow(10,n));
    } while (String(k).length != n);
    return k;
}
function checkProst(n){
    let i = 2;
    while (i < Math.round(Math.sqrt(n)) + 1){
        if (n % i == 0){ return false }
        i++;
    }
    return true;
}
function genProstNumRaz(n){
    let k;
    do { k = genNumRaz(n); } while (!checkProst(k));
    return k;
}

function first(n){
    document.getElementById('firstres').value = genProstNumRaz(n);
}

///////////////////////////////////////////////////////////////////

function reshetoEratosfena(arr){
    let k = 0;
    while (k != arr[arr.length-1]){
        let p = arr[k];
        for (let i = 2; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++){
                if (arr[j] == p*i){ arr.splice(j,1)}
            }
        }
        k++;
    }
    return arr;
}
function malTeoremaFerma(baz, num){
    if ((Math.pow(baz, num - 1) % num) === 1){ return true; } 
    else { return false; }
}

function genArray(b){
    let arr = [],
        i = 2;
    do {
        arr[i-2] = i;
        i++;
    } while (i != b+1)
    return arr;
}
function arrCutFromBegin(a, arr){
    while (arr[0] < a){ arr.splice(0,1); }
    return arr;
}
function arrToString(arr){
    let str = '';
    for (let i = 0; i < arr.length; i++){ str = str + ' ' + arr[i]; } 
    return str;
}
function clearNumArray(osn){
    let arr = [],
        c = 0;
    for (let i = 0; i < osn.length; i++) {
        arr[i] = +osn[i].value;
    }
    while (c != arr.length) {
        (arr[c] == 0 || !(Number.isInteger(arr[c]))) ? arr.splice(c, 1) : c++; 
    }
    return arr;
}

function second(){
    let begin = +document.getElementById('begin1').value,
        end = +document.getElementById('end1').value;
    if (begin < 0 || begin > end || end < 2){
        document.getElementById('secondres').value = 'ОШИБКА';
    } else {
        let arr = genArray(end);
        arr = reshetoEratosfena(arr);
        arr = arrCutFromBegin(begin, arr);
        let str = arrToString(arr),
            prcnt = Math.round(10000 * arr.length / (end - begin))/100;
        str = prcnt.toString() + '% ' + str;
        document.getElementById('secondres').value = str;
    }
}

function second2(){
    console.log(malTeoremaFerma(11,85));
    let begin = +document.getElementById('begin2').value,
        end = +document.getElementById('end2').value,
        osn = document.getElementsByName('osn2'),
        arrOsn = clearNumArray(osn);

    if (begin < 0 || begin > end || end < 2 || arrOsn.length == 0){
        document.getElementById('second2res').value = 'ОШИБКА';
    } else {
        let c = 0,
            arr = arrCutFromBegin(begin, (genArray(end)));

        while (c < arr.length){
            let k = 0;
            for (let i = 0; i < arrOsn.length; i++){
                if (!malTeoremaFerma(arrOsn[i], arr[c])) {k++};
            }
            (k == arrOsn.length) ? arr.splice(c,1) : c++;
        }
        let str = arrToString(arr),
            prcnt = Math.round(10000 * arr.length / (end - begin))/100;
        str = prcnt.toString() + '% ' + str;
        document.getElementById('second2res').value = str;
    }    
}
//////////////////////////////////////////

function third(){
    let num = +document.getElementById('thirdIn').value;
    if (num > 2) {
        let arr = genArray(num);
        arr = reshetoEratosfena(arr);
        if (arr[arr.length - 1] == num) {
            document.getElementById('thirdEr').value = 'ПРОСТОЕ';
        } else {
            document.getElementById('thirdEr').value = 'СОСТАВНОЕ';
        }

        let osn = document.getElementsByName('osn3'),
            arrOsn = clearNumArray(osn); 
            
        if (arrOsn.length != 0){
            let k = 0;
            for (let i = 0; i < arrOsn.length; i++){
                if (!malTeoremaFerma(arrOsn[i], num)) {k++};
            }
            if (k == arrOsn.length){document.getElementById('thirdFr').value = 'СОСТАВНОЕ'; } 
            else { document.getElementById('thirdFr').value = 'ПСЕВДОПРОСТОЕ'; }
        } else { document.getElementById('thirdFr').value = 'НЕТ ОСНОВАНИЙ'; }
    } else {
        document.getElementById('thirdEr').value = 'ЭРРОР';
        document.getElementById('thirdFr').value = 'ЭРРОР';
    }
    
}