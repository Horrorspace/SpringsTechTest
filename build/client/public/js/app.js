(()=>{"use strict";var e,t,n,r={7885:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractAPI=t.urlMethods=void 0,function(e){e.get="GET",e.post="POST",e.patch="PATCH",e.put="PUT",e.delete="DELETE"}(t.urlMethods||(t.urlMethods={}));var o=function(){function e(){this.basePath=""}return e.prototype.request=function(t){return n(this,void 0,void 0,(function(){var n,o,a,i,l,u,c,s,f;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),n=e.protocol,o=e.headers,a=e.host,i=e.port,l=80===i&&"http"===n,u=443===i&&"https"===n,c=":".concat(i),(l||u)&&(c=""),(s=new URL("".concat(n,"://").concat(a).concat(c))).pathname="".concat(this.basePath).concat(t.path),[4,fetch(s.toString(),{method:t.method,headers:o,credentials:"same-origin",mode:"cors",body:t.body})];case 1:return[2,r.sent().json()];case 2:throw f=r.sent(),console.error(f),f;case 3:return[2]}}))}))},e.headers=new Headers({"Content-Type":"application/json"}),e.protocol="https",e.host="api.npoint.io",e.port=443,e}();t.AbstractAPI=o},9632:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(7294)),a=n(3935),i=n(5576);(0,a.render)(o.default.createElement(i.App,null),document.getElementById("root"))},6007:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GamesActTypes=void 0,function(e){e.download="download",e.addGame="addGame",e.deleteGame="deleteGame",e.changeNumber="changeNumber",e.sortByAlphabetically="sortByAlphabetically",e.sortByNumber="sortByNumber"}(t.GamesActTypes||(t.GamesActTypes={}))},5166:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GamesActions=void 0;var a=n(1280),i=n(6007),l=n(5746),u=function(){function e(){}return e.downloadGamesThunk=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,(new l.GamesAPI).getAllGames()];case 1:return[2,e.sent()]}}))}))},e.downloadGames=(0,a.createAsyncThunk)(i.GamesActTypes.download,e.downloadGamesThunk),e.addGame=(0,a.createAction)(i.GamesActTypes.addGame),e.deleteGame=(0,a.createAction)(i.GamesActTypes.deleteGame),e.changeNumber=(0,a.createAction)(i.GamesActTypes.changeNumber),e.sortByAlphabetically=(0,a.createAction)(i.GamesActTypes.sortByAlphabetically),e.sortByNumber=(0,a.createAction)(i.GamesActTypes.sortByNumber),e}();t.GamesActions=u},5746:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GamesAPI=void 0;var l=n(7885),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.getAllGames=function(){return a(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.request({path:"/817eebf87e3033d5dc99",method:l.urlMethods.get})];case 1:return[2,e.sent().data]}}))}))},t}(l.AbstractAPI);t.GamesAPI=u},7483:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.GamesReducer=void 0;var a=n(1280),i=n(5166),l=function(){function e(){}return e.buildReducer=function(e){e.addCase(i.GamesActions.downloadGames.fulfilled,(function(e,t){var n=e.games,a=(n=n.slice()).length,i=t.payload.filter((function(e){return!n.some((function(t){return t.name===e.name}))})).map((function(e,t){return r(r({},e),{id:a+t+1})}));return r(r({},e),{games:o(o([],n,!0),i,!0)})})).addCase(i.GamesActions.addGame,(function(e,t){var n=e.games,o=(n=n.slice()).length+1,a=r(r({},t.payload),{id:o});return n.push(a),r(r({},e),{games:n})})).addCase(i.GamesActions.deleteGame,(function(e,t){var n=t.payload,o=e.games.filter((function(e){return e.id!==n})).map((function(e,t){return r(r({},e),{id:t+1})}));return r(r({},e),{games:o})})).addCase(i.GamesActions.changeNumber,(function(e,t){var n=e.games;n=n.slice();var o,a=t.payload,i=a.id,l=a.direction,u=n.length;if((o="up"===l?i-1:i+1)<1||o===u+1)return e;var c=r(r({},n[i-1]),{id:o}),s=r(r({},n[o-1]),{id:i});return n[i-1]=s,n[o-1]=c,r(r({},e),{games:n})})).addCase(i.GamesActions.sortByAlphabetically,(function(e,t){return r(r({},e),{sort:"alphabetically",sortDirection:t.payload})})).addCase(i.GamesActions.sortByNumber,(function(e,t){return r(r({},e),{sort:"byId",sortDirection:t.payload})}))},e.initialState={games:[],sort:"byId",sortDirection:"ascending"},e.reducer=(0,a.createReducer)(e.initialState,e.buildReducer),e}();t.GamesReducer=l},3550:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;var r=n(1280),o=n(7483),a=function(){function e(){}return e.reducer=(0,r.combineReducers)({games:o.GamesReducer.reducer}),e.value=(0,r.configureStore)({reducer:e.reducer}),e}();t.Store=a},5576:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var o=r(n(7294)),a=n(524),i=n(5857),l=n(23);t.App=function(){var e=(0,i.compose)(l.withProvider)(a.Main);return o.default.createElement(o.default.Fragment,null,o.default.createElement(e,null))}},23:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withProvider=void 0;var o=r(n(7294)),a=n(372),i=n(3550);t.withProvider=function(e){return function(){return o.default.createElement(a.Provider,{store:i.Store.value},o.default.createElement(e,null))}}},2520:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.GameAddModal=void 0;var l=i(n(7294)),u=n(5329);t.GameAddModal=l.default.memo((function(e){var t=e.show,n=e.onAdd,o=e.onClose,a=(0,l.useState)({name:"",iconUrl:"",nameError:!1,iconError:!1}),i=a[0],c=a[1];return l.default.createElement(u.Modal,{open:t,onClose:o,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.default.createElement(u.Box,{display:"flex",flexDirection:"column",alignItems:"center",sx:{width:"600px",minHeight:"350px",backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.default.createElement(u.TextField,{label:"Название игры",sx:{width:"400px",marginBottom:"30px"},error:i.nameError,value:i.name,onChange:function(e){var t=e.target.value;c((function(e){return r(r({},e),{name:t})}))}}),l.default.createElement(u.TextField,{label:"Ссылка на иконку",sx:{width:"400px",marginBottom:"60px"},error:i.iconError,value:i.iconUrl,onChange:function(e){var t=e.target.value;c((function(e){return r(r({},e),{iconUrl:t})}))}}),l.default.createElement(u.ButtonGroup,null,l.default.createElement(u.Button,{onClick:function(){var e=i.name,t=i.iconUrl;e&&t&&(n({name:e,icon_url:t}),c((function(e){return r(r({},e),{name:"",iconUrl:""})})));e||(c((function(e){return r(r({},e),{nameError:!0})})),setTimeout((function(){c((function(e){return r(r({},e),{nameError:!1})}))}),1500)),t||(c((function(e){return r(r({},e),{iconError:!0})})),setTimeout((function(){c((function(e){return r(r({},e),{iconError:!1})}))}),1500))}},l.default.createElement(u.Typography,null,"Добавить")),l.default.createElement(u.Button,{color:"error",onClick:o},l.default.createElement(u.Typography,null,"Отменить")))))}))},5933:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameExistModal=void 0;var o=r(n(7294)),a=n(5329);t.GameExistModal=o.default.memo((function(e){var t=e.show,n=e.onClose;return o.default.createElement(a.Modal,{open:t,onClose:n,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.default.createElement(a.Box,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{width:"400px",minHeight:"150px",backgroundColor:"white"}},o.default.createElement(a.Typography,{sx:{marginBottom:"20px"}},"Игра с таким названием уже существует"),o.default.createElement(a.Button,{onClick:n},o.default.createElement(a.Typography,null,"Ok"))))}))},665:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameItem=void 0;var o=r(n(7294)),a=n(5329),i=r(n(4364)),l=r(n(6613)),u=r(n(3343));t.GameItem=o.default.memo((function(e){var t=e.id,n=e.iconUrl,r=e.name,c=e.isMoveDisabled,s=e.onUpBtnCLick,f=e.onDownBtnClick,d=e.onDeleteClick,p="".concat(t,".");return o.default.createElement(a.Box,{display:"flex",flexDirection:"row",alignItems:"center",component:"li",key:t,sx:{marginTop:"10px",marginBottom:"10px"}},o.default.createElement(a.Typography,{sx:{width:"40px"}},p),o.default.createElement(a.Avatar,{alt:"game icon",src:n,sx:{marginRight:"10px"}}),o.default.createElement(a.Typography,{sx:{width:"420px",marginRight:"10px",overflowWrap:"break-word"}},r),o.default.createElement(a.IconButton,{color:"primary",onClick:s,id:"".concat(t),disabled:c},o.default.createElement(i.default,null)),o.default.createElement(a.IconButton,{color:"primary",onClick:f,id:"".concat(t),disabled:c},o.default.createElement(l.default,null)),o.default.createElement(a.IconButton,{color:"error",onClick:d,id:"".concat(t)},o.default.createElement(u.default,null)))}))},8303:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GameMenu=void 0;var o=r(n(7294)),a=n(5329);t.GameMenu=o.default.memo((function(e){var t=e.sort,n=e.sortDirection,r=e.onSortChange,i=e.onDirectionChange,l=e.onDownloadClick,u=e.onAddClick;return o.default.createElement(a.Box,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",component:"div",sx:{marginTop:"10px"}},o.default.createElement(a.ButtonGroup,{sx:{marginBottom:"30px"}},o.default.createElement(a.Button,{onClick:u},o.default.createElement(a.Typography,null,"Добавить игру")),o.default.createElement(a.Button,{onClick:l},o.default.createElement(a.Typography,null,"Загрузить список игр"))),o.default.createElement(a.Box,{display:"flex",flexDirection:"row",alignItems:"center",component:"div",sx:{marginLeft:"30px",marginBottom:"30px"}},o.default.createElement(a.Typography,null,"Сортировка:"),o.default.createElement(a.Select,{value:t,onChange:r,sx:{marginLeft:"10px",width:"170px"}},o.default.createElement(a.MenuItem,{value:"byId"},"По номеру"),o.default.createElement(a.MenuItem,{value:"alphabetically"},"По алфавиту")),o.default.createElement(a.Select,{value:n,onChange:i,sx:{marginLeft:"10px",width:"170px"}},o.default.createElement(a.MenuItem,{value:"ascending"},"По возрастанию"),o.default.createElement(a.MenuItem,{value:"descending"},"По убыванию"))))}))},5009:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GamesList=void 0;var a=o(n(7294)),i=n(5329),l=n(665);t.GamesList=a.default.memo((function(e){var t=e.games,n=e.sort,o=e.sortDirection,u=e.onMoveUp,c=e.onMoveDown,s=e.onGameDelete,f=function(e){return"BUTTON"===e.tagName?e:f(e.parentElement)},d="byId"!==n,p=function(e){var t=e.target,n=f(t),r=parseInt(n.id,10);s(r)},m=function(e){var t=e.target,n=f(t),r=parseInt(n.id,10);"ascending"===o?u(r):c(r)},h=function(e){var t=e.target,n=f(t),r=parseInt(n.id,10);"ascending"===o?c(r):u(r)},y=r([],t,!0).sort((function(e,t){switch(n){case"byId":return"ascending"===o?e.id-t.id:t.id-e.id;case"alphabetically":return"ascending"===o?(new Intl.Collator).compare(e.name,t.name):(new Intl.Collator).compare(t.name,e.name);default:return 0}})).map((function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement(l.GameItem,{id:e.id,iconUrl:e.icon_url,name:e.name,isMoveDisabled:d,onUpBtnCLick:m,onDownBtnClick:h,onDeleteClick:p}))}));return a.default.createElement(i.Box,{display:"flex",flexDirection:"column",alignItems:"flex-start",component:"ul"},y)}))},8992:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Games=void 0;var l=i(n(7294)),u=n(372),c=n(5009),s=n(2520),f=n(5933),d=n(8303),p=n(5166);t.Games=function(){var e=(0,u.useDispatch)(),t=(0,u.useSelector)((function(e){return e.games})),n=t.games,o=t.sort,a=t.sortDirection,i=(0,l.useState)({addModalShow:!1,existModalShow:!1}),m=i[0],h=i[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(d.GameMenu,{sort:o,sortDirection:a,onAddClick:function(){h((function(e){return r(r({},e),{addModalShow:!0})}))},onDownloadClick:function(){e(p.GamesActions.downloadGames())},onSortChange:function(t){switch(t.target.value){case"alphabetically":e(p.GamesActions.sortByAlphabetically(a));break;case"byId":e(p.GamesActions.sortByNumber(a))}},onDirectionChange:function(t){var n=function(e){switch(e){case"alphabetically":return p.GamesActions.sortByAlphabetically;case"byId":return p.GamesActions.sortByNumber;default:return null}}(o);if(n){var r=t.target.value;e(n(r))}}}),l.default.createElement(c.GamesList,{games:n,sort:o,sortDirection:a,onMoveUp:function(t){"byId"===o&&e(p.GamesActions.changeNumber({id:t,direction:"up"}))},onMoveDown:function(t){"byId"===o&&e(p.GamesActions.changeNumber({id:t,direction:"down"}))},onGameDelete:function(t){e(p.GamesActions.deleteGame(t))}}),l.default.createElement(s.GameAddModal,{show:m.addModalShow,onAdd:function(t){h((function(e){return r(r({},e),{addModalShow:!1})})),n.some((function(e){return e.name===t.name}))?h((function(e){return r(r({},e),{existModalShow:!0})})):e(p.GamesActions.addGame(t))},onClose:function(){h((function(e){return r(r({},e),{addModalShow:!1})}))}}),l.default.createElement(f.GameExistModal,{show:m.existModalShow,onClose:function(){h((function(e){return r(r({},e),{existModalShow:!1})}))}}))}},524:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var o=r(n(7294)),a=n(5329),i=n(8992);t.Main=function(){return o.default.createElement(a.Container,{maxWidth:"xl"},o.default.createElement(a.Box,{display:"flex",flexDirection:"row",sx:{width:"100%"},justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap"},o.default.createElement(a.Box,{sx:{backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",marginTop:"10px",marginLeft:"auto",marginRight:"auto",marginBottom:"30px",paddingLeft:"20px",paddingRight:"20px"}},o.default.createElement(i.Games,null))))}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e].call(n.exports,n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,o)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,r,o]=e[s],l=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](n[u])))?n.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,l,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(u)var s=u(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=self.webpackChunkspringstechtest=self.webpackChunkspringstechtest||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[412],(()=>a(9632)));i=a.O(i)})();