let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');

xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
        console.log(xhr.responseText);
        var array_len = JSON.parse(xhr.responseText).data.length;
        console.log(array_len);
        let row1 = "";
        let row2 = "";
        let row3 = "";
        let row4 = "";
        let row5 = "";
        for (let i = 0; i < array_len; i++) {

            row2 += JSON.parse(xhr.responseText).data[i].first_name + '<br><br>';
            row3 += JSON.parse(xhr.responseText).data[i].last_name + '<br><br>';
            row5 += JSON.parse(xhr.responseText).data[i].email + '<br><br>';

        }


        document.getElementById('row2').innerHTML = row2;
        document.getElementById('row3').innerHTML = row3;
        document.getElementById('row5').innerHTML = row5;

    }
    else {
        console.log(xhr.status);
    }
};


xhr.send();