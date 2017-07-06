import TreeChoices from './turns/t0'

export default (function () {
  let treeRoot
  let currentNode

  function createInstance () {
    return TreeChoices
  }

  return {
    getTreeRoot: function () {
      if (!treeRoot) {
        treeRoot = createInstance()
        currentNode = treeRoot
      }
      return treeRoot
    },
    setNextTurn: function (choice) {
      console.log(choice, currentNode, currentNode.childs)
      if (currentNode && currentNode.childs) {
        console.log(currentNode)
        currentNode = currentNode.childs[choice]
        console.log(currentNode)
      }
    },
    getCurrentTurn: function () {
      if (!currentNode) {
        if (!treeRoot) {
          treeRoot = createInstance()
        }
        currentNode = treeRoot
      }
      return currentNode
    }
  }
})()
