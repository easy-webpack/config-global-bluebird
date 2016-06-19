import {WebpackConfig, get} from '@easy-webpack/core'
import * as webpack from 'webpack'

export function bluebird() {
  return function bluebird(this: WebpackConfig): WebpackConfig {
    return {
      plugins: [
        new webpack.ProvidePlugin({
          'Promise': 'bluebird',
        })
      ].concat(get(this, 'plugins', []))
    }
  }
}