function calculate1RM() {
  let w = parseInt(document.getElementById('weight').value);
  let r = parseInt(document.getElementById('reps').value);
  let epley = Math.round(w * (1 + r / 30));
  let mcglothin = Math.round((100 * w) / (101.3 - 2.67123 * r));
  let lombardi = Math.round(w * Math.pow(r, 0.1));
  let rm = [epley, mcglothin, lombardi].sort((a, b) => a - b);

  return r == 1 ? w : r == 0 ? 0 : rm[rm.length - 1];
}

function result() {
  document.getElementById('output').innerHTML = calculate1RM();
  return false;
}

function resetText() {
  document.getElementById('output').innerHTML = '';
}
