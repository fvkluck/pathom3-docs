(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(101)),o={id:"eql",title:"EQL"},s={unversionedId:"eql",id:"eql",isDocsHomePage:!1,title:"EQL",description:"Using the EQL interface, you can request Pathom to fetch a specific shape of data.",source:"@site/docs/eql.mdx",slug:"/eql",permalink:"/docs/eql",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/eql.mdx",version:"current",sidebar:"docs",previous:{title:"Smart Maps",permalink:"/docs/smart-maps"},next:{title:"Environment",permalink:"/docs/environment"}},l=[{value:"Using EQL interface",id:"using-eql-interface",children:[{value:"Nested entities",id:"nested-entities",children:[]},{value:"Providing map data",id:"providing-map-data",children:[]},{value:"Providing data via EQL idents",id:"providing-data-via-eql-idents",children:[]},{value:"Providing data with placeholders",id:"providing-data-with-placeholders",children:[]},{value:"Union queries",id:"union-queries",children:[]},{value:"Recursive queries",id:"recursive-queries",children:[]},{value:"Wildcard",id:"wildcard",children:[]}]},{value:"Boundary Interface",id:"boundary-interface",children:[{value:"Using the boundary interface",id:"using-the-boundary-interface",children:[]},{value:"Extending environment",id:"extending-environment",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using the EQL interface, you can request Pathom to fetch a specific shape of data."),Object(i.b)("p",null,"If you are not familiar with EQL, check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edn-query-language.org"}),"https://edn-query-language.org")," for an overview of the syntax."),Object(i.b)("p",null,"The goal of using EQL is to express some data shape (hierarchy) without the values and\nlet Pathom fill in the values."),Object(i.b)("p",null,"Using EQL is also the most efficient way to request multiple things at once with Pathom.\nWith EQL, Pathom knows the full request ahead of time. Therefore, Pathom can use this information\nto optimize the planning and execution."),Object(i.b)("h2",{id:"using-eql-interface"},"Using EQL interface"),Object(i.b)("p",null,"Keep in mind that EQL is about expressing some data hierarchy, to start simple we will\nuse a flat structure to demonstrate the basic usage of the EQL interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(ns com.wsscode.pathom.docs.eql-demos\n  (:require [com.wsscode.pathom3.connect.built-in.resolvers :as pbir]\n            [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.interface.eql :as p.eql]))\n\n(def indexes\n  (pci/register\n    [(pbir/constantly-resolver ::pi 3.1415)\n     (pbir/single-attr-resolver ::pi ::tau #(* % 2))]))\n\n(p.eql/process indexes [::pi ::tau])\n; => {::pi 3.1415 ::tau 6.283}\n")),Object(i.b)("h3",{id:"nested-entities"},"Nested entities"),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html#_joins"}),"EQL joins")," you\ncan make specific requirements about nested data. In this example we will simulate the\nexistence of many worlds where PI have different values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(def indexes\n  (pci/register\n    [(pbir/constantly-resolver ::pi 3.1415)\n     (pbir/single-attr-resolver ::pi ::tau #(* % 2))\n     ; define a resolver to provide a collection of items\n     (pbir/constantly-resolver ::pi-worlds\n       [{::pi 3.14}\n        {::pi 3.14159}\n        {::pi 6.8}\n        {::tau 20}\n        {::pi 10 ::tau 50}])]))\n\n(p.eql/process indexes\n  ; using a map we are able to specify nested requirements from some attribute\n  [{::pi-worlds [::tau ::pi]}])\n; => {::pi-worlds\n;      [{::tau 6.28\n;        ::pi  3.14}\n;       {::tau 6.28318\n;        ::pi  3.14159}\n;       {::tau 13.6\n;        ::pi  6.8}\n;       {::tau 20\n;        ::pi  3.1415}\n;       {::tau 50\n;        ::pi  10}]}\n")),Object(i.b)("h3",{id:"providing-map-data"},"Providing map data"),Object(i.b)("p",null,"You can provide initial data to the EQL process using the following syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(p.eql/process indexes {::pi 2.3} [::tau])\n; => {::tau 4.6}\n")),Object(i.b)("h3",{id:"providing-data-via-eql-idents"},"Providing data via EQL idents"),Object(i.b)("p",null,"Pathom uses the EQL ",Object(i.b)("inlineCode",{parentName:"p"},"ident")," as a form to specify a single attribute to start requesting\ndata from. Here is an example using the revolvers we created before:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(p.eql/process indexes [{[::pi 2.3] [::tau]}])\n; => {[::pi 2.3] {::tau 4.6}}\n")),Object(i.b)("p",null,"In this example, given ",Object(i.b)("inlineCode",{parentName:"p"},"PI")," is ",Object(i.b)("inlineCode",{parentName:"p"},"2.3"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Tau")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"4.6"),", since it's defined as the\ndouble of PI."),Object(i.b)("h3",{id:"providing-data-with-placeholders"},"Providing data with placeholders"),Object(i.b)("p",null,"You can use placeholders to provide in-query data for Pathom processing. To do this, lets\nget back to our famous full name example, the way to provide data is to send it to\na placeholder key as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html#_parameters"}),"EQL parameters"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver full-name [{::keys [first-name last-name]}]\n  {::full-name (str first-name " " last-name)})\n\n(def env (pci/register full-name))\n\n(p.eql/process env\n  [{\'(:>/bret {::first-name "Bret" ::last-name "Victor"})\n    [::full-name]}])\n; => {:>/bret {:com.wsscode.pathom3.docs.placeholder/full-name "Bret Victor"}}\n')),Object(i.b)("p",null,"When moving to a placeholder context, Pathom inherits the same parent data and merges\nthe params data to it, to illustrate let's make a nested example of it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(p.eql/process env\n  [{\'(:>/bret {::first-name "Bret" ::last-name "Victor"})\n    [::full-name\n     {\'(:>/bard {::first-name "Bard"})\n      [::full-name]}]}])\n; {:>/bret\n;   {:com.wsscode.pathom3.docs.placeholder/full-name "Bret Victor",\n;    :>/bard\n;    {:com.wsscode.pathom3.docs.placeholder/full-name "Bard Victor"}}}\n')),Object(i.b)("h3",{id:"union-queries"},"Union queries"),Object(i.b)("p",null,"Union queries provide a way to archive polymorphism in with EQL, for a review on the\nunion syntax refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html#_unions"}),"EQL Union specification page"),"."),Object(i.b)("p",null,"Consider you want to request information for some user feed. In our feed example, there\nare three types of entries: posts, ads and videos. Each type requires different attributes\nto render. This is how we can write some resolvers to fetch each type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(def union-env\n  (pci/register\n    [(pbir/static-table-resolver `posts :acme.post/id\n       {1 {:acme.post/text "Foo"}})\n     (pbir/static-table-resolver `ads :acme.ad/id\n       {1 {:acme.ad/backlink "http://marketing.is-bad.com"\n           :acme.ad/title    "Promotion thing"}})\n     (pbir/static-table-resolver `videos :acme.video/id\n       {1 {:acme.video/title "Some video"}})\n     (pbir/constantly-resolver :acme/feed\n       [{:acme.post/id 1}\n        {:acme.ad/id 1}\n        {:acme.video/id 1}])]))\n\n(p.eql/process union-env\n  [{:acme/feed\n    {:acme.post/id  [:acme.post/text]\n     :acme.ad/id    [:acme.ad/backlink :acme.ad/title]\n     :acme.video/id [:acme.video/title]}}])\n; => {:acme/feed\n;     [{:acme.post/text "Foo"}\n;      {:acme.ad/backlink "http://marketing.site.com",\n;       :acme.ad/title "Promotion thing"}\n;      {:acme.video/title "Some video"}]}\n')),Object(i.b)("p",null,"To decide which path to take, Pathom looks if the entry data contains the key mentioned\nin the union entry key. When they match Pathom picks that path option."),Object(i.b)("h3",{id:"recursive-queries"},"Recursive queries"),Object(i.b)("p",null,"Some data shapes are trees. For example, if we like to map a file system with Pathom."),Object(i.b)("p",null,"I'll start writing a few resolvers to handle paths and directory navigation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(pco/defresolver file-from-path [{:keys [path]}]\n  {:file (io/file path)})\n\n(pco/defresolver file-name [{:keys [^File file]}]\n  {:file-name (.getName file)})\n\n(pco/defresolver directory? [{:keys [^File file]}]\n  {:directory? (.isDirectory file)})\n\n(pco/defresolver directory-files [{:keys [^File file directory?]}]\n  {:files\n   (if directory?\n     (mapv #(hash-map :file %) (.listFiles file))\n     ::pco/unknown-value)})\n\n(def file-env\n  (pci/register\n    [file-from-path\n     file-name\n     directory?\n     directory-files]))\n")),Object(i.b)("p",null,"To demonstrate the recursive property of it, I'll write the same nested query a few times\nto show it up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(comment\n  (p.eql/process file-env\n    {:path "src"}\n    [:file-name\n     {:files [:file-name\n              {:files [:file-name\n                       {:files []}]}]}]))\n')),Object(i.b)("p",null,"Instead of doing that, we can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html#_recursive_queries"}),"EQL recursive queries"),"\nto handle it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(comment\n  (p.eql/process file-env\n    {:path "src"}\n    [:file-name\n     {:files \'...}]))\n')),Object(i.b)("p",null,"The previous example creates an unbounded recursion. It's going to keep going until\nthere is no more depth to go."),Object(i.b)("p",null,"You can also limit this using bounded recursive queries:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(comment\n  (p.eql/process file-env\n    {:path "src"}\n    [:file-name\n     ; max of 2 depths\n     {:files 2}]))\n')),Object(i.b)("h3",{id:"wildcard"},"Wildcard"),Object(i.b)("p",null,"In EQL queries, you can use the special symbol ",Object(i.b)("inlineCode",{parentName:"p"},"*")," to ask Pathom to give all the data\navailable for that entity. In other words, this removes the output filtering at that\nlevel. Here is an example of what it means:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'; define a resolver that returns multiple things\n(pco/defresolver user-data []\n  {:user/name       "foo"\n   :user/email      "some-user@email.com"\n   :user/birth-year 1988})\n\n; standard query\n(p.eql/process (pci/register user-data)\n    [:user/name])\n; gets the output filtered, only the items in query show up\n=> #:user{:name "foo"}\n\n; making query adding the *\n(p.eql/process (pci/register user-data)\n    [:user/name \'*])\n; now all the data that was loaded in process will show up in the result\n=> #:user{:name "foo", :email "some-user@email.com", :birth-year 1988}\n\n; another example, now we can see the whole deps showing up\n(p.eql/process\n    (pci/register\n      [user-data\n       (pbir/single-attr-resolver :user/name :user/name++ #(str % " - extra things"))])\n    [:user/name++ \'*])\n=>\n#:user{:name++ "foo - extra things",\n       :name "foo",\n       :email "some-user@email.com",\n       :birth-year 1988}\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"*")," only affects sibling attributes (things at same entity/level), the following\nexample illustrates it:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(p.eql/process\n  (pci/register user-data)\n  [{:>/ent1 [:user/name \'*\n             {:>/nested [:user/email]}]}\n   {:>/ent2 [:user/birth-year]}])\n=>\n#:>{:ent1 {:user/name "foo",\n           :>/nested #:user{:email "some-user@email.com"},\n           :user/email "some-user@email.com",\n           :user/birth-year 1988},\n    :ent2 #:user{:birth-year 1988}}\n')))),Object(i.b)("h2",{id:"boundary-interface"},"Boundary Interface"),Object(i.b)("p",null,"The Pathom EQL design makes it a suitable solution to enable remote communication via\nEQL syntax."),Object(i.b)("p",null,"By receiving an EQL request which is pure data, a server can fetch information and\ninvoke mutations."),Object(i.b)("p",null,"This is a powerful API, and it's something that Pathom is designed to handle."),Object(i.b)("h3",{id:"using-the-boundary-interface"},"Using the boundary interface"),Object(i.b)("p",null,"Using the boundary interface adds the following capabilities to the request:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add support to load the index via EQL (though ",Object(i.b)("inlineCode",{parentName:"li"},"::pci/indexes")," attribute)"),Object(i.b)("li",{parentName:"ul"},"Support provision of root entity data"),Object(i.b)("li",{parentName:"ul"},"Support requests in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html"}),"AST format"))),Object(i.b)("p",null,"Combined, those features allow another Pathom instance to integrate this graph."),Object(i.b)("p",null,"The request to a boundary interface can be either an ",Object(i.b)("inlineCode",{parentName:"p"},"EQL")," request or a map. The map\nhas the following options available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'; initial entity data\n:pathom/entity {:foo "3"}\n\n; the request in EQL format\n:pathom/eql [:foo]\n\n; the request in AST format\n:pathom/ast {:type     :root\n             :children [{:type :prop\n                         :key :foo\n                         :dispatch-key :foo}]}\n')),Object(i.b)("p",null,"You should either use ",Object(i.b)("inlineCode",{parentName:"p"},":pathom/eql")," or ",Object(i.b)("inlineCode",{parentName:"p"},":pathom/ast"),". If both are present, Pathom will\npick the AST."),Object(i.b)("p",null,"Here you can see an example of a setup and usage of the boundary interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),"(ns com.wsscode.pathom3.docs.demos.core.eql\n  (:require\n    [com.wsscode.pathom3.interface.eql :as p.eql]\n    [com.wsscode.pathom3.connect.indexes :as pci]\n    [com.wsscode.pathom3.connect.built-in.resolvers :as pbir]\n    [com.wsscode.pathom3.connect.operation :as pco])\n  (:import (java.util Date)))\n\n(pco/defresolver area [{:geo/keys [width height]}]\n  {:geo/area (* width height)})\n\n(def env\n  (pci/register\n    [(pbir/constantly-fn-resolver ::now (fn [_] (Date.)))\n     area]))\n\n(def pathom (p.eql/boundary-interface env))\n\n; request EQL\n(pathom [::now])\n\n; send root entity data\n(pathom {:pathom/entity {:geo/width 10 :geo/height 8}\n         :pathom/eql    [:geo/area]})\n\n; use AST, this way Pathom doesn't have to decode the EQL\n(pathom\n  {:pathom/ast {:type     :root\n                :children [{:type         :prop\n                            :key          ::now\n                            :dispatch-key ::now}]}})\n")),Object(i.b)("p",null,"It's recommended that you always use this at API boundaries."),Object(i.b)("h3",{id:"extending-environment"},"Extending environment"),Object(i.b)("p",null,"The boundary API design is to make it flexible, and altough is more efficient\nto initialize as much as possible before in the env, it still allows extension of\nit."),Object(i.b)("p",null,"To extend the env you can send another argument to the boundary interface."),Object(i.b)("p",null,"For example, let's say we have a resolver to get data from the current user. The current\nuser is something we like to set at the start of the process, but we don't want to allow\nusers to override it (for security reasons)."),Object(i.b)("p",null,"In this case we can set the user id on env when we call the boundary interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(def users-db\n  {1 {:user/login "bunny"}\n   2 {:user/login "fox"}})\n\n(pco/defresolver current-user [{:keys [app/current-user-id]} _]\n  {::pco/output [:user/login]}\n  (get users-db current-user-id))\n\n(def env (pci/register current-user))\n\n(def pathom (p.eql/boundary-interface env))\n\n(pathom {:app/current-user-id 1} [:user/login])\n; => {:user/login "bunny"}\n')),Object(i.b)("p",null,"In this example we sent env as a map, the boundary interface get this map and merge\ninto the previous env and run."),Object(i.b)("p",null,"The env extension can also be a function, this allows more complex operations like\nregistering new resolvers, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-clojure"}),'(pathom\n  (fn [env]\n    (-> env\n        (assoc :app/current-user-id 2)\n        (pci/register (pbir/single-attr-resolver :user/login :user/greet #(str "Hello " %)))))\n  [:user/greet])\n; => {:user/greet "Hello fox"}\n')))}p.isMDXComponent=!0}}]);