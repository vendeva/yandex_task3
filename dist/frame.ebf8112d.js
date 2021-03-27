/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {

;// CONCATENATED MODULE: ./src/messages.ts
var messageUpdate = function (alias, data) { return ({
    type: 'message@UPDATE',
    alias: alias,
    data: data,
}); };
var messageSetTheme = function (theme) { return ({
    type: 'message@SET_THEME',
    theme: theme,
}); };
var messageAction = function (action, params) { return ({
    type: 'message@ACTION',
    action: action,
    params: params,
}); };

;// CONCATENATED MODULE: ./src/application/view.ts
var setScale = function (el, value) {
    el.style.transform = "scaleX(" + value.toFixed(5) + ")";
};
var sendMessage = function (iframe, msg) {
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(msg, "*");
    }
};
var initIframe = function (parent, onLoad) {
    var iframe = document.createElement("iframe");
    iframe.classList.add("frame");
    iframe.src = "frame.html";
    iframe.sandbox.add("allow-scripts");
    iframe.sandbox.add("allow-same-origin");
    iframe.addEventListener("load", function () { return onLoad(iframe); });
    parent.appendChild(iframe);
    return iframe;
};
var initProgress = function (parent) {
    var container = document.createElement("div");
    container.classList.add("slide-progress");
    var progress = document.createElement("div");
    progress.classList.add("slide-progress-value");
    container.appendChild(progress);
    parent.appendChild(container);
    return progress;
};
var setElementTheme = function (elem, theme) {
    elem.className = "theme_" + theme;
};

;// CONCATENATED MODULE: ./src/frame.ts



