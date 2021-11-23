<!--
 * @Author: ymq
 * @Date: 2021-11-23 10:49:47
 * @LastEditTime: 2021-11-23 13:54:30
 * @LastEditors: ymq
 * @Description: 
-->

# 为什么要在列表组件中写key？ 其作用是什么？

key是每个vnode的id，主要用于在虚拟dom的diff算法中快速查找到oldVnode。在更新dom时，根据key来重新排列元素要比不适用key是的效率更高。

展开说说diff算法：

diff算法发生在更新子元素的函数内（updateChildren），算法的原理就是按顺序对比新前旧前，新后旧后，新后旧前，新前旧后的元素是否相同，判断元素是否相同（sameVnode）就使用了key这一重要属性， 优先判断key是否相同，再判断标签等条件是否相同。若新旧元素判定为同一元素，进行更新即可。若不相同，将执行更深入的判断：在oldChildren中查找新前元素，若匹配不到相同key，则视为新元素。

因此说key是vnode的唯一标识。带有key的元素更新时更高效。
