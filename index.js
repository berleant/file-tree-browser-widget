"use strict"

var fileWidget = require('file-browser-widget')

module.exports = function (rootDir, children, htmlEl) {
    var widget = fileWidget()
    var rootDirs = makeFileArray(rootDir)
    console.log(rootDir)
    // find top-level nodes
    var nodesToPrint = []
    children.forEach(function (entry) {
	    console.log(entry)
	    var nodeDirs = makeFileArray(entry.path)
	    if (nodeDirs.length === (rootDirs.length + 1)) {
		var isChild = true
		for (var i = 0; i < rootDirs.length && isChild === true; i++) {
		    isChild = (nodeDirs[i] === rootDirs[i])
		}
		if (isChild === true) nodesToPrint.push(entry)
	    }
	})

	widget.directory(rootDir, nodesToPrint)
	widget.appendTo(htmlEl)
}
    /*



	  var that = new events.EventEmitter()
  var comp


    console.log(entry)
    children.push({
      type: entry.type,
      path: entry.value.name,
      size: entry.value.size,
      mtime: entry.value.mtime
    })
  })
  fileWidget.appendTo(
  treeWidget.rootDirectory('/', children)
  fileWidget.directory('/', children)
}
    */


    function makeFileArray(pathName) {
	console.log(pathName)
	var fileArray = pathName.split('/')
	    while (fileArray[0] === "") {
	      fileArray.shift() // remove empty items from the beginning
	  }
      while (fileArray[fileArray.length - 1] === "") {
	  fileArray.pop() // remove empty items from the end
      }
      return fileArray
  }