// census api for population stats
function census(){
    fetch('https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE=7&for=state:01&key=915200b4a6a1702ea363d22e5199819a1224f052')
        .then(response => response.json())
        .then(responseJson => displayCensusStats(responseJson))
        .catch(error => alert("An error occured! Please try again later"));
}

// display api stats
function  displayCensusStats(response){
    console.log(response);
}

// get data from form
function watchForm(){
    $(document).on('submit', 'form', function (e) {
        // prevent page from reloading
        e.preventDefault();
        // defines the type of search for the census
        let searchType = $("#searches").val();
        // search term
        let term = $("#term").val();
        console.log(searchType);
        console.log(term);
        if (searchType === "City") {
            console.log(searchType);
        } else if (searchType === "State") {
           census();
        } else if (searchType === "County") {
            console.log(searchType);
        }
    });

}


(function(){
    watchForm();
}());