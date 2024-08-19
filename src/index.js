module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .map((elem, index) => (index % 2 === 0 ? elem : elem.reverse()))
        .flat();
};
