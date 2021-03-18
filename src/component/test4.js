// code refactoring

let amt = base * rate;

if (province === "ONTARIO") {
  rate = ONTARIO_RATE;
  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if (province === "QUEBEC" || province === "ALBERTA") {
  rate = province === "QUEBEC" ? 2 : 1;
  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}
