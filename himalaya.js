var rsr = Raphael('himalaya', '115.27', '94.59');
var sity = rsr.set();
sity.attr({
  'id': 'sity',
  'name': 'sity'
});
var group_a = rsr.set();
group_a.attr({
  'parent': 'sity',
  'name': 'group_a'
});
var group_b = rsr.set();
var path_g = rsr.path("M 45.27 82.7 45.27 82.86 45.13 82.78 44.99 82.7 2.81 58.34 30.71 22.17 42.36 7.07 44.98 3.66 44.99 3.66 45.01 9.29 45.08 30.18 45.27 82.7 z").attr({
  class: 'cls-2',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_g');
var path_h = rsr.path("M 87.45 58.34 45.27 82.7 45.13 82.78 44.99 82.86 44.99 3.66 47.58 6.99 55.81 17.59 87.45 58.34 z").attr({
  class: 'cls-3',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_h');
group_b.attr({
  'parent': 'sity',
  'name': 'group_b'
});
var group_c = rsr.set();
var path_i = rsr.path("M 44.98 3.66 44.98 30.44 39.63 20.52 36.68 22.68 35.31 19.04 30.71 22.17 42.36 7.07 44.98 3.66 z").attr({
  class: 'cls-4',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_i');
var path_j = rsr.path("M 55.81 17.59 54.22 17.46 54.22 23.82 48.75 20.77 45.09 30.16 45.08 30.18 44.99 30.42 44.98 30.44 44.98 3.66 44.99 3.66 47.58 6.99 55.81 17.59 z").attr({
  class: 'cls-5',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_j');
group_c.attr({
  'parent': 'sity',
  'name': 'group_c'
});
var group_d = rsr.set();
group_d.attr({
  'parent': 'sity',
  'name': 'group_d'
});
var group_e = rsr.set();
var path_k = rsr.path("M 83.91 92.83 83.91 92.91 83.82 92.87 83.72 92.83 54.66 79.78 73.89 60.41 81.91 52.33 83.72 50.5 83.72 50.5 83.73 53.52 83.78 64.71 83.91 92.83 z").attr({
  class: 'cls-2',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_k');
var path_l = rsr.path("M 112.97 79.78 83.91 92.83 83.82 92.87 83.72 92.91 83.72 50.5 85.5 52.28 91.18 57.96 112.97 79.78 z").attr({
  class: 'cls-3',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_l');
group_e.attr({
  'parent': 'sity',
  'name': 'group_e'
});
var group_f = rsr.set();
var path_m = rsr.path("M 83.72 50.5 83.72 64.84 80.03 59.53 78 60.69 77.06 58.74 73.89 60.41 81.91 52.33 83.72 50.5 z").attr({
  class: 'cls-4',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_m');
var path_n = rsr.path("M 91.18 57.96 90.08 57.89 90.08 61.3 86.31 59.66 83.79 64.69 83.78 64.71 83.72 64.83 83.72 64.84 83.72 50.5 83.72 50.5 85.5 52.28 91.18 57.96 z").attr({
  class: 'cls-5',
  parent: 'sity',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_n');
group_f.attr({
  'parent': 'sity',
  'name': 'group_f'
});
var rsrGroups = [sity, group_a, group_b, group_c, group_d, group_e, group_f];
sity.push();
group_a.push();
group_b.push(path_g, path_h);
group_c.push(path_i, path_j);
group_d.push();
group_e.push(path_k, path_l);
group_f.push(path_m, path_n);
