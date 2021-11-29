const prompt = require('prompt');

prompt.start();

prompt.get(['hot', 'cold','electricity'], function (err, result) {
  if (err) { return onErr(err); }
  const rentingCosts = {
    hotWater : result.hot * 24.06,
    coldWater : result.cold * 9.85,
    electricityCost : result.electricity * 0.53 + 19,
    gasCost: 19,
    litterCost: 65,
    flatRent: 2200,
  }

  const fullCost = function () {
    let result = 0;
    for(let i = 0; i < rentingCosts.length; i++);
    {
      result = (Object.values(rentingCosts).reduce(function(a, b) { return a + b; }, 0).toFixed(2));
    }
    return result;
  }

  console.log('kwota do zapłaty za wodę ciepłą: ' + (rentingCosts.hotWater).toFixed(2) + ' zł');
  console.log('kwota do zapłaty za wodę zimną: ' + (rentingCosts.coldWater).toFixed(2) + ' zł');
  console.log('kwota do zapłaty za prąd: ' + (rentingCosts.electricityCost).toFixed(2) + ' zł');
  console.log('kwota do zapłaty za gaz: ' + rentingCosts.gasCost + ' zł');
  console.log('kwota do zapłaty za wywóz śmieci: ' + rentingCosts.litterCost + ' zł');
  console.log('kwota czynszu : ' + rentingCosts.flatRent + ' zł');
  console.log('Pełna kwota za wynajem w tym miesiącu wynosi: ' + fullCost() + ' zł');
  console.log('twój koszt wynosi: ' + (fullCost()/2).toFixed(2) + ' zł');
});

function onErr(err) {
  console.log(err);
  return 1;
}
