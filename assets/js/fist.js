const balancedProfiles = [1000, 1200, 1400, 1600, 1800, 1800, 2200, 2000, 2400, 1800, 2200, 1600, 2000];

// calories per gram
const sugarCals = 3.87,
  proteinCarbsCals = 4.0631,
  fatCals = 8.84321;

const proteinDIs = [13, 19, 19, 34, 34, 46, 52, 46, 56, 46, 56, 46, 56];
const saltDIs = [1.5, 1.9, 1.9, 2.2, 2.2, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3];
var firstNuts;//sugar,protein,bFat,gFat,carbs,slat,serving
var secondNuts;//sugar,protein,bFat,gFat,carbs,slat,serving
var balancedProfile;
var sugarDI,proteinDI,badFatDI,goodFatDI,carbsDI,saltDI;

var totalGrams,calories,boolEat,sodiumRatio,proportionCalories;
var naySugar,nayFat,nayCarbs,naySalt,yayProtein,yayFat;

var totalGrams2,calories2,proportionCalories2,sodiumRatio2,boolEat2;
var naySugar2,nayFat2,nayCarbs2,naySalt2,yayProtein2,yayFat2;
var foodName,
  foodName2,
  demo = 5;
numberFoods = 1;

var mouseX = null;
var mouseY = null;

//sugar = 10;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

function getMouseX() {
  return mouseX;
}

function getMouseY() {
  return mouseY;
}

function scaleToServing(x, serveSize) {
  return x * (serveSize / 100);
}

function takeSum(accumulator, x) {
  return accumulator + x;
}

function boolNut(nutrient, nutrientDI, adjective, prop) {
  if (nutrient / nutrientDI > prop * 1.1) {
    if (adjective === "good") {
      return ["#28b463", "#7fda76"];
    } else {
      return ["#c70039", "#f39898"];
    }
  } else if (nutrient / nutrientDI < prop * 0.9) {
    if (adjective === "bad") {
      return ["#28b463", "#7fda76"];
    } else {
      return ["#c70039", "#f39898"];
    }
  } else {
    return ["#f39c12", "#e3db55"];
  }
}
// scaling nutrients to contents of a single serving of the food
function calToServing(foodNuts){
  for (var i = 0; i < foodNuts.length - 1; i++) {
    foodNuts[i] = scaleToServing(foodNuts[i],foodNuts[foodNuts.length-1]);
  }

};
//alert(firstNuts);

function calCalories(foodNuts){
  return [foodNuts[0] * sugarCals, foodNuts[1] * proteinCarbsCals,(foodNuts[2] + foodNuts[3]) * fatCals,foodNuts[4] * proteinCarbsCals];
};

function setupNutrients(balance,firFood,secFood){
  // daily intake 
  balancedProfile = balancedProfiles[balance];
  firstNuts = firFood;
  if (secFood) {
    numberFoods = 2;
    //alert(secFood[0]);
    secondNuts = secFood;
  }
  //alert(firstNuts);
  //firstNuts = firID;
  firstNuts[5] = firstNuts[5]/1000;
  calToServing(firstNuts);
  
  sugarDI = balancedProfile * 0.1 / sugarCals,
  proteinDI = proteinDIs[demo],
  badFatDI = balancedProfile * 0.30 * 0.1 / proteinCarbsCals,
  goodFatDI = balancedProfile * 0.30 * 0.9 / proteinCarbsCals,
  carbsDI = 130,
  saltDI = saltDIs[demo];

  //alert(firstNuts);
  totalGrams = firstNuts.slice(0,5).reduce(takeSum);
  calories = calCalories(firstNuts).reduce(takeSum);
  proportionCalories = calories / balancedProfile;
  boolEat = naySugar * -1 + nayFat * -1 + nayCarbs * -0.5 + naySalt * -0.5 + yayProtein * 1.25 + yayFat * 1.25;
  sodiumRatio = calories / (firstNuts[5] * 1000);

  naySugar = firstNuts[0] >= sugarDI * proportionCalories * 1.1,
  nayFat = firstNuts[2] >= badFatDI * proportionCalories * 1.1,
  nayCarbs = firstNuts[4] >= carbsDI * proportionCalories * 1.1,
  naySalt = firstNuts[5] >= saltDI * proportionCalories * 1.1,
  yayProtein = firstNuts[1] >= proteinDI * proportionCalories * 1.1,
  yayFat = firstNuts[3] >= goodFatDI * proportionCalories * 1.1;


  if (numberFoods == 2) {

    calToServing(secondNuts);
    secondNuts[5] = secondNuts[5]/1000;
    totalGrams2 = secondNuts.slice(0,5).reduce(takeSum);

    calories2 = calCalories(secondNuts).reduce(takeSum);

    proportionCalories2 = calories2 / balancedProfile;

    sodiumRatio2 = calories2 / (secondNuts[5] * 1000);

  // this needs to be fixed sammy
    naySugar2 = secondNuts[0] >= sugarDI * proportionCalories2 * 1.1,
    nayFat2 = secondNuts[2] >= badFatDI * proportionCalories2 * 1.1,
    nayCarbs2 = secondNuts[4] >= carbsDI * proportionCalories2 * 1.1,
    naySalt2 = secondNuts[5] >= saltDI * proportionCalories2 * 1.1,
    yayProtein2 = secondNuts[1] >= proteinDI * proportionCalories2 * 1.1,
    yayFat2 = secondNuts[3] >= goodFatDI * proportionCalories2 * 1.1;

    boolEat2 = naySugar2 * -1 + nayFat2 * -1 + nayCarbs2 * -0.5 + naySalt2 * -0.5 + yayProtein2 * 1.25 + yayFat2 * 1.25;
  };
}

//------------------------------------------------------initail Nutrients--------------------------------------- 

//setupNutrients(demo,firID);
  