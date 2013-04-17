var dorm = require('./lib/dormjade');

console.log(dorm.render({
  "doctype": "",
  "html": {
    "attr" : { 
      "class": [
      "responsive",
      "width-full"
      ]
    },
    "children": [
      {
        "head": {
          "children": [
            { "meta": {}},
            {"link": {}}, 
            { "title": { "children" : [{"text" : "hello world"}] }}, 
            {"script" : {"attr":{"href": "//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"}}}
          ]
        }
      },
      {
        "body": {
          "children": [
            {
              "div": {
                "attr" : {
                  "id": "mydiv",
                  "style" : { "background-color" : "red", "color" : "white" }
                },
                "children" : [{"text" : "Hi there {{template}}"}]
              }
            },
            {
              "div": {
                "attr" : {
                  "id": "mydiv2",
                  "name": "mydiv2name"
                },
                "children":[
                {"p" : {"children" : [{ "text" : "hello" }, { "span" :  {"children" : [{ "text" : "world" }]} }, {"text":"again"}]}}
                ]
              }
            }
          ]
        }
      }
    ]
  }
}));