var selectList;
window.addEventListener('load', loadSelect, false);
function loadSelect() {
    selectList = document.getElementById('cities');
    sortedCities.forEach( (city) =>{
        var option = document.createElement("option");
        option.value = city;
        selectList.appendChild(option);
    });

    console.log(sortedCities.length)
    console.log(cities)
}