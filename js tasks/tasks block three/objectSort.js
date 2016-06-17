var bon = {
    name: "Bon",
    surname: "Scott",
    weight: 70,
    height: 180
};
var clifford = {
    name: "Clifford",
    surname: "Williams",
    weight: 90,
    height: 180
};
var brian = {
    name: "Brian",
    surname: "Johnson",
    weight: 60,
    height: 180
};
var chris = {
    name: "Chris",
    surname: "Slade",
    weight: 100,
    height: 180
};

var people = [ clifford , brian , chris , bon];


function objSort(humanOne, humanTwo) {
   if (humanOne.height !== humanTwo.height){
  return humanOne.height - humanTwo.height;
    }
    var humOne = humanOne.surname.toLowerCase();
    var humTwo = humanTwo.surname.toLowerCase();
    
        if(humOne > humTwo){
            return 1;
        }
        else if(humOne < humTwo){
            return -1;
        }
        else {
            return 0;
        }
    }


people.sort(objSort);

