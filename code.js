// census api for population stats
function censusState(term){
    fetch('https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE=7&for=state:*&key=915200b4a6a1702ea363d22e5199819a1224f052')
        .then(response => response.json())
        .then(responseJson => displayCensusStats(responseJson, term))
        .catch(error => alert("An error occured! Please try again later"));
}

// display api stats
function displayStateCensus(response, term){ 
    let exists = false;
    response.forEach(function(found){
        if(found[0] === term){
            console.log(found + " found it finally");
            $('.location').text(term);
            $('.state').text(found[1]); 
            exists = true;
        }
    });
    if(!exists) console.log('doesnt exist');
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
        // show hidden items
        $('.non-default').removeClass('hidden');
        if (searchType === "City") {
            console.log(searchType);
        } else if (searchType === "State") {
           $('.state').removeClass('hidden'); 
           censusState(term);
        } else if (searchType === "County") {
            console.log(searchType);
        }
    });

}


(function(){
    watchForm();
}());