#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform vec2 u_offset;
uniform float u_time;

void main() {
  vec3 color = vec3(sin(u_time), 0.0, 0.0);
  gl_FragColor = vec4(color, 1.0);
}
