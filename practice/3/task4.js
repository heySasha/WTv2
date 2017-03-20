function getBoundingBox(data) {

    return data.reduce((prev, curr) => {

        if (prev.top < curr[1]) {
            prev.top = curr[1];
        }
        if (prev.bottom > curr[1]) {
            prev.bottom = curr[1];
        }
        if (prev.right < curr[0]) {
            prev.right = curr[0];
        }
        if (prev.left > curr[0]) {
            prev.left = curr[0];
        }

        return prev;

        }, {
            top: -Infinity,
            bottom: Infinity,
            left: Infinity,
            right: -Infinity
    });
}

function assertEqual(expectedVal, actualVal, message) {
    if (boundingBoxesEqual(expectedVal, actualVal)) {
        console.log("+", message);
    }
    else {
        console.error("-", message, "(Expected:", expectedVal, "; Actual:", actualVal, ")");
    }
}

function boundingBoxesEqual(obj1, obj2) {
    if (obj1 == null || obj2 == null) {
        return false;
    }

    return obj1.top == obj2.top &&
        obj1.left == obj2.left &&
        obj1.right == obj2.right &&
        obj1.bottom == obj2.bottom;
}

function task4() {
    // Case #0
    var data0 = [
        [49.2382, 28.4529],
        [49.2433, 28.4641],
        [49.2337, 28.4715],
        [49.2365, 28.4637]
    ];
    var boundingBox0 = getBoundingBox(data0);
    var answer0 = {
        "top": 28.4715,
        "bottom": 28.4529,
        "left": 49.2337,
        "right": 49.2433
    };
    assertEqual(answer0, boundingBox0, "Case #0");

    // Case #1
    var data1 = [
        [23.1454, 52.1231],
    ];
    var boundingBox1 = getBoundingBox(data1);
    var answer1 = {
        "top": 52.1231,
        "bottom": 52.1231,
        "left": 23.1454,
        "right": 23.1454
    };
    assertEqual(answer1, boundingBox1, "Case #1");

    // Case #2
    var data2 = [
        [11.089, 35.1368],
        [19.9518, 37.2702],
        [10.8157, -42.1093],
        [16.346, 17.9341],
        [12.34, 47.2751]
    ];
    var boundingBox2 = getBoundingBox(data2);
    var answer2 = {'right': 19.9518, 'top': 47.2751, 'bottom': -42.1093, 'left': 10.8157};
    assertEqual(answer2, boundingBox2, "Case #2");

    // Case #3
    var data3 = [
        [-8.141, -9.155],
        [-6.5477, -7.7143],
        [-8.0407, -6.4022],
        [-9.2639, -8.7352],
        [-7.1035, -6.6033]
    ];
    var boundingBox3 = getBoundingBox(data3);
    var answer3 = {'right': -6.5477, 'top': -6.4022, 'bottom': -9.155, 'left': -9.2639};
    assertEqual(answer3, boundingBox3, "Case #3");

    // Case #4
    var data4 = [
        [73.2194, 31.0553],
        [77.7834, 42.1508],
        [81.5364, 45.9313],
        [85.3564, 59.3013],
        [78.0824, 35.9333],
        [87.4732, 49.345],
        [84.9033, 38.1191],
        [85.4823, 36.9722],
        [88.7417, 53.3814],
        [88.0499, 36.2883]
    ];
    var boundingBox4 = getBoundingBox(data4);
    var answer4 = {'right': 88.7417, 'top': 59.3013, 'bottom': 31.0553, 'left': 73.2194};
    assertEqual(answer4, boundingBox4, "Case #4");

    // Case #5
    var data5 = [
        [70.1273, 52.9274],
        [86.2241, 54.4692],
        [85.0855, 53.2875],
        [82.0061, 36.8767],
        [87.3725, 49.7278],
        [80.764, 48.1769],
        [72.9554, 46.7259],
        [89.6658, 41.7943],
        [70.1234, 36.8406],
        [80.2696, 31.8889]
    ];
    var boundingBox5 = getBoundingBox(data5);
    var answer5 = {'right': 89.6658, 'top': 54.4692, 'bottom': 31.8889, 'left': 70.1234};
    assertEqual(answer5, boundingBox5, "Case #5");

    // Case #6
    var data6 = [
        [-37.5378, 33.1864],
        [18.5401, -9.9455],
        [-18.7898, -12.9715],
        [-45.4546, 39.0144],
        [-10.8881, -6.5067],
        [-44.0697, 37.8183],
        [-23.0493, 41.5637],
        [-48.5221, -0.5971],
        [12.346, -4.288],
        [-6.1298, 10.592],
        [-43.0475, -19.4959],
        [-7.537, 19.6367],
        [0.7429, 36.9786],
        [6.1059, 34.1423],
        [-2.8955, 48.5879],
        [-44.2116, 22.7797],
        [11.6285, 0.686],
        [17.5645, 47.2269],
        [17.2668, 46.6375],
        [-15.8607, 49.8183],
        [-22.528, -18.0255],
        [-1.3961, -19.601],
        [13.8728, -17.1258],
        [-7.3834, 13.8145],
        [7.5108, 11.606],
        [1.3977, -11.8434],
        [-0.4341, -16.7449],
        [-40.9854, 19.6133],
        [-30.5558, 11.2951],
        [-16.8058, 18.5776],
        [-27.1656, 48.3335],
        [-18.1065, 21.6704],
        [-21.0228, 31.3902],
        [16.5315, -12.192],
        [0.9889, -10.4963],
        [-29.0537, 39.789],
        [-48.0656, 43.8948],
        [2.7045, -14.3985],
        [16.5463, 41.0121],
        [-12.0096, 26.0907],
        [-18.3947, 10.2247],
        [-4.7654, 13.0576],
        [-17.0798, 2.3708],
        [-20.4277, 24.8133],
        [-36.3369, 46.1777],
        [-40.4896, 5.8409],
        [3.5264, -2.563],
        [-27.7948, 34.6377],
        [-17.2655, 32.0805],
        [-42.4187, 31.2909],
        [-38.2694, -14.3472],
        [-42.9383, 38.4471],
        [-34.5092, 21.2883],
        [-27.6023, 7.9134],
        [13.2092, -18.589],
        [-11.54, 36.0068],
        [13.6778, -13.3649],
        [-35.4678, 40.7117],
        [-39.0277, -6.0158],
        [12.607, 13.758],
        [8.7166, 4.0019],
        [-21.1909, 12.6156],
        [-21.5087, 43.4334],
        [14.2108, 1.6899],
        [13.8092, 47.3701],
        [-17.0102, -19.2905],
        [-6.9202, 35.101],
        [-33.1759, 22.0947],
        [-36.8089, 18.1295],
        [-38.6209, 20.5814],
        [-39.9998, -13.9789],
        [-5.872, 4.8712],
        [5.3989, -7.5834],
        [-19.8055, -14.1212],
        [-32.0219, 5.7531],
        [-11.19, 14.3809],
        [-49.7874, 23.4856],
        [16.8179, 16.7852],
        [-24.9697, 8.3693],
        [-3.3675, 39.8277],
        [-7.5734, -18.3249],
        [-46.2601, -7.2928],
        [-40.885, -10.9821],
        [-0.8499, 4.3711],
        [-20.7055, -19.9073],
        [0.2673, 14.8194],
        [-31.8463, -5.028],
        [13.5437, 17.8133],
        [9.5619, 49.1092],
        [-41.4492, 44.6637],
        [-18.5171, 37.912],
        [-46.2077, 25.9561],
        [-36.9031, -13.6306],
        [3.1581, 0.4817],
        [-30.9244, 28.698],
        [-2.9756, 4.2146],
        [14.2801, 7.3542],
        [-41.6431, 42.6957],
        [-11.9647, -6.9055],
        [-0.6248, 37.1984]
    ];
    var boundingBox6 = getBoundingBox(data6);
    var answer6 = {'right': 18.5401, 'top': 49.8183, 'bottom': -19.9073, 'left': -49.7874};
    assertEqual(answer6, boundingBox6, "Case #6");

}

task4();