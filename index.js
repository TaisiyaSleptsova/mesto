(()=>{"use strict";var t=document.querySelector(".elements__list"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__edit-avatar-button"),o={nameInput:document.querySelector(".profile__title"),jobInput:document.querySelector(".profile__subtitle"),avatar:document.querySelector(".profile__avatar")},i={inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_active"};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function c(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_handleOpenPopupDeleteCard",(function(){u._handleCardDelete(u,u._cardId)})),c(this,"_handleOpenPopupZoom",(function(){u._handleCardClick(u._data)})),c(this,"_handleLikeCard",(function(){u._addLike(u._cardLikeButton,u._cardId)})),this._data=e,this._name=e.name,this._link=e.link,this._myId=e.myId,this._userId=e.owner._id,this._cardId=e._id,this._likes=e.likes,this._likesLength=e.likes.length,this._templateSelector=n,this._handleCardClick=r,this._handleCardDelete=o,this._addLike=i}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element__container").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__mask-group").src=this._link,this._element.querySelector(".element__mask-group").alt="Увеличенное изображение ".concat(this._name),this._element.querySelector(".element__like-count").textContent=this._likesLength,this._zoomElement=this._element.querySelector(".element__mask-group"),this._cardLikeButton=this._element.querySelector(".element__like"),this._cardDelete=this._element.querySelector(".element__delete"),this._countLikes(),this._cancellationDelete(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._zoomElement.addEventListener("click",this._handleOpenPopupZoom),this._cardLikeButton.addEventListener("click",(function(){t._handleLikeCard()})),this._cardDelete.addEventListener("click",this._handleOpenPopupDeleteCard)}},{key:"addLikeCard",value:function(t){this._cardLikeButton.classList.toggle("element__like_active"),this._element.querySelector(".element__like-count").textContent=t.length}},{key:"_countLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._myId&&t._cardLikeButton.classList.add("element__like_active")})),this._element.querySelector(".element__like-count").textContent=this._likesLength}},{key:"_cancellationDelete",value:function(){this._userId===this._myId&&this._cardDelete.classList.add("element__delete_active")}},{key:"cardRemove",value:function(){this._element.remove(),this._element=null}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function b(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}const _=function(){function t(e,n){var r=this,o=n.inputSelector,i=n.submitButtonSelector,u=n.inactiveButtonClass,a=n.inputErrorClass,c=n.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"disableButtonState",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)})),b(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),this._form=e,this._inputSelector=o,this._submitButtonSelector=i,this._inactiveButtonClass=u,this._inputErrorClass=a,this._errorClass=c}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._inputSelectorList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this.disableButtonState(),this._inputSelectorList.forEach((function(e){e.addEventListener("input",(function(n){t._isValid(e),t._hasInvalidInput()?t.disableButtonState():t._enableButtonState()}))}))}},{key:"disableValidationForm",value:function(){var t=this;this._inputSelectorList.forEach((function(e){t._hideInputError(e)}))}},{key:"_enableButtonState",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputSelectorList.some((function(t){return!t.validity.valid}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var k=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=g(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(e),this._popupElementClose=this._popupElement.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_closePopupByClickOverlay",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t.close()}))}},{key:"setEventListeners",value:function(t){var e=this;this._closePopupByClickOverlay(),this._popupElementClose.addEventListener("click",(function(t){return e.close(t)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function P(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(r){var o=C(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=O(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt="Увеличенное изображение: ".concat(t.name),n._popupCaption.textContent=t.name,j((e=O(n),C(i.prototype)),"open",e).call(e)},(u=P(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popupElement.querySelector(".popup__image"),n._popupCaption=n._popupElement.querySelector(".popup__caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(k);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formSubmit=e,n._form=n._popupElement.querySelector(".form"),n._formInputs=n._form.querySelectorAll(".form__input"),n._submitButton=n._form.querySelector(".form__submit-button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._dataForms={},this._formInputs.forEach((function(e){t._dataForms[e.name]=e.value})),this._dataForms}},{key:"setInputValue",value:function(t){this._formInputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;T(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._formSubmit(t._getInputValues())}))}},{key:"textSubmitButton",value:function(){this._submitButton.textContent=this._submitButtonText}},{key:"close",value:function(){T(x(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var z=function(){function t(e){var n=e.nameInput,r=e.jobInput,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameInput=n,this._jobInput=r,this._avatar=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameInput.textContent,about:this._jobInput.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameInput.textContent=e,this._jobInput.textContent=n,this._avatar.src=r}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_errorChecking",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._errorChecking)}},{key:"getListCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._errorChecking)}},{key:"getProfileInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._errorChecking)}},{key:"getProfileAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._errorChecking)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._errorChecking)}},{key:"putLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._errorChecking)}},{key:"deleteLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._errorChecking)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._errorChecking)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,K(r.key),r)}}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(){return Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Z.apply(this,arguments)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function G(t,e,n){return(e=K(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K(t){var e=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===N(e)?e:String(e)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}(this,t)});function u(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),G(M(r=i.call(this,t)),"open",(function(t,e){Z((n=M(r),$(u.prototype)),"open",n).call(n),r._element=t,r._elementId=e})),G(M(r),"_setSubmitAction",(function(){r._deleteСonfirmation(r._element,r._elementId)})),r._deleteСonfirmation=e,r._form=r._popupElement.querySelector(".form"),r._submitButton=r._form.querySelector(".form__submit-button"),r._submitButtonText=r._submitButton.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;Z($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Удаление...",t._setSubmitAction()}))}},{key:"textSubmitButton",value:function(){this._submitButton.textContent=this._submitButtonText}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y=document.querySelector(".form_profile"),tt=document.querySelector(".form_add-image"),et=document.querySelector(".popup_avatar"),nt=new _(Y,i),rt=new _(tt,i),ot=new _(et,i),it=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"e2e8c9aa-6f31-4976-b766-f461d6a54f76","Content-Type":"application/json"}});nt.enableValidation(),rt.enableValidation(),ot.enableValidation();var ut=new L(".popup_zoom");ut.setEventListeners();var at=function(t){var e=new s(t,".element",ut.open,st.open,(function(t,n){t.classList.contains("element__like_active")?it.deleteLikes(n).then((function(t){e.addLikeCard(t.likes)})).catch((function(t){return console.log("Ошибка при снятии лайка: ".concat(t))})):it.putLikes(n).then((function(t){e.addLikeCard(t.likes)})).catch((function(t){return console.log("Ошибка при проставлении лайка: ".concat(t))}))}));return e.generateCard()},ct=new y({renderer:function(t){ct.addItem(at(t))}},".elements__list"),lt=new R(".popup_cards",(function(e){Promise.all([it.getUserInfo(),it.addNewCard(e)]).then((function(e){var n=W(e,2),r=n[0],o=n[1];o.myId=r._id,t.prepend(at(o)),lt.close()})).catch((function(t){return console.log("Ошибка при добавлении карточки: ".concat(t))})).finally((function(){return lt.textSubmitButton()}))}));lt.setEventListeners();var st=new Q(".popup_delete",(function(t,e){it.deleteCard(e).then((function(){t.cardRemove(),st.close()})).catch((function(t){return console.log("Ошибка при удалении карточки: ".concat(t))})).finally((function(){return st.textSubmitButton()}))}));st.setEventListeners();var ft=new z(o),pt=new R(".popup_profile",(function(t){it.getProfileInfo(t).then((function(t){ft.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),pt.close()})).catch((function(t){return console.log("Ошибка при редактировании информации о пользователе: ".concat(t))})).finally((function(){return pt.textSubmitButton()}))}));pt.setEventListeners();var yt=new R(".popup_avatar",(function(t){it.getProfileAvatar(t).then((function(t){ft.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),yt.close()})).catch((function(t){return console.log("Ошибка при загрузке аватарки: ".concat(t))})).finally((function(){return yt.textSubmitButton()}))}));yt.setEventListeners(),n.addEventListener("click",(function(){nt.disableButtonState(),nt.disableValidationForm(),pt.setInputValue(ft.getUserInfo()),pt.open()})),r.addEventListener("click",(function(){ot.disableButtonState(),ot.disableValidationForm(),yt.open()})),e.addEventListener("click",(function(){rt.disableButtonState(),rt.disableValidationForm(),lt.open()})),Promise.all([it.getUserInfo(),it.getListCards()]).then((function(t){var e=W(t,2),n=e[0],r=e[1];r.forEach((function(t){return t.myId=n._id})),ft.setUserInfo({name:n.name,about:n.about,avatar:n.avatar}),ct.renderItems(r)}))})();