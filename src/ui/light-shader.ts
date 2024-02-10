const LightShader = {
    uniforms: {
        "tDiffuse": {
            //@ts-ignore
            value: null,
        },
        "resolution": {
            value: [1280, 720]
        },
        "center": {
            value: [1280 / 2, 720 / 2]
        },
        "time": {
            value: 0
        }
    },
    vertexShader:
/* glsl */
`
    varying vec2 vUv;

    void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,
    fragmentShader:
/* glsl */
`
    #include <common>

    varying vec2 vUv;

    uniform sampler2D tDiffuse;
    uniform vec2 center;
    uniform vec2 resolution;
    uniform float time;

    void main() {

        vec2 offset = center + vec2(10.0 * sin(time * 0.001), 10.0 * cos(time * 0.0014));
        vec2 dist = vec2(vUv.x * resolution.x - offset.x, vUv.y * resolution.y - offset.y);
        float intensity = min(1.0, 1.0 - (dist.x * dist.x + dist.y * dist.y) / 40000.0);
        gl_FragColor = intensity * texture2D(tDiffuse, vUv);
        gl_FragColor.a = 1.0;

    }`
};

export { LightShader }