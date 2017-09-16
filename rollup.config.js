import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/add/operator/map': 'Rx'
};

export default {
    entry: './dist/modules/ng2-parallaxscroll.es5.js',
    dest: './dist/bundles/ng2-parallaxscroll.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.ng2ParallaxScroll',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
