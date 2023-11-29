function checkValueError(value) {
    if (value = -1) {
        throw new Error('error value cannot be negative');
    }
}
try {
    checkValueError(-1);
}
catch (error) {
    console.error(error.message);
}
