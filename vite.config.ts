import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * Vite 构建配置。
 *
 * 项目同时承担两个产物：
 *
 * - demo：输出到 `dist`，用于 GitHub Pages 预览。
 * - lib：输出到 `lib`，用于 npm 包发布。
 *
 * 通过 `--mode demo` 区分站点构建，其余模式默认走库构建，避免 demo 资源混入库包。
 */
export default defineConfig(({ mode }) => {
    /**
     * 是否正在构建 GitHub Pages demo。
     */
    const isDemoBuild = mode === 'demo';

    return {
        /**
         * GitHub Pages 部署在仓库子路径下，库构建和本地开发使用根路径。
         */
        base: isDemoBuild ? '/vue-aliplayer-v2/' : '/',
        plugins: [vue()],
        /**
         * 只有 demo 需要复制 `public` 资源；库构建禁用 publicDir，减少发布产物噪音。
         */
        publicDir: isDemoBuild ? 'public' : false,
        build: isDemoBuild
            ? {
                /**
                 * demo 站点输出目录。
                 */
                outDir: 'dist',
                emptyOutDir: true
            }
            : {
                /**
                 * npm 包输出目录。
                 */
                outDir: 'lib',
                emptyOutDir: false,
                /**
                 * Vue 组件库入口配置。
                 */
                lib: {
                    entry: resolve(__dirname, 'packages/index.ts'),
                    name: 'VueAliplayerV2',
                    fileName: 'vue-aliplayer-v2'
                },
                /**
                 * Vue 由宿主项目提供，库包不把 Vue 打进 bundle。
                 */
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        exports: 'named',
                        globals: {
                            vue: 'Vue'
                        }
                    }
                }
            }
    };
});
