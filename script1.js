var nickname = "Carl";
var heightInInches = 65; 
var weightInKg = 60; 

var heightFeet = Math.floor(heightInInches / 12);
var heightInches = heightInInches % 12; 
var weightInLbs = (weightInKg * 2.20462).toFixed(3); 

alert("Name: " + nickname + "\nHeight: " + heightFeet + "'" + heightInches + "\"\nWeight: " + weightInLbs + " lbs");