import type { BaseRecord } from '#/index'

export const treeToList = <T extends BaseRecord>(
  tree: T[],
  childrenKey = 'children',
  isDepthFirst = true
) => {
  const result: T[] = []
  while (tree.length > 0) {
    const topItem = tree.shift()
    if (topItem) {
      result.push(topItem)
      const children = topItem[childrenKey]
      if (Array.isArray(children)) {
        if (isDepthFirst) {
          result.unshift(...children)
        } else {
          result.push(...children)
        }
      }
    }
  }
  return result
}
