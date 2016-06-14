SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "client-side-jspm/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "client-side-jspm/index.js",
        "npm:yo-yo@1.2.1/index.js",
        "npm:yo-yo@1.2.1.json",
        "npm:yo-yo@1.2.1/update-events.js",
        "npm:morphdom@1.4.3/lib/index.js",
        "npm:morphdom@1.4.3.json",
        "npm:bel@4.3.1/index.js",
        "npm:bel@4.3.1.json",
        "npm:hyperx@2.0.4/index.js",
        "npm:hyperx@2.0.4.json",
        "npm:hyperscript-attribute-to-property@1.0.0/index.js",
        "npm:hyperscript-attribute-to-property@1.0.0.json",
        "npm:global@4.3.0/document.js",
        "npm:global@4.3.0.json",
        "npm:min-document@2.18.0/index.js",
        "npm:min-document@2.18.0.json",
        "npm:min-document@2.18.0/document.js",
        "npm:min-document@2.18.0/event/remove-event-listener.js",
        "npm:min-document@2.18.0/event/add-event-listener.js",
        "npm:min-document@2.18.0/event/dispatch-event.js",
        "npm:min-document@2.18.0/event.js",
        "npm:min-document@2.18.0/dom-fragment.js",
        "npm:min-document@2.18.0/dom-element.js",
        "npm:min-document@2.18.0/serialize.js",
        "npm:dom-walk@0.1.1/index.js",
        "npm:dom-walk@0.1.1.json",
        "npm:min-document@2.18.0/dom-text.js",
        "npm:min-document@2.18.0/dom-comment.js",
        "client-side-jspm/github-api.js",
        "npm:whatwg-fetch@1.0.0/fetch.js",
        "npm:whatwg-fetch@1.0.0.json",
        "client-side-jspm/make-red.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/taggedTemplateLiteral.js",
        "npm:systemjs-plugin-babel@0.0.12.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "client-side-jspm": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "yo-yo": "npm:yo-yo@1.2.1"
  },
  packages: {
    "npm:yo-yo@1.2.1": {
      "map": {
        "bel": "npm:bel@4.3.1",
        "morphdom": "npm:morphdom@1.4.3"
      }
    },
    "npm:bel@4.3.1": {
      "map": {
        "global": "npm:global@4.3.0",
        "hyperx": "npm:hyperx@2.0.4"
      }
    },
    "npm:global@4.3.0": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.18.0",
        "node-min-document": "npm:min-document@2.18.0"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:hyperx@2.0.4": {
      "map": {
        "hyperscript-attribute-to-property": "npm:hyperscript-attribute-to-property@1.0.0"
      }
    }
  }
});
