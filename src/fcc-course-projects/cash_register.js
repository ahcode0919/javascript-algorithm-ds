export function checkCashRegister(price, cash, cid) {
  const currencyVals = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  const expectedChange = cash * 100 - price * 100;
  const cidTotal = cid.reduce((acc, val) => acc + (val[1] * 100), 0); 

  let change = [];
  let normCid = cid.slice(0).map((val) => [val[0], Math.round(val[1] * 100)]);
  let remainingChange = expectedChange;

  if (cidTotal < expectedChange) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  for (let val of currencyVals) {
    if (val > remainingChange) {
      continue;
    }
    let currency = numberToCurrency(val);
    let cidCurrency = normCid.find((val) => val[0] === currency);
    let dispersedChange = [currency, 0];

    if (cidCurrency[1] === 0) {
      change.push(dispersedChange);
      continue;
    }

    while (cidCurrency[1] > 0 && remainingChange > 0 && remainingChange >= val) {
      cidCurrency[1] -= val;
      remainingChange -= val;
      dispersedChange[1] += val;
    }
    change.push(dispersedChange);
  }

  if (remainingChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }
  if (normCid.reduce((acc, val) => acc + val[1], 0) === 0) {
    return { status: "CLOSED", change: cid };
  }
  return { status: "OPEN", change: change.map((val) => [val[0], val[1] / 100]) };
}

function numberToCurrency(num) {
  switch(num) {
    case 10000:
      return 'ONE HUNDRED';
    case 2000:
      return 'TWENTY';
    case 1000:
      return 'TEN';
    case 500:
      return 'FIVE';
    case 100:
      return 'ONE';
    case 25:
      return 'QUARTER';
    case 10:
      return 'DIME';
    case 5:
      return 'NICKEL';
    case 1:
      return 'PENNY';
    default:
      throw 'Invalid Currency Amount';
  }
}