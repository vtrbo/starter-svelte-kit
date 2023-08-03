import type { CustomIconLoader } from 'unplugin-icons/types'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// 加载 `src/lib/icons` 文件夹内所有的 svg 图标
// 同时适用于 unocss 和 unplugin-icons
export function collectionIcons(): CustomIconLoader {
  return FileSystemIconLoader(
    'src/lib/icons',
    svg => svg
      .replace(/fill=".*?"/g, 'fill="currentColor"')
      .replace(/width=".*?"/g, '')
      .replace(/height=".*?"/g, ''),
  )
}
