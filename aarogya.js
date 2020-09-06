var rsr = Raphael('aarogya', '82.24', '79.51');

var group_a = rsr.set();


group_a.attr({
    'class': 'cls-3',
    'name': 'group_a'
});
var sity = rsr.set();
sity.attr({
    'id': 'sity',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'sity'
});
var group_b = rsr.set();
group_b.attr({
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_b'
});
var _3 = rsr.set();
var path_ke = rsr.path("M 42.93 74.86 75.79 55.88 75.79 54.17 42.93 73.16 42.93 74.86 z").attr({
    class: 'cls-1',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ke');
var path_kf = rsr.path("M 75.05 28.34 75.1 54.58 75.79 54.18 75.78 27.99 75.05 28.34 z").attr({
    class: 'cls-16',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kf');
_3.attr({
    'id': '_3',
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_3'
});
var group_c = rsr.set();
var path_kg = rsr.path("M 42.93 73.16 2.98 50.09 2.98 51.78 42.93 74.85 42.93 73.16 z").attr({
    class: 'cls-6',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kg');
group_c.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_c'
});
var group_d = rsr.set();
var path_kh = rsr.path("M 75.79 54.17 35.81 31.13 2.98 50.09 42.93 73.16 75.79 54.17 z").attr({
    class: 'cls-1',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kh');
group_d.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_d'
});
var group_e = rsr.set();
var path_ki = rsr.path("M24.8,34.61l2.64,1.53,2.65-1.53-2.65-1.53ZM18.39,50.26l.54.31L21.58,49l-1.94-1.12h0l-.57-.33-2.65,1.53,2,1.14Zm9.2-14,2.65,1.53,2.64-1.53-2.64-1.53Zm2.79,1.62L33,39.36l2.65-1.52L33,36.31Zm-17,6.44-2.65-1.53L8,44.28l2.65,1.53Zm2.79,1.62-2.65-1.53L10.83,45.9l2.65,1.52Zm2.79,1.61L16.28,46l-2.65,1.53L16.28,49ZM27.59,33l2.65,1.53L32.88,33l-2.64-1.53Zm2.79,1.61L33,36.14l2.65-1.53L33,33.08ZM15.61,51.87l.53.31,2.65-1.53-1.93-1.11h0l-.58-.34-2.65,1.53,2,1.14ZM33.17,36.22l2.65,1.53,2.65-1.53-2.65-1.53Zm-17,12.9-2.65-1.53-2.65,1.53,2.65,1.53Zm-2.79-1.61L10.69,46,8,47.51,10.69,49ZM10.55,45.9,7.9,44.37,5.25,45.9,7.9,47.42ZM24,47l.56.33,2.65-1.53-2-1.13h0l-.56-.32L22,45.9,24,47Zm.84-6,2.64,1.53,2.65-1.53-2.65-1.53Zm-.29,3.22-2.65-1.53-2.65,1.53,2.65,1.53ZM22,39.45,24.65,41l2.65-1.53-2.65-1.53Zm-3.08,1.61-2.64-1.53-2.65,1.53,2.65,1.53Zm.29-3.22,2.65,1.52,2.65-1.52-2.65-1.53ZM22,42.67l2.65,1.53,2.65-1.53-2.65-1.53Zm-5.58-3.22L19.07,41l2.65-1.53-2.65-1.53Zm2.79,1.61,2.65,1.53,2.65-1.53-2.65-1.53Zm2.51,1.61-2.65-1.53-2.65,1.53,2.65,1.53Zm3.08-4.83,2.64,1.52,2.65-1.52-2.65-1.53ZM22,36.22l2.65,1.53,2.65-1.53-2.65-1.53Zm5.59,3.23L30.24,41l2.64-1.53-2.64-1.53Zm-8.67,4.83-2.64-1.53-2.65,1.53,2.65,1.53Zm-2.79-1.61-2.65-1.53-2.65,1.53,2.65,1.53Zm5.59,3.23-2.65-1.53L16.42,45.9l2.65,1.52Zm-.55,2.74.56.32,2.65-1.53L22.43,46.3h0L21.86,46l-2.65,1.53,2,1.13Zm-8.35,4.85.53.3L16,52.26l-1.92-1.11h0l-.59-.35-2.65,1.53,2,1.15ZM7.9,50.81,5.59,52.15l2.65,1.52,2.31-1.33ZM5.11,49.2,2.8,50.53l2.65,1.53,2.3-1.33Zm5.44-.08L7.9,47.59,5.25,49.12,7.9,50.65Zm2.79,1.61L10.69,49.2,8,50.73l2.65,1.53Zm-11-3.14L0,48.92l2.65,1.53L5,49.12Zm5.44-.08L5.11,46,2.46,47.51,5.11,49Zm31-11.29,1.89,1.1h0l.62.35,2.65-1.53-2-1.16h0l-.5-.29ZM33,32.92l2.65-1.53L33,29.86l-2.65,1.53Zm2.79,1.61L38.47,33l-2.65-1.53L33.17,33Zm2.79,1.61,2.65-1.53-2.65-1.53L36,34.61Zm8.1,24.19L44.06,58.8l-2.64,1.53,2.64,1.52Zm-2.79-1.62-2.65-1.53-2.65,1.53,2.65,1.53ZM27.46,45.82l2.64,1.53,2.65-1.53L30.1,44.29ZM52.3,63.55,49.65,62,47,63.55l2.65,1.53Zm2.79,1.61-2.65-1.53-2.65,1.53,2.65,1.53Zm-5.58-3.22-2.65-1.53-2.65,1.53,2.65,1.53Zm11.16,0L58,60.41l-2.65,1.53L58,63.47Zm-2.79,1.61L55.23,62l-2.64,1.53,2.64,1.53ZM27.17,49l-2.65-1.53L21.87,49l2.65,1.53ZM33,49l2.65,1.53L38.34,49l-2.65-1.53Zm5.3,6.45L35.69,54,33,55.49,35.69,57Zm-8.09-8.06L32.9,49l2.64-1.53L32.9,45.9Zm5.58,3.22,2.65,1.53,2.65-1.53-2.65-1.53Zm-5.87,0-2.65-1.53-2.65,1.53,2.65,1.53Zm5.58,3.23L32.9,52.35l-2.65,1.53,2.65,1.53Zm-2.79-1.62L30.1,50.74l-2.64,1.52,2.64,1.53Zm8.38,4.84-2.65-1.53L35.83,57.1l2.65,1.53Zm14,1.61-2.65-1.53-2.65,1.53,2.65,1.53ZM47,57.1l2.65,1.53L52.3,57.1l-2.65-1.53Zm-2.79-1.61L46.86,57l2.65-1.53L46.86,54ZM35.83,44.2l2.65,1.53,2.65-1.53-2.65-1.52Zm2.79,1.62,2.65,1.53,2.65-1.53-2.65-1.53Zm2.8,1.61L44.06,49l2.65-1.53L44.06,45.9Zm0,6.45,2.64,1.53,2.65-1.53-2.65-1.53Zm8.37-1.62,2.65,1.53,2.65-1.53-2.65-1.52Zm8.38,4.84,2.65,1.53,2.65-1.53-2.65-1.53Zm-2.79-1.61L58,57l2.64-1.53L58,54Zm10.88,3.22-2.65-1.53L61,58.71l2.65,1.53ZM44.21,49l2.65,1.53L49.51,49l-2.65-1.53ZM47,50.65l2.65,1.53,2.65-1.53-2.65-1.53Zm5.59,3.23,2.64,1.53,2.65-1.53-2.65-1.53Zm10.88,6.45L60.82,58.8l-2.65,1.53,2.65,1.52Zm-8.38,1.61-2.65-1.53-2.65,1.53,2.65,1.53ZM43.92,55.49,41.27,54l-2.65,1.53L41.27,57Zm14,4.84L55.23,58.8l-2.64,1.53,2.64,1.52Zm-8.37-1.62-2.65-1.53-2.65,1.53,2.65,1.53Zm-2.8-1.61-2.65-1.53L41.42,57.1l2.64,1.53Zm14,1.61L58,57.18l-2.65,1.53L58,60.24ZM52.3,60.33,49.65,58.8,47,60.33l2.65,1.52Zm-8.09-8.07,2.65,1.53,2.65-1.53-2.65-1.52Zm8.38,4.84,2.64,1.53,2.65-1.53-2.65-1.53ZM41.42,50.65l2.64,1.53,2.65-1.53-2.65-1.53Zm8.37,4.84L52.44,57l2.65-1.53L52.44,54ZM47,53.88l2.65,1.53,2.65-1.53-2.65-1.53ZM32.75,49,30.1,47.51,27.46,49l2.64,1.53ZM30,47.43,27.31,45.9l-2.65,1.53L27.31,49ZM38.62,49l2.65,1.53L43.92,49l-2.65-1.53ZM30.1,63.63,27.8,65l2.65,1.53,2.3-1.33Zm5.59,3.23-2.31,1.33L36,69.72l2.31-1.33ZM27.31,62,25,63.35l2.65,1.53L30,63.55Zm8.23-11.37L32.9,49.12l-2.65,1.53,2.65,1.53Zm2.8,1.61-2.65-1.52L33,52.26l2.65,1.53Zm2.79,1.62-2.65-1.53-2.65,1.53,2.65,1.53Zm2.93,17.81L41.76,73l2.65,1.53,2.3-1.33Zm-5.58-3.22-2.3,1.33,2.64,1.53L41.13,70Zm2.79,1.61L39,71.41l2.65,1.53,2.3-1.33ZM28,43.07l-.55-.32L24.8,44.28l1.94,1.12h0l.57.33L30,44.2l-2-1.13ZM32.9,65.24l-2.31,1.33,2.65,1.53,2.3-1.33Zm-14-8.06-2.3,1.33L19.28,60l2.3-1.33Zm5.59,3.23-2.3,1.33,2.64,1.53,2.31-1.33ZM21.73,58.8l-2.31,1.33,2.65,1.53,2.31-1.33Zm9-17.35-.53-.31-2.65,1.53,1.93,1.12h0l.58.33,2.65-1.53-2-1.14Zm-.52,2.75,2.65,1.53,2.64-1.53L32.9,42.68ZM33,45.82l2.65,1.53,2.65-1.53-2.65-1.53Zm2.79,1.61L38.48,49l2.65-1.53L38.48,45.9ZM13.21,53.88l-1.92-1.11h0l-.6-.34-2.3,1.33,2,1.15h0l.52.3Zm.14.08-2.3,1.33,2.65,1.53L16,55.49Zm2.79,1.61-2.3,1.33,2.65,1.53,2.3-1.33Zm22.48-3.31,2.65,1.53,2.65-1.53-2.65-1.52ZM27.17,58.71l-2.65-1.53-2.65,1.53,2.65,1.53Zm-2.79-4.83-2.65-1.53-2.65,1.53,2.65,1.53Zm-5.59,0-2.65-1.53-2.65,1.53,2.65,1.53Zm2.79-1.62-2.65-1.52-2.64,1.52,2.64,1.53Zm2.8,4.84-2.65-1.53L19.08,57.1l2.65,1.53Zm-2.8-1.61L18.93,54l-2.64,1.53L18.93,57Zm5.59,0L24.52,54l-2.65,1.53L24.52,57Zm11.17,6.45-2.65-1.53L33,61.94l2.65,1.53Zm2.79,1.61L38.48,62l-2.65,1.53,2.65,1.53Zm-5.59-3.22L32.9,58.8l-2.65,1.53,2.65,1.52Zm-2.79-1.62L30.1,57.18l-2.64,1.53,2.64,1.53Zm11.17,6.45-2.65-1.53-2.65,1.53,2.65,1.53ZM30,57.1l-2.65-1.53L24.66,57.1l2.65,1.53ZM46.71,70l-2.65-1.53L41.42,70l2.64,1.53Zm2.8,1.61-2.65-1.53-2.65,1.53,2.65,1.53Zm-8.38-4.84-2.65-1.53-2.65,1.53,2.65,1.53Zm-5.59-3.22L32.9,62l-2.65,1.53,2.65,1.53Zm-2.79-1.61L30.1,60.41l-2.64,1.53,2.64,1.53Zm11.17,6.45-2.65-1.53-2.65,1.53,2.65,1.53ZM30,60.33,27.31,58.8l-2.65,1.53,2.65,1.52Zm8.38,4.83-2.65-1.53L33,65.16l2.65,1.53ZM58.17,50.65l2.65,1.53,2.65-1.53-2.65-1.53ZM55.38,49,58,50.57,60.67,49,58,47.51Zm-5.59-3.22,2.65,1.53,2.65-1.53-2.65-1.53Zm2.8,1.61L55.23,49l2.65-1.53L55.23,45.9Zm11.16,6.45,2.65,1.53,2.65-1.53L66.4,52.35ZM61,52.26l2.65,1.53,2.65-1.53-2.65-1.52ZM46.71,66.77l-2.65-1.53-2.64,1.53,2.64,1.53ZM39.12,36.6l-.51-.29L36,37.84l1.91,1.09h0l.61.35,2.65-1.52-2-1.16ZM47,44.2l2.65,1.53L52.3,44.2l-2.65-1.52ZM66.55,55.49,69.19,57l2.65-1.53L69.19,54ZM44.21,42.59l2.65,1.53,2.65-1.53-2.65-1.53ZM41.42,41l2.64,1.53L46.71,41l-2.65-1.53Zm-2.8-1.61,2.65,1.53,2.65-1.53-2.65-1.53Zm10.89,29-2.65-1.53-2.65,1.53,2.65,1.53ZM69.34,57.1,72,58.63l2.65-1.53L72,55.57ZM52.3,70l-2.65-1.53L47,70l2.65,1.53ZM33,42.59l2.65,1.53,2.65-1.53-2.65-1.53Zm13.67,21L44.06,62l-2.64,1.53,2.64,1.53Zm2.8,1.61-2.65-1.53-2.65,1.53,2.65,1.53Zm-8.38-4.83L38.48,58.8l-2.65,1.53,2.65,1.52Zm-2.79-1.62-2.65-1.53L33,58.71l2.65,1.53Zm14,8.06-2.65-1.53L47,66.77l2.65,1.53Zm5.58,0-2.65-1.53-2.64,1.53,2.64,1.53Zm5.59-3.22L60.82,62l-2.65,1.53,2.65,1.53Zm5.58-3.22L66.4,58.8l-2.65,1.53,2.65,1.52ZM35.54,57.1,32.9,55.57,30.25,57.1l2.65,1.53ZM55.09,68.39l-2.65-1.53-2.65,1.53,2.65,1.53Zm5.58-3.23L58,63.63l-2.65,1.53L58,66.69Zm5.59-3.22-2.65-1.53L61,61.94l2.65,1.53ZM49.65,42.51,52.3,41l-2.65-1.53L47,41Zm-16.9,13L30.1,54l-2.64,1.53L30.1,57ZM52.44,44.12l2.65-1.53-2.65-1.53-2.65,1.53Zm-8.38-4.84,2.65-1.52-2.65-1.53-2.64,1.53Zm-10.5.55-.53-.3-2.65,1.53,1.92,1.11h0l.59.34L35.54,41l-2-1.15Zm21.67,5.9,2.65-1.53-2.65-1.52L52.59,44.2ZM46.86,40.9l2.65-1.53-2.65-1.53-2.65,1.53ZM30,53.88l-2.65-1.53-2.65,1.53,2.65,1.53ZM58,47.35l2.64-1.53L58,44.29l-2.65,1.53ZM27.17,52.26l-2.65-1.52-2.65,1.52,2.65,1.53Zm-2.79-1.61-2.65-1.53-2.65,1.53,2.65,1.53ZM60.82,49l2.65-1.53L60.82,45.9l-2.65,1.53Zm-16.9,13-2.65-1.53-2.65,1.53,2.65,1.53Zm25.27-8.15,2.65-1.53-2.65-1.52-2.64,1.52ZM74.78,57l2.65-1.53L74.78,54l-2.65,1.53Zm-2.94,1.69-2.65-1.53-2.64,1.53,2.64,1.53Zm-8.23-8.14L66.26,49l-2.65-1.53L61,49Zm2.79,1.61,2.65-1.53L66.4,49.12l-2.65,1.53Zm-30.06-14-.52-.3-2.65,1.53,1.92,1.1h0l.6.35,2.65-1.53-2-1.15ZM72,55.41l2.65-1.53L72,52.35l-2.65,1.53Zm-19.4-4.76,2.64,1.53,2.65-1.53-2.65-1.53Zm5.58,3.23,2.65,1.53,2.65-1.53-2.65-1.53Zm-2.79-1.62L58,53.79l2.64-1.53L58,50.74Zm8.37,4.84,2.65,1.53,2.65-1.53L66.4,55.57ZM61,55.49,63.61,57l2.65-1.53L63.61,54ZM47,47.43,49.65,49l2.65-1.53L49.65,45.9ZM41.42,44.2l2.64,1.53,2.65-1.53-2.65-1.52Zm-2.8-1.61,2.65,1.53,2.65-1.53-2.65-1.53ZM49.79,49l2.65,1.53L55.09,49l-2.65-1.53ZM35.83,41l2.65,1.53L41.13,41l-2.65-1.53Zm8.38,4.84,2.65,1.53,2.65-1.53-2.65-1.53Z").attr({
    class: 'cls-5',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ki');
group_e.attr({
    'class': 'cls-4',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_e'
});
var group_f = rsr.set();
var path_kj = rsr.path("M 3.64 24.26 3.63 50.47 2.98 50.09 2.98 23.89 3.64 24.26 z").attr({
    class: 'cls-7',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kj');
var path_kk = rsr.path("M 36.45 31.53 36.39 5.35 3.64 24.26 3.63 50.47 5.29 49.51 36.45 31.53 z").attr({
    class: 'cls-8',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kk');
var path_kl = rsr.path("M 40.72 11.25 40.78 34.77 41.47 34.37 41.46 10.9 40.72 11.25 z").attr({
    class: 'cls-9',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kl');
group_f.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_f'
});
var group_g = rsr.set();
var path_km = rsr.path("M 72.67 29.36 72.67 52.29 41.38 34.26 41.38 11.24 72.67 29.36 z").attr({
    class: 'cls-13',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_km');
group_g.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_g'
});
var group_h = rsr.set();
var path_kn = rsr.path("M 51.95 40.15 52.33 39.93 42.07 34.01 41.7 34.22 51.95 40.15 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kn');
var path_ko = rsr.path("M 41.7 34.22 42.07 34.01 42.05 17.81 41.68 18.03 41.7 34.22 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ko');
var path_kp = rsr.path("M 41.68 17.8 42.06 17.59 42.06 11.33 41.68 11.55 41.68 17.8 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kp');
var path_kq = rsr.path("M 62.4 46.18 62.78 45.96 52.52 40.04 52.14 40.26 62.4 46.18 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kq');
var path_kr = rsr.path("M 52.14 40.26 52.52 40.04 52.5 23.84 52.13 24.06 52.14 40.26 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kr');
var path_ks = rsr.path("M 51.93 23.73 52.31 23.51 42.06 17.59 41.68 17.8 51.93 23.73 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ks');
var path_kt = rsr.path("M 52.13 23.84 52.5 23.62 52.51 17.36 52.13 17.58 52.13 23.84 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kt');
var path_ku = rsr.path("M 72.85 52.21 73.22 51.99 62.97 46.07 62.59 46.29 72.85 52.21 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ku');
var path_kv = rsr.path("M 62.59 46.29 62.97 46.07 62.95 29.87 62.57 30.09 62.59 46.29 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kv');
var path_kw = rsr.path("M 62.38 29.76 62.76 29.54 52.5 23.62 52.13 23.84 62.38 29.76 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kw');
var path_kx = rsr.path("M 62.57 29.87 62.95 29.65 62.96 23.39 62.58 23.61 62.57 29.87 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kx');
var path_ky = rsr.path("M 72.83 35.79 73.21 35.57 62.95 29.65 62.57 29.87 72.83 35.79 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ky');
var path_kz = rsr.path("M 73.03 29.43 73.41 29.2 41.87 11 41.49 11.22 73.03 29.43 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_kz');
var path_la = rsr.path("M73,52.54,41.5,34.33V11.22L73,29.42ZM52.14,40.26,62.4,46.18l0-16.2L52.13,24.06v16.2Zm10.45,6,10.26,5.92,0-16.2L62.57,30.09l0,16.2ZM41.7,34.22,52,40.15l0-16.2L41.68,18l0,16.19ZM52.13,23.84l10.25,5.92V23.5L52.13,17.58v6.26Zm-10.45-6,10.25,5.93V17.47L41.68,11.55V17.8ZM62.57,29.87l10.26,5.92V29.53L62.58,23.61v6.26Z").attr({
    class: 'cls-12',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_la');
var path_lb = rsr.path("M 73.04 52.54 73.42 52.32 73.41 29.2 73.03 29.43 73.04 52.54 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lb');
group_h.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_h'
});
var group_i = rsr.set();
var path_lc = rsr.path("M 51.61 40.34 51.99 40.12 41.73 34.2 41.36 34.42 51.61 40.34 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lc');
var path_ld = rsr.path("M 41.36 34.42 41.73 34.2 41.72 18 41.34 18.22 41.36 34.42 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ld');
var path_le = rsr.path("M 41.34 18 41.72 17.78 41.72 11.53 41.34 11.74 41.34 18 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_le');
var path_lf = rsr.path("M 62.06 46.37 62.44 46.15 52.18 40.23 51.8 40.45 62.06 46.37 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lf');
var path_lg = rsr.path("M 51.8 40.45 52.18 40.23 52.16 24.03 51.79 24.25 51.8 40.45 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lg');
var path_lh = rsr.path("M 51.59 23.92 51.97 23.7 41.72 17.78 41.34 18 51.59 23.92 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lh');
var path_li = rsr.path("M 51.79 24.03 52.16 23.81 52.17 17.56 51.79 17.78 51.79 24.03 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_li');
var path_lj = rsr.path("M 72.51 52.41 72.89 52.19 62.63 46.27 62.25 46.48 72.51 52.41 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lj');
var path_lk = rsr.path("M 62.25 46.48 62.63 46.27 62.61 30.07 62.23 30.29 62.25 46.48 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lk');
var path_ll = rsr.path("M 62.04 29.95 62.42 29.73 52.16 23.81 51.79 24.03 62.04 29.95 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ll');
var path_lm = rsr.path("M 62.23 30.07 62.61 29.84 62.62 23.59 62.24 23.81 62.23 30.07 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lm');
var path_ln = rsr.path("M 72.49 35.99 72.87 35.77 62.61 29.84 62.23 30.07 72.49 35.99 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ln');
var path_lo = rsr.path("M 72.69 29.62 73.07 29.4 41.53 11.19 41.15 11.41 72.69 29.62 z").attr({
    class: 'cls-10',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lo');
var path_lp = rsr.path("M72.7,52.74,41.16,34.53V11.41L72.69,29.62ZM51.8,40.45l10.26,5.92,0-16.2L51.79,24.25v16.2Zm10.45,6,10.26,5.93,0-16.2L62.23,30.29l0,16.19ZM41.36,34.42l10.25,5.92,0-16.2L41.34,18.22l0,16.2ZM51.79,24,62,30V23.7L51.79,17.78V24ZM41.34,18l10.25,5.92V17.67L41.34,11.75V18ZM62.23,30.06,72.49,36V29.73L62.24,23.81v6.25Z").attr({
    class: 'cls-12',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lp');
var path_lq = rsr.path("M 72.7 52.74 73.08 52.52 73.07 29.4 72.69 29.62 72.7 52.74 z").attr({
    class: 'cls-11',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lq');
group_i.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_i'
});
var group_j = rsr.set();
var path_lr = rsr.path("M 75.1 28.34 75.1 54.57 72.28 52.94 72.28 29.97 40.78 11.78 40.78 34.76 35.82 31.89 35.82 5.65 75.1 28.34 z").attr({
    class: 'cls-14',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lr');
var path_ls = rsr.path("M 75.79 27.99 35.84 4.91 2.98 23.89 3.64 24.26 35.81 5.69 75.1 28.39 75.79 27.99 z").attr({
    class: 'cls-15',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ls');
group_j.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_j'
});
var _2 = rsr.set();
var path_lt = rsr.path("M 32.62 35.63 24.96 32.04 16 35.91 9.74 38.87 7.3 38.68 6.86 39.88 6.86 48.61 10.96 50.98 35.08 37.06 32.62 35.63 z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lt');
var path_lu = rsr.path("M22.63,50.11l-1.06-.61a.83.83,0,0,0,.1-1.44l.94-.54-.38-.23-.93.54a3.29,3.29,0,0,0-2.61,0l-1-.55-.38.22,1,.56a.83.83,0,0,0,.1,1.43l-1.06.61.39.23,1.07-.63a3.36,3.36,0,0,0,2.34,0l1.07.63Z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lu');
var path_lv = rsr.path("M 65.76 56.98 61.16 54.31 56.99 56.72 61.58 59.4 65.76 56.98 z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lv');
var path_lw = rsr.path("M26.76,56.27A1,1,0,0,0,27.41,58a24.21,24.21,0,0,0,2.68.33,4.79,4.79,0,0,0,2.4-.26c.67-.24,3.11-1.43,1.68-2.4-.36-.25-1.22.15-1.83.12S28,54.41,26.76,56.27Z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lw');
var path_lx = rsr.path("M55,63.39a2.07,2.07,0,0,0-.63-.15v-.06c0-.32-.35-.77-.68-1.1a4.65,4.65,0,0,0-.83-.63h0l-.06,0-1.95-1.13-.07,0-.07,0-4.22,2.45h0l1.54.9a3.12,3.12,0,0,1,.86.76,1.2,1.2,0,0,0,.24.22l.1,0a4.66,4.66,0,0,1,.5.25,1.93,1.93,0,0,0,.56.17,16.32,16.32,0,0,0,2.1.09,5.32,5.32,0,0,0,2-.25c.33-.1.86-.24,1-.6A.68.68,0,0,0,55,63.39Zm-3.07-.31a3.28,3.28,0,0,0-2.19.81l-.11-.15,2.86-1.66C52.75,62.31,52.4,63,51.92,63.08Z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lx');
var path_ly = rsr.path("M 28.72 51.32 40.36 58.04 46.2 54.66 34.57 47.94 28.72 51.32 z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ly');
var path_lz = rsr.path("M51.89,52.09l-2.18,1.26L49,52.92l.87-.5a.19.19,0,0,0,0-.36l-2.12-1.23.6-.35a1.08,1.08,0,0,0,0-2l-2.69-1.55a1.82,1.82,0,0,0-1.64,0L41.3,48.44a1.08,1.08,0,0,0,0,2L44,52a1.82,1.82,0,0,0,1.64,0l.32-.19,1.14.66-1.17.67a.06.06,0,0,0,0,.1l2,1.15a.17.17,0,0,0,.17,0l.24-.13,3.44,2,3.69-2.13Zm-5.36-.57.76-.44,2,1.16-.76.44Z").attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_lz');
var ellipse_ma = rsr.ellipse(19.73, 19.74, 3.05, 1.77).attr({
    class: 'cls-6',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).transform("").data('id', 'ellipse_ma');
_2.attr({
    'id': '_2',
    'data-name': '2',
    'class': 'cls-17',
    'parent': 'group_a',
    'name': '_2'
});
var _1 = rsr.set();
_1.attr({
    'id': '_1',
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_1'
});
var _12 = rsr.set();
var ellipse_mb = rsr.ellipse(20.12, 19.64, 2.57, 1.49).attr({
    class: 'cls-20',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).transform("").data('id', 'ellipse_mb');
var path_mc = rsr.path("M21.07,17.3c.47.11.78.56.78,1.27A4,4,0,0,1,20,21.71a1.56,1.56,0,0,1-1,.25,1.49,1.49,0,0,0,1.05-.23A4,4,0,0,0,22,18.58C21.94,17.83,21.59,17.37,21.07,17.3Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mc');
var path_md = rsr.path("M20.08,19.42a.4.4,0,0,0-.18.31c0,.12.08.16.18.11a.38.38,0,0,0,.18-.32C20.26,19.41,20.18,19.36,20.08,19.42Z").attr({
    class: 'cls-23',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_md');
var ellipse_me = rsr.ellipse(20.12, 19.64, 2.57, 1.49).attr({
    class: 'cls-28',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).transform("").data('id', 'ellipse_me');
var path_mf = rsr.path("M20.12,17.54s1.7,1.81-.21,4.3l.22-.11A4,4,0,0,0,22,18.58C21.94,17.43,21.12,17,20.12,17.54Z").attr({
    class: 'cls-29',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mf');
_12.attr({
    'id': '_1-2',
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_12'
});
var group_k = rsr.set();
var path_mg = rsr.path("M21.25,17.05a1.41,1.41,0,0,0-1.42.14,4.39,4.39,0,0,0-2,3.43,1.39,1.39,0,0,0,.58,1.28l.28.16a1.43,1.43,0,0,1-.58-1.28,4.39,4.39,0,0,1,2-3.43,1.39,1.39,0,0,1,1.41-.14Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mg');
var ellipse_mh = rsr.ellipse(20.12, 19.64, 2.8, 1.62).attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).transform("").data('id', 'ellipse_mh');
group_k.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_k'
});
var group_l = rsr.set();
var path_mi = rsr.path("M21.67,19.08l0,.14-.34.09,0-.14ZM21,18l.25-.43-.08,0-.25.43,0,0Zm0,2.18a.16.16,0,0,0,0,.07l.25.14.08-.14L21,20.07A.16.16,0,0,0,21,20.14Zm-.47-2.71-.11,0-.09.44.11,0Zm-.19,3.51.09.33.11-.09-.09-.34Zm-.6-2.7-.09-.33-.11.09.09.34Zm-.19,3.51.11,0,.09-.44-.11,0ZM19.05,19l0-.06-.25-.15-.08.14.25.14Zm0,2.18-.25.43.08,0,.25-.43-.05,0Zm-.3-1.35-.34.09,0,.15.34-.1ZM18.35,21l0,.11.34-.3,0-.11Zm3.32-2.8,0-.11-.34.3,0,.11Z").attr({
    class: 'cls-22',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mi');
group_l.attr({
    'class': 'cls-21',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_l'
});
var group_m = rsr.set();
var path_mj = rsr.path("M20,19.66v.05a.57.57,0,0,1,.11-.11s0,0,.05-.05,0-.27,0-.4a2.26,2.26,0,0,0-.1-.62,2.9,2.9,0,0,0-.06.36,2.84,2.84,0,0,0,0,.77Z").attr({
    class: 'cls-24',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mj');
var path_mk = rsr.path("M20.22,19.59a.37.37,0,0,1,0,.14c1.1.35,1.18.25,1.18.25S21.45,19.92,20.22,19.59Z").attr({
    class: 'cls-24',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mk');
var path_ml = rsr.path("M 19.02 21.4 18.99 21.39 20.44 19.11 20.46 19.12 19.02 21.4 z").attr({
    class: 'cls-25',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ml');
group_m.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_m'
});
var group_n = rsr.set();
var path_mm = rsr.path("M20.21,19.44a.11.11,0,0,0-.11,0,.36.36,0,0,0-.16.28.11.11,0,0,0,0,.08s0,0,0,0l.06,0a.1.1,0,0,1-.05-.1.34.34,0,0,1,.16-.27.12.12,0,0,1,.11,0Z").attr({
    class: 'cls-26',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mm');
var path_mn = rsr.path("M20.16,19.49a.34.34,0,0,0-.16.27c0,.1.07.14.16.09a.34.34,0,0,0,.16-.27C20.32,19.47,20.25,19.43,20.16,19.49Z").attr({
    class: 'cls-27',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mn');
group_n.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_n'
});
var group_o = rsr.set();
group_o.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_o'
});
var group_p = rsr.set();
var path_mo = rsr.path("M 33.23 28.24 29.31 30.5 11.23 40.95 11.23 41.44 34.9 27.76 34.9 27.26 33.23 28.24 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mo');
var path_mp = rsr.path("M 11.23 50.63 12.53 49.88 12.53 40.57 11.23 41.32 11.23 50.63 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mp');
group_p.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_p'
});
var _4 = rsr.set();
_4.attr({
    'id': '_4',
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_4'
});
var group_q = rsr.set();
var path_mq = rsr.path("M 24.57 33.24 24.57 42.93 20.64 40.66 20.64 30.98 24.57 33.24 z").attr({
    class: 'cls-18',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mq');
var path_mr = rsr.path("M 11.23 40.95 11.23 50.63 7.3 48.36 7.3 38.68 11.23 40.95 z").attr({
    class: 'cls-18',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mr');
var path_ms = rsr.path("M 33.23 28.24 29.31 30.5 24.57 33.24 24.57 42.93 34.9 36.94 34.9 27.26 33.23 28.24 z").attr({
    class: 'cls-19',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ms');
group_q.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_q'
});
var group_r = rsr.set();
group_r.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_r'
});
var group_s = rsr.set();
var path_mt = rsr.path("M 34.06 28.71 25.53 33.66 25.53 39.47 34.06 34.53 34.06 28.71 z").attr({
    class: 'cls-8',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mt');
var path_mu = rsr.path("M 34.9 27.26 30.97 24.99 7.3 38.68 11.23 40.95 28.29 31.19 34.9 27.26 z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mu');
var path_mv = rsr.path("M25.53,37.55v0l8.52-4.92v0Zm0-2v0l8.52-4.92v0Z").attr({
    class: 'cls-30',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mv');
group_s.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_s'
});
var group_t = rsr.set();
var path_mw = rsr.path("M30.71,35.46c-.26.72-1.92,1.46-1.45.83l-.05-.06c-.12.14-.32.38-.28.47a.08.08,0,0,0,.08,0,2.56,2.56,0,0,0,1.78-1.26Z").attr({
    class: 'cls-30',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mw');
group_t.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_t'
});
var group_u = rsr.set();
var path_mx = rsr.path("M30.24,35.91a2.67,2.67,0,0,1-1,.32v.15a2.67,2.67,0,0,0,1-.32,1.12,1.12,0,0,0,.56-.61V35.3A1.12,1.12,0,0,1,30.24,35.91Z").attr({
    class: 'cls-31',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mx');
var path_my = rsr.path("M30.59,35.43a.75.75,0,0,1-.39.46,1.9,1.9,0,0,1-.79.22l-.21.12a2.67,2.67,0,0,0,1-.32,1.12,1.12,0,0,0,.56-.61Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_my');
group_u.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_u'
});
var group_v = rsr.set();
var path_mz = rsr.path("M30.71,33.51c-.26.72-1.92,1.46-1.45.83l-.05-.06c-.12.14-.32.38-.28.47a.08.08,0,0,0,.08,0,2.56,2.56,0,0,0,1.78-1.26Z").attr({
    class: 'cls-30',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_mz');
group_v.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_v'
});
var group_w = rsr.set();
var path_na = rsr.path("M30.24,34a2.69,2.69,0,0,1-1,.33v.14a2.67,2.67,0,0,0,1-.32,1.12,1.12,0,0,0,.56-.61v-.15A1.06,1.06,0,0,1,30.24,34Z").attr({
    class: 'cls-32',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_na');
var path_nb = rsr.path("M30.59,33.48a.75.75,0,0,1-.39.46,1.9,1.9,0,0,1-.79.22l-.21.13a2.69,2.69,0,0,0,1-.33,1.06,1.06,0,0,0,.56-.61Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nb');
group_w.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_w'
});
var group_x = rsr.set();
var path_nc = rsr.path("M30.71,31.56c-.26.73-1.92,1.46-1.45.83l-.05,0c-.12.13-.32.37-.28.47a.1.1,0,0,0,.08,0,2.56,2.56,0,0,0,1.78-1.26Z").attr({
    class: 'cls-30',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nc');
group_x.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_x'
});
var group_y = rsr.set();
var path_nd = rsr.path("M30.24,32a2.53,2.53,0,0,1-1,.33v.15a2.69,2.69,0,0,0,1-.33,1.06,1.06,0,0,0,.56-.61v-.14A1.08,1.08,0,0,1,30.24,32Z").attr({
    class: 'cls-33',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nd');
var path_ne = rsr.path("M30.59,31.53a.73.73,0,0,1-.39.46,1.76,1.76,0,0,1-.79.22l-.21.13a2.53,2.53,0,0,0,1-.33,1.08,1.08,0,0,0,.56-.6Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ne');
group_y.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_y'
});
var group_z = rsr.set();
var path_nf = rsr.path("M 20.41 31.2 21.87 32.04 26.26 29.51 26.25 29.5 24.8 28.66 20.41 31.2 z").attr({
    class: 'cls-34',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nf');
group_z.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_z'
});
var group_aa = rsr.set();
group_aa.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_aa'
});
var group_ab = rsr.set();
var path_ng = rsr.path("M26,28.46c0,.09,0,.18-.07.2s-.08,0-.08-.11a.29.29,0,0,1,.08-.21S26,28.37,26,28.46Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ng');
group_ab.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ab'
});
var group_ac = rsr.set();
var path_nh = rsr.path("M26,27.5l0,0a0,0,0,0,0,0,0l-1.31-.76v0l-.05.13-.21,0,1.24.72h.12Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nh');
var path_ni = rsr.path("M24.41,26.9l1.24.72h.12L26,27.5l-1.31-.76Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ni');
group_ac.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ac'
});
var group_ad = rsr.set();
var path_nj = rsr.path("M 25.99 27.52 25.99 29.6 25.78 29.72 25.78 27.64 25.99 27.52 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nj');
var path_nk = rsr.path("M 25.64 27.64 25.64 29.72 24.34 28.97 24.34 26.89 25.64 27.64 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nk');
var path_nl = rsr.path("M26,27.44s0,0,0,.08l-.21.12a.17.17,0,0,1-.14,0l-1.3-.75,0,0,0,0,.18,0,.08-.13v0h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nl');
group_ad.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ad'
});
var group_ae = rsr.set();
var path_nm = rsr.path("M26,27.48v2.08s0,0,0,0V27.52a.05.05,0,0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nm');
group_ae.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ae'
});
var group_af = rsr.set();
var path_nn = rsr.path("M25.78,27.64v2.08a.17.17,0,0,1-.14,0V27.64a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nn');
group_af.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_af'
});
var group_ag = rsr.set();
var path_no = rsr.path("M25.5,28.73c0,.09,0,.18-.07.2s-.08,0-.08-.12,0-.18.08-.2S25.5,28.64,25.5,28.73Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_no');
group_ag.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ag'
});
var group_ah = rsr.set();
var path_np = rsr.path("M25.51,27.76s0,0,0,0l0,0L24.21,27v0l-.06.13-.21,0,1.25.73h.11Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_np');
var path_nq = rsr.path("M23.94,27.16l1.25.73h.11l.21-.13L24.21,27Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nq');
group_ah.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ah'
});
var group_ai = rsr.set();
var path_nr = rsr.path("M 25.53 27.78 25.53 29.86 25.32 29.98 25.32 27.91 25.53 27.78 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nr');
var path_ns = rsr.path("M 25.18 27.91 25.18 29.98 23.88 29.23 23.88 27.16 25.18 27.91 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ns');
var path_nt = rsr.path("M25.53,27.7s0,.06,0,.08l-.21.13a.17.17,0,0,1-.14,0l-1.3-.75,0,0,0,0,.19,0,.08-.13v0l0,0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nt');
group_ai.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ai'
});
var group_aj = rsr.set();
var path_nu = rsr.path("M25.55,27.74v2.08s0,0,0,0V27.78s0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nu');
group_aj.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_aj'
});
var group_ak = rsr.set();
var path_nv = rsr.path("M25.32,27.91V30a.12.12,0,0,1-.14,0V27.91a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nv');
group_ak.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ak'
});
var group_al = rsr.set();
var path_nw = rsr.path("M25,29a.29.29,0,0,1-.08.21s-.07,0-.07-.12,0-.18.07-.2S25,28.9,25,29Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nw');
group_al.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_al'
});
var group_am = rsr.set();
var path_nx = rsr.path("M25.05,28l0,0s0,0,0,0l-1.31-.76v.05l0,.13-.21,0,1.25.72.05,0,.06,0Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nx');
var path_ny = rsr.path("M23.48,27.43l1.25.72.05,0,.06,0,.21-.12-1.31-.75Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ny');
group_am.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_am'
});
var group_an = rsr.set();
var path_nz = rsr.path("M 25.06 28.05 25.06 30.13 24.85 30.25 24.85 28.17 25.06 28.05 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_nz');
var path_oa = rsr.path("M 24.71 28.17 24.71 30.25 23.41 29.5 23.41 27.42 24.71 28.17 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oa');
var path_ob = rsr.path("M25.06,28a0,0,0,0,1,0,.08l-.21.12a.17.17,0,0,1-.14,0l-1.29-.75h0l0,0,.19,0,.07-.13v-.05h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ob');
group_an.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_an'
});
var group_ao = rsr.set();
var path_oc = rsr.path("M25.09,28v2.08a.05.05,0,0,1,0,0V28.05a.05.05,0,0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oc');
group_ao.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ao'
});
var group_ap = rsr.set();
var path_od = rsr.path("M24.85,28.17v2.08a.17.17,0,0,1-.14,0V28.17a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_od');
group_ap.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ap'
});
var group_aq = rsr.set();
group_aq.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_aq'
});
var group_ar = rsr.set();
var path_oe = rsr.path("M24.6,29.25a.25.25,0,0,1-.08.2s-.07,0-.07-.11a.29.29,0,0,1,.07-.21S24.6,29.16,24.6,29.25Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oe');
group_ar.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ar'
});
var group_as = rsr.set();
var path_of = rsr.path("M24.61,28.29l0,0a0,0,0,0,0,0,0l-1.31-.76v0l-.05.13-.21,0,1.25.72h.11Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_of');
var path_og = rsr.path("M23,27.69l1.25.72h.11l.21-.12-1.31-.76Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_og');
group_as.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_as'
});
var group_at = rsr.set();
var path_oh = rsr.path("M 24.62 28.31 24.62 30.39 24.41 30.51 24.41 28.43 24.62 28.31 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oh');
var path_oi = rsr.path("M 24.27 28.43 24.27 30.51 22.98 29.76 22.98 27.68 24.27 28.43 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oi');
var path_oj = rsr.path("M24.62,28.23s0,.05,0,.08l-.21.12a.17.17,0,0,1-.14,0L23,27.68l0,0,0,0,.19,0,.07-.13v0h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oj');
group_at.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_at'
});
var group_au = rsr.set();
var path_ok = rsr.path("M24.65,28.27v2.08l0,0V28.31a.05.05,0,0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ok');
group_au.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_au'
});
var group_av = rsr.set();
var path_ol = rsr.path("M24.41,28.43v2.08a.17.17,0,0,1-.14,0V28.43a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ol');
group_av.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_av'
});
var group_aw = rsr.set();
var path_om = rsr.path("M24.13,29.52c0,.09,0,.18-.07.2s-.08,0-.08-.12a.25.25,0,0,1,.08-.2S24.13,29.43,24.13,29.52Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_om');
group_aw.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_aw'
});
var group_ax = rsr.set();
var path_on = rsr.path("M24.15,28.55s0,0,0,0a0,0,0,0,0,0,0l-1.31-.75v0l-.05.13-.22,0,1.25.72.06,0,.06,0Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_on');
var path_oo = rsr.path("M22.57,28l1.25.72.06,0,.06,0,.2-.12-1.3-.75Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oo');
group_ax.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ax'
});
var group_ay = rsr.set();
var path_op = rsr.path("M 24.16 28.57 24.16 30.65 23.95 30.77 23.95 28.7 24.16 28.57 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_op');
var path_oq = rsr.path("M 23.81 28.7 23.81 30.77 22.51 30.02 22.51 27.95 23.81 28.7 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oq');
var path_or = rsr.path("M24.16,28.49a0,0,0,0,1,0,.08l-.21.12a.12.12,0,0,1-.14,0L22.51,28l0,0,0,0,.19,0,.08-.13v0l0,0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_or');
group_ay.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ay'
});
var group_az = rsr.set();
var path_os = rsr.path("M24.19,28.53v2.08s0,0,0,0V28.57s0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_os');
group_az.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_az'
});
var group_ba = rsr.set();
var path_ot = rsr.path("M24,28.69v2.08a.12.12,0,0,1-.14,0V28.69a.12.12,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ot');
group_ba.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ba'
});
var group_bb = rsr.set();
var path_ou = rsr.path("M23.67,29.78a.26.26,0,0,1-.08.21s-.07,0-.07-.12,0-.18.07-.2S23.67,29.69,23.67,29.78Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ou');
group_bb.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bb'
});
var group_bc = rsr.set();
var path_ov = rsr.path("M23.68,28.82l0,0s0,0,0,0L22.38,28v.05l-.06.12-.21,0,1.25.72.06,0,0,0Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ov');
var path_ow = rsr.path("M22.11,28.22l1.25.72.06,0,0,0,.21-.12-1.3-.75Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ow');
group_bc.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bc'
});
var group_bd = rsr.set();
var path_ox = rsr.path("M 23.7 28.84 23.7 30.92 23.48 31.04 23.48 28.96 23.7 28.84 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ox');
var path_oy = rsr.path("M 23.35 28.96 23.35 31.04 22.05 30.29 22.05 28.21 23.35 28.96 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oy');
var path_oz = rsr.path("M23.69,28.76a0,0,0,0,1,0,.08l-.21.12a.17.17,0,0,1-.14,0l-1.3-.75h0l0,0,.19,0,.07-.13V28h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_oz');
group_bd.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bd'
});
var group_be = rsr.set();
var path_pa = rsr.path("M23.72,28.8v2.08a.08.08,0,0,1,0,0V28.84a.08.08,0,0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pa');
group_be.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_be'
});
var group_bf = rsr.set();
var path_pb = rsr.path("M23.49,29V31a.17.17,0,0,1-.14,0V29a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pb');
group_bf.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bf'
});
var group_bg = rsr.set();
group_bg.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bg'
});
var group_bh = rsr.set();
var path_pc = rsr.path("M23.23,30c0,.09,0,.18-.08.2s-.07,0-.07-.11a.29.29,0,0,1,.07-.21C23.2,29.9,23.23,30,23.23,30Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pc');
group_bh.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bh'
});
var group_bi = rsr.set();
var path_pd = rsr.path("M23.24,29.08l0,0,0,0-1.3-.76v0l-.06.13-.21,0,1.25.72H23Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pd');
var path_pe = rsr.path("M21.67,28.48l1.25.72H23l.21-.12-1.3-.76Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pe');
group_bi.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bi'
});
var group_bj = rsr.set();
var path_pf = rsr.path("M 23.25 29.1 23.25 31.18 23.05 31.3 23.05 29.22 23.25 29.1 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pf');
var path_pg = rsr.path("M 22.91 29.22 22.91 31.3 21.61 30.55 21.61 28.47 22.91 29.22 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pg');
var path_ph = rsr.path("M23.25,29s0,.05,0,.08l-.21.12a.17.17,0,0,1-.14,0l-1.3-.75,0,0,0,0,.19,0,.07-.13v0h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ph');
group_bj.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bj'
});
var group_bk = rsr.set();
var path_pi = rsr.path("M23.28,29.06v2.07a.05.05,0,0,1,0,0V29.1s0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pi');
group_bk.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bk'
});
var group_bl = rsr.set();
var path_pj = rsr.path("M23.05,29.22V31.3a.17.17,0,0,1-.14,0V29.22a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pj');
group_bl.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bl'
});
var group_bm = rsr.set();
var path_pk = rsr.path("M22.77,30.31a.27.27,0,0,1-.08.2s-.07,0-.07-.12,0-.18.07-.2S22.77,30.22,22.77,30.31Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pk');
group_bm.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bm'
});
var group_bn = rsr.set();
var path_pl = rsr.path("M22.78,29.34l0,0,0,0-1.31-.76v.05l0,.13-.21,0,1.24.72.06,0,.06,0Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pl');
var path_pm = rsr.path("M21.21,28.74l1.24.72.06,0,.06,0,.21-.12-1.31-.75Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pm');
group_bn.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bn'
});
var group_bo = rsr.set();
var path_pn = rsr.path("M 22.79 29.36 22.79 31.44 22.58 31.56 22.58 29.48 22.79 29.36 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pn');
var path_po = rsr.path("M 22.44 29.48 22.44 31.56 21.14 30.81 21.14 28.73 22.44 29.48 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_po');
var path_pp = rsr.path("M22.79,29.28a0,0,0,0,1,0,.08l-.21.12a.12.12,0,0,1-.14,0l-1.3-.75h0l0,0,.19,0,.07-.13v-.05h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pp');
group_bo.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bo'
});
var group_bp = rsr.set();
var path_pq = rsr.path("M22.82,29.32V31.4s0,0,0,0V29.36s0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pq');
group_bp.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bp'
});
var group_bq = rsr.set();
var path_pr = rsr.path("M22.58,29.48v2.08a.12.12,0,0,1-.14,0V29.48a.12.12,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pr');
group_bq.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bq'
});
var group_br = rsr.set();
var path_ps = rsr.path("M22.3,30.57a.29.29,0,0,1-.07.21s-.08,0-.08-.12a.29.29,0,0,1,.08-.21S22.3,30.48,22.3,30.57Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ps');
group_br.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_br'
});
var group_bs = rsr.set();
var path_pt = rsr.path("M22.32,29.61s0,0,0,0,0,0,0,0L21,28.81v0L21,29l-.21,0,1.25.72h.12Z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pt');
var path_pu = rsr.path("M20.74,29l1.25.72h.12l.2-.12L21,28.85Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pu');
group_bs.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bs'
});
var group_bt = rsr.set();
var path_pv = rsr.path("M 22.33 29.63 22.33 31.71 22.12 31.83 22.12 29.75 22.33 29.63 z").attr({
    class: 'cls-19',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pv');
var path_pw = rsr.path("M 21.98 29.75 21.98 31.83 20.68 31.08 20.68 29 21.98 29.75 z").attr({
    class: 'cls-36',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pw');
var path_px = rsr.path("M22.33,29.55a0,0,0,0,1,0,.08l-.21.12a.17.17,0,0,1-.14,0L20.68,29h0l0,0,.19,0,.08-.13v-.05h0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_px');
group_bt.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bt'
});
var group_bu = rsr.set();
var path_py = rsr.path("M22.36,29.59v2.08a.05.05,0,0,1,0,0V29.63a.05.05,0,0,0,0,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_py');
group_bu.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bu'
});
var group_bv = rsr.set();
var path_pz = rsr.path("M22.12,29.75v2.08a.17.17,0,0,1-.14,0V29.75a.17.17,0,0,0,.14,0Z").attr({
    class: 'cls-35',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_pz');
group_bv.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_bv'
});
var group_bw = rsr.set();
var path_qa = rsr.path("M30.45,25.62a1.27,1.27,0,0,1,1.16.18c.23.23.09.53-.31.67a1.21,1.21,0,0,1-1.16-.18C29.9,26.06,30,25.76,30.45,25.62Z").attr({
    class: 'cls-34',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qa');
group_bw.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bw'
});
var _5 = rsr.set();
_5.attr({
    'id': '_5',
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_5'
});
var group_bx = rsr.set();
var path_qb = rsr.path("M31,24.53h-.15c-.62.07-.85.39-.7.64h0a.29.29,0,0,0,0,.27c.07.15.25.37.25.42s.12.23.34.29a1,1,0,0,0,.41,0c.22-.06.33-.17.34-.29s.18-.27.25-.42a.29.29,0,0,0,0-.27C31.82,24.92,31.59,24.6,31,24.53Z").attr({
    class: 'cls-7',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qb');
var path_qc = rsr.path("M31.13,26.05a.94.94,0,0,1-.47,0,.47.47,0,0,1-.31-.21v0s0,0,0,0a.49.49,0,0,0,.29.17.69.69,0,0,0,.25,0,.67.67,0,0,0,.24,0,.46.46,0,0,0,.29-.17,0,0,0,0,0,0,0v0A.53.53,0,0,1,31.13,26.05Z").attr({
    class: 'cls-37',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qc');
group_bx.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bx'
});
var group_by = rsr.set();
var ellipse_qd = rsr.ellipse(30.9, 25, 0.82, 0.47).attr({
    class: 'cls-38',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'ellipse_qd');
var ellipse_qe = rsr.ellipse(30.9, 25, 0.82, 0.47).attr({
    class: 'cls-39',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'ellipse_qe');
var path_qf = rsr.path("M31.41,24.7a1.17,1.17,0,0,0-1,0,.32.32,0,0,0,0,.6,1.17,1.17,0,0,0,1,0A.32.32,0,0,0,31.41,24.7Z").attr({
    class: 'cls-7',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qf');
var path_qg = rsr.path("M31.41,24.8a1.17,1.17,0,0,0-1,0,.26.26,0,0,0,0,.5,1.17,1.17,0,0,0,1,0,.25.25,0,0,0,0-.5Z").attr({
    class: 'cls-40',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qg');
group_by.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_by'
});
var group_bz = rsr.set();
var path_qh = rsr.path("M31.24,23.33a.81.81,0,0,1,.07-.22,2.71,2.71,0,0,1,.47-.72,1,1,0,0,1,.78-.32,1.58,1.58,0,0,0-.56.53,6.22,6.22,0,0,0-.33,1.32s-.05.1-.1.1-.07,0-.09-.07C31.35,23.7,31.24,23.61,31.24,23.33Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qh');
var path_qi = rsr.path("M30.52,23.1a.5.5,0,0,0,0-.21,2.68,2.68,0,0,0-.22-.73.89.89,0,0,0-.58-.46,1.31,1.31,0,0,1,.34.59,5.38,5.38,0,0,1,0,1.2s0,.1.05.11.07,0,.1,0C30.34,23.38,30.45,23.33,30.52,23.1Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qi');
group_bz.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_bz'
});
var group_ca = rsr.set();
var path_qj = rsr.path("M31.14,23a11.11,11.11,0,0,0-.21-2,9.71,9.71,0,0,0-.2,2.05c0,.21.06,1.91.13,2.27,0,0,.19,0,.19,0A15.6,15.6,0,0,0,31.14,23Z").attr({
    class: 'cls-46',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qj');
group_ca.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ca'
});
var group_cb = rsr.set();
var path_qk = rsr.path("M30.77,24.79h.13a13.5,13.5,0,0,0-.21-3.21,3.51,3.51,0,0,0-.27-.71,8.23,8.23,0,0,0,0,1.79c.06.55.19,1.51.28,2.16Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qk');
var path_ql = rsr.path("M30.83,25.1a14.44,14.44,0,0,1,.29-3.87,4.87,4.87,0,0,1,.29-.75,8.36,8.36,0,0,1,0,1.87c-.11.76-.36,2.27-.45,2.77C30.92,25.14,30.84,25.13,30.83,25.1Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ql');
var path_qm = rsr.path("M31.08,25.14a15.62,15.62,0,0,0,.64-2.78A3,3,0,0,0,31.59,21a14.54,14.54,0,0,1-.28,1.66c-.07.66-.29,2.07-.31,2.5C31,25.16,31.08,25.15,31.08,25.14Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qm');
var path_qn = rsr.path("M31.3,21.51a4.2,4.2,0,0,1,.12,1.59,9.6,9.6,0,0,1-.42,2h-.19A18.09,18.09,0,0,1,31,23.3,17.69,17.69,0,0,1,31.3,21.51Z").attr({
    class: 'cls-42',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qn');
var path_qo = rsr.path("M32.12,21.92a3.19,3.19,0,0,0-.69,1.25,8.06,8.06,0,0,0-.39,1.9l0,.07s.14,0,.15,0c.15-.29.44-1.46.49-1.6A13.85,13.85,0,0,0,32.12,21.92Z").attr({
    class: 'cls-43',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qo');
var path_qp = rsr.path("M29.44,22.16a1.53,1.53,0,0,1,.95.92A7.92,7.92,0,0,1,31,24.82c0,.07-.13.15-.15.12a14.49,14.49,0,0,1-.61-1.51A3.64,3.64,0,0,0,29.44,22.16Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qp');
var path_qq = rsr.path("M30.38,25s.16,0,.16,0a6.07,6.07,0,0,0-.35-1.61,2,2,0,0,0-.64-.92,10.71,10.71,0,0,0,.38,1.28C30,23.83,30.27,24.79,30.38,25Z").attr({
    class: 'cls-42',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qq');
var path_qr = rsr.path("M30.21,21.73a3.72,3.72,0,0,0,0,1.44,9.32,9.32,0,0,0,.55,2s0,0,.16,0h0a15.58,15.58,0,0,0-.29-1.77A14.16,14.16,0,0,0,30.21,21.73Z").attr({
    class: 'cls-43',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qr');
group_cb.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cb'
});
var group_cc = rsr.set();
var path_qs = rsr.path("M30.42,24.68a2.18,2.18,0,0,0-.34-1.07,1.81,1.81,0,0,0-.8-.7,6.93,6.93,0,0,1,1,1.83Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qs');
var path_qt = rsr.path("M32.55,22.84a1.78,1.78,0,0,0-.95.78,4.08,4.08,0,0,0-.38,1.11.66.66,0,0,0,0,.28.12.12,0,0,0,.11,0s.05,0,.05,0A5.08,5.08,0,0,1,32.55,22.84Z").attr({
    class: 'cls-41',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qt');
group_cc.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cc'
});
var group_cd = rsr.set();
var path_qu = rsr.path("M30.2,23.22a4.67,4.67,0,0,1,.25,1.9c0,.09.14.09.16.06a3.69,3.69,0,0,0,0-2A1.56,1.56,0,0,0,30.2,23.22Z").attr({
    class: 'cls-44',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qu');
var path_qv = rsr.path("M30.18,23.22a1.3,1.3,0,0,0,.11.72,1.32,1.32,0,0,1,.3-.74A1.14,1.14,0,0,0,30.18,23.22Z").attr({
    class: 'cls-45',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qv');
group_cd.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cd'
});
var group_ce = rsr.set();
var path_qw = rsr.path("M31.77,23.58a4.25,4.25,0,0,0-.6,1.61c0,.07-.14,0-.14,0a3.25,3.25,0,0,1,.4-1.72A1.28,1.28,0,0,1,31.77,23.58Z").attr({
    class: 'cls-44',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qw');
var path_qx = rsr.path("M31.79,23.59a1.19,1.19,0,0,1-.24.6,1.17,1.17,0,0,0-.12-.7A.81.81,0,0,1,31.79,23.59Z").attr({
    class: 'cls-45',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qx');
group_ce.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ce'
});
var group_cf = rsr.set();
var path_qy = rsr.path("M15.89,33.14l-.79.46s0,0,0,0h0a.05.05,0,0,1,0,0l.79-.45s0,0,0,0h0A.05.05,0,0,1,15.89,33.14Z").attr({
    class: 'cls-57',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qy');
group_cf.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cf'
});
var group_cg = rsr.set();
var path_qz = rsr.path("M 15.79 33.65 13.66 34.89 14.24 35.23 16.37 33.99 15.79 33.65 z").attr({
    class: 'cls-47',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_qz');
var path_ra = rsr.path("M16.5,34.15a.21.21,0,0,0-.06-.1.13.13,0,0,0-.07-.06l-2.13,1.24a.19.19,0,0,1,.07.06l.06.09a.27.27,0,0,1,0,.12l2.13-1.24A.26.26,0,0,0,16.5,34.15Z").attr({
    class: 'cls-48',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ra');
var path_rb = rsr.path("M14.24,35.23l-.58-.34v.18l.74.43A.34.34,0,0,0,14.24,35.23Z").attr({
    class: 'cls-49',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rb');
var path_rc = rsr.path("M14.31,35.29l2.13-1.24a.21.21,0,0,1,.06.1l-2.13,1.23-.06-.09Z").attr({
    class: 'cls-50',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rc');
group_cg.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_cg'
});
var group_ch = rsr.set();
var path_rd = rsr.path("M 14.29 33.73 14.3 34.83 14.16 34.75 14.16 33.65 14.29 33.73 z").attr({
    class: 'cls-51',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rd');
var path_re = rsr.path("M 15.51 32.88 15.64 32.95 14.29 33.73 14.16 33.65 15.51 32.88 z").attr({
    class: 'cls-52',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_re');
var path_rf = rsr.path("M 15.64 32.95 15.64 34.05 14.3 34.83 14.29 33.73 15.64 32.95 z").attr({
    class: 'cls-53',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rf');
group_ch.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ch'
});
var _13 = rsr.set();
_13.attr({
    'id': '_1-3',
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_13'
});
var group_ci = rsr.set();
var path_rg = rsr.path("M 11.3 35.88 11.15 35.8 11.15 30.56 11.3 30.65 11.3 35.88 z").attr({
    class: 'cls-49',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rg');
var path_rh = rsr.path("M 11.3 30.65 11.15 30.56 18.92 26.07 19.07 26.16 11.3 30.65 z").attr({
    class: 'cls-47',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rh');
var path_ri = rsr.path("M 19.07 26.16 19.07 31.39 11.3 35.88 11.3 30.65 19.07 26.16 z").attr({
    class: 'cls-54',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ri');
var path_rj = rsr.path("M 11.4 30.71 18.96 26.34 18.96 31.21 11.4 35.57 11.4 30.71 z").attr({
    class: 'cls-55',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rj');
var path_rk = rsr.path("M 17.88 31.83 18.96 31.21 18.96 26.34 14.8 28.75 17.88 31.83 z").attr({
    class: 'cls-56',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rk');
group_ci.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ci'
});
var group_cj = rsr.set();
var path_rl = rsr.path("M19.08,34.66,17.87,34a.13.13,0,0,0-.12,0L14,36.13a.05.05,0,0,0,0,0v.14a.05.05,0,0,0,0,0l1.21.7a.24.24,0,0,0,.12,0l3.77-2.18,0,0v-.15S19.09,34.66,19.08,34.66Z").attr({
    class: 'cls-54',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rl');
var path_rm = rsr.path("M15.3,35.37,14,36.13a.05.05,0,0,0,0,0v.14a.05.05,0,0,0,0,0l1.21.7a.21.21,0,0,0,.11,0Z").attr({
    class: 'cls-58',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rm');
var path_rn = rsr.path("M15.19,35.44,14,36.13a.05.05,0,0,0,0,0v.14a.05.05,0,0,0,0,0l1.21.69Z").attr({
    class: 'cls-49',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rn');
group_cj.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cj'
});
var group_ck = rsr.set();
var path_ro = rsr.path("M19.08,34.72,15.31,36.9a.13.13,0,0,1-.12,0L14,36.2a0,0,0,0,1,0-.07L17.75,34a.13.13,0,0,1,.12,0l1.21.7S19.11,34.7,19.08,34.72Z").attr({
    class: 'cls-47',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ro');
var path_rp = rsr.path("M15.24,36.83h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1ZM15,36.69h0l-.14-.08h0l.25-.14h.05l.13.08h0l-.24.15Zm.5,0h0l-.13-.08h0l.16-.1h.05l.13.08h0l-.16.09Zm-.74-.12h0l-.13-.08h0l.16-.1h.05l.13.08h0l-.16.09Zm1,0h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.17.09Zm-.41,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm-.83-.07h0l-.14-.08h0l.25-.15h.05l.14.08h0l-.25.14Zm.5,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0l-.14-.08h0l.16-.1h0l.14.08h0l-.16.09Zm-.41,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.16.1Zm-1.33-.06h0l-.14-.07h0l.16-.09h.05l.14.07h0l-.17.09Zm1,0h0l-.14-.08h0l.16-.09h0s0,0,0,0l.14.08h0l-.16.1Zm1,0h0l-.13-.08h0l1.21-.71h0l.14.08h0l-1.22.7Zm-1.42,0h0l-.14-.08h0l.16-.1h0l.14.08h0l-.16.09Zm1,0h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm-1.34-.06s0,0,0,0L14.39,36h0l.16-.1h0l.14.08h0l-.16.09Zm1,0h0L15.4,36h0l.16-.09h0l.13.08h0l-.16.09Zm-.42,0h0L15,36h0l.17-.09h0l.14.08h0l-.16.09Zm1,0h0L16,36h0l.16-.1h.05l.13.08h0l-.16.09ZM14.81,36h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm1,0h0l-.13-.08h0l.16-.1h0l.14.08h0l-.17.09S15.83,36,15.82,36Zm-.41,0h0l-.13-.08h0l.16-.09h.05l.13.08h0l-.16.1Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.09Zm-1.33-.07h0l-.13-.08h0l.16-.09h.05l.13.08h0l-.16.1Zm1,0h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.16.09Zm-.41,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm-1.33-.06h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.09Zm-.41,0h0l-.14-.08h0l.17-.1h0l.14.08h0L16,35.6Zm1,0h0l-.13-.08h0l.16-.09h0l.13.08h0l-.16.1Zm-1.34-.06h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm1,0h0l-.13-.08h0l.16-.09h.05l.13.08h0l-.16.1Zm1,0h0l-.13-.08h0l.25-.15h0l.14.08h0l-.25.14Zm-1.41,0h0L16,35.37h0l.16-.1h.05l.13.08h0l-.16.09Zm1,0h0L17,35.35h0l.16-.09h.05l.14.07h0l-.17.09Zm-1.33-.06h0l-.13-.08h0l.16-.1h.05l.13.08h0l-.16.09Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm-.41,0h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.17.09Zm1,0h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm-1.33-.06h0L16,35.13h0l.16-.1h.05l.14.08h0l-.17.09Zm1,0h0L17,35.1h0l.25-.14h.05l.13.08h0l-.24.14Zm1,0h0L18,35.1h0l.16-.09h.05l.14.08h0l-.17.1Zm-1.39,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.16.1Zm-.33-.08h0L16.23,35h0l.16-.1h.05l.14.08h0l-.16.09Zm1.48,0h0L17.71,35h0l.16-.1h.05l.14.08h0l-.17.09Zm.5,0h0L18.21,35h0l.16-.09h0s0,0,0,0l.14.08h0l-.16.1ZM17,35h0l-.14-.08h0l.17-.09s0,0,0,0,0,0,0,0l.14.08h0L17,35Zm-.33-.09h0l-.14-.08h0l.25-.14h.05l.14.08h0l-.25.14Zm1,0h0l-.36-.21h0v0l.41-.23h.06l.18.1h.05l.23-.13h0l.13.08a0,0,0,0,1,0,0h0l-.68.4Zm.51,0h0L18,34.81h0l.16-.09h.05l.14.08h0l-.16.1Zm.51,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm-.25-.14h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm-1.24-.11s0,0,0,0L17,34.55h0l.16-.09h.05l.14.07h0l-.17.09S17.16,34.63,17.15,34.63Zm.26-.15h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.16.09Zm.51,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.09Zm-.24-.13h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Z").attr({
    class: 'cls-54',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rp');
var path_rq = rsr.path("M15.24,36.81h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09ZM15,36.67s0,0,0,0l-.14-.07h0l.25-.14h.05l.13.08h0l-.24.14Zm.5,0h0l-.13-.08h0l.16-.1h.05l.13.08h0l-.16.09Zm-.74-.13h0l-.13-.08h0l.16-.09h.05l.13.08h0l-.16.1Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.09Zm-.41,0h0l-.14-.08h0l.16-.09h.05l.14.07h0l-.17.09Zm-.83-.08h0l-.14-.08h0l.25-.14h.05l.14.08h0l-.25.14Zm.5,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0l-.14-.08h0l.16-.09h0l.14.08h0l-.16.1Zm-.41,0h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.16.09Zm-1.33-.06h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.17.09Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.07h0l-.16.09Zm1,0h0l-.13-.08h0l1.21-.7h0l.14.08h0l-1.22.71Zm-1.42,0h0l-.14-.08h0l.16-.09h0l.14.08h0l-.16.1Zm1,0h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm-1.34-.06h0L14.39,36h0l.16-.1h0l.14.08h0l-.16.09Zm1,0h0L15.4,36h0l.16-.1h0l.13.08h0l-.16.09Zm-.42,0h0L15,36h0l.17-.09h0l.14.08h0l-.16.1Zm1,0h0L16,35.93h0l.16-.09h.05l.13.08h0l-.16.1ZM14.81,36h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm1,0h0l-.13-.08h0l.16-.1h0l.14.08h0l-.17.09Zm-.41,0h0l-.13-.07h0l.16-.09h.05l.13.07h0l-.16.09Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm-1.33-.06h0l-.13-.08h0l.16-.09h.05l.13.08h0l-.16.1Zm1,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.16.1Zm-.41,0s0,0,0,0l-.14-.08h0l.16-.1h.05l.14.08h0l-.17.09S15.68,35.74,15.67,35.74Zm1,0h0l-.14-.08h0l.17-.09s0,0,0,0,0,0,0,0l.14.08h0l-.16.1Zm-1.33-.06h0l-.14-.07h0l.16-.09h.05l.14.07h0l-.17.09Zm1,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm-.41,0h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm1,0h0l-.13-.08h0l.16-.1h0l.13.08h0l-.16.09ZM15.6,35.5h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm1,0h0l-.13-.07h0l.16-.09h.05l.13.08h0l-.16.09Zm1,0h0l-.13-.08h0l.25-.14h0l.14.08h0l-.25.15Zm-1.41,0h0L16,35.35h0l.16-.09h.05l.13.08h0l-.16.09Zm1,0h0L17,35.32h0l.16-.1h.05l.14.08h0l-.17.09Zm-1.33-.06h0l-.13-.08h0l.16-.1h.05l.13.08h0l-.16.09Zm1,0h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.17.09Zm-.41,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.09Zm-1.33-.07h0L16,35.11h0l.16-.09h.05l.14.08h0l-.17.1Zm1,0h0L17,35.08h0l.25-.15h.05l.13.08h0l-.24.14Zm1,0h0L18,35.08h0l.16-.09h.05l.14.08h0l-.17.1Zm-1.39,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.16.1ZM16.39,35h0L16.23,35h0l.16-.09h.05l.14.08h0l-.16.1Zm1.48,0h0l-.14-.08h0l.16-.09h.05l.14.08h0l-.17.1Zm.5,0h0l-.14-.07h0l.16-.09h.05l.14.07h0L18.4,35ZM17,35h0l-.14-.08h0l.17-.1h0l.14.08h0L17,35Zm-.33-.09h0l-.14-.08h0l.25-.14h.05l.14.08h0l-.25.15Zm1,0h0l-.36-.2v0h0l.41-.24h.06l.18.11h.05l.23-.13h0s0,0,0,0l.13.07v0h0l-.68.39Zm.51,0h0L18,34.79h0l.16-.09h.05l.14.08h0l-.16.1Zm.51,0h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm-.25-.14h0l-.14-.08h0l.17-.1h0l.14.08h0l-.16.09Zm-1.24-.11h0L17,34.52h0l.16-.1h.05l.14.08h0l-.17.09Zm.26-.15h0l-.14-.08h0l.16-.1h.05l.14.08h0l-.16.09Zm.51,0h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Zm-.24-.14h0l-.14-.08h0l.17-.09h0l.14.08h0l-.16.1Z").attr({
    class: 'cls-59',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rq');
group_ck.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ck'
});
var _22 = rsr.set();
var path_rr = rsr.path("M21.91,48.8l-.14.09-.26.13-1.08-.62a1.61,1.61,0,0,1-.87,0L18.5,49l-.32-.16-.08-.05,1.07-.63a.33.33,0,0,1,0-.5L18,47a2,2,0,0,1,.28-.19l.09,0,1.23.71a1.64,1.64,0,0,1,.88,0l1.24-.72.16.09L22,47l-1.22.72a.35.35,0,0,1,0,.5Z").attr({
    class: 'cls-64',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rr');
var path_rs = rsr.path("M19.65,41.57v4.58c0,.07.07.15.2.18a.55.55,0,0,0,.31,0c.13,0,.19-.11.19-.18V41.57Z").attr({
    class: 'cls-66',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rs');
var path_rt = rsr.path("M19.65,41.57v4.58c0,.07.07.15.2.18a.55.55,0,0,0,.31,0c.13,0,.19-.11.19-.18V41.57Z").attr({
    class: 'cls-67',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rt');
var path_ru = rsr.path("M19.19,43l-.33,1.75a.08.08,0,0,0,.07.1.09.09,0,0,0,.1-.07L19.36,43h0a.1.1,0,0,0-.07-.09A.09.09,0,0,0,19.19,43Z").attr({
    class: 'cls-68',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ru');
var path_rv = rsr.path("M19.22,44.59l0,.52a.08.08,0,0,1-.07,0l-.52-.11a.07.07,0,0,1,0-.08l.16-.49a.08.08,0,0,1,.07,0l.39.09A.06.06,0,0,1,19.22,44.59Z").attr({
    class: 'cls-62',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rv');
_22.attr({
    'id': '_2-2',
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_22'
});
var group_cl = rsr.set();
group_cl.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cl'
});
var group_cm = rsr.set();
group_cm.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cm'
});
var group_cn = rsr.set();
group_cn.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cn'
});
var group_co = rsr.set();
var path_rw = rsr.path("M21.84,49.73l-.07-.2-.07,0,.07.2a.13.13,0,0,0,.06.07l.07,0A.2.2,0,0,1,21.84,49.73Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rw');
var path_rx = rsr.path("M 21.77 49.53 21.7 49.49 22.28 49.16 22.35 49.2 21.77 49.53 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rx');
var path_ry = rsr.path("M22.35,49.2l-.07.28a.5.5,0,0,1-.22.3c-.1.06-.18,0-.22-.05l-.07-.2Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ry');
group_co.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_co'
});
var group_cp = rsr.set();
var path_rz = rsr.path("M22.41,49.44h0a.29.29,0,0,0-.29,0c-.23.13-.36.52-.1.68l0,0h0a.33.33,0,0,0,.2,0C22.49,50.1,22.72,49.63,22.41,49.44Z").attr({
    class: 'cls-61',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_rz');
var path_sa = rsr.path("M22.41,49.44c.31.19.08.66-.19.72a.33.33,0,0,1-.2,0,.2.2,0,0,1-.09-.18.64.64,0,0,1,.28-.49.25.25,0,0,1,.13.18.39.39,0,0,0-.19.33c0,.12.08.17.19.1a.42.42,0,0,0,.19-.32.12.12,0,0,0-.19-.11.25.25,0,0,0-.13-.18.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sa');
var path_sb = rsr.path("M22.38,49.43a.19.19,0,0,0-.2,0,.62.62,0,0,0-.28.48.2.2,0,0,0,.09.18l0,0a.2.2,0,0,1-.09-.18.64.64,0,0,1,.28-.49.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sb');
group_cp.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cp'
});
var group_cq = rsr.set();
var path_sc = rsr.path("M22.18,49.93l-.07-.2-.07,0,.07.2a.2.2,0,0,0,.06.07l.07,0A.22.22,0,0,1,22.18,49.93Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sc');
var path_sd = rsr.path("M 22.11 49.73 22.04 49.69 22.62 49.36 22.69 49.4 22.11 49.73 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sd');
group_cq.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_cq'
});
var group_cr = rsr.set();
var path_se = rsr.path("M22.75,49.39l-.07,0v0l-.58.33v0h0v.07h0l0,.11c0,.09.12.11.22,0a.46.46,0,0,0,.22-.3l0-.16.09-.05Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_se');
var path_sf = rsr.path("M 22.12 49.76 22.12 49.83 21.66 49.57 21.66 49.49 22.12 49.76 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sf');
var path_sg = rsr.path("M 22.75 49.39 22.12 49.76 21.66 49.49 22.3 49.13 22.75 49.39 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sg');
group_cr.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cr'
});
var group_cs = rsr.set();
group_cs.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cs'
});
var group_ct = rsr.set();
group_ct.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ct'
});
var group_cu = rsr.set();
var path_sh = rsr.path("M17.5,47.2,17.43,47l-.07,0,.07.2a.11.11,0,0,0,.06.07l.07,0A.11.11,0,0,1,17.5,47.2Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sh');
var path_si = rsr.path("M 17.43 47.01 17.36 46.97 17.93 46.63 18.01 46.67 17.43 47.01 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_si');
var path_sj = rsr.path("M18,46.67l-.08.28a.45.45,0,0,1-.21.3c-.1.06-.18,0-.22,0L17.43,47Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sj');
group_cu.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_cu'
});
var group_cv = rsr.set();
var path_sk = rsr.path("M18.07,46.92l0,0a.29.29,0,0,0-.29,0c-.23.14-.36.52-.1.68l0,0h0a.27.27,0,0,0,.2,0C18.15,47.57,18.38,47.1,18.07,46.92Z").attr({
    class: 'cls-61',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sk');
var path_sl = rsr.path("M18.07,46.92c.31.18.08.65-.19.71a.27.27,0,0,1-.2,0,.2.2,0,0,1-.09-.18.62.62,0,0,1,.28-.48.21.21,0,0,1,.12.17.4.4,0,0,0-.18.33c0,.12.08.17.19.11a.44.44,0,0,0,.19-.33c0-.12-.09-.17-.2-.11a.21.21,0,0,0-.12-.17.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sl');
var path_sm = rsr.path("M18,46.9a.19.19,0,0,0-.2,0,.64.64,0,0,0-.28.48.2.2,0,0,0,.09.18l0,0a.2.2,0,0,1-.09-.18.62.62,0,0,1,.28-.48.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sm');
group_cv.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cv'
});
var group_cw = rsr.set();
var path_sn = rsr.path("M17.84,47.4l-.07-.19-.07,0,.07.19a.11.11,0,0,0,.06.07l.07,0S17.86,47.43,17.84,47.4Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sn');
var path_so = rsr.path("M 17.77 47.21 17.7 47.16 18.28 46.83 18.35 46.87 17.77 47.21 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_so');
group_cw.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_cw'
});
var group_cx = rsr.set();
var path_sp = rsr.path("M18.41,46.86l-.07,0v0l-.58.34v0h0v.07h0l0,.11c0,.09.12.11.22.06a.55.55,0,0,0,.22-.31l0-.16.09-.05Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sp');
var path_sq = rsr.path("M 17.78 47.23 17.78 47.3 17.32 47.04 17.32 46.97 17.78 47.23 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sq');
var path_sr = rsr.path("M 18.41 46.86 17.78 47.23 17.32 46.97 17.95 46.6 18.41 46.86 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sr');
group_cx.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cx'
});
var group_cy = rsr.set();
group_cy.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cy'
});
var group_cz = rsr.set();
group_cz.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_cz'
});
var group_da = rsr.set();
var path_ss = rsr.path("M17.47,49.75l-.07-.2-.07,0,.07.2a.13.13,0,0,0,.06.07l.07,0A.13.13,0,0,1,17.47,49.75Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ss');
var path_st = rsr.path("M18,49.22l-.08.28a.45.45,0,0,1-.21.3c-.1.06-.19,0-.22,0l-.07-.2Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_st');
group_da.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_da'
});
var group_db = rsr.set();
var path_su = rsr.path("M18,49.46h0a.28.28,0,0,0-.29,0c-.23.13-.36.52-.1.68l0,0h0a.31.31,0,0,0,.2,0C18.12,50.12,18.35,49.65,18,49.46Z").attr({
    class: 'cls-61',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_su');
var path_sv = rsr.path("M18,49.46c.31.19.08.66-.19.72a.31.31,0,0,1-.2,0,.18.18,0,0,1-.09-.18.64.64,0,0,1,.28-.49.24.24,0,0,1,.12.18.43.43,0,0,0-.19.32c0,.13.09.17.2.11a.42.42,0,0,0,.19-.33c0-.11-.09-.16-.2-.1a.24.24,0,0,0-.12-.18.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sv');
var path_sw = rsr.path("M18,49.45a.19.19,0,0,0-.2,0,.61.61,0,0,0-.28.48.18.18,0,0,0,.09.18l0,0a.18.18,0,0,1-.09-.18.64.64,0,0,1,.28-.49.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sw');
group_db.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_db'
});
var group_dc = rsr.set();
var path_sx = rsr.path("M17.81,50l-.07-.2-.07,0,.07.2a.13.13,0,0,0,.06.07l.07,0A.2.2,0,0,1,17.81,50Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sx');
var path_sy = rsr.path("M18.32,49.42l-.07.28A.5.5,0,0,1,18,50c-.1.06-.18,0-.22,0l-.07-.2Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sy');
group_dc.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dc'
});
var group_dd = rsr.set();
var path_sz = rsr.path("M 18.38 49.41 18.38 49.48 17.75 49.85 17.75 49.77 18.38 49.41 z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_sz');
var path_ta = rsr.path("M 17.75 49.77 17.75 49.85 17.29 49.59 17.29 49.51 17.75 49.77 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ta');
var path_tb = rsr.path("M 18.38 49.41 17.75 49.77 17.29 49.51 17.92 49.15 18.38 49.41 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tb');
group_dd.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dd'
});
var group_de = rsr.set();
group_de.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_de'
});
var group_df = rsr.set();
group_df.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_df'
});
var group_dg = rsr.set();
var path_tc = rsr.path("M21.79,47.25l-.08-.2-.07,0,.08.19a.1.1,0,0,0,.05.07l.07,0A.1.1,0,0,1,21.79,47.25Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tc');
var path_td = rsr.path("M 21.71 47.05 21.64 47.01 22.22 46.67 22.29 46.72 21.71 47.05 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_td');
var path_te = rsr.path("M22.29,46.72l-.07.28a.52.52,0,0,1-.22.3c-.09.05-.18,0-.21,0l-.08-.2Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_te');
group_dg.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dg'
});
var group_dh = rsr.set();
var path_tf = rsr.path("M22.36,47l0,0a.3.3,0,0,0-.3,0c-.22.13-.36.51-.1.68h0a.33.33,0,0,0,.2,0C22.43,47.62,22.66,47.15,22.36,47Z").attr({
    class: 'cls-61',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tf');
var path_tg = rsr.path("M22.36,47c.3.19.07.66-.2.72a.33.33,0,0,1-.2,0,.23.23,0,0,1-.08-.19.61.61,0,0,1,.28-.48.27.27,0,0,1,.12.17.41.41,0,0,0-.19.33c0,.12.08.17.19.11a.44.44,0,0,0,.19-.33.12.12,0,0,0-.19-.11.27.27,0,0,0-.12-.17.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tg');
var path_th = rsr.path("M22.33,46.94a.21.21,0,0,0-.2,0,.61.61,0,0,0-.28.49.21.21,0,0,0,.08.18h0a.19.19,0,0,1-.08-.18.61.61,0,0,1,.28-.48.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_th');
group_dh.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dh'
});
var group_di = rsr.set();
var path_ti = rsr.path("M22.13,47.45l-.07-.2-.08,0,.08.19a.1.1,0,0,0,.05.07l.07,0A.1.1,0,0,1,22.13,47.45Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ti');
var path_tj = rsr.path("M 22.05 47.25 21.98 47.21 22.56 46.88 22.63 46.92 22.05 47.25 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tj');
var path_tk = rsr.path("M22.63,46.92l-.07.28a.52.52,0,0,1-.22.3c-.09,0-.18,0-.21,0l-.07-.2Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tk');
group_di.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_di'
});
var group_dj = rsr.set();
var path_tl = rsr.path("M 22.69 46.9 22.69 46.98 22.06 47.35 22.06 47.27 22.69 46.9 z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tl');
var path_tm = rsr.path("M 22.06 47.27 22.06 47.35 21.61 47.09 21.61 47.01 22.06 47.27 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tm');
var path_tn = rsr.path("M 22.69 46.9 22.06 47.27 21.61 47.01 22.24 46.64 22.69 46.9 z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tn');
group_dj.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dj'
});
var group_dk = rsr.set();
var path_to = rsr.path("M 22.61 46.62 22.61 46.91 20.82 47.95 20.82 47.66 22.61 46.62 z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_to');
var path_tp = rsr.path("M 19.17 47.66 19.17 47.95 17.36 46.9 17.36 46.62 19.17 47.66 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tp');
var path_tq = rsr.path("M 22.63 49.22 22.63 49.5 22.24 49.73 22.25 49.44 22.63 49.22 z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tq');
var path_tr = rsr.path("M 22.25 49.44 22.24 49.73 20.43 48.68 20.43 48.4 22.25 49.44 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tr');
var path_ts = rsr.path("M 17.76 49.44 17.76 49.73 17.37 49.5 17.37 49.22 17.76 49.44 z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ts');
var path_tt = rsr.path("M22.61,46.62l-1.79,1.05a.35.35,0,0,1,0,.5l1.81,1-.39.22-1.81-1a1.61,1.61,0,0,1-.87,0l-1.8,1-.39-.22,1.8-1a.33.33,0,0,1,0-.5l-1.81-1.05.38-.22,1.81,1a1.64,1.64,0,0,1,.88,0l1.8-1Z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tt');
var path_tu = rsr.path("M 19.56 48.4 19.56 48.68 17.76 49.73 17.76 49.44 19.56 48.4 z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tu');
group_dk.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dk'
});
var group_dl = rsr.set();
var path_tv = rsr.path("M20.93,47.92v.29a.4.4,0,0,1-.11.25v-.29a.38.38,0,0,0,.11-.25Z").attr({
    class: 'cls-59',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tv');
group_dl.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dl'
});
var group_dm = rsr.set();
group_dm.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dm'
});
var group_dn = rsr.set();
var path_tw = rsr.path("M19.17,48.17v.29a.4.4,0,0,1-.11-.26v-.28a.38.38,0,0,0,.11.25Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tw');
group_dn.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_dn'
});
var group_do = rsr.set();
var path_tx = rsr.path("M20.43,48.4v.28a1.52,1.52,0,0,1-.87,0V48.4a1.61,1.61,0,0,0,.87,0Z").attr({
    class: 'cls-18',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tx');
group_do.attr({
    'class': 'cls-3',
    'data-name': '2',
    'parent': 'group_a',
    'name': 'group_do'
});
var group_dp = rsr.set();
var path_ty = rsr.path("M20.55,46.19a.28.28,0,0,1-.16.22.87.87,0,0,1-.77,0,.27.27,0,0,1-.16-.23V47.9a.29.29,0,0,0,.16.23.87.87,0,0,0,.77,0,.28.28,0,0,0,.16-.22Z").attr({
    class: 'cls-65',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ty');
var path_tz = rsr.path("M20.39,46a.87.87,0,0,0-.77,0c-.22.12-.22.32,0,.45a.87.87,0,0,0,.77,0C20.6,46.28,20.6,46.08,20.39,46Z").attr({
    class: 'cls-60',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_tz');
group_dp.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dp'
});
var group_dq = rsr.set();
var path_ua = rsr.path("M22.55,42.42h0a2.72,2.72,0,0,0,0-.54H17.44a1.35,1.35,0,0,0,.75,1.48c1.44.88,4.06.4,4.35-.87,0,0,0,0,0-.06Z").attr({
    class: 'cls-69',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ua');
var path_ub = rsr.path("M22.38,41.3a1.73,1.73,0,0,0-.57-.51,3.08,3.08,0,0,0-.48-.23l-.35-.1a3.29,3.29,0,0,0-.37-.07,3.08,3.08,0,0,0-.38,0h-.38a4.46,4.46,0,0,0-.76.1l-.36.1a2.67,2.67,0,0,0-.34.14,2.06,2.06,0,0,0-.48.3l-.17.16-.11.15-.06.09a.85.85,0,0,0-.09.23.68.68,0,0,0,0,.27,1.27,1.27,0,0,0,.72,1,4,4,0,0,0,3.63,0,1.29,1.29,0,0,0,.78-1.06A1.07,1.07,0,0,0,22.38,41.3Z").attr({
    class: 'cls-70',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ub');
var path_uc = rsr.path("M21.72,40.81a3.72,3.72,0,0,0-3.39,0c-.95.54-1,1.42,0,2a3.77,3.77,0,0,0,3.4,0C22.63,42.24,22.65,41.36,21.72,40.81Z").attr({
    class: 'cls-71',
    "data-name": '2',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uc');
group_dq.attr({
    'data-name': '2',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dq'
});
var _10 = rsr.set();
_10.attr({
    'id': '_10',
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_10'
});
var group_dr = rsr.set();
group_dr.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dr'
});
var group_ds = rsr.set();
group_ds.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ds'
});
var group_dt = rsr.set();
group_dt.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dt'
});
var group_du = rsr.set();
group_du.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_du'
});
var group_dv = rsr.set();
var path_ud = rsr.path("M57.36,56.3l-.07-.2-.07,0,.07.19a.1.1,0,0,0,.05.07l.08,0A.09.09,0,0,1,57.36,56.3Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ud');
var path_ue = rsr.path("M57.87,55.77l-.08.28a.5.5,0,0,1-.21.3c-.1,0-.19,0-.22-.05l-.07-.2Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ue');
group_dv.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_dv'
});
var group_dw = rsr.set();
var path_uf = rsr.path("M57.93,56l0,0a.28.28,0,0,0-.29,0c-.23.13-.36.51-.11.68h0a.31.31,0,0,0,.2,0C58,56.67,58.24,56.2,57.93,56Z").attr({
    class: 'cls-61',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uf');
var path_ug = rsr.path("M57.93,56c.31.19.07.66-.19.72a.31.31,0,0,1-.2,0,.2.2,0,0,1-.09-.19.64.64,0,0,1,.28-.48.24.24,0,0,1,.12.17.44.44,0,0,0-.19.33c0,.12.09.17.2.11a.44.44,0,0,0,.19-.33c0-.12-.09-.17-.2-.11a.24.24,0,0,0-.12-.17.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ug');
var path_uh = rsr.path("M57.9,56a.21.21,0,0,0-.2,0,.64.64,0,0,0-.28.49.19.19,0,0,0,.08.18h0c-.05,0-.08-.09-.08-.18a.64.64,0,0,1,.28-.48.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uh');
group_dw.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dw'
});
var group_dx = rsr.set();
var path_ui = rsr.path("M57.7,56.5l-.07-.2-.07,0,.07.2a.09.09,0,0,0,.06.06l.07,0A.09.09,0,0,1,57.7,56.5Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ui');
var path_uj = rsr.path("M58.21,56l-.07.28a.57.57,0,0,1-.22.3.14.14,0,0,1-.22,0l-.07-.2Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uj');
group_dx.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_dx'
});
var group_dy = rsr.set();
var path_uk = rsr.path("M 58.27 55.95 58.27 56.03 57.63 56.4 57.63 56.32 58.27 55.95 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uk');
var path_ul = rsr.path("M 57.63 56.32 57.63 56.4 57.18 56.14 57.18 56.06 57.63 56.32 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ul');
group_dy.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dy'
});
var group_dz = rsr.set();
group_dz.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_dz'
});
var group_ea = rsr.set();
group_ea.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ea'
});
var group_eb = rsr.set();
var path_um = rsr.path("M61.32,58.58l-.07-.19-.07,0,.07.2a.13.13,0,0,0,0,.07l.08,0A.11.11,0,0,1,61.32,58.58Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_um');
var path_un = rsr.path("M61.83,58.05l-.08.28a.45.45,0,0,1-.21.3c-.1.06-.19,0-.22-.05l-.07-.19Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_un');
group_eb.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_eb'
});
var group_ec = rsr.set();
var path_uo = rsr.path("M61.89,58.3l0,0a.28.28,0,0,0-.29,0c-.23.14-.37.52-.11.68l0,0h0a.26.26,0,0,0,.2,0C62,59,62.2,58.48,61.89,58.3Z").attr({
    class: 'cls-61',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uo');
var path_up = rsr.path("M61.89,58.3c.31.18.07.65-.19.71a.26.26,0,0,1-.2,0,.18.18,0,0,1-.09-.18.64.64,0,0,1,.28-.49.24.24,0,0,1,.12.18.44.44,0,0,0-.19.33.12.12,0,0,0,.19.11A.39.39,0,0,0,62,58.6c0-.12-.08-.17-.19-.11a.24.24,0,0,0-.12-.18.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_up');
var path_uq = rsr.path("M61.86,58.28a.19.19,0,0,0-.2,0,.62.62,0,0,0-.28.48.19.19,0,0,0,.08.18l0,0a.19.19,0,0,1-.08-.18.64.64,0,0,1,.28-.49.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uq');
group_ec.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ec'
});
var group_ed = rsr.set();
var path_ur = rsr.path("M61.66,58.78l-.07-.19-.07-.05.07.2a.11.11,0,0,0,.06.07l.07,0A.11.11,0,0,1,61.66,58.78Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ur');
var path_us = rsr.path("M62.17,58.25l-.07.28a.55.55,0,0,1-.22.31c-.1,0-.18,0-.22-.06l-.07-.19Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_us');
group_ed.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_ed'
});
var group_ee = rsr.set();
var path_ut = rsr.path("M 62.23 58.24 62.23 58.32 61.59 58.68 61.59 58.61 62.23 58.24 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ut');
var path_uu = rsr.path("M 61.59 58.61 61.59 58.68 61.14 58.42 61.14 58.34 61.59 58.61 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uu');
group_ee.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ee'
});
var group_ef = rsr.set();
group_ef.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ef'
});
var group_eg = rsr.set();
group_eg.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_eg'
});
var group_eh = rsr.set();
var path_uv = rsr.path("M60.72,54.35l-.07-.19-.07,0,.07.19a.11.11,0,0,0,.06.07l.07,0S60.74,54.39,60.72,54.35Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uv');
var path_uw = rsr.path("M61.23,53.83l-.07.28a.57.57,0,0,1-.22.3c-.1.05-.18,0-.22-.06l-.07-.19Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uw');
group_eh.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_eh'
});
var group_ei = rsr.set();
var path_ux = rsr.path("M61.3,54.07l0,0a.27.27,0,0,0-.3,0c-.23.13-.36.51-.1.68h0a.23.23,0,0,0,.2,0C61.37,54.73,61.6,54.26,61.3,54.07Z").attr({
    class: 'cls-61',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ux');
var path_uy = rsr.path("M61.3,54.07c.3.19.07.66-.2.71a.23.23,0,0,1-.2,0,.22.22,0,0,1-.09-.18.61.61,0,0,1,.29-.48.25.25,0,0,1,.12.17.41.41,0,0,0-.19.33c0,.12.08.17.19.11a.44.44,0,0,0,.19-.33.12.12,0,0,0-.19-.11.25.25,0,0,0-.12-.17.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uy');
var path_uz = rsr.path("M61.27,54.05a.19.19,0,0,0-.2,0,.62.62,0,0,0-.29.48.25.25,0,0,0,.09.19h0a.22.22,0,0,1-.09-.18.61.61,0,0,1,.29-.48.19.19,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_uz');
group_ei.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ei'
});
var group_ej = rsr.set();
var path_va = rsr.path("M61.07,54.56l-.08-.2-.07,0,.07.19s0,.06.06.07l.07,0A.1.1,0,0,1,61.07,54.56Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_va');
var path_vb = rsr.path("M61.57,54l-.07.28a.52.52,0,0,1-.22.3c-.09,0-.18,0-.21,0l-.08-.2Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vb');
group_ej.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_ej'
});
var group_ek = rsr.set();
var path_vc = rsr.path("M 61.63 54.01 61.63 54.09 61 54.46 61 54.38 61.63 54.01 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vc');
var path_vd = rsr.path("M 61 54.38 61 54.46 60.54 54.2 60.54 54.12 61 54.38 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vd');
group_ek.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ek'
});
var group_el = rsr.set();
group_el.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_el'
});
var group_em = rsr.set();
group_em.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_em'
});
var group_en = rsr.set();
var path_ve = rsr.path("M64.68,56.64l-.07-.2-.07,0,.07.2a.13.13,0,0,0,.06.07l.07,0S64.7,56.67,64.68,56.64Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ve');
var path_vf = rsr.path("M65.19,56.11l-.07.28a.5.5,0,0,1-.22.3c-.1.06-.18,0-.22,0l-.07-.2Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vf');
group_en.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_en'
});
var group_eo = rsr.set();
var path_vg = rsr.path("M65.26,56.35h0a.3.3,0,0,0-.3,0c-.23.13-.36.52-.1.68l0,0h0a.33.33,0,0,0,.2,0C65.33,57,65.56,56.54,65.26,56.35Z").attr({
    class: 'cls-61',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vg');
var path_vh = rsr.path("M65.26,56.35c.3.19.07.66-.2.72a.33.33,0,0,1-.2,0,.2.2,0,0,1-.09-.18.62.62,0,0,1,.29-.49.27.27,0,0,1,.12.18.41.41,0,0,0-.19.33c0,.12.08.17.19.11a.45.45,0,0,0,.19-.33.12.12,0,0,0-.19-.11.27.27,0,0,0-.12-.18.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-62',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vh');
var path_vi = rsr.path("M65.23,56.34a.19.19,0,0,0-.2,0,.61.61,0,0,0-.29.48.2.2,0,0,0,.09.18l0,0a.2.2,0,0,1-.09-.18.62.62,0,0,1,.29-.49.21.21,0,0,1,.2,0Z").attr({
    class: 'cls-63',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vi');
group_eo.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_eo'
});
var group_ep = rsr.set();
var path_vj = rsr.path("M65,56.84l-.08-.2-.07,0,.07.2a.2.2,0,0,0,.06.07l.07,0A.13.13,0,0,1,65,56.84Z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vj');
var path_vk = rsr.path("M65.53,56.31l-.07.28a.46.46,0,0,1-.22.3c-.1.06-.18,0-.21,0l-.08-.2Z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vk');
group_ep.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_ep'
});
var group_eq = rsr.set();
var path_vl = rsr.path("M 65.59 56.3 65.59 56.38 64.96 56.74 64.96 56.66 65.59 56.3 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vl');
var path_vm = rsr.path("M 64.96 56.66 64.96 56.74 64.5 56.48 64.5 56.4 64.96 56.66 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vm');
group_eq.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_eq'
});
var group_er = rsr.set();
group_er.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_er'
});
var group_es = rsr.set();
var path_vn = rsr.path("M 59.88 54.57 59.89 55.05 61.67 54.02 61.67 53.54 59.88 54.57 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vn');
var path_vo = rsr.path("M 57.58 55.9 57.58 56.38 59.36 55.35 59.36 54.87 57.58 55.9 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vo');
var path_vp = rsr.path("M 57.16 55.66 57.16 56.14 57.58 56.38 57.58 55.9 57.16 55.66 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vp');
var path_vq = rsr.path("M 59.36 54.87 59.36 55.35 62.9 57.41 62.9 56.93 59.36 54.87 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vq');
var path_vr = rsr.path("M 61.53 58.2 61.53 58.68 65.63 56.31 65.63 55.84 61.53 58.2 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vr');
var path_vs = rsr.path("M 61.12 57.96 61.12 58.44 61.53 58.68 61.53 58.2 61.12 57.96 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vs');
var path_vt = rsr.path("M 57.16 55.66 57.58 55.9 59.36 54.87 62.9 56.93 61.12 57.96 61.53 58.2 65.63 55.84 65.21 55.59 63.42 56.63 59.88 54.57 61.67 53.54 61.26 53.3 57.16 55.66 z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vt');
group_es.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_es'
});
var group_et = rsr.set();
var path_vu = rsr.path("M 62.91 53.19 62.91 56.92 63.33 57.16 63.33 53.43 62.91 53.19 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vu');
var path_vv = rsr.path("M 63.33 53.43 63.33 57.16 63.84 56.87 63.84 53.13 63.33 53.43 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vv');
var path_vw = rsr.path("M 62.91 53.19 63.33 53.43 63.84 53.13 63.43 52.89 62.91 53.19 z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vw');
group_et.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_et'
});
var group_eu = rsr.set();
var path_vx = rsr.path("M 58.94 50.9 58.95 54.63 59.36 54.88 59.36 51.14 58.94 50.9 z").attr({
    class: 'cls-72',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vx');
var path_vy = rsr.path("M 59.36 51.14 59.36 54.88 59.88 54.58 59.88 50.84 59.36 51.14 z").attr({
    class: 'cls-73',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vy');
var path_vz = rsr.path("M 58.94 50.9 59.36 51.14 59.88 50.84 59.46 50.6 58.94 50.9 z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_vz');
group_eu.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_eu'
});
var group_ev = rsr.set();
group_ev.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ev'
});
var group_ew = rsr.set();
var path_wa = rsr.path("M 61.58 50.35 56.99 47.68 56.99 53.16 61.58 55.83 61.58 50.35 z").attr({
    class: 'cls-59',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wa');
var path_wb = rsr.path("M 61.58 50.98 56.99 48.31 56.99 53.16 61.58 55.83 61.58 50.98 z").attr({
    class: 'cls-8',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wb');
var path_wc = rsr.path("M 65.76 47.94 61.16 45.26 56.99 47.68 61.58 50.35 65.76 47.94 z").attr({
    class: 'cls-60',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wc');
var path_wd = rsr.path("M 61.58 50.35 61.58 55.83 65.76 53.41 65.76 47.94 61.58 50.35 z").attr({
    class: 'cls-18',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wd');
var path_we = rsr.path("M 61.87 50.81 61.87 55.66 61.58 55.83 61.58 50.98 61.87 50.81 z").attr({
    class: 'cls-7',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_we');
var path_wf = rsr.path("M57,51.57v0l4.59,2.66.29-.17v0l-.29.17Zm0-1.66v0l4.59,2.65.29-.17v0l-.29.17Z").attr({
    class: 'cls-30',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wf');
group_ew.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ew'
});
var group_ex = rsr.set();
var path_wg = rsr.path("M58.41,50c.28.79,2.1,1.59,1.58.9l.07,0c.13.14.34.4.3.51a.09.09,0,0,1-.09.05A2.8,2.8,0,0,1,58.33,50Z").attr({
    class: 'cls-30',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wg');
group_ex.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ex'
});
var group_ey = rsr.set();
var path_wh = rsr.path("M58.92,50.5a3,3,0,0,0,1.15.36V51a2.86,2.86,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66v-.16A1.24,1.24,0,0,0,58.92,50.5Z").attr({
    class: 'cls-75',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wh');
var path_wi = rsr.path("M58.54,50a.85.85,0,0,0,.43.51,2.08,2.08,0,0,0,.86.24l.24.14a3,3,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66Z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wi');
group_ey.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_ey'
});
var group_ez = rsr.set();
var path_wj = rsr.path("M58.41,51.59c.28.79,2.1,1.59,1.58.9l.07-.05c.13.14.34.4.3.51a.09.09,0,0,1-.09,0,2.8,2.8,0,0,1-1.94-1.38Z").attr({
    class: 'cls-30',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wj');
group_ez.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ez'
});
var group_fa = rsr.set();
var path_wk = rsr.path("M58.92,52.08a2.81,2.81,0,0,0,1.15.36v.16a2.71,2.71,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66v-.16A1.24,1.24,0,0,0,58.92,52.08Z").attr({
    class: 'cls-76',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wk');
var path_wl = rsr.path("M58.54,51.55a.85.85,0,0,0,.43.51,2.08,2.08,0,0,0,.86.24l.24.14a2.81,2.81,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66Z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wl');
group_fa.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_fa'
});
var group_fb = rsr.set();
var path_wm = rsr.path("M58.41,53.17c.28.79,2.1,1.6,1.58.91l.07-.06c.13.14.34.41.3.51a.09.09,0,0,1-.09,0,2.8,2.8,0,0,1-1.94-1.38Z").attr({
    class: 'cls-30',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wm');
group_fb.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fb'
});
var group_fc = rsr.set();
var path_wn = rsr.path("M58.92,53.66a2.81,2.81,0,0,0,1.15.36v.16a2.71,2.71,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66V53A1.24,1.24,0,0,0,58.92,53.66Z").attr({
    class: 'cls-77',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wn');
var path_wo = rsr.path("M58.54,53.13a.85.85,0,0,0,.43.51,2.08,2.08,0,0,0,.86.24l.24.14a2.81,2.81,0,0,1-1.15-.36,1.24,1.24,0,0,1-.61-.66Z").attr({
    class: 'cls-74',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wo');
group_fc.attr({
    'class': 'cls-3',
    'data-name': '10',
    'parent': 'group_a',
    'name': 'group_fc'
});
var group_fd = rsr.set();
var path_wp = rsr.path("M52.31,48.28a8.6,8.6,0,0,1-.26-1.75l-.13.25a9.78,9.78,0,0,0,.26,1.53c0,.22.09.42.13.61a4.11,4.11,0,0,1-1.88,4.7c-.34.19-.83.54-1.45,1-2.27,1.62-6.08,4.33-9.33,3.83a3.17,3.17,0,0,1-2.79-3.3c0-1.79,0-5.57,0-8.9l0-5.7c0-.21,0-.33,0-.42l0,0a.09.09,0,0,1-.1,0c0,.94.06,11.75.07,15a3.35,3.35,0,0,0,2.91,3.44,5.93,5.93,0,0,0,.84.06c3.09,0,6.49-2.42,8.59-3.92.62-.43,1.1-.78,1.44-1,1.69-.93,2.36-2.6,1.94-4.84C52.41,48.7,52.36,48.5,52.31,48.28Z").attr({
    class: 'cls-54',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wp');
group_fd.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fd'
});
var _32 = rsr.set();
_32.attr({
    'id': '_3-2',
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_32'
});
var _33 = rsr.set();
var path_wq = rsr.path("M41.86,35.22a4,4,0,0,0-3.6,0,1.25,1.25,0,0,0-.77,1.05c0,3.09,5.09,2.87,5.09,0A1.27,1.27,0,0,0,41.86,35.22Z").attr({
    class: 'cls-78',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wq');
_33.attr({
    'id': '_3-3',
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_33'
});
var group_fe = rsr.set();
group_fe.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fe'
});
var group_ff = rsr.set();
var path_wr = rsr.path("M48,49.87l-2.07,1.2a2.11,2.11,0,0,1-1.91,0l-1.51-.88a.66.66,0,0,1-.4-.55v.71a.68.68,0,0,0,.4.56l1.51.87a2.11,2.11,0,0,0,1.91,0L48,50.59a.67.67,0,0,0,.39-.55v-.72A.67.67,0,0,1,48,49.87Z").attr({
    class: 'cls-79',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wr');
var path_ws = rsr.path("M48,48.77l-1.52-.88a2.14,2.14,0,0,0-1.91,0L42.49,49.1a.58.58,0,0,0,0,1.1l1.51.88a2.11,2.11,0,0,0,1.91,0L48,49.87A.58.58,0,0,0,48,48.77Z").attr({
    class: 'cls-15',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ws');
group_ff.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_ff'
});
var group_fg = rsr.set();
var path_wt = rsr.path("M47.6,40.05l-1.85,1.07a1.85,1.85,0,0,1-1.7,0l-3.19-1.84a.62.62,0,0,1-.35-.5v1A2,2,0,0,0,41,41c1.87,2.32,1.64,4.58,1.64,8.53A.62.62,0,0,0,43,50l1.09.62a1.89,1.89,0,0,0,1.7,0l1.84-1.07a.59.59,0,0,0,.35-.49V39.56A.59.59,0,0,1,47.6,40.05Z").attr({
    class: 'cls-80',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wt');
var path_wu = rsr.path("M47.59,39.07l-3.18-1.84a1.85,1.85,0,0,0-1.71,0L40.86,38.3c-.47.27-.47.71,0,1l3.19,1.83a1.83,1.83,0,0,0,1.7,0l1.85-1.07C48.07,39.78,48.06,39.34,47.59,39.07Z").attr({
    class: 'cls-15',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wu');
group_fg.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_fg'
});
var group_fh = rsr.set();
group_fh.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fh'
});
var group_fi = rsr.set();
var path_wv = rsr.path("M41.66,35.28a3.6,3.6,0,0,0-3.29,0c-.91.52-.9,1.37,0,1.9a3.6,3.6,0,0,0,3.29,0A1,1,0,0,0,41.66,35.28Z").attr({
    class: 'cls-82',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wv');
group_fi.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fi'
});
var group_fj = rsr.set();
var path_ww = rsr.path("M44.55,37.51a.52.52,0,0,1-.3.42l-1.31.76a1.61,1.61,0,0,1-1.45,0l-1.66-1v.38l1.66,1a1.61,1.61,0,0,0,1.45,0l1.31-.76a.52.52,0,0,0,.3-.42Z").attr({
    class: 'cls-81',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ww');
var path_wx = rsr.path("M41.84,35.21a1.34,1.34,0,0,1,.74.92l1.67,1a.44.44,0,0,1,0,.84l-1.31.76a1.61,1.61,0,0,1-1.45,0l-1.66-1a3.54,3.54,0,0,1-1.59-.43c-1-.58-1-1.51,0-2.09A4,4,0,0,1,41.84,35.21Z").attr({
    class: 'cls-15',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wx');
group_fj.attr({
    'class': 'cls-3',
    'data-name': '3',
    'parent': 'group_a',
    'name': 'group_fj'
});
var group_fk = rsr.set();
var path_wy = rsr.path("M40.27,37a.6.6,0,0,0-.58,0c-.16.09-.16.24,0,.34a.66.66,0,0,0,.58,0C40.44,37.26,40.44,37.11,40.27,37Z").attr({
    class: 'cls-83',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wy');
var path_wz = rsr.path("M39.66,37a.19.19,0,0,0,0,.37.68.68,0,0,0,.65,0,.2.2,0,0,0,0-.37A.74.74,0,0,0,39.66,37Zm.52,0-.2.12L39.77,37A.58.58,0,0,1,40.18,37Zm-.47,0,.2.11-.2.12A.13.13,0,0,1,39.71,37.07Zm.06.27.21-.12.21.12A.56.56,0,0,1,39.77,37.34Zm.48,0L40,37.18l.21-.12A.15.15,0,0,1,40.25,37.31Z").attr({
    class: 'cls-84',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_wz');
group_fk.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fk'
});
var group_fl = rsr.set();
var path_xa = rsr.path("M41.81,37.33a0,0,0,0,1,0,.08.2.2,0,0,1-.15,0,0,0,0,0,1,0-.08A.14.14,0,0,1,41.81,37.33Z").attr({
    class: 'cls-18',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xa');
var path_xb = rsr.path("M40.58,34.67v.62c0,.07.14.06.14,0v-.62c0-.5.94-.4.94.25v2.44c0,.06.14.06.14,0V34.93C41.8,34.1,40.58,34,40.58,34.67Z").attr({
    class: 'cls-85',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xb');
var path_xc = rsr.path("M41,34.24c.65,0,.74.46.74.89V37.4h0V35A.71.71,0,0,0,41,34.24Z").attr({
    class: 'cls-86',
    "data-name": '3',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xc');
group_fl.attr({
    'data-name': '3',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fl'
});
var _14 = rsr.set();
var path_xd = rsr.path("M45.57,53.35,39.9,56.64a1,1,0,0,1,.18.28l5.67-3.29A1.34,1.34,0,0,0,45.57,53.35Z").attr({
    class: 'cls-109',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xd');
var path_xe = rsr.path("M34.23,34.83l-5.06,2.94a.76.76,0,0,1,.15.23l5.06-2.94A.76.76,0,0,0,34.23,34.83Z").attr({
    class: 'cls-110',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xe');
var path_xf = rsr.path("M32.48,33.31l-2,1.18a.61.61,0,0,1,.07.1l2-1.17Z").attr({
    class: 'cls-111',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xf');
_14.attr({
    'id': '_1-4',
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_14'
});
var group_fm = rsr.set();
group_fm.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_fm'
});
var group_fn = rsr.set();
var path_xg = rsr.path("M 40.16 57.27 40.16 57.73 45.83 54.44 45.83 53.97 40.16 57.27 z").attr({
    class: 'cls-54',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xg');
var path_xh = rsr.path("M36.15,47.85a.33.33,0,0,0-.33,0l-5.67,3.29a.32.32,0,0,1,.33,0l9.22,5.32,5.67-3.29Z").attr({
    class: 'cls-47',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xh');
var path_xi = rsr.path("M45.75,53.63a1.34,1.34,0,0,0-.18-.28.79.79,0,0,0-.2-.17L39.7,56.47a.79.79,0,0,1,.2.17,1,1,0,0,1,.18.28.93.93,0,0,1,.08.35L45.83,54A.84.84,0,0,0,45.75,53.63Z").attr({
    class: 'cls-87',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xi');
var path_xj = rsr.path("M39.7,56.47l-9.22-5.32c-.25-.15-.46,0-.46.26v.47l10.14,5.85v-.46A1,1,0,0,0,39.7,56.47Z").attr({
    class: 'cls-49',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xj');
group_fn.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fn'
});
var group_fo = rsr.set();
var path_xk = rsr.path("M 35.43 50.9 39.07 48.78 37.99 49.94 34.35 52.06 35.43 50.9 z").attr({
    class: 'cls-88',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xk');
var path_xl = rsr.path("M36.57,47.33a.27.27,0,0,0-.26,0l-3.64,2.11a.28.28,0,0,1,.26,0l2.5,1.45,3.64-2.12Z").attr({
    class: 'cls-89',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xl');
var path_xm = rsr.path("M32.93,49.45c-.12-.07-.23-.07-.3,0l-1,1,2.69,1.55,1.08-1.16Z").attr({
    class: 'cls-90',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xm');
group_fo.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fo'
});
var group_fp = rsr.set();
var path_xn = rsr.path("M36.14,46.75c-.7-.22-1.41-.46-2.11-.67a19.25,19.25,0,0,0,2.29,3.74l1.06-1.14A15.21,15.21,0,0,1,36.14,46.75Z").attr({
    class: 'cls-92',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xn');
group_fp.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fp'
});
var group_fq = rsr.set();
group_fq.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fq'
});
var group_fr = rsr.set();
var path_xo = rsr.path("M36.14,46.75l2-1.18A14.43,14.43,0,0,0,39.4,47.5l-2,1.18a15.21,15.21,0,0,1-1.24-1.93Z").attr({
    class: 'cls-91',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xo');
group_fr.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fr'
});
var group_fs = rsr.set();
var path_xp = rsr.path("M 39.97 54.91 39.97 55.97 44.62 53.27 44.63 52.21 39.97 54.91 z").attr({
    class: 'cls-14',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xp');
var path_xq = rsr.path("M44.51,51.71a1.18,1.18,0,0,0-.19-.32L41.13,47.2l-.06-.08a1.31,1.31,0,0,0-.27-.22.43.43,0,0,0-.43,0l-4.65,2.7a.43.43,0,0,1,.43,0,.87.87,0,0,1,.26.22l.06.07,3.2,4.2a1.5,1.5,0,0,1,.19.32,1.28,1.28,0,0,1,.11.49l4.66-2.7A1.18,1.18,0,0,0,44.51,51.71Z").attr({
    class: 'cls-93',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xq');
var path_xr = rsr.path("M39.67,54.1l-3.2-4.2a1.07,1.07,0,0,0-.32-.29c-.2-.12-.39-.12-.5,0l-2.33,2.51L40,56V54.91A1.4,1.4,0,0,0,39.67,54.1Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xr');
group_fs.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fs'
});
var group_ft = rsr.set();
var path_xs = rsr.path("M 30.06 40.79 33.09 39.02 33.46 39.09 30.43 40.85 30.06 40.79 z").attr({
    class: 'cls-96',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xs');
var path_xt = rsr.path("M 33.08 45.27 36.12 43.51 36.11 43.95 33.08 45.72 33.08 45.27 z").attr({
    class: 'cls-97',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xt');
var path_xu = rsr.path("M 32.41 44.88 35.44 43.12 36.12 43.51 33.08 45.27 32.41 44.88 z").attr({
    class: 'cls-98',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xu');
var path_xv = rsr.path("M30.42,40.85c.24.94,1.07,3.5,2,4l.67.39v.45l-.67-.39c-1.38-.8-2.31-4.39-2.35-4.54Z").attr({
    class: 'cls-92',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xv');
group_ft.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ft'
});
var group_fu = rsr.set();
group_fu.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fu'
});
var group_fv = rsr.set();
var path_xw = rsr.path("M30.42,40.85l3-1.76a17,17,0,0,0,.8,2.31l-3,1.76a16.56,16.56,0,0,1-.8-2.31Z").attr({
    class: 'cls-94',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xw');
var path_xx = rsr.path("M31.22,43.16l3-1.76a5.82,5.82,0,0,0,.82,1.41l-3,1.76a6.32,6.32,0,0,1-.82-1.41Z").attr({
    class: 'cls-95',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xx');
var path_xy = rsr.path("M32,44.57l3-1.76a1.66,1.66,0,0,0,.36.31l-3,1.76a1.49,1.49,0,0,1-.37-.31Z").attr({
    class: 'cls-94',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xy');
group_fv.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fv'
});
var group_fw = rsr.set();
var path_xz = rsr.path("M 29.84 35.15 30.85 34.56 31.34 37.32 30.33 37.91 29.84 35.15 z").attr({
    class: 'cls-95',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_xz');
var path_ya = rsr.path("M 29.84 35.15 30.33 37.91 30.17 37.86 29.68 35.1 29.84 35.15 z").attr({
    class: 'cls-92',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ya');
group_fw.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fw'
});
var group_fx = rsr.set();
var path_yb = rsr.path("M39.35,42.9c-2.5-1.3-3.21-1.42-3.39-1.32L30.9,44.52c.18-.1.89,0,3.39,1.32.43.22.83.44,1.2.65l5.06-2.94C40.18,43.34,39.78,43.12,39.35,42.9Z").attr({
    class: 'cls-99',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yb');
var path_yc = rsr.path("M37.59,48.47a3.63,3.63,0,0,0-.93-.81l-.11-.06-5.66-2.86.54,1.45a1.58,1.58,0,0,0,.63.79.51.51,0,0,0,.15.07L37,48.65l3.1,3.29a11.64,11.64,0,0,0,1.46,1.3Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yc');
var path_yd = rsr.path("M37.3,47.74a12.09,12.09,0,0,0-1.81-1.25c-.37-.21-.77-.43-1.2-.65-4-2.08-3.43-1.15-3.4-1.1l5.66,2.86.11.06a3.63,3.63,0,0,1,.93.81l3.95,4.77.11.07C42.46,53.78,38.05,48.39,37.3,47.74Z").attr({
    class: 'cls-103',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yd');
group_fx.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fx'
});
var group_fy = rsr.set();
group_fy.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fy'
});
var group_fz = rsr.set();
var path_ye = rsr.path("M43.14,45.63a10.52,10.52,0,0,0-.78-.83,12.63,12.63,0,0,0-1.81-1.25l-5.06,2.94a12.09,12.09,0,0,1,1.81,1.25c.15.13.43.43.79.83a43.2,43.2,0,0,1,3.62,4.64l5.06-2.94A43.56,43.56,0,0,0,43.14,45.63Z").attr({
    class: 'cls-100',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ye');
var path_yf = rsr.path("M35.82,46.69l.46.29L41.34,44l-.47-.29Z").attr({
    class: 'cls-101',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yf');
var path_yg = rsr.path("M41.71,53.21l5.06-2.94c0,.07,0,.12,0,.13l-5.06,2.94s0-.06,0-.13Z").attr({
    class: 'cls-102',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yg');
group_fz.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_fz'
});
var group_ga = rsr.set();
var path_yh = rsr.path("M30.41,43.9l-1.68-6.1a.12.12,0,0,0,0-.08l0,0a0,0,0,0,0-.07,0c-.14.46.56,5,1.75,6.24h0S30.42,44,30.41,43.9Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yh');
var path_yi = rsr.path("M35.94,40.68c-.59-1.7-1.19-4.22-1.52-5.49a.65.65,0,0,0,0-.13.76.76,0,0,0-.15-.23.61.61,0,0,0-.15-.13l-.08,0a.21.21,0,0,0-.16,0l-5.06,2.94a.21.21,0,0,1,.16,0,.19.19,0,0,1,.08,0,.47.47,0,0,1,.15.13.76.76,0,0,1,.15.23.5.5,0,0,1,0,.13c.33,1.27.93,3.79,1.52,5.49.08.22,0,.39-.07.45l5.06-2.94C36,41.07,36,40.9,35.94,40.68Z").attr({
    class: 'cls-105',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yi');
var path_yj = rsr.path("M30.88,43.62c-.59-1.7-1.19-4.22-1.52-5.49a.84.84,0,0,0-.34-.49.19.19,0,0,0-.08,0,.2.2,0,0,0-.25.11.12.12,0,0,1,0,.08l1.68,6.1,0,0a.63.63,0,0,0,.13.11C30.82,44.19,31,44,30.88,43.62Z").attr({
    class: 'cls-103',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yj');
group_ga.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_ga'
});
var group_gb = rsr.set();
var path_yk = rsr.path("M35.46,41,30.41,43.9a.12.12,0,0,1,0,.07L35.45,41A.08.08,0,0,0,35.46,41Z").attr({
    class: 'cls-104',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yk');
var path_yl = rsr.path("M33.78,34.83a.08.08,0,0,0,0,0h0l0,0h0l-5.06,2.94h.05l0,0h0l0,0v0l5.06-2.94Z").attr({
    class: 'cls-104',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yl');
group_gb.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_gb'
});
var group_gc = rsr.set();
var path_ym = rsr.path("M 29.8 34.78 31.02 34.08 31 35.19 29.79 35.89 29.8 34.78 z").attr({
    class: 'cls-106',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ym');
var path_yn = rsr.path("M30.84,33.93a.06.06,0,0,0-.06,0l-1.22.7h.07l.32.07L31.17,34Z").attr({
    class: 'cls-104',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yn');
var path_yo = rsr.path("M29.63,34.63c-.07,0-.11,0-.11.12v.66a.32.32,0,0,0,.13.23l.3.17V34.7Z").attr({
    class: 'cls-107',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yo');
group_gc.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_gc'
});
var group_gd = rsr.set();
var path_yp = rsr.path("M32.14,35.28V33.21h0a.14.14,0,0,0,0-.06l0,0,0,0a.06.06,0,0,0-.06,0l-2,1.17s0,0,.05,0l0,0,0,0a.13.13,0,0,1,0,.06h0l0,2.07v0a.08.08,0,0,1,0,0l2-1.18a.06.06,0,0,0,0,0Z").attr({
    class: 'cls-15',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yp');
var path_yq = rsr.path("M30.12,36.46l0-2.07h0a.17.17,0,0,0-.08-.14s0,0-.06,0A2.11,2.11,0,0,0,30,36.5s0,0,0,0a0,0,0,0,0,.07,0Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yq');
var path_yr = rsr.path("M30.36,34.42l0,0,0,0a.41.41,0,0,1,.12.32,8.5,8.5,0,0,0,.06,1.89c0,.11-.15.11-.27,0a.48.48,0,0,1-.22-.26l0-2.07A.28.28,0,0,1,30.36,34.42Z").attr({
    class: 'cls-103',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yr');
var path_ys = rsr.path("M32.58,33.61a.43.43,0,0,0,0-.19l-.06-.11,0,0,0,0,0,0a.32.32,0,0,0-.26,0l-2,1.18a.28.28,0,0,1,.26,0l0,0,0,0,0,0a.61.61,0,0,1,.07.1.36.36,0,0,1,0,.2,8.5,8.5,0,0,0,.06,1.89.13.13,0,0,1-.05.07l2-1.18a.1.1,0,0,0,.05-.06A9.07,9.07,0,0,1,32.58,33.61Z").attr({
    class: 'cls-108',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ys');
group_gd.attr({
    'class': 'cls-3',
    'data-name': '1',
    'parent': 'group_a',
    'name': 'group_gd'
});
var _42 = rsr.set();
_42.attr({
    'id': '_4-2',
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_42'
});
var group_ge = rsr.set();
var path_yt = rsr.path("M46.89,35.58h0l0-.06c.09.14,0,.3-.16.41a1,1,0,0,1-.94,0c-.16-.1-.22-.23-.18-.35h0a11.4,11.4,0,0,0-.64,3.8.62.62,0,0,0,.37.52,2,2,0,0,0,1.81,0,.65.65,0,0,0,.38-.54A11.32,11.32,0,0,0,46.89,35.58Z").attr({
    class: 'cls-113',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yt');
var path_yu = rsr.path("M46.61,35.43a.87.87,0,0,0-.74,0,.23.23,0,0,0,0,.43.81.81,0,0,0,.74,0A.23.23,0,0,0,46.61,35.43Z").attr({
    class: 'cls-114',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yu');
group_ge.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ge'
});
var group_gf = rsr.set();
var path_yv = rsr.path("M46.89,35.58h0a.42.42,0,0,0-.18-.2,1.07,1.07,0,0,0-.94,0,.45.45,0,0,0-.19.2h0a11.4,11.4,0,0,0-.64,3.8.62.62,0,0,0,.37.52,2,2,0,0,0,1.81,0,.65.65,0,0,0,.38-.54A11.32,11.32,0,0,0,46.89,35.58Z").attr({
    class: 'cls-112',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yv');
var path_yw = rsr.path("M46.71,35.39a1.07,1.07,0,0,0-.94,0c-.27.15-.27.4,0,.55a1,1,0,0,0,.94,0C47,35.79,47,35.55,46.71,35.39Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yw');
group_gf.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gf'
});
var group_gg = rsr.set();
var path_yx = rsr.path("M46.58,25.89a.74.74,0,0,1-.68,0,.26.26,0,0,1-.14-.2v9.94a.24.24,0,0,0,.14.2.81.81,0,0,0,.68,0,.26.26,0,0,0,.14-.2V25.69A.26.26,0,0,1,46.58,25.89Z").attr({
    class: 'cls-115',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yx');
var path_yy = rsr.path("M46.58,25.89a.74.74,0,0,1-.68,0,.26.26,0,0,1-.14-.2v9.94a.24.24,0,0,0,.14.2.81.81,0,0,0,.68,0,.26.26,0,0,0,.14-.2V25.69A.26.26,0,0,1,46.58,25.89Z").attr({
    class: 'cls-116',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yy');
var path_yz = rsr.path("M46.58,25.49a.81.81,0,0,0-.68,0,.21.21,0,0,0,0,.4.74.74,0,0,0,.68,0A.21.21,0,0,0,46.58,25.49Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_yz');
group_gg.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gg'
});
var group_gh = rsr.set();
var path_za = rsr.path("M46.61,25.58a.86.86,0,0,1-.75,0,.27.27,0,0,1-.15-.22v.42a.25.25,0,0,0,.15.21.8.8,0,0,0,.75,0,.26.26,0,0,0,.16-.22v-.42A.26.26,0,0,1,46.61,25.58Z").attr({
    class: 'cls-117',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_za');
var path_zb = rsr.path("M46.62,25.14a.83.83,0,0,0-.75,0c-.21.12-.22.32,0,.44a.86.86,0,0,0,.75,0C46.82,25.46,46.83,25.26,46.62,25.14Z").attr({
    class: 'cls-118',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zb');
var path_zc = rsr.path("M46.62,25h0a.66.66,0,0,0-.37-.1.82.82,0,0,0-.37.09c-.21.12-.22.32,0,.44a.83.83,0,0,0,.75,0C46.82,25.36,46.83,25.16,46.62,25Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zc');
var path_zd = rsr.path("M46.34,25.07a.2.2,0,0,0-.2,0,.06.06,0,0,0,0,.11.23.23,0,0,0,.2,0A.06.06,0,0,0,46.34,25.07Z").attr({
    class: 'cls-18',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zd');
var path_ze = rsr.path("M46.61,25.48a.83.83,0,0,1-.75,0,.27.27,0,0,1-.15-.21v0a.27.27,0,0,0,.15.22.83.83,0,0,0,.75,0,.3.3,0,0,0,.17-.22v0A.3.3,0,0,1,46.61,25.48Z").attr({
    class: 'cls-119',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ze');
group_gh.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gh'
});
var group_gi = rsr.set();
var path_zf = rsr.path("M46.74,25.58a.12.12,0,0,0-.13,0,.43.43,0,0,0-.19.32.14.14,0,0,0,.06.12l.6.35a.13.13,0,0,1-.06-.12.41.41,0,0,1,.18-.32.14.14,0,0,1,.14,0Z").attr({
    class: 'cls-120',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zf');
var path_zg = rsr.path("M47.2,25.94a.41.41,0,0,0-.18.32c0,.11.08.16.19.1a.41.41,0,0,0,.18-.32C47.39,25.93,47.31,25.88,47.2,25.94Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zg');
group_gi.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gi'
});
var group_gj = rsr.set();
var path_zh = rsr.path("M47.38,26a.12.12,0,0,0-.13,0,.43.43,0,0,0-.19.32.12.12,0,0,0,.06.12l3.71,2.14a.12.12,0,0,1-.06-.12A.43.43,0,0,1,51,28.1a.12.12,0,0,1,.13,0Z").attr({
    class: 'cls-121',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zh');
var path_zi = rsr.path("M51,28.1a.43.43,0,0,0-.19.32.12.12,0,0,0,.19.11.41.41,0,0,0,.18-.32C51.14,28.09,51.06,28.05,51,28.1Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zi');
group_gj.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gj'
});
var group_gk = rsr.set();
var path_zj = rsr.path("M47.25,33.07c-.16-.09-.32,0-.32.17v.84a.07.07,0,0,0,0,.06.19.19,0,0,0,.18,0,.07.07,0,0,0,0-.06v-.69l0,0h0l.24.14.13-.23Z").attr({
    class: 'cls-122',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zj');
var path_zk = rsr.path("M47.93,33.51a.06.06,0,0,1,.07,0l.54.31a.27.27,0,0,1,.12.21v.91a.05.05,0,0,1,0,0,.21.21,0,0,1-.19,0,.05.05,0,0,1,0,0v-.85a.08.08,0,0,0,0-.07l-.48-.28a.06.06,0,0,1,0-.06A.2.2,0,0,1,47.93,33.51Z").attr({
    class: 'cls-137',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zk');
group_gk.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gk'
});
var group_gl = rsr.set();
var path_zl = rsr.path("M48.23,31.94a.13.13,0,0,0-.13,0l-.39.23a.47.47,0,0,0-.24.42v.58a.14.14,0,0,0,.08.11.4.4,0,0,0,.37,0s.07-.06.07-.1v-.47a.2.2,0,0,1,.09-.16l.28-.16a.14.14,0,0,0,.06-.12A.42.42,0,0,0,48.23,31.94Z").attr({
    class: 'cls-130',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zl');
group_gl.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gl'
});
var group_gm = rsr.set();
var path_zm = rsr.path("M51.42,30.1a.41.41,0,0,1,.18.32c0,.11-.08.16-.19.1a.41.41,0,0,1-.18-.32C51.23,30.09,51.31,30,51.42,30.1Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zm');
var path_zn = rsr.path("M51.62,29.2v.63a.11.11,0,0,1,0,.09l-.29.16a.19.19,0,0,1,.14,0,.41.41,0,0,1,.18.32s0,.1-.06.11l.38-.21c.11-.06.22-.15.22-.44v-.83Z").attr({
    class: 'cls-123',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zn');
group_gm.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gm'
});
var group_gn = rsr.set();
var path_zo = rsr.path("M51.23,30.12a.12.12,0,0,1,.13,0,.38.38,0,0,1,.18.32.14.14,0,0,1,0,.12l-3.08,1.77a.12.12,0,0,0,.06-.12.4.4,0,0,0-.19-.31.13.13,0,0,0-.13,0Z").attr({
    class: 'cls-124',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zo');
var path_zp = rsr.path("M48.28,31.91a.4.4,0,0,1,.19.31.12.12,0,0,1-.19.11A.41.41,0,0,1,48.1,32C48.1,31.89,48.18,31.85,48.28,31.91Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zp');
group_gn.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gn'
});
var group_go = rsr.set();
var path_zq = rsr.path("M51.14,28.12a.12.12,0,0,0-.13,0,.43.43,0,0,0-.19.32.14.14,0,0,0,.06.12l.59.35a.15.15,0,0,1,0-.12.41.41,0,0,1,.18-.32.14.14,0,0,1,.14,0Z").attr({
    class: 'cls-125',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zq');
var path_zr = rsr.path("M51.6,28.48a.41.41,0,0,0-.18.32c0,.11.08.16.19.1a.41.41,0,0,0,.18-.32C51.79,28.47,51.71,28.42,51.6,28.48Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zr');
group_go.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_go'
});
var group_gp = rsr.set();
var path_zs = rsr.path("M52.2,29.21a.72.72,0,0,1-.67,0A.22.22,0,0,1,51.4,29v.37a.22.22,0,0,0,.13.19.75.75,0,0,0,.67,0,.26.26,0,0,0,.14-.2V29A.23.23,0,0,1,52.2,29.21Z").attr({
    class: 'cls-126',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zs');
var path_zt = rsr.path("M52.21,28.82a.75.75,0,0,0-.67,0c-.19.1-.19.28,0,.38a.72.72,0,0,0,.67,0A.21.21,0,0,0,52.21,28.82Z").attr({
    class: 'cls-118',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zt');
group_gp.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gp'
});
var group_gq = rsr.set();
var path_zu = rsr.path("M47.94,33.31a.47.47,0,0,1-.43,0c-.06,0-.09-.08-.09-.13v.47c0,.05,0,.09.09.13a.47.47,0,0,0,.43,0,.15.15,0,0,0,.09-.13v-.47A.15.15,0,0,1,47.94,33.31Z").attr({
    class: 'cls-127',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zu');
var path_zv = rsr.path("M48,33.06a.5.5,0,0,0-.43,0c-.13.07-.13.18,0,.26a.47.47,0,0,0,.43,0C48.06,33.24,48.07,33.13,48,33.06Z").attr({
    class: 'cls-118',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zv');
group_gq.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gq'
});
var group_gr = rsr.set();
var path_zw = rsr.path("M52.2,28.79a.72.72,0,0,1-.67,0,.23.23,0,0,1-.13-.19V29a.22.22,0,0,0,.13.19.72.72,0,0,0,.67,0,.23.23,0,0,0,.14-.19V28.6A.23.23,0,0,1,52.2,28.79Z").attr({
    class: 'cls-128',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zw');
var path_zx = rsr.path("M52.21,28.41a.75.75,0,0,0-.67,0c-.19.11-.19.28,0,.39a.72.72,0,0,0,.67,0A.2.2,0,0,0,52.21,28.41Z").attr({
    class: 'cls-118',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zx');
var path_zy = rsr.path("M52.21,28.32h0a.66.66,0,0,0-.33-.09.59.59,0,0,0-.33.09c-.19.1-.19.27,0,.38a.75.75,0,0,0,.67,0C52.38,28.6,52.39,28.43,52.21,28.32Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zy');
var path_zz = rsr.path("M52,28.35a.23.23,0,0,0-.18,0c-.05,0-.05.08,0,.1a.2.2,0,0,0,.17,0S52,28.37,52,28.35Z").attr({
    class: 'cls-18',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_zz');
var path_aaa = rsr.path("M52.2,28.71a.75.75,0,0,1-.67,0,.22.22,0,0,1-.13-.19v0a.22.22,0,0,0,.13.19.75.75,0,0,0,.67,0,.23.23,0,0,0,.14-.2v0A.25.25,0,0,1,52.2,28.71Z").attr({
    class: 'cls-129',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaa');
group_gr.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gr'
});
var group_gs = rsr.set();
var path_aab = rsr.path("M46.82,34.1a1.15,1.15,0,0,0-.33.47l1.16.67a1.35,1.35,0,0,1,.34-.47Z").attr({
    class: 'cls-134',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aab');
var path_aac = rsr.path("M46.76,34.16a.86.86,0,0,0-.13.14L47.8,35l.13-.15Z").attr({
    class: 'cls-135',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aac');
var path_aad = rsr.path("M48.08,34.71h0a1.15,1.15,0,0,0-.5.89V36c0,.32.23.47.51.31h0Z").attr({
    class: 'cls-136',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aad');
group_gs.attr({
    'data-name': '4',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gs'
});
var group_gt = rsr.set();
var path_aae = rsr.path("M48.2,34.68c.36-.21.53,0,.53.42a2.67,2.67,0,0,1-.53,1.41Z").attr({
    class: 'cls-132',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aae');
group_gt.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gt'
});
var group_gu = rsr.set();
group_gu.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gu'
});
var group_gv = rsr.set();
var path_aaf = rsr.path("M48.2,34.68l-1.41-.82a.37.37,0,0,1,.37,0l1.4.82c-.08-.05-.2,0-.36,0Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaf');
group_gv.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gv'
});
var group_gw = rsr.set();
var path_aag = rsr.path("M 48.2 36.51 46.8 35.7 46.79 33.86 48.2 34.68 48.2 36.51 z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aag');
var path_aah = rsr.path("M 46.91 35.63 46.91 34.07 48.08 34.75 48.08 36.31 46.91 35.63 z").attr({
    class: 'cls-131',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aah');
group_gw.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gw'
});
var group_gx = rsr.set();
var path_aai = rsr.path("M46.92,34h0a1.12,1.12,0,0,0-.5.89v.38a.37.37,0,0,0,.15.34l1.17.68a.35.35,0,0,1-.16-.34V35.6a1.15,1.15,0,0,1,.5-.89h0Z").attr({
    class: 'cls-133',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aai');
group_gx.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gx'
});
var group_gy = rsr.set();
var path_aaj = rsr.path("M48.59,34.86l0,0a.2.2,0,0,0-.11,0,.53.53,0,0,0-.2.24c-.05.13,0,.25,0,.29l.19.11c-.07,0-.09-.16,0-.29a.52.52,0,0,1,.19-.24l.11,0,.05,0Z").attr({
    class: 'cls-15',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaj');
var path_aak = rsr.path("M48.43,35.22l-.19-.11c-.05.13,0,.25,0,.29l.19.11C48.4,35.47,48.38,35.35,48.43,35.22Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aak');
var path_aal = rsr.path("M48.73,35l-.11,0a.52.52,0,0,0-.19.24c-.06.16,0,.29.08.3a.2.2,0,0,0,.11,0,.43.43,0,0,0,.19-.24C48.87,35.1,48.84,35,48.73,35Z").attr({
    class: 'cls-19',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aal');
var path_aam = rsr.path("M48.7,35.05a.12.12,0,0,0-.08,0,.29.29,0,0,0-.12.16c0,.1,0,.19,0,.19a.09.09,0,0,0,.07,0,.35.35,0,0,0,.13-.16C48.79,35.14,48.77,35.05,48.7,35.05Z").attr({
    class: 'cls-36',
    "data-name": '4',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aam');
group_gy.attr({
    'class': 'cls-3',
    'data-name': '4',
    'parent': 'group_a',
    'name': 'group_gy'
});
var _52 = rsr.set();
_52.attr({
    'id': '_5-2',
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_52'
});
var group_gz = rsr.set();
group_gz.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_gz'
});
var group_ha = rsr.set();
var path_aan = rsr.path("M51.8,44.44l-.13,0a24.57,24.57,0,0,0,0,5.87,2.05,2.05,0,0,1-1,2,.87.87,0,0,1-.68.09,1,1,0,0,1-.56-.5,1.13,1.13,0,0,1-.11-.48,9,9,0,0,1,0-1.2c0-.22,0-.42,0-.59h-.13c0,.16,0,.36,0,.58a9.13,9.13,0,0,0-.06,1.22,1.26,1.26,0,0,0,.13.53,1,1,0,0,0,.64.56.84.84,0,0,0,.27,0,1,1,0,0,0,.51-.14,2.16,2.16,0,0,0,1.08-2.1A24.24,24.24,0,0,1,51.8,44.44Z").attr({
    class: 'cls-54',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aan');
var path_aao = rsr.path("M51,44l-.13,0a24.06,24.06,0,0,0,0,5.87,2.06,2.06,0,0,1-1,2,.91.91,0,0,1-.68.09,1,1,0,0,1-.56-.5,1.31,1.31,0,0,1-.11-.48,8.91,8.91,0,0,1,.06-1.2c0-.22,0-.42,0-.59h-.14c0,.16,0,.36,0,.58a9.17,9.17,0,0,0,0,1.21,1.43,1.43,0,0,0,.12.54,1.06,1.06,0,0,0,.64.56.86.86,0,0,0,.28,0,1,1,0,0,0,.51-.14A2.18,2.18,0,0,0,51,49.83,24.24,24.24,0,0,1,51,44Z").attr({
    class: 'cls-54',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aao');
var path_aap = rsr.path("M50.27,43.56l-.13,0a24.57,24.57,0,0,0,0,5.87,2.06,2.06,0,0,1-1,2,.91.91,0,0,1-.68.09,1,1,0,0,1-.56-.5,1.13,1.13,0,0,1-.11-.48,9,9,0,0,1,0-1.2c0-.22,0-.42,0-.59h-.13c0,.16,0,.36,0,.58a9.17,9.17,0,0,0-.05,1.21,1.43,1.43,0,0,0,.12.54,1.06,1.06,0,0,0,.64.56.84.84,0,0,0,.27,0,1.1,1.1,0,0,0,.52-.14,2.19,2.19,0,0,0,1.08-2.1A24.21,24.21,0,0,1,50.27,43.56Z").attr({
    class: 'cls-54',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aap');
var path_aaq = rsr.path("M49.51,43.12l-.13,0a24.57,24.57,0,0,0,0,5.87,2,2,0,0,1-1,2,.83.83,0,0,1-.68.09.9.9,0,0,1-.56-.49,1.17,1.17,0,0,1-.11-.48,9,9,0,0,1,0-1.2c0-.23,0-.42,0-.59H47c0,.16,0,.36,0,.58a9.07,9.07,0,0,0-.06,1.21,1.26,1.26,0,0,0,.13.54,1,1,0,0,0,.64.56.84.84,0,0,0,.27,0,1.06,1.06,0,0,0,.51-.14A2.17,2.17,0,0,0,49.48,49,24.24,24.24,0,0,1,49.51,43.12Z").attr({
    class: 'cls-54',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaq');
group_ha.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ha'
});
var group_hb = rsr.set();
var path_aar = rsr.path("M50,49.68c-.06,0-.06.09,0,.12a.2.2,0,0,0,.21,0c.05,0,.05-.08,0-.12A.26.26,0,0,0,50,49.68Zm-.78-.44s0,.08,0,.12a.26.26,0,0,0,.21,0c.06,0,.06-.09,0-.12A.2.2,0,0,0,49.23,49.24Zm-.77-.45a.06.06,0,0,0,0,.12.26.26,0,0,0,.21,0,.06.06,0,0,0,0-.12A.26.26,0,0,0,48.46,48.79Zm-.77-.45c-.06,0-.06.09,0,.12a.18.18,0,0,0,.2,0c.06,0,.06-.08,0-.12A.23.23,0,0,0,47.69,48.34Zm-.78-.44s0,.08,0,.12a.26.26,0,0,0,.21,0c.06,0,.06-.09,0-.12A.2.2,0,0,0,46.91,47.9Z").attr({
    class: 'cls-36',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aar');
var path_aas = rsr.path("M50.89,48.83l-2.24-1.29a1,1,0,0,0-.64-.09l-.75.13,3.57,2.06.22-.44C51.12,49.07,51.06,48.93,50.89,48.83Z").attr({
    class: 'cls-139',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aas');
group_hb.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hb'
});
var group_hc = rsr.set();
var path_aat = rsr.path("M51.05,49.2l-.29.56a.7.7,0,0,1-.87.12l-3-1.76a.26.26,0,0,1-.16-.21v.32a.26.26,0,0,0,.16.22l3,1.76a.72.72,0,0,0,.87-.13l.29-.55a.23.23,0,0,0,0-.11v-.33A.2.2,0,0,1,51.05,49.2Z").attr({
    class: 'cls-138',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aat');
var path_aau = rsr.path("M50.89,48.83c.17.1.23.24.16.37l-.29.56a.7.7,0,0,1-.87.12l-3-1.76c-.28-.16-.17-.44.21-.5l1-.17a1,1,0,0,1,.64.09Z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aau');
group_hc.attr({
    'class': 'cls-3',
    'data-name': '5',
    'parent': 'group_a',
    'name': 'group_hc'
});
var group_hd = rsr.set();
var path_aav = rsr.path("M49.64,48.21a.56.56,0,0,0-.52,0c-.14.08-.15.22,0,.3a.54.54,0,0,0,.51,0C49.78,48.43,49.78,48.29,49.64,48.21Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aav');
group_hd.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hd'
});
var group_he = rsr.set();
var path_aaw = rsr.path("M49.61,46.55a.54.54,0,0,1-.48,0,.17.17,0,0,1-.09-.14v1.92a.17.17,0,0,0,.09.14.53.53,0,0,0,.49,0,.17.17,0,0,0,.1-.14V46.41C49.72,46.46,49.68,46.51,49.61,46.55Z").attr({
    class: 'cls-140',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaw');
var path_aax = rsr.path("M49.62,46.27a.51.51,0,0,0-.48,0,.15.15,0,0,0,0,.28.54.54,0,0,0,.48,0C49.75,46.47,49.75,46.35,49.62,46.27Z").attr({
    class: 'cls-118',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aax');
group_he.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_he'
});
var group_hf = rsr.set();
var path_aay = rsr.path("M 50.68 48.21 47.29 46.24 48.54 42.95 51.93 44.92 50.68 48.21 z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aay');
var path_aaz = rsr.path("M 51.93 44.92 48.54 42.95 50.99 41.53 54.38 43.5 51.93 44.92 z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aaz');
var path_aba = rsr.path("M 54.38 43.5 54.85 43.88 54.85 44.51 52.38 45.94 51.34 47.83 50.68 48.21 51.93 44.92 54.38 43.5 z").attr({
    class: 'cls-14',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aba');
group_hf.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hf'
});
var group_hg = rsr.set();
var path_abb = rsr.path("M54.37,43.64,52,45,50.9,48l.36-.2,1-1.89,2.44-1.41v-.52Zm.33.78-2.43,1.41-1,1.89-.26.14L52.05,45l2.32-1.34.33.27Z").attr({
    class: 'cls-141',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abb');
group_hg.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hg'
});
var group_hh = rsr.set();
var path_abc = rsr.path("M 50.97 47.86 52.05 45.02 52.02 44.99 50.9 47.95 51.26 47.75 51.23 47.72 50.97 47.86 z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abc');
var path_abd = rsr.path("M54.7,44.42l-2.43,1.41,0,0,2.44-1.41Z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abd');
group_hh.attr({
    'class': 'cls-142',
    'data-name': '5',
    'parent': 'group_a',
    'name': 'group_hh'
});
var group_hi = rsr.set();
var path_abe = rsr.path("M 47.82 45.2 47.53 45.97 50.68 47.8 50.98 47.03 47.82 45.2 z").attr({
    class: 'cls-54',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abe');
group_hi.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hi'
});
var group_hj = rsr.set();
group_hj.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hj'
});
var group_hk = rsr.set();
group_hk.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hk'
});
var group_hl = rsr.set();
var path_abf = rsr.path("M48,45.66l-.12-.06a.06.06,0,0,1,0-.06l0-.13s0,0,.06,0l.11.06a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,48,45.66Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abf');
var path_abg = rsr.path("M48,45.46l-.11-.06s0,0,0,0l-.06.13s0,0,0,0l.11.07s0,0,0,0l0-.14A0,0,0,0,0,48,45.46Zm0,.17s0,0,0,0l-.11-.06s0,0,0,0l.05-.12s0,0,0,0l.11.07s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abg');
group_hl.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hl'
});
var group_hm = rsr.set();
var path_abh = rsr.path("M48.29,45.86l-.11-.06a0,0,0,0,1,0-.06l.05-.13s0,0,0,0l.11.06a0,0,0,0,1,0,.06l0,.13S48.31,45.87,48.29,45.86Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abh');
var path_abi = rsr.path("M48.37,45.66l-.11-.06s0,0,0,0l0,.13a0,0,0,0,0,0,0l.12.06a0,0,0,0,0,0,0l.05-.13A0,0,0,0,0,48.37,45.66Zm0,.17s0,0,0,0l-.11-.07s0,0,0,0l0-.12s0,0,0,0l.1.07s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abi');
group_hm.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hm'
});
var group_hn = rsr.set();
var path_abj = rsr.path("M48.64,46.06,48.53,46a0,0,0,0,1,0-.06l.05-.13s0,0,0,0l.11.06a0,0,0,0,1,0,.06l-.05.13S48.66,46.08,48.64,46.06Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abj');
var path_abk = rsr.path("M48.72,45.86l-.12-.06a0,0,0,0,0,0,0l0,.14s0,0,0,0l.11.06s0,0,0,0l0-.13A.07.07,0,0,0,48.72,45.86Zm0,.17s0,0,0,0L48.53,46s0,0,0,0l0-.12s0,0,0,0l.11.07s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abk');
group_hn.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hn'
});
var group_ho = rsr.set();
var path_abl = rsr.path("M49,46.27l-.11-.07a0,0,0,0,1,0-.06l0-.13A0,0,0,0,1,49,46l.11.06a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,49,46.27Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abl');
var path_abm = rsr.path("M49.06,46.07,49,46s0,0,0,0l0,.14a.06.06,0,0,0,0,0l.12.06s0,0,0,0l0-.13S49.07,46.07,49.06,46.07Zm0,.16s0,0,0,0l-.11-.07a0,0,0,0,1,0,0l.05-.13s0,0,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abm');
group_ho.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ho'
});
var group_hp = rsr.set();
var path_abn = rsr.path("M49.33,46.47l-.11-.07a0,0,0,0,1,0-.06l0-.13a0,0,0,0,1,0,0l.11.06a.06.06,0,0,1,0,.07l0,.13A0,0,0,0,1,49.33,46.47Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abn');
var path_abo = rsr.path("M49.41,46.27l-.12-.07a0,0,0,0,0,0,0l0,.14s0,0,0,0l.12.07s0,0,0,0l.05-.13S49.42,46.27,49.41,46.27Zm0,.17s0,0,0,0l-.1-.06a0,0,0,0,1,0,0l0-.13s0,0,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abo');
group_hp.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hp'
});
var group_hq = rsr.set();
var path_abp = rsr.path("M49.67,46.67l-.11-.07a0,0,0,0,1,0-.06l.05-.13a0,0,0,0,1,0,0l.12.06a.08.08,0,0,1,0,.07l-.05.13A0,0,0,0,1,49.67,46.67Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abp');
var path_abq = rsr.path("M49.75,46.47l-.11-.07s0,0,0,0l-.05.14a0,0,0,0,0,0,0l.11.07a0,0,0,0,0,0,0l.05-.13S49.77,46.47,49.75,46.47Zm0,.17a0,0,0,0,1,0,0l-.11-.06s0,0,0,0l0-.13a0,0,0,0,1,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abq');
group_hq.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hq'
});
var group_hr = rsr.set();
var path_abr = rsr.path("M50,46.87l-.11-.07a0,0,0,0,1,0-.06l0-.13a0,0,0,0,1,.05,0l.11.07a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,50,46.87Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abr');
var path_abs = rsr.path("M50.1,46.67,50,46.6s0,0,0,0l-.05.13s0,0,0,0l.12.07s0,0,0,0l0-.13S50.11,46.68,50.1,46.67Zm0,.17s0,0,0,0l-.11-.06a0,0,0,0,1,0,0l.05-.13s0,0,0,0l.11.06a0,0,0,0,1,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abs');
group_hr.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hr'
});
var group_hs = rsr.set();
var path_abt = rsr.path("M50.37,47.07,50.25,47s0,0,0-.06l.05-.13a0,0,0,0,1,.06,0l.11.07a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,50.37,47.07Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abt');
var path_abu = rsr.path("M50.44,46.87l-.11-.07s0,0,0,0l0,.13s0,0,0,0l.11.07s0,0,0,0l.05-.13A0,0,0,0,0,50.44,46.87Zm0,.17a0,0,0,0,1,0,0L50.26,47s0,0,0,0l0-.13a0,0,0,0,1,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abu');
group_hs.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hs'
});
var group_ht = rsr.set();
var path_abv = rsr.path("M50.71,47.27l-.11-.07a0,0,0,0,1,0-.06l.05-.13a0,0,0,0,1,0,0l.11.07a0,0,0,0,1,0,.06l-.05.13A0,0,0,0,1,50.71,47.27Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abv');
var path_abw = rsr.path("M50.79,47.07,50.67,47s0,0,0,0l0,.13s0,0,0,0l.12.07a0,0,0,0,0,0,0l0-.14S50.8,47.08,50.79,47.07Zm0,.17s0,0,0,0l-.11-.06s0,0,0,0l0-.13s0,0,0,0l.1.06a0,0,0,0,1,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abw');
group_ht.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ht'
});
var group_hu = rsr.set();
group_hu.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hu'
});
var group_hv = rsr.set();
var path_abx = rsr.path("M47.82,46l-.11-.06a0,0,0,0,1,0-.06l.05-.13a0,0,0,0,1,0,0l.11.06a0,0,0,0,1,0,.06l-.05.13A0,0,0,0,1,47.82,46Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abx');
var path_aby = rsr.path("M47.9,45.8l-.12-.06s0,0,0,0l0,.13a0,0,0,0,0,0,0l.11.06s0,0,0,0l0-.14A.06.06,0,0,0,47.9,45.8Zm0,.17s0,0,0,0l-.11-.06s0,0,0,0l0-.12s0,0,0,0l.11.07s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aby');
group_hv.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hv'
});
var group_hw = rsr.set();
var path_abz = rsr.path("M48.16,46.2l-.11-.06a0,0,0,0,1,0-.06l0-.13s0,0,.05,0l.11.06a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,48.16,46.2Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_abz');
var path_aca = rsr.path("M48.24,46l-.11-.06s0,0,0,0l-.05.13a.07.07,0,0,0,0,.05l.12.06a0,0,0,0,0,0,0l0-.13A0,0,0,0,0,48.24,46Zm0,.17s0,0,0,0l-.11-.07s0,0,0,0l0-.12a0,0,0,0,1,0,0l.11.07s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aca');
group_hw.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hw'
});
var group_hx = rsr.set();
var path_acb = rsr.path("M48.51,46.4l-.11-.06a0,0,0,0,1,0-.06l0-.13s0,0,0,0l.11.06a0,0,0,0,1,0,.06l0,.13S48.53,46.42,48.51,46.4Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acb');
var path_acc = rsr.path("M48.59,46.2l-.12-.06a0,0,0,0,0,0,0l0,.14s0,0,0,0l.11.06s0,0,0,0l.05-.13A0,0,0,0,0,48.59,46.2Zm0,.17s0,0,0,0l-.1-.07s0,0,0,0l0-.12s0,0,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acc');
group_hx.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hx'
});
var group_hy = rsr.set();
var path_acd = rsr.path("M48.85,46.61l-.11-.07a0,0,0,0,1,0-.06l.05-.13a0,0,0,0,1,0,0l.12.06a.06.06,0,0,1,0,.06l0,.14A0,0,0,0,1,48.85,46.61Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acd');
var path_ace = rsr.path("M48.93,46.41l-.11-.07s0,0,0,0l-.05.14a0,0,0,0,0,0,0l.11.06s0,0,0,0l.06-.13S49,46.41,48.93,46.41Zm0,.16s0,0,0,0l-.11-.07a0,0,0,0,1,0,0l0-.13s0,0,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ace');
group_hy.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hy'
});
var group_hz = rsr.set();
var path_acf = rsr.path("M49.2,46.81l-.11-.07a0,0,0,0,1,0-.06l0-.13a0,0,0,0,1,.05,0l.11.06a.06.06,0,0,1,0,.07l0,.13A0,0,0,0,1,49.2,46.81Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acf');
var path_acg = rsr.path("M49.28,46.61l-.12-.07a0,0,0,0,0,0,0l-.05.14s0,0,0,0l.12.07s0,0,0,0l0-.13S49.29,46.61,49.28,46.61Zm0,.17s0,0,0,0l-.1-.06a0,0,0,0,1,0,0l.05-.13s0,0,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acg');
group_hz.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_hz'
});
var group_ia = rsr.set();
var path_ach = rsr.path("M49.55,47l-.12-.07s0,0,0-.06l.05-.13s0,0,0,0l.12.06a.08.08,0,0,1,0,.07l0,.13A0,0,0,0,1,49.55,47Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ach');
var path_aci = rsr.path("M49.62,46.81l-.11-.07s0,0,0,0l0,.14a0,0,0,0,0,0,0l.11.07a0,0,0,0,0,0,0l0-.13S49.64,46.82,49.62,46.81Zm0,.17a0,0,0,0,1,0,0l-.11-.06s0,0,0,0l0-.13a0,0,0,0,1,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aci');
group_ia.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ia'
});
var group_ib = rsr.set();
var path_acj = rsr.path("M49.89,47.21l-.11-.07a0,0,0,0,1,0-.06l.05-.13a0,0,0,0,1,0,0L50,47a0,0,0,0,1,0,.06l-.05.13A0,0,0,0,1,49.89,47.21Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acj');
var path_ack = rsr.path("M50,47l-.12-.07s0,0,0,0l0,.13s0,0,0,0l.12.07s0,0,0,0l0-.13S50,47,50,47Zm0,.17s0,0,0,0l-.11-.06s0,0,0,0l0-.13s0,0,0,0L50,47a0,0,0,0,1,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ack');
group_ib.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ib'
});
var group_ic = rsr.set();
var path_acl = rsr.path("M50.24,47.41l-.11-.07a0,0,0,0,1,0-.06l0-.13a0,0,0,0,1,.06,0l.11.07a0,0,0,0,1,0,.06l-.05.13A0,0,0,0,1,50.24,47.41Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acl');
var path_acm = rsr.path("M50.31,47.21l-.11-.07s0,0,0,0l-.06.13a.05.05,0,0,0,0,0l.11.07s0,0,0,0l0-.13A0,0,0,0,0,50.31,47.21Zm0,.17a0,0,0,0,1,0,0l-.11-.06a.06.06,0,0,1,0,0l.05-.13a0,0,0,0,1,0,0l.11.06s0,0,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acm');
group_ic.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ic'
});
var group_id = rsr.set();
var path_acn = rsr.path("M50.58,47.61l-.11-.06a.06.06,0,0,1,0-.07l0-.13a0,0,0,0,1,0,0l.11.07a0,0,0,0,1,0,.06l0,.13A0,0,0,0,1,50.58,47.61Z").attr({
    class: 'cls-143',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acn');
var path_aco = rsr.path("M50.66,47.41l-.11-.07s0,0,0,0l0,.13s0,0,0,0l.12.07a0,0,0,0,0,0,0l.05-.14S50.67,47.42,50.66,47.41Zm0,.17s0,0,0,0l-.11-.06s0,0,0,0l0-.13s0,0,0,0l.11.06a.06.06,0,0,1,0,0Z").attr({
    class: 'cls-144',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aco');
group_id.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_id'
});
var group_ie = rsr.set();
var path_acp = rsr.path("M 48.58 43.22 47.95 44.87 51.1 46.7 51.73 45.06 48.58 43.22 z").attr({
    class: 'cls-145',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acp');
var path_acq = rsr.path("M 48.03 44.82 48.63 43.26 48.58 43.22 47.95 44.87 51.1 46.7 51.13 46.63 48.03 44.82 z").attr({
    class: 'cls-146',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acq');
group_ie.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ie'
});
var group_if = rsr.set();
var path_acr = rsr.path("M47,46.64a.08.08,0,0,1,0,0,.15.15,0,0,1-.21.18s0,0,0,0a.15.15,0,0,1,.07-.18A.15.15,0,0,1,47,46.64Z").attr({
    class: 'cls-147',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acr');
var path_acs = rsr.path("M47.16,46.82l0,0L47,46.66s0,0,0,0a.15.15,0,0,1-.21.18l0,0,.09.11h0v1s0,0,0,0a.16.16,0,0,0,.12,0c.06,0,.09,0,.09-.07v-1A.14.14,0,0,0,47.16,46.82Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acs');
group_if.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_if'
});
var group_ig = rsr.set();
var path_act = rsr.path("M47.78,47.09s0,0,0,0a.14.14,0,0,1-.08.17.12.12,0,0,1-.13,0,.1.1,0,0,1,0-.05s0-.13.08-.17A.15.15,0,0,1,47.78,47.09Z").attr({
    class: 'cls-147',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_act');
var path_acu = rsr.path("M47.93,47.27a0,0,0,0,0,0,0l-.12-.14s0,0,0,0a.14.14,0,0,1-.08.17.12.12,0,0,1-.13,0l0,0,.09.1h0v1h0l0,0,.12,0c.06,0,.1,0,.1-.07v-1A.14.14,0,0,0,47.93,47.27Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acu');
group_ig.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ig'
});
var group_ih = rsr.set();
var path_acv = rsr.path("M48.55,47.53a.1.1,0,0,1,0,0,.15.15,0,0,1-.08.17.12.12,0,0,1-.13,0l0,0a.15.15,0,0,1,.08-.17A.12.12,0,0,1,48.55,47.53Z").attr({
    class: 'cls-147',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acv');
var path_acw = rsr.path("M48.71,47.72s0,0,0,0l-.11-.14v0a.15.15,0,0,1-.08.17.12.12,0,0,1-.13,0s0,0,0,0l.09.11h0v1s0,0,0,0a0,0,0,0,0,0,0,.16.16,0,0,0,.12,0s.09,0,.09-.07v-1A.15.15,0,0,0,48.71,47.72Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acw');
group_ih.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ih'
});
var group_ii = rsr.set();
var path_acx = rsr.path("M49.33,48l0,0a.16.16,0,0,1-.08.18.15.15,0,0,1-.13,0l0,0A.13.13,0,0,1,49.2,48,.12.12,0,0,1,49.33,48Z").attr({
    class: 'cls-147',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acx');
var path_acy = rsr.path("M49.48,48.16v0L49.35,48l0,0a.16.16,0,0,1-.08.18.15.15,0,0,1-.13,0l0,0,.09.11h0v1l0,0a.16.16,0,0,0,.12,0c.06,0,.1,0,.1-.07v-1A.14.14,0,0,0,49.48,48.16Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acy');
group_ii.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ii'
});
var _53 = rsr.set();
_53.attr({
    'id': '_5-3',
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_53'
});
var group_ij = rsr.set();
var path_acz = rsr.path("M50.87,42.45a.77.77,0,0,0-.71,0c-.2.12-.21.3,0,.42a.77.77,0,0,0,.71,0C51.06,42.75,51.07,42.57,50.87,42.45Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_acz');
group_ij.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ij'
});
var group_ik = rsr.set();
var path_ada = rsr.path("M45.28,39.32a.86.86,0,0,1-.75,0,.27.27,0,0,1-.15-.22v1.63a.27.27,0,0,0,.15.22.83.83,0,0,0,.75,0,.26.26,0,0,0,.16-.22V39.1A.26.26,0,0,1,45.28,39.32Z").attr({
    class: 'cls-148',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ada');
var path_adb = rsr.path("M45.29,38.88a.83.83,0,0,0-.75,0c-.21.12-.22.32,0,.44a.86.86,0,0,0,.75,0C45.49,39.2,45.5,39,45.29,38.88Z").attr({
    class: 'cls-118',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adb');
group_ik.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ik'
});
var group_il = rsr.set();
group_il.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_il'
});
var group_im = rsr.set();
group_im.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_im'
});
var group_in = rsr.set();
var path_adc = rsr.path("M45.29,38.31h0a.78.78,0,0,0-.37-.09.71.71,0,0,0-.37.09c-.21.12-.22.31,0,.44a.83.83,0,0,0,.75,0A.23.23,0,0,0,45.29,38.31Z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adc');
var path_add = rsr.path("M45,38.33a.23.23,0,0,0-.2,0,.06.06,0,0,0,0,.11.2.2,0,0,0,.2,0C45.06,38.42,45.06,38.37,45,38.33Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_add');
var path_ade = rsr.path("M45.28,38.74a.83.83,0,0,1-.75,0,.27.27,0,0,1-.15-.22v0a.27.27,0,0,0,.15.21.83.83,0,0,0,.75,0,.26.26,0,0,0,.16-.22v0A.26.26,0,0,1,45.28,38.74Z").attr({
    class: 'cls-150',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ade');
group_in.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_in'
});
var group_io = rsr.set();
var path_adf = rsr.path("M45.28,38.84a.83.83,0,0,1-.75,0,.27.27,0,0,1-.15-.21V39a.27.27,0,0,0,.15.22.83.83,0,0,0,.75,0,.26.26,0,0,0,.16-.22v-.41A.26.26,0,0,1,45.28,38.84Z").attr({
    class: 'cls-149',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adf');
var path_adg = rsr.path("M45.29,38.4a.83.83,0,0,0-.75,0,.23.23,0,0,0,0,.43.83.83,0,0,0,.75,0C45.49,38.72,45.5,38.53,45.29,38.4Z").attr({
    class: 'cls-118',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adg');
group_io.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_io'
});
var group_ip = rsr.set();
var path_adh = rsr.path("M45.41,38.85a.12.12,0,0,0-.13,0,.39.39,0,0,0-.19.32.11.11,0,0,0,.06.11l.59.35a.14.14,0,0,1-.05-.12.41.41,0,0,1,.18-.32.12.12,0,0,1,.13,0Z").attr({
    class: 'cls-151',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adh');
var path_adi = rsr.path("M45.87,39.2a.41.41,0,0,0-.18.32c0,.11.08.16.18.1a.42.42,0,0,0,.19-.31A.12.12,0,0,0,45.87,39.2Z").attr({
    class: 'cls-36',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adi');
group_ip.attr({
    'class': 'cls-3',
    'data-name': '5',
    'parent': 'group_a',
    'name': 'group_ip'
});
var group_iq = rsr.set();
var path_adj = rsr.path("M46,39.21a.13.13,0,0,0-.13,0,.4.4,0,0,0-.18.31.14.14,0,0,0,.05.12l3.7,2.13s0-.06,0-.11a.41.41,0,0,1,.18-.32.12.12,0,0,1,.13,0Z").attr({
    class: 'cls-152',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adj');
var path_adk = rsr.path("M49.61,41.36a.41.41,0,0,0-.18.32c0,.11.08.16.18.1a.41.41,0,0,0,.18-.32C49.79,41.35,49.71,41.3,49.61,41.36Z").attr({
    class: 'cls-36',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adk');
group_iq.attr({
    'class': 'cls-3',
    'data-name': '5',
    'parent': 'group_a',
    'name': 'group_iq'
});
var group_ir = rsr.set();
group_ir.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ir'
});
var group_is = rsr.set();
var path_adl = rsr.path("M49.78,41.37a.13.13,0,0,0-.13,0,.39.39,0,0,0-.18.31.14.14,0,0,0,.05.12l.6.34a.12.12,0,0,1-.06-.12.42.42,0,0,1,.19-.31.16.16,0,0,1,.13,0Z").attr({
    class: 'cls-153',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adl');
var path_adm = rsr.path("M50.25,41.73a.42.42,0,0,0-.19.31.12.12,0,0,0,.19.11.41.41,0,0,0,.18-.32C50.43,41.72,50.35,41.67,50.25,41.73Z").attr({
    class: 'cls-36',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adm');
group_is.attr({
    'class': 'cls-3',
    'data-name': '5',
    'parent': 'group_a',
    'name': 'group_is'
});
var group_it = rsr.set();
var path_adn = rsr.path("M50.84,42.46a.75.75,0,0,1-.67,0,.22.22,0,0,1-.13-.19v.37a.25.25,0,0,0,.13.19.75.75,0,0,0,.67,0,.23.23,0,0,0,.14-.19v-.37A.26.26,0,0,1,50.84,42.46Z").attr({
    class: 'cls-154',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adn');
var path_ado = rsr.path("M50.85,42.07a.72.72,0,0,0-.67,0,.2.2,0,0,0,0,.38.75.75,0,0,0,.67,0C51,42.35,51,42.18,50.85,42.07Z").attr({
    class: 'cls-118',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ado');
group_it.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_it'
});
var group_iu = rsr.set();
var path_adp = rsr.path("M50.84,42a.75.75,0,0,1-.67,0,.25.25,0,0,1-.13-.19v.36a.22.22,0,0,0,.13.19.75.75,0,0,0,.67,0,.25.25,0,0,0,.14-.2v-.36A.23.23,0,0,1,50.84,42Z").attr({
    class: 'cls-155',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adp');
var path_adq = rsr.path("M50.85,41.66a.75.75,0,0,0-.67,0c-.18.11-.19.28,0,.39a.75.75,0,0,0,.67,0A.2.2,0,0,0,50.85,41.66Z").attr({
    class: 'cls-118',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adq');
var path_adr = rsr.path("M50.85,41.57h0a.66.66,0,0,0-.33-.09.59.59,0,0,0-.33.09.2.2,0,0,0,0,.38.75.75,0,0,0,.67,0C51,41.85,51,41.68,50.85,41.57Z").attr({
    class: 'cls-15',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adr');
var path_ads = rsr.path("M50.6,41.6a.23.23,0,0,0-.18,0,.06.06,0,0,0,0,.1.17.17,0,0,0,.17,0S50.64,41.62,50.6,41.6Z").attr({
    class: 'cls-18',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ads');
var path_adt = rsr.path("M50.84,42a.75.75,0,0,1-.67,0,.22.22,0,0,1-.13-.19v0a.22.22,0,0,0,.13.19.75.75,0,0,0,.67,0,.25.25,0,0,0,.14-.2v0A.26.26,0,0,1,50.84,42Z").attr({
    class: 'cls-156',
    "data-name": '5',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adt');
group_iu.attr({
    'data-name': '5',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_iu'
});
var group_iv = rsr.set();
group_iv.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_iv'
});
var group_iw = rsr.set();
var path_adu = rsr.path("M43.34,49c-.44-.12-.47-.63-.61-1l0-.05a.67.67,0,0,1,.3-.86l.73-.38.22.37a2.69,2.69,0,0,0,.69.85c.32.24,2.19,0,2,.66a.49.49,0,0,1-.14.18,1.9,1.9,0,0,1-1.42.45c-.42,0-.81-.2-1.23-.2A2.07,2.07,0,0,1,43.34,49Z").attr({
    class: 'cls-157',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adu');
var path_adv = rsr.path("M41.32,50.92c-.28,0-.62-.48-.86-.8h0a.72.72,0,0,1,.06-1l.58-.53.32.3a2.47,2.47,0,0,0,.88.64c1.16.43,1.62.53,1.32.94a2,2,0,0,1-1.25.81C42,51.37,41.48,50.94,41.32,50.92Z").attr({
    class: 'cls-157',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adv');
var path_adw = rsr.path("M36.61,41.41a3.42,3.42,0,0,1-.34-.87c-.06.12-.1.34-.16.5a3,3,0,0,1-2,1.4c-.73.26-1.79-.1-1.48.63l.48,1.08a2.36,2.36,0,0,0,.9,1,18.29,18.29,0,0,0,3.35,1.56.8.8,0,0,1,.41.29l2.82,3.37c.46.29,1.68-.72,1.36-1.09a23.64,23.64,0,0,0-2.55-3.7,30.22,30.22,0,0,0-2.67-1.86c.73.3,2.3,1.07,2.92,1.39a1.29,1.29,0,0,1,.42.35l2.83,3.07c.61.4,1.79-.48,1.53-.93,0,0-2.44-3.19-3.12-3.88S37.64,42,36.61,41.41Z").attr({
    class: 'cls-158',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adw');
group_iw.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_iw'
});
var group_ix = rsr.set();
var path_adx = rsr.path("M37.43,40.66c-.15-.22-.85,0-.82.05V41c-.12.18-.33.37-.35.52s0,.14.15.12.12-.15.2-.2,0,.26,0,.4a.67.67,0,0,0,.14.35.3.3,0,0,0,.3.14,1.58,1.58,0,0,0,.29-.12,1.18,1.18,0,0,0,.26-.37A4,4,0,0,0,37.43,40.66Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adx');
group_ix.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ix'
});
var group_iy = rsr.set();
var path_ady = rsr.path("M37.55,40.58c-.15-.58-.95-2.93-.95-2.93s-.83-1.62-1.53-2.84c-.28-.47-1.24-.76-1.28,0-.07,1,1.13,2.93,1.75,3.66a18.1,18.1,0,0,1,.76,2.37c0,.15.27.25.66.22s.57-.18.6-.34A.22.22,0,0,0,37.55,40.58Z").attr({
    class: 'cls-159',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ady');
var path_adz = rsr.path("M37.49,40.69c0-.14-.06-.24-.41-.21s-.67.16-.7.31.23.22.59.19S37.46,40.83,37.49,40.69Z").attr({
    class: 'cls-160',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_adz');
group_iy.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_iy'
});
var group_iz = rsr.set();
var path_aea = rsr.path("M34.43,34.76a.53.53,0,0,0-.7-.24,11,11,0,0,0-2.83,2c-.57.71.19,2.24.5,3.48a19.39,19.39,0,0,0,1.38,3.4c1.4.5,4.34-1.28,4-2C36.72,41,35.12,36.19,34.43,34.76Z").attr({
    class: 'cls-161',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aea');
var path_aeb = rsr.path("M32.15,35.36a10.94,10.94,0,0,0,1.44-.79.82.82,0,0,1,.45-.23,1,1,0,0,1,.57.57c.37.7.92,2.09.68,2.72a2,2,0,0,1-2.56,1.24c-1.19-.29-1.44-2.6-1.73-2.48C30.93,36.2,31.88,35.51,32.15,35.36Z").attr({
    class: 'cls-163',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeb');
var path_aec = rsr.path("M34.64,34.89a1.06,1.06,0,0,0-.57-.56s-.08,0-.07,0a1.09,1.09,0,0,1,.59.57,4.58,4.58,0,0,1,.68,2.7,2,2,0,0,1-2.54,1.23c-.75-.19-1.11-1.2-1.36-1.87-.12-.35-.2-.58-.3-.62H31s0,0,0,0,0,0,0,0h0c.08,0,.17.29.28.58.24.69.61,1.71,1.39,1.91a2.85,2.85,0,0,0,.68.08,2,2,0,0,0,1.92-1.34A4.73,4.73,0,0,0,34.64,34.89Z").attr({
    class: 'cls-164',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aec');
var path_aed = rsr.path("M31.77,34.1a7.5,7.5,0,0,1,1.58,0,2.92,2.92,0,0,1,.14.38,2.73,2.73,0,0,0,.19.45.4.4,0,0,1-.08.49,1.61,1.61,0,0,1-1.12.34c-.15,0-.3,0-.36-.17a.56.56,0,0,1,0-.12c0-.13,0-.27-.08-.4A3.84,3.84,0,0,0,31.77,34.1Z").attr({
    class: 'cls-165',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aed');
group_iz.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_iz'
});
var group_ja = rsr.set();
var path_aee = rsr.path("M32.16,40.47c0-.2-.11-3-.79-3.74a.55.55,0,0,0-1,.3,10.72,10.72,0,0,0,.46,4.34c.23.19,2.36,1.47,3.15,1.92.34.19.89-.57.66-1C34.55,42,32.22,40.76,32.16,40.47Z").attr({
    class: 'cls-159',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aee');
group_ja.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ja'
});
var group_jb = rsr.set();
var path_aef = rsr.path("M34.61,42.28c-.12-.11-.34,0-.5.27s-.19.57-.08.68.34,0,.5-.28S34.72,42.39,34.61,42.28Z").attr({
    class: 'cls-160',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aef');
var path_aeg = rsr.path("M34.8,42.49a.74.74,0,0,0,.25,0,.55.55,0,0,1,.18,0,.36.36,0,0,1,.21.15s0,.07,0,.08-.19,0-.27,0,0,.19.06.25a1.12,1.12,0,0,0,.51.22,1.31,1.31,0,0,1,.21.08.13.13,0,0,1,.08.2.75.75,0,0,1-.13.25.86.86,0,0,1-.67.12,2.86,2.86,0,0,1-.55-.28c-.11-.09-.18-.21-.31-.3a.72.72,0,0,1-.21-.12c-.18-.19.08-.62.2-.71a.3.3,0,0,1,.35,0A.43.43,0,0,0,34.8,42.49Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeg');
group_jb.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jb'
});
var group_jc = rsr.set();
var path_aeh = rsr.path("M33.79,34.44a1.13,1.13,0,0,1-.72.81,1.1,1.1,0,0,1-1.14-.35,2.07,2.07,0,0,1-.49-1.61,1.5,1.5,0,0,1,.41-.76,2,2,0,0,1,.55-.37c.57-.3,1.08-.35,1.23.19.07.27.15.26.18.54A4,4,0,0,1,33.79,34.44Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeh');
var path_aei = rsr.path("M32.3,31.57a1.45,1.45,0,0,1,.75-.07c.89.07.93,2.48.8,2.52a6.22,6.22,0,0,0-.18-1.25,1,1,0,0,0-1.07-.29c-.3.08-.85.34-.9.7s.3,1.3.23,1.42-.29-.77-.41-.73.05.38.07.46l-.16-.23L31.32,34a1.73,1.73,0,0,1-.3-.8,1.17,1.17,0,0,1,.09-.86c.09-.15.17-.44.37-.48s.25-.2.36-.23.22.1.32,0Z").attr({
    class: 'cls-166',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aei');
group_jc.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jc'
});
var group_jd = rsr.set();
var path_aej = rsr.path("M29.45,56.07a.62.62,0,0,0-.53-1c-.46,0-1.13,1-1.66,1.34a.82.82,0,0,0,.19.66.81.81,0,0,0,.76.07C28.65,57.05,29.18,56.35,29.45,56.07Z").attr({
    class: 'cls-167',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aej');
var path_aek = rsr.path("M32.28,45.91l-4.4-.32c-.09.86-.12,3.42-.08,5.93,0,1.08-.65,3.44-.56,4.64,0,.48,1.55.39,1.63-.11l1-4c0-.13,0-.25,0-.38l.31-2.59s.79,2.16,1.1,3.11c0,0,.14,3.79.16,4.17s1.3.25,1.32-.05a42.64,42.64,0,0,0,.52-5A31.8,31.8,0,0,0,32.28,45.91Z").attr({
    class: 'cls-158',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aek');
group_jd.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jd'
});
var group_je = rsr.set();
var path_ael = rsr.path("M34.53,56.6c.19-.16.18-.88-.62-1a6.61,6.61,0,0,0-2.44.85.87.87,0,0,0,.12.73.88.88,0,0,0,.82.17A7.21,7.21,0,0,0,34.53,56.6Z").attr({
    class: 'cls-167',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_ael');
group_je.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_je'
});
var group_jf = rsr.set();
var path_aem = rsr.path("M27.25,56.16c.53-.38,1.1-1.08,1.56-1.08.74,0,.78.55.63.71s-.8,1-1.25,1.11a.81.81,0,0,1-.76-.08A.76.76,0,0,1,27.25,56.16Z").attr({
    class: 'cls-159',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aem');
var path_aen = rsr.path("M33.89,55.56c.78.09.76.67.57.83a7.23,7.23,0,0,1-2.08.77.9.9,0,0,1-.8-.17.82.82,0,0,1-.12-.72A6.26,6.26,0,0,1,33.89,55.56Z").attr({
    class: 'cls-159',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aen');
group_jf.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jf'
});
var group_jg = rsr.set();
var path_aeo = rsr.path("M30.9,38c-.27.38-1.18.42-1.68.31a.82.82,0,0,1-.72-1c0-.18.16-.25.19-.23v.13c0,.3.12.43.6.56s1.15.1,1.17-.2A.78.78,0,0,1,30.9,38Z").attr({
    class: 'cls-8',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeo');
group_jg.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jg'
});
var group_jh = rsr.set();
var path_aep = rsr.path("M36.58,39.66c0-.58-.12-1.23-.12-1.23,0-.2.27-.18.29,0s.27,1.69,0,1.74S36.59,39.79,36.58,39.66Z").attr({
    class: 'cls-18',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aep');
group_jh.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jh'
});
var group_ji = rsr.set();
var path_aeq = rsr.path("M27.49,49.42A2.25,2.25,0,0,0,29,50.2a34.17,34.17,0,0,1,.3-3.78,31.52,31.52,0,0,1,.25,3.86A6.21,6.21,0,0,0,33,49.69a.45.45,0,0,0,.17-.39c0-.11-.7-5.19-.74-6.63,0-1.66.46-3.25-.37-3.91a8.2,8.2,0,0,0-3.77-1.64.72.72,0,0,0-.74.6,22,22,0,0,0,0,3.91,58.68,58.68,0,0,1-.16,7.56A.45.45,0,0,0,27.49,49.42Z").attr({
    class: 'cls-169',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeq');
group_ji.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_ji'
});
var group_jj = rsr.set();
var path_aer = rsr.path("M29.24,41.1a4.13,4.13,0,0,0,.75-.27c.21-.18.26-.31.53-.37a3,3,0,0,1,.6-.08.7.7,0,0,1,.74.34c.21.53-.3.41-.6.57s-.12.25.09.33.18,0,.15.14-.18.13-.31.11-.47-.24-.74-.23a2.9,2.9,0,0,0-.85.31C29.49,41.67,29.37,41.38,29.24,41.1Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aer');
var path_aes = rsr.path("M28.67,39.59c0,.11-.1,1.35-.1,1.35L30,40.77a1.31,1.31,0,0,1,.62.87,13.62,13.62,0,0,1-2.73.76.76.76,0,0,1-.86-.6,9.94,9.94,0,0,1-.16-2.06c.08-1.35.2-2.44,1.15-2.63.18,0,.38.18.5.32a1.11,1.11,0,0,1,.23.6A4.83,4.83,0,0,1,28.67,39.59Z").attr({
    class: 'cls-168',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aes');
group_jj.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jj'
});
var group_jk = rsr.set();
var path_aet = rsr.path("M28.65,37.36a.25.25,0,0,0,0-.12,2.64,2.64,0,0,0,0-.28,2.54,2.54,0,0,1,0-.39c0-.17.24-.15.37-.22a4.72,4.72,0,0,1,.72-.25.33.33,0,0,0,.12-.05c.06,0,.1-.08.15-.1l.14,0,.31-.16a11.39,11.39,0,0,0,0,1.94l.27.22c0,.19-1,.46-1.9,0a.44.44,0,0,1-.25-.25C28.55,37.51,28.61,37.44,28.65,37.36Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aet');
var path_aeu = rsr.path("M31,35.21c0,.32,0,.64-.06,1s-.07.6-.09.9a.58.58,0,0,1,0,.18.4.4,0,0,1-.14.15,1.12,1.12,0,0,1-.86.15,2.13,2.13,0,0,1-.78-.19.79.79,0,0,1-.38-.26.73.73,0,0,1-.11-.38,4.08,4.08,0,0,1,.41-1.8,1.76,1.76,0,0,1,.24-.45,1.62,1.62,0,0,1,1-.51.71.71,0,0,1,.64,0,.66.66,0,0,1,.19.44A4.81,4.81,0,0,1,31,35.21Z").attr({
    class: 'cls-162',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aeu');
var path_aev = rsr.path("M31.2,34.29A4.24,4.24,0,0,1,31,35a.28.28,0,0,1,0,.13,2.08,2.08,0,0,0-.22.45c0,.05.07.48,0,.48s-.15,0-.19,0-.05-.07-.09-.15c-.11-.24-.3-.36-.39,0a1.37,1.37,0,0,0,0,.45c0,.34-.08.6-.42.68a1.63,1.63,0,0,1-.66,0A1.38,1.38,0,0,1,28,35.85,3.13,3.13,0,0,1,28,34.3a1.32,1.32,0,0,1,1.15-.77,1.68,1.68,0,0,1,.39,0c.12,0,.2.1.32.09.27,0,.49-.23.76-.16a1.25,1.25,0,0,1,.61.61A.5.5,0,0,1,31.2,34.29Z").attr({
    class: 'cls-170',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aev');
group_jk.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jk'
});
var group_jl = rsr.set();
var path_aew = rsr.path("M37.12,39c0-.18-.12-.5-.34-.52,0,.18-.08.28-.24.17a.37.37,0,0,1-.09-.2c-.12,0-.21.12-.27.2A3.78,3.78,0,0,0,36,39c-.08.15-.11.27-.2.43a5.21,5.21,0,0,0,.46.3,1.33,1.33,0,0,1,.26.27l.16-.12c.17-.09.39-.13.46-.33A1.34,1.34,0,0,0,37.12,39Z").attr({
    class: 'cls-171',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aew');
var path_aex = rsr.path("M34.27,40.24l1.49-1c.34-.23.94.4.89.78-.17.21-1.32,1.14-1.9,1.6a.74.74,0,0,1-.73.1c-.68-.3-2-.88-2.32-1-.95-.5-1-1.1-.79-1.54a1,1,0,0,1,1.5-.28Z").attr({
    class: 'cls-169',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aex');
group_jl.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jl'
});
var group_jm = rsr.set();
group_jm.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jm'
});
var _102 = rsr.set();
_102.attr({
    'id': '_10-2',
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_102'
});
var group_jn = rsr.set();
var path_aey = rsr.path("M51.2,49a1.13,1.13,0,0,0-.83,0c-.08,0-.55.36-.34.46,0,0,.26-.14.31-.17s.08,0,.11,0a.29.29,0,0,1-.14.17.12.12,0,0,0,.13.07c.16,0,.29-.15.46-.08s.17.13.29.14a.52.52,0,0,0,.3-.11.24.24,0,0,0,.11-.2c0-.11-.22-.19-.3-.24Z").attr({
    class: 'cls-171',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aey');
var path_aez = rsr.path("M53.89,44.71a.58.58,0,0,0-.7.18A3.36,3.36,0,0,0,53,46.12c.08.78.14,1.29.32,2.36a10.09,10.09,0,0,1-2.26.39c-.23.14-.35.62-.18.78s3,.06,3.42-.69a.41.41,0,0,0,.05-.19C54.41,48.15,54.52,44.9,53.89,44.71Z").attr({
    class: 'cls-169',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aez');
group_jn.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jn'
});
var group_jo = rsr.set();
var path_afa = rsr.path("M52.56,44.07c-.1,0-.85.08-1.12.13,0,.08.09.67.08.8s-.5.29-.47.34c.18.37,1.91-.05,1.84-.44,0-.1-.17,0-.24-.13A2.07,2.07,0,0,1,52.56,44.07Z").attr({
    class: 'cls-184',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afa');
var path_afb = rsr.path("M53.37,43.85a2.74,2.74,0,0,0,.28.94,1.33,1.33,0,0,1,.13.33.55.55,0,0,1-.26.5,1.08,1.08,0,0,1-.56.16H52.7a4.45,4.45,0,0,0-.57.22,1.05,1.05,0,0,1-.94-.16c-.17-.13-.38-.28-.58-.23a2,2,0,0,0,.15-1.16c-.29-1.13-.56-2.94.85-3.38a1.85,1.85,0,0,1,.89,0,1,1,0,0,1,.77.85A9.81,9.81,0,0,1,53.37,43.85Z").attr({
    class: 'cls-185',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afb');
group_jo.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jo'
});
var _11 = rsr.set();
_11.attr({
    'id': '_11',
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': '_11'
});
var group_jp = rsr.set();
var path_afc = rsr.path("M52.83,48.65a0,0,0,0,0,0-.06l-.11-.06L46.2,49.61l-.11.06a.07.07,0,0,0,0,.06h0s0,.18.43.41l1.92,1.11.08,0h.05l.09,0L52.56,49c.27-.16.27-.32.27-.32Z").attr({
    class: 'cls-73',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afc');
group_jp.attr({
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jp'
});
var group_jq = rsr.set();
var path_afd = rsr.path("M52.86,48.59a.07.07,0,0,1,0,.06L48.6,51.09a.17.17,0,0,1-.19,0L46,49.72a.07.07,0,0,1,0-.06v.05a.07.07,0,0,0,0,.06l2.37,1.37a.21.21,0,0,0,.19,0l4.22-2.44a.07.07,0,0,0,0-.06Z").attr({
    class: 'cls-172',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afd');
group_jq.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_jq'
});
var group_jr = rsr.set();
var path_afe = rsr.path("M46,49.61c-.06,0-.06.08,0,.11l2.37,1.37a.17.17,0,0,0,.19,0l4.22-2.44c.06,0,.06-.08,0-.11l-2.37-1.38a.21.21,0,0,0-.19,0Z").attr({
    class: 'cls-173',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afe');
var path_aff = rsr.path("M48.5,51.06l.07,0,4.22-2.45h0l-2.37-1.38h-.13l-4.22,2.45h0L48.44,51Z").attr({
    class: 'cls-174',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aff');
var path_afg = rsr.path("M46.07,49.66l4.22-2.45h.13l2.37,1.38h0l-.07,0-2.3-1.34h-.13l-4.15,2.41-.07,0h0Z").attr({
    class: 'cls-72',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afg');
var path_afh = rsr.path("M52.79,48.59l-2.37-1.38h-.06v.09h.06l2.3,1.34.07,0h0Z").attr({
    class: 'cls-73',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afh');
group_jr.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_jr'
});
var group_js = rsr.set();
var path_afi = rsr.path("M51.3,49.14h0L51,49l0-.06a2.45,2.45,0,0,0-.66-.53,3.17,3.17,0,0,0-.6-.27h-.06v.1l0,0a3,3,0,0,1,.56.25,2.64,2.64,0,0,1,.61.48h0a4,4,0,0,1-1-.39,1.72,1.72,0,0,1-.43-.32l0,0h0v.11l0,0a1.78,1.78,0,0,0,.46.35,4.18,4.18,0,0,0,.92.38l.11,0,.3.17.06,0v-.1Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afi');
var path_afj = rsr.path("M50.59,49.54h0L49.66,49a2.11,2.11,0,0,0-.34-.16l-.09,0h0L49,48.66c-.1-.06-.16,0-.16,0s.05-.08.16,0l.26.14h0l.12.09a1.32,1.32,0,0,0,.25.16l1,.56h0a.08.08,0,0,0,0-.07l0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afj');
var path_afk = rsr.path("M49.48,50.19h0l-.94-.55a3.36,3.36,0,0,0-.33-.16l-.1,0h0l-.27-.14c-.11-.07-.17,0-.17,0s0-.08.16,0l.27.15h0a.76.76,0,0,0,.12.1,2,2,0,0,0,.24.16l1,.56h0s0,0,0,0a.13.13,0,0,0,0-.07,0,0,0,0,0,0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afk');
var path_afl = rsr.path("M50,49.87l-.88-.52a2.3,2.3,0,0,0-.32-.15l-.08,0h0L48.48,49h0s0,0-.06,0h0l0,0h0a.26.26,0,0,0-.08.11s0,0,0,0h0v0h0s0,0,.07,0l0,0,.09-.1.25.13h0l.11.08a1.14,1.14,0,0,0,.23.15L50,50h0a.08.08,0,0,0,0-.07s0,0,0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afl');
group_js.attr({
    'class': 'cls-175',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_js'
});
var group_jt = rsr.set();
group_jt.attr({
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jt'
});
var group_ju = rsr.set();
var path_afm = rsr.path("M50.91,48.82a2.55,2.55,0,0,0-.66-.55,3.87,3.87,0,0,0-.56-.25h0v.1l0,0a3,3,0,0,1,.56.25,2.51,2.51,0,0,1,.66.54L51,49v-.1S50.93,48.84,50.91,48.82Z").attr({
    class: 'cls-177',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afm');
var path_afn = rsr.path("M50.83,48.88a3.75,3.75,0,0,1-.92-.38,2,2,0,0,1-.46-.34l0,0v.11l0,0a1.78,1.78,0,0,0,.46.35,4.18,4.18,0,0,0,.92.38l.11,0v-.11Z").attr({
    class: 'cls-177',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afn');
var path_afo = rsr.path("M 50.94 48.91 50.94 49.02 51.24 49.19 51.24 49.08 50.94 48.91 z").attr({
    class: 'cls-177',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afo');
var path_afp = rsr.path("M51.24,49.08v.11l.06,0v-.1S51.25,49.09,51.24,49.08Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afp');
var path_afq = rsr.path("M51,48.87l0-.06a2.45,2.45,0,0,0-.66-.53,3.17,3.17,0,0,0-.6-.27h0a3.87,3.87,0,0,1,.56.25,2.55,2.55,0,0,1,.66.55s.05.07.06.07l-.12,0a4,4,0,0,1-1-.39,1.72,1.72,0,0,1-.43-.32l0,0h0l0,0a2,2,0,0,0,.46.34,3.75,3.75,0,0,0,.92.38l.11,0,.3.17s.07,0,.06,0Z").attr({
    class: 'cls-178',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afq');
group_ju.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_ju'
});
var group_jv = rsr.set();
var path_afr = rsr.path("M49.23,48.72,49,48.57c-.1-.06-.16,0-.16,0s.05-.08.16,0l.27.15h0s0,0,0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afr');
group_jv.attr({
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jv'
});
var group_jw = rsr.set();
var path_afs = rsr.path("M49.66,48.91a2.11,2.11,0,0,0-.34-.16l-.09,0h0a.76.76,0,0,0,.12.1,1.32,1.32,0,0,0,.25.16l1,.56,0,0a.08.08,0,0,1,0-.07h0Z").attr({
    class: 'cls-179',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afs');
var path_aft = rsr.path("M50.57,49.46a.08.08,0,0,0,0,.07s0,0,0,0a.08.08,0,0,0,0-.07S50.59,49.44,50.57,49.46Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aft');
group_jw.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_jw'
});
var group_jx = rsr.set();
var path_afu = rsr.path("M48.12,49.36l-.28-.14c-.11-.07-.17,0-.17,0s0-.08.16,0l.27.15h0a0,0,0,0,0,0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afu');
group_jx.attr({
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jx'
});
var group_jy = rsr.set();
var path_afv = rsr.path("M48.54,49.55a3.36,3.36,0,0,0-.33-.16l-.1,0h0l.13.1a2,2,0,0,0,.24.16l1,.56s0,0,0,0a.1.1,0,0,1,0-.07h0Z").attr({
    class: 'cls-180',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afv');
var path_afw = rsr.path("M49.45,50.1a.1.1,0,0,0,0,.07s0,0,0,0a.13.13,0,0,0,0-.07S49.47,50.09,49.45,50.1Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afw');
group_jy.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_jy'
});
var group_jz = rsr.set();
var path_afx = rsr.path("M48.8,49.1l-.42-.22h0v0l.41.22h0s0,0,0,0Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afx');
var path_afy = rsr.path("M48.33,48.93a.17.17,0,0,1,0-.21l0,0h0a.12.12,0,0,0,0,0,.18.18,0,0,0,0,.22.16.16,0,0,0,.09,0h0A.09.09,0,0,1,48.33,48.93Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afy');
var path_afz = rsr.path("M48.46,48.69a.11.11,0,0,0-.13,0l0,0a.17.17,0,0,0,0,.21.09.09,0,0,0,.12,0,.12.12,0,0,0,0-.05A.17.17,0,0,0,48.46,48.69Z").attr({
    class: 'cls-177',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_afz');
var path_aga = rsr.path("M48.45,48.7a.09.09,0,0,0-.11,0s0,0,0,0a.17.17,0,0,0,0,.19.11.11,0,0,0,.12,0l0,0A.15.15,0,0,0,48.45,48.7Z").attr({
    class: 'cls-182',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_aga');
group_jz.attr({
    'data-name': '11',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_jz'
});
var group_ka = rsr.set();
var path_agb = rsr.path("M49.15,49.26a2.3,2.3,0,0,0-.32-.15l-.08,0s0,0,0,0l.11.08a1.14,1.14,0,0,0,.23.15l.9.53v0a.08.08,0,0,1,0-.07h0Z").attr({
    class: 'cls-181',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agb');
var path_agc = rsr.path("M50,49.78a.08.08,0,0,0,0,.07s0,0,0,0a.08.08,0,0,0,0-.07S50,49.77,50,49.78Z").attr({
    class: 'cls-176',
    "data-name": '11',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agc');
group_ka.attr({
    'class': 'cls-3',
    'data-name': '11',
    'parent': 'group_a',
    'name': 'group_ka'
});
var group_kb = rsr.set();
var path_agd = rsr.path("M54.29,63.38l.06-.08a.86.86,0,0,0,0-.23,3.29,3.29,0,0,1,.27-1c0-.06,0-.12.07-.19a.87.87,0,0,0-.05-.35c-.09-.35-.24-1.71-.36-2a6,6,0,0,0-.58-1.41.49.49,0,0,1-.09-.28,14.45,14.45,0,0,0-.51-3.69,4.43,4.43,0,0,0-1,3.55,9.7,9.7,0,0,0,.44,1.45,3.4,3.4,0,0,0,.31.52c.12.22.73,1.37.9,1.72s.61,1.77.16,2c0,0-.2,0-.25.12-.19.28.2.21.3.16S54.22,63.45,54.29,63.38Z").attr({
    class: 'cls-162',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agd');
var path_age = rsr.path("M54,57.33c0-1.21.07-2.21.08-2.78a6.47,6.47,0,0,0-.25-2.13c-.34-.67-1.58-.23-2.31-.16a4.21,4.21,0,0,0-1.52.66s0,.18-.08.36a14.5,14.5,0,0,0-.12,4.37.7.7,0,0,0,.23.14s.15-1.89.2-1.88.12,2,.22,2C51.54,58.06,53.55,57.86,54,57.33Z").attr({
    class: 'cls-158',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_age');
var path_agf = rsr.path("M53.83,47.65a10.59,10.59,0,0,0,.23-1.48c0-.38.13-1.08-.22-1.35a1.58,1.58,0,0,0-1.24-.1,9.06,9.06,0,0,0-1.34.52,2.43,2.43,0,0,0-1.08.85A2.87,2.87,0,0,0,50,47.57c0,.63.14,1.24.19,1.87A35.49,35.49,0,0,1,49.57,55c0,.21.24.35.66.44,0,0,.21-1.34.21-1.34l.15,1.4c1.34.15,3.54-.14,3.66-.91,0-1-.81-3.18-.58-5.62A10.83,10.83,0,0,1,53.83,47.65Z").attr({
    class: 'cls-169',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agf');
group_kb.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_kb'
});
var group_kc = rsr.set();
var path_agg = rsr.path("M50.76,64.22a.27.27,0,0,0,.08-.07A.78.78,0,0,0,51,64a3.32,3.32,0,0,1,.51-.92.91.91,0,0,0,.11-.16.84.84,0,0,0,0-.35c0-.37.19-1.72.16-2.07a8.6,8.6,0,0,0-.23-1.64,3.09,3.09,0,0,1-.07-.35.49.49,0,0,1,0-.17c0-.25.16-1,.18-1.24a1.44,1.44,0,0,0-.55-1.31c-.29-.15-.47,0-.59.29s-.33-1-.47-.67a15,15,0,0,0,0,1.78,8.8,8.8,0,0,0,.37,3.1c.06.24.37,1.51.44,1.89a2.77,2.77,0,0,1,0,1.4c-.2.56-.42.3-.6.52s.2.36.29.35S50.68,64.27,50.76,64.22Z").attr({
    class: 'cls-162',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agg');
var path_agh = rsr.path("M50.09,64l0,0a.62.62,0,0,1,.36,0s-.23,0-.26.1.25.14.31.11c.3-.16.34-.51.44-.82a1.28,1.28,0,0,1,.55-.8s.07,0,.1,0,.12.12.13.2a1.29,1.29,0,0,1,0,.48c0,.1-.06.2-.08.3s0,1.28,0,1.28l-.16.06-.2-.07v-.93c0,.14-.15.86-.15.86a2.83,2.83,0,0,1-.35.14c-.17,0-.66-.16-.76-.42A.41.41,0,0,1,50.09,64Z").attr({
    class: 'cls-158',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agh');
var path_agi = rsr.path("M50.79,64.81a2.83,2.83,0,0,0,.35-.14s.1-.72.15-.86S51.07,63.89,50.79,64.81Z").attr({
    class: 'cls-183',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agi');
var path_agj = rsr.path("M53.66,63.51v0a.5.5,0,0,1,.33-.14s-.21.1-.23.16.28.07.33,0c.25-.22.2-.57.22-.9a1.21,1.21,0,0,1,.32-.91.14.14,0,0,1,.09,0c.09,0,.15.08.18.16a1.18,1.18,0,0,1,.14.45c0,.11,0,.21,0,.31s.3,1.25.3,1.25l-.14.1-.2,0-.24-.9c0,.15.08.87.08.87a2.78,2.78,0,0,1-.31.23c-.17,0-.68,0-.84-.21A.39.39,0,0,1,53.66,63.51Z").attr({
    class: 'cls-158',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agj');
var path_agk = rsr.path("M54.77,63a4.23,4.23,0,0,0-.23,1.1s.31-.23.31-.23S54.76,63.17,54.77,63Z").attr({
    class: 'cls-183',
    "data-name": '10',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agk');
group_kc.attr({
    'data-name': '10',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_kc'
});
var group_kd = rsr.set();
var path_agl = rsr.path("M48.06,50.56a.62.62,0,0,1-.18-.18c0-.05-.08-.15-.16-.13s0,.16,0,.24-.2.25-.51.08c-.06,0-.1-.09-.17-.1a1.11,1.11,0,0,0,.78.76.62.62,0,0,0,.53-.19.63.63,0,0,0,.12-.11c.1-.16,0-.25-.16-.3l-.23,0Z").attr({
    class: 'cls-171',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agl');
var path_agm = rsr.path("M50.79,45.93a.5.5,0,0,0-.69.19,2.14,2.14,0,0,0-.2,1c.05.78.08,1.8.23,2.88l-2.07.52c-.2.19-.22.68,0,.81s2.88-.33,3-.62C51,50.58,51.42,46.37,50.79,45.93Z").attr({
    class: 'cls-169',
    "data-name": '1',
    parent: 'group_a',
    'stroke-width': '0',
    'stroke-opacity': '1',
    'fill': '#000000'
}).data('id', 'path_agm');
group_kd.attr({
    'data-name': '1',
    'class': 'cls-3',
    'parent': 'group_a',
    'name': 'group_kd'
});
var rsrGroups = [group_a, sity, group_b, _3, group_c, group_d, group_e, group_f, group_g, group_h, group_i, group_j, _2, _1, _12, group_k, group_l, group_m, group_n, group_o, group_p, _4, group_q, group_r, group_s, group_t, group_u, group_v, group_w, group_x, group_y, group_z, group_aa, group_ab, group_ac, group_ad, group_ae, group_af, group_ag, group_ah, group_ai, group_aj, group_ak, group_al, group_am, group_an, group_ao, group_ap, group_aq, group_ar, group_as, group_at, group_au, group_av, group_aw, group_ax, group_ay, group_az, group_ba, group_bb, group_bc, group_bd, group_be, group_bf, group_bg, group_bh, group_bi, group_bj, group_bk, group_bl, group_bm, group_bn, group_bo, group_bp, group_bq, group_br, group_bs, group_bt, group_bu, group_bv, group_bw, _5, group_bx, group_by, group_bz, group_ca, group_cb, group_cc, group_cd, group_ce, group_cf, group_cg, group_ch, _13, group_ci, group_cj, group_ck, _22, group_cl, group_cm, group_cn, group_co, group_cp, group_cq, group_cr, group_cs, group_ct, group_cu, group_cv, group_cw, group_cx, group_cy, group_cz, group_da, group_db, group_dc, group_dd, group_de, group_df, group_dg, group_dh, group_di, group_dj, group_dk, group_dl, group_dm, group_dn, group_do, group_dp, group_dq, _10, group_dr, group_ds, group_dt, group_du, group_dv, group_dw, group_dx, group_dy, group_dz, group_ea, group_eb, group_ec, group_ed, group_ee, group_ef, group_eg, group_eh, group_ei, group_ej, group_ek, group_el, group_em, group_en, group_eo, group_ep, group_eq, group_er, group_es, group_et, group_eu, group_ev, group_ew, group_ex, group_ey, group_ez, group_fa, group_fb, group_fc, group_fd, _32, _33, group_fe, group_ff, group_fg, group_fh, group_fi, group_fj, group_fk, group_fl, _14, group_fm, group_fn, group_fo, group_fp, group_fq, group_fr, group_fs, group_ft, group_fu, group_fv, group_fw, group_fx, group_fy, group_fz, group_ga, group_gb, group_gc, group_gd, _42, group_ge, group_gf, group_gg, group_gh, group_gi, group_gj, group_gk, group_gl, group_gm, group_gn, group_go, group_gp, group_gq, group_gr, group_gs, group_gt, group_gu, group_gv, group_gw, group_gx, group_gy, _52, group_gz, group_ha, group_hb, group_hc, group_hd, group_he, group_hf, group_hg, group_hh, group_hi, group_hj, group_hk, group_hl, group_hm, group_hn, group_ho, group_hp, group_hq, group_hr, group_hs, group_ht, group_hu, group_hv, group_hw, group_hx, group_hy, group_hz, group_ia, group_ib, group_ic, group_id, group_ie, group_if, group_ig, group_ih, group_ii, _53, group_ij, group_ik, group_il, group_im, group_in, group_io, group_ip, group_iq, group_ir, group_is, group_it, group_iu, group_iv, group_iw, group_ix, group_iy, group_iz, group_ja, group_jb, group_jc, group_jd, group_je, group_jf, group_jg, group_jh, group_ji, group_jj, group_jk, group_jl, group_jm, _102, group_jn, group_jo, _11, group_jp, group_jq, group_jr, group_js, group_jt, group_ju, group_jv, group_jw, group_jx, group_jy, group_jz, group_ka, group_kb, group_kc, group_kd];
group_a.push();
sity.push();
group_b.push();
_3.push(path_ke, path_kf);
group_c.push(path_kg);
group_d.push(path_kh);
group_e.push(path_ki);
group_f.push(path_kj, path_kk, path_kl);
group_g.push(path_km);
group_h.push(path_kn, path_ko, path_kp, path_kq, path_kr, path_ks, path_kt, path_ku, path_kv, path_kw, path_kx, path_ky, path_kz, path_la, path_lb);
group_i.push(path_lc, path_ld, path_le, path_lf, path_lg, path_lh, path_li, path_lj, path_lk, path_ll, path_lm, path_ln, path_lo, path_lp, path_lq);
group_j.push(path_lr, path_ls);
_2.push(path_lt, path_lu, path_lv, path_lw, path_lx, path_ly, path_lz, ellipse_ma);
_1.push();
_12.push(ellipse_mb, path_mc, path_md, ellipse_me, path_mf);
group_k.push(path_mg, ellipse_mh);
group_l.push(path_mi);
group_m.push(path_mj, path_mk, path_ml);
group_n.push(path_mm, path_mn);
group_o.push();
group_p.push(path_mo, path_mp);
_4.push();
group_q.push(path_mq, path_mr, path_ms);
group_r.push();
group_s.push(path_mt, path_mu, path_mv);
group_t.push(path_mw);
group_u.push(path_mx, path_my);
group_v.push(path_mz);
group_w.push(path_na, path_nb);
group_x.push(path_nc);
group_y.push(path_nd, path_ne);
group_z.push(path_nf);
group_aa.push();
group_ab.push(path_ng);
group_ac.push(path_nh, path_ni);
group_ad.push(path_nj, path_nk, path_nl);
group_ae.push(path_nm);
group_af.push(path_nn);
group_ag.push(path_no);
group_ah.push(path_np, path_nq);
group_ai.push(path_nr, path_ns, path_nt);
group_aj.push(path_nu);
group_ak.push(path_nv);
group_al.push(path_nw);
group_am.push(path_nx, path_ny);
group_an.push(path_nz, path_oa, path_ob);
group_ao.push(path_oc);
group_ap.push(path_od);
group_aq.push();
group_ar.push(path_oe);
group_as.push(path_of, path_og);
group_at.push(path_oh, path_oi, path_oj);
group_au.push(path_ok);
group_av.push(path_ol);
group_aw.push(path_om);
group_ax.push(path_on, path_oo);
group_ay.push(path_op, path_oq, path_or);
group_az.push(path_os);
group_ba.push(path_ot);
group_bb.push(path_ou);
group_bc.push(path_ov, path_ow);
group_bd.push(path_ox, path_oy, path_oz);
group_be.push(path_pa);
group_bf.push(path_pb);
group_bg.push();
group_bh.push(path_pc);
group_bi.push(path_pd, path_pe);
group_bj.push(path_pf, path_pg, path_ph);
group_bk.push(path_pi);
group_bl.push(path_pj);
group_bm.push(path_pk);
group_bn.push(path_pl, path_pm);
group_bo.push(path_pn, path_po, path_pp);
group_bp.push(path_pq);
group_bq.push(path_pr);
group_br.push(path_ps);
group_bs.push(path_pt, path_pu);
group_bt.push(path_pv, path_pw, path_px);
group_bu.push(path_py);
group_bv.push(path_pz);
group_bw.push(path_qa);
_5.push();
group_bx.push(path_qb, path_qc);
group_by.push(ellipse_qd, ellipse_qe, path_qf, path_qg);
group_bz.push(path_qh, path_qi);
group_ca.push(path_qj);
group_cb.push(path_qk, path_ql, path_qm, path_qn, path_qo, path_qp, path_qq, path_qr);
group_cc.push(path_qs, path_qt);
group_cd.push(path_qu, path_qv);
group_ce.push(path_qw, path_qx);
group_cf.push(path_qy);
group_cg.push(path_qz, path_ra, path_rb, path_rc);
group_ch.push(path_rd, path_re, path_rf);
_13.push();
group_ci.push(path_rg, path_rh, path_ri, path_rj, path_rk);
group_cj.push(path_rl, path_rm, path_rn);
group_ck.push(path_ro, path_rp, path_rq);
_22.push(path_rr, path_rs, path_rt, path_ru, path_rv);
group_cl.push();
group_cm.push();
group_cn.push();
group_co.push(path_rw, path_rx, path_ry);
group_cp.push(path_rz, path_sa, path_sb);
group_cq.push(path_sc, path_sd);
group_cr.push(path_se, path_sf, path_sg);
group_cs.push();
group_ct.push();
group_cu.push(path_sh, path_si, path_sj);
group_cv.push(path_sk, path_sl, path_sm);
group_cw.push(path_sn, path_so);
group_cx.push(path_sp, path_sq, path_sr);
group_cy.push();
group_cz.push();
group_da.push(path_ss, path_st);
group_db.push(path_su, path_sv, path_sw);
group_dc.push(path_sx, path_sy);
group_dd.push(path_sz, path_ta, path_tb);
group_de.push();
group_df.push();
group_dg.push(path_tc, path_td, path_te);
group_dh.push(path_tf, path_tg, path_th);
group_di.push(path_ti, path_tj, path_tk);
group_dj.push(path_tl, path_tm, path_tn);
group_dk.push(path_to, path_tp, path_tq, path_tr, path_ts, path_tt, path_tu);
group_dl.push(path_tv);
group_dm.push();
group_dn.push(path_tw);
group_do.push(path_tx);
group_dp.push(path_ty, path_tz);
group_dq.push(path_ua, path_ub, path_uc);
_10.push();
group_dr.push();
group_ds.push();
group_dt.push();
group_du.push();
group_dv.push(path_ud, path_ue);
group_dw.push(path_uf, path_ug, path_uh);
group_dx.push(path_ui, path_uj);
group_dy.push(path_uk, path_ul);
group_dz.push();
group_ea.push();
group_eb.push(path_um, path_un);
group_ec.push(path_uo, path_up, path_uq);
group_ed.push(path_ur, path_us);
group_ee.push(path_ut, path_uu);
group_ef.push();
group_eg.push();
group_eh.push(path_uv, path_uw);
group_ei.push(path_ux, path_uy, path_uz);
group_ej.push(path_va, path_vb);
group_ek.push(path_vc, path_vd);
group_el.push();
group_em.push();
group_en.push(path_ve, path_vf);
group_eo.push(path_vg, path_vh, path_vi);
group_ep.push(path_vj, path_vk);
group_eq.push(path_vl, path_vm);
group_er.push();
group_es.push(path_vn, path_vo, path_vp, path_vq, path_vr, path_vs, path_vt);
group_et.push(path_vu, path_vv, path_vw);
group_eu.push(path_vx, path_vy, path_vz);
group_ev.push();
group_ew.push(path_wa, path_wb, path_wc, path_wd, path_we, path_wf);
group_ex.push(path_wg);
group_ey.push(path_wh, path_wi);
group_ez.push(path_wj);
group_fa.push(path_wk, path_wl);
group_fb.push(path_wm);
group_fc.push(path_wn, path_wo);
group_fd.push(path_wp);
_32.push();
_33.push(path_wq);
group_fe.push();
group_ff.push(path_wr, path_ws);
group_fg.push(path_wt, path_wu);
group_fh.push();
group_fi.push(path_wv);
group_fj.push(path_ww, path_wx);
group_fk.push(path_wy, path_wz);
group_fl.push(path_xa, path_xb, path_xc);
_14.push(path_xd, path_xe, path_xf);
group_fm.push();
group_fn.push(path_xg, path_xh, path_xi, path_xj);
group_fo.push(path_xk, path_xl, path_xm);
group_fp.push(path_xn);
group_fq.push();
group_fr.push(path_xo);
group_fs.push(path_xp, path_xq, path_xr);
group_ft.push(path_xs, path_xt, path_xu, path_xv);
group_fu.push();
group_fv.push(path_xw, path_xx, path_xy);
group_fw.push(path_xz, path_ya);
group_fx.push(path_yb, path_yc, path_yd);
group_fy.push();
group_fz.push(path_ye, path_yf, path_yg);
group_ga.push(path_yh, path_yi, path_yj);
group_gb.push(path_yk, path_yl);
group_gc.push(path_ym, path_yn, path_yo);
group_gd.push(path_yp, path_yq, path_yr, path_ys);
_42.push();
group_ge.push(path_yt, path_yu);
group_gf.push(path_yv, path_yw);
group_gg.push(path_yx, path_yy, path_yz);
group_gh.push(path_za, path_zb, path_zc, path_zd, path_ze);
group_gi.push(path_zf, path_zg);
group_gj.push(path_zh, path_zi);
group_gk.push(path_zj, path_zk);
group_gl.push(path_zl);
group_gm.push(path_zm, path_zn);
group_gn.push(path_zo, path_zp);
group_go.push(path_zq, path_zr);
group_gp.push(path_zs, path_zt);
group_gq.push(path_zu, path_zv);
group_gr.push(path_zw, path_zx, path_zy, path_zz, path_aaa);
group_gs.push(path_aab, path_aac, path_aad);
group_gt.push(path_aae);
group_gu.push();
group_gv.push(path_aaf);
group_gw.push(path_aag, path_aah);
group_gx.push(path_aai);
group_gy.push(path_aaj, path_aak, path_aal, path_aam);
_52.push();
group_gz.push();
group_ha.push(path_aan, path_aao, path_aap, path_aaq);
group_hb.push(path_aar, path_aas);
group_hc.push(path_aat, path_aau);
group_hd.push(path_aav);
group_he.push(path_aaw, path_aax);
group_hf.push(path_aay, path_aaz, path_aba);
group_hg.push(path_abb);
group_hh.push(path_abc, path_abd);
group_hi.push(path_abe);
group_hj.push();
group_hk.push();
group_hl.push(path_abf, path_abg);
group_hm.push(path_abh, path_abi);
group_hn.push(path_abj, path_abk);
group_ho.push(path_abl, path_abm);
group_hp.push(path_abn, path_abo);
group_hq.push(path_abp, path_abq);
group_hr.push(path_abr, path_abs);
group_hs.push(path_abt, path_abu);
group_ht.push(path_abv, path_abw);
group_hu.push();
group_hv.push(path_abx, path_aby);
group_hw.push(path_abz, path_aca);
group_hx.push(path_acb, path_acc);
group_hy.push(path_acd, path_ace);
group_hz.push(path_acf, path_acg);
group_ia.push(path_ach, path_aci);
group_ib.push(path_acj, path_ack);
group_ic.push(path_acl, path_acm);
group_id.push(path_acn, path_aco);
group_ie.push(path_acp, path_acq);
group_if.push(path_acr, path_acs);
group_ig.push(path_act, path_acu);
group_ih.push(path_acv, path_acw);
group_ii.push(path_acx, path_acy);
_53.push();
group_ij.push(path_acz);
group_ik.push(path_ada, path_adb);
group_il.push();
group_im.push();
group_in.push(path_adc, path_add, path_ade);
group_io.push(path_adf, path_adg);
group_ip.push(path_adh, path_adi);
group_iq.push(path_adj, path_adk);
group_ir.push();
group_is.push(path_adl, path_adm);
group_it.push(path_adn, path_ado);
group_iu.push(path_adp, path_adq, path_adr, path_ads, path_adt);
group_iv.push();
group_iw.push(path_adu, path_adv, path_adw);
group_ix.push(path_adx);
group_iy.push(path_ady, path_adz);
group_iz.push(path_aea, path_aeb, path_aec, path_aed);
group_ja.push(path_aee);
group_jb.push(path_aef, path_aeg);
group_jc.push(path_aeh, path_aei);
group_jd.push(path_aej, path_aek);
group_je.push(path_ael);
group_jf.push(path_aem, path_aen);
group_jg.push(path_aeo);
group_jh.push(path_aep);
group_ji.push(path_aeq);
group_jj.push(path_aer, path_aes);
group_jk.push(path_aet, path_aeu, path_aev);
group_jl.push(path_aew, path_aex);
group_jm.push();
_102.push();
group_jn.push(path_aey, path_aez);
group_jo.push(path_afa, path_afb);
_11.push();
group_jp.push(path_afc);
group_jq.push(path_afd);
group_jr.push(path_afe, path_aff, path_afg, path_afh);
group_js.push(path_afi, path_afj, path_afk, path_afl);
group_jt.push();
group_ju.push(path_afm, path_afn, path_afo, path_afp, path_afq);
group_jv.push(path_afr);
group_jw.push(path_afs, path_aft);
group_jx.push(path_afu);
group_jy.push(path_afv, path_afw);
group_jz.push(path_afx, path_afy, path_afz, path_aga);
group_ka.push(path_agb, path_agc);
group_kb.push(path_agd, path_age, path_agf);
group_kc.push(path_agg, path_agh, path_agi, path_agj, path_agk);
group_kd.push(path_agl, path_agm);
