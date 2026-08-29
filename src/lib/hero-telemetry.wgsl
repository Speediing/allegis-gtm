struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdRoundedBox(p: vec2f, b: vec2f, r: f32) -> f32 {
  return sdBox(p, max(b - vec2f(r), vec2f(0.0))) - r;
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn computer(p: vec2f, center: vec2f) -> f32 {
  let q = p - center;
  let shell = sdRoundedBox(q, vec2f(0.105, 0.072), 0.014);
  let screen = sdRoundedBox(q - vec2f(0.0, -0.006), vec2f(0.086, 0.050), 0.006);
  let frame = max(shell, -screen);
  let stem = sdRoundedBox(q - vec2f(0.0, 0.087), vec2f(0.012, 0.022), 0.004);
  let base = sdRoundedBox(q - vec2f(0.0, 0.112), vec2f(0.050, 0.006), 0.003);
  return min(frame, min(stem, base));
}

fn handoffs(p: vec2f, t: f32) -> f32 {
  var acc = 0.0;
  for (var i = 0; i < 4; i = i + 1) {
    let fi = f32(i);
    let y0 = -0.24 + fi * 0.16;
    let wave = y0 + 0.022 * sin(p.x * (6.0 + fi) + t * (0.3 + fi * 0.08));
    let d = abs(p.y - wave);
    let dash = abs(fract(p.x * 3.2 + t * 0.08 + fi * 0.21) - 0.5);
    acc += (1.0 - smoothstep(0.0, 0.003, d))
      * (1.0 - smoothstep(0.38, 0.5, dash))
      * 0.22;
  }
  return acc;
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let t = params.time;

  var fleet = 10.0;
  var glow = 0.0;
  for (var i = 0; i < 4; i = i + 1) {
    let column = f32(i % 2);
    let row = f32(i / 2);
    let center = vec2f(0.20 + 0.25 * column, -0.13 + 0.26 * row);
    let d = computer(p, center);
    fleet = min(fleet, d);
    glow += exp(-max(d, 0.0) * 22.0);
  }

  let line = 1.0 - smoothstep(0.0, 0.0045, abs(fleet));
  let traces = handoffs(p, t);
  let cell = floor(uv * vec2f(34.0, 20.0));
  let h = hash21(cell);
  let spark = step(0.976, h) * (0.45 + 0.55 * sin(t * 1.7 + h * 36.0));

  let navy = vec3f(0.0235, 0.1059, 0.1922);
  let sky = vec3f(0.0157, 0.5804, 0.8235);
  let gold = vec3f(0.9882, 0.7059, 0.0902);
  let leftClear = smoothstep(0.34, 0.62, uv.x);
  var alpha = line * 0.32 + glow * 0.035 + traces * 0.30 + spark * 0.08;
  alpha *= 0.58 * leftClear;
  alpha = clamp(alpha, 0.0, 0.38);
  let color = mix(mix(navy, sky, traces), gold, spark);
  return vec4f(color * alpha, alpha);
}
