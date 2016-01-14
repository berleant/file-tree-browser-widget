var fileWidget = require('file-browser-widget')

module.exports = function (rootDir, children, htmlEl) {
    var widget = fileWidget()
    var rootDirs = makeFileArray(rootDir)
    // find top-level nodes
    var nodesToPrint = []
    children.forEach(function (entry) {
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
        return widget
}


function makeFileArray(pathName) {
	var fileArray = pathName.split('/')
	    while (fileArray[0] === "") {
	      fileArray.shift() // remove empty items from the beginning
	  }
      while (fileArray[fileArray.length - 1] === "") {
	  fileArray.pop() // remove empty items from the end
      }
      return fileArray
}