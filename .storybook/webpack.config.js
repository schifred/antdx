module.exports = ({config}) => {
  config.module.rules.shift();
  config.module.rules.unshift({
  "test": /\.(js|jsx|mjs)$/,
  "loader": [
    {
      "loader": "/Users/alfred/Desktop/dvp/plutarch/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js",
      "options": {
        "babelrc": true,
        "presets": [
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_preset-env@7.4.5@@babel/preset-env/lib/index.js",
            {
              "targets": {
                "browsers": [
                  "last 2 versions",
                  "IE >= 9",
                ],
              },
              "forceAllTransforms": true,
              "loose": true,
              "useBuiltIns": "usage",
              "corejs": "2",
              "modules": "commonjs",
            },
          ],
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_preset-react@7.0.0@@babel/preset-react/lib/index.js",
        ],
        "plugins": [
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-transform-runtime@7.4.4@@babel/plugin-transform-runtime/lib/index.js",
            {
              "helpers": true,
              "regenerator": true,
              "corejs": "2",
            },
          ],
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_babel-plugin-add-module-exports@1.0.2@babel-plugin-add-module-exports/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-function-bind@7.2.0@@babel/plugin-proposal-function-bind/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-export-default-from@7.2.0@@babel/plugin-proposal-export-default-from/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-logical-assignment-operators@7.2.0@@babel/plugin-proposal-logical-assignment-operators/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-pipeline-operator@7.3.2@@babel/plugin-proposal-pipeline-operator/lib/index.js",
            {
              "proposal": "minimal",
            },
          ],
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-nullish-coalescing-operator@7.4.4@@babel/plugin-proposal-nullish-coalescing-operator/lib/index.js",
            {
              "loose": false,
            },
          ],
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-do-expressions@7.2.0@@babel/plugin-proposal-do-expressions/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-decorators@7.4.4@@babel/plugin-proposal-decorators/lib/index.js",
            {
              "legacy": true,
            },
          ],
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-function-sent@7.2.0@@babel/plugin-proposal-function-sent/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-export-namespace-from@7.2.0@@babel/plugin-proposal-export-namespace-from/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-numeric-separator@7.2.0@@babel/plugin-proposal-numeric-separator/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-throw-expressions@7.2.0@@babel/plugin-proposal-throw-expressions/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-syntax-dynamic-import@7.2.0@@babel/plugin-syntax-dynamic-import/lib/index.js",
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-syntax-import-meta@7.2.0@@babel/plugin-syntax-import-meta/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-class-properties@7.4.4@@babel/plugin-proposal-class-properties/lib/index.js",
            {
              "loose": true,
            },
          ],
          "/Users/alfred/Desktop/dvp/plutarch/node_modules/_@babel_plugin-proposal-json-strings@7.2.0@@babel/plugin-proposal-json-strings/lib/index.js",
          [
            "/Users/alfred/Desktop/dvp/antdx/node_modules/_babel-plugin-import@1.12.0@babel-plugin-import/lib/index.js",
            {
              "libraryName": "antd",
              "style": "css",
            },
          ],
        ],
        "cacheDirectory": true,
      },
    },
  ],
  "exclude": [
    /node_modules/,
  ],
});
  config.module.rules.push({
    test: /.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.module.rules.push({
    test: /.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  });
  config.resolve.alias = {
    ...config.resolve.alias, 
    ...{"@babel/runtime-corejs2":"/Users/alfred/Desktop/dvp/plutarch/node_modules/_webpackrc-cfg@1.1.19@webpackrc-cfg/node_modules/@babel/runtime-corejs2","@babel/plugin-transform-runtime":"/Users/alfred/Desktop/dvp/plutarch/node_modules/_webpackrc-cfg@1.1.19@webpackrc-cfg/node_modules/@babel/plugin-transform-runtime","components":"/Users/alfred/Desktop/dvp/antdx/src/components","antdx":"/Users/alfred/Desktop/dvp/antdx/src/antdx.js"}
  };
  return config;
};