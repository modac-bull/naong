import babelPluginTypescript from '@babel/plugin-syntax-typescript'
import babelPluginMacros from 'babel-plugin-macros'
import babelPluginTwin from 'babel-plugin-twin'
import * as path from 'path'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')]

/** @returns {import('next').NextConfig} */
export default function withTwin(
  /** @type {import('next').NextConfig} */
  nextConfig,
) {
  return {
    ...nextConfig,
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []

      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: options.dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
              ],
              plugins: [
                babelPluginTwin, // Optional
                babelPluginMacros,
                [babelPluginTypescript, { isTSX: true }],
              ],
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function')
        return nextConfig.webpack(config, options)

      return config
    },
  }
}