function ready() {
    window.postMessage("load", "*");
}
function frame_sendMessage(msg) {
    window.postMessage(msg, "*");
}
function receiveMessage(_a) {
    var data = _a.data;
    if (data.type === "message@UPDATE") {
        document.body.innerHTML = window.renderTemplate(data.alias, data.data);
    }
    else if (data.type === "message@SET_THEME") {
        setElementTheme(document.body, data.theme);
    }
}
function onDocumentClick(e) {
    if (e.target instanceof HTMLElement) {
        var target = e.target;
        while (target && Object.keys(target.dataset).length === 0) {
            target = target.parentElement;
        }
        if (!target)
            return;
        var _a = target.dataset, action = _a.action, params = _a.params;
        frame_sendMessage(messageAction(action, params));
    }
}
document.addEventListener("DOMContentLoaded", ready);
document.body.addEventListener("click", onDocumentClick);
window.addEventListener("message", receiveMessage);

}();
!function() {
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0zLy4vc3JjL21lc3NhZ2VzLnRzIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTMvLi9zcmMvYXBwbGljYXRpb24vdmlldy50cyIsIndlYnBhY2s6Ly9zaHJpLTIwMjEtdGFzay0zLy4vc3JjL2ZyYW1lLnRzIiwid2VicGFjazovL3NocmktMjAyMS10YXNrLTMvLi9zcmMvYXNzZXRzL2xlc3Mvc3R5bGUubGVzcz8zODQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sNENBQTRDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNJLHdDQUF3QztBQUMvQztBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0ksK0NBQStDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7O0FDYkk7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1QkFBdUIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7OztBQzdCMkM7QUFDVTtBQUNoQztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGVBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUJBQVcsQ0FBQyxhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoQ0EiLCJmaWxlIjoiZnJhbWUuNjdlYTM1MDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIG1lc3NhZ2VVcGRhdGUgPSBmdW5jdGlvbiAoYWxpYXMsIGRhdGEpIHsgcmV0dXJuICh7XHJcbiAgICB0eXBlOiAnbWVzc2FnZUBVUERBVEUnLFxyXG4gICAgYWxpYXM6IGFsaWFzLFxyXG4gICAgZGF0YTogZGF0YSxcclxufSk7IH07XHJcbmV4cG9ydCB2YXIgbWVzc2FnZVNldFRoZW1lID0gZnVuY3Rpb24gKHRoZW1lKSB7IHJldHVybiAoe1xyXG4gICAgdHlwZTogJ21lc3NhZ2VAU0VUX1RIRU1FJyxcclxuICAgIHRoZW1lOiB0aGVtZSxcclxufSk7IH07XHJcbmV4cG9ydCB2YXIgbWVzc2FnZUFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24sIHBhcmFtcykgeyByZXR1cm4gKHtcclxuICAgIHR5cGU6ICdtZXNzYWdlQEFDVElPTicsXHJcbiAgICBhY3Rpb246IGFjdGlvbixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG59KTsgfTtcclxuIiwiZXhwb3J0IHZhciBzZXRTY2FsZSA9IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcclxuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVYKFwiICsgdmFsdWUudG9GaXhlZCg1KSArIFwiKVwiO1xyXG59O1xyXG5leHBvcnQgdmFyIHNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKGlmcmFtZSwgbXNnKSB7XHJcbiAgICBpZiAoaWZyYW1lICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XHJcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobXNnLCBcIipcIik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgaW5pdElmcmFtZSA9IGZ1bmN0aW9uIChwYXJlbnQsIG9uTG9hZCkge1xyXG4gICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBpZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpO1xyXG4gICAgaWZyYW1lLnNyYyA9IFwiZnJhbWUuaHRtbFwiO1xyXG4gICAgaWZyYW1lLnNhbmRib3guYWRkKFwiYWxsb3ctc2NyaXB0c1wiKTtcclxuICAgIGlmcmFtZS5zYW5kYm94LmFkZChcImFsbG93LXNhbWUtb3JpZ2luXCIpO1xyXG4gICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uTG9hZChpZnJhbWUpOyB9KTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgcmV0dXJuIGlmcmFtZTtcclxufTtcclxuZXhwb3J0IHZhciBpbml0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGUtcHJvZ3Jlc3NcIik7XHJcbiAgICB2YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcInNsaWRlLXByb2dyZXNzLXZhbHVlXCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgcmV0dXJuIHByb2dyZXNzO1xyXG59O1xyXG5leHBvcnQgdmFyIHNldEVsZW1lbnRUaGVtZSA9IGZ1bmN0aW9uIChlbGVtLCB0aGVtZSkge1xyXG4gICAgZWxlbS5jbGFzc05hbWUgPSBcInRoZW1lX1wiICsgdGhlbWU7XHJcbn07XHJcbiIsImltcG9ydCB7IG1lc3NhZ2VBY3Rpb24gfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBzZXRFbGVtZW50VGhlbWUgfSBmcm9tIFwiLi9hcHBsaWNhdGlvbi92aWV3XCI7XHJcbmltcG9ydCBcIi4vZnJhbWUuY3NzXCI7XHJcbmZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFwibG9hZFwiLCBcIipcIik7XHJcbn1cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobXNnKSB7XHJcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UobXNnLCBcIipcIik7XHJcbn1cclxuZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoX2EpIHtcclxuICAgIHZhciBkYXRhID0gX2EuZGF0YTtcclxuICAgIGlmIChkYXRhLnR5cGUgPT09IFwibWVzc2FnZUBVUERBVEVcIikge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gd2luZG93LnJlbmRlclRlbXBsYXRlKGRhdGEuYWxpYXMsIGRhdGEuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwibWVzc2FnZUBTRVRfVEhFTUVcIikge1xyXG4gICAgICAgIHNldEVsZW1lbnRUaGVtZShkb2N1bWVudC5ib2R5LCBkYXRhLnRoZW1lKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2soZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAmJiBPYmplY3Qua2V5cyh0YXJnZXQuZGF0YXNldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRhcmdldClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5kYXRhc2V0LCBhY3Rpb24gPSBfYS5hY3Rpb24sIHBhcmFtcyA9IF9hLnBhcmFtcztcclxuICAgICAgICBzZW5kTWVzc2FnZShtZXNzYWdlQWN0aW9uKGFjdGlvbiwgcGFyYW1zKSk7XHJcbiAgICB9XHJcbn1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVhZHkpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkRvY3VtZW50Q2xpY2spO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9