/**
 * 本文件暴露出setSidebar()方法，自动的根据文件格式生成sidebar
 */
import path from 'node:path'
import fs from 'node:fs'
type SidebarItem = {
    /**
     * The text label of the item.
     */
    text?: string

    /**
     * The link of the item.
     */
    link?: string

    /**
     * The children of the item.
     */
    items?: SidebarItem[]

    /**
     * If not specified, group is not collapsible.
     *
     * If `true`, group is collapsible and collapsed by default
     *
     * If `false`, group is collapsible but expanded by default
     */
    collapsed?: boolean

    /**
     * Base path for the children items.
     */
    base?: string

    /**
     * Customize text that appears on the footer of previous/next page.
     */
    docFooterText?: string

    rel?: string
    target?: string
}

// 文件根目录
const DIR_PATH: string = path.resolve()
// 文件白名单
const WHITE_LIST: string[] = [
    'index.md',
    '.vitepress',
    'node_modules',
    '.idea',
    'assets',
]

// 判断是否是文件夹
const isDirectory = (path: string): boolean => fs.lstatSync(path).isDirectory()

function getList(files: string[], path1: string, pathname: string): SidebarItem[] {
    const res: SidebarItem[] = []
    for (let fileName in files) {
        const dir: string = path.join(path1, files[fileName])
        // 判断是否是文件夹
        if (isDirectory(dir)) {
            const filesInner: string[] = fs.readdirSync(dir)
            res.push({
                text: files[fileName],
                collapsed: true,
                items: getList(filesInner, dir, `${pathname}/${files[fileName]}`),
            })
        } else {
            const name: string = path.basename(files[fileName])
            // 排除非md文件
            const extname: string = path.extname(name)
            if (extname !== '.md') continue
            res.push({
                text: name,
                link: `${pathname}/${name}`,
            })
        }
    }
    // 同一处理name后缀
    res.map((item) => {
      item.text = item.text?.replace(/\.md$/, "")  
    })
    return res
}

export const setSidebar = (pathname: string): ReturnType<typeof getList> => {
    // 获取pathname的路径
    const dirPath: string = path.join(DIR_PATH, pathname)
    // 读取pathname下的所有文件或文件夹
    const files: string[] = fs.readdirSync(dirPath)
    // 过滤白名单
    const filteredFiles: string[] = files.filter(file => !WHITE_LIST.includes(file))
    return getList(filteredFiles, dirPath, pathname)
}