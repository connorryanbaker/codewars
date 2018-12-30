function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  return pin.match(/[0-9]/g).length - pin.length === 0;
}
