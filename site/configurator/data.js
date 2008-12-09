var configData = {"modules":{"anim":{"ext":false,"name":"anim","path":"anim\/anim-min.js","requires":["base","node"],"rollup":4,"submodules":{"anim-base":{"ext":false,"name":"anim-base","path":"anim\/anim-base-min.js","requires":["base","node-style"],"type":"js"},"anim-color":{"ext":false,"name":"anim-color","path":"anim\/anim-color-min.js","requires":["anim-base"],"type":"js"},"anim-curve":{"ext":false,"name":"anim-curve","path":"anim\/anim-curve-min.js","requires":["anim-xy"],"type":"js"},"anim-easing":{"ext":false,"name":"anim-easing","path":"anim\/anim-easing-min.js","requires":[],"type":"js"},"anim-node-plugin":{"ext":false,"name":"anim-node-plugin","path":"anim\/anim-node-plugin-min.js","requires":["node","anim-base"],"type":"js"},"anim-scroll":{"ext":false,"name":"anim-scroll","path":"anim\/anim-scroll-min.js","requires":["anim-base"],"type":"js"},"anim-xy":{"ext":false,"name":"anim-xy","path":"anim\/anim-xy-min.js","requires":["anim-base","node-screen"],"type":"js"}},"supersedes":["anim-base","anim-color","anim-curve","anim-easing","anim-scroll","anim-xy","anim-node-plugin"],"type":"js","info":{"desc":"Y.Animation Utility.","cat":"util","name":""},"sizes":{"min":8419,"mingz":3130,"debug":32845,"debuggz":7208,"raw":32845,"rawgz":7208}},"anim-base":{"ext":false,"name":"anim-base","path":"anim\/anim-base-min.js","requires":["base","node-style"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"util","name":""},"sizes":{"min":4449,"mingz":1914,"debug":15980,"debuggz":3939,"raw":15980,"rawgz":3939}},"anim-color":{"ext":false,"name":"anim-color","path":"anim\/anim-color-min.js","requires":["anim-base"],"type":"js","isSubMod":true,"info":{"desc":"Adds support for color properties in <code>to<\/code>\nand <code>from<\/code> attributes.","cat":"util","name":""},"sizes":{"min":936,"mingz":571,"debug":1594,"debuggz":758,"raw":1594,"rawgz":758}},"anim-curve":{"ext":false,"name":"anim-curve","path":"anim\/anim-curve-min.js","requires":["anim-xy"],"type":"js","isSubMod":true,"info":{"desc":"Adds support for the <code>curve<\/code> property for the <code>to<\/code> \nattribute.  A curve is zero or more control points and an end point.","cat":"util","name":""},"sizes":{"min":712,"mingz":476,"debug":1854,"debuggz":916,"raw":1854,"rawgz":916}},"anim-easing":{"ext":false,"name":"anim-easing","path":"anim\/anim-easing-min.js","requires":[],"type":"js","isSubMod":true,"info":{"desc":"The easing module provides methods for customizing\nhow an animation behaves during each run.","cat":"util","name":""},"sizes":{"min":2373,"mingz":819,"debug":12441,"debuggz":2338,"raw":12441,"rawgz":2338}},"anim-node-plugin":{"ext":false,"name":"anim-node-plugin","path":"anim\/anim-node-plugin-min.js","requires":["node","anim-base"],"type":"js","isSubMod":true,"info":{"desc":"Binds an Anim instance to a Node instance","cat":"util","name":""},"sizes":{"min":468,"mingz":348,"debug":625,"debuggz":423,"raw":625,"rawgz":423}},"anim-scroll":{"ext":false,"name":"anim-scroll","path":"anim\/anim-scroll-min.js","requires":["anim-base"],"type":"js","isSubMod":true,"info":{"desc":"Adds support for the <code>scroll<\/code> property in <code>to<\/code>\nand <code>from<\/code> attributes.","cat":"util","name":""},"sizes":{"min":541,"mingz":380,"debug":1055,"debuggz":534,"raw":1055,"rawgz":534}},"anim-xy":{"ext":false,"name":"anim-xy","path":"anim\/anim-xy-min.js","requires":["anim-base","node-screen"],"type":"js","isSubMod":true,"info":{"desc":"Adds support for the <code>xy<\/code> property in <code>from<\/code> and \n<code>to<\/code> attributes.","cat":"util","name":""},"sizes":{"min":425,"mingz":333,"debug":791,"debuggz":465,"raw":791,"rawgz":465}},"attribute":{"ext":false,"name":"attribute","path":"attribute\/attribute-min.js","requires":["event"],"type":"js","info":{"desc":"Managed Attribute Provider","cat":"infra","name":""},"sizes":{"min":3919,"mingz":1826,"debug":28421,"debuggz":7122,"raw":27349,"rawgz":6887}},"base":{"ext":false,"name":"base","path":"base\/base-min.js","requires":["attribute"],"type":"js","info":{"desc":"Base class support for objects requiring\nmanaged attributes and acting as event targets","cat":"infra","name":""},"sizes":{"min":4062,"mingz":1598,"debug":24714,"debuggz":5558,"raw":24558,"rawgz":5516}},"classnamemanager":{"ext":false,"name":"classnamemanager","path":"classnamemanager\/classnamemanager-min.js","requires":[],"type":"js","info":{"desc":"Contains a singleton (ClassNameManager) that enables easy creation and caching of \nprefixed class names.","cat":"util","name":""},"sizes":{"min":494,"mingz":358,"debug":2136,"debuggz":948,"raw":2136,"rawgz":948}},"compat":{"ext":false,"name":"compat","path":"compat\/compat-min.js","requires":["node","dump","substitute"],"type":"js","info":{"desc":"","cat":"other","name":"compat"},"sizes":{}},"console":{"ext":false,"name":"console","path":"console\/console-min.js","requires":["widget","substitute","skin-sam-console","skin-sam-console"],"skinnable":true,"type":"js","info":{"desc":"A user interface for viewing log messages.","cat":"tool","name":""},"sizes":{"min":8077,"mingz":3006,"debug":32769,"debuggz":7857,"raw":32769,"rawgz":7857}},"cookie":{"ext":false,"name":"cookie","path":"cookie\/cookie-min.js","requires":[],"type":"js","info":{"desc":"Utilities for cookie management","cat":"util","name":""},"sizes":{"min":3296,"mingz":1270,"debug":16799,"debuggz":3136,"raw":16799,"rawgz":3136}},"cssbase":{"after":["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],"ext":false,"name":"cssbase","path":"cssbase\/base-min.css","requires":[],"type":"css","info":{"desc":"CSS Base is an optional CSS file that complements YUI's core CSS foundation (CSS Reset, CSS Fonts, and CSS Grids). CSS Base applies a style foundation for HTML elements that is consistent for A-grade browsers","cat":"css","name":""},"sizes":{"min":751,"mingz":461,"raw":1781,"rawgz":900}},"cssbase-context":{"after":["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],"ext":false,"name":"cssbase-context","path":"cssbase\/base-context-min.css","requires":[],"type":"css","info":{"desc":"This module provides functionality similar to cssbase but can be applied to specific sections (or contexts) in your page","cat":"css","name":""},"sizes":{"min":1232,"mingz":502,"raw":2262,"rawgz":950}},"cssfonts":{"ext":false,"name":"cssfonts","path":"cssfonts\/fonts-min.css","requires":[],"type":"css","info":{"desc":"The foundational CSS Fonts provides cross-browser typographical normalization and control while still allowing users to choose and adjust their font size. Both Standards and Quirks modes are supported in A-grade browsers","cat":"css","name":""},"sizes":{"min":427,"mingz":310,"raw":833,"rawgz":501}},"cssfonts-context":{"ext":false,"name":"cssfonts-context","path":"cssfonts\/fonts-context-min.css","requires":[],"type":"css","info":{"desc":"This module provides functionality similar to cssfonts but can be applied to specific sections (or contexts) in your page","cat":"css","name":""},"sizes":{"min":595,"mingz":344,"raw":1002,"rawgz":532}},"cssgrids":{"ext":false,"name":"cssgrids","optional":["cssreset"],"path":"cssgrids\/grids-min.css","requires":["cssfonts"],"type":"css","info":{"desc":"The foundational CSS Grids offers four preset page widths, six preset two-column source-order-independent content templates, and the ability to stack and nest subdivided regions of two, three, or four columns. The file provides over 1000 page layout combinations","cat":"css","name":""},"sizes":{"min":4900,"mingz":1099,"raw":7629,"rawgz":2066}},"cssgrids-context":{"ext":false,"name":"cssgrids-context","optional":["cssreset-context"],"path":"cssgrids\/grids-context-min.css","requires":["cssfonts-context"],"type":"css","info":{"desc":"This module provides functionality similar to cssgrids but can be applied to specific sections (or contexts) in your page","cat":"css","name":""},"sizes":{"min":7460,"mingz":1186,"raw":10207,"rawgz":2154}},"cssreset":{"ext":false,"name":"cssreset","path":"cssreset\/reset-min.css","requires":[],"type":"css","info":{"desc":"The foundational CSS Reset removes the inconsistent styling of HTML elements provided by browsers. This creates a dependably flat foundation to built upon. With CSS Reset loaded, write explicit CSS your project needs","cat":"css","name":""},"sizes":{"min":849,"mingz":500,"raw":1585,"rawgz":842}},"cssreset-context":{"ext":false,"name":"cssreset-context","path":"cssreset\/reset-context-min.css","requires":[],"type":"css","info":{"desc":"This module provides functionality similar to cssrest but can be applied to specific sections (or contexts) in your page","cat":"css","name":""},"sizes":{"min":1689,"mingz":558,"raw":2426,"rawgz":900}},"dd":{"ext":false,"name":"dd","path":"dd\/dd-min.js","requires":[],"rollup":4,"submodules":{"dd-constrain":{"ext":false,"name":"dd-constrain","path":"dd\/dd-constrain-min.js","requires":["dd-drag","dd-proxy"],"type":"js"},"dd-ddm":{"ext":false,"name":"dd-ddm","path":"dd\/dd-ddm-min.js","requires":["dd-ddm-base"],"type":"js"},"dd-ddm-base":{"ext":false,"name":"dd-ddm-base","path":"dd\/dd-ddm-base-min.js","requires":["node","base"],"type":"js"},"dd-ddm-drop":{"ext":false,"name":"dd-ddm-drop","path":"dd\/dd-ddm-drop-min.js","requires":["dd-ddm"],"type":"js"},"dd-drag":{"ext":false,"name":"dd-drag","path":"dd\/dd-drag-min.js","requires":["dd-ddm-base"],"type":"js"},"dd-drop":{"ext":false,"name":"dd-drop","path":"dd\/dd-drop-min.js","requires":["dd-ddm-drop"],"type":"js"},"dd-drop-plugin":{"ext":false,"name":"dd-drop-plugin","path":"dd\/dd-drop-plugin-min.js","requires":["dd-drop"],"type":"js"},"dd-plugin":{"ext":false,"name":"dd-plugin","optional":["dd-constrain","dd-proxy"],"path":"dd\/dd-plugin-min.js","requires":["dd-drag"],"type":"js"},"dd-proxy":{"ext":false,"name":"dd-proxy","path":"dd\/dd-proxy-min.js","requires":["dd-drag"],"type":"js"}},"supersedes":["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-drop","dd-proxy","dd-constrain","dd-plugin","dd-drop-plugin"],"type":"js","info":{"desc":"Extends the dd-ddm Class to add support for the placement of Drop Target shims inside the viewport shim. It also handles all Drop Target related events and interactions.","cat":"util","name":""},"sizes":{"min":24727,"mingz":7095,"debug":98006,"debuggz":18762,"raw":96340,"rawgz":18404}},"dd-constrain":{"ext":false,"name":"dd-constrain","path":"dd\/dd-constrain-min.js","requires":["dd-drag","dd-proxy"],"type":"js","isSubMod":true,"info":{"desc":"This class extends the dd-drag module to add the constraining methods to it. It supports constraining to a region, node or viewport. It also\nsupports tick based moves and XY axis constraints.","cat":"util","name":""},"sizes":{"min":3565,"mingz":1400,"debug":14171,"debuggz":3409,"raw":13822,"rawgz":3332}},"dd-ddm":{"ext":false,"name":"dd-ddm","path":"dd\/dd-ddm-min.js","requires":["dd-ddm-base"],"type":"js","isSubMod":true,"info":{"desc":"Extends the dd-ddm-base Class to add support for the viewport shim to allow a draggable node to drag to be dragged over an iframe or any other node that traps mousemove events.\nIt is also required to have Drop Targets enabled, as the viewport shim will contain the shims for the Drop Targets.","cat":"util","name":""},"sizes":{"min":1404,"mingz":699,"debug":3767,"debuggz":1213,"raw":3767,"rawgz":1213}},"dd-ddm-base":{"ext":false,"name":"dd-ddm-base","path":"dd\/dd-ddm-base-min.js","requires":["node","base"],"type":"js","isSubMod":true,"info":{"desc":"Provides the base Drag Drop Manger required for making a Node draggable.","cat":"util","name":""},"sizes":{"min":2201,"mingz":1038,"debug":9167,"debuggz":2546,"raw":9167,"rawgz":2546}},"dd-ddm-drop":{"ext":false,"name":"dd-ddm-drop","path":"dd\/dd-ddm-drop-min.js","requires":["dd-ddm"],"type":"js","isSubMod":true,"info":{"desc":"Extends the dd-ddm Class to add support for the placement of Drop Target shims inside the viewport shim. It also handles all Drop Target related events and interactions.","cat":"util","name":""},"sizes":{"min":3443,"mingz":1300,"debug":14205,"debuggz":3304,"raw":14062,"rawgz":3252}},"dd-drag":{"ext":false,"name":"dd-drag","path":"dd\/dd-drag-min.js","requires":["dd-ddm-base"],"type":"js","isSubMod":true,"info":{"desc":"This class provides the ability to drag a Node.","cat":"util","name":""},"sizes":{"min":8105,"mingz":2656,"debug":34691,"debuggz":7026,"raw":33517,"rawgz":6795}},"dd-drop":{"ext":false,"name":"dd-drop","path":"dd\/dd-drop-min.js","requires":["dd-ddm-drop"],"type":"js","isSubMod":true,"info":{"desc":"This class provides the ability to create a Drop Target.","cat":"util","name":""},"sizes":{"min":4483,"mingz":1640,"debug":14676,"debuggz":3570,"raw":14676,"rawgz":3570}},"dd-drop-plugin":{"ext":false,"name":"dd-drop-plugin","path":"dd\/dd-drop-plugin-min.js","requires":["dd-drop"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"util","name":""},"sizes":{"min":425,"mingz":342,"debug":1268,"debuggz":579,"raw":1268,"rawgz":579}},"dd-plugin":{"ext":false,"name":"dd-plugin","optional":["dd-constrain","dd-proxy"],"path":"dd\/dd-plugin-min.js","requires":["dd-drag"],"type":"js","isSubMod":true,"info":{"desc":"This is a simple Drop plugin that can be attached to a Node via the plug method.","cat":"util","name":""},"sizes":{"min":450,"mingz":352,"debug":1281,"debuggz":584,"raw":1281,"rawgz":584}},"dd-proxy":{"ext":false,"name":"dd-proxy","path":"dd\/dd-proxy-min.js","requires":["dd-drag"],"type":"js","isSubMod":true,"info":{"desc":"This class extends dd-drag to allow for creating a proxy drag node, instead of dragging the original node.","cat":"util","name":""},"sizes":{"min":1729,"mingz":851,"debug":5845,"debuggz":1788,"raw":5845,"rawgz":1788}},"dom":{"expanded":["event","oop","yui-base","dom-base","dom-style","dom-screen","selector"],"ext":false,"name":"dom","path":"dom\/dom-min.js","requires":["event"],"rollup":3,"submodules":{"dom-base":{"expanded":["event","oop","yui-base"],"ext":false,"name":"dom-base","path":"dom\/dom-base-min.js","requires":["event"],"type":"js"},"dom-screen":{"expanded":["dom-base","event","oop","yui-base","dom-style"],"ext":false,"name":"dom-screen","path":"dom\/dom-screen-min.js","requires":["dom-base","dom-style"],"type":"js"},"dom-style":{"expanded":["dom-base","event","oop","yui-base"],"ext":false,"name":"dom-style","path":"dom\/dom-style-min.js","requires":["dom-base"],"type":"js"},"selector":{"expanded":["dom-base","event","oop","yui-base"],"ext":false,"name":"selector","path":"dom\/selector-min.js","requires":["dom-base"],"type":"js"}},"supersedes":["dom-base","dom-style","dom-screen","selector"],"type":"js","info":{"desc":"Add style management functionality to DOM.","cat":"core","name":""},"sizes":{"min":21132,"mingz":7586,"debug":72212,"debuggz":15820,"raw":71337,"rawgz":15583}},"dom-base":{"expanded":["event","oop","yui-base"],"ext":false,"name":"dom-base","path":"dom\/dom-base-min.js","requires":["event"],"type":"js","isSubMod":true,"info":{"desc":"Provides DOM helper methods.","cat":"util","name":""},"sizes":{"min":4997,"mingz":2011,"debug":22134,"debuggz":4632,"raw":22049,"rawgz":4597}},"dom-screen":{"expanded":["dom-base","event","oop","yui-base","dom-style"],"ext":false,"name":"dom-screen","path":"dom\/dom-screen-min.js","requires":["dom-base","dom-style"],"type":"js","isSubMod":true,"info":{"desc":"Adds position and region management functionality to DOM.","cat":"util","name":""},"sizes":{"min":4658,"mingz":1967,"debug":17933,"debuggz":4249,"raw":17568,"rawgz":4143}},"dom-style":{"expanded":["dom-base","event","oop","yui-base"],"ext":false,"name":"dom-style","path":"dom\/dom-style-min.js","requires":["dom-base"],"type":"js","isSubMod":true,"info":{"desc":"Add style management functionality to DOM.","cat":"util","name":""},"sizes":{"min":4777,"mingz":2210,"debug":13679,"debuggz":3826,"raw":13583,"rawgz":3788}},"dump":{"ext":false,"name":"dump","path":"dump\/dump-min.js","requires":[],"type":"js","info":{"desc":"Returns a simple string representation of the object or array.\nOther types of objects will be returned unprocessed.  Arrays\nare expected to be indexed.  Use object notation for\nassociative arrays.\nIf included, the dump method is added to the YUI instance.","cat":"util","name":""},"sizes":{"min":848,"mingz":494,"debug":3005,"debuggz":1133,"raw":3005,"rawgz":1133}},"event":{"expanded":["oop","yui-base"],"ext":false,"name":"event","path":"event\/event-min.js","requires":["oop"],"type":"js","info":{"desc":"The YUI event system","cat":"core","name":""},"sizes":{"min":22499,"mingz":7584,"debug":128699,"debuggz":26612,"raw":125660,"rawgz":25914}},"get":{"_provides":{"get":true},"_supersedes":{},"expanded":["yui-base"],"ext":false,"name":"get","path":"get\/get-min.js","requires":["yui-base"],"type":"js","info":{"desc":"Fetches and inserts one or more script or link nodes into the document","cat":"core","name":""},"sizes":{"min":3397,"mingz":1566,"debug":20801,"debuggz":4936,"raw":19500,"rawgz":4653}},"io":{"ext":false,"name":"io","path":"io\/io-min.js","requires":[],"rollup":4,"submodules":{"io-base":{"ext":false,"name":"io-base","path":"io\/io-base-min.js","requires":["node"],"type":"js"},"io-form":{"ext":false,"name":"io-form","path":"io\/io-form-min.js","requires":["io-base"],"type":"js"},"io-queue":{"ext":false,"name":"io-queue","path":"io\/io-queue-min.js","requires":["io-base"],"type":"js"},"io-upload-iframe":{"ext":false,"name":"io-upload-iframe","path":"io\/io-upload-iframe-min.js","requires":["io-base"],"type":"js"},"io-xdr":{"ext":false,"name":"io-xdr","path":"io\/io-xdr-min.js","requires":["io-base"],"type":"js"}},"supersedes":["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],"type":"js","info":{"desc":"HTTP communications module.","cat":"util","name":""},"sizes":{"min":6145,"mingz":2636,"debug":30540,"debuggz":7579,"raw":28970,"rawgz":7255}},"io-base":{"ext":false,"name":"io-base","path":"io\/io-base-min.js","requires":["node"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"io-base"},"sizes":{"min":3515,"mingz":1571,"debug":19654,"debuggz":5142,"raw":18524,"rawgz":4912}},"io-form":{"ext":false,"name":"io-form","path":"io\/io-form-min.js","requires":["io-base"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"io-form"},"sizes":{"min":1119,"mingz":653,"debug":3736,"debuggz":1237,"raw":3646,"rawgz":1200}},"io-queue":{"ext":false,"name":"io-queue","path":"io\/io-queue-min.js","requires":["io-base"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"io-queue"},"sizes":{"min":890,"mingz":561,"debug":5471,"debuggz":1592,"raw":5018,"rawgz":1463}},"io-upload-iframe":{"ext":false,"name":"io-upload-iframe","path":"io\/io-upload-iframe-min.js","requires":["io-base"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"io-upload-iframe"},"sizes":{"min":1946,"mingz":1035,"debug":4684,"debuggz":1955,"raw":4684,"rawgz":1955}},"io-xdr":{"ext":false,"name":"io-xdr","path":"io\/io-xdr-min.js","requires":["io-base"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"io-xdr"},"sizes":{"min":844,"mingz":568,"debug":2818,"debuggz":1225,"raw":2818,"rawgz":1225}},"json":{"expanded":["json-parse","json-stringify"],"ext":false,"name":"json","path":"json\/json-min.js","requires":[],"rollup":1,"submodules":{"json-parse":{"expanded":[],"ext":false,"name":"json-parse","path":"json\/json-parse-min.js","requires":[],"type":"js"},"json-stringify":{"expanded":[],"ext":false,"name":"json-stringify","path":"json\/json-stringify-min.js","requires":[],"type":"js"}},"supersedes":["json-parse","json-stringify"],"type":"js","info":{"desc":"The JSON Utility provides methods to serialize JavaScript objects into\nJSON strings and parse JavaScript objects from strings containing JSON data.\nThree modules are available for inclusion:\n<ol>\n<li>1. <code>json-parse<\/code> for parsing JSON strings into native JavaScript data<\/li>\n<li>2. <code>json-stringify<\/code> for stringification of JavaScript objects into JSON strings<\/li>\n<li>3. <code>json<\/code> for both parsing and stringification<\/li>\n<\/ol>\nBoth <code>json-parse<\/code> and <code>json-stringify<\/code> create functions in a static JSON class under your YUI instance (e.g. Y.JSON.parse(..)).","cat":"util","name":""},"sizes":{"min":2915,"mingz":1468,"debug":11497,"debuggz":3875,"raw":11497,"rawgz":3875}},"json-parse":{"expanded":[],"ext":false,"name":"json-parse","path":"json\/json-parse-min.js","requires":[],"type":"js","isSubMod":true,"info":{"desc":"Provides Y.JSON.parse method to take JSON strings and return native\nJavaScript objects.","cat":"util","name":""},"sizes":{"min":1220,"mingz":779,"debug":5123,"debuggz":2089,"raw":5123,"rawgz":2089}},"json-stringify":{"expanded":[],"ext":false,"name":"json-stringify","path":"json\/json-stringify-min.js","requires":[],"type":"js","isSubMod":true,"info":{"desc":"Provides Y.JSON.stringify method for converting objects to JSON strings.","cat":"util","name":""},"sizes":{"min":1773,"mingz":1003,"debug":6444,"debuggz":2291,"raw":6444,"rawgz":2291}},"loader":{"_provides":{"loader":true},"_supersedes":{},"expanded":["get","yui-base"],"ext":false,"name":"loader","path":"loader\/loader-min.js","requires":["get"],"type":"js","info":{"desc":"Loader dynamically loads script and css files.  It includes the dependency\ninfo for the version of the library in use, and will automatically pull in\ndependencies for the modules requested.  It supports rollup files and will\nautomatically use these when appropriate in order to minimize the number of\nhttp connections required to load all of the dependencies.  It can load the\nfiles from the Yahoo! CDN, and it can utilize the combo service provided on\nthis network to reduce the number of http connections required to download \nYUI files.","cat":"core","name":""},"sizes":{"min":12242,"mingz":4186,"debug":58103,"debuggz":12999,"raw":55664,"rawgz":12421}},"node":{"expanded":["dom","event","oop","yui-base","dom-base","dom-style","dom-screen","selector","node-base","node-style","node-screen","node-event-simulate"],"ext":false,"name":"node","path":"node\/node-min.js","requires":["dom"],"rollup":3,"submodules":{"node-base":{"expanded":["dom-base","event","oop","yui-base","selector"],"ext":false,"name":"node-base","path":"node\/node-base-min.js","requires":["dom-base","selector"],"type":"js"},"node-event-simulate":{"expanded":["node-base","dom-base","event","oop","yui-base","selector"],"ext":false,"name":"node-event-simulate","path":"node\/node-event-simulate-min.js","requires":["node-base"],"type":"js"},"node-screen":{"expanded":["dom-screen","dom-base","event","oop","yui-base","dom-style","node-base","selector"],"ext":false,"name":"node-screen","path":"node\/node-screen-min.js","requires":["dom-screen","node-base"],"type":"js"},"node-style":{"expanded":["dom-style","dom-base","event","oop","yui-base","node-base","selector"],"ext":false,"name":"node-style","path":"node\/node-style-min.js","requires":["dom-style","node-base"],"type":"js"}},"supersedes":["node-base","node-style","node-screen","node-event-simulate"],"type":"js","info":{"desc":"The Node Utility provides a DOM-like interface for interacting with DOM nodes.","cat":"core","name":""},"sizes":{"min":6663,"mingz":2592,"debug":35777,"debuggz":7445,"raw":35632,"rawgz":7404}},"node-base":{"expanded":["dom-base","event","oop","yui-base","selector"],"ext":false,"name":"node-base","path":"node\/node-base-min.js","requires":["dom-base","selector"],"type":"js","isSubMod":true,"info":{"desc":"The Node class provides a wrapper for manipulating DOM Nodes.\nNode properties can be accessed via the set\/get methods.\nUse Y.get() to retrieve Node instances.\n<strong>NOTE:<\/strong> Node properties are accessed using\nthe <code>set<\/code> and <code>get<\/code> methods.","cat":"core","name":""},"sizes":{"min":6029,"mingz":2434,"debug":29113,"debuggz":6372,"raw":28968,"rawgz":6331}},"node-event-simulate":{"expanded":["node-base","dom-base","event","oop","yui-base","selector"],"ext":false,"name":"node-event-simulate","path":"node\/node-event-simulate-min.js","requires":["node-base"],"type":"js","isSubMod":true,"info":{"desc":"","cat":"other","name":"node-event-simulate"},"sizes":{"min":326,"mingz":285,"debug":769,"debuggz":473,"raw":769,"rawgz":473}},"node-menunav":{"ext":false,"name":"node-menunav","path":"node-menunav\/node-menunav-min.js","requires":["node","classnamemanager","skin-sam-node-menunav","skin-sam-node-menunav"],"skinnable":true,"type":"js","info":{"desc":"<p>The MenuNav Node Plugin makes it easy to transform existing list-based markup into traditional, \ndrop down navigational menus that are both accessible and easy to customize, and only require \na small set of dependencies.<\/p>\n<p>To use the MenuNav Node Plugin, simply pass a reference to the plugin to a Node instance's \n<code>plug<\/code> method.<\/p>\n<p>\n<code>\nvar oMenuNav = Y.Node.get(\"#productsandservices\");<br>\noMenuNav.plug(Y.plugin.NodeMenuNav);\n<\/code>\n<p>\n<p>The MenuNav Node Plugin has several configuration properties that can be set via an \nobject literal that is passed as a second argument to a Node instance's <code>plug<\/code> method.\n<\/p>\n<p>\n<code>\nvar oMenuNav = Y.Node.get(\"#productsandservices\");<br>\noMenuNav.plug(Y.plugin.NodeMenuNav, { mouseOutHideDelay: 1000 });\n<\/code>\n<\/p>\n<p> The complete list of the MenuNav Node Plugin configuration properties are:<\/p>\n<dl>\n<dt>useARIA<\/dt>\n<dd>Boolean indicating if use of the WAI-ARIA Roles and States should be enabled for the \nMenuNav.  Set to true by default for Firefox 3 and Internet Explorer 8 as currently only \nthese browsers have support for ARIA, and are supported by several screen readers for \nWindows that also offer support for ARIA.<\/dd>\n<dt>autoSubmenuDisplay<\/dt>\n<dd>Boolean indicating if submenus are automatically made visible when the user mouses over \nthe menu's items.  Set to true by default.<\/dd>\n<dt>submenuShowDelay<\/dt>\n<dd>Number indicating the time (in milliseconds) that should expire before a submenu is \nmade visible when the user mouses over the menu's label.  Set to 250 by default.<\/dd>\n<dt>submenuHideDelay<\/dt>\n<dd>Number indicating the time (in milliseconds) that should expire before a submenu is \nhidden when the user mouses out of a menu label heading in the direction of a submenu.  \nSet to 250 by default.<\/dd>\n<dt>mouseOutHideDelay<\/dt>\n<dd>Number indicating the time (in milliseconds) that should expire before a submenu is \nhidden when the user mouses out of it.  Set to 750 by default.<\/dd>\n<\/dl>","cat":"nodeplugin","name":""},"sizes":{"min":11552,"mingz":4058,"debug":41492,"debuggz":9561,"raw":41492,"rawgz":9561}},"node-screen":{"expanded":["dom-screen","dom-base","event","oop","yui-base","dom-style","node-base","selector"],"ext":false,"name":"node-screen","path":"node\/node-screen-min.js","requires":["dom-screen","node-base"],"type":"js","isSubMod":true,"info":{"desc":"Extended Node interface for managing regions and screen positioning.\nAdds support for positioning elements and normalizes window size and scroll detection.","cat":"core","name":""},"sizes":{"min":808,"mingz":422,"debug":5841,"debuggz":1332,"raw":5841,"rawgz":1332}},"node-style":{"expanded":["dom-style","dom-base","event","oop","yui-base","node-base","selector"],"ext":false,"name":"node-style","path":"node\/node-style-min.js","requires":["dom-style","node-base"],"type":"js","isSubMod":true,"info":{"desc":"Extended Node interface for managing node styles.","cat":"core","name":""},"sizes":{"min":318,"mingz":267,"debug":1336,"debuggz":567,"raw":1336,"rawgz":567}},"oop":{"expanded":["yui-base"],"ext":false,"name":"oop","path":"oop\/oop-min.js","requires":["yui-base"],"type":"js","info":{"desc":"OOP utils.  If included, the OOP methods are added to the YUI instance","cat":"core","name":""},"sizes":{"min":1723,"mingz":925,"debug":11684,"debuggz":3434,"raw":11363,"rawgz":3349}},"overlay":{"ext":false,"name":"overlay","path":"overlay\/overlay-min.js","requires":["widget","widget-position","widget-position-ext","widget-stack","widget-stdmod","skin-sam-overlay","skin-sam-overlay"],"skinnable":true,"type":"js","info":{"desc":"Provides a basic Overlay widget, with Standard Module content support. The Overlay widget\nprovides Page XY positioning support, alignment and centering support along with basic \nstackable support (z-index and shimming).","cat":"widget","name":""},"sizes":{"min":420,"mingz":299,"debug":1200,"debuggz":628,"raw":1200,"rawgz":628}},"plugin":{"ext":false,"name":"plugin","path":"plugin\/plugin-min.js","requires":["base"],"type":"js","info":{"desc":"Provides the base Plugin class for building widget plugins.","cat":"infra","name":""},"sizes":{"min":971,"mingz":535,"debug":4747,"debuggz":1272,"raw":4579,"rawgz":1223}},"profiler":{"ext":false,"name":"profiler","path":"profiler\/profiler-min.js","requires":[],"type":"js","info":{"desc":"The YUI JavaScript profiler.","cat":"tool","name":""},"sizes":{"min":3421,"mingz":1073,"debug":15793,"debuggz":3156,"raw":15793,"rawgz":3156}},"queue":{"ext":false,"name":"queue","path":"queue\/queue-min.js","requires":["node"],"type":"js","info":{"desc":"Mechanism to execute a series of callbacks in a non-blocking queue.  Each\ncallback is executed via setTimout unless configured with a negative\ntimeout, in which case it is run in blocking mode in the same execution\nthread as the previous callback.  Callbacks can be function references or\nobject literals with the following keys:\n<ul>\n<li><code>fn<\/code> - {Function} REQUIRED the callback function.<\/li>\n<li><code>timeout<\/code> - {number} millisecond delay to wait after previous callback completion before executing this callback.  Negative values cause immediate blocking execution.  Default 0.<\/li>\n<li><code>until<\/code> - {Function} boolean function executed before each iteration.  Return true to indicate callback completion.<\/li>\n<li><code>iterations<\/code> - {Number} number of times to execute the callback before proceeding to the next callback in the queue. Incompatible with <code>until<\/code>.<\/li>\n<\/ul>","cat":"util","name":""},"sizes":{"min":1442,"mingz":692,"debug":7536,"debuggz":2196,"raw":7536,"rawgz":2196}},"selector":{"expanded":["dom-base","event","oop","yui-base"],"ext":false,"name":"selector","path":"dom\/selector-min.js","requires":["dom-base"],"type":"js","isSubMod":true,"info":{"desc":"Provides helper methods for collecting and filtering DOM elements.","cat":"core","name":""},"sizes":{"min":6039,"mingz":2537,"debug":19263,"debuggz":5033,"raw":18934,"rawgz":4931}},"skin-sam-widget-position":{"after":["reset","fonts","grids","base"],"ext":false,"name":"skin-sam-widget-position","path":"widget\/assets\/skins\/sam\/widget-position.css","requires":[],"type":"css","info":{"desc":"","cat":"other","name":"skin-sam-widget-position"},"sizes":{}},"skin-sam-widget-position-ext":{"after":["reset","fonts","grids","base"],"ext":false,"name":"skin-sam-widget-position-ext","path":"widget\/assets\/skins\/sam\/widget-position-ext.css","requires":[],"type":"css","info":{"desc":"","cat":"other","name":"skin-sam-widget-position-ext"},"sizes":{}},"skin-sam-widget-stack":{"after":["reset","fonts","grids","base"],"ext":false,"name":"skin-sam-widget-stack","path":"widget\/assets\/skins\/sam\/widget-stack.css","requires":[],"type":"css","info":{"desc":"","cat":"other","name":"skin-sam-widget-stack"},"sizes":{"min":516,"mingz":341,"debug":516,"debuggz":341,"raw":516,"rawgz":341}},"skin-sam-widget-stdmod":{"after":["reset","fonts","grids","base"],"ext":false,"name":"skin-sam-widget-stdmod","path":"widget\/assets\/skins\/sam\/widget-stdmod.css","requires":[],"type":"css","info":{"desc":"","cat":"other","name":"skin-sam-widget-stdmod"},"sizes":{}},"slider":{"ext":false,"name":"slider","path":"slider\/slider-min.js","requires":["widget","dd-constrain","skin-sam-slider","skin-sam-slider"],"skinnable":true,"type":"js","info":{"desc":"Create a sliding value range input visualized as a draggable thumb on a\nbackground element.","cat":"widget","name":""},"sizes":{"min":8669,"mingz":2947,"debug":39545,"debuggz":9197,"raw":37813,"rawgz":8779}},"stylesheet":{"ext":false,"name":"stylesheet","path":"stylesheet\/stylesheet-min.js","requires":[],"type":"js","info":{"desc":"","cat":"other","name":"stylesheet"},"sizes":{}},"substitute":{"ext":false,"name":"substitute","optional":["dump"],"path":"substitute\/substitute-min.js","requires":[],"type":"js","info":{"desc":"String variable substitution and string formatting.\nIf included, the substitute method is added to the YUI instance.","cat":"util","name":""},"sizes":{"min":999,"mingz":627,"debug":4482,"debuggz":1624,"raw":4482,"rawgz":1624}},"widget":{"ext":false,"name":"widget","path":"widget\/widget-min.js","plugins":{"widget-position":{"ext":false,"name":"widget-position","path":"widget\/widget-position-min.js","requires":["widget","widget","widget"],"type":"js"},"widget-position-ext":{"ext":false,"name":"widget-position-ext","path":"widget\/widget-position-ext-min.js","requires":["widget-position","widget","widget","widget"],"type":"js"},"widget-stack":{"ext":false,"name":"widget-stack","path":"widget\/widget-stack-min.js","requires":["widget","skin-sam-widget-stack","widget","skin-sam-widget-stack","widget"],"skinnable":true,"type":"js"},"widget-stdmod":{"ext":false,"name":"widget-stdmod","path":"widget\/widget-stdmod-min.js","requires":["widget","widget","widget"],"type":"js"}},"requires":["base","node","classnamemanager","skin-sam-widget","skin-sam-widget"],"skinnable":true,"type":"js","info":{"desc":"Provides the base Widget class along with an augmentable PluginHost interface","cat":"infra","name":""},"sizes":{"min":8679,"mingz":3159,"debug":41517,"debuggz":10343,"raw":40969,"rawgz":10201}},"widget-position":{"ext":false,"name":"widget-position","path":"widget\/widget-position-min.js","requires":["widget","widget","widget"],"type":"js","isPlugin":true,"info":{"desc":"Provides basic XY positioning support for Widgets, though an extension","cat":"infra","name":""},"sizes":{"min":1530,"mingz":728,"debug":7950,"debuggz":2089,"raw":7950,"rawgz":2089}},"widget-position-ext":{"ext":false,"name":"widget-position-ext","path":"widget\/widget-position-ext-min.js","requires":["widget-position","widget","widget","widget"],"type":"js","isPlugin":true,"info":{"desc":"Provides extended\/advanced XY positioning support for Widgets, through an extension.\nIt builds on top of the widget-position module, to provide alignmentment and centering support.\nFuture releases aim to add constrained and fixed positioning support.","cat":"infra","name":""},"sizes":{"min":2376,"mingz":1024,"debug":16043,"debuggz":3447,"raw":15840,"rawgz":3417}},"widget-stack":{"ext":false,"name":"widget-stack","path":"widget\/widget-stack-min.js","requires":["widget","skin-sam-widget-stack","widget","skin-sam-widget-stack","widget"],"skinnable":true,"type":"js","isPlugin":true,"info":{"desc":"Provides stackable (z-index) support for Widgets through an extension.","cat":"infra","name":""},"sizes":{"min":3640,"mingz":1461,"debug":14378,"debuggz":3785,"raw":14378,"rawgz":3785}},"widget-stdmod":{"ext":false,"name":"widget-stdmod","path":"widget\/widget-stdmod-min.js","requires":["widget","widget","widget"],"type":"js","isPlugin":true,"info":{"desc":"Provides standard module support for Widgets through an extension.","cat":"infra","name":""},"sizes":{"min":4928,"mingz":1883,"debug":28505,"debuggz":5852,"raw":28505,"rawgz":5852}},"yui":{"_provides":{"get":true,"loader":true,"yui":true,"yui-base":true},"_supersedes":{"get":true,"loader":true,"yui-base":true},"ext":false,"name":"yui","path":"yui\/yui-min.js","requires":[],"supersedes":["yui-base","get","loader"],"type":"js","info":{"desc":"YUI core","cat":"core","name":""},"sizes":{"min":23375,"mingz":8432,"debug":125484,"debuggz":29695,"raw":120906,"rawgz":28588}},"yui-base":{"_provides":{"yui-base":true},"_supersedes":{},"expanded":[],"ext":false,"name":"yui-base","path":"yui-base\/yui-base-min.js","requires":[],"type":"js","info":{"desc":"The YUI core, without get or loader built in. You can use this lighter version of YUI if you're manually including all required files on the page and don't require YUI to pull in missing file dependencies dynamically","cat":"core","name":""},"sizes":{"min":8050,"mingz":3461,"debug":46894,"debuggz":13023,"raw":46056,"rawgz":12781}},"yuitest":{"ext":false,"name":"yuitest","path":"yuitest\/yuitest-min.js","requires":["substitute","node","json"],"type":"js","info":{"desc":"YUI JavaScript Testing Framework","cat":"tool","name":""},"sizes":{"min":22023,"mingz":5589,"debug":96450,"debuggz":14752,"raw":96450,"rawgz":14752}}},"categories":{"css":{"name":"CSS"},"tool":{"name":"Tools"},"core":{"name":"Core"},"util":{"name":"Utilities"},"infra":{"name":"Component Infrastructure"},"widget":{"name":"Widgets"},"nodeplugin":{"name":"Node Plugins"},"other":{"name":"Other"}}};