

function getMostRed(selected) {
    var map = new Map();
    map.set(20, 100.0);
    map.set(19, 95.82);
    map.set(18, 95.82);
    map.set(17, 95.82);
    map.set(16, 95.82);
    map.set(15, 92.14);
    map.set(14, 88.45);
    map.set(13, 84.77);
    map.set(12, 81.08);
    map.set(11, 77.40);
    map.set(10, 73.71);
    map.set(9, 70.02);
    map.set(8, 63.70);
    map.set(7, 56.76);
    map.set(6, 47.91);
    map.set(5, 41.15);
    map.set(4, 33.78);
    map.set(3, 30.10);
    map.set(2, 22.73);
    map.set(1, 12.29);
    map.set(0, 0.0);
    return map.get(selected);
}

function getMostYellow(selected) {
    var map = new Map();
    map.set(18, 100.0);
    map.set(17, 100.0);
    map.set(16, 92.14);
    map.set(15, 92.14);
    map.set(14, 92.14);
    map.set(13, 92.14);
    map.set(12, 92.14);
    map.set(11, 92.14);
    map.set(10, 92.14);
    map.set(9, 88.45);
    map.set(8, 84.77);
    map.set(7, 77.40);
    map.set(6, 67.20);
    map.set(5, 60.20);
    map.set(4, 51.84);
    map.set(3, 41.15);
    map.set(2, 30.10);
    map.set(1, 15.60);
    map.set(0, 0.0);
    return map.get(selected);
}

function getMostGreen(selected) {
    var map = new Map();
    map.set(19, 100.0);
    map.set(18, 95.82);
    map.set(17, 95.82);
    map.set(16, 95.82);
    map.set(15, 95.82);
    map.set(14, 95.82);
    map.set(13, 95.82);
    map.set(12, 95.82);
    map.set(11, 92.14);
    map.set(10, 84.77);
    map.set(9, 77.40);
    map.set(8, 73.71);
    map.set(7, 67.20);
    map.set(6, 67.20);
    map.set(5, 56.76);
    map.set(4, 47.91);
    map.set(3, 41.15);
    map.set(2, 30.10);
    map.set(1, 22.73);
    map.set(0, 12.04);
    return map.get(selected);
}

function getMostBlue(selected) {
    var map = new Map();
    map.set(15, 100.0);
    map.set(14, 95.82);
    map.set(13, 95.82);
    map.set(12, 95.82);
    map.set(11, 95.82);
    map.set(10, 95.82);
    map.set(9, 95.82);
    map.set(8, 92.14);
    map.set(7, 88.45);
    map.set(6, 77.40);
    map.set(5, 67.20);
    map.set(4, 56.76);
    map.set(3, 44.47);
    map.set(2, 33.66);
    map.set(1, 15.60);
    map.set(0, 0.0);
    return map.get(selected);
}

function getLeastRed(selected) {
    var map = new Map();
    map.set(0, 100.0);
    map.set(1, 92.14);
    map.set(2, 81.08);
    map.set(3, 73.71);
    map.set(4, 67.20);
    map.set(5, 67.20);
    map.set(6, 51.84);
    map.set(7, 44.47);
    map.set(8, 41.15);
    map.set(9, 37.71);
    map.set(10, 33.66);
    map.set(11, 30.10);
    map.set(12, 27.25);
    map.set(13, 20.07);
    map.set(14, 15.60);
    map.set(15, 12.04);
    map.set(16, 9.49);
    map.set(17, 0.0);
    map.set(18, 0.0);
    map.set(19, 0.0);
    map.set(20, 0.0);
    map.set(21, 0.0);
    return map.get(selected);
}

function getLeastYellow(selected) {
    var map = new Map();
    map.set(0, 100.0);
    map.set(1, 88.45);
    map.set(2, 77.40);
    map.set(3, 70.02);
    map.set(4, 67.20);
    map.set(5, 51.84);
    map.set(6, 44.47);
    map.set(7, 37.71);
    map.set(8, 30.10);
    map.set(9, 22.73);
    map.set(10, 20.07);
    map.set(11, 15.60);
    map.set(12, 9.49);
    map.set(13, 9.49);
    map.set(14, 9.49);
    map.set(15, 9.49);
    map.set(16, 0.00);
    map.set(17, 0.00);
    map.set(18, 0.00);
    map.set(19, 0.00);
    return map.get(selected);
}

function getLeastGreen(selected) {
    var map = new Map();
    map.set(0, 100.0);
    map.set(1, 95.82);
    map.set(2, 88.45);
    map.set(3, 77.40);
    map.set(4, 70.02);
    map.set(5, 63.70);
    map.set(6, 56.76);
    map.set(7, 47.91);
    map.set(8, 41.15);
    map.set(9, 33.66);
    map.set(10, 27.25);
    map.set(11, 20.07);
    map.set(12, 12.04);
    map.set(13, 9.49);
    map.set(14, 0.00);
    map.set(15, 0.00);
    map.set(16, 0.00);
    map.set(17, 0.00);
    map.set(18, 0.00);
    map.set(19, 0.00);
    return map.get(selected);
}

function getLeastBlue(selected) {
    var map = new Map();
    map.set(0, 100.0);
    map.set(1, 95.82);
    map.set(2, 84.77);
    map.set(3, 77.40);
    map.set(4, 70.02);
    map.set(5, 63.70);
    map.set(6, 56.76);
    map.set(7, 51.84);
    map.set(8, 41.15);
    map.set(9, 37.71);
    map.set(10, 27.25);
    map.set(11, 20.07);
    map.set(12, 12.04);
    map.set(13, 9.49);
    map.set(14, 0.00);
    map.set(15, 0.00);
    map.set(16, 0.00);
    return map.get(selected);
}
