var rsr = Raphael('jc', '145.47', '102.25');
var group_a = rsr.set();
group_a.attr({
  'class': 'cls-2',
  'name': 'group_a'
});
var sity = rsr.set();
sity.attr({
  'id': 'sity',
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'sity'
});
var group_b = rsr.set();
group_b.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_b'
});
var group_c = rsr.set();
group_c.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_c'
});
var group_d = rsr.set();
group_d.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_d'
});
var group_e = rsr.set();
var path_el = rsr.path("M80.75,30.51l0,0-5.56-3.21L80.75,24l0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_el');
var path_em = rsr.path("M75.33,33.64l0,0L69.72,30.4l5.61-3.24,0,0,5.57,3.21ZM70.09,30.4l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_em');
var path_en = rsr.path("M69.9,36.77l0,0-5.57-3.21L69.9,30.3l0,0,5.56,3.22Zm-5.24-3.23,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_en');
var path_eo = rsr.path("M64.48,39.91l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.22Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_eo');
var path_ep = rsr.path("M59.05,43l0,0L53.44,39.8l5.61-3.24.05,0,5.56,3.21ZM53.82,39.8l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ep');
var path_eq = rsr.path("M53.63,46.17l-.05,0L48,42.93l5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_eq');
var path_er = rsr.path("M48.2,49.3l0,0-5.57-3.21,5.61-3.24,0,0,5.57,3.21ZM43,46.06l5.23,3,5.24-3L48.2,43Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_er');
var path_es = rsr.path("M42.78,52.43l-.05,0-5.56-3.22L42.78,46l0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_es');
var path_et = rsr.path("M37.36,55.57l0,0-5.56-3.21,5.61-3.24,0,0L43,52.33Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_et');
var path_eu = rsr.path("M31.93,58.7l-.05,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_eu');
var path_ev = rsr.path("M26.51,61.83l-.05,0L20.9,58.59l5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ev');
var path_ew = rsr.path("M21.08,65l0,0-5.57-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ew');
var path_ex = rsr.path("M15.66,68.09l-.05,0-5.56-3.22,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ex');
var path_ey = rsr.path("M10.23,71.22l0,0L4.62,68l5.61-3.23,0,0L15.84,68ZM5,68l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ey');
var path_ez = rsr.path("M4.81,74.36l0,0L-.8,71.12l5.61-3.24.05,0,5.56,3.22ZM-.43,71.12l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ez');
var path_fa = rsr.path("M-.62,77.49l0,0-5.57-3.21L-.62,71l.05,0L5,74.25Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fa');
group_e.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_e'
});
var group_f = rsr.set();
var path_fb = rsr.path("M75.37,27.42l-.05,0-5.56-3.21,5.61-3.24,0,0L81,24.18Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fb');
var path_fc = rsr.path("M69.94,30.55l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fc');
var path_fd = rsr.path("M64.52,33.68l0,0-5.56-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fd');
var path_fe = rsr.path("M59.1,36.81l-.05,0-5.57-3.22,5.62-3.23,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fe');
var path_ff = rsr.path("M53.67,40l-.05,0-5.56-3.21,5.61-3.24,0,0,5.56,3.22Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ff');
var path_fg = rsr.path("M48.25,43.08l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21ZM43,39.84l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fg');
var path_fh = rsr.path("M42.82,46.21l0,0L37.21,43l5.61-3.24,0,0L48.43,43ZM37.58,43l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fh');
var path_fi = rsr.path("M37.4,49.34l0,0L31.79,46.1l5.61-3.24,0,0L43,46.1ZM32.16,46.1l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fi');
var path_fj = rsr.path("M32,52.47l0,0-5.57-3.22L32,46,32,46l5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fj');
var path_fk = rsr.path("M26.55,55.6l-.05,0-5.56-3.21,5.61-3.24.05,0,5.56,3.22Zm-5.24-3.23,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fk');
var path_fl = rsr.path("M21.12,58.74l0,0L15.51,55.5l5.61-3.24.05,0,5.56,3.21ZM15.89,55.5l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fl');
var path_fm = rsr.path("M15.7,61.87l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fm');
var path_fn = rsr.path("M10.28,65l0,0L4.66,61.76l5.62-3.24,0,0,5.57,3.21ZM5,61.76l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fn');
var path_fo = rsr.path("M4.85,68.13l0,0L-.76,64.89l5.61-3.24.05,0,5.56,3.21ZM-.39,64.89l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fo');
var path_fp = rsr.path("M-.57,71.26l-.05,0L-6.18,68l5.61-3.23,0,0L5,68ZM-5.81,68l5.24,3,5.23-3L-.57,65Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fp');
group_f.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_f'
});
var group_g = rsr.set();
var path_fq = rsr.path("M70,24.33l0,0-5.56-3.21L70,17.85l5.61,3.24Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fq');
var path_fr = rsr.path("M64.56,27.46l0,0L59,24.22,64.56,21l0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fr');
var path_fs = rsr.path("M59.14,30.59l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21ZM53.9,27.35l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fs');
var path_ft = rsr.path("M53.71,33.72l0,0L48.1,30.48l5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ft');
var path_fu = rsr.path("M48.29,36.85l0,0-5.56-3.22,5.61-3.23,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fu');
var path_fv = rsr.path("M42.86,40l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.22Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fv');
var path_fw = rsr.path("M37.44,43.12l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21ZM32.2,39.88l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fw');
var path_fx = rsr.path("M32,46.25l-.05,0L26.4,43,32,39.77l0,0L37.63,43ZM26.78,43,32,46l5.23-3L32,40Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fx');
var path_fy = rsr.path("M26.59,49.38l-.05,0L21,46.14l5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fy');
var path_fz = rsr.path("M21.17,52.51l-.05,0-5.56-3.22L21.17,46l0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_fz');
var path_ga = rsr.path("M15.74,55.65l-.05,0-5.56-3.21,5.61-3.24,0,0,5.56,3.22ZM10.5,52.41l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ga');
var path_gb = rsr.path("M10.32,58.78l-.05,0L4.71,55.54l5.61-3.24,0,0,5.57,3.21ZM5.08,55.54l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gb');
var path_gc = rsr.path("M4.89,61.91l0,0L-.72,58.67l5.61-3.24.05,0,5.56,3.21ZM-.35,58.67l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gc');
var path_gd = rsr.path("M-.53,65l0,0L-6.14,61.8l5.61-3.24.05,0L5.08,61.8ZM-5.77,61.8l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gd');
group_g.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_g'
});
var group_h = rsr.set();
var path_ge = rsr.path("M64.6,21.23l0,0L59,18l5.61-3.24L70.21,18ZM59.37,18l5.23,3,5.24-3L64.6,15Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ge');
var path_gf = rsr.path("M59.18,24.37l0,0-5.56-3.21,5.61-3.24,5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gf');
var path_gg = rsr.path("M53.75,27.5l0,0-5.57-3.21L53.75,21l0,0,5.57,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gg');
var path_gh = rsr.path("M48.33,30.63l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gh');
var path_gi = rsr.path("M42.91,33.76l0,0-5.57-3.22,5.62-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gi');
var path_gj = rsr.path("M37.48,36.89l0,0-5.56-3.22,5.61-3.23.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gj');
var path_gk = rsr.path("M32.06,40,32,40l-5.56-3.21,5.61-3.24,0,0,5.57,3.22Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gk');
var path_gl = rsr.path("M26.63,43.16l0,0L21,39.92l5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gl');
var path_gm = rsr.path("M21.21,46.29l-.05,0L15.6,43.05l5.61-3.24,0,0,5.57,3.21ZM16,43.05l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gm');
var path_gn = rsr.path("M15.78,49.42l0,0-5.57-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gn');
var path_go = rsr.path("M10.36,52.55l0,0L4.75,49.31l5.61-3.24.05,0L16,49.31ZM5.12,49.31l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_go');
var path_gp = rsr.path("M4.93,55.69l0,0L-.68,52.45l5.61-3.24.05,0,5.57,3.22ZM-.3,52.45l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gp');
var path_gq = rsr.path("M-.49,58.82l-.05,0L-6.1,55.58l5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gq');
group_h.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_h'
});
var group_i = rsr.set();
var path_gr = rsr.path("M59.22,18.14l0,0L53.61,14.9l5.61-3.24,5.61,3.24ZM54,14.9l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gr');
var path_gs = rsr.path("M53.8,21.27l0,0L48.19,18,53.8,14.8,59.41,18ZM48.56,18l5.24,3L59,18,53.8,15Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gs');
var path_gt = rsr.path("M48.37,24.41l0,0-5.56-3.21,5.61-3.24L54,21.17Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gt');
var path_gu = rsr.path("M43,27.54l-.05,0L37.34,24.3,43,21.06l0,0,5.57,3.21ZM37.71,24.3l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gu');
var path_gv = rsr.path("M37.52,30.67l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gv');
var path_gw = rsr.path("M32.1,33.8l-.05,0-5.56-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gw');
var path_gx = rsr.path("M26.67,36.93l0,0-5.57-3.22,5.61-3.23,0,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gx');
var path_gy = rsr.path("M21.25,40.07l-.05,0-5.56-3.21,5.61-3.24.05,0,5.56,3.22ZM16,36.83l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gy');
var path_gz = rsr.path("M15.83,43.2l-.05,0L10.21,40l5.62-3.24,0,0L21.44,40ZM10.59,40l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_gz');
var path_ha = rsr.path("M10.4,46.33l-.05,0L4.79,43.09l5.61-3.24,0,0L16,43.09ZM5.16,43.09l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ha');
var path_hb = rsr.path("M5,49.46l-.05,0L-.63,46.22,5,43l0,0,5.57,3.21ZM-.26,46.22l5.24,3,5.23-3L5,43.2Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hb');
var path_hc = rsr.path("M-.45,52.59l0,0-5.57-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hc');
group_i.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_i'
});
var group_j = rsr.set();
var path_hd = rsr.path("M53.84,15.05l-5.61-3.24,5.61-3.24,5.61,3.24ZM48.6,11.81l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hd');
var path_he = rsr.path("M48.41,18.18l0,0L42.8,14.94l5.61-3.24L54,14.94Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_he');
var path_hf = rsr.path("M43,21.31l-.05,0-5.56-3.21L43,14.84l5.61,3.24Zm-5.24-3.23,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hf');
var path_hg = rsr.path("M37.56,24.45l0,0L32,21.21,37.56,18l5.62,3.24Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hg');
var path_hh = rsr.path("M32.14,27.58l0,0-5.56-3.21,5.61-3.24,0,0,5.56,3.21ZM26.9,24.34l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hh');
var path_hi = rsr.path("M26.72,30.71l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hi');
var path_hj = rsr.path("M21.29,33.84l-.05,0L15.68,30.6l5.61-3.24.05,0L26.9,30.6ZM16.05,30.6l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hj');
var path_hk = rsr.path("M15.87,37l0,0-5.56-3.22,5.61-3.23,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hk');
var path_hl = rsr.path("M10.44,40.11l0,0L4.83,36.87l5.61-3.24.05,0,5.56,3.22ZM5.2,36.87l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hl');
var path_hm = rsr.path("M5,43.24l0,0L-.59,40,5,36.76l0,0L10.63,40ZM-.22,40,5,43l5.24-3L5,37Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hm');
var path_hn = rsr.path("M-.41,46.37l0,0L-6,43.13l5.61-3.24,0,0L5.2,43.13Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hn');
group_j.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_j'
});
var group_k = rsr.set();
var path_ho = rsr.path("M48.46,12,42.84,8.72l5.62-3.24,5.61,3.24ZM43.22,8.72l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ho');
var path_hp = rsr.path("M43,15.09l-5.61-3.24L43,8.61l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3L43,8.83Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hp');
var path_hq = rsr.path("M37.61,18.22l0,0L32,15l5.61-3.24L43.22,15ZM32.37,15l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hq');
var path_hr = rsr.path("M32.18,21.35l0,0-5.57-3.21,5.61-3.24,5.61,3.24Zm-5.24-3.23,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hr');
var path_hs = rsr.path("M26.76,24.49l-.05,0-5.56-3.21L26.76,18l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hs');
var path_ht = rsr.path("M21.33,27.62l0,0-5.57-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ht');
var path_hu = rsr.path("M15.91,30.75l-.05,0L10.3,27.51l5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hu');
var path_hv = rsr.path("M10.48,33.88l0,0L4.87,30.64l5.61-3.24,0,0,5.56,3.21ZM5.25,30.64l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hv');
var path_hw = rsr.path("M5.06,37l0,0L-.55,33.77l5.61-3.24.05,0,5.56,3.21ZM-.18,33.77l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hw');
var path_hx = rsr.path("M-.36,40.15l0,0L-6,36.91l5.62-3.24,0,0,5.57,3.22ZM-5.6,36.91l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hx');
group_k.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_k'
});
var group_l = rsr.set();
var path_hy = rsr.path("M43.07,8.87,37.46,5.63l5.61-3.24,5.61,3.24ZM37.83,5.63l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hy');
var path_hz = rsr.path("M37.65,12,32,8.76l5.61-3.24,5.61,3.24ZM32.41,8.76l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_hz');
var path_ia = rsr.path("M32.22,15.13l-5.61-3.24,5.61-3.24,5.61,3.24ZM27,11.89l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ia');
var path_ib = rsr.path("M26.8,18.26l-.05,0L21.19,15l5.61-3.24L32.41,15ZM21.56,15l5.24,3L32,15,26.8,12Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ib');
var path_ic = rsr.path("M21.37,21.39l0,0-5.57-3.21,5.61-3.24L27,18.16Zm-5.23-3.23,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ic');
var path_id = rsr.path("M16,24.53l0,0-5.56-3.21L16,18.05l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_id');
var path_ie = rsr.path("M10.53,27.66l0,0L4.92,24.42l5.61-3.24,0,0,5.57,3.21ZM5.29,24.42l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ie');
var path_if = rsr.path("M5.1,30.79l0,0L-.51,27.55,5.1,24.31l.05,0,5.56,3.21ZM-.14,27.55l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_if');
var path_ig = rsr.path("M-.32,33.92l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ig');
group_l.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_l'
});
var group_m = rsr.set();
var path_ih = rsr.path("M37.69,5.78,32.08,2.54,37.69-.7,43.3,2.54ZM32.45,2.54l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ih');
var path_ii = rsr.path("M32.27,8.91,26.65,5.67l5.62-3.24,5.61,3.24ZM27,5.67l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ii');
var path_ij = rsr.path("M26.84,12,21.23,8.8l5.61-3.24L32.45,8.8ZM21.6,8.8l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ij');
var path_ik = rsr.path("M21.42,15.17l-5.61-3.24,5.61-3.24L27,11.93Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ik');
var path_il = rsr.path("M16,18.3l0,0-5.57-3.22L16,11.82l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3L16,12Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_il');
var path_im = rsr.path("M10.57,21.43l-.05,0L5,18.2,10.57,15l5.61,3.24ZM5.33,18.2l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_im');
var path_in = rsr.path("M5.14,24.57l0,0L-.47,21.33l5.61-3.24.05,0,5.56,3.22ZM-.1,21.33l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_in');
var path_io = rsr.path("M-.28,27.7l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_io');
group_m.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_m'
});
var group_n = rsr.set();
var path_ip = rsr.path("M32.31,2.68,26.7-.56,32.31-3.8,37.92-.56ZM27.07-.56l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ip');
var path_iq = rsr.path("M26.88,5.82,21.27,2.58,26.88-.66l5.61,3.24ZM21.64,2.58l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iq');
var path_ir = rsr.path("M21.46,9,15.85,5.71l5.61-3.24,5.61,3.24ZM16.22,5.71l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ir');
var path_is = rsr.path("M16,12.08,10.42,8.84,16,5.6l5.61,3.24ZM10.8,8.84l5.23,3,5.24-3L16,5.82Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_is');
var path_it = rsr.path("M10.61,15.21,5,12l5.61-3.24L16.22,12ZM5.37,12l5.24,3,5.24-3L10.61,9Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_it');
var path_iu = rsr.path("M5.18,18.34l0,0L-.43,15.1l5.61-3.24L10.8,15.1ZM0,15.1l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iu');
var path_iv = rsr.path("M-.24,21.47l0,0-5.56-3.22L-.24,15l5.61,3.23Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iv');
group_n.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_n'
});
var group_o = rsr.set();
var path_iw = rsr.path("M21.5,2.72,15.89-.52,21.5-3.76,27.11-.52ZM16.26-.52l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iw');
var path_ix = rsr.path("M16.08,5.86,10.46,2.62,16.08-.62l5.61,3.24ZM10.84,2.62l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ix');
var path_iy = rsr.path("M10.65,9,5,5.75l5.61-3.24,5.61,3.24ZM5.41,5.75l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iy');
var path_iz = rsr.path("M5.23,12.12-.38,8.88,5.23,5.64l5.61,3.24ZM0,8.88l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_iz');
var path_ja = rsr.path("M-.2,15.25-5.81,12-.2,8.77,5.41,12ZM-5.44,12-.2,15,5,12-.2,9Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ja');
group_o.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_o'
});
var group_p = rsr.set();
var path_jb = rsr.path("M10.69,2.76,5.08-.48l5.61-3.24L16.3-.48ZM5.45-.48l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jb');
var path_jc = rsr.path("M5.27,5.9-.34,2.66,5.27-.58l5.61,3.24ZM0,2.66l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jc');
var path_jd = rsr.path("M-.16,9-5.77,5.79-.16,2.55,5.45,5.79ZM-5.39,5.79l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jd');
var path_je = rsr.path("M-5.58,12.16l-5.61-3.24,5.61-3.24L0,8.92Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_je');
group_p.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_p'
});
var group_q = rsr.set();
var path_jf = rsr.path("M-.11,2.8-5.73-.44-.11-3.68,5.5-.44ZM-5.35-.44l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jf');
var path_jg = rsr.path("M-5.54,5.93-11.15,2.7-5.54-.54.07,2.7ZM-10.78,2.7l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-4',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jg');
group_q.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_q'
});
var group_r = rsr.set();
group_r.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_r'
});
var group_s = rsr.set();
var path_jh = rsr.path("M80.78,30.68l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jh');
var path_ji = rsr.path("M75.36,33.81l0,0-5.56-3.22,5.61-3.24,0,0L81,30.57Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ji');
var path_jj = rsr.path("M69.93,37l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.22ZM64.7,33.71l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jj');
var path_jk = rsr.path("M64.51,40.08l-.05,0L58.9,36.84l5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jk');
var path_jl = rsr.path("M59.09,43.21l-.05,0L53.47,40l5.62-3.24,0,0L64.7,40ZM53.85,40l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jl');
var path_jm = rsr.path("M53.66,46.34l0,0L48.05,43.1l5.61-3.24.05,0,5.56,3.21ZM48.42,43.1l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jm');
var path_jn = rsr.path("M48.24,49.47l-.05,0-5.56-3.22L48.24,43l0,0,5.57,3.21ZM43,46.23l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jn');
var path_jo = rsr.path("M42.81,52.6l0,0L37.2,49.36l5.61-3.23,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jo');
var path_jp = rsr.path("M37.39,55.74l0,0L31.78,52.5l5.61-3.24,0,0L43,52.5ZM32.15,52.5l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jp');
var path_jq = rsr.path("M32,58.87l0,0-5.57-3.21L32,52.39l0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3L32,52.6Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jq');
var path_jr = rsr.path("M26.54,62l-.05,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21ZM21.3,58.76l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jr');
var path_js = rsr.path("M21.11,65.13l0,0L15.5,61.89l5.61-3.24.05,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_js');
var path_jt = rsr.path("M15.69,68.26l0,0L10.08,65l5.61-3.24.05,0L21.3,65ZM10.45,65l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jt');
var path_ju = rsr.path("M10.27,71.39l0,0L4.65,68.16l5.62-3.24,0,0,5.57,3.22ZM5,68.16l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ju');
var path_jv = rsr.path("M4.84,74.53l0,0L-.77,71.29l5.61-3.24,0,0,5.56,3.22ZM-.4,71.29l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jv');
var path_jw = rsr.path("M-.58,77.66l-.05,0-5.56-3.21,5.61-3.24,0,0L5,74.42Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jw');
group_s.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_s'
});
var group_t = rsr.set();
var path_jx = rsr.path("M75.4,27.59l-.05,0-5.56-3.21,5.61-3.24,0,0L81,24.35Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jx');
var path_jy = rsr.path("M70,30.72l0,0-5.57-3.21L70,24.24l0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jy');
var path_jz = rsr.path("M64.55,33.85l0,0-5.56-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_jz');
var path_ka = rsr.path("M59.13,37l-.05,0-5.56-3.21,5.61-3.24,0,0,5.57,3.22Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ka');
var path_kb = rsr.path("M53.7,40.12l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kb');
var path_kc = rsr.path("M48.28,43.25l-.05,0L42.67,40l5.61-3.24,0,0L53.89,40ZM43,40l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kc');
var path_kd = rsr.path("M42.85,46.38l0,0-5.57-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kd');
var path_ke = rsr.path("M37.43,49.51l0,0-5.56-3.22L37.43,43l0,0L43,46.27Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ke');
var path_kf = rsr.path("M32,52.64l0,0L26.39,49.4,32,46.17l0,0,5.57,3.21ZM26.77,49.4l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kf');
var path_kg = rsr.path("M26.58,55.78l0,0L21,52.54l5.61-3.24.05,0,5.56,3.22Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kg');
var path_kh = rsr.path("M21.16,58.91l-.05,0-5.57-3.21,5.62-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kh');
var path_ki = rsr.path("M15.73,62l-.05,0L10.12,58.8l5.61-3.24,0,0,5.56,3.21ZM10.49,58.8l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ki');
var path_kj = rsr.path("M10.31,65.17l-.05,0L4.7,61.93l5.61-3.24,0,0,5.57,3.21ZM5.07,61.93l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kj');
var path_kk = rsr.path("M4.88,68.3l0,0L-.73,65.06l5.61-3.24,0,0,5.56,3.21ZM-.36,65.06l5.24,3,5.24-3L4.88,62Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kk');
var path_kl = rsr.path("M-.54,71.43l0,0L-6.15,68.2-.54,65l0,0L5.07,68.2ZM-5.78,68.2l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kl');
group_t.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_t'
});
var group_u = rsr.set();
var path_km = rsr.path("M70,24.5l0,0-5.56-3.21L70,18l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_km');
var path_kn = rsr.path("M64.59,27.63l0,0L59,24.39l5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kn');
var path_ko = rsr.path("M59.17,30.76l-.05,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ko');
var path_kp = rsr.path("M53.74,33.89l0,0-5.57-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kp');
var path_kq = rsr.path("M48.32,37l0,0-5.56-3.21,5.61-3.24,0,0,5.56,3.22Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kq');
var path_kr = rsr.path("M42.9,40.16l0,0-5.57-3.21,5.62-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kr');
var path_ks = rsr.path("M37.47,43.29l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ks');
var path_kt = rsr.path("M32.05,46.42l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kt');
var path_ku = rsr.path("M26.62,49.55l0,0L21,46.31l5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ku');
var path_kv = rsr.path("M21.2,52.68l-.05,0-5.56-3.22,5.61-3.23,0,0,5.57,3.21ZM16,49.44l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kv');
var path_kw = rsr.path("M15.77,55.82l0,0-5.57-3.21,5.61-3.24.05,0,5.56,3.22Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kw');
var path_kx = rsr.path("M10.35,59l0,0L4.74,55.71l5.61-3.24,0,0L16,55.71ZM5.11,55.71l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kx');
var path_ky = rsr.path("M4.92,62.08l0,0L-.69,58.84,4.92,55.6l0,0,5.56,3.21ZM-.31,58.84l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ky');
var path_kz = rsr.path("M-.5,65.21l-.05,0L-6.11,62-.5,58.73l0,0L5.11,62ZM-5.74,62-.5,65l5.24-3L-.5,59Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_kz');
group_u.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_u'
});
var group_v = rsr.set();
var path_la = rsr.path("M64.63,21.41l0,0L59,18.17l5.61-3.24,5.62,3.24ZM59.4,18.17l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_la');
var path_lb = rsr.path("M59.21,24.54l-.05,0L53.6,21.3l5.61-3.24,5.61,3.24ZM54,21.3l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lb');
var path_lc = rsr.path("M53.79,27.67l0,0-5.57-3.21,5.62-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lc');
var path_ld = rsr.path("M48.36,30.8l0,0-5.56-3.21,5.61-3.24,0,0L54,27.56Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ld');
var path_le = rsr.path("M42.94,33.93l0,0-5.56-3.22,5.61-3.24,0,0,5.57,3.21ZM37.7,30.69l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_le');
var path_lf = rsr.path("M37.51,37.06l0,0L31.9,33.83l5.61-3.24.05,0,5.56,3.22Zm-5.24-3.23,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lf');
var path_lg = rsr.path("M32.09,40.2l-.05,0L26.48,37l5.61-3.24,0,0L37.7,37ZM26.85,37l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lg');
var path_lh = rsr.path("M26.66,43.33l0,0-5.57-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lh');
var path_li = rsr.path("M21.24,46.46l0,0-5.56-3.21L21.24,40l.05,0,5.56,3.21ZM16,43.22l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_li');
var path_lj = rsr.path("M15.81,49.59l0,0L10.2,46.35l5.61-3.24,0,0,5.57,3.21Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lj');
var path_lk = rsr.path("M10.39,52.72l-.05,0L4.78,49.48l5.61-3.24,0,0L16,49.48ZM5.15,49.48l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lk');
var path_ll = rsr.path("M5,55.86l0,0L-.65,52.62,5,49.38l0,0,5.57,3.22ZM-.27,52.62l5.24,3,5.23-3L5,49.59Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ll');
var path_lm = rsr.path("M-.46,59l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21ZM-5.7,55.75l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lm');
group_v.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_v'
});
var group_w = rsr.set();
var path_ln = rsr.path("M59.25,18.31l0,0-5.57-3.22,5.61-3.23,5.61,3.23ZM54,15.07l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ln');
var path_lo = rsr.path("M53.83,21.45l0,0-5.56-3.21L53.83,15l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lo');
var path_lp = rsr.path("M48.4,24.58l0,0-5.57-3.21L48.4,18.1l.05,0L54,21.34Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lp');
var path_lq = rsr.path("M43,27.71l0,0-5.56-3.21L43,21.23l.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lq');
var path_lr = rsr.path("M37.55,30.84l0,0L31.94,27.6l5.61-3.24.05,0,5.56,3.21ZM32.32,27.6l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lr');
var path_ls = rsr.path("M32.13,34l-.05,0-5.56-3.22,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ls');
var path_lt = rsr.path("M26.71,37.1l-.05,0-5.57-3.21,5.62-3.24,0,0,5.57,3.22Zm-5.24-3.23,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lt');
var path_lu = rsr.path("M21.28,40.24l-.05,0L15.67,37l5.61-3.24,0,0L26.89,37ZM16,37l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lu');
var path_lv = rsr.path("M15.86,43.37l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lv');
var path_lw = rsr.path("M10.43,46.5l0,0L4.82,43.26,10.43,40l.05,0L16,43.26ZM5.19,43.26l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lw');
var path_lx = rsr.path("M5,49.63l0,0L-.6,46.39,5,43.15l0,0,5.57,3.21ZM-.23,46.39l5.24,3,5.24-3L5,43.37Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lx');
var path_ly = rsr.path("M-.42,52.76l0,0L-6,49.52l5.61-3.23,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ly');
group_w.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_w'
});
var group_x = rsr.set();
var path_lz = rsr.path("M53.87,15.22,48.26,12l5.61-3.24L59.48,12ZM48.63,12l5.24,3,5.24-3L53.87,9Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_lz');
var path_ma = rsr.path("M48.44,18.35l0,0-5.57-3.22,5.61-3.23,5.62,3.23Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ma');
var path_mb = rsr.path("M43,21.49l-.05,0-5.56-3.21L43,15l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mb');
var path_mc = rsr.path("M37.6,24.62l-.05,0L32,21.38l5.62-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mc');
var path_md = rsr.path("M32.17,27.75l-.05,0-5.56-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_md');
var path_me = rsr.path("M26.75,30.88l-.05,0-5.56-3.21,5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_me');
var path_mf = rsr.path("M21.32,34l0,0-5.57-3.22,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mf');
var path_mg = rsr.path("M15.9,37.14l-.05,0L10.29,33.9l5.61-3.23,0,0,5.57,3.21ZM10.66,33.9l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mg');
var path_mh = rsr.path("M10.47,40.28l0,0L4.86,37l5.61-3.24,0,0L16.08,37ZM5.24,37l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mh');
var path_mi = rsr.path("M5.05,43.41l0,0L-.56,40.17l5.61-3.24,0,0,5.56,3.21ZM-.19,40.17l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mi');
var path_mj = rsr.path("M-.38,46.54l0,0L-6,43.3l5.61-3.24,0,0L5.24,43.3ZM-5.61,43.3l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mj');
group_x.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_x'
});
var group_y = rsr.set();
var path_mk = rsr.path("M48.49,12.13,42.88,8.89l5.61-3.24L54.1,8.89ZM43.25,8.89l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mk');
var path_ml = rsr.path("M43.06,15.26,37.45,12l5.61-3.24L48.67,12ZM37.82,12l5.24,3,5.24-3L43.06,9Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ml');
var path_mm = rsr.path("M37.64,18.39l0,0L32,15.15l5.61-3.24,5.61,3.24ZM32.4,15.15l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mm');
var path_mn = rsr.path("M32.21,21.53l0,0L26.6,18.29l5.61-3.24,5.61,3.24ZM27,18.29l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mn');
var path_mo = rsr.path("M26.79,24.66l-.05,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mo');
var path_mp = rsr.path("M21.36,27.79l0,0-5.57-3.21,5.61-3.24.05,0L27,24.55Zm-5.23-3.24,5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mp');
var path_mq = rsr.path("M15.94,30.92l0,0-5.56-3.21,5.61-3.24.05,0,5.56,3.21ZM10.7,27.68l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mq');
var path_mr = rsr.path("M10.52,34.05l0,0L4.9,30.81l5.62-3.24,0,0,5.57,3.21ZM5.28,30.81l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mr');
var path_ms = rsr.path("M5.09,37.18l0,0L-.52,34l5.61-3.24,0,0L10.7,34ZM-.15,34l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ms');
var path_mt = rsr.path("M-.33,40.32l0,0-5.56-3.21,5.61-3.24,0,0,5.57,3.22Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mt');
group_y.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_y'
});
var group_z = rsr.set();
var path_mu = rsr.path("M43.1,9,37.49,5.8,43.1,2.56,48.71,5.8ZM37.87,5.8l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mu');
var path_mv = rsr.path("M37.68,12.17,32.07,8.93l5.61-3.24,5.61,3.24ZM32.44,8.93l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mv');
var path_mw = rsr.path("M32.25,15.3l-5.61-3.24,5.61-3.24,5.62,3.24ZM27,12.06l5.23,3,5.24-3L32.25,9Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mw');
var path_mx = rsr.path("M26.83,18.43l0,0-5.56-3.22L26.83,12l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mx');
var path_my = rsr.path("M21.41,21.57l-.05,0L15.8,18.33l5.61-3.24L27,18.33Zm-5.24-3.24,5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_my');
var path_mz = rsr.path("M16,24.7l-.05,0-5.56-3.21L16,18.22l.05,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_mz');
var path_na = rsr.path("M10.56,27.83l-.05,0L5,24.59l5.61-3.24,0,0,5.57,3.21ZM5.32,24.59l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_na');
var path_nb = rsr.path("M5.13,31l0,0L-.48,27.72l5.61-3.24,0,0,5.56,3.21ZM-.11,27.72l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nb');
var path_nc = rsr.path("M-.29,34.09l-.05,0L-5.9,30.85l5.61-3.24,0,0,5.57,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nc');
group_z.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_z'
});
var group_aa = rsr.set();
var path_nd = rsr.path("M37.72,6,32.11,2.71,37.72-.53l5.61,3.24ZM32.48,2.71l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nd');
var path_ne = rsr.path("M32.3,9.08,26.69,5.84,32.3,2.6l5.61,3.24ZM27.06,5.84l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ne');
var path_nf = rsr.path("M26.87,12.21,21.26,9l5.61-3.24L32.48,9ZM21.63,9l5.24,3,5.24-3L26.87,6Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nf');
var path_ng = rsr.path("M21.45,15.34,15.84,12.1l5.61-3.24,5.61,3.24ZM16.21,12.1l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ng');
var path_nh = rsr.path("M16,18.47l0,0-5.57-3.22L16,12l5.61,3.24Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nh');
var path_ni = rsr.path("M10.6,21.61l0,0L5,18.37l5.61-3.24,5.61,3.24ZM5.36,18.37l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ni');
var path_nj = rsr.path("M5.17,24.74l0,0L-.44,21.5l5.61-3.24,0,0,5.56,3.21ZM-.06,21.5l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nj');
var path_nk = rsr.path("M-.25,27.87l0,0-5.56-3.21,5.61-3.24,0,0,5.56,3.21Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nk');
group_aa.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_aa'
});
var group_ab = rsr.set();
var path_nl = rsr.path("M32.34,2.85,26.73-.39l5.61-3.23L38-.39ZM27.1-.39l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nl');
var path_nm = rsr.path("M26.91,6,21.3,2.75,26.91-.49l5.61,3.24ZM21.68,2.75l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nm');
var path_nn = rsr.path("M21.49,9.12,15.88,5.88l5.61-3.24L27.1,5.88ZM16.25,5.88l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nn');
var path_no = rsr.path("M16.06,12.25,10.45,9l5.61-3.24L21.68,9ZM10.83,9l5.23,3L21.3,9,16.06,6Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_no');
var path_np = rsr.path("M10.64,15.38,5,12.14,10.64,8.9l5.61,3.24ZM5.4,12.14l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_np');
var path_nq = rsr.path("M5.22,18.51l0,0L-.39,15.27,5.22,12l5.61,3.24ZM0,15.27l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nq');
var path_nr = rsr.path("M-.21,21.65l-.05,0-5.56-3.21,5.61-3.24L5.4,18.41Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nr');
group_ab.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_ab'
});
var group_ac = rsr.set();
var path_ns = rsr.path("M21.53,2.89,15.92-.35l5.61-3.23L27.14-.35ZM16.29-.35l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ns');
var path_nt = rsr.path("M16.11,6,10.5,2.79,16.11-.45l5.61,3.24ZM10.87,2.79l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nt');
var path_nu = rsr.path("M10.68,9.16,5.07,5.92l5.61-3.24,5.61,3.24ZM5.44,5.92l5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nu');
var path_nv = rsr.path("M5.26,12.29-.35,9.05,5.26,5.81l5.61,3.24ZM0,9.05l5.24,3,5.24-3L5.26,6Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nv');
var path_nw = rsr.path("M-.17,15.42l-5.61-3.24L-.17,8.94l5.61,3.24ZM-5.4,12.18l5.23,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nw');
var path_nx = rsr.path("M-5.59,18.55l0,0-5.56-3.22,5.61-3.24L0,15.31Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nx');
group_ac.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_ac'
});
var group_ad = rsr.set();
var path_ny = rsr.path("M10.72,2.93,5.11-.31l5.61-3.23L16.33-.31ZM5.49-.31l5.23,3L16-.31l-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ny');
var path_nz = rsr.path("M5.3,6.07-.31,2.83,5.3-.41l5.61,3.24ZM.06,2.83l5.24,3,5.24-3L5.3-.2Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_nz');
var path_oa = rsr.path("M-.13,9.2-5.74,6-.13,2.72,5.49,6ZM-5.36,6-.13,9,5.11,6l-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oa');
var path_ob = rsr.path("M-5.55,12.33l-5.61-3.24,5.61-3.24L.06,9.09Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ob');
group_ad.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_ad'
});
var group_ae = rsr.set();
var path_oc = rsr.path("M-.08,3-5.69-.27-.08-3.5,5.53-.27ZM-5.32-.27l5.24,3,5.23-3-5.23-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oc');
var path_od = rsr.path("M-5.51,6.11l-5.61-3.24L-5.51-.37.1,2.87Zm-5.24-3.24,5.24,3,5.24-3-5.24-3Z").attr({
  class: 'cls-5',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_od');
group_ae.attr({
  'class': 'cls-3',
  'parent': 'group_a',
  'name': 'group_ae'
});
var group_af = rsr.set();
var path_oe = rsr.path("M86.3,35.56l-62.74,30-6.73,3.15c-12,5.64-11.68,18.9.66,23.85l2,.8a60.44,60.44,0,0,0,46.79-1.33l43.33-20.28L139.76,57Z").attr({
  class: 'cls-6',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oe');
group_af.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_af'
});
var group_ag = rsr.set();
var path_of = rsr.path("M116.38,49.64c0,.63-1,1.17-2.36,1.21s-2.4-.44-2.42-1.07,1-1.18,2.35-1.21S116.36,49,116.38,49.64Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_of');
var path_og = rsr.path("M110.21,51.35c0,.63-1,1.17-2.36,1.21s-2.4-.44-2.42-1.07,1-1.17,2.36-1.21S110.19,50.72,110.21,51.35Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_og');
var path_oh = rsr.path("M92.79,41.76c0,.63-1,1.17-2.35,1.21S88,42.53,88,41.9s1-1.17,2.35-1.21S92.77,41.13,92.79,41.76Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oh');
var path_oi = rsr.path("M78.16,35.8c0,.63-1,1.17-2.36,1.21s-2.4-.44-2.42-1.07,1-1.17,2.36-1.21S78.14,35.17,78.16,35.8Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oi');
var path_oj = rsr.path("M 58.42 39.06 63.29 40.99 69.83 37.88 64.97 35.96 58.42 39.06 z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oj');
var path_ok = rsr.path("M 88.48 31.46 88.68 38.36 71.61 31.52 71.4 24.61 88.48 31.46 z").attr({
  class: 'cls-51',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ok');
var path_ol = rsr.path("M 107.09 38.92 107.29 45.83 125.06 52.95 124.86 46.04 107.09 38.92 z").attr({
  class: 'cls-52',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ol');
group_ag.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ag'
});
var group_ah = rsr.set();
var path_om = rsr.path("M 139.51 48.54 115.22 60.19 71.65 33.07 139.44 46.15 139.51 48.54 z").attr({
  class: 'cls-7',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_om');
var path_on = rsr.path("M 139.44 46.15 125.06 52.95 71.61 31.52 85.99 24.72 139.44 46.15 z").attr({
  class: 'cls-8',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_on');
var path_oo = rsr.path("M112.41,62.11,66,84.56a60.44,60.44,0,0,1-46.79,1.32l-2-.79c-12.34-5-12.7-18.21-.66-23.85l39.31-18.4Z").attr({
  class: 'cls-7',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oo');
var path_op = rsr.path("M109.3,61.85,66,82.13a60.44,60.44,0,0,1-46.79,1.33l-2-.8c-12.34-5-12.7-18.21-.66-23.85L55.85,40.42Z").attr({
  class: 'cls-8',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_op');
var path_oq = rsr.path("M27.93,70.83l19.56,8.66L60.9,73.56c2.88-1.27,2.88-4.4,0-5.61l-9.52-4a9.37,9.37,0,0,0-7,0Z").attr({
  class: 'cls-11',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oq');
var path_or = rsr.path("M50.11,73.88C48.85,70.46,42.52,68,35,68.22s-13.73,3-14.79,6.53H20l0,1.16c.12,4,7,7,15.39,6.8S50.48,79,50.36,75l0-1.16Z").attr({
  class: 'cls-41',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_or');
var path_os = rsr.path("M50.32,73.87c.12,4-6.58,7.45-15,7.69S20.09,78.76,20,74.76s6.58-7.45,15-7.7S50.21,69.87,50.32,73.87Z").attr({
  class: 'cls-42',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_os');
var path_ot = rsr.path("M42.41,67.78l-5.64,3,4.71,5.5,8.6-3.59C49.27,70.52,46.38,68.73,42.41,67.78Z").attr({
  class: 'cls-11',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ot');
var path_ou = rsr.path("M125.09,54.08c.13,4.17-21.45,13.52-41.12,14.09S48.13,61.56,47.86,52.12,69.19,34,71.64,32.65C87.84,24,124.82,44.63,125.09,54.08Z").attr({
  class: 'cls-41',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ou');
var path_ov = rsr.path("M125.06,53c.12,4.18-21.46,13.52-41.13,14.09S48.1,60.43,47.82,51,69.15,32.82,71.61,31.52C87.81,22.9,124.78,43.51,125.06,53Z").attr({
  class: 'cls-43',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ov');
var path_ow = rsr.path("M 125.62 32.83 72.16 11.38 71.96 4.47 125.42 25.93 125.62 32.83 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ow');
var path_ox = rsr.path("M 126.88 37.03 125.62 32.83 72.16 11.38 73.43 15.58 126.88 37.03 z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ox');
var path_oy = rsr.path("M 125.21 33.64 72.5 12.56 72.62 12.38 125.34 33.46 125.21 33.64 z").attr({
  class: 'cls-47',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oy');
var path_oz = rsr.path("M 125.24 34.69 72.53 13.61 72.65 13.43 125.37 34.51 125.24 34.69 z").attr({
  class: 'cls-47',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_oz');
var path_pa = rsr.path("M 125.27 35.73 72.56 14.65 72.68 14.48 125.4 35.56 125.27 35.73 z").attr({
  class: 'cls-47',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pa');
var path_pb = rsr.path("M 125.06 52.95 71.61 31.52 71.4 24.61 124.86 46.04 125.06 52.95 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pb');
var path_pc = rsr.path("M 124.86 46.04 71.4 24.61 74.73 23.02 128.18 44.45 124.86 46.04 z").attr({
  class: 'cls-48',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pc');
var path_pd = rsr.path("M 110.36 37.32 107.09 38.92 124.86 46.04 125.99 45.51 128.18 44.45 110.36 37.32 z").attr({
  class: 'cls-49',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pd');
var path_pe = rsr.path("M 125.42 25.93 71.96 4.47 74.15 3.34 127.61 24.79 125.42 25.93 z").attr({
  class: 'cls-48',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pe');
var path_pf = rsr.path("M 128.38 51.35 125.06 52.95 124.86 46.04 128.18 44.45 128.38 51.35 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pf');
var path_pg = rsr.path("M 92.54 30.18 90.35 31.22 89.98 18.54 91.01 22.65 92.34 23.18 92.54 30.18 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pg');
var path_ph = rsr.path("M 128.06 40.13 126.66 36.97 125.62 32.83 125.42 25.93 127.61 24.79 128.06 40.13 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ph');
var path_pi = rsr.path("M 89.24 18.25 89.98 18.54 90.35 31.22 89.61 30.93 89.24 18.25 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pi');
var path_pj = rsr.path("M 110.36 37.32 108.17 38.37 107.8 25.69 108.83 29.79 110.16 30.32 110.36 37.32 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pj');
var path_pk = rsr.path("M 107.06 25.39 107.8 25.69 108.17 38.37 107.43 38.07 107.06 25.39 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pk');
var path_pl = rsr.path("M 128.18 44.45 125.99 45.51 125.62 32.83 126.64 36.94 128.06 40.13 128.18 44.45 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pl');
var path_pm = rsr.path("M 124.88 32.53 125.62 32.83 125.99 45.51 125.25 45.21 124.88 32.53 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pm');
var path_pn = rsr.path("M 75.47 23.29 73.27 24.36 72.9 11.67 73.93 15.78 75.26 16.31 75.47 23.29 z").attr({
  class: 'cls-50',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pn');
var path_po = rsr.path("M 72.16 11.38 72.9 11.67 73.27 24.36 72.53 24.06 72.16 11.38 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_po');
var path_pp = rsr.path("M 89.04 11.36 72.7 4.79 72.9 11.67 89.24 18.25 89.04 11.36 z").attr({
  class: 'cls-51',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pp');
var path_pq = rsr.path("M 106.86 18.5 89.78 11.66 89.98 18.54 107.06 25.39 106.86 18.5 z").attr({
  class: 'cls-45',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pq');
var path_pr = rsr.path("M 124.68 25.65 107.6 18.8 107.8 25.69 124.88 32.53 124.68 25.65 z").attr({
  class: 'cls-52',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pr');
var path_ps = rsr.path("M 75.47 23.29 73.27 24.36 72.53 24.06 71.4 24.61 88.48 31.46 89.61 30.93 89.56 28.96 75.47 23.29 z").attr({
  class: 'cls-61',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ps');
var path_pt = rsr.path("M36.21,51.67a2.89,2.89,0,0,1-1.71.52,3.72,3.72,0,0,1-.91-.08l-2.86-8.34L18.92,49.33l-1.2-1.75L29.33,42.1a3,3,0,0,1,1.91-.42,2.29,2.29,0,0,1,1.76,1Z").attr({
  class: 'cls-68',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pt');
var path_pu = rsr.path("M29,43.34,18.29,48.4l.63.93,11.81-5.56,2.86,8.34a3.72,3.72,0,0,0,.91.08A3.46,3.46,0,0,0,35.57,52l-2.89-8.07c-.27-.73-.35-.94-1-1.23S30.11,42.87,29,43.34Z").attr({
  class: 'cls-69',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pu');
var path_pv = rsr.path("M18.67,49l.25.37,11.81-5.56,2.86,8.34a3.17,3.17,0,0,0,.56.07l-2.51-7c-.53-1.54-.59-1.87-.91-1.81A26.09,26.09,0,0,0,28,44.57Z").attr({
  class: 'cls-70',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pv');
var path_pw = rsr.path("M17.73,47.58a.87.87,0,0,1,.46,0,1.48,1.48,0,0,1,.87.61,1.24,1.24,0,0,1,.19.43.61.61,0,0,1-.33.74.83.83,0,0,1-.54,0,1.42,1.42,0,0,1-.78-.58,1.16,1.16,0,0,1-.21-.51A.57.57,0,0,1,17.73,47.58Z").attr({
  class: 'cls-71',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pw');
var path_px = rsr.path("M17.91,47.85a.49.49,0,0,1,.32,0,1.08,1.08,0,0,1,.61.42,1,1,0,0,1,.13.3.41.41,0,0,1-.23.51.52.52,0,0,1-.37,0,1,1,0,0,1-.55-.41,1,1,0,0,1-.15-.35A.42.42,0,0,1,17.91,47.85Z").attr({
  class: 'cls-72',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_px');
group_ah.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ah'
});
var group_ai = rsr.set();
group_ai.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ai'
});
var group_aj = rsr.set();
var path_py = rsr.path("M85.62,28.12l.12-.14,0,0a2.2,2.2,0,0,0,.2-.23.47.47,0,0,0,0-.26A11.59,11.59,0,0,1,85.85,26c.05-.4,1-.19,1-.19a2.64,2.64,0,0,1-.09,1.11c-.18.69-.23.76-.19,1,0,.09,0,.15,0,.24a.61.61,0,0,1-.07.17,1.48,1.48,0,0,1-.11.29c0,.1,0,.09-.27.19s-.24,0-.24,0h-.09c-.1,0-.07-.06-.07-.06l.06-.42,0-.06c-.09.07-.28.21-.36.18S85.55,28.21,85.62,28.12Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_py');
var path_pz = rsr.path("M86.82,25.79a2.64,2.64,0,0,1-.09,1.11c-.18.69-.23.76-.19,1a.68.68,0,0,1,0,.19.74.74,0,0,1-.16-.38,6.1,6.1,0,0,1,.14-.94,2.11,2.11,0,0,0-.08-1.06A2.08,2.08,0,0,1,86.82,25.79Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_pz');
var path_qa = rsr.path("M79.53,26l.31-.16,0-.05a2.52,2.52,0,0,0,.21-.25c.12-.16.22-.34.34-.51a9.15,9.15,0,0,0,.49-.93.44.44,0,0,1,.52.65,6.25,6.25,0,0,1-.45.44,3.63,3.63,0,0,0-.28.27.79.79,0,0,0-.17.2c0,.07,0,.13-.08.19a.31.31,0,0,0,0,.13v0h0v0a.41.41,0,0,1,0,.21c0,.07-.07.13-.14.15a1.61,1.61,0,0,1-.29.34c-.08.08,0,.09-.31.08s-.2-.12-.2-.12l-.08,0c-.08,0,0-.08,0-.08l.22-.36a.14.14,0,0,1,0-.06s0,0,0,0-.31.09-.36,0S79.42,26.09,79.53,26Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qa');
var path_qb = rsr.path("M80.51,25.58c0-.07.11-.13.16-.19s.12-.15.17-.22.38-.44.17-.58a.69.69,0,0,1-.13-.11s-.08-.08-.07-.12a1.8,1.8,0,0,0,0-.19.57.57,0,0,0,.24.14c.09,0,.27,0,.33.05a.21.21,0,0,1,.06.16.36.36,0,0,1-.06.25,6.25,6.25,0,0,1-.45.44,3.63,3.63,0,0,0-.28.27.79.79,0,0,0-.17.2c0,.07,0,.13-.08.19a.31.31,0,0,0,0,.13.21.21,0,0,1,0,.15s0-.15,0-.2a.7.7,0,0,1,.05-.25A.83.83,0,0,1,80.51,25.58Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qb');
var path_qc = rsr.path("M80.72,33c.27.8,1.93,1.57,3.71,1.73s3-.37,2.73-1.16S85.23,32,83.45,31.88,80.45,32.24,80.72,33Z").attr({
  class: 'cls-11',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qc');
group_aj.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_aj'
});
var group_ak = rsr.set();
var path_qd = rsr.path("M83.54,31.69l0,.1a.24.24,0,0,1,0,.18,1,1,0,0,0,0,.26l-.59.2h-.26l-.09.07a1.71,1.71,0,0,1-.27.14,1.85,1.85,0,0,1-.4.12,3.31,3.31,0,0,1-.55,0h-.11a.8.8,0,0,1-.32-.16c-.08-.1,0-.22.07-.3A2.41,2.41,0,0,1,82,31.9l.21-.42.46.08a1.11,1.11,0,0,0,.36,0,1.43,1.43,0,0,1,.41,0h0A.41.41,0,0,1,83.54,31.69Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qd');
var path_qe = rsr.path("M81.13,32.28c-.1.08,0,.17.11.2a.47.47,0,0,0,.17,0,2.57,2.57,0,0,0,.4,0l.31-.07a2,2,0,0,0,.26-.09c.08,0,.09-.13.14-.19s.12-.1.16-.16,0-.12,0-.13a1.34,1.34,0,0,1-.46-.29l-.2.38s-.1,0-.12,0l-.28.1a2,2,0,0,0-.33.15Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qe');
var path_qf = rsr.path("M84.81,34.06a1.63,1.63,0,0,1,.11-.23l.24-.41a1.52,1.52,0,0,0,.09-.51.06.06,0,0,1,0,0c0-.06.27-.08.36-.08H86a1.49,1.49,0,0,1,.42.08c.19.07.16.18.16.32a1.46,1.46,0,0,1,0,.22,1.64,1.64,0,0,1-.16.28h0a.75.75,0,0,1,0,.2.65.65,0,0,1-.11.29,1,1,0,0,1-.16.2,1.2,1.2,0,0,1-.48.34l-.13,0h-.21a.64.64,0,0,1-.32-.1c-.08-.07-.07-.18-.08-.27A.87.87,0,0,1,84.81,34.06Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qf');
var path_qg = rsr.path("M85.71,33a.67.67,0,0,0-.24,0c-.07,0-.09,0-.12.08a.55.55,0,0,0-.08.31,1.21,1.21,0,0,1-.08.25c0,.11-.13.23-.18.34a.68.68,0,0,0-.07.44l0,0a.45.45,0,0,0,.24.06h.14s.13,0,.15,0a2.35,2.35,0,0,0,.33-.3,1.8,1.8,0,0,0,.21-.35,1.08,1.08,0,0,0,.1-.35.48.48,0,0,0,0-.29.23.23,0,0,0-.16-.12h-.11Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qg');
var path_qh = rsr.path("M82.94,27.32a2.78,2.78,0,0,1,.54,1.47c0,.64,0,.7.13,1a6.55,6.55,0,0,1-.11,1.91,1.56,1.56,0,0,1-.93,0l-.41-.15v-.85c0-.29,0-.58,0-.87a.94.94,0,0,0-.16-.56A3.22,3.22,0,0,1,81.5,28a5.12,5.12,0,0,1,0-1.72Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qh');
var path_qi = rsr.path("M81.51,26.27l.31.22a3.55,3.55,0,0,0,.63.59c.16.1.35.17.5.27l0,0a2,2,0,0,1,.15.25c0,.19-.11.37-.13.56a1.51,1.51,0,0,0,0,.3c0,.14,0,.27,0,.41a2.47,2.47,0,0,0,0,.38,1.33,1.33,0,0,0,0,.19c0,.07,0,.09-.08.12a1.2,1.2,0,0,1-.5,0l.08,0,.53.2c.13.05.09.28.1.38a3.88,3.88,0,0,1,0,.48,8.36,8.36,0,0,1-.23,1l0,.12a1.12,1.12,0,0,1-.4-.07l-.41-.15v-.85c0-.29,0-.58,0-.87a.94.94,0,0,0-.16-.56A3.22,3.22,0,0,1,81.5,28,5.12,5.12,0,0,1,81.51,26.27Z").attr({
  class: 'cls-15',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qi');
var path_qj = rsr.path("M86.55,33a6,6,0,0,0-.2-2.28c-.33-.49-.5-.66-.5-1a8.21,8.21,0,0,0-.66-1.65,1.44,1.44,0,0,0-.09-1.16,1.77,1.77,0,0,0-.53-.65,2.53,2.53,0,0,1-1.83,0c-1.27-.35-1.24-.49-1.24-.49a1.85,1.85,0,0,0,.37,1.6,2.51,2.51,0,0,0,1.17.71,9.25,9.25,0,0,0,1.16,2,3.27,3.27,0,0,1,.67.78,2.72,2.72,0,0,1,.17,1c0,.38.09.77.13,1.15A1.16,1.16,0,0,0,86.55,33Z").attr({
  class: 'cls-16',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qj');
var path_qk = rsr.path("M84.47,26.74a1.83,1.83,0,0,0-.31-.35,1.73,1.73,0,0,0,.54-.19s.08.18.4.72a1.44,1.44,0,0,1,.09,1.16,8.21,8.21,0,0,1,.66,1.65c0,.34.17.51.5,1a6,6,0,0,1,.2,2.28,1.36,1.36,0,0,1-.33.15,1.53,1.53,0,0,1,.06-.45,5.58,5.58,0,0,0,0-.7,2.36,2.36,0,0,0-.41-1.32c-.14-.19-.22-.4-.34-.59s-.13-.24-.19-.37a12.18,12.18,0,0,0-.44-1.33,2.53,2.53,0,0,1-.19-.45A3.62,3.62,0,0,0,84.47,26.74Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qk');
var path_ql = rsr.path("M82.35,21.51a1,1,0,0,0-.72.1c-.29.22-.31.37-.33.81s0,.9,0,.9l-.51.8s-.07.32.5.51S83,21.6,82.35,21.51Z").attr({
  class: 'cls-17',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ql');
var path_qm = rsr.path("M81.34,22a.7.7,0,0,1,.29-.41,1,1,0,0,1,.72-.1c.1,0,.15.11.16.26a3.6,3.6,0,0,1-.57,0,.94.94,0,0,0-.52.19Z").attr({
  class: 'cls-18',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qm');
var path_qn = rsr.path("M81.06,23.91a7,7,0,0,0,.39,2.1s.75.9,3.33.29c0,0-.27-1.06-.13-1.26s1-1,1.08-1.49.2-.88-.42-1.28c-.35-.22-.65-.41-.94-.56a3.83,3.83,0,0,0-.73-.29,1.66,1.66,0,0,0-.77,0,2.07,2.07,0,0,0-1,.44A2.55,2.55,0,0,0,81.06,23.91Z").attr({
  class: 'cls-19',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qn');
var path_qo = rsr.path("M82.87,21.41a1.66,1.66,0,0,1,.77,0,3.83,3.83,0,0,1,.73.29c.29.15.59.34.94.56.62.4.46.8.42,1.28s-.94,1.28-1.08,1.49.13,1.26.13,1.26c-.28.07-.53.11-.77.15a4.05,4.05,0,0,1,0-.59,3.83,3.83,0,0,1,.34-1.62,2.15,2.15,0,0,1,.57-.6.8.8,0,0,0,.21-.35,1.85,1.85,0,0,0,.12-.4.32.32,0,0,0,0-.17.35.35,0,0,0-.13-.14,2.74,2.74,0,0,0-.89-.58,5,5,0,0,0-1.12-.2,7.37,7.37,0,0,0-1.15,0A2.43,2.43,0,0,1,82.87,21.41Z").attr({
  class: 'cls-18',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qo');
var path_qp = rsr.path("M84.82,22.53s-.33.89-.14,1.29a11.4,11.4,0,0,0,1.06,1.62c.11.11,0,.71,0,.71a2.24,2.24,0,0,0,.78,0l.39-.11a3.62,3.62,0,0,0-.23-1,8.3,8.3,0,0,1-.49-1.58C86.17,23.07,85.94,22,84.82,22.53Z").attr({
  class: 'cls-17',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qp');
var path_qq = rsr.path("M85.1,22.53l-.16-.05c1-.36,1.24.61,1.28,1a8.3,8.3,0,0,0,.49,1.58,3.62,3.62,0,0,1,.23,1l-.39.11h0a.13.13,0,0,1,0-.06,4.76,4.76,0,0,0-.42-1.41,2.72,2.72,0,0,1-.3-.94C85.73,23.29,85.69,22.78,85.1,22.53Z").attr({
  class: 'cls-18',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qq');
var path_qr = rsr.path("M82.42,22.24c-.08.29.35.5.68.33l.52-.29a2.54,2.54,0,0,0,.75-.57,3.83,3.83,0,0,0-.73-.29,1.66,1.66,0,0,0-.77,0,3.87,3.87,0,0,0-.44.82Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qr');
var path_qs = rsr.path("M83.55,22.21a1,1,0,0,0,0-.41c0-.13,0-.25,0-.38s0,0,0,0l.1,0a3.83,3.83,0,0,1,.73.29,2.54,2.54,0,0,1-.75.57l-.15.09C83.5,22.31,83.54,22.24,83.55,22.21Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qs');
var path_qt = rsr.path("M84.26,21.64h0s.08,0,.12.05l.22.11c.08,0,0,.16-.07.2a.86.86,0,0,1-.21.22,2.33,2.33,0,0,1-.52.28,4.13,4.13,0,0,1-.42.14s-.37.13-.41.09v-.06s0-.06,0-.09a.52.52,0,0,1,0-.17c0-.05,0,0,.1-.05a1.4,1.4,0,0,0,.4-.11,4.56,4.56,0,0,0,.44-.24,1.08,1.08,0,0,0,.27-.3A.23.23,0,0,1,84.26,21.64Z").attr({
  class: 'cls-21',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qt');
var path_qu = rsr.path("M82.18,21.73a.16.16,0,0,1,.11-.19.26.26,0,0,1,.19,0c.07,0,.08.07.06.12a.45.45,0,0,0,0,.39s0,.06,0,.09a.1.1,0,0,1,0,.05,1,1,0,0,0-.21.34.29.29,0,0,1-.11-.11,1.71,1.71,0,0,0-.13-.23s0-.05,0-.08a.27.27,0,0,1,0-.09.42.42,0,0,1,0-.16A.33.33,0,0,0,82.18,21.73Z").attr({
  class: 'cls-21',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qu');
var path_qv = rsr.path("M84.14,21.24l0,.38a2.53,2.53,0,0,1-.85.45c-.52.15-.68.06-.68.06l-.06-.83S84,20.79,84.14,21.24Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qv');
var path_qw = rsr.path("M84.14,21.24l0,.38a2.37,2.37,0,0,1-.59.35,1,1,0,0,0,0-.17c0-.13,0-.25,0-.38a1,1,0,0,1,.11-.36C83.88,21,84.09,21.08,84.14,21.24Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qw');
var path_qx = rsr.path("M82.14,21.69c0,.25.37.32.79.25a1.62,1.62,0,0,0,.59-.23.85.85,0,0,0,.17-.1l0,0,0,0,0,0c1.1-.88.43-1,.22-1.36a.31.31,0,0,0-.07-.09L83.9,20a2.16,2.16,0,0,0-1.36-.42.78.78,0,0,0-.56.34,2.26,2.26,0,0,0-.14.26s0,0,0,0A6.63,6.63,0,0,0,82.14,21.69Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qx');
var path_qy = rsr.path("M81.83,20.23h0a.85.85,0,0,0,.23,0,3.42,3.42,0,0,0,.64,0,.65.65,0,0,1,.31,0,.41.41,0,0,1,.19.12.56.56,0,0,0,.05.08,1.08,1.08,0,0,1,.13.32,1.86,1.86,0,0,0,0,.33,1.17,1.17,0,0,0,.09.24.52.52,0,0,1,0,.37.85.85,0,0,0,.17-.1l0,0,0,0,0,0c1.1-.88.43-1,.22-1.36a.31.31,0,0,0-.07-.09L83.9,20a1.29,1.29,0,0,0-.63-.23,2.26,2.26,0,0,0-.45,0,1.92,1.92,0,0,0-.59.1l-.25.06a2.26,2.26,0,0,0-.14.26S81.83,20.22,81.83,20.23Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qy');
var path_qz = rsr.path("M87,25.87A.41.41,0,0,0,87,26c0,.16-.26.21-.44.23a2.48,2.48,0,0,1-.77-.05c-.09,0,0-.12,0-.18v-.05c0-.06-.1-.12-.1-.18s0-.05,0-.07.13-.06.13-.07v.08c0,.18.74.06.88,0s.23-.06.16-.18c.1,0,.18.05.18.14S87,25.81,87,25.87Z").attr({
  class: 'cls-17',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_qz');
group_ak.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ak'
});
var group_al = rsr.set();
var path_ra = rsr.path("M83.64,21.05c.08,0,0,0,.07-.09a2.34,2.34,0,0,1,.09-.24.52.52,0,0,1,.12-.18.24.24,0,0,1,.29,0,.28.28,0,0,1,.05.23.54.54,0,0,1-.1.16.73.73,0,0,0-.21.44s0,.08,0,.09l.18-.11a1.22,1.22,0,0,0,.49-.6,1.48,1.48,0,0,0,.09-.55,1.05,1.05,0,0,0-.42-.8,1.67,1.67,0,0,0-1.15-.27,2.12,2.12,0,0,0-1.05.48.71.71,0,0,0-.26.56.59.59,0,0,1,.42-.11c.72,0,1.14.1,1.18.43,0,.11,0,.22,0,.34s0,.11,0,.15S83.57,21,83.64,21.05Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ra');
var path_rb = rsr.path("M82.9,19.32a2.2,2.2,0,0,0-.44.12l-.12,0-.1,0a2,2,0,0,1,.91-.37,1.67,1.67,0,0,1,1.15.27,1.05,1.05,0,0,1,.42.8,1.48,1.48,0,0,1-.09.55,1.17,1.17,0,0,1-.37.5l0-.08a2.73,2.73,0,0,0,.1-.41,1.83,1.83,0,0,0,0-.7c-.07-.42-.53-.69-1.06-.77A1.23,1.23,0,0,0,82.9,19.32Z").attr({
  class: 'cls-26',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rb');
group_al.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_al'
});
var group_am = rsr.set();
var path_rc = rsr.path("M83,18.93c-.78.09-1.35.54-1.26,1s.8.74,1.59.64,1.35-.54,1.26-1S83.76,18.83,83,18.93Z").attr({
  class: 'cls-27',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rc');
var path_rd = rsr.path("M83.3,20.41c-1.27,0-1.45-.21-1.58-.62a5.28,5.28,0,0,0-.59.32.26.26,0,0,0-.07.26v0a.65.65,0,0,0,.38.27l.41.11a3,3,0,0,0,1.74-.25l.5-.23A2.28,2.28,0,0,1,83.3,20.41Z").attr({
  class: 'cls-28',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rd');
var path_re = rsr.path("M84.56,19.57c-.09-.46-.8-.74-1.59-.64a1.36,1.36,0,0,0-.41.09,1.47,1.47,0,0,1,1.37,1.1,2.46,2.46,0,0,1,0,.26C84.37,20.19,84.62,19.88,84.56,19.57Z").attr({
  class: 'cls-28',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_re');
group_am.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_am'
});
var group_an = rsr.set();
group_an.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_an'
});
var group_ao = rsr.set();
var path_rf = rsr.path("M102.25,34.54l.12-.13a.05.05,0,0,1,0,0,2.2,2.2,0,0,0,.2-.23.47.47,0,0,0,0-.26,13.75,13.75,0,0,1-.17-1.47c0-.4,1-.19,1-.19a2.63,2.63,0,0,1-.09,1.11c-.18.69-.22.76-.19,1,0,.09,0,.15,0,.24a.61.61,0,0,1-.07.17,1.79,1.79,0,0,1-.11.29c0,.1,0,.09-.27.19s-.24,0-.24,0h-.09c-.09,0-.07-.06-.07-.06l.06-.42,0-.06c-.09.07-.28.21-.35.18S102.17,34.64,102.25,34.54Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rf');
var path_rg = rsr.path("M103.44,32.22a2.63,2.63,0,0,1-.09,1.11c-.18.69-.22.76-.19,1a.68.68,0,0,1,0,.19.78.78,0,0,1-.16-.38,5,5,0,0,1,.15-.94,2.24,2.24,0,0,0-.09-1.06A2.08,2.08,0,0,1,103.44,32.22Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rg');
var path_rh = rsr.path("M96.15,32.45a2.94,2.94,0,0,1,.31-.16l0,0A2.52,2.52,0,0,0,96.7,32a5.65,5.65,0,0,0,.34-.51,9.15,9.15,0,0,0,.49-.93.44.44,0,0,1,.53.65c-.13.15-.31.29-.46.44a3.57,3.57,0,0,0-.28.27.79.79,0,0,0-.17.2c0,.07-.05.13-.08.19a.61.61,0,0,0,0,.13v0h0v0a.45.45,0,0,1,0,.2c0,.08-.08.13-.15.16a1.93,1.93,0,0,1-.29.34c-.08.08,0,.09-.31.08s-.19-.12-.19-.12l-.08,0c-.08,0,0-.08,0-.08l.22-.36a.08.08,0,0,1,0-.07h0c-.12,0-.32.09-.37,0S96,32.51,96.15,32.45Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rh');
var path_ri = rsr.path("M97.13,32l.16-.2c0-.07.13-.14.18-.22s.37-.43.16-.57a.69.69,0,0,1-.13-.11s-.08-.08-.07-.13a.59.59,0,0,0,0-.19.75.75,0,0,0,.24.15c.09,0,.27,0,.33.05a.26.26,0,0,1,.07.16.51.51,0,0,1-.06.25c-.13.15-.31.29-.46.44a3.57,3.57,0,0,0-.28.27.79.79,0,0,0-.17.2c0,.07-.05.13-.08.19a.61.61,0,0,0,0,.13.21.21,0,0,1,0,.15s0-.15,0-.2a.7.7,0,0,1,0-.25A.83.83,0,0,1,97.13,32Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ri');
var path_rj = rsr.path("M97.34,39.46c.27.8,1.93,1.57,3.71,1.72s3-.36,2.73-1.15-1.93-1.57-3.71-1.73S97.07,38.67,97.34,39.46Z").attr({
  class: 'cls-11',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rj');
group_ao.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ao'
});
var group_ap = rsr.set();
var path_rk = rsr.path("M100.17,38.12l0,.1a.23.23,0,0,1,0,.18.93.93,0,0,0,0,.25l-.59.21h-.26l-.09.07a1.71,1.71,0,0,1-.27.14,1.56,1.56,0,0,1-.4.12,3.31,3.31,0,0,1-.55,0H98a.71.71,0,0,1-.32-.17c-.08-.09,0-.21.07-.29a2.5,2.5,0,0,1,.91-.43l.22-.41s.42.07.45.08a1.14,1.14,0,0,0,.37,0,1.35,1.35,0,0,1,.4,0h.05A.41.41,0,0,0,100.17,38.12Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rk');
var path_rl = rsr.path("M97.76,38.71c-.1.08,0,.17.1.2a.5.5,0,0,0,.17,0l.4,0,.31-.07c.09,0,.18-.05.26-.09s.1-.13.14-.19.12-.1.16-.16,0-.12,0-.13a1.64,1.64,0,0,1-.46-.29l-.2.37s-.1,0-.11,0l-.29.09-.33.16Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rl');
var path_rm = rsr.path("M101.43,40.49a1.63,1.63,0,0,1,.11-.23l.24-.41a1.52,1.52,0,0,0,.09-.51s0,0,0,0,.28-.08.36-.08h.35a1.42,1.42,0,0,1,.41.08c.19.07.17.18.16.32a1.66,1.66,0,0,1,0,.22,1.17,1.17,0,0,1-.16.28h0a.75.75,0,0,1,0,.2.77.77,0,0,1-.1.29,1.63,1.63,0,0,1-.17.2,1,1,0,0,1-.48.33.27.27,0,0,1-.12,0h-.22a.8.8,0,0,1-.32-.1c-.08-.07-.06-.18-.08-.27A.85.85,0,0,1,101.43,40.49Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rm');
var path_rn = rsr.path("M102.33,39.43a.61.61,0,0,0-.24,0c-.07,0-.09,0-.12.08a.55.55,0,0,0-.08.31,2.33,2.33,0,0,1-.07.25c0,.11-.14.23-.19.34a.68.68,0,0,0-.07.44l0,0a.38.38,0,0,0,.24.07H102s.13,0,.14,0a1.9,1.9,0,0,0,.33-.3,2.56,2.56,0,0,0,.22-.35,1.06,1.06,0,0,0,.09-.35.51.51,0,0,0,0-.3.22.22,0,0,0-.16-.11h-.1Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rn');
var path_ro = rsr.path("M99.56,33.75a2.74,2.74,0,0,1,.54,1.46c0,.64,0,.71.13,1a6.6,6.6,0,0,1-.1,1.91,1.59,1.59,0,0,1-.94,0L98.78,38v-.85c0-.29,0-.58,0-.87a1,1,0,0,0-.17-.56,3.37,3.37,0,0,1-.52-1.26,5,5,0,0,1,0-1.73Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ro');
var path_rp = rsr.path("M98.14,32.69l.3.23a3.55,3.55,0,0,0,.63.59c.16.1.35.16.5.27l0,0a2,2,0,0,1,.15.25c0,.19-.11.36-.13.56a1.51,1.51,0,0,0,0,.3c0,.14,0,.27.05.41s0,.25,0,.38a1.33,1.33,0,0,0,0,.19c0,.07,0,.09-.08.11a1,1,0,0,1-.49,0l.07,0,.53.19c.13.06.1.29.1.39a2.59,2.59,0,0,1,0,.48,8.36,8.36,0,0,1-.23,1,.37.37,0,0,1,0,.11.93.93,0,0,1-.4-.06L98.78,38v-.85c0-.29,0-.58,0-.87a1,1,0,0,0-.17-.56,3.37,3.37,0,0,1-.52-1.26A5,5,0,0,1,98.14,32.69Z").attr({
  class: 'cls-15',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rp');
var path_rq = rsr.path("M103.18,39.44a6.05,6.05,0,0,0-.21-2.28c-.33-.49-.5-.66-.5-1a8.21,8.21,0,0,0-.66-1.65,1.46,1.46,0,0,0-.09-1.17,1.78,1.78,0,0,0-.53-.64,2.6,2.6,0,0,1-1.83,0c-1.27-.35-1.23-.49-1.23-.49a1.82,1.82,0,0,0,.37,1.6,2.46,2.46,0,0,0,1.16.71,9,9,0,0,0,1.16,2,3.86,3.86,0,0,1,.68.79,3,3,0,0,1,.16,1c0,.38.09.77.13,1.15A1.17,1.17,0,0,0,103.18,39.44Z").attr({
  class: 'cls-16',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rq');
var path_rr = rsr.path("M101.09,33.17a1.83,1.83,0,0,0-.31-.35,1.62,1.62,0,0,0,.54-.2,6.92,6.92,0,0,0,.4.72,1.46,1.46,0,0,1,.09,1.17,8.21,8.21,0,0,1,.66,1.65c0,.34.17.51.5,1a6.05,6.05,0,0,1,.21,2.28,1.61,1.61,0,0,1-.34.15,1.64,1.64,0,0,1,.07-.46,5.39,5.39,0,0,0,0-.7,2.35,2.35,0,0,0-.41-1.31c-.13-.19-.22-.4-.33-.6s-.14-.24-.2-.36c-.19-.44-.2-.91-.43-1.33a2,2,0,0,1-.2-.45A3.39,3.39,0,0,0,101.09,33.17Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rr');
var path_rs = rsr.path("M99,27.93a1,1,0,0,0-.72.11c-.29.22-.31.37-.32.81s0,.9,0,.9l-.51.8s-.06.32.5.51S99.57,28,99,27.93Z").attr({
  class: 'cls-29',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rs');
var path_rt = rsr.path("M98,28.45a.7.7,0,0,1,.29-.41,1,1,0,0,1,.72-.11c.1,0,.15.12.17.27a3.7,3.7,0,0,1-.58,0,.94.94,0,0,0-.52.19Z").attr({
  class: 'cls-30',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rt');
var path_ru = rsr.path("M97.68,30.34a7,7,0,0,0,.39,2.1s.75.9,3.33.29c0,0-.26-1.06-.13-1.26s1-1,1.08-1.49.2-.88-.42-1.28c-.35-.22-.64-.41-.94-.56a4.3,4.3,0,0,0-.73-.3,1.81,1.81,0,0,0-.77,0,2.07,2.07,0,0,0-1,.44A2.58,2.58,0,0,0,97.68,30.34Z").attr({
  class: 'cls-31',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ru');
var path_rv = rsr.path("M99.49,27.84a1.81,1.81,0,0,1,.77,0,4.3,4.3,0,0,1,.73.3c.3.15.59.34.94.56.62.4.47.8.42,1.28s-.94,1.28-1.08,1.49.13,1.26.13,1.26c-.28.07-.53.11-.77.15,0,0,0-.55,0-.59a3.83,3.83,0,0,1,.34-1.62,2.51,2.51,0,0,1,.57-.61.72.72,0,0,0,.21-.34,2,2,0,0,0,.12-.4.28.28,0,0,0,0-.18.42.42,0,0,0-.13-.14,2.89,2.89,0,0,0-.89-.57,4.53,4.53,0,0,0-1.11-.2,7.54,7.54,0,0,0-1.16,0A2.34,2.34,0,0,1,99.49,27.84Z").attr({
  class: 'cls-30',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rv');
var path_rw = rsr.path("M101.45,29s-.34.89-.15,1.29a12.14,12.14,0,0,0,1.06,1.61c.11.11,0,.71,0,.71a2.08,2.08,0,0,0,.77,0l.39-.11a3.62,3.62,0,0,0-.23-1,8.91,8.91,0,0,1-.49-1.59C102.8,29.5,102.56,28.47,101.45,29Z").attr({
  class: 'cls-29',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rw');
var path_rx = rsr.path("M101.72,29l-.15-.05c1-.36,1.23.61,1.27,1a8.91,8.91,0,0,0,.49,1.59,3.62,3.62,0,0,1,.23,1l-.39.11h0s0,0,0-.06a4.49,4.49,0,0,0-.42-1.41,2.72,2.72,0,0,1-.3-.94C102.35,29.72,102.31,29.21,101.72,29Z").attr({
  class: 'cls-30',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rx');
var path_ry = rsr.path("M99.05,28.67c-.09.29.34.5.67.33l.52-.29a2.54,2.54,0,0,0,.75-.57,4.3,4.3,0,0,0-.73-.3,1.81,1.81,0,0,0-.77,0,3.87,3.87,0,0,0-.44.82Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ry');
var path_rz = rsr.path("M100.17,28.64a1.17,1.17,0,0,0,0-.41,2.47,2.47,0,0,1,0-.38v0l.1,0a4.3,4.3,0,0,1,.73.3,2.54,2.54,0,0,1-.75.57l-.15.09Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_rz');
var path_sa = rsr.path("M100.88,28.07h0s.08,0,.12,0l.22.12c.08,0,0,.16-.06.2a1.14,1.14,0,0,1-.22.22,2.33,2.33,0,0,1-.52.28,4.13,4.13,0,0,1-.42.14s-.37.13-.41.09V29.1s0-.06,0-.1a.88.88,0,0,1,0-.16c0-.05,0,0,.1-.05a1.42,1.42,0,0,0,.4-.12,2.34,2.34,0,0,0,.44-.24,1,1,0,0,0,.28-.3A.12.12,0,0,1,100.88,28.07Z").attr({
  class: 'cls-32',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sa');
var path_sb = rsr.path("M98.8,28.16a.16.16,0,0,1,.11-.19.26.26,0,0,1,.19,0c.07,0,.08.06.06.12a.45.45,0,0,0,0,.39s0,.06,0,.09l0,.05A.85.85,0,0,0,99,29a.19.19,0,0,1-.11-.12,2.53,2.53,0,0,1-.13-.22.59.59,0,0,1,0-.08.27.27,0,0,1,0-.09.42.42,0,0,1,0-.16A.35.35,0,0,0,98.8,28.16Z").attr({
  class: 'cls-32',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sb');
var path_sc = rsr.path("M100.77,27.66l0,.39a2.53,2.53,0,0,1-.85.45c-.52.15-.67.06-.67.06l-.06-.83S100.6,27.22,100.77,27.66Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sc');
var path_sd = rsr.path("M100.77,27.66l0,.39a2.79,2.79,0,0,1-.59.35v-.17a2.47,2.47,0,0,1,0-.38.78.78,0,0,1,.1-.36C100.5,27.47,100.71,27.51,100.77,27.66Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sd');
var path_se = rsr.path("M98.77,28.11c0,.25.36.33.78.26a1.62,1.62,0,0,0,.59-.23l.18-.1,0,0,0,0,0,0c1.1-.88.44-1,.22-1.37l-.06-.08-.07-.07A2.1,2.1,0,0,0,99.16,26a.78.78,0,0,0-.56.34,1.3,1.3,0,0,0-.14.26.06.06,0,0,1,0,0A5.91,5.91,0,0,0,98.77,28.11Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_se');
var path_sf = rsr.path("M98.45,26.66h0a.85.85,0,0,0,.23,0,3.41,3.41,0,0,0,.64,0,.65.65,0,0,1,.31,0,.41.41,0,0,1,.19.12l0,.08a.9.9,0,0,1,.13.32,1.86,1.86,0,0,0,0,.33,1.44,1.44,0,0,0,.09.24.52.52,0,0,1,0,.37l.18-.1,0,0,0,0,0,0c1.1-.88.44-1,.22-1.37l-.06-.08-.07-.07a1.29,1.29,0,0,0-.63-.23,3,3,0,0,0-1,.08,2.06,2.06,0,0,1-.25.07,1.3,1.3,0,0,0-.14.26A.06.06,0,0,1,98.45,26.66Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sf');
var path_sg = rsr.path("M103.6,32.3a.31.31,0,0,1,0,.1c0,.17-.26.22-.44.24a2.21,2.21,0,0,1-.77-.06c-.08,0,0-.12,0-.17s0,0,0,0-.09-.12-.1-.19,0,0,0-.07l.14-.06v.08c0,.18.74.06.88,0s.23,0,.15-.17c.1,0,.18.05.18.13S103.6,32.23,103.6,32.3Z").attr({
  class: 'cls-29',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sg');
group_ap.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ap'
});
var group_aq = rsr.set();
var path_sh = rsr.path("M100.26,27.48c.08,0,.06,0,.07-.09l.09-.24a.52.52,0,0,1,.12-.18.24.24,0,0,1,.29,0,.28.28,0,0,1,0,.23.54.54,0,0,1-.1.16.7.7,0,0,0-.21.44s0,.08,0,.09l.18-.11a1.24,1.24,0,0,0,.49-.61,1.43,1.43,0,0,0,.09-.54,1,1,0,0,0-.42-.8,1.73,1.73,0,0,0-1.15-.28,2.23,2.23,0,0,0-1,.49.73.73,0,0,0-.25.55.6.6,0,0,1,.41-.1c.72,0,1.14.1,1.18.42,0,.12,0,.23,0,.35s0,.11,0,.15A.15.15,0,0,0,100.26,27.48Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sh');
var path_si = rsr.path("M99.52,25.75a2.2,2.2,0,0,0-.44.12l-.12,0-.1,0a2.12,2.12,0,0,1,.91-.38,1.73,1.73,0,0,1,1.15.28,1,1,0,0,1,.42.8,1.43,1.43,0,0,1-.09.54,1.26,1.26,0,0,1-.36.51.31.31,0,0,0,0-.08,2.37,2.37,0,0,0,.1-1.12c-.06-.41-.53-.68-1.06-.76A1.25,1.25,0,0,0,99.52,25.75Z").attr({
  class: 'cls-26',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_si');
group_aq.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_aq'
});
var group_ar = rsr.set();
var path_sj = rsr.path("M99.59,25.35c-.78.1-1.35.55-1.26,1s.8.74,1.59.64,1.35-.54,1.26-1S100.38,25.26,99.59,25.35Z").attr({
  class: 'cls-33',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sj');
var path_sk = rsr.path("M99.92,26.84c-1.27,0-1.45-.21-1.58-.63,0,0-.51.26-.59.33a.26.26,0,0,0-.07.26v0a.6.6,0,0,0,.38.26l.41.12a3,3,0,0,0,1.74-.25l.5-.23A2.28,2.28,0,0,1,99.92,26.84Z").attr({
  class: 'cls-34',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sk');
var path_sl = rsr.path("M101.18,26c-.09-.45-.8-.73-1.59-.64a2.71,2.71,0,0,0-.41.09,1.48,1.48,0,0,1,1.37,1.11,2.46,2.46,0,0,1,0,.26C101,26.62,101.24,26.31,101.18,26Z").attr({
  class: 'cls-34',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sl');
group_ar.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ar'
});
var group_as = rsr.set();
group_as.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_as'
});
var group_at = rsr.set();
var path_sm = rsr.path("M120.1,41.65l.12-.13a.05.05,0,0,1,0,0,2.2,2.2,0,0,0,.2-.23.58.58,0,0,0,.06-.26,11.58,11.58,0,0,1-.18-1.47c.05-.4,1-.19,1-.19a2.64,2.64,0,0,1-.09,1.11c-.18.69-.22.76-.19,1,0,.09,0,.15,0,.24a.61.61,0,0,1-.07.17,1.48,1.48,0,0,1-.11.29c0,.1,0,.09-.27.19s-.24,0-.24,0h-.09c-.09,0-.07-.06-.07-.06l.06-.42,0-.06c-.09.07-.28.21-.35.18S120,41.75,120.1,41.65Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sm');
var path_sn = rsr.path("M121.29,39.33a2.64,2.64,0,0,1-.09,1.11c-.18.69-.22.76-.19,1a.68.68,0,0,1,0,.19.74.74,0,0,1-.16-.38,5,5,0,0,1,.15-.94,2.24,2.24,0,0,0-.09-1.06A2.08,2.08,0,0,1,121.29,39.33Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sn');
var path_so = rsr.path("M114,39.56l.31-.16,0,0c.06-.08.14-.16.2-.25a5.65,5.65,0,0,0,.34-.51,9.15,9.15,0,0,0,.49-.93.44.44,0,0,1,.53.65c-.13.16-.31.29-.46.44l-.28.27a.79.79,0,0,0-.17.2c0,.07,0,.13-.08.19a.61.61,0,0,0,0,.13v0h0l0,0a.52.52,0,0,1,0,.21c0,.07-.08.13-.15.15a1.93,1.93,0,0,1-.29.34c-.08.08,0,.09-.31.08s-.19-.12-.19-.12l-.08,0c-.08,0,0-.08,0-.08l.23-.36s0,0,0-.06,0,0,0,0-.32.09-.37,0S113.89,39.63,114,39.56Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_so');
var path_sp = rsr.path("M115,39.12c0-.07.11-.13.16-.19s.13-.15.18-.22.37-.44.17-.58a.53.53,0,0,1-.14-.11s-.08-.08-.07-.12a.77.77,0,0,0,0-.19.72.72,0,0,0,.24.14c.09,0,.27,0,.33,0a.26.26,0,0,1,.07.16.51.51,0,0,1-.06.25c-.13.16-.31.29-.46.44l-.28.27a.79.79,0,0,0-.17.2c0,.07,0,.13-.08.19a.61.61,0,0,0,0,.13.17.17,0,0,1,0,.15s0-.15,0-.2a.7.7,0,0,1,.05-.25A.83.83,0,0,1,115,39.12Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sp');
var path_sq = rsr.path("M115.19,46.57c.27.8,1.93,1.57,3.71,1.73s3-.37,2.73-1.16-1.93-1.57-3.71-1.73S114.92,45.78,115.19,46.57Z").attr({
  class: 'cls-11',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sq');
group_at.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_at'
});
var group_au = rsr.set();
var path_sr = rsr.path("M118,45.23l0,.1a.23.23,0,0,1,0,.18,2.18,2.18,0,0,0,0,.26l-.59.2h-.26l-.09.07a1.71,1.71,0,0,1-.27.14,1.56,1.56,0,0,1-.4.12,3.27,3.27,0,0,1-.54,0h-.12a.71.71,0,0,1-.32-.17c-.08-.09,0-.21.07-.29a2.43,2.43,0,0,1,.92-.42l.21-.42.45.08a1.14,1.14,0,0,0,.37,0,1.35,1.35,0,0,1,.4,0h0A.41.41,0,0,0,118,45.23Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sr');
var path_ss = rsr.path("M115.61,45.82c-.1.08,0,.17.1.2a.52.52,0,0,0,.17,0,2.57,2.57,0,0,0,.4,0l.31-.07c.09,0,.18-.05.26-.09s.1-.13.14-.19.12-.1.16-.16,0-.12,0-.13a1.44,1.44,0,0,1-.46-.29l-.19.38-.12,0-.29.1a2.41,2.41,0,0,0-.33.15Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ss');
var path_st = rsr.path("M119.28,47.6a1.63,1.63,0,0,1,.11-.23l.24-.41a1.52,1.52,0,0,0,.09-.51.06.06,0,0,1,0,0c0-.07.28-.08.36-.08h.35a1.42,1.42,0,0,1,.41.08c.19.07.17.18.16.32a.78.78,0,0,1,0,.22,1.17,1.17,0,0,1-.16.28h0a1.5,1.5,0,0,1,0,.2,1,1,0,0,1-.11.29,1.06,1.06,0,0,1-.17.2,1,1,0,0,1-.48.33.27.27,0,0,1-.12,0h-.22a.67.67,0,0,1-.32-.1c-.08-.07-.06-.18-.08-.27A.85.85,0,0,1,119.28,47.6Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_st');
var path_su = rsr.path("M120.18,46.54a.61.61,0,0,0-.24,0c-.07,0-.09,0-.12.08a.55.55,0,0,0-.08.31,1.17,1.17,0,0,1-.07.25c0,.11-.14.23-.19.34a.68.68,0,0,0-.07.44l0,0a.38.38,0,0,0,.24.07h.15s.13,0,.14,0a1.9,1.9,0,0,0,.33-.3,2.56,2.56,0,0,0,.22-.35,1.06,1.06,0,0,0,.09-.35.48.48,0,0,0,0-.29.2.2,0,0,0-.16-.12h-.1Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_su');
var path_sv = rsr.path("M117.41,40.86a2.74,2.74,0,0,1,.54,1.47c0,.64,0,.7.13,1a6.6,6.6,0,0,1-.1,1.91,1.59,1.59,0,0,1-.94,0l-.41-.15c0-.28,0-.57,0-.85s0-.58,0-.87a1,1,0,0,0-.17-.56,3.37,3.37,0,0,1-.52-1.26,5,5,0,0,1,0-1.72Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sv');
var path_sw = rsr.path("M116,39.81l.3.22a3.93,3.93,0,0,0,.63.59c.16.1.35.17.5.27l0,0s.09.14.16.25-.12.37-.14.56a1,1,0,0,0,0,.3c0,.14,0,.27,0,.41s0,.25,0,.38,0,.13,0,.19,0,.09-.08.11a1,1,0,0,1-.49,0l.07,0,.53.2c.13,0,.1.28.1.38a2.59,2.59,0,0,1,0,.48,8.36,8.36,0,0,1-.23,1,.37.37,0,0,1,0,.11.93.93,0,0,1-.4-.06l-.41-.15c0-.28,0-.57,0-.85s0-.58,0-.87a1,1,0,0,0-.17-.56,3.37,3.37,0,0,1-.52-1.26A5,5,0,0,1,116,39.81Z").attr({
  class: 'cls-15',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sw');
var path_sx = rsr.path("M121,46.55a6.05,6.05,0,0,0-.21-2.28c-.33-.49-.5-.66-.5-1a8.21,8.21,0,0,0-.66-1.65,1.46,1.46,0,0,0-.08-1.16,1.84,1.84,0,0,0-.54-.65,2.51,2.51,0,0,1-1.83,0c-1.27-.35-1.23-.49-1.23-.49a1.82,1.82,0,0,0,.37,1.6,2.46,2.46,0,0,0,1.16.71,9.25,9.25,0,0,0,1.16,2,3.32,3.32,0,0,1,.68.78,3.24,3.24,0,0,1,.17,1c0,.38.08.77.13,1.15A1.15,1.15,0,0,0,121,46.55Z").attr({
  class: 'cls-16',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sx');
var path_sy = rsr.path("M118.94,40.28c0-.05-.27-.36-.31-.35a1.62,1.62,0,0,0,.54-.2,6.82,6.82,0,0,0,.41.73,1.46,1.46,0,0,1,.08,1.16,8.21,8.21,0,0,1,.66,1.65c0,.34.17.51.5,1a6.05,6.05,0,0,1,.21,2.28,1.42,1.42,0,0,1-.34.15,1.52,1.52,0,0,1,.07-.45,5.54,5.54,0,0,0,0-.7,2.36,2.36,0,0,0-.41-1.32c-.13-.19-.22-.4-.33-.59s-.14-.24-.2-.37c-.19-.44-.2-.91-.43-1.33a2,2,0,0,1-.2-.45A3.39,3.39,0,0,0,118.94,40.28Z").attr({
  class: 'cls-14',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sy');
var path_sz = rsr.path("M116.82,35.05a1,1,0,0,0-.72.1c-.28.22-.31.37-.32.81s0,.9,0,.9l-.51.8s-.06.32.5.51S117.42,35.13,116.82,35.05Z").attr({
  class: 'cls-35',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_sz');
var path_ta = rsr.path("M115.81,35.56a.7.7,0,0,1,.29-.41,1,1,0,0,1,.72-.1c.1,0,.15.11.17.26a3.7,3.7,0,0,1-.58,0,.94.94,0,0,0-.52.19Z").attr({
  class: 'cls-36',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ta');
var path_tb = rsr.path("M115.53,37.45a7,7,0,0,0,.39,2.1s.76.9,3.33.29c0,0-.26-1.06-.13-1.26s1-1,1.09-1.49.19-.88-.43-1.28c-.35-.22-.64-.41-.94-.56a3.58,3.58,0,0,0-.73-.29,1.66,1.66,0,0,0-.77,0,2.07,2.07,0,0,0-1,.44A2.58,2.58,0,0,0,115.53,37.45Z").attr({
  class: 'cls-37',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tb');
var path_tc = rsr.path("M117.34,35a1.66,1.66,0,0,1,.77,0,3.58,3.58,0,0,1,.73.29c.3.15.59.34.94.56.62.4.47.8.43,1.28s-.95,1.28-1.09,1.49.13,1.26.13,1.26c-.28.07-.53.11-.77.15a4.16,4.16,0,0,1,0-.59,3.68,3.68,0,0,1,.33-1.62,2.51,2.51,0,0,1,.57-.61.72.72,0,0,0,.21-.34,1.85,1.85,0,0,0,.12-.4.25.25,0,0,0,0-.17.36.36,0,0,0-.13-.15,2.89,2.89,0,0,0-.89-.57,5.06,5.06,0,0,0-1.11-.2,7.5,7.5,0,0,0-1.16,0A2.51,2.51,0,0,1,117.34,35Z").attr({
  class: 'cls-36',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tc');
var path_td = rsr.path("M119.3,36.07s-.34.89-.15,1.29A13.06,13.06,0,0,0,120.21,39c.11.1,0,.7,0,.7a2.08,2.08,0,0,0,.77,0l.39-.11a3.62,3.62,0,0,0-.23-1,9.1,9.1,0,0,1-.49-1.58C120.65,36.61,120.41,35.58,119.3,36.07Z").attr({
  class: 'cls-35',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_td');
var path_te = rsr.path("M119.57,36.07l-.15,0c1-.36,1.23.61,1.27,1a9.1,9.1,0,0,0,.49,1.58,3.62,3.62,0,0,1,.23,1l-.39.11h0s0,0,0-.06a4.24,4.24,0,0,0-.42-1.41,2.72,2.72,0,0,1-.3-.94C120.2,36.83,120.16,36.32,119.57,36.07Z").attr({
  class: 'cls-36',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_te');
var path_tf = rsr.path("M116.9,35.78c-.09.29.34.5.67.33l.52-.29a2.54,2.54,0,0,0,.75-.57,3.58,3.58,0,0,0-.73-.29,1.66,1.66,0,0,0-.77,0,3.87,3.87,0,0,0-.44.82Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tf');
var path_tg = rsr.path("M118,35.75a1.17,1.17,0,0,0,0-.41,2.47,2.47,0,0,1,0-.38v0l.1,0a3.58,3.58,0,0,1,.73.29,2.54,2.54,0,0,1-.75.57l-.15.09C118,35.85,118,35.78,118,35.75Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tg');
var path_th = rsr.path("M118.73,35.18h0s.08,0,.12,0l.22.11c.08,0,0,.16-.06.2a1.45,1.45,0,0,1-.21.22,2.66,2.66,0,0,1-.53.28,4.13,4.13,0,0,1-.42.14s-.37.13-.41.09v-.06s0-.06,0-.09a1.11,1.11,0,0,1,0-.17c0-.05,0,0,.1-.05a1.82,1.82,0,0,0,.4-.11,4.56,4.56,0,0,0,.44-.24,1.13,1.13,0,0,0,.28-.3A.13.13,0,0,1,118.73,35.18Z").attr({
  class: 'cls-38',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_th');
var path_ti = rsr.path("M116.65,35.27a.16.16,0,0,1,.11-.19.26.26,0,0,1,.19,0c.07,0,.08.07.06.12a.45.45,0,0,0,0,.39s0,.06,0,.09,0,0,0,.05a.85.85,0,0,0-.2.34.2.2,0,0,1-.11-.11l-.13-.23,0-.08a.27.27,0,0,1,0-.09.42.42,0,0,1,0-.16A.33.33,0,0,0,116.65,35.27Z").attr({
  class: 'cls-38',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ti');
var path_tj = rsr.path("M118.62,34.77l0,.39a2.53,2.53,0,0,1-.85.45c-.52.15-.67.06-.67.06l-.06-.83S118.45,34.33,118.62,34.77Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tj');
var path_tk = rsr.path("M118.62,34.77l0,.39a2.15,2.15,0,0,1-.59.35v-.17a2.47,2.47,0,0,1,0-.38.81.81,0,0,1,.1-.36C118.35,34.58,118.56,34.62,118.62,34.77Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tk');
var path_tl = rsr.path("M116.62,35.23c0,.25.36.32.78.25a1.74,1.74,0,0,0,.6-.23l.17-.1,0,0,0,0,.05,0c1.09-.88.43-1,.21-1.36a.7.7,0,0,0-.06-.09l-.07-.07a2.16,2.16,0,0,0-1.36-.42.78.78,0,0,0-.56.34,2.26,2.26,0,0,0-.14.26s0,0,0,0A6.1,6.1,0,0,0,116.62,35.23Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tl');
var path_tm = rsr.path("M116.3,33.77h0a.85.85,0,0,0,.23,0,3.41,3.41,0,0,0,.64,0,.65.65,0,0,1,.31,0,.41.41,0,0,1,.19.12l0,.08a.9.9,0,0,1,.13.32c0,.11,0,.22,0,.33a.82.82,0,0,0,.1.24.66.66,0,0,1,0,.37l.17-.1,0,0,0,0,.05,0c1.09-.88.43-1,.21-1.36a.7.7,0,0,0-.06-.09l-.07-.07a1.29,1.29,0,0,0-.63-.23,2.26,2.26,0,0,0-.45,0,1.92,1.92,0,0,0-.59.1l-.25.06a2.26,2.26,0,0,0-.14.26S116.31,33.76,116.3,33.77Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tm');
var path_tn = rsr.path("M121.45,39.41a.41.41,0,0,1,0,.11c0,.16-.26.21-.44.23a2.21,2.21,0,0,1-.77-.06c-.08,0,0-.12,0-.17a0,0,0,0,0,0-.05c0-.06-.09-.12-.1-.19s0,0,0-.06l.14-.07v.08c0,.18.74.06.88,0s.23-.06.15-.18c.1,0,.18.05.18.13S121.45,39.35,121.45,39.41Z").attr({
  class: 'cls-35',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tn');
group_au.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_au'
});
var group_av = rsr.set();
var path_to = rsr.path("M118.11,34.59c.08,0,.06,0,.07-.09l.09-.24a.52.52,0,0,1,.12-.18.24.24,0,0,1,.29,0,.28.28,0,0,1,0,.23.54.54,0,0,1-.1.16.73.73,0,0,0-.21.44s0,.08,0,.09l.18-.11a1.24,1.24,0,0,0,.49-.61,1.39,1.39,0,0,0,.09-.54,1,1,0,0,0-.42-.8,1.67,1.67,0,0,0-1.15-.27,2.12,2.12,0,0,0-1.05.48.73.73,0,0,0-.25.55.6.6,0,0,1,.41-.1c.72,0,1.14.1,1.18.43,0,.11,0,.22,0,.34s0,.11,0,.15A.15.15,0,0,0,118.11,34.59Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_to');
var path_tp = rsr.path("M117.37,32.86a2.2,2.2,0,0,0-.44.12l-.12,0-.1,0a2,2,0,0,1,.91-.37,1.67,1.67,0,0,1,1.15.27,1,1,0,0,1,.42.8,1.39,1.39,0,0,1-.09.54,1.26,1.26,0,0,1-.36.51.24.24,0,0,0,0-.08,1.89,1.89,0,0,0,.1-.41,1.83,1.83,0,0,0,0-.7c-.06-.42-.53-.69-1.06-.77A1.25,1.25,0,0,0,117.37,32.86Z").attr({
  class: 'cls-26',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tp');
group_av.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_av'
});
var group_aw = rsr.set();
var path_tq = rsr.path("M117.45,32.46c-.79.1-1.36.55-1.27,1s.8.74,1.59.64,1.35-.54,1.26-1S118.23,32.37,117.45,32.46Z").attr({
  class: 'cls-39',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tq');
var path_tr = rsr.path("M117.77,34c-1.27,0-1.45-.21-1.58-.63,0,0-.51.26-.59.33a.26.26,0,0,0-.07.26v0a.65.65,0,0,0,.38.27l.41.11a3,3,0,0,0,1.74-.25l.5-.23A2.28,2.28,0,0,1,117.77,34Z").attr({
  class: 'cls-40',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tr');
var path_ts = rsr.path("M119,33.11c-.09-.46-.8-.74-1.58-.65a2.59,2.59,0,0,0-.42.09,1.48,1.48,0,0,1,1.37,1.11,2.46,2.46,0,0,1,0,.26C118.84,33.73,119.09,33.42,119,33.11Z").attr({
  class: 'cls-40',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ts');
group_aw.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_aw'
});
var group_ax = rsr.set();
var path_tt = rsr.path("M 71.86 60.09 67.09 58.17 62.38 60.39 67.16 62.31 71.86 60.09 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tt');
var path_tu = rsr.path("M 81.41 63.92 76.63 62.01 71.93 64.23 76.7 66.14 81.41 63.92 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tu');
var path_tv = rsr.path("M123,48.47l-3.79,1.79,4.77,1.92.89-.42A10.28,10.28,0,0,0,123,48.47Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tv');
var path_tw = rsr.path("M 81.42 63.91 86.2 65.83 90.9 63.61 86.13 61.69 81.42 63.91 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tw');
var path_tx = rsr.path("M120.23,45.59l-1.13.53,2.8,1.13C121.39,46.7,120.85,46.15,120.23,45.59Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tx');
var path_ty = rsr.path("M117,42.94q-1.68-1.24-3.59-2.48l-3.87,1.83,4.77,1.92Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ty');
var path_tz = rsr.path("M 114.32 44.21 109.62 46.43 114.39 48.35 119.1 46.13 114.32 44.21 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_tz');
var path_ua = rsr.path("M78.88,67l-2.18-.88-1.37.65C76.49,66.89,77.68,67,78.88,67Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ua');
var path_ub = rsr.path("M 57.54 54.34 52.84 56.56 57.61 58.48 62.31 56.25 57.54 54.34 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ub');
var path_uc = rsr.path("M47.84,50.57c0,.14,0,.28,0,.42a9,9,0,0,0,.81,3.38l4.14-1.95L48,50.5Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uc');
var path_ud = rsr.path("M86.18,65.84l-2.56,1.21h.31c1.51,0,3-.14,4.54-.28Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ud');
var path_ue = rsr.path("M122.86,55.85c1.43-1.09,2.22-2.09,2.2-2.9a2,2,0,0,0,0-.34l-1.07-.43-4.7,2.22Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ue');
var path_uf = rsr.path("M68.54,65.83l3.39-1.6-4.77-1.92-4.34,2A52.41,52.41,0,0,0,68.54,65.83Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uf');
var path_ug = rsr.path("M58,62.48l4.41-2.09-4.77-1.92L54,60.2A28.79,28.79,0,0,0,58,62.48Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ug');
var path_uh = rsr.path("M 99.93 34.32 95.16 32.4 90.46 34.62 95.23 36.54 99.93 34.32 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uh');
var path_ui = rsr.path("M91.05,30.75l4.11,1.65.64-.3C94.21,31.58,92.62,31.13,91.05,30.75Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ui');
var path_uj = rsr.path("M 85.68 32.7 80.98 34.92 85.75 36.84 90.46 34.62 85.68 32.7 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uj');
var path_uk = rsr.path("M105.32,36c-1.49-.72-3-1.4-4.56-2l-.83.39,4.78,1.92Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uk');
var path_ul = rsr.path("M78.06,29.64a18.41,18.41,0,0,0-6,1.69L76.21,33l4.7-2.22Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ul');
var path_um = rsr.path("M 81.05 39.06 85.82 40.98 90.53 38.76 85.75 36.84 81.05 39.06 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_um');
var path_un = rsr.path("M109.53,38.13l0,0,.31.13Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_un');
var path_uo = rsr.path("M90.21,30.57a43.9,43.9,0,0,0-6.69-1l-2.61,1.23,4.77,1.91Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uo');
var path_up = rsr.path("M 104.78 40.37 109.48 38.15 104.71 36.23 100 38.46 104.78 40.37 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_up');
var path_uq = rsr.path("M 95.23 36.54 90.53 38.76 95.3 40.68 100 38.46 95.23 36.54 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uq');
var path_ur = rsr.path("M 100.14 46.73 104.92 48.65 109.62 46.43 104.85 44.51 100.14 46.73 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ur');
var path_us = rsr.path("M 109.69 50.57 114.46 52.48 119.17 50.26 114.39 48.35 109.69 50.57 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_us');
var path_ut = rsr.path("M 90.6 42.9 95.37 44.81 100.07 42.59 95.3 40.68 90.6 42.9 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ut');
var path_uu = rsr.path("M 71.5 35.23 76.28 37.15 80.98 34.92 76.2 33.01 71.5 35.23 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uu');
var path_uv = rsr.path("M 104.78 40.37 100.07 42.59 104.85 44.51 109.55 42.29 104.78 40.37 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uv');
var path_uw = rsr.path("M50.79,57.53l2.05-1L49,55A12.5,12.5,0,0,0,50.79,57.53Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uw');
var path_ux = rsr.path("M 71.88 60.08 76.65 62 81.35 59.78 76.58 57.86 71.88 60.08 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ux');
var path_uy = rsr.path("M 90.72 51.18 95.49 53.1 100.2 50.88 95.42 48.96 90.72 51.18 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uy');
var path_uz = rsr.path("M 100.27 55.02 105.04 56.93 109.75 54.71 104.97 52.8 100.27 55.02 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_uz');
var path_va = rsr.path("M 81.17 47.35 85.95 49.27 90.65 47.04 85.88 45.13 81.17 47.35 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_va');
var path_vb = rsr.path("M 76.38 45.44 71.68 47.66 76.45 49.58 81.16 47.35 76.38 45.44 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vb');
var path_vc = rsr.path("M 85.93 49.27 81.23 51.49 86 53.41 90.7 51.19 85.93 49.27 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vc');
var path_vd = rsr.path("M 105.03 56.94 100.32 59.16 105.1 61.08 109.8 58.86 105.03 56.94 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vd');
var path_ve = rsr.path("M 95.48 53.11 90.78 55.33 95.55 57.24 100.25 55.02 95.48 53.11 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ve');
var path_vf = rsr.path("M105.1,61.08l-4.71,2.22,2.32.93c2.05-.53,4-1.11,5.92-1.73Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vf');
var path_vg = rsr.path("M 104.9 48.66 100.2 50.88 104.97 52.8 109.67 50.57 104.9 48.66 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vg');
var path_vh = rsr.path("M 62.08 39.68 66.85 41.6 71.56 39.38 66.78 37.46 62.08 39.68 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vh');
var path_vi = rsr.path("M114.52,56.63l-4.71,2.22L114,60.53c1.77-.72,3.38-1.46,4.79-2.18Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vi');
var path_vj = rsr.path("M 95.35 44.82 90.65 47.04 95.42 48.96 100.13 46.74 95.35 44.82 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vj');
var path_vk = rsr.path("M 114.45 52.49 109.75 54.71 114.52 56.63 119.22 54.41 114.45 52.49 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vk');
var path_vl = rsr.path("M 85.81 40.99 81.1 43.21 85.88 45.13 90.58 42.91 85.81 40.99 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vl');
var path_vm = rsr.path("M67.29,33.55C66,34.2,64.4,35,62.77,35.85l4,1.61,4.71-2.22Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vm');
var path_vn = rsr.path("M 76.26 37.15 71.56 39.38 76.33 41.29 81.03 39.07 76.26 37.15 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vn');
var path_vo = rsr.path("M 71.63 43.51 76.4 45.43 81.1 43.21 76.33 41.29 71.63 43.51 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vo');
var path_vp = rsr.path("M 57.41 46.05 52.71 48.27 57.48 50.19 62.19 47.97 57.41 46.05 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vp');
var path_vq = rsr.path("M 66.96 49.89 62.26 52.11 67.03 54.02 71.74 51.8 66.96 49.89 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vq');
var path_vr = rsr.path("M 95.6 61.39 90.9 63.61 95.67 65.53 100.38 63.31 95.6 61.39 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vr');
var path_vs = rsr.path("M 86.06 57.56 81.35 59.78 86.13 61.69 90.83 59.47 86.06 57.56 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vs');
var path_vt = rsr.path("M 76.51 53.72 71.81 55.94 76.58 57.86 81.28 55.64 76.51 53.72 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vt');
var path_vu = rsr.path("M 62.33 56.25 67.1 58.16 71.81 55.94 67.03 54.02 62.33 56.25 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vu');
var path_vv = rsr.path("M 52.78 52.41 57.56 54.33 62.26 52.11 57.48 50.19 52.78 52.41 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vv');
var path_vw = rsr.path("M47.85,50.43l.16.06,4.7-2.22L49.05,46.8A8.08,8.08,0,0,0,47.85,50.43Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vw');
var path_vx = rsr.path("M 62.2 47.96 66.98 49.88 71.68 47.66 66.91 45.74 62.2 47.96 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vx');
var path_vy = rsr.path("M 66.84 41.6 62.13 43.82 66.91 45.74 71.61 43.52 66.84 41.6 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vy');
var path_vz = rsr.path("M 52.66 44.13 57.43 46.05 62.13 43.82 57.36 41.91 52.66 44.13 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_vz');
var path_wa = rsr.path("M 71.75 51.8 76.53 53.71 81.23 51.49 76.45 49.58 71.75 51.8 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wa');
var path_wb = rsr.path("M58.56,38.28c-1.3.81-2.58,1.68-3.78,2.59l2.58,1,4.7-2.22Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wb');
var path_wc = rsr.path("M 81.3 55.63 86.07 57.55 90.78 55.33 86 53.41 81.3 55.63 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wc');
var path_wd = rsr.path("M52.64,44.14l-1.11-.45A20.55,20.55,0,0,0,50,45.36Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wd');
var path_we = rsr.path("M 90.85 59.47 95.62 61.38 100.32 59.16 95.55 57.24 90.85 59.47 z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_we');
var path_wf = rsr.path("M96.09,65.7l-.42-.17-.82.39Z").attr({
  class: 'cls-44',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wf');
group_ax.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ax'
});
var group_ay = rsr.set();
group_ay.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ay'
});
var group_az = rsr.set();
var path_wg = rsr.path("M82.37,11.4a1.88,1.88,0,0,1-2.24.92,1.41,1.41,0,0,1-.52-2.08,1.9,1.9,0,0,1,2.25-.92A1.4,1.4,0,0,1,82.37,11.4Z").attr({
  class: 'cls-53',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wg');
var path_wh = rsr.path("M81.15,9.87a2.45,2.45,0,0,1,1.11-.53c.07,0,.16,0,.2,0s-.62.52-.67.57a2.07,2.07,0,0,0-.46.66,3.18,3.18,0,0,1-.19.75,1.74,1.74,0,0,1-.58.6,1.49,1.49,0,0,1-1.12.18,1.41,1.41,0,0,0,1.16-.94c0-.19.05-.39.1-.58A1.41,1.41,0,0,1,81.15,9.87Z").attr({
  class: 'cls-54',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wh');
group_az.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_az'
});
var group_ba = rsr.set();
var path_wi = rsr.path("M78.49,13.2a1.88,1.88,0,0,1-.42-.12c-.48-.19-.8-.51-.81-.82s.29-.39.85-.17a2.86,2.86,0,0,1,.35.18l-.06.2a1.29,1.29,0,0,0-.27-.14c-.24-.1-.4-.05-.39.11a.59.59,0,0,0,.42.44,1,1,0,0,0,.27.08Z").attr({
  class: 'cls-53',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wi');
var path_wj = rsr.path("M80.18,13.42c0,.35-.37.36-.78.2s-.78-.5-.79-.82.31-.38.79-.19S80.17,13.12,80.18,13.42ZM79.09,13a.49.49,0,0,0,.32.42c.18.07.29,0,.29-.18a.49.49,0,0,0-.31-.41C79.17,12.73,79.09,12.85,79.09,13Z").attr({
  class: 'cls-53',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wj');
var path_wk = rsr.path("M81.48,14.43l0-.75L81,13.49l0,.75-.46-.19,0-.75-.19-.08V13l.2.08v0a.21.21,0,0,1,.16-.24.77.77,0,0,1,.46.07l.2.11-.06.19-.12-.06c-.14-.05-.18,0-.18.1v0l.48.19v0a.24.24,0,0,1,.18-.25.93.93,0,0,1,.42.07,1.33,1.33,0,0,1,.24.12v.23l-.15-.08c-.15-.06-.22,0-.21.09v.05l.3.12V14l-.29-.12,0,.75Z").attr({
  class: 'cls-53',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wk');
var path_wl = rsr.path("M82.8,14.58c0,.13.21.26.42.35a3.25,3.25,0,0,0,.42.13l.06.23a3.4,3.4,0,0,1-.54-.16c-.51-.21-.8-.52-.81-.82s.22-.42.74-.21.68.51.68.75a.31.31,0,0,1,0,.11Zm.54,0a.37.37,0,0,0-.27-.3c-.2-.08-.27,0-.28.08Z").attr({
  class: 'cls-53',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wl');
group_ba.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ba'
});
var group_bb = rsr.set();
var path_wm = rsr.path("M97.26,16.61c.12,0,.37.12.6.22a2.26,2.26,0,0,1,.61.32.57.57,0,0,1,.26.36c0,.12-.1.19-.34.15h0c.24.14.42.33.43.5s-.08.18-.21.2a2,2,0,0,1-.81-.21l-.51-.22Zm.47.7.16.06c.24.1.37.09.37,0s-.13-.2-.34-.29l-.2-.07Zm0,.59.18.08c.21.09.4.11.39,0s-.19-.27-.42-.36l-.16-.06Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wm');
var path_wn = rsr.path("M100.54,18.93a2.73,2.73,0,0,0,0,.32l-.41-.17,0-.14h0c-.06,0-.2.08-.47,0a.74.74,0,0,1-.54-.63V17.7l.47.19v.52a.36.36,0,0,0,.24.32c.13.05.2,0,.23,0a.11.11,0,0,0,0-.06l0-.58.47.19Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wn');
var path_wo = rsr.path("M100.9,18.74a2.45,2.45,0,0,0,0-.32l.4.16,0,.18h0c.07-.11.25-.1.39,0l.1,0v.29L101.7,19c-.18-.07-.29-.06-.32,0s0,0,0,.07l0,.49-.47-.19Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wo');
var path_wp = rsr.path("M103.47,19.46a1.8,1.8,0,0,0,0,.28l0,.54c0,.19,0,.32-.21.35a1.34,1.34,0,0,1-.61-.13,2.47,2.47,0,0,1-.54-.29l.08-.19a3.27,3.27,0,0,0,.44.25c.22.08.39.08.38-.1V20.1h0a.49.49,0,0,1-.4,0,.94.94,0,0,1-.65-.73c0-.31.3-.38.67-.23a.89.89,0,0,1,.42.3h0v-.11Zm-.47.2a.13.13,0,0,0,0-.06.51.51,0,0,0-.26-.24c-.16-.06-.3,0-.29.16a.45.45,0,0,0,.31.38c.12.05.21,0,.24,0a.19.19,0,0,0,0-.08Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wp');
var path_wq = rsr.path("M104.21,20.33c0,.13.21.27.43.35a2.12,2.12,0,0,0,.41.13l.07.23a2.29,2.29,0,0,1-.54-.16c-.51-.2-.81-.51-.82-.82s.22-.42.74-.21.68.51.69.75a.29.29,0,0,1,0,.12Zm.54,0c0-.07,0-.21-.27-.3s-.27,0-.28.08Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wq');
var path_wr = rsr.path("M105.46,20.57a2.45,2.45,0,0,0,0-.32l.4.16,0,.18h0c.07-.11.25-.1.39,0l.1.05v.28l-.13-.06c-.17-.07-.28,0-.31,0s0,0,0,.06l0,.49-.47-.18Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wr');
var path_ws = rsr.path("M100.86,21.17a4.38,4.38,0,0,1-.69-.21,2.43,2.43,0,0,1-.85-.52.89.89,0,0,1-.3-.6c0-.44.48-.5,1.16-.22a2.62,2.62,0,0,1,.57.29l-.09.21a2.46,2.46,0,0,0-.48-.26c-.39-.15-.68-.13-.67.16a.92.92,0,0,0,.66.7,1.59,1.59,0,0,0,.23.08v-.29l-.32-.12v-.24l.77.31Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ws');
var path_wt = rsr.path("M101.2,20.72a2.45,2.45,0,0,0,0-.32l.4.16,0,.18h0c.08-.11.26-.1.4,0l.1,0V21L102,21c-.17-.07-.28-.06-.31,0a.15.15,0,0,0,0,.07l0,.49-.47-.19Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wt');
var path_wu = rsr.path("M102.83,20.79c0,.09-.09.11-.24.05s-.25-.16-.25-.25.09-.11.24-.05S102.83,20.7,102.83,20.79Zm-.44,1.05,0-1,.47.19,0,1Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wu');
var path_wv = rsr.path("M103.19,20.77l.46.19,0,1.41-.46-.19Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wv');
var path_ww = rsr.path("M104,21.11l.47.18,0,1.42-.47-.19Z").attr({
  class: 'cls-55',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ww');
group_bb.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bb'
});
var group_bc = rsr.set();
var path_wx = rsr.path("M91.21,17.19c-.15.23.81.81,2.14,1.29s2.54.69,2.68.47-.81-.81-2.14-1.29S91.36,17,91.21,17.19Z").attr({
  class: 'cls-56',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wx');
var path_wy = rsr.path("M91.2,17c-.15.23.81.81,2.15,1.29s2.53.69,2.68.47-.81-.81-2.14-1.29S91.35,16.81,91.2,17Z").attr({
  class: 'cls-56',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wy');
var path_wz = rsr.path("M91.19,16.75c-.14.22.82.8,2.15,1.28s2.53.69,2.68.47-.81-.8-2.14-1.29S91.34,16.52,91.19,16.75Z").attr({
  class: 'cls-57',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_wz');
var path_xa = rsr.path("M91.18,16.43c-.14.22.82.8,2.15,1.28s2.53.69,2.68.47-.81-.8-2.14-1.29S91.33,16.2,91.18,16.43Z").attr({
  class: 'cls-58',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xa');
var path_xb = rsr.path("M91.18,16.22c-.15.22.81.8,2.14,1.28s2.54.7,2.69.47-.82-.8-2.15-1.29S91.33,16,91.18,16.22Z").attr({
  class: 'cls-59',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xb');
var path_xc = rsr.path("M91.17,16c-.15.22.81.8,2.15,1.28s2.53.7,2.68.47-.82-1.16-2.16-1.64A3.3,3.3,0,0,0,91.17,16Z").attr({
  class: 'cls-56',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xc');
group_bc.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bc'
});
var group_bd = rsr.set();
var path_xd = rsr.path("M111.42,22.19l1.54.62V23l-1.17-.47,0,.56,1.08.43v.18l-1.09-.43,0,.75-.37-.15Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xd');
var path_xe = rsr.path("M113.79,23.28c0,.08-.09.1-.24,0s-.22-.15-.23-.23.1-.09.23,0S113.79,23.2,113.79,23.28Zm-.37,1.37,0-1.2.38.15,0,1.2Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xe');
var path_xf = rsr.path("M114.82,23.69V24l.54.22v.16l-.54-.21,0,.65a.38.38,0,0,0,.29.34l.22.07,0,.17a1.4,1.4,0,0,1-.33-.1,1.2,1.2,0,0,1-.41-.25.49.49,0,0,1-.15-.37l0-.66-.32-.13v-.16l.32.12V23.6Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xf');
var path_xg = rsr.path("M117.3,25.44,116.18,25l0,.6,1.24.5v.18l-1.61-.65,0-1.67,1.55.62v.19l-1.18-.48,0,.53,1.11.45Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xg');
var path_xh = rsr.path("M119.06,26.92l0-.16h0a.88.88,0,0,1-.63-.07c-.42-.17-.63-.43-.64-.6s.43-.27,1.23.05v0c0-.1-.06-.3-.48-.47a1.77,1.77,0,0,0-.53-.13l-.09-.17a2.06,2.06,0,0,1,.67.16c.63.26.79.57.8.81v.45a1.45,1.45,0,0,0,0,.3Zm-.07-.63c-.41-.17-.87-.32-.87-.08s.17.27.36.35.44.07.5,0a.14.14,0,0,0,0-.07Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xh');
var path_xi = rsr.path("M120.37,25.92v.34l.53.22v.16l-.54-.21,0,.65c0,.15.08.26.29.34l.21.08,0,.17a2.08,2.08,0,0,1-.33-.11,1.2,1.2,0,0,1-.41-.25.54.54,0,0,1-.16-.37l0-.66-.32-.13V26l.32.13v-.29Z").attr({
  class: 'cls-60',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xi');
group_bd.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bd'
});
var group_be = rsr.set();
var path_xj = rsr.path("M46.2,53.6,43.6,73.52c0,1-.77,2-2.12,2.79a11.1,11.1,0,0,1-2.62,1,16.66,16.66,0,0,1-3.61.49,15.94,15.94,0,0,1-3.61-.28A10.5,10.5,0,0,1,29,76.68c-1.4-.68-2.26-1.61-2.29-2.66L22.94,54.39Z").attr({
  class: 'cls-62',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xj');
var path_xk = rsr.path("M43.21,55.65,41.48,76.31a11.1,11.1,0,0,1-2.62,1,16.66,16.66,0,0,1-3.61.49,15.94,15.94,0,0,1-3.61-.28A10.5,10.5,0,0,1,29,76.68L26,56.23l9.67-.33,3.77-.13Z").attr({
  class: 'cls-63',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xk');
var path_xl = rsr.path("M39.48,55.76h0l-.62,21.56a16.66,16.66,0,0,1-3.61.49,15.94,15.94,0,0,1-3.61-.28L29.77,56.13l5.94-.23Z").attr({
  class: 'cls-64',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xl');
var path_xm = rsr.path("M23.68,58.3c2.15,1.81,6.32,3,11.08,2.83s8.88-1.55,10.91-3.49l.53-4-23.26.79Z").attr({
  class: 'cls-65',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xm');
var path_xn = rsr.path("M46,51.43C44,49.34,39.56,48,34.38,48.11S24.81,49.9,23,52.1l-.95,0,.06,2.28c.1,3.28,5.75,5.78,12.62,5.58S47.09,57,47,53.68l-.06-2.28Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xn');
var ellipse_xo = rsr.ellipse(34.49, 51.76, 12.45, 5.95).attr({
  class: 'cls-66',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("").data('id', 'ellipse_xo');
var ellipse_xp = rsr.ellipse(34.49, 51.76, 7.91, 3.78).attr({
  class: 'cls-67',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).transform("").data('id', 'ellipse_xp');
var path_xq = rsr.path("M39.34,51.09c0,1.28-2.11,2.39-4.8,2.47s-4.9-.9-4.94-2.19S31.71,49,34.4,48.9,39.31,49.8,39.34,51.09Z").attr({
  class: 'cls-66',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xq');
var path_xr = rsr.path("M36.48,51.17a.62.62,0,0,1-.27.5,2.89,2.89,0,0,1-1.71.52,3.72,3.72,0,0,1-.91-.08c-.66-.14-1.12-.45-1.13-.82a.7.7,0,0,1,.36-.57,3,3,0,0,1,1.62-.45,3.82,3.82,0,0,1,1.06.12C36.08,50.54,36.47,50.82,36.48,51.17Z").attr({
  class: 'cls-67',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xr');
group_be.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_be'
});
var group_bf = rsr.set();
var path_xs = rsr.path("M 59.54 42.77 63.51 35.45 60.3 34.16 56.16 36.13 56.33 41.48 59.54 42.77 z").attr({
  class: 'cls-74',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xs');
var path_xt = rsr.path("M 63.68 40.81 63.51 35.45 59.37 37.42 59.54 42.77 63.68 40.81 z").attr({
  class: 'cls-75',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xt');
var path_xu = rsr.path("M 63.03 37.37 62.99 36.11 59.9 37.58 59.94 38.84 63.03 37.37 z").attr({
  class: 'cls-76',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xu');
var path_xv = rsr.path("M 56.16 36.13 59.37 37.42 63.51 35.45 60.3 34.16 56.16 36.13 z").attr({
  class: 'cls-77',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xv');
group_bf.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bf'
});
var group_bg = rsr.set();
var path_xw = rsr.path("M 101.23 36.43 101.16 33.95 103.73 34.99 103.8 37.47 101.23 36.43 z").attr({
  class: 'cls-81',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xw');
var path_xx = rsr.path("M 104.65 34.56 105.64 35.22 103.76 36.11 103.73 34.99 104.65 34.56 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xx');
group_bg.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bg'
});
var group_bh = rsr.set();
var path_xy = rsr.path("M 103.8 37.47 101.19 35.06 104.02 33.73 106.59 34.77 106.63 36.14 103.8 37.47 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xy');
var path_xz = rsr.path("M 106.59 34.77 103.76 36.11 101.19 35.06 104.02 33.73 106.59 34.77 z").attr({
  class: 'cls-79',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_xz');
var path_ya = rsr.path("M 104.65 34.56 103.73 34.99 101.16 33.95 102.08 33.51 104.65 34.56 z").attr({
  class: 'cls-80',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ya');
group_bh.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bh'
});
var group_bi = rsr.set();
var path_yb = rsr.path("M102.24,32.5h.51l0,1.61s0,.07-.1.1a.52.52,0,0,1-.37,0s0,0,0-.07h0Z").attr({
  class: 'cls-82',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yb');
group_bi.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bi'
});
var group_bj = rsr.set();
var path_yc = rsr.path("M 103.02 33.63 101.48 32.29 102.12 31.99 103.64 32.61 103.66 33.33 103.02 33.63 z").attr({
  class: 'cls-83',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yc');
var path_yd = rsr.path("M 101.5 33.01 101.48 32.29 103 32.91 103.02 33.63 101.5 33.01 z").attr({
  class: 'cls-84',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yd');
var path_ye = rsr.path("M 103.64 32.61 103 32.91 101.48 32.29 102.12 31.99 103.64 32.61 z").attr({
  class: 'cls-85',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ye');
group_bj.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bj'
});
var group_bk = rsr.set();
var path_yf = rsr.path("M 83.07 29.14 83 26.66 85.57 27.71 85.64 30.19 83.07 29.14 z").attr({
  class: 'cls-81',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yf');
var path_yg = rsr.path("M 86.49 27.27 87.47 27.94 85.6 28.82 85.57 27.71 86.49 27.27 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yg');
group_bk.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bk'
});
var group_bl = rsr.set();
var path_yh = rsr.path("M 85.64 30.19 83.03 27.77 85.86 26.44 88.43 27.48 88.47 28.85 85.64 30.19 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yh');
var path_yi = rsr.path("M 88.43 27.48 85.6 28.82 83.03 27.77 85.86 26.44 88.43 27.48 z").attr({
  class: 'cls-79',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yi');
var path_yj = rsr.path("M 86.49 27.27 85.57 27.71 83 26.66 83.92 26.23 86.49 27.27 z").attr({
  class: 'cls-80',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yj');
group_bl.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bl'
});
var group_bm = rsr.set();
var path_yk = rsr.path("M84.08,25.21h.51l0,1.61s0,.08-.1.1a.47.47,0,0,1-.37,0s0,0,0-.06h0Z").attr({
  class: 'cls-82',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yk');
group_bm.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bm'
});
var group_bn = rsr.set();
var path_yl = rsr.path("M 84.86 26.34 83.32 25 83.96 24.7 85.48 25.32 85.5 26.04 84.86 26.34 z").attr({
  class: 'cls-83',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yl');
var path_ym = rsr.path("M 83.33 25.72 83.32 25 84.84 25.63 84.86 26.34 83.33 25.72 z").attr({
  class: 'cls-84',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ym');
var path_yn = rsr.path("M 85.48 25.32 84.84 25.63 83.32 25 83.96 24.7 85.48 25.32 z").attr({
  class: 'cls-85',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yn');
group_bn.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bn'
});
var group_bo = rsr.set();
var path_yo = rsr.path("M 118.47 43.16 118.39 40.68 120.97 41.73 121.04 44.21 118.47 43.16 z").attr({
  class: 'cls-81',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yo');
var path_yp = rsr.path("M 121.89 41.29 122.87 41.96 121 42.84 120.97 41.73 121.89 41.29 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yp');
group_bo.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bo'
});
var group_bp = rsr.set();
var path_yq = rsr.path("M 121.04 44.21 118.43 41.8 121.26 40.46 123.83 41.51 123.87 42.87 121.04 44.21 z").attr({
  class: 'cls-78',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yq');
var path_yr = rsr.path("M 123.83 41.51 121 42.84 118.43 41.8 121.26 40.46 123.83 41.51 z").attr({
  class: 'cls-79',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yr');
var path_ys = rsr.path("M 121.89 41.29 120.97 41.73 118.39 40.68 119.32 40.24 121.89 41.29 z").attr({
  class: 'cls-80',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ys');
group_bp.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bp'
});
var group_bq = rsr.set();
var path_yt = rsr.path("M119.47,39.23H120l.05,1.61s0,.08-.11.1a.45.45,0,0,1-.36,0s0,0,0-.06h0Z").attr({
  class: 'cls-82',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yt');
group_bq.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bq'
});
var group_br = rsr.set();
var path_yu = rsr.path("M 120.26 40.36 118.72 39.02 119.36 38.72 120.88 39.34 120.9 40.06 120.26 40.36 z").attr({
  class: 'cls-83',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yu');
var path_yv = rsr.path("M 118.73 39.74 118.72 39.02 120.24 39.65 120.26 40.36 118.73 39.74 z").attr({
  class: 'cls-84',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yv');
var path_yw = rsr.path("M 120.88 39.34 120.24 39.65 118.72 39.02 119.36 38.72 120.88 39.34 z").attr({
  class: 'cls-85',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yw');
group_br.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_br'
});
var group_bs = rsr.set();
var path_yx = rsr.path("M108,41.22a.81.81,0,0,1,.63-.54c.52-.1.66.14.68.88s.11,1.81.11,1.81l1.28,2.21L110,46l-1.82-2.07Z").attr({
  class: 'cls-89',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yx');
var path_yy = rsr.path("M108,41.22a.81.81,0,0,1,.63-.54h0a.65.65,0,0,0-.18.3l.2,2.68L110,46l-.56,0-1.26-2.11Z").attr({
  class: 'cls-93',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yy');
group_bs.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bs'
});
var group_bt = rsr.set();
var path_yz = rsr.path("M105.82,39.93c0,.17-.06.47.08.62a.58.58,0,0,0,.2.13,5,5,0,0,0,3,.07c-.63-.44-1.27-1.46-.84-2.12.09-.14.31-.4.56-.34s.23.09.29,0a.11.11,0,0,0,0-.08c0-.25,0-.64-.3-.82a2.49,2.49,0,0,0-1.49-.29,2,2,0,0,0-1.3.79A4.33,4.33,0,0,0,105.82,39.93Z").attr({
  class: 'cls-94',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_yz');
var path_za = rsr.path("M107.49,50.6s.1-.48.54-.16a1.88,1.88,0,0,1,.4.45c.08.11.14.22.23.33a.41.41,0,0,0,.26.18h.13a.42.42,0,0,0,.12,0s0,0,0,0v0a.24.24,0,0,0-.14-.1,1.41,1.41,0,0,1,.41,0c.06,0,.23,0,.25.07s0,.41-.1.46-.52.29-.85.1a8.14,8.14,0,0,1-.82-.59V52h-.4l0-.81S107.23,51,107.49,50.6Z").attr({
  class: 'cls-95',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_za');
group_bt.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bt'
});
var group_bu = rsr.set();
var path_zb = rsr.path("M105.9,45.48c.07,0,0,.46,0,.52s0,.14.06.22a5.29,5.29,0,0,0,.49,1.09,2,2,0,0,1,.33.91,6,6,0,0,1-.18.82,1.12,1.12,0,0,0,0,.41,3.84,3.84,0,0,0,.26.92c0,.09.1.26.22.31a1.66,1.66,0,0,0,.5,0,.57.57,0,0,0,.35-.12.35.35,0,0,0,.14-.27L108,44.69a2.42,2.42,0,0,1-1.86.79Z").attr({
  class: 'cls-86',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zb');
var path_zc = rsr.path("M107.56,48.25a2.44,2.44,0,0,1-.15.92,1.76,1.76,0,0,0,0,.91,1.39,1.39,0,0,1,.06.4c0,.05,0,.26,0,.3.13-.05.28-.07.4-.12,0-.08,0-.16-.07-.23s0-.19,0-.29-.06-.23-.07-.34a3.39,3.39,0,0,1,0-.71,3.69,3.69,0,0,1,.09-.58.91.91,0,0,0,0-.49,4.12,4.12,0,0,1-.31-1.23C107.27,47.28,107.54,47.76,107.56,48.25Z").attr({
  class: 'cls-87',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zc');
var path_zd = rsr.path("M106.68,50.27s.1-.49.55-.16a1.63,1.63,0,0,1,.39.44c.08.11.15.23.23.33a.43.43,0,0,0,.26.19h.13a.17.17,0,0,0,.12,0s0,0,0,0,0,0,0,0a.39.39,0,0,0-.14-.1,1.88,1.88,0,0,1,.41,0c.06,0,.23,0,.25.07s0,.42-.1.46-.52.29-.85.11a7.14,7.14,0,0,1-.81-.6l0,.7h-.4l0-.81S106.43,50.64,106.68,50.27Z").attr({
  class: 'cls-88',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zd');
var path_ze = rsr.path("M107.81,48.53a.61.61,0,0,1,0,.14,3.46,3.46,0,0,1,0,.85c0,.12,0,.24,0,.36a2.14,2.14,0,0,0,.12.79.84.84,0,0,0,.3.4,1.45,1.45,0,0,0,.48.35.64.64,0,0,0,.31.07s.21,0,.23,0a.08.08,0,0,0,0-.05,3.88,3.88,0,0,0-.26-.31.48.48,0,0,1,0-.31c0-.27,0-.55,0-.82s0-.27,0-.41.09-.5.12-.76,0-.47,0-.7.07-.67.11-1a2.33,2.33,0,0,0,0-.91,2.12,2.12,0,0,1,0-1.09.76.76,0,0,1,.06-.2l-2,.06c0,.25,0,.5,0,.75a10.36,10.36,0,0,0,.29,1.43c.05.23.15.43.2.66A6.5,6.5,0,0,1,107.81,48.53Z").attr({
  class: 'cls-86',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ze');
var path_zf = rsr.path("M109.28,47a11.83,11.83,0,0,0,0-1.19c0-.22,0-.46,0-.68s-.93-.18-1.2-.17l-.91,0,0,.29,1.52,0s.13.53.14.6a3.34,3.34,0,0,1,.08.7c0,.36,0,.71,0,1.06,0,.75-.15,1.5-.17,2.25a9.1,9.1,0,0,0,0,1,.86.86,0,0,0,.26.62l0,0h.06a.5.5,0,0,0,.24-.06s0,0,0,0a.13.13,0,0,0,0-.06.08.08,0,0,0,0,0c-.11-.07-.28,0-.37-.14a.41.41,0,0,1-.07-.22,3.75,3.75,0,0,1,0-.82c0-.14,0-.27,0-.41,0-.35.09-.69.14-1,.06-.52.14-1,.17-1.57Z").attr({
  class: 'cls-87',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zf');
var path_zg = rsr.path("M109.87,47a3.49,3.49,0,0,1-1.06.5l-.14,0-.17.05-.12,0h0l-.13,0-.1,0H108a2.88,2.88,0,0,1-1.54-.33A1.65,1.65,0,0,1,106,47a.61.61,0,0,1-.17-.39h0V45.32s0,0,0-.06c0-.45,0-.9,0-1.19v-.21c0-.16,0-.32,0-.49v-.18a.2.2,0,0,0,0-.07v0c0-.21,0-.41,0-.62v-.1a.81.81,0,0,1,0-.16c0-.2,0-.41,0-.61v-1a2.5,2.5,0,0,0-.09-.25.29.29,0,0,1,0-.09h0a.24.24,0,0,1,.08-.19.41.41,0,0,1,.11-.07,2.17,2.17,0,0,1,1-.2l1.24.08,1,.73.41,1.44a4.22,4.22,0,0,1,0,.87,4.69,4.69,0,0,0-.18.61v0a4.7,4.7,0,0,0,.2,1.7c.11.35.32.68.45,1C110,46.51,110.08,46.86,109.87,47Z").attr({
  class: 'cls-89',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zg');
var path_zh = rsr.path("M108.32,40.08l-.27-.2-1.24-.08h-.18c-.13.09-.36.32.34.43A2.49,2.49,0,0,0,108.32,40.08Z").attr({
  class: 'cls-90',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zh');
var path_zi = rsr.path("M106.83,39.42l0,.43s.11.15.64.16.61-.13.61-.13l0-.42Z").attr({
  class: 'cls-91',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zi');
var path_zj = rsr.path("M106.8,39.85s.11.15.64.16h.2v0l0-.42-.85,0Z").attr({
  class: 'cls-92',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zj');
var path_zk = rsr.path("M107.66,39.59s.91.23,1-.15l.17-.58s.25-.1.17-.19-.19-.2-.19-.25.14-.26,0-.39a4.89,4.89,0,0,0-.81-.44l-1.06.84.06,1Z").attr({
  class: 'cls-86',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zk');
var path_zl = rsr.path("M109.69,45.64a.2.2,0,0,0-.07.26,3.37,3.37,0,0,1,.27.51c.15.33.19.52.41.44a2.57,2.57,0,0,0,.37-.18.19.19,0,0,0,.12-.18.35.35,0,0,0,0-.13,1.61,1.61,0,0,1-.11-.3l.09,0,.11,0a.1.1,0,0,0,.09-.12s-.1-.08-.16-.11l-.17-.07a.49.49,0,0,1-.34-.33C110.22,45.3,109.89,45.5,109.69,45.64Z").attr({
  class: 'cls-86',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zl');
var path_zm = rsr.path("M109.19,47.41a2.43,2.43,0,0,1-.38.13l-.14,0-.17.05-.12,0-.25.05H108a2.88,2.88,0,0,1-1.54-.33A1.65,1.65,0,0,1,106,47a.61.61,0,0,1-.17-.39h0c0-.1,0-.2,0-.31v-1s0,0,0-.06c0-.3,0-.6,0-.9a2.53,2.53,0,0,1,0-.29v-.21c0-.1,0-.21,0-.31v-.36a.2.2,0,0,0,0-.07v0c0-.16,0-.33,0-.5a1.66,1.66,0,0,0,0-.22.81.81,0,0,1,0-.16c0-.23,0-.46-.08-.69a7.61,7.61,0,0,1-.1-1,1.11,1.11,0,0,1,0-.3h0a.38.38,0,0,1,.34-.25,3.48,3.48,0,0,1,2.21.71.79.79,0,0,1,.24.31l.09.22.15.37a1.53,1.53,0,0,0-.23.69c0-.06-.05-.13-.08-.19v.49a7,7,0,0,0,0,1.12c.06.4.39,2.13.49,2.53S109.07,47,109.19,47.41Z").attr({
  class: 'cls-93',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zm');
group_bu.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bu'
});
var group_bv = rsr.set();
var path_zn = rsr.path("M89,36.57s.26.27.35.39.42.31.32.37-.47-.25-.47-.25l.13.65s0,.07-.08.08h-.1s.05.16-.27.06-.26-.1-.31-.22a1.65,1.65,0,0,1-.18-.54,3.26,3.26,0,0,1,0-.5Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zn');
var path_zo = rsr.path("M87.84,31.27a.78.78,0,0,1,.78-.33c.54.07.62.36.43,1.12s-.41,1.86-.41,1.86l.65,2.66L88,36.86,87.28,34Z").attr({
  class: 'cls-102',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zo');
var path_zp = rsr.path("M87.84,31.27a.78.78,0,0,1,.78-.33h0a.65.65,0,0,0-.26.23L87.79,34l.72,2.79-.51.11L87.28,34Z").attr({
  class: 'cls-100',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zp');
group_bv.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bv'
});
var group_bw = rsr.set();
var path_zq = rsr.path("M90.8,30.42l0,.28.19.21s.21-.12.26-.26a.2.2,0,0,0,0-.2L91,30.3A.71.71,0,0,1,90.8,30.42Z").attr({
  class: 'cls-103',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zq');
var path_zr = rsr.path("M 90.67 30.87 90.47 31.13 90.68 31.29 90.85 31.01 90.67 30.87 z").attr({
  class: 'cls-104',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zr');
var path_zs = rsr.path("M90.68,31.17l.2.16L91,34.39l-.18.6-.24-.55c0-.82-.07-3-.07-3Z").attr({
  class: 'cls-104',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zs');
var path_zt = rsr.path("M89.72,30.49l-.23.09c-.08,0,.1.35.24.4a3.73,3.73,0,0,0,.63.16l.06-.34a1.37,1.37,0,0,1-.45-.07C89.73,30.64,89.72,30.49,89.72,30.49Z").attr({
  class: 'cls-103',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zt');
var path_zu = rsr.path("M89.78,30v.56a.47.47,0,0,0,.36.26,1.27,1.27,0,0,0,.6,0l.09-.06v-.55Z").attr({
  class: 'cls-105',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zu');
var path_zv = rsr.path("M90.83,30.13v.12l-.69-.11v.56l0,.08h0a.47.47,0,0,1-.36-.26V30Z").attr({
  class: 'cls-87',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zv');
var path_zw = rsr.path("M89.66,30.09h0a1.67,1.67,0,0,0,.43.25.9.9,0,0,0,1.34-.64,3,3,0,0,0,.06-1.09.85.85,0,0,0-.47,0c-.68.14-1,.19-1,.51s0,.53,0,.53h-.17s-.23-.59-.44-.44C89,29.54,89.66,29.59,89.66,30.09Z").attr({
  class: 'cls-86',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zw');
var path_zx = rsr.path("M89.46,29.14h.06l0,0h0a.42.42,0,0,0,.19-.06.52.52,0,0,0,.1-.11.72.72,0,0,1,.27-.25c.08,0,.19-.05.26-.08a2.53,2.53,0,0,1,.23-.12.83.83,0,0,1,.47-.1l.15,0a.62.62,0,0,1,.24.13h0s0,0,0,0l-.19,0a.79.79,0,0,0-.34,0l-.3.07a1.92,1.92,0,0,0-.33.14.57.57,0,0,0-.13.08c-.09.08-.08.19-.11.29a.67.67,0,0,0,0,.24,2,2,0,0,0,.17.94l-.12-.05a1.67,1.67,0,0,1-.43-.25.6.6,0,0,0-.22-.43.41.41,0,0,0-.1-.09.22.22,0,0,1-.1-.09.17.17,0,0,1,0-.07c0-.05,0-.1,0-.14a.09.09,0,0,1,0-.09s0,0,.07,0h.12Z").attr({
  class: 'cls-87',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zx');
var path_zy = rsr.path("M88.83,29a3,3,0,0,0,.83,1.06s0-.07,0-.08a.74.74,0,0,0-.26-.4.5.5,0,0,1-.12-.14.24.24,0,0,1,0-.23.22.22,0,0,1,.27,0,.36.36,0,0,1,.14.16,1.25,1.25,0,0,1,.15.28H90s0-.21,0-.53.33-.37,1-.51a.85.85,0,0,1,.47,0,.74.74,0,0,0-.33-.5,2.22,2.22,0,0,0-2-.23C88.51,28.17,88.83,29,88.83,29Z").attr({
  class: 'cls-94',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zy');
group_bw.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bw'
});
var group_bx = rsr.set();
var path_zz = rsr.path("M90,40.74a.42.42,0,0,0-.18.33,1.71,1.71,0,0,1,0,.3l.71.26h.31a1.93,1.93,0,0,0,1.25.43c.73,0,1.15-.21.8-.54A3,3,0,0,0,91.85,41l-.23-.5Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_zz');
var path_aaa = rsr.path("M91.85,41a3,3,0,0,1,1.09.53c.1.09.14.17.13.24a1.89,1.89,0,0,1-1.41,0C91,41.38,91,41,91,41l.63-.46Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaa');
var path_aab = rsr.path("M89.81,34.82l.18,6a.32.32,0,0,0,.15.26.55.55,0,0,0,.36.1A3.66,3.66,0,0,0,91.6,41a.42.42,0,0,0,.23-.12.3.3,0,0,0,0-.26c-.05-.41-.15-.82-.18-1.24a12,12,0,0,1,0-1.34c0-1,.31-2,.31-2.94,0-.11,0-.21,0-.31Z").attr({
  class: 'cls-96',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aab');
var path_aac = rsr.path("M90.46,37.57l0-.06a2,2,0,0,0,.17-.48c.1.83.12,1.66.16,2.49,0,.33.05.67,0,1a.67.67,0,0,0,0,.34s.13.24.06.28a1.33,1.33,0,0,1-.4,0c0-.09,0-.18-.06-.25l-.06-.56c0-.45-.05-.89-.05-1.34s0-.69,0-1A2.5,2.5,0,0,1,90.46,37.57Z").attr({
  class: 'cls-82',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aac');
group_bx.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bx'
});
var group_by = rsr.set();
var path_aad = rsr.path("M88.71,41.35s-.21.15-.18.33a1.83,1.83,0,0,1,0,.31l.71.25h.31a1.88,1.88,0,0,0,1.25.44c.73,0,1.15-.21.8-.55a3.07,3.07,0,0,0-1.09-.52l-.23-.51Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aad');
var path_aae = rsr.path("M90.52,41.6a3.07,3.07,0,0,1,1.09.52.31.31,0,0,1,.13.22h0a1.89,1.89,0,0,1-1.41,0c-.63-.33-.65-.73-.65-.73l.63-.46Z").attr({
  class: 'cls-97',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aae');
var path_aaf = rsr.path("M90.65,35.38v.74a8.89,8.89,0,0,1-.21,1.45A9.64,9.64,0,0,0,90.38,39c0,.45,0,.89.05,1.34l.06.56c0,.14.11.37.06.5s-.58.37-.87.38a2.85,2.85,0,0,1-.65,0,2.7,2.7,0,0,0,0-.28,6.14,6.14,0,0,1,0-2,3.54,3.54,0,0,0,0-.86c-.06-.33-.11-.67-.16-1a2.54,2.54,0,0,1,0-.91,2.24,2.24,0,0,0-.06-1.09,1.08,1.08,0,0,0-.08-.19Z").attr({
  class: 'cls-96',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaf');
var path_aag = rsr.path("M90.65,35.38v.28l-1.52.05s-.1.54-.11.61A4.17,4.17,0,0,0,89,37c0,.35,0,.7.09,1,.07.75.24,1.49.3,2.23a9.1,9.1,0,0,1,0,1c0,.09,0,.32-.07.39s-.37,0-.47-.07a.26.26,0,0,1-.18-.31,5.7,5.7,0,0,0,0-1.75,17.68,17.68,0,0,0-.23-1.78,4.63,4.63,0,0,1-.07-1.7,3.16,3.16,0,0,0,0-.69Z").attr({
  class: 'cls-98',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aag');
group_by.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_by'
});
var group_bz = rsr.set();
var path_aah = rsr.path("M92.2,34.69s.28.27.38.38.45.29.34.35-.48-.22-.48-.22l.18.63s0,.08-.07.09h-.11s.07.16-.26.07-.26-.08-.32-.2a1.83,1.83,0,0,1-.23-.53,4,4,0,0,1-.09-.5Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aah');
var path_aai = rsr.path("M 91.87 32.62 92.54 34.69 91.78 34.89 91.27 35.02 90.96 34.11 90.39 32.43 91.87 32.62 z").attr({
  class: 'cls-100',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aai');
var path_aaj = rsr.path("M91.49,35.67l-1.76.53s.48-3.35.46-3.4c-.24-.58-.33-1.69-.46-1.82l-.15-.16a.17.17,0,0,1,0-.25l.09,0h.06l.3-.06.17,0h0l.41-.05h.46l.09.08c0,.21.11,1.62.12,1.92S91.49,35.67,91.49,35.67Z").attr({
  class: 'cls-101',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaj');
var path_aak = rsr.path("M91.41,30.35c.23,0,.51.07.57.25a3,3,0,0,1,.08,1.11,3.28,3.28,0,0,1,0,.43c0,.36-.09.72-.13,1.08a2.63,2.63,0,0,0,0,.49,4.43,4.43,0,0,0,.06.51c.06.38.08.74.11,1.12,0,.19.06.28-.08.45a.66.66,0,0,1-.35.25l-.13,0h0a.36.36,0,0,1-.41-.38c0-1,0-3.4,0-3.54,0-.3.22-1.48.19-1.69l-.09-.08h-.46l-.41.05h0l-.17,0-.3.06h-.06l-.09,0a.17.17,0,0,0,0,.25l.15.16a19.13,19.13,0,0,1,.75,1.91s0,2.14,0,3.22a.77.77,0,0,1-.77.63,7,7,0,0,1-.9,0l-.53-.13V31l1-.32a6.58,6.58,0,0,1,1.65-.3h.48Z").attr({
  class: 'cls-102',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aak');
var path_aal = rsr.path("M88.31,31a.67.67,0,0,1,.24-.11l.73-.23.37-.11h0l.36-.08h.06l.37-.06h.05a2.56,2.56,0,0,1,.39,0h.48l.2,0h0l.11,0a.67.67,0,0,1,.22.13c-.25,0-.5,0-.74.06a.64.64,0,0,0,0-.14l-.09-.08h-.46l-.41.05h0l-.17,0-.3.06h-.06l-.09,0a.17.17,0,0,0,0,.25l.14.14-.63.2v5.57H88.8a4.11,4.11,0,0,1-.85-.31c.13-.73.25-1.47.31-2.2A9.84,9.84,0,0,0,88,32.06c0-.16-.11-.29-.06-.46a1,1,0,0,1,.28-.42c0-.05,0-.1.09-.14Z").attr({
  class: 'cls-100',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aal');
group_bz.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_bz'
});
var group_ca = rsr.set();
var path_aam = rsr.path("M111.78,38.07c0,.44,0,.87,0,1.3s-.08.78.25,1a.62.62,0,0,0,.19.07c.09,0,1.14.18,1.14.18.06-.35.07-.72.15-1.08s.22-.78.31-1.15.2-.61.27-.91,0-.48.15-.72.31-.4.55-.34.24.09.3,0a.11.11,0,0,0,0-.08c0-.26,0-.64-.3-.82a2.5,2.5,0,0,0-1.5-.29,2,2,0,0,0-1.29.78A4.34,4.34,0,0,0,111.78,38.07Z").attr({
  class: 'cls-94',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aam');
var path_aan = rsr.path("M113.45,48.75s.09-.49.54-.16a1.88,1.88,0,0,1,.4.45l.22.33a.46.46,0,0,0,.26.18H115l.11,0a.05.05,0,0,0,0,0,0,0,0,0,0,0,0s-.08-.07-.13-.1a2.71,2.71,0,0,1,.4,0c.07,0,.23,0,.26.07s0,.42-.11.47-.52.29-.85.1a8.88,8.88,0,0,1-.81-.59l0,.69h-.4l0-.81S113.19,49.13,113.45,48.75Z").attr({
  class: 'cls-110',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aan');
group_ca.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ca'
});
var group_cb = rsr.set();
var path_aao = rsr.path("M111.85,43.62c.08,0,0,.47.05.53a.83.83,0,0,0,.06.21,5.64,5.64,0,0,0,.48,1.1,2,2,0,0,1,.34.91,8.09,8.09,0,0,1-.19.82,1.85,1.85,0,0,0,0,.41,4.36,4.36,0,0,0,.26.92c0,.09.1.26.23.31a1.6,1.6,0,0,0,.49,0,.6.6,0,0,0,.36-.12.34.34,0,0,0,.13-.28l-.16-5.6a2.41,2.41,0,0,1-1.86.79Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aao');
var path_aap = rsr.path("M113.52,46.4a2.45,2.45,0,0,1-.16.92,1.87,1.87,0,0,0,0,.91,1.4,1.4,0,0,1,.07.4s0,.26,0,.3c.13,0,.28-.07.4-.13a.63.63,0,0,1-.07-.22c0-.1,0-.2,0-.29s0-.23-.06-.34a2.89,2.89,0,0,1,0-.72,3.72,3.72,0,0,1,.08-.57.91.91,0,0,0,0-.49,3.82,3.82,0,0,1-.3-1.23A5.22,5.22,0,0,0,113.52,46.4Z").attr({
  class: 'cls-106',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aap');
var path_aaq = rsr.path("M112.64,48.42s.1-.49.54-.16a1.67,1.67,0,0,1,.4.44,2.44,2.44,0,0,0,.23.33.4.4,0,0,0,.26.19h.13a.19.19,0,0,0,.12,0,.05.05,0,0,0,0,0v0a.36.36,0,0,0-.14-.1,1.88,1.88,0,0,1,.41,0c.06,0,.22,0,.25.07s0,.42-.1.46-.53.29-.85.1a6.75,6.75,0,0,1-.82-.59l0,.7h-.39l0-.82S112.38,48.79,112.64,48.42Z").attr({
  class: 'cls-107',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaq');
var path_aar = rsr.path("M113.77,46.68s0,.09,0,.14a4,4,0,0,1,0,.85c0,.12,0,.24-.06.36a2.15,2.15,0,0,0,.13.79.84.84,0,0,0,.3.4,1.52,1.52,0,0,0,.47.35.71.71,0,0,0,.32.07s.2,0,.22,0a0,0,0,0,0,0-.05c-.08-.11-.17-.21-.25-.31a.43.43,0,0,1-.06-.31c0-.27,0-.55,0-.82a2.83,2.83,0,0,1,0-.41c0-.25.09-.51.13-.76s0-.47,0-.7.07-.67.1-1a2.53,2.53,0,0,0,0-.91,2.12,2.12,0,0,1,0-1.09.76.76,0,0,1,.06-.2l-2,.06c0,.25,0,.5,0,.75a9.1,9.1,0,0,0,.3,1.43c0,.23.15.43.2.66S113.74,46.43,113.77,46.68Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aar');
var path_aas = rsr.path("M115.24,45.11c0-.39,0-.79,0-1.19a5.1,5.1,0,0,0,0-.68c0-.32-.92-.18-1.19-.17l-.91,0v.29l1.53-.05s.13.54.14.6a4.29,4.29,0,0,1,.08.71c0,.35,0,.71,0,1.06,0,.75-.16,1.49-.17,2.25a9.07,9.07,0,0,0,0,1,.87.87,0,0,0,.27.62l0,0h.06a.48.48,0,0,0,.24-.07.1.1,0,0,0,0,0s0,0,0-.06l0,0c-.11-.08-.28,0-.37-.14a.35.35,0,0,1-.08-.22,4.49,4.49,0,0,1,0-.82c0-.14,0-.27,0-.41,0-.35.09-.69.13-1,.07-.53.14-1.05.17-1.57C115.23,45.2,115.24,45.15,115.24,45.11Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aas');
var path_aat = rsr.path("M115.21,41.71a4.88,4.88,0,0,0,.21,1.7c.11.36.32.69.44,1s.18.56,0,.74a3.77,3.77,0,0,1-1.37.59l-.14,0-.13,0a3.7,3.7,0,0,1-.77.06h-.25l-.27,0-.34-.06-.28-.07-.13,0a.55.55,0,0,1-.41-.64c0-.57,0-2.46,0-3a8.08,8.08,0,0,0,0-1.39c0-.29,0-.58,0-.87s0-.53,0-.8a1.33,1.33,0,0,0,0-.2.84.84,0,0,0-.09-.25.28.28,0,0,1,.06-.28.41.41,0,0,1,.11-.07,2.19,2.19,0,0,1,1-.2L114,38l1,.73.4,1.43a3.71,3.71,0,0,1,0,.88,4.76,4.76,0,0,0-.19.61Z").attr({
  class: 'cls-108',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aat');
var path_aau = rsr.path("M114.28,38.23,114,38,112.76,38h-.17c-.13.08-.37.32.33.43A2.63,2.63,0,0,0,114.28,38.23Z").attr({
  class: 'cls-90',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aau');
var path_aav = rsr.path("M112.78,37.57l0,.43s.1.15.63.16S114,38,114,38l0-.42Z").attr({
  class: 'cls-91',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aav');
var path_aaw = rsr.path("M112.76,38s.1.15.63.16h.21l0-.42-.84,0Z").attr({
  class: 'cls-92',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaw');
var path_aax = rsr.path("M113.61,37.74s.91.23,1-.16.17-.57.17-.57.26-.1.18-.19-.2-.2-.19-.25.14-.27,0-.39a5.34,5.34,0,0,0-.82-.44l-1,.84.06,1Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aax');
var path_aay = rsr.path("M117.28,41.13a.37.37,0,0,0,.34,0c.15-.08.39-.21.62-.31.4-.18.64-.26.49-.4a1.84,1.84,0,0,0-.3-.24.38.38,0,0,0-.26,0,.41.41,0,0,0-.17,0,3,3,0,0,1-.36.15v-.07a.14.14,0,0,0,0-.09.15.15,0,0,0-.17,0,.21.21,0,0,0-.11.15l-.07.14a.47.47,0,0,1-.35.32C116.73,40.81,117.06,41,117.28,41.13Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aay');
var path_aaz = rsr.path("M116.92,40.58l-.61.23a.17.17,0,0,1-.2-.06l-.74-1.8a1,1,0,0,0-.92-.18c-.52.17-.57.5-.45.83s.68,1.62.85,2a.76.76,0,0,0,.89.44c.42-.11,1.81-.61,1.81-.61s.36-.35.11-.66S116.92,40.58,116.92,40.58Z").attr({
  class: 'cls-108',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aaz');
var path_aba = rsr.path("M116.06,41.58a.73.73,0,0,1-.66-.14.81.81,0,0,1-.23-.3c-.16-.37-.31-.73-.47-1.09l-.27-.65-.09-.22a.64.64,0,0,0-.24-.31,3.44,3.44,0,0,0-2.21-.71c-.34,0-.38.34-.38.55a6.12,6.12,0,0,0,.09,1,8.47,8.47,0,0,1,.09.85.83.83,0,0,1,0,.22,4.84,4.84,0,0,1,0,.53v.07a1.09,1.09,0,0,1,0,.18v.17c0,.11,0,.21,0,.32,0,.57,0,2.46,0,3a.55.55,0,0,0,.41.64l.13,0,.28.07.34.06.27,0h.57l.23,0h0l.34-.06.12,0a6,6,0,0,0,.69-.22c-.12-.38-.28-.77-.37-1.15s-.43-2.13-.49-2.54a6.84,6.84,0,0,1,0-1.11c0-.16,0-.33,0-.49.2.49.47,1.1.57,1.35a.76.76,0,0,0,.89.44c.42-.11,1.81-.61,1.81-.61a.69.69,0,0,0,.2-.44C117.41,41.13,116.41,41.48,116.06,41.58Z").attr({
  class: 'cls-109',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aba');
group_cb.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cb'
});
var group_cc = rsr.set();
var path_abb = rsr.path("M76.26,34.72a.6.6,0,0,1,.67.45.31.31,0,0,1-.08.21,1.86,1.86,0,0,1-1,.47c-.39.08-.34.12-.55.07a1.15,1.15,0,0,0-.33,0l-.11.13-.87.16s-.47-.2-.45-.39a2.5,2.5,0,0,1,.45-1l1.61-.07s.11.09.42,0Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abb');
var path_abc = rsr.path("M77.51,35.39a.61.61,0,0,1,.67.45.3.3,0,0,1-.07.21,1.92,1.92,0,0,1-1,.47c-.38.08-.34.12-.55.07a1.5,1.5,0,0,0-.33,0l-.11.13-.87.15s-.47-.19-.45-.39a2.51,2.51,0,0,1,.45-1l1.61-.08s.12.09.42,0Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abc');
var path_abd = rsr.path("M77.19,26.74a.39.39,0,0,0,.35-.06,5.14,5.14,0,0,1,.55-.42c.36-.24.58-.35.39-.48a2.62,2.62,0,0,0-.37-.19.34.34,0,0,0-.28,0,.48.48,0,0,0-.16.08l-.33.21a.11.11,0,0,0,0-.08.13.13,0,0,0,0-.09.15.15,0,0,0-.18,0c-.07,0-.07.11-.08.17L77,26a.43.43,0,0,1-.28.39C76.53,26.5,76.92,26.65,77.19,26.74Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abd');
var path_abe = rsr.path("M77.14,25.67l-.6.29a.18.18,0,0,1-.21-.05l-1-1.81a1.06,1.06,0,0,0-1-.11.58.58,0,0,0-.36.9c.15.28.93,1.63,1.16,2a.89.89,0,0,0,.28.3.8.8,0,0,0,.71.09c.43-.15,1.8-.78,1.8-.78s.33-.39,0-.69A.93.93,0,0,0,77.14,25.67Z").attr({
  class: 'cls-111',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abe');
var path_abf = rsr.path("M76.38,26.78a.86.86,0,0,1-1-.39c-.24-.4-1-1.75-1.17-2a1,1,0,0,1-.09-.27.55.55,0,0,0-.17.8c.15.28.93,1.63,1.16,2a.89.89,0,0,0,.28.3.8.8,0,0,0,.71.09c.43-.15,1.8-.78,1.8-.78a.64.64,0,0,0,.14-.47C77.72,26.2,76.73,26.65,76.38,26.78Z").attr({
  class: 'cls-112',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abf');
var path_abg = rsr.path("M73.54,30h-.22c.13.76.33,1.5.41,2.26a9.51,9.51,0,0,1,.06,1.41c0,.43-.08.86-.11,1.3a.33.33,0,0,0,.06.27.59.59,0,0,0,.24.11,4.11,4.11,0,0,0,1.16.1.61.61,0,0,0,.37-.13.36.36,0,0,0,.15-.28l-.17-5.85A2.53,2.53,0,0,1,73.54,30Z").attr({
  class: 'cls-96',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abg');
var path_abh = rsr.path("M75,31.71a.14.14,0,0,0,0-.07c-.06-.13-.22-.36-.21-.49-.06.87,0,1.74,0,2.61a14.31,14.31,0,0,0,0,1.68,1.49,1.49,0,0,0,.42,0c0-.1,0-.19,0-.26l0-.59a13.09,13.09,0,0,0,0-1.4c0-.36,0-.72-.08-1.08A1.59,1.59,0,0,0,75,31.71Z").attr({
  class: 'cls-82',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abh');
var path_abi = rsr.path("M74.63,29.43c0,.26,0,.52.05.78A9.87,9.87,0,0,0,75,31.7a10.6,10.6,0,0,1,.15,1.48,13.09,13.09,0,0,1,0,1.4l0,.59c0,.14-.1.39,0,.52s.63.35.92.35a2.68,2.68,0,0,0,.69-.09,1.42,1.42,0,0,1,0-.29,6.72,6.72,0,0,0-.09-2,3.34,3.34,0,0,1-.06-.89c0-.35.07-.7.11-1.06a2.53,2.53,0,0,0,0-.95,2.32,2.32,0,0,1,0-1.14,1.17,1.17,0,0,1,.06-.2Z").attr({
  class: 'cls-96',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abi');
var path_abj = rsr.path("M74.63,29.43l0,.3,1.59-.05s.14.56.15.63a3.05,3.05,0,0,1,.08.74c0,.36,0,.73,0,1.1,0,.78-.16,1.56-.18,2.35a9.74,9.74,0,0,0,0,1.08c0,.1,0,.33.1.4a.71.71,0,0,0,.49-.1.27.27,0,0,0,.16-.33,6.25,6.25,0,0,1-.16-1.83c0-.62.06-1.24.13-1.86a5.07,5.07,0,0,0,0-1.78,3.47,3.47,0,0,1-.1-.72Z").attr({
  class: 'cls-98',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abj');
var path_abk = rsr.path("M77.28,28c0,.06,0,.12,0,.18a9.28,9.28,0,0,0,.09,1.06c0,.27.26.78,0,1a3.94,3.94,0,0,1-1.5.52l-.15,0-.14,0a4.27,4.27,0,0,1-.8,0l-.26,0-.27-.05-.35-.08-.28-.1-.13-.05a.55.55,0,0,1-.35-.7c.1-.59.31-1.16.4-1.74a9.13,9.13,0,0,0,.14-1.46c0-.31,0-.61.06-.91s.08-.55.11-.83c0-.07,0-.14,0-.2a.94.94,0,0,0-.06-.28.26.26,0,0,1,.1-.28.35.35,0,0,1,.12-.07,2.33,2.33,0,0,1,1.09-.13l1.27.17.93.84.24,1.52a8.78,8.78,0,0,1-.1.88c0,.16-.11.31-.14.47A.6.6,0,0,0,77.28,28Z").attr({
  class: 'cls-111',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abk');
var path_abl = rsr.path("M74.15,24.08c-.36,0-.44.32-.46.54a6.82,6.82,0,0,0,0,1c0,.3,0,.59,0,.89a1.76,1.76,0,0,1,0,.23c0,.19,0,.37,0,.56v.07a1.11,1.11,0,0,0,0,.19.88.88,0,0,0,0,.17l-.06.34c-.09.58-.3,1.15-.4,1.74a.55.55,0,0,0,.35.7l.13.05.28.1.35.08.27.05.26,0,.27,0h.33l.36,0,.13,0a6.21,6.21,0,0,0,.75-.18c-.08-.41-.19-.81-.24-1.22a11.26,11.26,0,0,1-.18-1.28A7.77,7.77,0,0,1,76.3,27l.15-1.23c0-.14,0-.28,0-.42a.42.42,0,0,0,0-.24L76.36,25A3.39,3.39,0,0,0,74.15,24.08Z").attr({
  class: 'cls-112',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abl');
var path_abm = rsr.path("M76.62,24.32l-.26-.23-1.28-.17H74.9c-.14.07-.42.3.3.47A2.73,2.73,0,0,0,76.62,24.32Z").attr({
  class: 'cls-90',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abm');
var path_abn = rsr.path("M75.15,23.53l-.07.44s.08.16.63.21.65-.09.65-.09l.08-.43Z").attr({
  class: 'cls-91',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abn');
var path_abo = rsr.path("M75.08,24s.08.16.63.21h.22l.08-.44-.88-.08Z").attr({
  class: 'cls-92',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abo');
var path_abp = rsr.path("M76,23.76s.92.3,1.08-.09.25-.59.25-.59.28-.08.21-.18-.18-.22-.17-.27.18-.27.06-.41a5,5,0,0,0-.79-.51l-1.2.8-.07,1.06Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abp');
var path_abq = rsr.path("M76.23,23.3l.23-.07a2.29,2.29,0,0,1,.14-.61c.12-.24.26-.58.54-.49s.41.19.53.06,0-.43-.18-.61A2.4,2.4,0,0,0,76,21.17a2.09,2.09,0,0,0-1.44.72A1,1,0,0,0,74.67,23c.26.36.4.65.86.77s.54.05.54.05a1,1,0,0,0-.23-.39.34.34,0,0,1,.14-.55c.22,0,.32.1.27.23S76.23,23.3,76.23,23.3Z").attr({
  class: 'cls-94',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abq');
var path_abr = rsr.path("M79.61,27.54a.41.41,0,0,0,.36,0c.16-.09.4-.22.64-.33.42-.19.67-.27.51-.42a1.87,1.87,0,0,0-.31-.24.36.36,0,0,0-.27-.05l-.18.06a3,3,0,0,1-.38.15s0-.07,0-.08a.11.11,0,0,0,0-.08.15.15,0,0,0-.18-.05c-.07,0-.09.1-.12.16l-.06.14s0,.23-.38.34S79.38,27.42,79.61,27.54Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abr');
var path_abs = rsr.path("M79.06,27l-.65.2a.15.15,0,0,1-.2-.08l-.55-1.92a1,1,0,0,0-.92-.26c-.56.14-.66.49-.58.84s.5,1.74.63,2.16a.72.72,0,0,0,.2.33.71.71,0,0,0,.66.2c.46-.1,2-.52,2-.52s.42-.33.2-.67S79.06,27,79.06,27Z").attr({
  class: 'cls-111',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abs');
var path_abt = rsr.path("M78,27.94a.76.76,0,0,1-.86-.53c-.13-.42-.56-1.87-.63-2.16a1,1,0,0,1,0-.29.61.61,0,0,0-.37.77c.07.29.5,1.74.63,2.16a.72.72,0,0,0,.2.33.71.71,0,0,0,.66.2c.46-.1,2-.52,2-.52a.68.68,0,0,0,.26-.44C79.5,27.56,78.42,27.86,78,27.94Z").attr({
  class: 'cls-112',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abt');
group_cc.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cc'
});
var group_cd = rsr.set();
var path_abu = rsr.path("M97,50.19h0l-.16-.86,1,0-.11.87h0s-.06.09-.13.12a.63.63,0,0,1-.45,0A.18.18,0,0,1,97,50.19Z").attr({
  class: 'cls-135',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abu');
var path_abv = rsr.path("M97.7,49.15a1,1,0,0,0-.69,0c-.19.09-.18.23,0,.3a1,1,0,0,0,.69,0C97.9,49.36,97.9,49.23,97.7,49.15Z").attr({
  class: 'cls-136',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abv');
var path_abw = rsr.path("M97.63,49.19a.77.77,0,0,0-.54,0c-.15.07-.15.18,0,.24a.77.77,0,0,0,.54,0C97.78,49.35,97.78,49.25,97.63,49.19Z").attr({
  class: 'cls-135',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abw');
var path_abx = rsr.path("M97.09,49.37l0,0,0,0a.77.77,0,0,0,.54,0,.1.1,0,0,0,.05,0l-.05,0A.77.77,0,0,0,97.09,49.37Z").attr({
  class: 'cls-116',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abx');
group_cd.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cd'
});
var group_ce = rsr.set();
group_ce.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ce'
});
var group_cf = rsr.set();
var path_aby = rsr.path("M92.48,51.59l.07,2.33c0,.1.18.18.4.17s.38-.09.38-.19l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aby');
var path_abz = rsr.path("M94.66,52.23l.07,2.33c0,.1.17.18.39.17s.38-.09.38-.2l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_abz');
var path_aca = rsr.path("M94.3,50.46l.07,2.33c0,.1.18.18.4.17s.38-.09.38-.2l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aca');
var path_acb = rsr.path("M96.48,51.09l.07,2.33c0,.1.18.18.39.18s.38-.1.38-.2l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acb');
group_cf.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cf'
});
var group_cg = rsr.set();
var path_acc = rsr.path("M97.24,50.71a3.86,3.86,0,0,0-5,.15h-.1v.32c0,.69,1.2,1.21,2.63,1.17s2.58-.64,2.56-1.32v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acc');
var path_acd = rsr.path("M97.34,50.71c0,.69-1.13,1.27-2.56,1.32s-2.61-.48-2.63-1.17,1.13-1.27,2.56-1.31S97.32,50,97.34,50.71Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acd');
group_cg.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cg'
});
var group_ch = rsr.set();
var path_ace = rsr.path("M97.5,55c0-.17-.06-.31-.35-.29-.1,0-.23,0-.33,0s-.08,0-.12,0a.37.37,0,0,0-.14.07.41.41,0,0,0-.11.31,3.12,3.12,0,0,0,0,.44.28.28,0,0,0,0,.09.15.15,0,0,0,.09.06v-.11s.08.13.1.16a1.37,1.37,0,0,0,.15.21c.12.13.43.36.67.25a.32.32,0,0,0,.19-.37A4,4,0,0,0,97.5,55Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ace');
var path_acf = rsr.path("M97.35,51.29a.9.9,0,0,1,.44.91,2,2,0,0,0-.06.43,2.58,2.58,0,0,0,.25.92,4.57,4.57,0,0,0,.34.8l.07.07a.41.41,0,0,0,.23,0,.81.81,0,0,0,.38-.08.24.24,0,0,0,.08-.06.19.19,0,0,0,0-.19,4.15,4.15,0,0,1-.29-1.77,6.25,6.25,0,0,0,0-1,.73.73,0,0,0-.48-.6c-.22-.09-.43-.18-.66-.26a4.51,4.51,0,0,1-.52-.17,3.23,3.23,0,0,0-.42-.2,1.33,1.33,0,0,1-.47-.19s-.07,0-.07-.08c0-.38-.12-.19-.25-.56l.06-.08.07.19a3.18,3.18,0,0,1-.48.63,3,3,0,0,0-.48.37,1.68,1.68,0,0,0-.12.63,8.74,8.74,0,0,0,1.1.09l.88.06A1.17,1.17,0,0,1,97.35,51.29Z").attr({
  class: 'cls-115',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acf');
var path_acg = rsr.path("M97.58,53a5.27,5.27,0,0,0-.16.79,6.26,6.26,0,0,0,0,.75,2.53,2.53,0,0,1,0,.55.2.2,0,0,1-.14.19.36.36,0,0,1-.18,0,.71.71,0,0,1-.42-.26,1.13,1.13,0,0,1-.17-.39,6.52,6.52,0,0,1-.24-1.23c0-.26,0-.19,0-.44l.13-.62c.12-.59-2.78-.74-3-1.3a2.22,2.22,0,0,1-.15-.87c.05-.31.16-.63.22-.94,0,.07.36.2.42.22a1.28,1.28,0,0,0,.39,0,3.58,3.58,0,0,0,1-.29c1.13-.48-.35-.25.47-.37a.92.92,0,0,1,.16.49c0,.35.37.57,0,.78s-.74-.2-.84,0,.41.44.53.51a1.3,1.3,0,0,0,.42.15,12.19,12.19,0,0,1,1.21.39,1.25,1.25,0,0,1,.42.26c.27.31.07.75,0,1.07A5.18,5.18,0,0,0,97.58,53Z").attr({
  class: 'cls-116',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acg');
var path_ach = rsr.path("M99.71,54.76a.88.88,0,0,0-.27-.31l-.24-.19a.76.76,0,0,1-.09-.09s-.06-.05-.07-.07c.06.31-.41.24-.6.11a1.05,1.05,0,0,1-.39-.53c-.1.22-.11.32,0,.49s.12.14.16.2a1.13,1.13,0,0,0,.22.27,1.45,1.45,0,0,0,.35.26,1.09,1.09,0,0,0,.51.11.66.66,0,0,0,.37-.09A.1.1,0,0,0,99.71,54.76Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ach');
var path_aci = rsr.path("M 98.01 54.09 98.05 54.59 98.19 54.66 98.25 54.29 98.01 54.09 z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aci');
group_ch.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ch'
});
var group_ci = rsr.set();
group_ci.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ci'
});
var group_cj = rsr.set();
var path_acj = rsr.path("M96.39,46.5a2.25,2.25,0,0,0,.08.24,1.12,1.12,0,0,1,0,.13.89.89,0,0,0,.08.17,1.58,1.58,0,0,1,.1.47.56.56,0,0,1-.23.48c-.5.46-.29,1.11-.21,1.66a1.06,1.06,0,0,0,0,.19c0,.07.1.12.12.17s0,.18-.12.23a2.71,2.71,0,0,1-1.83.4c-.06,0-.68-.09-.68-.11,0-.23,0-.56,0-.79a1.88,1.88,0,0,0-.17-1.07,5.13,5.13,0,0,1-.38-.57c0-.1-.07-.2-.1-.3L93,47.35c0-.15-.11-.12,0-.27a1.3,1.3,0,0,1,.41-.31,6.89,6.89,0,0,0,1-.77,1.63,1.63,0,0,1,.31-.27c.15-.09.29.28.47.31a4.28,4.28,0,0,1,.91.12A.48.48,0,0,1,96.39,46.5Z").attr({
  class: 'cls-117',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acj');
var path_ack = rsr.path("M95.13,46a1.11,1.11,0,0,0-.61.09,6.13,6.13,0,0,0-.6.22c-.33.15-1,.43-1,.72a1.16,1.16,0,0,0,.2.91,2.39,2.39,0,0,1,.36,1.17,4.56,4.56,0,0,1-.08.82,3.66,3.66,0,0,1-.12.5s1,.2,1,.2a1.8,1.8,0,0,0-.07-.27,3.38,3.38,0,0,1-.11-.34,3.53,3.53,0,0,1-.08-.72.55.55,0,0,1,0-.18.57.57,0,0,1,.12-.15c.25-.27.6-.46.87-.71a1.88,1.88,0,0,1-.47.17.91.91,0,0,1-.52,0,.55.55,0,0,1-.33-.37,1.15,1.15,0,0,1,0-.45v-.2c0-.06,0-.14,0-.2a2.52,2.52,0,0,1-.18.65.22.22,0,0,1-.09.1c-.2.1-.25-.27-.28-.34s-.11,0-.13-.17a.29.29,0,0,1,0-.16.42.42,0,0,1,.12-.15,2.87,2.87,0,0,1,.81-.59,5.07,5.07,0,0,1,1-.46,10.22,10.22,0,0,1,1.1.1A3.2,3.2,0,0,0,95.13,46Z").attr({
  class: 'cls-118',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ack');
var path_acl = rsr.path("M95.37,46.44a.21.21,0,0,1-.11.31.58.58,0,0,1-.37,0c-.18-.06-.26-.19-.41-.27l-.41-.19s-.1,0-.15,0a2.49,2.49,0,0,0,.6-.22c.13,0,.21-.14.37-.14a.37.37,0,0,1,.28.1.44.44,0,0,1,.12.22A1.42,1.42,0,0,0,95.37,46.44Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acl');
var path_acm = rsr.path("M94.64,46.48a1,1,0,0,1,0-.39c0-.12,0,.09,0,0v0l-.1,0a4.76,4.76,0,0,0-.6.23s0-.09.66.26l.15.07A1,1,0,0,1,94.64,46.48Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acm');
group_cj.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cj'
});
var group_ck = rsr.set();
var path_acn = rsr.path("M94.18,45.62v.58a.48.48,0,0,0,.38.27,1.12,1.12,0,0,0,.62,0l.1-.06v-.58Z").attr({
  class: 'cls-119',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acn');
var path_aco = rsr.path("M95.27,45.79v.14l-.72-.12v.59a.3.3,0,0,0,0,.08h0a.48.48,0,0,1-.38-.27v-.58Z").attr({
  class: 'cls-120',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aco');
group_ck.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ck'
});
var group_cl = rsr.set();
var path_acp = rsr.path("M95.88,44.47a2.34,2.34,0,0,1,0,1,.69.69,0,0,1-.77.55c-.31,0-1.29-.31-1.38-.76a3.45,3.45,0,0,1,.43-1.44Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acp');
var path_acq = rsr.path("M95.88,44.47s0,.05,0,.13a1.78,1.78,0,0,0-.66,0c-.24.07-.73.13-.75.27s-.2.41-.15.6.2.33.17.48c-.36-.13-.76-.35-.81-.63a3.45,3.45,0,0,1,.43-1.44Z").attr({
  class: 'cls-121',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acq');
group_cl.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cl'
});
var group_cm = rsr.set();
var path_acr = rsr.path("M92.91,43.5c-.07.24.14.47.48.53a.65.65,0,0,0,.73-.33c.07-.24-.14-.47-.47-.53A.66.66,0,0,0,92.91,43.5Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acr');
var path_acs = rsr.path("M93.4,44.89a3,3,0,0,0,.78,1,.22.22,0,0,1,0-.08.71.71,0,0,0-.25-.38.45.45,0,0,1-.11-.13.2.2,0,0,1,0-.2.27.27,0,0,1,.3-.08.38.38,0,0,1,.13.12,3.38,3.38,0,0,1,.13.42,3.13,3.13,0,0,1,.08-.5,1.1,1.1,0,0,0,0-.4l-.06-.13a.55.55,0,0,1,.16.24,5.84,5.84,0,0,0,.78-.11.71.71,0,0,0-.07-.26.43.43,0,0,1,.16.24,2.44,2.44,0,0,0,.52-.11.59.59,0,0,0-.26-.41,1.69,1.69,0,0,0-.3-.17,3.12,3.12,0,0,0-.46-.17,2,2,0,0,0-1,0l-.12,0a.49.49,0,0,1-.11,0C93.1,44.09,93.4,44.89,93.4,44.89Z").attr({
  class: 'cls-94',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acs');
group_cm.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cm'
});
var group_cn = rsr.set();
var path_act = rsr.path("M107.06,58.33c0,.68-1.13,1.27-2.56,1.31s-2.61-.48-2.63-1.16,1.12-1.27,2.56-1.32S107,57.64,107.06,58.33Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_act');
var path_acu = rsr.path("M 94.31 51.1 93.55 51.47 93.7 56.83 94.46 56.47 94.31 51.1 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acu');
var path_acv = rsr.path("M 92.98 51.24 93.55 51.47 93.7 56.83 93.13 56.6 92.98 51.24 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acv');
var path_acw = rsr.path("M 99.03 52.99 98.28 53.36 98.43 58.72 99.19 58.36 99.03 52.99 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acw');
var path_acx = rsr.path("M 97.71 53.13 98.28 53.36 98.43 58.72 97.86 58.49 97.71 53.13 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acx');
var path_acy = rsr.path("M 104.1 50.65 103.35 51.02 103.5 56.38 104.26 56.02 104.1 50.65 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acy');
var path_acz = rsr.path("M 102.78 50.79 103.35 51.02 103.5 56.38 102.93 56.15 102.78 50.79 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_acz');
var path_ada = rsr.path("M104.9,50.79h0l0-.43-.23-.17a1.74,1.74,0,0,0-.79-.58l-.05,0a9.54,9.54,0,0,0-7.45.23l-3.92,1.84a1.74,1.74,0,0,0-.84.78l-.14.1,0,.46h0a1.47,1.47,0,0,0,1,1.29c2.33.94,5.92.5,8.18-.57L104,52.24A1.44,1.44,0,0,0,104.9,50.79Z").attr({
  class: 'cls-126',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ada');
var path_adb = rsr.path("M92.52,53.83h0c2.32.93,5.91.5,8.18-.57l3.23-1.48a1.37,1.37,0,0,0-.08-2.64l0,0a9.52,9.52,0,0,0-7.44.23L92.44,51.2A1.36,1.36,0,0,0,92.52,53.83Z").attr({
  class: 'cls-49',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adb');
group_cn.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cn'
});
var group_co = rsr.set();
var path_adc = rsr.path("M92.34,58.54h0c2.32.93,5.91.5,8.18-.57l3.23-1.48a1.37,1.37,0,0,0-.08-2.64l0,0a9.54,9.54,0,0,0-7.45.23l-3.92,1.85A1.37,1.37,0,0,0,92.34,58.54Z").attr({
  class: 'cls-123',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adc');
group_co.attr({
  'class': 'cls-122',
  'parent': 'group_a',
  'name': 'group_co'
});
var group_cp = rsr.set();
group_cp.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cp'
});
var group_cq = rsr.set();
var path_add = rsr.path("M95.62,49.32s.32,0,.44.06.41,0,.41.06-.39.07-.39.07l.52.29s.06,0,0,.08l0,0s.14.06-.08.14-.19.06-.3,0a2.26,2.26,0,0,1-.46-.21c-.23-.14-.38-.25-.38-.25Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_add');
var path_ade = rsr.path("M 95.61 49.77 94.91 49.73 95.17 49.25 95.62 49.32 95.61 49.77 z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ade');
group_cq.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cq'
});
var group_cr = rsr.set();
var path_adf = rsr.path("M92.76,47.17a.48.48,0,0,1,.44-.42c.43-.08.67.33.8.56a1,1,0,0,1,0,.1,1.71,1.71,0,0,1,.14.49,1.52,1.52,0,0,1,0,.21,1.42,1.42,0,0,0-.07.49,1.13,1.13,0,0,0,.06.32,1.28,1.28,0,0,1,.07.21l1.42.11-.33.37-.74,0h-.62a.34.34,0,0,1-.26-.08.87.87,0,0,1-.21-.22.82.82,0,0,1-.11-.28c-.12-.4-.2-.59-.33-1A2.79,2.79,0,0,1,92.76,47.17Z").attr({
  class: 'cls-127',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adf');
var path_adg = rsr.path("M92.75,47.17a.5.5,0,0,1,.46-.42.39.39,0,0,0-.1.24l.52,2.42,1.67.2,0,.27a7.67,7.67,0,0,0-.91-.1l-.69-.08a.56.56,0,0,1-.44-.32,1.11,1.11,0,0,1-.08-.35,2.94,2.94,0,0,0-.19-.64c-.07-.22-.16-.43-.23-.65A1.19,1.19,0,0,1,92.75,47.17Z").attr({
  class: 'cls-118',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adg');
group_cr.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cr'
});
var group_cs = rsr.set();
var path_adh = rsr.path("M96.76,48.89l.16.31c.06.09.06.31.16.29s0-.3,0-.3l.48.33a.08.08,0,0,0,.1,0l0,0s.11.09.18-.08,0-.15,0-.23a1.63,1.63,0,0,0-.36-.3l-.4-.24Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adh');
var path_adi = rsr.path("M 96.86 48.98 96.6 48.75 96.82 48.47 97.11 48.63 96.86 48.98 z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adi');
var path_adj = rsr.path("M96.6,47.16v0c0-.11-.09-.21-.13-.32a1.74,1.74,0,0,0-.13-.36c0-.05,0-.13-.09-.18s-.38-.14-.56-.19L95.41,46h.44a1.59,1.59,0,0,1,.38.07c.16,0,.2.17.25.28a1.59,1.59,0,0,1,.16.43l0,.24a2.09,2.09,0,0,0,0,.35c0,.1.06.19.09.29.1.27.25.67.34.94v0l0,0a1,1,0,0,1-.53.1c0-.15-.14-.44-.2-.59s0-.09,0-.15a1.06,1.06,0,0,0,.15-.15l.08-.12a.59.59,0,0,0,0-.32A1.09,1.09,0,0,0,96.6,47.16Z").attr({
  class: 'cls-118',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adj');
group_cs.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cs'
});
var group_ct = rsr.set();
var path_adk = rsr.path("M106.14,53.81a1.2,1.2,0,0,1,.54.13,1.66,1.66,0,0,1,.32.38c.13.14.08.29,0,.46a.76.76,0,0,1-.11.32,1,1,0,0,1-.22.18,4.11,4.11,0,0,1-1.55.51,10.39,10.39,0,0,1-1.68.09,3.52,3.52,0,0,1-.71-.18l-.75-.24c-.12,0-.47-.19-.58-.08s0,.41,0,.51c0,.33-.06.66-.1,1s.08.55,0,.8-.25.19-.41.23a1.4,1.4,0,0,1-1-.14c-.14-.07,0-.27,0-.37a5.83,5.83,0,0,1,0-.59c0-.67,0-1.34,0-2a.72.72,0,0,1,.66-.78,1.29,1.29,0,0,1,.33,0,11.25,11.25,0,0,1,1.29.12c.51.09,1,.09,1.56.13a4.61,4.61,0,0,0,1.37-.26A3.22,3.22,0,0,1,106.14,53.81Z").attr({
  class: 'cls-130',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adk');
var path_adl = rsr.path("M106.77,54l0,0s-.39-.17-.45-.11a.69.69,0,0,0-.22.32,2.78,2.78,0,0,0-.08.49,1.34,1.34,0,0,1-.64.84,3,3,0,0,1-2.55,0,4.88,4.88,0,0,0-.78-.31,1.37,1.37,0,0,0-.57,0,.34.34,0,0,0-.2.1.13.13,0,0,0,0,.12,16.9,16.9,0,0,1-.09,1.88c0,.2,0,.4-.07.59a.43.43,0,0,0,.26-.18c.13-.25,0-.54,0-.8s.07-.66.1-1c0-.1-.09-.45,0-.51s.46,0,.58.08c.48.17,1,.27,1.49.43a3.38,3.38,0,0,0,1.73,0,6.19,6.19,0,0,0,.62-.13,2.55,2.55,0,0,0,.9-.4c.24-.2.21-.45.22-.7a.7.7,0,0,0,0-.29A1.15,1.15,0,0,0,106.77,54Z").attr({
  class: 'cls-128',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adl');
group_ct.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ct'
});
var group_cu = rsr.set();
var path_adm = rsr.path("M101.34,57.83a.09.09,0,0,1,0,.05.61.61,0,0,1,0,.14c0,.09,0,.23-.06.3s-.72.08-1,0a.19.19,0,0,1-.1,0c-.06,0-.07-.09-.14-.12a.48.48,0,0,0-.18-.06,1,1,0,0,1-.17,0,.48.48,0,0,0-.12,0h-.25a1.8,1.8,0,0,1-.89-.28.4.4,0,0,1-.08-.38c.07-.23.58-.22.83-.23a2,2,0,0,0,.84-.1c.19-.1.54.19.65.26a.86.86,0,0,0,.36.23C101.25,57.63,101.32,57.71,101.34,57.83Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adm');
var path_adn = rsr.path("M99.23,57.2c-.25,0-.76,0-.83.23a.57.57,0,0,0,0,.13,1.08,1.08,0,0,0,.76.15c.57,0,.67-.11.67-.11s.22,0,.2-.18a.8.8,0,0,1,0-.32A2.13,2.13,0,0,1,99.23,57.2Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adn');
var path_ado = rsr.path("M102.43,55.79a.66.66,0,0,0-.28,0c-.37.11-.26.49,0,.64a1.14,1.14,0,0,1,.26.28c.05.08,0,.17.1.25a.63.63,0,0,0,.54.23,1.12,1.12,0,0,0,.45-.08.33.33,0,0,0,.22-.17.2.2,0,0,0,0-.07,1.83,1.83,0,0,0,0-.33c0-.14-.29-.07-.4-.16a1.58,1.58,0,0,0-.29-.22c-.09,0-.14-.15-.21-.22a.66.66,0,0,0-.34-.15Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ado');
var path_adp = rsr.path("M103.5,54.51c0-.14.51-.08.5-.23s.11-.2.16-.36a5.73,5.73,0,0,0,.36-1c0-.12-1-.09-1.12-.12a.58.58,0,0,0-.26,0,4.9,4.9,0,0,0-.85.35c-.23.14-.2.36-.21.58s0,.29,0,.43a8.54,8.54,0,0,0,.05,1,10.8,10.8,0,0,0,.26,1.49c0,.06,0,.11.08.14a.78.78,0,0,0,.22,0,1.38,1.38,0,0,0,.7-.07c.14-.06.27-.13.41-.18,0-.09,0-.17,0-.26s-.06-.46-.11-.68A2.91,2.91,0,0,1,103.5,54.51Z").attr({
  class: 'cls-128',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adp');
var path_adq = rsr.path("M103.32,53h-.17a2.28,2.28,0,0,0-.76.14c-.12.09-.06.3-.06.42a1.55,1.55,0,0,1,0,.22c0,.1-.06.2-.07.29a1.19,1.19,0,0,0,0,.42l0,.47c0,.12,0,.25,0,.37a3.73,3.73,0,0,0,.32.84l.16.36s.12.29.15.29a1.14,1.14,0,0,0,.4-.08c.11,0,.4-.12.42-.23s-.06-.08-.08-.12a.81.81,0,0,1,0-.27l-.09-.57a1.49,1.49,0,0,0-.13-.47.94.94,0,0,1-.12-.22.49.49,0,0,1,0-.24,9.81,9.81,0,0,1,.22-1.05c0-.14,1.21-.26,1.17-.4s-1.22-.11-1.3-.15Z").attr({
  class: 'cls-129',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adq');
group_cu.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cu'
});
var group_cv = rsr.set();
var path_adr = rsr.path("M102.44,56.39l.07,2.33c0,.1.18.18.39.17s.39-.09.38-.19l-.06-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adr');
var path_ads = rsr.path("M104.61,57l.07,2.33c0,.11.18.18.39.18s.39-.1.39-.2L105.39,57Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ads');
var path_adt = rsr.path("M104.26,55.26l.07,2.32c0,.11.18.19.39.18s.39-.1.38-.2L105,55.23Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adt');
var path_adu = rsr.path("M106.43,55.89l.07,2.33c0,.1.18.18.4.17s.38-.09.38-.19l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adu');
group_cv.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cv'
});
var group_cw = rsr.set();
var path_adv = rsr.path("M107.2,55.51a3.84,3.84,0,0,0-5,.15h-.09V56c0,.69,1.2,1.21,2.64,1.16s2.57-.63,2.55-1.31v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adv');
var path_adw = rsr.path("M107.3,55.51c0,.68-1.13,1.27-2.56,1.32s-2.61-.48-2.63-1.17,1.12-1.27,2.55-1.31S107.28,54.82,107.3,55.51Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adw');
group_cw.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cw'
});
var group_cx = rsr.set();
var path_adx = rsr.path("M103.07,53.06a7.14,7.14,0,0,0,.76-.8,1.39,1.39,0,0,0,.15-.19,1.53,1.53,0,0,0,.11-.27,1,1,0,0,0,0-.86,1.42,1.42,0,0,0-.72.68c-.14.23-.48.77-.61,1a.76.76,0,0,1-.64.42c-.29,0-1.67-.11-2-.14h0a.69.69,0,0,0,.26.29h0l1.26.11.8,0C102.75,53.37,102.92,53.18,103.07,53.06Z").attr({
  class: 'cls-134',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adx');
group_cx.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cx'
});
var group_cy = rsr.set();
group_cy.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cy'
});
var group_cz = rsr.set();
var path_ady = rsr.path("M105.9,49.5a.88.88,0,0,1,.68,0,.75.75,0,0,1,.34.41c.08.23.19.45.25.69a16.09,16.09,0,0,1-.38,3.43c-.07.31-1.14-1.44-1.2-1.53-.18-.29.59-1.48.46-1.79C106,50.59,105.51,49.6,105.9,49.5Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ady');
var path_adz = rsr.path("M106.9,49.89a.67.67,0,0,0-.32-.35.88.88,0,0,0-.68,0c-.09,0-.13.12-.13.27a4.46,4.46,0,0,0,.54-.06.83.83,0,0,1,.51.13Z").attr({
  class: 'cls-132',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_adz');
var path_aea = rsr.path("M105,49.41a1.24,1.24,0,0,1,.47,0,2.05,2.05,0,0,1,1,.32,1.81,1.81,0,0,1,.49,2.06,5.41,5.41,0,0,0,0,2.32,1.44,1.44,0,0,1,0,.58c-.14.24-.64.38-1,.44a6.29,6.29,0,0,1-2,.16,21.55,21.55,0,0,0-.18-2.52,5.16,5.16,0,0,0-.29-.74c-.12-.28-.28-.55-.37-.83a.47.47,0,0,1,.13-.59c.17-.14.4-.22.59-.35s.33-.31.5-.45A2.19,2.19,0,0,1,105,49.41Z").attr({
  class: 'cls-133',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aea');
var path_aeb = rsr.path("M105.83,50l-.06,0-.22.11-.21,0c-.16,0-.45.1-.59,0l-.39-.22a2.11,2.11,0,0,1-.22-.17,4,4,0,0,1,.65-.34,1.67,1.67,0,0,1,.72-.08c.07.09.14.17.2.26a1.24,1.24,0,0,1,.18.22C105.91,49.92,105.88,50,105.83,50Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeb');
var path_aec = rsr.path("M104.89,49.82c0-.12,0-.24,0-.36v0l-.09,0a4,4,0,0,0-.65.34s.14.12.15.12l.25.16a.45.45,0,0,0,.32.07C105,50.11,104.89,49.91,104.89,49.82Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aec');
var path_aed = rsr.path("M105.93,49.49l0-.31s-1.55-.27-1.65.16v.37l.07,0,.2.11.13.06.15,0c.08.05,0,.15.09.2a.89.89,0,0,0,.43,0,3.23,3.23,0,0,0,.47-.14c.13-.05.17-.09.12-.19A.84.84,0,0,1,105.93,49.49Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aed');
var path_aee = rsr.path("M104.3,49.34v.37a1.5,1.5,0,0,0,.58.36,2.08,2.08,0,0,1,0-.25c0-.12,0-.24,0-.36a.94.94,0,0,0-.14-.33C104.52,49.14,104.33,49.19,104.3,49.34Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aee');
var path_aef = rsr.path("M106,49.4a1.25,1.25,0,0,1-.37.22,4.32,4.32,0,0,1-.54.1c-.2,0,0-.16-.18-.26,0,0-.76-.74-.61-1.13a.35.35,0,0,1,0-.08l0-.07a2,2,0,0,1,1.23-.52.81.81,0,0,1,.56.27,2.44,2.44,0,0,1,.16.23s0,0,0,0a1.47,1.47,0,0,1,0,.59.66.66,0,0,1-.24.53l-.11.08Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aef');
var path_aeg = rsr.path("M106.28,48h0a.72.72,0,0,1-.21.05,3,3,0,0,1-.6,0,.57.57,0,0,0-.29,0,.42.42,0,0,0-.16.13l0,.08c0,.1.08.19.08.29s-.16.23-.16.33a.86.86,0,0,1-.06.23.56.56,0,0,0,0,.36c0-.1-.3.07-.38.07a.73.73,0,0,1-.42-.1c-.08-.06-.12-.36-.16-.43a1.72,1.72,0,0,1-.22-1,.13.13,0,0,1,0-.08s.06,0,.1-.06a1.9,1.9,0,0,1,.58-.05c.17,0,.32-.1.48-.13a3,3,0,0,1,.43-.06,2.64,2.64,0,0,1,.56,0,1.2,1.2,0,0,0,.23,0,1.5,1.5,0,0,1,.17.23S106.28,48,106.28,48Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeg');
var path_aeh = rsr.path("M106.23,49.12a1.69,1.69,0,0,0,.1-.27,2.31,2.31,0,0,0,0-.74,1,1,0,0,0-.37-.76A2.08,2.08,0,0,0,104.8,47a1.45,1.45,0,0,0-1.1.42.75.75,0,0,0,0,.67c.06.18.23.33.31.51a1.14,1.14,0,0,1,.1.19,3.11,3.11,0,0,1,0,.32v0h0l.31.07a1.77,1.77,0,0,1-.06-.49c0-.17.1-.23.31-.22a.27.27,0,0,1,.24.21c0,.18-.1.34-.13.51a.46.46,0,0,0,.07.41,1.77,1.77,0,0,0,.91-.1A.64.64,0,0,0,106.23,49.12Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeh');
group_cz.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_cz'
});
var group_da = rsr.set();
var path_aei = rsr.path("M103.93,50.82l0,0,.31-.19-.17.05Z").attr({
  class: 'cls-1',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aei');
var path_aej = rsr.path("M105.51,49.39a1.24,1.24,0,0,0-.47,0,2.19,2.19,0,0,0-.6.38c-.17.14-.31.32-.5.45s-.42.21-.59.35a.47.47,0,0,0-.13.59,8,8,0,0,0,.27.83c.11.25.05.69.13.94a10.43,10.43,0,0,1-.11,2.14,1.08,1.08,0,0,0,.88.21c0-.11-.17-1.77-.14-2a4.25,4.25,0,0,0,0-1.28,3.5,3.5,0,0,0-.15-.64c-.07-.15-.19-.29-.17-.46a.13.13,0,0,1,0-.08l0,0,.07-.06a.43.43,0,0,1,.12-.11,6.63,6.63,0,0,1,2.4-1A2.23,2.23,0,0,0,105.51,49.39Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aej');
group_da.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_da'
});
var group_db = rsr.set();
var path_aek = rsr.path("M100.57,52.92a.28.28,0,0,1-.27,0l-.55-.13c-.35-.06-.55-.08-.48-.21a1.77,1.77,0,0,1,.16-.23.28.28,0,0,1,.18-.09l.15,0,.31.05s0-.05,0-.06a.14.14,0,0,1,0-.06s.06-.07.11-.06a.18.18,0,0,1,.13.09l.09.09a.44.44,0,0,0,.36.18C100.89,52.58,100.7,52.79,100.57,52.92Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aek');
var path_ael = rsr.path("M100.69,52.43l1,.08a1.27,1.27,0,0,0,.38-.07l.08,0a.18.18,0,0,0,.08-.09,1,1,0,0,0,.1-.17l.09-.23a3.46,3.46,0,0,1,.27-.5c.1-.14.19-.29.3-.42s.18-.27.4-.29a.92.92,0,0,1,.33,0,.53.53,0,0,1,.27.13.7.7,0,0,1,.17.43,1.4,1.4,0,0,1-.11.53,1.53,1.53,0,0,1-.11.27,1.39,1.39,0,0,1-.15.19,7.14,7.14,0,0,1-.76.8c-.15.12-.32.31-.56.3s-2.06-.16-2.06-.16-.37-.19-.27-.48S100.69,52.43,100.69,52.43Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ael');
group_db.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_db'
});
var group_dc = rsr.set();
var path_aem = rsr.path("M84.05,46.52c0,.68-1.13,1.27-2.56,1.31s-2.61-.48-2.63-1.16S80,45.4,81.41,45.35,84,45.83,84.05,46.52Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aem');
var path_aen = rsr.path("M72.08,42.44c0,.68-1.12,1.27-2.56,1.31s-2.61-.47-2.63-1.16,1.13-1.27,2.56-1.31S72.06,41.75,72.08,42.44Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aen');
group_dc.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dc'
});
var group_dd = rsr.set();
var path_aeo = rsr.path("M67,40.07l.06,2.33c0,.1.18.18.4.17s.38-.09.38-.19l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeo');
var path_aep = rsr.path("M69.17,40.71,69.24,43c0,.1.18.18.39.17s.39-.09.38-.2L70,40.68Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aep');
var path_aeq = rsr.path("M68.82,38.94l.06,2.33c0,.1.18.18.4.17s.38-.09.38-.2l-.07-2.32Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeq');
var path_aer = rsr.path("M71,39.57l.07,2.33c0,.11.18.18.39.18s.39-.1.38-.2l-.06-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aer');
group_dd.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dd'
});
var group_de = rsr.set();
var path_aes = rsr.path("M71.75,39.19a3.86,3.86,0,0,0-5,.15h-.1v.32c0,.69,1.2,1.21,2.63,1.17s2.58-.63,2.56-1.32v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aes');
var path_aet = rsr.path("M71.85,39.19c0,.69-1.12,1.28-2.56,1.32s-2.61-.48-2.63-1.17,1.13-1.27,2.56-1.31S71.83,38.51,71.85,39.19Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aet');
group_de.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_de'
});
var group_df = rsr.set();
var path_aeu = rsr.path("M 70.89 39.32 70.13 39.69 70.28 45.05 71.04 44.69 70.89 39.32 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aeu');
var path_aev = rsr.path("M 69.56 39.46 70.13 39.69 70.28 45.05 69.71 44.82 69.56 39.46 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aev');
var path_aew = rsr.path("M 75.61 41.21 74.86 41.59 75.01 46.94 75.77 46.59 75.61 41.21 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aew');
var path_aex = rsr.path("M 74.28 41.35 74.86 41.59 75.01 46.94 74.44 46.71 74.28 41.35 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aex');
var path_aey = rsr.path("M 80.68 38.87 79.92 39.24 80.08 44.6 80.84 44.24 80.68 38.87 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aey');
var path_aez = rsr.path("M 79.36 39.01 79.92 39.24 80.08 44.6 79.51 44.37 79.36 39.01 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aez');
var path_afa = rsr.path("M81.48,39h0l0-.43-.23-.18a1.87,1.87,0,0,0-.79-.58l0,0A9.54,9.54,0,0,0,73,38L69,39.88a1.71,1.71,0,0,0-.84.79l-.14.09,0,.46h0a1.46,1.46,0,0,0,1,1.29c2.33.94,5.92.51,8.18-.56l3.24-1.49A1.44,1.44,0,0,0,81.48,39Z").attr({
  class: 'cls-126',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afa');
var path_afb = rsr.path("M69.1,42.05h0c2.32.94,5.91.5,8.18-.57L80.51,40a1.37,1.37,0,0,0-.08-2.64l-.05,0a9.47,9.47,0,0,0-7.44.24L69,39.42A1.37,1.37,0,0,0,69.1,42.05Z").attr({
  class: 'cls-49',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afb');
group_df.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_df'
});
var group_dg = rsr.set();
var path_afc = rsr.path("M69.32,46.73h0c2.33.93,5.92.5,8.19-.57l3.23-1.48A1.37,1.37,0,0,0,80.66,42l0,0a9.54,9.54,0,0,0-7.45.23L69.24,44.1A1.36,1.36,0,0,0,69.32,46.73Z").attr({
  class: 'cls-123',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afc');
group_dg.attr({
  'class': 'cls-122',
  'parent': 'group_a',
  'name': 'group_dg'
});
var group_dh = rsr.set();
var path_afd = rsr.path("M79,44.61l.07,2.33c0,.1.18.18.39.17s.39-.09.38-.19l-.06-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afd');
var path_afe = rsr.path("M81.19,45.25l.07,2.33c0,.1.18.18.39.17s.39-.09.39-.2L82,45.22Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afe');
var path_aff = rsr.path("M80.84,43.48l.07,2.33c0,.1.18.18.39.17s.39-.09.38-.2l-.06-2.32Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aff');
var path_afg = rsr.path("M83,44.11l.07,2.33c0,.11.18.18.4.18s.38-.1.38-.2l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afg');
group_dh.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dh'
});
var group_di = rsr.set();
var path_afh = rsr.path("M83.78,43.73a3.87,3.87,0,0,0-5,.15h-.09v.32c0,.69,1.2,1.21,2.64,1.17s2.57-.63,2.55-1.32v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afh');
var path_afi = rsr.path("M83.88,43.73c0,.69-1.13,1.28-2.56,1.32s-2.61-.48-2.63-1.17,1.12-1.27,2.55-1.31S83.86,43.05,83.88,43.73Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afi');
group_di.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_di'
});
var group_dj = rsr.set();
group_dj.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dj'
});
var group_dk = rsr.set();
var path_afj = rsr.path("M69.24,47.33l.07,2.33c0,.1-.17.19-.38.19s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afj');
var path_afk = rsr.path("M67.11,48.09l.07,2.33c0,.1-.17.19-.38.2s-.39-.08-.4-.18l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afk');
var path_afl = rsr.path("M67.36,46.3l.07,2.33c0,.11-.17.19-.39.2s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afl');
var path_afm = rsr.path("M65.23,47.07l.06,2.32c0,.11-.16.2-.38.2s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afm');
group_dk.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dk'
});
var group_dl = rsr.set();
var path_afn = rsr.path("M64.44,46.73a3,3,0,0,1,2.47-1,3,3,0,0,1,2.53.85h.09v.32c0,.69-1.12,1.28-2.56,1.32s-2.61-.48-2.63-1.17v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afn');
var path_afo = rsr.path("M64.34,46.73c0,.69,1.2,1.21,2.64,1.17s2.57-.63,2.55-1.32-1.19-1.2-2.63-1.16S64.32,46.05,64.34,46.73Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afo');
group_dl.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dl'
});
var group_dm = rsr.set();
group_dm.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dm'
});
var group_dn = rsr.set();
var path_afp = rsr.path("M64.67,49.28l.06.08a.21.21,0,0,1,0,.15.82.82,0,0,0,0,.22l-.49.2h-.21S64,50,64,50a1.07,1.07,0,0,1-.21.13,1.62,1.62,0,0,1-.33.13,3.2,3.2,0,0,1-.46.06h-.09a.59.59,0,0,1-.29-.13c-.08-.07,0-.18,0-.25a2.07,2.07,0,0,1,.74-.41l.14-.36.38,0a1.17,1.17,0,0,0,.32,0,1.32,1.32,0,0,1,.34,0h0s0,0,0,0A.18.18,0,0,1,64.67,49.28Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afp');
var path_afq = rsr.path("M62.69,49.91c-.08.07,0,.14.1.16h.15a1.61,1.61,0,0,0,.33-.06,1.12,1.12,0,0,0,.26-.08.78.78,0,0,0,.21-.09c.07,0,.07-.11.11-.17a1.5,1.5,0,0,0,.11-.13s0-.11,0-.12a1.3,1.3,0,0,1-.42-.22l-.12.33-.1,0-.23.09-.27.15A.52.52,0,0,0,62.69,49.91Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afq');
var path_afr = rsr.path("M64.61,50.74a.8.8,0,0,1,.07-.2l.16-.36a1.29,1.29,0,0,0,0-.44v0c0-.06.23-.08.31-.08l.29,0a2.23,2.23,0,0,1,.36,0c.17.05.15.15.16.27a.55.55,0,0,1,0,.18.73.73,0,0,1-.1.25h0v.17a.54.54,0,0,1-.06.25l-.12.18a1,1,0,0,1-.38.31l-.1,0a.41.41,0,0,1-.19,0,.47.47,0,0,1-.27-.06c-.08-.06-.08-.15-.1-.23A.62.62,0,0,1,64.61,50.74Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afr');
var path_afs = rsr.path("M65.27,49.8a.47.47,0,0,0-.2,0c-.07,0-.08,0-.11.07a.61.61,0,0,0,0,.27.78.78,0,0,1,0,.21c0,.1-.1.2-.12.3a.53.53,0,0,0,0,.37l0,0s.15,0,.2,0h.25a2.18,2.18,0,0,0,.25-.28,1.27,1.27,0,0,0,.15-.31.94.94,0,0,0,0-.3.43.43,0,0,0,0-.25.21.21,0,0,0-.15-.09.21.21,0,0,1-.08,0A.58.58,0,0,1,65.27,49.8Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afs');
var path_aft = rsr.path("M68,45.71S64.48,47,64.49,47.52s.15,1.66.15,1.66a1.05,1.05,0,0,1-.75.13l-.37-.11a20.42,20.42,0,0,1-.2-2.35c.06-.35,2.42-1.3,2.42-1.3Z").attr({
  class: 'cls-137',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aft');
var path_afu = rsr.path("M66,49.09a8.19,8.19,0,0,0-.18-1c0-.07-.06-.16,0-.22a.41.41,0,0,1,.21-.1,7.93,7.93,0,0,0,.86-.3l.32-.12c.22-.09.42-.2.63-.28a2.92,2.92,0,0,0,.6-.34c.29-.21.26-.77.15-1a.84.84,0,0,0-.24-.35s-.39.48-1.5.26-.37-.26-.37-.26.44,0,.42.09-.39.55-1.23,1a4,4,0,0,0-1.11.83.9.9,0,0,0-.09.46,15.47,15.47,0,0,0,.39,2s.15.09.19.1a.91.91,0,0,0,.52,0,2.47,2.47,0,0,0,.53-.22Z").attr({
  class: 'cls-128',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afu');
group_dn.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dn'
});
var group_do = rsr.set();
var path_afv = rsr.path("M65.28,42.18a.51.51,0,0,1,.2-.35.8.8,0,0,1,.6-.13c.09,0,.14.09.17.21a2.69,2.69,0,0,1-.49,0,.73.73,0,0,0-.42.18Z").attr({
  class: 'cls-138',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afv');
var path_afw = rsr.path("M65.57,44.16a13.72,13.72,0,0,1,.17,1.39s.72.73,2.85.07c0,0-.32-.88-.23-1.06s.79-.9.78-1.31.09-.75-.48-1.06a9.45,9.45,0,0,0-.85-.42,4.38,4.38,0,0,0-.64-.22,1.46,1.46,0,0,0-.65,0,1.67,1.67,0,0,0-.83.43A3.87,3.87,0,0,0,65.57,44.16Z").attr({
  class: 'cls-133',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afw');
var path_afx = rsr.path("M66.52,41.59a1.46,1.46,0,0,1,.65,0,4.38,4.38,0,0,1,.64.22,9.45,9.45,0,0,1,.85.42c.57.31.47.65.48,1.06s-.68,1.13-.78,1.31.23,1.06.23,1.06c-.23.07-.44.13-.64.17a3.84,3.84,0,0,1,0-.5,3,3,0,0,1,.13-1.39,1.93,1.93,0,0,1,.42-.54.54.54,0,0,0,.15-.3,1.43,1.43,0,0,0,.06-.35.22.22,0,0,0,0-.14.35.35,0,0,0-.13-.11,2.44,2.44,0,0,0-.81-.44,3.82,3.82,0,0,0-1-.11,8.18,8.18,0,0,0-1,0A2.1,2.1,0,0,1,66.52,41.59Z").attr({
  class: 'cls-138',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afx');
var path_afy = rsr.path("M66.22,42.32c0,.25.34.4.6.24l.41-.27c.52-.37.58-.52.58-.52a4.38,4.38,0,0,0-.64-.22,1.46,1.46,0,0,0-.65,0,3.11,3.11,0,0,0-.3.72Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afy');
var path_afz = rsr.path("M67.16,42.23a1,1,0,0,0,0-.35,1.87,1.87,0,0,1-.08-.32v0h.09a4.38,4.38,0,0,1,.64.22s-.06.15-.58.52l-.12.08A.82.82,0,0,0,67.16,42.23Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_afz');
var path_aga = rsr.path("M67.72,41.71h0s.07,0,.1,0l.2.09c.08,0,0,.13,0,.17a1,1,0,0,1-.16.2,1.75,1.75,0,0,1-.42.26l-.34.14s-.31.13-.34.1v-.05a.24.24,0,0,0,0-.08.7.7,0,0,1,0-.14s0,0,.08,0a1.85,1.85,0,0,0,.33-.12,3,3,0,0,0,.35-.23.9.9,0,0,0,.21-.27A.13.13,0,0,1,67.72,41.71Z").attr({
  class: 'cls-139',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aga');
var path_agb = rsr.path("M66,41.9c0-.06,0-.14.07-.17a.2.2,0,0,1,.17,0c.06,0,.07.05.06.1a.38.38,0,0,0,.08.32.12.12,0,0,1,0,.08l0,0a.77.77,0,0,0-.15.3s-.07-.06-.1-.09L66,42.32l0-.06a.22.22,0,0,1,0-.08.34.34,0,0,1,0-.14A.23.23,0,0,0,66,41.9Z").attr({
  class: 'cls-139',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agb');
var path_agc = rsr.path("M67.58,41.38l.06.32a2,2,0,0,1-.68.42c-.42.16-.56.09-.56.09l-.13-.69S67.4,41,67.58,41.38Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agc');
var path_agd = rsr.path("M67.58,41.38l.06.32a1.81,1.81,0,0,1-.47.33.76.76,0,0,0,0-.15,1.87,1.87,0,0,1-.08-.32,1.18,1.18,0,0,1,0-.31C67.34,41.23,67.52,41.25,67.58,41.38Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agd');
var path_age = rsr.path("M65.93,41.86c.06.21.33.25.69.18a1.64,1.64,0,0,0,.48-.23l.13-.09,0,0,0,0,0,0c.85-.8.27-.84,0-1.16l-.06-.07-.06,0a1.85,1.85,0,0,0-1.19-.29.61.61,0,0,0-.44.32.67.67,0,0,0-.1.23v0A4.78,4.78,0,0,0,65.93,41.86Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_age');
var path_agf = rsr.path("M65.53,40.65h0a.62.62,0,0,0,.19,0,2.37,2.37,0,0,0,.54,0,.8.8,0,0,1,.26,0,.54.54,0,0,1,.17.09l0,.07a.67.67,0,0,1,.14.26c0,.09,0,.19.07.28a1.86,1.86,0,0,0,.1.2.54.54,0,0,1,0,.31l.13-.09,0,0,0,0,0,0c.85-.8.27-.84,0-1.16l-.06-.07-.06,0a1.15,1.15,0,0,0-.56-.17,2.36,2.36,0,0,0-.38,0,1.94,1.94,0,0,0-.49.11l-.2.07a.67.67,0,0,0-.1.23Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agf');
group_do.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_do'
});
var group_dp = rsr.set();
var path_agg = rsr.path("M65.58,45.24s0,.26-.07.37,0,.34-.08.34-.11-.32-.11-.32l-.41.45a.09.09,0,0,1-.11,0l-.07,0s-.09.12-.22-.06-.09-.15,0-.24a1.48,1.48,0,0,1,.29-.4c.19-.2.35-.34.35-.34Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agg');
var path_agh = rsr.path("M65.32,43.23h0a2.69,2.69,0,0,0,.19.61l0,.11a.6.6,0,0,1-.05.26c0,.1-.08.2-.13.29s-.38.62-.41.64a1.85,1.85,0,0,1,.58.23h0l0,0a7.17,7.17,0,0,0,.51-.61,3.19,3.19,0,0,1,.26-.38c.06-.09.14-.16.19-.25a1.33,1.33,0,0,1,.09-.21c0-.07.08-.13.1-.19a.25.25,0,0,0,0-.19c0-.14-.07-.28-.11-.42a3.15,3.15,0,0,0-.3-1,.7.7,0,0,0-.71-.25.51.51,0,0,0-.28.15.61.61,0,0,0-.14.54c0,.11,0,.23,0,.34S65.3,43.12,65.32,43.23Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agh');
group_dp.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dp'
});
var group_dq = rsr.set();
var path_agi = rsr.path("M65.94,41.91a.63.63,0,0,0,.62.31.69.69,0,0,0,.41-.17.64.64,0,0,0,.22-.3.75.75,0,0,0,0-.21c0-.07,0-.13,0-.2a.33.33,0,0,1,0-.17,1.6,1.6,0,0,1,0-.21.37.37,0,0,1,.09-.16.18.18,0,0,1,.24,0,.22.22,0,0,1,.06.19.42.42,0,0,1-.07.13.65.65,0,0,0-.13.39s0,.06,0,.07l.15-.1a1.06,1.06,0,0,0,.36-.54,1.18,1.18,0,0,0,0-.46.93.93,0,0,0-.43-.66,1.48,1.48,0,0,0-1-.17,1.81,1.81,0,0,0-.85.47.6.6,0,0,0-.16.48.6.6,0,0,1,.34-.11c.61-.05,1,0,1,.3s.08.27.11.41a.71.71,0,0,1,0,.2.78.78,0,0,1-.26.26h-.12l-.08,0-.08,0h-.36a.14.14,0,0,0-.09,0l-.08,0c-.06,0-.09,0-.11-.07a.26.26,0,0,0,0,.15A1.19,1.19,0,0,0,65.94,41.91Zm.45-.18c.06,0,.2,0,.24,0s0,.07,0,.12a.27.27,0,0,1-.1.08H66.4s0,0,0-.06,0,0,0-.05a.07.07,0,0,0-.06,0h-.08s0,0,0,.06l0,0s-.08,0-.1,0-.16-.14-.1-.19h.06A1.54,1.54,0,0,0,66.39,41.73Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agi');
var path_agj = rsr.path("M66.34,39.82A2.6,2.6,0,0,0,66,40l-.09,0-.08,0a1.74,1.74,0,0,1,.73-.37,1.48,1.48,0,0,1,1,.17.93.93,0,0,1,.43.66,1.18,1.18,0,0,1,0,.46.88.88,0,0,1-.27.45.19.19,0,0,0,0-.07c0-.11,0-.23,0-.35a1.76,1.76,0,0,0-.07-.6,1,1,0,0,0-1-.58A1.14,1.14,0,0,0,66.34,39.82Z").attr({
  class: 'cls-26',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agj');
var path_agk = rsr.path("M65.85,41.65a.28.28,0,0,1,0-.09s0,.09.11.07l.08,0a.14.14,0,0,1,.09,0h.36l.08,0,.08,0h.12A.78.78,0,0,0,67,41.4v0a.25.25,0,0,1,0,.17l-.05.05-.14.11-.06,0s0,0-.07,0l-.15-.06-.07,0H66.2a.47.47,0,0,0-.17,0s0,0,0,0A.13.13,0,0,1,65.85,41.65Z").attr({
  class: 'cls-140',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agk');
var path_agl = rsr.path("M67,42.05a.69.69,0,0,1-.41.17.63.63,0,0,1-.62-.31.47.47,0,0,1-.06-.15l0,.08a.35.35,0,0,0,.16.18.88.88,0,0,0,.6,0,.61.61,0,0,0,.45-.43,1,1,0,0,0,0-.17.66.66,0,0,1,0-.2.64.64,0,0,1,0-.2.33.33,0,0,1,.13-.19l0,.08a1.6,1.6,0,0,0,0,.21.33.33,0,0,0,0,.17c0,.07,0,.13,0,.2a.75.75,0,0,1,0,.21A.64.64,0,0,1,67,42.05Z").attr({
  class: 'cls-26',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agl');
group_dq.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dq'
});
var group_dr = rsr.set();
var path_agm = rsr.path("M67.69,45.89l-.4.23c-.1.07-.41.15-.35.22s.42-.08.42-.08l-.32.49a0,0,0,0,0,0,.08l.08,0s-.1.12.16.11.22,0,.3-.1a1.74,1.74,0,0,0,.33-.38,3.65,3.65,0,0,0,.21-.39Z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agm');
var path_agn = rsr.path("M 67.97 46.34 68.62 46.03 68.07 45.67 67.66 45.9 67.97 46.34 z").attr({
  class: 'cls-9',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agn');
group_dr.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dr'
});
var group_ds = rsr.set();
var path_ago = rsr.path("M69.18,42.64a.7.7,0,0,0-.71-.25c-.47.08-.44.58-.42.85a.5.5,0,0,0,0,.12,1.73,1.73,0,0,0,.17.53,1.06,1.06,0,0,0,.17.2,1.78,1.78,0,0,1,.37.46c.06.1.15.21.13.33a.64.64,0,0,1-.24.28l-.28.2-.45.33s-.11.1-.15.1a.49.49,0,0,1,.24.08,1.7,1.7,0,0,0,.22.15c.07,0,.1-.06.15-.08l.56-.2.62-.23a.27.27,0,0,0,.2-.17.82.82,0,0,0,.07-.3.88.88,0,0,0-.07-.32c-.14-.44-.17-.66-.29-1.1A3.2,3.2,0,0,0,69.18,42.64Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ago');
var path_agp = rsr.path("M69.19,42.63a.74.74,0,0,0-.72-.24c.27.13.3.35.38.57a3.68,3.68,0,0,0,.15.35,3.29,3.29,0,0,0,.26.49c.12.22.26.43.36.64s.23.5.1.7a.29.29,0,0,1-.1.12,2.82,2.82,0,0,1-.39.29,5.12,5.12,0,0,1-.53.25l-.29.12a.56.56,0,0,0-.19.09c0,.08,0,.19,0,.26a10.71,10.71,0,0,1,1-.48c.3-.16.74-.26.81-.57a.44.44,0,0,0,0-.2c0-.18-.08-.36-.13-.54-.12-.42-.23-.85-.35-1.27A1.5,1.5,0,0,0,69.19,42.63Z").attr({
  class: 'cls-138',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agp');
group_ds.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ds'
});
var group_dt = rsr.set();
var path_agq = rsr.path("M55,54.77c0,.69,1.2,1.21,2.63,1.17s2.58-.63,2.56-1.32-1.19-1.2-2.63-1.16S55,54.09,55,54.77Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agq');
var path_agr = rsr.path("M 67.39 46.94 68.17 47.27 68.33 52.63 67.55 52.32 67.39 46.94 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agr');
var path_ags = rsr.path("M 68.73 47.01 68.17 47.27 68.33 52.63 68.89 52.37 68.73 47.01 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ags');
var path_agt = rsr.path("M 62.78 49.11 63.56 49.44 63.72 54.79 62.94 54.48 62.78 49.11 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agt');
var path_agu = rsr.path("M 64.12 49.17 63.56 49.44 63.72 54.79 64.28 54.53 64.12 49.17 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agu');
var path_agv = rsr.path("M 57.59 47.07 58.37 47.4 58.52 52.75 57.74 52.44 57.59 47.07 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agv');
var path_agw = rsr.path("M 58.92 47.13 58.37 47.4 58.52 52.75 59.08 52.49 58.92 47.13 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agw');
var path_agx = rsr.path("M56.8,47.26h0v-.43l.23-.19a1.91,1.91,0,0,1,.75-.63l.05,0a9.54,9.54,0,0,1,7.45-.2l4,1.61a1.7,1.7,0,0,1,.89.73l.14.08v.47h0a1.52,1.52,0,0,1-1,1.35c-2.26,1.07-5.87.84-8.2-.09l-3.31-1.29A1.45,1.45,0,0,1,56.8,47.26Z").attr({
  class: 'cls-126',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agx');
var path_agy = rsr.path("M69.34,49.56h0c-2.27,1.08-5.88.85-8.2-.08l-3.31-1.3a1.36,1.36,0,0,1-.08-2.63l0,0a9.54,9.54,0,0,1,7.45-.2l4,1.61A1.36,1.36,0,0,1,69.34,49.56Z").attr({
  class: 'cls-49',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agy');
group_dt.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dt'
});
var group_du = rsr.set();
var path_agz = rsr.path("M69.73,54.12h0c-2.26,1.07-5.87.85-8.2-.09l-3.31-1.29a1.36,1.36,0,0,1-.08-2.63l0,0a9.54,9.54,0,0,1,7.45-.2l4,1.61A1.36,1.36,0,0,1,69.73,54.12Z").attr({
  class: 'cls-123',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_agz');
group_du.attr({
  'class': 'cls-122',
  'parent': 'group_a',
  'name': 'group_du'
});
var group_dv = rsr.set();
var path_aha = rsr.path("M55.74,50.34a1.07,1.07,0,0,0-.53.17,1.57,1.57,0,0,0-.3.39c-.12.15-.06.3,0,.46a.68.68,0,0,0,.13.32,1,1,0,0,0,.23.16,4,4,0,0,0,1.57.42,9.43,9.43,0,0,0,1.68,0,2.92,2.92,0,0,0,.71-.22l.73-.28c.12,0,.46-.22.57-.12s0,.42,0,.52c.05.33.1.65.16,1s-.05.55.1.8.26.17.43.2a1.36,1.36,0,0,0,.95-.2c.13-.08,0-.27,0-.37a5.81,5.81,0,0,0,0-.59c0-.67-.09-1.33-.11-2a.72.72,0,0,0-.7-.74,1.31,1.31,0,0,0-.34,0,11,11,0,0,0-1.28.19,15.63,15.63,0,0,1-1.55.22,4.29,4.29,0,0,1-1.38-.18A3.25,3.25,0,0,0,55.74,50.34Z").attr({
  class: 'cls-130',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aha');
var path_ahb = rsr.path("M55.12,50.54l0,0c.05,0,.38-.2.44-.14a.71.71,0,0,1,.24.31,4.15,4.15,0,0,1,.11.48,1.34,1.34,0,0,0,.69.8,3,3,0,0,0,2.54-.14,4.78,4.78,0,0,1,.76-.35,1.37,1.37,0,0,1,.57,0,.29.29,0,0,1,.21.09.2.2,0,0,1,0,.11,16.68,16.68,0,0,0,.19,1.87c0,.2.07.4.1.59a.39.39,0,0,1-.26-.16c-.15-.25-.05-.54-.1-.8s-.11-.65-.16-1c0-.1.07-.46,0-.52s-.45.07-.57.12c-.47.19-1,.33-1.46.52a3.49,3.49,0,0,1-1.73.14c-.21,0-.42,0-.63-.1A2.74,2.74,0,0,1,55.2,52c-.25-.19-.23-.44-.26-.69a.71.71,0,0,1,0-.29A1.22,1.22,0,0,1,55.12,50.54Z").attr({
  class: 'cls-128',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahb');
group_dv.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dv'
});
var group_dw = rsr.set();
var path_ahc = rsr.path("M60.76,54.08v0a.65.65,0,0,0,0,.14c0,.09,0,.23.07.3s.73,0,1,0l.1,0c.06,0,.07-.09.13-.13l.18-.07.17,0h.37a1.73,1.73,0,0,0,.87-.33.4.4,0,0,0,.06-.38c-.08-.23-.59-.19-.84-.18a2.2,2.2,0,0,1-.85-.06c-.19-.09-.53.22-.63.3a1.14,1.14,0,0,1-.35.26A.28.28,0,0,0,60.76,54.08Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahc');
var path_ahd = rsr.path("M62.84,53.33c.25,0,.76,0,.84.18a.5.5,0,0,1,0,.12,1.12,1.12,0,0,1-.75.2c-.57,0-.68-.07-.68-.07s-.22,0-.21-.17a.68.68,0,0,0-.06-.31A2.36,2.36,0,0,0,62.84,53.33Z").attr({
  class: 'cls-13',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahd');
var path_ahe = rsr.path("M59.56,52.1a.66.66,0,0,1,.28,0c.38.08.29.47.07.63a1,1,0,0,0-.24.3c-.05.08,0,.17-.09.25a.65.65,0,0,1-.53.27,1.35,1.35,0,0,1-.45,0,.38.38,0,0,1-.23-.17.64.64,0,0,1,0-.07,1.71,1.71,0,0,1,0-.32c0-.15.29-.1.39-.19a1.56,1.56,0,0,1,.28-.23c.09-.06.13-.16.2-.24a.69.69,0,0,1,.33-.17Z").attr({
  class: 'cls-12',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahe');
var path_ahf = rsr.path("M58.42,50.89c0-.14-.52,0-.52-.2s-.12-.2-.17-.35a4.6,4.6,0,0,1-.42-1c0-.12.95-.15,1.1-.18a.62.62,0,0,1,.27,0,4.61,4.61,0,0,1,.86.31c.24.13.23.35.25.56s0,.29,0,.43c0,.34,0,.68,0,1A10.92,10.92,0,0,1,59.66,53c0,.06,0,.11-.08.14a1.05,1.05,0,0,1-.21.06,1.28,1.28,0,0,1-.7,0L58.25,53a2.26,2.26,0,0,1,0-.26c0-.23,0-.46.06-.68A3.12,3.12,0,0,0,58.42,50.89Z").attr({
  class: 'cls-128',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahf');
var path_ahg = rsr.path("M58.51,49.41h.17a1.94,1.94,0,0,1,.77.1c.12.07.07.29.08.41a1.5,1.5,0,0,0,0,.22c0,.1.07.19.1.29a1.85,1.85,0,0,1,0,.41l0,.48a2.31,2.31,0,0,1,0,.37,4,4,0,0,1-.26.86l-.15.37s-.1.29-.13.29a.93.93,0,0,1-.4-.06c-.11,0-.41-.09-.44-.2s.06-.08.08-.12a1.26,1.26,0,0,0,0-.27l0-.58a1.34,1.34,0,0,1,.11-.48,1.47,1.47,0,0,0,.1-.22.49.49,0,0,0,0-.24,9.34,9.34,0,0,0-.27-1c0-.14-1.23-.18-1.19-.33s1.2-.18,1.28-.23Z").attr({
  class: 'cls-129',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahg');
group_dw.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dw'
});
var group_dx = rsr.set();
var path_ahh = rsr.path("M59.58,52.7,59.65,55c0,.1-.17.19-.38.2s-.39-.08-.39-.18l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahh');
var path_ahi = rsr.path("M57.45,53.46l.07,2.33c0,.1-.17.19-.38.2s-.39-.07-.4-.18l-.06-2.32Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahi');
var path_ahj = rsr.path("M57.7,51.68,57.77,54c0,.11-.17.2-.38.2S57,54.13,57,54l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahj');
var path_ahk = rsr.path("M55.57,52.44l.07,2.33c0,.1-.17.19-.39.19s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahk');
group_dx.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dx'
});
var group_dy = rsr.set();
var path_ahl = rsr.path("M54.78,52.1a3,3,0,0,1,2.47-1,3,3,0,0,1,2.53.85h.1v.32c0,.69-1.12,1.28-2.55,1.32s-2.62-.48-2.64-1.16v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahl');
var path_ahm = rsr.path("M54.69,52.11c0,.68,1.19,1.2,2.63,1.16s2.58-.63,2.56-1.32-1.2-1.2-2.64-1.16S54.67,51.42,54.69,52.11Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahm');
group_dy.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dy'
});
var group_dz = rsr.set();
var path_ahn = rsr.path("M58.76,49.41a5.72,5.72,0,0,1-.8-.75,1.29,1.29,0,0,1-.16-.18,2.1,2.1,0,0,1-.13-.26.94.94,0,0,1-.07-.86,1.35,1.35,0,0,1,.75.63c.16.23.54.74.67,1a.75.75,0,0,0,.67.38c.29,0,1.66-.21,2-.26h0a.64.64,0,0,1-.25.31h0l-1.24.18-.81.1A.88.88,0,0,1,58.76,49.41Z").attr({
  class: 'cls-134',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahn');
group_dz.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_dz'
});
var group_ea = rsr.set();
group_ea.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ea'
});
var group_eb = rsr.set();
var path_aho = rsr.path("M55.73,46a.88.88,0,0,0-.68.08.7.7,0,0,0-.31.42c-.07.24-.17.47-.22.71a16,16,0,0,0,.58,3.4c.1.31,1.06-1.5,1.12-1.6.16-.3-.68-1.45-.57-1.76S56.13,46.1,55.73,46Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aho');
var path_ahp = rsr.path("M54.75,46.48a.66.66,0,0,1,.3-.37.88.88,0,0,1,.68-.08c.09,0,.13.11.14.25a3.2,3.2,0,0,1-.54,0,.91.91,0,0,0-.5.17S54.78,46.46,54.75,46.48Z").attr({
  class: 'cls-132',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahp');
var path_ahq = rsr.path("M56.58,45.89a1.24,1.24,0,0,0-.47,0,2,2,0,0,0-1,.37,1.81,1.81,0,0,0-.36,2.08,5.5,5.5,0,0,1,.17,2.32,1.62,1.62,0,0,0,0,.58c.15.24.66.35,1,.39a6.36,6.36,0,0,0,2,0,20.42,20.42,0,0,1,0-2.53,4.69,4.69,0,0,1,.24-.75,7.49,7.49,0,0,0,.32-.86.48.48,0,0,0-.16-.58c-.18-.12-.42-.19-.61-.31s-.35-.29-.53-.42A2.08,2.08,0,0,0,56.58,45.89Z").attr({
  class: 'cls-133',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahq');
var path_ahr = rsr.path("M55.82,46.51l.07,0a.8.8,0,0,0,.23.1.71.71,0,0,0,.21,0,1.3,1.3,0,0,0,.59,0c.13-.07.25-.15.37-.23a2,2,0,0,0,.21-.19,3.93,3.93,0,0,0-.66-.3,1.61,1.61,0,0,0-.73,0,2.48,2.48,0,0,0-.19.26,1.6,1.6,0,0,0-.16.23S55.78,46.48,55.82,46.51Z").attr({
  class: 'cls-10',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahr');
var path_ahs = rsr.path("M56.76,46.29c0-.12,0-.24,0-.36v0l.1,0a3.93,3.93,0,0,1,.66.3s-.13.13-.14.13l-.24.17a.45.45,0,0,1-.32.09C56.67,46.58,56.76,46.37,56.76,46.29Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahs');
var path_aht = rsr.path("M55.7,46l0-.32s1.53-.35,1.66.08v.36l-.07,0-.19.12-.13.06-.14.06c-.08,0,0,.16-.09.21a.88.88,0,0,1-.43,0,3.57,3.57,0,0,1-.47-.11c-.13,0-.17-.08-.13-.18A.83.83,0,0,0,55.7,46Z").attr({
  class: 'cls-22',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aht');
var path_ahu = rsr.path("M57.32,45.78v.36a1.42,1.42,0,0,1-.56.39c0-.05,0-.19,0-.24s0-.24,0-.36a1.06,1.06,0,0,1,.12-.34C57.08,45.59,57.27,45.63,57.32,45.78Z").attr({
  class: 'cls-20',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahu');
var path_ahv = rsr.path("M55.64,45.93a1.38,1.38,0,0,0,.38.2,3.31,3.31,0,0,0,.55.06c.2,0,0-.16.16-.26s.72-.79.54-1.16a.41.41,0,0,0-.05-.09.17.17,0,0,0-.06-.06,1.91,1.91,0,0,0-1.25-.44.74.74,0,0,0-.54.3,1.2,1.2,0,0,0-.15.24v0a1.31,1.31,0,0,0,0,.59.6.6,0,0,0,.27.51l.11.08Z").attr({
  class: 'cls-23',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahv');
var path_ahw = rsr.path("M55.26,44.58h0a.72.72,0,0,0,.21.05,4,4,0,0,0,.6,0,.57.57,0,0,1,.29,0,.31.31,0,0,1,.17.12.56.56,0,0,1,.05.08c0,.1-.07.18-.07.29s.18.22.19.32a.68.68,0,0,0,.07.23.53.53,0,0,1,0,.35c0-.1.3.06.38,0a.76.76,0,0,0,.41-.12c.08-.06.11-.36.14-.44a1.72,1.72,0,0,0,.16-1.06.11.11,0,0,0,0-.08l-.11-.05a1.88,1.88,0,0,0-.58,0c-.17,0-.32-.08-.49-.1a2.52,2.52,0,0,0-1,0l-.24,0a1.58,1.58,0,0,0-.15.24S55.26,44.57,55.26,44.58Z").attr({
  class: 'cls-24',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahw');
var path_ahx = rsr.path("M55.85,46a1.79,1.79,0,0,0,.92,0,.49.49,0,0,0,0-.41c0-.17-.18-.32-.16-.5a.25.25,0,0,1,.22-.22c.21,0,.31,0,.33.2a1.83,1.83,0,0,1,0,.49l.31-.08h0a0,0,0,0,0,0,0,1.88,1.88,0,0,1,0-.33,1.07,1.07,0,0,1,.09-.19c.07-.18.23-.34.28-.52a.76.76,0,0,0-.08-.66,1.45,1.45,0,0,0-1.13-.36,2,2,0,0,0-1.19.44,1,1,0,0,0-.32.78,2.25,2.25,0,0,0,.09.73c0,.1.07.19.11.27A.72.72,0,0,0,55.85,46Z").attr({
  class: 'cls-25',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahx');
group_eb.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_eb'
});
var group_ec = rsr.set();
var path_ahy = rsr.path("M57.77,47.23l0,0-.32-.18a.69.69,0,0,1,.17.05Z").attr({
  class: 'cls-1',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahy');
var path_ahz = rsr.path("M56.11,45.9a1.24,1.24,0,0,1,.47,0,2.08,2.08,0,0,1,.62.34c.18.13.33.3.53.42s.43.19.61.31a.48.48,0,0,1,.16.58c-.07.29-.12.57-.22.86a7.16,7.16,0,0,0-.07.94,10.77,10.77,0,0,0,.23,2.13c-.07.12-.37.26-.87.26,0-.12.07-1.77,0-2a4.24,4.24,0,0,1,0-1.28,3,3,0,0,1,.12-.66c.05-.15.17-.3.14-.46a.2.2,0,0,0,0-.08l.05,0-.07-.05a.32.32,0,0,0-.13-.1,6.69,6.69,0,0,0-2.46-.91A2.28,2.28,0,0,1,56.11,45.9Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ahz');
group_ec.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ec'
});
var group_ed = rsr.set();
var path_aia = rsr.path("M61.25,49.12a.26.26,0,0,0,.27,0l.54-.16c.35-.08.55-.11.47-.24a2.46,2.46,0,0,0-.17-.22.26.26,0,0,0-.19-.07l-.14,0-.32.07,0-.06a.14.14,0,0,0,0-.07s-.06-.06-.12,0-.09.06-.12.1l-.08.1a.45.45,0,0,1-.35.2C60.9,48.81,61.11,49,61.25,49.12Z").attr({
  class: 'cls-99',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aia');
var path_aib = rsr.path("M61.1,48.65l-1,.14a1.2,1.2,0,0,1-.38,0l-.09,0a.23.23,0,0,1-.08-.09,1,1,0,0,1-.11-.17,2.14,2.14,0,0,1-.1-.22,2.46,2.46,0,0,0-.31-.48c-.1-.14-.21-.28-.32-.41s-.2-.25-.41-.27a1.19,1.19,0,0,0-.33,0,.47.47,0,0,0-.27.14.72.72,0,0,0-.14.44,1.13,1.13,0,0,0,.14.53,2.1,2.1,0,0,0,.13.26,1.29,1.29,0,0,0,.16.18,5.72,5.72,0,0,0,.8.75.88.88,0,0,0,.57.27c.36,0,2.05-.28,2.05-.28s.36-.21.25-.49S61.1,48.65,61.1,48.65Z").attr({
  class: 'cls-131',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aib');
group_ed.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ed'
});
var group_ee = rsr.set();
group_ee.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ee'
});
var group_ef = rsr.set();
var path_aic = rsr.path("M84.42,53.79l.07,2.33c0,.1-.17.19-.39.2s-.39-.08-.39-.18l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aic');
var path_aid = rsr.path("M82.28,54.55l.07,2.33c0,.1-.17.19-.38.2s-.39-.07-.39-.18l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aid');
var path_aie = rsr.path("M82.53,52.76l.07,2.33c0,.11-.17.19-.38.2s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aie');
var path_aif = rsr.path("M80.4,53.53l.07,2.33c0,.1-.17.19-.38.19s-.39-.07-.4-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aif');
group_ef.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ef'
});
var group_eg = rsr.set();
var path_aig = rsr.path("M79.62,53.19a3.84,3.84,0,0,1,5-.14h.1v.32c0,.69-1.13,1.28-2.56,1.32s-2.61-.48-2.63-1.17V53.2Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aig');
var path_aih = rsr.path("M79.52,53.2c0,.68,1.2,1.2,2.63,1.16s2.58-.63,2.56-1.32-1.2-1.2-2.63-1.16S79.5,52.51,79.52,53.2Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aih');
group_eg.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_eg'
});
var group_eh = rsr.set();
var path_aii = rsr.path("M69.93,61.05c0,.68,1.2,1.2,2.63,1.16s2.58-.63,2.56-1.32-1.2-1.2-2.63-1.16S69.91,60.36,69.93,61.05Z").attr({
  class: 'cls-73',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aii');
var path_aij = rsr.path("M 82.57 53.4 83.35 53.73 83.5 59.09 82.73 58.78 82.57 53.4 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aij');
var path_aik = rsr.path("M 83.91 53.47 83.35 53.73 83.5 59.09 84.06 58.83 83.91 53.47 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aik');
var path_ail = rsr.path("M 77.96 55.57 78.74 55.9 78.89 61.25 78.12 60.94 77.96 55.57 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ail');
var path_aim = rsr.path("M 79.29 55.63 78.74 55.9 78.89 61.25 79.45 60.99 79.29 55.63 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aim');
var path_ain = rsr.path("M 72.76 53.53 73.54 53.86 73.7 59.21 72.92 58.9 72.76 53.53 z").attr({
  class: 'cls-124',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ain');
var path_aio = rsr.path("M 74.1 53.59 73.54 53.86 73.7 59.21 74.25 58.95 74.1 53.59 z").attr({
  class: 'cls-125',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aio');
var path_aip = rsr.path("M72,53.72h0v-.43l.22-.19a1.88,1.88,0,0,1,.76-.63l0,0a9.52,9.52,0,0,1,7.44-.2l4,1.61a1.68,1.68,0,0,1,.88.73l.14.08v.47h0a1.48,1.48,0,0,1-1,1.35c-2.27,1.07-5.88.85-8.2-.09L73,55.11A1.46,1.46,0,0,1,72,53.72Z").attr({
  class: 'cls-126',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aip');
var path_aiq = rsr.path("M84.51,56h0c-2.26,1.08-5.87.85-8.2-.08L73,54.65A1.37,1.37,0,0,1,72.92,52l0,0a9.54,9.54,0,0,1,7.45-.21l4,1.61A1.36,1.36,0,0,1,84.51,56Z").attr({
  class: 'cls-49',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aiq');
group_eh.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_eh'
});
var group_ei = rsr.set();
var path_air = rsr.path("M84.64,60.39h0c-2.26,1.08-5.87.85-8.2-.08L73.13,59a1.36,1.36,0,0,1-.08-2.63l0,0a9.54,9.54,0,0,1,7.45-.2l4,1.61A1.36,1.36,0,0,1,84.64,60.39Z").attr({
  class: 'cls-123',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_air');
group_ei.attr({
  'class': 'cls-122',
  'parent': 'group_a',
  'name': 'group_ei'
});
var group_ej = rsr.set();
var path_ais = rsr.path("M74.76,59.16l.07,2.33c0,.1-.17.19-.39.2s-.39-.07-.39-.18L74,59.18Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ais');
var path_ait = rsr.path("M72.63,59.92l.06,2.33c0,.11-.16.19-.38.2s-.39-.07-.39-.17L71.85,60Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_ait');
var path_aiu = rsr.path("M72.87,58.14l.07,2.33c0,.1-.17.19-.38.19s-.39-.07-.39-.17l-.07-2.33Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aiu');
var path_aiv = rsr.path("M70.74,58.9l.07,2.33c0,.1-.17.19-.38.19s-.39-.07-.4-.17L70,58.92Z").attr({
  class: 'cls-113',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aiv');
group_ej.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ej'
});
var group_ek = rsr.set();
var path_aiw = rsr.path("M70,58.56a3,3,0,0,1,2.47-1,3,3,0,0,1,2.52.85h.1v.31c0,.69-1.13,1.28-2.56,1.32s-2.61-.48-2.63-1.16v-.32Z").attr({
  class: 'cls-114',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aiw');
var path_aix = rsr.path("M69.86,58.57c0,.68,1.2,1.2,2.63,1.16s2.58-.63,2.56-1.31-1.2-1.21-2.63-1.17S69.84,57.88,69.86,58.57Z").attr({
  class: 'cls-46',
  parent: 'group_a',
  'stroke-width': '0',
  'stroke-opacity': '1',
  'fill': '#000000'
}).data('id', 'path_aix');
group_ek.attr({
  'class': 'cls-2',
  'parent': 'group_a',
  'name': 'group_ek'
});
var rsrGroups = [group_a, sity, group_b, group_c, group_d, group_e, group_f, group_g, group_h, group_i, group_j, group_k, group_l, group_m, group_n, group_o, group_p, group_q, group_r, group_s, group_t, group_u, group_v, group_w, group_x, group_y, group_z, group_aa, group_ab, group_ac, group_ad, group_ae, group_af, group_ag, group_ah, group_ai, group_aj, group_ak, group_al, group_am, group_an, group_ao, group_ap, group_aq, group_ar, group_as, group_at, group_au, group_av, group_aw, group_ax, group_ay, group_az, group_ba, group_bb, group_bc, group_bd, group_be, group_bf, group_bg, group_bh, group_bi, group_bj, group_bk, group_bl, group_bm, group_bn, group_bo, group_bp, group_bq, group_br, group_bs, group_bt, group_bu, group_bv, group_bw, group_bx, group_by, group_bz, group_ca, group_cb, group_cc, group_cd, group_ce, group_cf, group_cg, group_ch, group_ci, group_cj, group_ck, group_cl, group_cm, group_cn, group_co, group_cp, group_cq, group_cr, group_cs, group_ct, group_cu, group_cv, group_cw, group_cx, group_cy, group_cz, group_da, group_db, group_dc, group_dd, group_de, group_df, group_dg, group_dh, group_di, group_dj, group_dk, group_dl, group_dm, group_dn, group_do, group_dp, group_dq, group_dr, group_ds, group_dt, group_du, group_dv, group_dw, group_dx, group_dy, group_dz, group_ea, group_eb, group_ec, group_ed, group_ee, group_ef, group_eg, group_eh, group_ei, group_ej, group_ek];
group_a.push();
sity.push();
group_b.push();
group_c.push();
group_d.push();
group_e.push(path_el, path_em, path_en, path_eo, path_ep, path_eq, path_er, path_es, path_et, path_eu, path_ev, path_ew, path_ex, path_ey, path_ez, path_fa);
group_f.push(path_fb, path_fc, path_fd, path_fe, path_ff, path_fg, path_fh, path_fi, path_fj, path_fk, path_fl, path_fm, path_fn, path_fo, path_fp);
group_g.push(path_fq, path_fr, path_fs, path_ft, path_fu, path_fv, path_fw, path_fx, path_fy, path_fz, path_ga, path_gb, path_gc, path_gd);
group_h.push(path_ge, path_gf, path_gg, path_gh, path_gi, path_gj, path_gk, path_gl, path_gm, path_gn, path_go, path_gp, path_gq);
group_i.push(path_gr, path_gs, path_gt, path_gu, path_gv, path_gw, path_gx, path_gy, path_gz, path_ha, path_hb, path_hc);
group_j.push(path_hd, path_he, path_hf, path_hg, path_hh, path_hi, path_hj, path_hk, path_hl, path_hm, path_hn);
group_k.push(path_ho, path_hp, path_hq, path_hr, path_hs, path_ht, path_hu, path_hv, path_hw, path_hx);
group_l.push(path_hy, path_hz, path_ia, path_ib, path_ic, path_id, path_ie, path_if, path_ig);
group_m.push(path_ih, path_ii, path_ij, path_ik, path_il, path_im, path_in, path_io);
group_n.push(path_ip, path_iq, path_ir, path_is, path_it, path_iu, path_iv);
group_o.push(path_iw, path_ix, path_iy, path_iz, path_ja);
group_p.push(path_jb, path_jc, path_jd, path_je);
group_q.push(path_jf, path_jg);
group_r.push();
group_s.push(path_jh, path_ji, path_jj, path_jk, path_jl, path_jm, path_jn, path_jo, path_jp, path_jq, path_jr, path_js, path_jt, path_ju, path_jv, path_jw);
group_t.push(path_jx, path_jy, path_jz, path_ka, path_kb, path_kc, path_kd, path_ke, path_kf, path_kg, path_kh, path_ki, path_kj, path_kk, path_kl);
group_u.push(path_km, path_kn, path_ko, path_kp, path_kq, path_kr, path_ks, path_kt, path_ku, path_kv, path_kw, path_kx, path_ky, path_kz);
group_v.push(path_la, path_lb, path_lc, path_ld, path_le, path_lf, path_lg, path_lh, path_li, path_lj, path_lk, path_ll, path_lm);
group_w.push(path_ln, path_lo, path_lp, path_lq, path_lr, path_ls, path_lt, path_lu, path_lv, path_lw, path_lx, path_ly);
group_x.push(path_lz, path_ma, path_mb, path_mc, path_md, path_me, path_mf, path_mg, path_mh, path_mi, path_mj);
group_y.push(path_mk, path_ml, path_mm, path_mn, path_mo, path_mp, path_mq, path_mr, path_ms, path_mt);
group_z.push(path_mu, path_mv, path_mw, path_mx, path_my, path_mz, path_na, path_nb, path_nc);
group_aa.push(path_nd, path_ne, path_nf, path_ng, path_nh, path_ni, path_nj, path_nk);
group_ab.push(path_nl, path_nm, path_nn, path_no, path_np, path_nq, path_nr);
group_ac.push(path_ns, path_nt, path_nu, path_nv, path_nw, path_nx);
group_ad.push(path_ny, path_nz, path_oa, path_ob);
group_ae.push(path_oc, path_od);
group_af.push(path_oe);
group_ag.push(path_of, path_og, path_oh, path_oi, path_oj, path_ok, path_ol);
group_ah.push(path_om, path_on, path_oo, path_op, path_oq, path_or, path_os, path_ot, path_ou, path_ov, path_ow, path_ox, path_oy, path_oz, path_pa, path_pb, path_pc, path_pd, path_pe, path_pf, path_pg, path_ph, path_pi, path_pj, path_pk, path_pl, path_pm, path_pn, path_po, path_pp, path_pq, path_pr, path_ps, path_pt, path_pu, path_pv, path_pw, path_px);
group_ai.push();
group_aj.push(path_py, path_pz, path_qa, path_qb, path_qc);
group_ak.push(path_qd, path_qe, path_qf, path_qg, path_qh, path_qi, path_qj, path_qk, path_ql, path_qm, path_qn, path_qo, path_qp, path_qq, path_qr, path_qs, path_qt, path_qu, path_qv, path_qw, path_qx, path_qy, path_qz);
group_al.push(path_ra, path_rb);
group_am.push(path_rc, path_rd, path_re);
group_an.push();
group_ao.push(path_rf, path_rg, path_rh, path_ri, path_rj);
group_ap.push(path_rk, path_rl, path_rm, path_rn, path_ro, path_rp, path_rq, path_rr, path_rs, path_rt, path_ru, path_rv, path_rw, path_rx, path_ry, path_rz, path_sa, path_sb, path_sc, path_sd, path_se, path_sf, path_sg);
group_aq.push(path_sh, path_si);
group_ar.push(path_sj, path_sk, path_sl);
group_as.push();
group_at.push(path_sm, path_sn, path_so, path_sp, path_sq);
group_au.push(path_sr, path_ss, path_st, path_su, path_sv, path_sw, path_sx, path_sy, path_sz, path_ta, path_tb, path_tc, path_td, path_te, path_tf, path_tg, path_th, path_ti, path_tj, path_tk, path_tl, path_tm, path_tn);
group_av.push(path_to, path_tp);
group_aw.push(path_tq, path_tr, path_ts);
group_ax.push(path_tt, path_tu, path_tv, path_tw, path_tx, path_ty, path_tz, path_ua, path_ub, path_uc, path_ud, path_ue, path_uf, path_ug, path_uh, path_ui, path_uj, path_uk, path_ul, path_um, path_un, path_uo, path_up, path_uq, path_ur, path_us, path_ut, path_uu, path_uv, path_uw, path_ux, path_uy, path_uz, path_va, path_vb, path_vc, path_vd, path_ve, path_vf, path_vg, path_vh, path_vi, path_vj, path_vk, path_vl, path_vm, path_vn, path_vo, path_vp, path_vq, path_vr, path_vs, path_vt, path_vu, path_vv, path_vw, path_vx, path_vy, path_vz, path_wa, path_wb, path_wc, path_wd, path_we, path_wf);
group_ay.push();
group_az.push(path_wg, path_wh);
group_ba.push(path_wi, path_wj, path_wk, path_wl);
group_bb.push(path_wm, path_wn, path_wo, path_wp, path_wq, path_wr, path_ws, path_wt, path_wu, path_wv, path_ww);
group_bc.push(path_wx, path_wy, path_wz, path_xa, path_xb, path_xc);
group_bd.push(path_xd, path_xe, path_xf, path_xg, path_xh, path_xi);
group_be.push(path_xj, path_xk, path_xl, path_xm, path_xn, ellipse_xo, ellipse_xp, path_xq, path_xr);
group_bf.push(path_xs, path_xt, path_xu, path_xv);
group_bg.push(path_xw, path_xx);
group_bh.push(path_xy, path_xz, path_ya);
group_bi.push(path_yb);
group_bj.push(path_yc, path_yd, path_ye);
group_bk.push(path_yf, path_yg);
group_bl.push(path_yh, path_yi, path_yj);
group_bm.push(path_yk);
group_bn.push(path_yl, path_ym, path_yn);
group_bo.push(path_yo, path_yp);
group_bp.push(path_yq, path_yr, path_ys);
group_bq.push(path_yt);
group_br.push(path_yu, path_yv, path_yw);
group_bs.push(path_yx, path_yy);
group_bt.push(path_yz, path_za);
group_bu.push(path_zb, path_zc, path_zd, path_ze, path_zf, path_zg, path_zh, path_zi, path_zj, path_zk, path_zl, path_zm);
group_bv.push(path_zn, path_zo, path_zp);
group_bw.push(path_zq, path_zr, path_zs, path_zt, path_zu, path_zv, path_zw, path_zx, path_zy);
group_bx.push(path_zz, path_aaa, path_aab, path_aac);
group_by.push(path_aad, path_aae, path_aaf, path_aag);
group_bz.push(path_aah, path_aai, path_aaj, path_aak, path_aal);
group_ca.push(path_aam, path_aan);
group_cb.push(path_aao, path_aap, path_aaq, path_aar, path_aas, path_aat, path_aau, path_aav, path_aaw, path_aax, path_aay, path_aaz, path_aba);
group_cc.push(path_abb, path_abc, path_abd, path_abe, path_abf, path_abg, path_abh, path_abi, path_abj, path_abk, path_abl, path_abm, path_abn, path_abo, path_abp, path_abq, path_abr, path_abs, path_abt);
group_cd.push(path_abu, path_abv, path_abw, path_abx);
group_ce.push();
group_cf.push(path_aby, path_abz, path_aca, path_acb);
group_cg.push(path_acc, path_acd);
group_ch.push(path_ace, path_acf, path_acg, path_ach, path_aci);
group_ci.push();
group_cj.push(path_acj, path_ack, path_acl, path_acm);
group_ck.push(path_acn, path_aco);
group_cl.push(path_acp, path_acq);
group_cm.push(path_acr, path_acs);
group_cn.push(path_act, path_acu, path_acv, path_acw, path_acx, path_acy, path_acz, path_ada, path_adb);
group_co.push(path_adc);
group_cp.push();
group_cq.push(path_add, path_ade);
group_cr.push(path_adf, path_adg);
group_cs.push(path_adh, path_adi, path_adj);
group_ct.push(path_adk, path_adl);
group_cu.push(path_adm, path_adn, path_ado, path_adp, path_adq);
group_cv.push(path_adr, path_ads, path_adt, path_adu);
group_cw.push(path_adv, path_adw);
group_cx.push(path_adx);
group_cy.push();
group_cz.push(path_ady, path_adz, path_aea, path_aeb, path_aec, path_aed, path_aee, path_aef, path_aeg, path_aeh);
group_da.push(path_aei, path_aej);
group_db.push(path_aek, path_ael);
group_dc.push(path_aem, path_aen);
group_dd.push(path_aeo, path_aep, path_aeq, path_aer);
group_de.push(path_aes, path_aet);
group_df.push(path_aeu, path_aev, path_aew, path_aex, path_aey, path_aez, path_afa, path_afb);
group_dg.push(path_afc);
group_dh.push(path_afd, path_afe, path_aff, path_afg);
group_di.push(path_afh, path_afi);
group_dj.push();
group_dk.push(path_afj, path_afk, path_afl, path_afm);
group_dl.push(path_afn, path_afo);
group_dm.push();
group_dn.push(path_afp, path_afq, path_afr, path_afs, path_aft, path_afu);
group_do.push(path_afv, path_afw, path_afx, path_afy, path_afz, path_aga, path_agb, path_agc, path_agd, path_age, path_agf);
group_dp.push(path_agg, path_agh);
group_dq.push(path_agi, path_agj, path_agk, path_agl);
group_dr.push(path_agm, path_agn);
group_ds.push(path_ago, path_agp);
group_dt.push(path_agq, path_agr, path_ags, path_agt, path_agu, path_agv, path_agw, path_agx, path_agy);
group_du.push(path_agz);
group_dv.push(path_aha, path_ahb);
group_dw.push(path_ahc, path_ahd, path_ahe, path_ahf, path_ahg);
group_dx.push(path_ahh, path_ahi, path_ahj, path_ahk);
group_dy.push(path_ahl, path_ahm);
group_dz.push(path_ahn);
group_ea.push();
group_eb.push(path_aho, path_ahp, path_ahq, path_ahr, path_ahs, path_aht, path_ahu, path_ahv, path_ahw, path_ahx);
group_ec.push(path_ahy, path_ahz);
group_ed.push(path_aia, path_aib);
group_ee.push();
group_ef.push(path_aic, path_aid, path_aie, path_aif);
group_eg.push(path_aig, path_aih);
group_eh.push(path_aii, path_aij, path_aik, path_ail, path_aim, path_ain, path_aio, path_aip, path_aiq);
group_ei.push(path_air);
group_ej.push(path_ais, path_ait, path_aiu, path_aiv);
group_ek.push(path_aiw, path_aix);
