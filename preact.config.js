import CopyWebpackPlugin from 'copy-webpack-plugin'
import ProvidePlugin from 'webpack'

export default (config, env, webpack) => {
  if(env.production) {
    config.output.publicPath = '/app/';
  }
  //config.externals = {
  //   'plotly-basic': 'Plotly'
  //}
};
