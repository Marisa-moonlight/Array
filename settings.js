function myFunction(){

var selectedContinent = (document.getElementById("continent").value);
var displayCountries = document.getElementById("countries");
var arrContinent=["Europe","Asia","North America"];
var arrEurope=["Germany", "France", "Poland", "Ireland", "Sweden"];
var arrAsia=["India", "China", "Japan"]
var arrNAmerica=["America", "Canada", "Mexico"];

document.getElementById("counties").innerHTML="";
if(selectedContinent == "EU"){
    for (i=0; i<arrEurope.length;i++)
    {
    var selectoptions = document.getElementById("option");
    selectoptions.innerHTML = arrEurope[i];
    console.log(arrEurope[i]);
    selectoptions.value=arrEurope[i];
    displayCountries=appendChild(selectoptions);
    }
}

    else if(selectedContinent == "Asia"){
        for (i=0; i<arrAsia.length;i++)
    {
        var selectoptions = document.getElementById("option");
        selectoptions.innerHTML = arrAsia[i];
        selectoptions.value=arrAsia[i];
        displayCountries=appendChild(selectoptions);
    }
}

    else{
        for (i=0; i<arrNAmerica.length;i++)
    {
        var selectoptions = document.getElementById("option");
        selectoptions.innerHTML = arrNAmerica[i];
        selectoptions.value=arrNAmerica[i];
        displayCountries=appendChild(selectoptions);
    }
}
}