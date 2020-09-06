var rsr = Raphael('obh', '140', '107.42');
var sity = rsr.set();
sity.attr({
  'id': 'sity',
  'name': 'sity'
});
var group_a = rsr.set();
var path_c = rsr.path("M 53.94 71.23 54.1 75.7 46.85 79.94 35.46 69.16 35.2 64.66 36.35 63.98 33.77 61.5 39.16 58.24 53.94 71.23 z").attr({
  class: 'cls-2',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_c');
var ellipse_d = rsr.ellipse(94.26, 38.64, 9.03, 5.97).attr({
  class: 'cls-4',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'ellipse_d');
var ellipse_e = rsr.ellipse(93.91, 38.84, 13.84, 9).attr({
  class: 'cls-2',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'ellipse_e');
group_a.attr({
  'parent': 'sity',
  'name': 'group_a'
});
var group_b = rsr.set();
var path_f = rsr.path("M115.43,43.1,80.14,40.47c-.42.15.59-16,22.75-8.88C118.34,23.29,134.76,14,134.76,14v4L106,34.36s3.12,2.76,1.11,8").attr({
  class: 'cls-2',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_f');
group_b.attr({
  'parent': 'sity',
  'name': 'group_b'
});
var OBH = rsr.set();
OBH.attr({
  'id': 'OBH',
  'parent': 'sity',
  'name': 'OBH'
});
var rsrGroups = [sity, group_a, group_b, OBH];
sity.push();
group_a.push(path_c, ellipse_d, ellipse_e);
group_b.push(path_f);
OBH.push();
