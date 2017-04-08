function aritGeo(arr){
    if (arr.length == 0) {
        return 0;
    }
    else {
        var diff = arr[1] - arr[0];
        var ratio = arr[1]/arr[0];

        var arithmetic = true;
        var geometric = true;

        for (var i = 0; i < arr.length- 1; i++){
            if (arr[i + 1] - arr[i] !== diff ) {
                arithmetic = false;
            }
            if (arr[i + 1] / arr[i] !== ratio ) {
                geometric = false;
            }
        }
        if (arithmetic == true) {
            return "Arithmetic";
        }
    }
}