import CopyWebpackPlugin from 'copy-webpack-plugin'

export default (config, env, webpack) => {
  if(env.production) {
    config.output.publicPath = '/app/';
  }
  config.module.rules.push( // = [
      {
        //test: require.resolve('./src/index.js'),
        test: require.resolve('./node_modules/plotly.js-basic-dist/plotly-basic.js'),
        use: 'imports-loader?wrapper=window',
      }
  );
  //];
  //config.plugins.push( 
  //  new CopyWebpackPlugin(
  //    { patterns: [{ 
  //        from: '../node_modules/plotly.js-basic-dist/plotly-*.js',
  //        to: 'build/'
  //    }]
  //    }
  //  ) 
  //);

  //config.externals = {
  //  plotly: 'Plotly'
  //};
};