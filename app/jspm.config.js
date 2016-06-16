SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "joyofcoding/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "joyofcoding": {
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
    "jquery": "npm:jquery@3.0.0",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "yo-yo": "npm:yo-yo@1.2.1"
  },
  packages: {
    "npm:yo-yo@1.2.1": {
      "map": {
        "morphdom": "npm:morphdom@1.4.3",
        "bel": "npm:bel@4.3.1"
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
