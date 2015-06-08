/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// https://github.com/enyo/dropzone/releases/tag/v4.0.0
(function(){var e,t,i,n,s,r,o,l,a=[].slice,u={}.hasOwnProperty,p=function(e,t){function i(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};o=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,s,r;if(n=arguments[0],e=2<=arguments.length?a.call(arguments,1):[],this._callbacks=this._callbacks||{},i=this._callbacks[n])for(s=0,r=i.length;r>s;s++)t=i[s],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,s,r,o;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(n=this._callbacks[e],!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(s=r=0,o=n.length;o>r;s=++r)if(i=n[s],i===t){n.splice(s,1);break}return this},e}(),e=function(e){function i(e,t){var s,r,o;if(this.element=e,this.version=i.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(i.instances.push(this),this.element.dropzone=this,s=null!=(o=i.optionsForElement(this.element))?o:{},this.options=n({},this.defaultOptions,s,null!=t?t:{}),this.options.forceFallback||!i.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?i.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:i.getElements(this.options.clickable,"clickable")),this.init()}var n,s;return p(i,e),i.prototype.Emitter=t,i.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],i.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictAllowedFileMsg:"Please upload image file in jpg,jpeg and png format only and size must be less then 1 MB.",accept:function(e,t){return t()},init:function(){return o},forceFallback:!1,fallback:function(){var e,t,n,s,r,o;for(this.element.className=""+this.element.className+" dz-browser-not-supported",o=this.element.getElementsByTagName("div"),s=0,r=o.length;r>s;s++)e=o[s],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message");return t||(t=i.createElement('<div class="dz-message"><div class="sugges-valid-file">'+this.options.dictAllowedFileMsg+"</div><span></span></div>"),this.element.appendChild(t)),n=t.getElementsByTagName("span")[0],n&&(n.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):i>n?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:o,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:o,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,n,s,r,o,l,a,u,p,d,c,h,m;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=i.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),r=0,a=d.length;a>r;r++)t=d[r],t.textContent=e.name;for(c=e.previewElement.querySelectorAll("[data-dz-size]"),o=0,u=c.length;u>o;o++)t=c[o],t.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=i.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),n=function(t){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===i.UPLOADING?i.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?i.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),h=e.previewElement.querySelectorAll("[data-dz-remove]"),m=[],l=0,p=h.length;p>l;l++)s=h[l],m.push(s.addEventListener("click",n));return m}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,s,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),r=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),n=0,s=r.length;s>n;n++)i=r[n],i.alt=e.name,i.src=t;return setTimeout(function(){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var i,n,s,r,o;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),o=[],n=0,s=r.length;s>n;n++)i=r[n],o.push(i.textContent=t);return o}},errormultiple:o,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:o,uploadprogress:function(e,t){var i,n,s,r,o;if(e.previewElement){for(r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),o=[],n=0,s=r.length;s>n;n++)i=r[n],o.push("PROGRESS"===i.nodeName?i.value=t:i.style.width=""+t+"%");return o}},totaluploadprogress:o,sending:o,sendingmultiple:o,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:o,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:o,complete:function(e){return e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement?e.previewElement.classList.add("dz-complete"):void 0},completemultiple:o,maxfilesexceeded:o,maxfilesreached:o,queuecomplete:o,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n</div>'},n=function(){var e,t,i,n,s,r,o;for(n=arguments[0],i=2<=arguments.length?a.call(arguments,1):[],r=0,o=i.length;o>r;r++){t=i[r];for(e in t)s=t[e],n[e]=s}return n},i.prototype.getAcceptedFiles=function(){var e,t,i,n,s;for(n=this.files,s=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted&&s.push(e);return s},i.prototype.getRejectedFiles=function(){var e,t,i,n,s;for(n=this.files,s=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted||s.push(e);return s},i.prototype.getFilesWithStatus=function(e){var t,i,n,s,r;for(s=this.files,r=[],i=0,n=s.length;n>i;i++)t=s[i],t.status===e&&r.push(t);return r},i.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(i.QUEUED)},i.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(i.UPLOADING)},i.prototype.getActiveFiles=function(){var e,t,n,s,r;for(s=this.files,r=[],t=0,n=s.length;n>t;t++)e=s[t],(e.status===i.UPLOADING||e.status===i.QUEUED)&&r.push(e);return r},i.prototype.init=function(){var e,t,n,s,r,o,l;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(i.createElement('<div class="dz-default dz-message"><div class="sugges-valid-file">'+this.options.dictAllowedFileMsg+"</div><span>"+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(n=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,s,r;if(i=e.hiddenFileInput.files,i.length)for(s=0,r=i.length;r>s;s++)t=i[s],e.addFile(t);return n()})}}(this))(),this.URL=null!=(o=window.URL)?o:window.webkitURL,l=this.events,s=0,r=l.length;r>s;s++)e=l[s],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(){return 0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length?setTimeout(function(){return e.emit("queuecomplete")},0):void 0}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(i){return t(i),e.emit("dragenter",i)}}(this),dragover:function(e){return function(i){var n;try{n=i.dataTransfer.effectAllowed}catch(s){}return i.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",t(i),e.emit("dragover",i)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(i){return t(i),e.drop(i)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(n){return t!==e.element||n.target===e.element||i.elementInside(n.target,e.element.querySelector(".dz-message"))?e.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},i.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,i.instances.splice(i.instances.indexOf(this),1)},i.prototype.updateTotalUploadProgress=function(){var e,t,i,n,s,r,o,l;if(n=0,i=0,e=this.getActiveFiles(),e.length){for(l=this.getActiveFiles(),r=0,o=l.length;o>r;r++)t=l[r],n+=t.upload.bytesSent,i+=t.upload.total;s=100*n/i}else s=100;return this.emit("totaluploadprogress",s,i,n)},i.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},i.prototype.getFallbackForm=function(){var e,t,n,s;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=i.createElement(n),"FORM"!==this.element.tagName?(s=i.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),s.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=s?s:t)},i.prototype.getExistingFallback=function(){var e,t,i,n,s,r;for(t=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},r=["div","form"],n=0,s=r.length;s>n;n++)if(i=r[n],e=t(this.element.getElementsByTagName(i)))return e},i.prototype.setupEventListeners=function(){var e,t,i,n,s,r,o;for(r=this.listeners,o=[],n=0,s=r.length;s>n;n++)e=r[n],o.push(function(){var n,s;n=e.events,s=[];for(t in n)i=n[t],s.push(e.element.addEventListener(t,i,!1));return s}());return o},i.prototype.removeEventListeners=function(){var e,t,i,n,s,r,o;for(r=this.listeners,o=[],n=0,s=r.length;s>n;n++)e=r[n],o.push(function(){var n,s;n=e.events,s=[];for(t in n)i=n[t],s.push(e.element.removeEventListener(t,i,!1));return s}());return o},i.prototype.disable=function(){var e,t,i,n,s;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),n=this.files,s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(this.cancelUpload(e));return s},i.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},i.prototype.filesize=function(e){var t,i,n,s,r,o,l,a;for(o=["TB","GB","MB","KB","b"],n=s=null,i=l=0,a=o.length;a>l;i=++l)if(r=o[i],t=Math.pow(this.options.filesizeBase,4-i)/10,e>=t){n=e/Math.pow(this.options.filesizeBase,4-i),s=r;break}return n=Math.round(10*n)/10,"<strong>"+n+"</strong> "+s},i.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},i.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,t.length&&(i=e.dataTransfer.items,i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},i.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},i.prototype.handleFiles=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;n>i;i++)t=e[i],s.push(this.addFile(t));return s},i.prototype._addFilesFromItems=function(e){var t,i,n,s,r;for(r=[],n=0,s=e.length;s>n;n++)i=e[n],r.push(null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?this.addFile(i.getAsFile()):t.isDirectory?this._addFilesFromDirectory(t,t.name):void 0:null!=i.getAsFile?null==i.kind||"file"===i.kind?this.addFile(i.getAsFile()):void 0:void 0);return r},i.prototype._addFilesFromDirectory=function(e,t){var i,n;return i=e.createReader(),n=function(e){return function(i){var n,s,r;for(s=0,r=i.length;r>s;s++)n=i[s],n.isFile?n.file(function(i){return e.options.ignoreHiddenFiles&&"."===i.name.substring(0,1)?void 0:(i.fullPath=""+t+"/"+i.name,e.addFile(i))}):n.isDirectory&&e._addFilesFromDirectory(n,""+t+"/"+n.name)}}(this),i.readEntries(n,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},i.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):i.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},i.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=i.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},i.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)t=e[i],this.enqueueFile(t);return null},i.prototype.enqueueFile=function(e){if(e.status!==i.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=i.QUEUED,this.options.autoProcessQueue?setTimeout(function(e){return function(){return e.processQueue()}}(this),0):void 0},i.prototype._thumbnailQueue=[],i.prototype._processingThumbnail=!1,i.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)):void 0},i.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this)))},i.prototype.removeFile=function(e){return e.status===i.UPLOADING&&this.cancelUpload(e),this.files=l(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},i.prototype.removeAllFiles=function(e){var t,n,s,r;for(null==e&&(e=!1),r=this.files.slice(),n=0,s=r.length;s>n;n++)t=r[n],(t.status!==i.UPLOADING||e)&&this.removeFile(t);return null},i.prototype.createThumbnail=function(e,t){var i;return i=new FileReader,i.onload=function(n){return function(){var s;return"image/svg+xml"===e.type?(n.emit("thumbnail",e,i.result),void(null!=t&&t())):(s=document.createElement("img"),s.onload=function(){var i,o,l,a,u,p,d,c;return e.width=s.width,e.height=s.height,l=n.options.resize.call(n,e),null==l.trgWidth&&(l.trgWidth=l.optWidth),null==l.trgHeight&&(l.trgHeight=l.optHeight),i=document.createElement("canvas"),o=i.getContext("2d"),i.width=l.trgWidth,i.height=l.trgHeight,r(o,s,null!=(u=l.srcX)?u:0,null!=(p=l.srcY)?p:0,l.srcWidth,l.srcHeight,null!=(d=l.trgX)?d:0,null!=(c=l.trgY)?c:0,l.trgWidth,l.trgHeight),a=i.toDataURL("image/png"),n.emit("thumbnail",e,a),null!=t?t():void 0},s.onerror=t,s.src=i.result)}}(this),i.readAsDataURL(e)},i.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,i=this.getUploadingFiles().length,e=i,!(i>=t)&&(n=this.getQueuedFiles(),n.length>0)){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;t>e;){if(!n.length)return;this.processFile(n.shift()),e++}}},i.prototype.processFile=function(e){return this.processFiles([e])},i.prototype.processFiles=function(e){var t,n,s;for(n=0,s=e.length;s>n;n++)t=e[n],t.processing=!0,t.status=i.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},i.prototype._getFilesWithXhr=function(e){var t,i;return i=function(){var i,n,s,r;for(s=this.files,r=[],i=0,n=s.length;n>i;i++)t=s[i],t.xhr===e&&r.push(t);return r}.call(this)},i.prototype.cancelUpload=function(e){var t,n,s,r,o,l,a;if(e.status===i.UPLOADING){for(n=this._getFilesWithXhr(e.xhr),s=0,o=n.length;o>s;s++)t=n[s],t.status=i.CANCELED;for(e.xhr.abort(),r=0,l=n.length;l>r;r++)t=n[r],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else((a=e.status)===i.ADDED||a===i.QUEUED)&&(e.status=i.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},s=function(){var e,t;return t=arguments[0],e=2<=arguments.length?a.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},i.prototype.uploadFile=function(e){return this.uploadFiles([e])},i.prototype.uploadFiles=function(e){var t,r,o,l,a,u,p,d,c,h,m,f,g,v,y,F,w,E,b,z,C,L,k,x,A,T,D,_,S,M,N,U,I,R;for(b=new XMLHttpRequest,z=0,x=e.length;x>z;z++)t=e[z],t.xhr=b;f=s(this.options.method,e),w=s(this.options.url,e),b.open(f,w,!0),b.withCredentials=!!this.options.withCredentials,y=null,o=function(i){return function(){var n,s,r;for(r=[],n=0,s=e.length;s>n;n++)t=e[n],r.push(i._errorProcessing(e,y||i.options.dictResponseError.replace("{{statusCode}}",b.status),b));return r}}(this),F=function(i){return function(n){var s,r,o,l,a,u,p,d,c;if(null!=n)for(r=100*n.loaded/n.total,o=0,u=e.length;u>o;o++)t=e[o],t.upload={progress:r,total:n.total,bytesSent:n.loaded};else{for(s=!0,r=100,l=0,p=e.length;p>l;l++)t=e[l],(100!==t.upload.progress||t.upload.bytesSent!==t.upload.total)&&(s=!1),t.upload.progress=r,t.upload.bytesSent=t.upload.total;if(s)return}for(c=[],a=0,d=e.length;d>a;a++)t=e[a],c.push(i.emit("uploadprogress",t,r,t.upload.bytesSent));return c}}(this),b.onload=function(t){return function(n){var s;if(e[0].status!==i.CANCELED&&4===b.readyState){if(y=b.responseText,b.getResponseHeader("content-type")&&~b.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(r){n=r,y="Invalid JSON response from server."}return F(),200<=(s=b.status)&&300>s?t._finished(e,y,n):o()}}}(this),b.onerror=function(){return function(){return e[0].status!==i.CANCELED?o():void 0}}(this),v=null!=(S=b.upload)?S:b,v.onprogress=F,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&n(u,this.options.headers);for(l in u)a=u[l],b.setRequestHeader(l,a);if(r=new FormData,this.options.params){M=this.options.params;for(m in M)E=M[m],r.append(m,E)}for(C=0,A=e.length;A>C;C++)t=e[C],this.emit("sending",t,b,r);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,b,r),"FORM"===this.element.tagName)for(N=this.element.querySelectorAll("input, textarea, select, button"),L=0,T=N.length;T>L;L++)if(d=N[L],c=d.getAttribute("name"),h=d.getAttribute("type"),"SELECT"===d.tagName&&d.hasAttribute("multiple"))for(U=d.options,k=0,D=U.length;D>k;k++)g=U[k],g.selected&&r.append(c,g.value);else(!h||"checkbox"!==(I=h.toLowerCase())&&"radio"!==I||d.checked)&&r.append(c,d.value);for(p=_=0,R=e.length-1;R>=0?R>=_:_>=R;p=R>=0?++_:--_)r.append(this._getParamName(p),e[p],e[p].name);return b.send(r)},i.prototype._finished=function(e,t,n){var s,r,o;for(r=0,o=e.length;o>r;r++)s=e[r],s.status=i.SUCCESS,this.emit("success",s,t,n),this.emit("complete",s);return this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},i.prototype._errorProcessing=function(e,t,n){var s,r,o;for(r=0,o=e.length;o>r;r++)s=e[r],s.status=i.ERROR,this.emit("error",s,t,n),this.emit("complete",s);return this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},i}(t),e.version="4.0.0",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[i(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,i,n,s,r,o;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],t=function(e){var t,i,s,r;for(r=[],i=0,s=e.length;s>i;i++)t=e[i],r.push(/(^| )dropzone($| )/.test(t.className)?n.push(t):void 0);return r},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),o=[],s=0,r=n.length;r>s;s++)i=n[s],o.push(e.optionsForElement(i)!==!1?new e(i):void 0);return o},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,i,n,s,r;if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(r=e.blacklistedBrowsers,n=0,s=r.length;s>n;n++)i=r[n],i.test(navigator.userAgent)&&(t=!1);else t=!1;else t=!1;return t},l=function(e,t){var i,n,s,r;for(r=[],n=0,s=e.length;s>n;n++)i=e[n],i!==t&&r.push(i);return r},i=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},e.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},e.getElements=function(e,t){var i,n,s,r,o,l,a,u;if(e instanceof Array){s=[];try{for(r=0,l=e.length;l>r;r++)n=e[r],s.push(this.getElement(n,t))}catch(p){i=p,s=null}}else if("string"==typeof e)for(s=[],u=document.querySelectorAll(e),o=0,a=u.length;a>o;o++)n=u[o],s.push(n);else null!=e.nodeType&&(s=[e]);if(null==s||!s.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return s},e.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},e.isValidFile=function(e,t){var i,n,s,r,o;if(!t)return!0;for(t=t.split(","),n=e.type,i=n.replace(/\/.*$/,""),r=0,o=t.length;o>r;r++)if(s=t[r],s=s.trim(),"."===s.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",s=function(e){var t,i,n,s,r,o,l,a,u,p;for(l=e.naturalWidth,o=e.naturalHeight,i=document.createElement("canvas"),i.width=1,i.height=o,n=i.getContext("2d"),n.drawImage(e,0,0),s=n.getImageData(0,0,1,o).data,p=0,r=o,a=o;a>p;)t=s[4*(a-1)+3],0===t?r=a:p=a,a=r+p>>1;return u=a/o,0===u?1:u},r=function(e,t,i,n,r,o,l,a,u,p){var d;return d=s(t),e.drawImage(t,i,n,r,o,l,a,u,p/d)},n=function(e,t){var i,n,s,r,o,l,a,u,p;if(s=!1,p=!0,n=e.document,u=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",r=function(i){return"readystatechange"!==i.type||"complete"===n.readyState?(("load"===i.type?e:n)[a](l+i.type,r,!1),!s&&(s=!0)?t.call(e,i.type||i):void 0):void 0},o=function(){var e;try{u.doScroll("left")}catch(t){return e=t,void setTimeout(o,50)}return r("poll")},"complete"!==n.readyState){if(n.createEventObject&&u.doScroll){try{p=!e.frameElement}catch(d){}p&&o()}return n[i](l+"DOMContentLoaded",r,!1),n[i](l+"readystatechange",r,!1),e[i](l+"load",r,!1)}},e._autoDiscoverFunction=function(){return e.autoDiscover?e.discover():void 0},n(window,e._autoDiscoverFunction)}).call(this);

/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
*/
!function(a){a.jCarouselLite={version:"1.1"},a.fn.jCarouselLite=function(b){return b=a.extend({},a.fn.jCarouselLite.options,b||{}),this.each(function(){function c(a){return n||(clearTimeout(A),z=a,b.beforeStart&&b.beforeStart.call(this,i()),b.circular?j(a):k(a),m({start:function(){n=!0},done:function(){b.afterEnd&&b.afterEnd.call(this,i()),b.auto&&h(),n=!1}}),b.circular||l()),!1}function d(){if(n=!1,o=b.vertical?"top":"left",p=b.vertical?"height":"width",q=B.find(">ul"),r=q.find(">li"),x=r.size(),w=x<b.visible?x:b.visible,b.circular){var c=r.slice(x-w).clone(),d=r.slice(0,w).clone();q.prepend(c).append(d),b.start+=w}s=a("li",q),y=s.size(),z=b.start}function e(){B.css("visibility","visible"),s.css({overflow:"hidden","float":b.vertical?"none":"left"}),q.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"}),B.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"}),!b.circular&&b.btnPrev&&0==b.start&&a(b.btnPrev).addClass("disabled")}function f(){t=b.vertical?s.outerHeight(!0):s.outerWidth(!0),u=t*y,v=t*w,s.css({width:s.width(),height:s.height()}),q.css(p,u+"px").css(o,-(z*t)),B.css(p,v+"px")}function g(){b.btnPrev&&a(b.btnPrev).click(function(){return c(z-b.scroll)}),b.btnNext&&a(b.btnNext).click(function(){return c(z+b.scroll)}),b.btnGo&&a.each(b.btnGo,function(d,e){a(e).click(function(){return c(b.circular?w+d:d)})}),b.mouseWheel&&B.mousewheel&&B.mousewheel(function(a,d){return c(d>0?z-b.scroll:z+b.scroll)}),b.auto&&h()}function h(){A=setTimeout(function(){c(z+b.scroll)},b.auto)}function i(){return s.slice(z).slice(0,w)}function j(a){var c;a<=b.start-w-1?(c=a+x+b.scroll,q.css(o,-(c*t)+"px"),z=c-b.scroll):a>=y-w+1&&(c=a-x-b.scroll,q.css(o,-(c*t)+"px"),z=c+b.scroll)}function k(a){0>a?z=0:a>y-w&&(z=y-w)}function l(){a(b.btnPrev+","+b.btnNext).removeClass("disabled"),a(z-b.scroll<0&&b.btnPrev||z+b.scroll>y-w&&b.btnNext||[]).addClass("disabled")}function m(c){n=!0,q.animate("left"==o?{left:-(z*t)}:{top:-(z*t)},a.extend({duration:b.speed,easing:b.easing},c))}var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a(this);d(),e(),f(),g()})},a.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null}}(jQuery);

/* build: `node build.js modules=ALL exclude=gestures,cufon,json minifier=uglifyjs` *//*! Fabric.js Copyright 2008-2014, Printio (Juriy Zaytsev, Maxim Chernyak) */var fabric=fabric||{version:"1.4.13"};typeof exports!="undefined"&&(exports.fabric=fabric),typeof document!="undefined"&&typeof window!="undefined"?(fabric.document=document,fabric.window=window):(fabric.document=require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>"),fabric.document.createWindow?fabric.window=fabric.document.createWindow():fabric.window=fabric.document.parentWindow),fabric.isTouchSupported="ontouchstart"in fabric.document.documentElement,fabric.isLikelyNode=typeof Buffer!="undefined"&&typeof window=="undefined",fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)",function(){function e(e,t){if(!this.__eventListeners[e])return;t?fabric.util.removeFromArray(this.__eventListeners[e],t):this.__eventListeners[e].length=0}function t(e,t){this.__eventListeners||(this.__eventListeners={});if(arguments.length===1)for(var n in e)this.on(n,e[n]);else this.__eventListeners[e]||(this.__eventListeners[e]=[]),this.__eventListeners[e].push(t);return this}function n(t,n){if(!this.__eventListeners)return;if(arguments.length===0)this.__eventListeners={};else if(arguments.length===1&&typeof arguments[0]=="object")for(var r in t)e.call(this,r,t[r]);else e.call(this,t,n);return this}function r(e,t){if(!this.__eventListeners)return;var n=this.__eventListeners[e];if(!n)return;for(var r=0,i=n.length;r<i;r++)n[r].call(this,t||{});return this}fabric.Observable={observe:t,stopObserving:n,fire:r,on:t,off:n,trigger:r}}(),fabric.Collection={add:function(){this._objects.push.apply(this._objects,arguments);for(var e=0,t=arguments.length;e<t;e++)this._onObjectAdded(arguments[e]);return this.renderOnAddRemove&&this.renderAll(),this},insertAt:function(e,t,n){var r=this.getObjects();return n?r[t]=e:r.splice(t,0,e),this._onObjectAdded(e),this.renderOnAddRemove&&this.renderAll(),this},remove:function(){var e=this.getObjects(),t;for(var n=0,r=arguments.length;n<r;n++)t=e.indexOf(arguments[n]),t!==-1&&(e.splice(t,1),this._onObjectRemoved(arguments[n]));return this.renderOnAddRemove&&this.renderAll(),this},forEachObject:function(e,t){var n=this.getObjects(),r=n.length;while(r--)e.call(t,n[r],r,n);return this},getObjects:function(e){return typeof e=="undefined"?this._objects:this._objects.filter(function(t){return t.type===e})},item:function(e){return this.getObjects()[e]},isEmpty:function(){return this.getObjects().length===0},size:function(){return this.getObjects().length},contains:function(e){return this.getObjects().indexOf(e)>-1},complexity:function(){return this.getObjects().reduce(function(e,t){return e+=t.complexity?t.complexity():0,e},0)}},function(e){var t=Math.sqrt,n=Math.atan2,r=Math.PI/180;fabric.util={removeFromArray:function(e,t){var n=e.indexOf(t);return n!==-1&&e.splice(n,1),e},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},degreesToRadians:function(e){return e*r},radiansToDegrees:function(e){return e/r},rotatePoint:function(e,t,n){var r=Math.sin(n),i=Math.cos(n);e.subtractEquals(t);var s=e.x*i-e.y*r,o=e.x*r+e.y*i;return(new fabric.Point(s,o)).addEquals(t)},transformPoint:function(e,t,n){return n?new fabric.Point(t[0]*e.x+t[1]*e.y,t[2]*e.x+t[3]*e.y):new fabric.Point(t[0]*e.x+t[1]*e.y+t[4],t[2]*e.x+t[3]*e.y+t[5])},invertTransform:function(e){var t=e.slice(),n=1/(e[0]*e[3]-e[1]*e[2]);t=[n*e[3],-n*e[1],-n*e[2],n*e[0],0,0];var r=fabric.util.transformPoint({x:e[4],y:e[5]},t);return t[4]=-r.x,t[5]=-r.y,t},toFixed:function(e,t){return parseFloat(Number(e).toFixed(t))},parseUnit:function(e,t){var n=/\D{0,2}$/.exec(e),r=parseFloat(e);t||(t=fabric.Text.DEFAULT_SVG_FONT_SIZE);switch(n[0]){case"mm":return r*fabric.DPI/25.4;case"cm":return r*fabric.DPI/2.54;case"in":return r*fabric.DPI;case"pt":return r*fabric.DPI/72;case"pc":return r*fabric.DPI/72*12;case"em":return r*t;default:return r}},falseFunction:function(){return!1},getKlass:function(e,t){return e=fabric.util.string.camelize(e.charAt(0).toUpperCase()+e.slice(1)),fabric.util.resolveNamespace(t)[e]},resolveNamespace:function(t){if(!t)return fabric;var n=t.split("."),r=n.length,i=e||fabric.window;for(var s=0;s<r;++s)i=i[n[s]];return i},loadImage:function(e,t,n,r){if(!e){t&&t.call(n,e);return}var i=fabric.util.createImage();i.onload=function(){t&&t.call(n,i),i=i.onload=i.onerror=null},i.onerror=function(){fabric.log("Error loading "+i.src),t&&t.call(n,null,!0),i=i.onload=i.onerror=null},e.indexOf("data")!==0&&typeof r!="undefined"&&(i.crossOrigin=r),i.src=e},enlivenObjects:function(e,t,n,r){function i(){++o===u&&t&&t(s)}e=e||[];var s=[],o=0,u=e.length;if(!u){t&&t(s);return}e.forEach(function(e,t){if(!e||!e.type){i();return}var o=fabric.util.getKlass(e.type,n);o.async?o.fromObject(e,function(n,o){o||(s[t]=n,r&&r(e,s[t])),i()}):(s[t]=o.fromObject(e),r&&r(e,s[t]),i())})},groupSVGElements:function(e,t,n){var r;return r=new fabric.PathGroup(e,t),typeof n!="undefined"&&r.setSourcePath(n),r},populateWithProperties:function(e,t,n){if(n&&Object.prototype.toString.call(n)==="[object Array]")for(var r=0,i=n.length;r<i;r++)n[r]in e&&(t[n[r]]=e[n[r]])},drawDashedLine:function(e,r,i,s,o,u){var a=s-r,f=o-i,l=t(a*a+f*f),c=n(f,a),h=u.length,p=0,d=!0;e.save(),e.translate(r,i),e.moveTo(0,0),e.rotate(c),r=0;while(l>r)r+=u[p++%h],r>l&&(r=l),e[d?"lineTo":"moveTo"](r,0),d=!d;e.restore()},createCanvasElement:function(e){return e||(e=fabric.document.createElement("canvas")),!e.getContext&&typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager.initElement(e),e},createImage:function(){return fabric.isLikelyNode?new(require("canvas").Image):fabric.document.createElement("img")},createAccessors:function(e){var t=e.prototype;for(var n=t.stateProperties.length;n--;){var r=t.stateProperties[n],i=r.charAt(0).toUpperCase()+r.slice(1),s="set"+i,o="get"+i;t[o]||(t[o]=function(e){return new Function('return this.get("'+e+'")')}(r)),t[s]||(t[s]=function(e){return new Function("value",'return this.set("'+e+'", value)')}(r))}},clipContext:function(e,t){t.save(),t.beginPath(),e.clipTo(t),t.clip()},multiplyTransformMatrices:function(e,t){var n=[[e[0],e[2],e[4]],[e[1],e[3],e[5]],[0,0,1]],r=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]],i=[];for(var s=0;s<3;s++){i[s]=[];for(var o=0;o<3;o++){var u=0;for(var a=0;a<3;a++)u+=n[s][a]*r[a][o];i[s][o]=u}}return[i[0][0],i[1][0],i[0][1],i[1][1],i[0][2],i[1][2]]},getFunctionBody:function(e){return(String(e).match(/function[^{]*\{([\s\S]*)\}/)||{})[1]},isTransparent:function(e,t,n,r){r>0&&(t>r?t-=r:t=0,n>r?n-=r:n=0);var i=!0,s=e.getImageData(t,n,r*2||1,r*2||1);for(var o=3,u=s.data.length;o<u;o+=4){var a=s.data[o];i=a<=0;if(i===!1)break}return s=null,i}}}(typeof exports!="undefined"?exports:this),function(){function i(t,n,i,u,a,f,l){var c=r.call(arguments);if(e[c])return e[c];var h=Math.PI,p=l*h/180,d=Math.sin(p),v=Math.cos(p),m=0,g=0;i=Math.abs(i),u=Math.abs(u);var y=-v*t*.5-d*n*.5,b=-v*n*.5+d*t*.5,w=i*i,E=u*u,S=b*b,x=y*y,T=w*E-w*S-E*x,N=0;if(T<0){var C=Math.sqrt(1-T/(w*E));i*=C,u*=C}else N=(a===f?-1:1)*Math.sqrt(T/(w*S+E*x));var k=N*i*b/u,L=-N*u*y/i,A=v*k-d*L+t*.5,O=d*k+v*L+n*.5,M=o(1,0,(y-k)/i,(b-L)/u),_=o((y-k)/i,(b-L)/u,(-y-k)/i,(-b-L)/u);f===0&&_>0?_-=2*h:f===1&&_<0&&(_+=2*h);var D=Math.ceil(Math.abs(_/h*2)),P=[],H=_/D,B=8/3*Math.sin(H/4)*Math.sin(H/4)/Math.sin(H/2),j=M+H;for(var F=0;F<D;F++)P[F]=s(M,j,v,d,i,u,A,O,B,m,g),m=P[F][4],g=P[F][5],M=j,j+=H;return e[c]=P,P}function s(e,n,i,s,o,u,a,f,l,c,h){var p=r.call(arguments);if(t[p])return t[p];var d=Math.cos(e),v=Math.sin(e),m=Math.cos(n),g=Math.sin(n),y=i*o*m-s*u*g+a,b=s*o*m+i*u*g+f,w=c+l*(-i*o*v-s*u*d),E=h+l*(-s*o*v+i*u*d),S=y+l*(i*o*g+s*u*m),x=b+l*(s*o*g-i*u*m);return t[p]=[w,E,S,x,y,b],t[p]}function o(e,t,n,r){var i=Math.atan2(t,e),s=Math.atan2(r,n);return s>=i?s-i:2*Math.PI-(i-s)}function u(e,t,i,s,o,u,a,f){var l=r.call(arguments);if(n[l])return n[l];var c=Math.sqrt,h=Math.min,p=Math.max,d=Math.abs,v=[],m=[[],[]],g,y,b,w,E,S,x,T;y=6*e-12*i+6*o,g=-3*e+9*i-9*o+3*a,b=3*i-3*e;for(var N=0;N<2;++N){N>0&&(y=6*t-12*s+6*u,g=-3*t+9*s-9*u+3*f,b=3*s-3*t);if(d(g)<1e-12){if(d(y)<1e-12)continue;w=-b/y,0<w&&w<1&&v.push(w);continue}x=y*y-4*b*g;if(x<0)continue;T=c(x),E=(-y+T)/(2*g),0<E&&E<1&&v.push(E),S=(-y-T)/(2*g),0<S&&S<1&&v.push(S)}var C,k,L=v.length,A=L,O;while(L--)w=v[L],O=1-w,C=O*O*O*e+3*O*O*w*i+3*O*w*w*o+w*w*w*a,m[0][L]=C,k=O*O*O*t+3*O*O*w*s+3*O*w*w*u+w*w*w*f,m[1][L]=k;m[0][A]=e,m[1][A]=t,m[0][A+1]=a,m[1][A+1]=f;var M=[{x:h.apply(null,m[0]),y:h.apply(null,m[1])},{x:p.apply(null,m[0]),y:p.apply(null,m[1])}];return n[l]=M,M}var e={},t={},n={},r=Array.prototype.join;fabric.util.drawArc=function(e,t,n,r){var s=r[0],o=r[1],u=r[2],a=r[3],f=r[4],l=r[5],c=r[6],h=[[],[],[],[]],p=i(l-t,c-n,s,o,a,f,u);for(var d=0,v=p.length;d<v;d++)h[d][0]=p[d][0]+t,h[d][1]=p[d][1]+n,h[d][2]=p[d][2]+t,h[d][3]=p[d][3]+n,h[d][4]=p[d][4]+t,h[d][5]=p[d][5]+n,e.bezierCurveTo.apply(e,h[d])},fabric.util.getBoundsOfArc=function(e,t,n,r,s,o,a,f,l){var c=0,h=0,p=[],d=[],v=i(f-e,l-t,n,r,o,a,s);for(var m=0,g=v.length;m<g;m++)p=u(c,h,v[m][0],v[m][1],v[m][2],v[m][3],v[m][4],v[m][5]),p[0].x+=e,p[0].y+=t,p[1].x+=e,p[1].y+=t,d.push(p[0]),d.push(p[1]),c=v[m][4],h=v[m][5];return d},fabric.util.getBoundsOfCurve=u}(),function(){function t(t,n){var r=e.call(arguments,2),i=[];for(var s=0,o=t.length;s<o;s++)i[s]=r.length?t[s][n].apply(t[s],r):t[s][n].call(t[s]);return i}function n(e,t){return i(e,t,function(e,t){return e>=t})}function r(e,t){return i(e,t,function(e,t){return e<t})}function i(e,t,n){if(!e||e.length===0)return;var r=e.length-1,i=t?e[r][t]:e[r];if(t)while(r--)n(e[r][t],i)&&(i=e[r][t]);else while(r--)n(e[r],i)&&(i=e[r]);return i}var e=Array.prototype.slice;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:r!==0&&r!==Number.POSITIVE_INFINITY&&r!==Number.NEGATIVE_INFINITY&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)n in this&&e.call(t,this[n],n,this)}),Array.prototype.map||(Array.prototype.map=function(e,t){var n=[];for(var r=0,i=this.length>>>0;r<i;r++)r in this&&(n[r]=e.call(t,this[r],r,this));return n}),Array.prototype.every||(Array.prototype.every=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&!e.call(t,this[n],n,this))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&e.call(t,this[n],n,this))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(e,t){var n=[],r;for(var i=0,s=this.length>>>0;i<s;i++)i in this&&(r=this[i],e.call(t,r,i,this)&&n.push(r));return n}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=this.length>>>0,n=0,r;if(arguments.length>1)r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),fabric.util.array={invoke:t,min:r,max:n}}(),function(){function e(e,t){for(var n in t)e[n]=t[n];return e}function t(t){return e({},t)}fabric.util.object={extend:e,clone:t}}(),function(){function e(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function t(e,t){return e.charAt(0).toUpperCase()+(t?e.slice(1):e.slice(1).toLowerCase())}function n(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")}),fabric.util.string={camelize:e,capitalize:t,escapeXml:n}}(),function(){var e=Array.prototype.slice,t=Function.prototype.apply,n=function(){};Function.prototype.bind||(Function.prototype.bind=function(r){var i=this,s=e.call(arguments,1),o;return s.length?o=function(){return t.call(i,this instanceof n?this:r,s.concat(e.call(arguments)))}:o=function(){return t.call(i,this instanceof n?this:r,arguments)},n.prototype=this.prototype,o.prototype=new n,o})}(),function(){function i(){}function s(t){var n=this.constructor.superclass.prototype[t];return arguments.length>1?n.apply(this,e.call(arguments,1)):n.call(this)}function o(){function u(){this.initialize.apply(this,arguments)}var n=null,o=e.call(arguments,0);typeof o[0]=="function"&&(n=o.shift()),u.superclass=n,u.subclasses=[],n&&(i.prototype=n.prototype,u.prototype=new i,n.subclasses.push(u));for(var a=0,f=o.length;a<f;a++)r(u,o[a],n);return u.prototype.initialize||(u.prototype.initialize=t),u.prototype.constructor=u,u.prototype.callSuper=s,u}var e=Array.prototype.slice,t=function(){},n=function(){for(var e in{toString:1})if(e==="toString")return!1;return!0}(),r=function(e,t,r){for(var i in t)i in e.prototype&&typeof e.prototype[i]=="function"&&(t[i]+"").indexOf("callSuper")>-1?e.prototype[i]=function(e){return function(){var n=this.constructor.superclass;this.constructor.superclass=r;var i=t[e].apply(this,arguments);this.constructor.superclass=n;if(e!=="initialize")return i}}(i):e.prototype[i]=t[i],n&&(t.toString!==Object.prototype.toString&&(e.prototype.toString=t.toString),t.valueOf!==Object.prototype.valueOf&&(e.prototype.valueOf=t.valueOf))};fabric.util.createClass=o}(),function(){function t(e){var t=Array.prototype.slice.call(arguments,1),n,r,i=t.length;for(r=0;r<i;r++){n=typeof e[t[r]];if(!/^(?:function|object|unknown)$/.test(n))return!1}return!0}function s(e,t){return{handler:t,wrappedHandler:o(e,t)}}function o(e,t){return function(r){t.call(n(e),r||fabric.window.event)}}function u(e,t){return function(n){if(c[e]&&c[e][t]){var r=c[e][t];for(var i=0,s=r.length;i<s;i++)r[i].call(this,n||fabric.window.event)}}}function d(t,n){t||(t=fabric.window.event);var r=t.target||(typeof t.srcElement!==e?t.srcElement:null),i=fabric.util.getScrollLeftTop(r,n);return{x:v(t)+i.left,y:m(t)+i.top}}function g(e,t,n){var r=e.type==="touchend"?"changedTouches":"touches";return e[r]&&e[r][0]?e[r][0][t]-(e[r][0][t]-e[r][0][n])||e[n]:e[n]}var e="unknown",n,r,i=function(){var e=0;return function(t){return t.__uniqueID||(t.__uniqueID="uniqueID__"+e++)}}();(function(){var e={};n=function(t){return e[t]},r=function(t,n){e[t]=n}})();var a=t(fabric.document.documentElement,"addEventListener","removeEventListener")&&t(fabric.window,"addEventListener","removeEventListener"),f=t(fabric.document.documentElement,"attachEvent","detachEvent")&&t(fabric.window,"attachEvent","detachEvent"),l={},c={},h,p;a?(h=function(e,t,n){e.addEventListener(t,n,!1)},p=function(e,t,n){e.removeEventListener(t,n,!1)}):f?(h=function(e,t,n){var o=i(e);r(o,e),l[o]||(l[o]={}),l[o][t]||(l[o][t]=[]);var u=s(o,n);l[o][t].push(u),e.attachEvent("on"+t,u.wrappedHandler)},p=function(e,t,n){var r=i(e),s;if(l[r]&&l[r][t])for(var o=0,u=l[r][t].length;o<u;o++)s=l[r][t][o],s&&s.handler===n&&(e.detachEvent("on"+t,s.wrappedHandler),l[r][t][o]=null)}):(h=function(e,t,n){var r=i(e);c[r]||(c[r]={});if(!c[r][t]){c[r][t]=[];var s=e["on"+t];s&&c[r][t].push(s),e["on"+t]=u(r,t)}c[r][t].push(n)},p=function(e,t,n){var r=i(e);if(c[r]&&c[r][t]){var s=c[r][t];for(var o=0,u=s.length;o<u;o++)s[o]===n&&s.splice(o,1)}}),fabric.util.addListener=h,fabric.util.removeListener=p;var v=function(t){return typeof t.clientX!==e?t.clientX:0},m=function(t){return typeof t.clientY!==e?t.clientY:0};fabric.isTouchSupported&&(v=function(e){return g(e,"pageX","clientX")},m=function(e){return g(e,"pageY","clientY")}),fabric.util.getPointer=d,fabric.util.object.extend(fabric.util,fabric.Observable)}(),function(){function e(e,t){var n=e.style;if(!n)return e;if(typeof t=="string")return e.style.cssText+=";"+t,t.indexOf("opacity")>-1?s(e,t.match(/opacity:\s*(\d?\.?\d*)/)[1]):e;for(var r in t)if(r==="opacity")s(e,t[r]);else{var i=r==="float"||r==="cssFloat"?typeof n.styleFloat=="undefined"?"cssFloat":"styleFloat":r;n[i]=t[r]}return e}var t=fabric.document.createElement("div"),n=typeof t.style.opacity=="string",r=typeof t.style.filter=="string",i=/alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,s=function(e){return e};n?s=function(e,t){return e.style.opacity=t,e}:r&&(s=function(e,t){var n=e.style;return e.currentStyle&&!e.currentStyle.hasLayout&&(n.zoom=1),i.test(n.filter)?(t=t>=.9999?"":"alpha(opacity="+t*100+")",n.filter=n.filter.replace(i,t)):n.filter+=" alpha(opacity="+t*100+")",e}),fabric.util.setStyle=e}(),function(){function t(e){return typeof e=="string"?fabric.document.getElementById(e):e}function s(e,t){var n=fabric.document.createElement(e);for(var r in t)r==="class"?n.className=t[r]:r==="for"?n.htmlFor=t[r]:n.setAttribute(r,t[r]);return n}function o(e,t){e&&(" "+e.className+" ").indexOf(" "+t+" ")===-1&&(e.className+=(e.className?" ":"")+t)}function u(e,t,n){return typeof t=="string"&&(t=s(t,n)),e.parentNode&&e.parentNode.replaceChild(t,e),t.appendChild(e),t}function a(e,t){var n,r,i=0,s=0,o=fabric.document.documentElement,u=fabric.document.body||{scrollLeft:0,scrollTop:0};r=e;while(e&&e.parentNode&&!n)e=e.parentNode,e.nodeType===1&&fabric.util.getElementStyle(e,"position")==="fixed"&&(n=e),e.nodeType===1&&r!==t&&fabric.util.getElementStyle(e,"position")==="absolute"?(i=0,s=0):e===fabric.document?(i=u.scrollLeft||o.scrollLeft||0,s=u.scrollTop||o.scrollTop||0):(i+=e.scrollLeft||0,s+=e.scrollTop||0);return{left:i,top:s}}function f(e){var t,n=e&&e.ownerDocument,r={left:0,top:0},i={left:0,top:0},s,o={borderLeftWidth:"left",borderTopWidth:"top",paddingLeft:"left",paddingTop:"top"};if(!n)return{left:0,top:0};for(var u in o)i[o[u]]+=parseInt(l(e,u),10)||0;return t=n.documentElement,typeof e.getBoundingClientRect!="undefined"&&(r=e.getBoundingClientRect()),s=fabric.util.getScrollLeftTop(e,null),{left:r.left+s.left-(t.clientLeft||0)+i.left,top:r.top+s.top-(t.clientTop||0)+i.top}}var e=Array.prototype.slice,n,r=function(t){return e.call(t,0)};try{n=r(fabric.document.childNodes)instanceof Array}catch(i){}n||(r=function(e){var t=new Array(e.length),n=e.length;while(n--)t[n]=e[n];return t});var l;fabric.document.defaultView&&fabric.document.defaultView.getComputedStyle?l=function(e,t){var n=fabric.document.defaultView.getComputedStyle(e,null);return n?n[t]:undefined}:l=function(e,t){var n=e.style[t];return!n&&e.currentStyle&&(n=e.currentStyle[t]),n},function(){function n(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=fabric.util.falseFunction),t?e.style[t]="none":typeof e.unselectable=="string"&&(e.unselectable="on"),e}function r(e){return typeof e.onselectstart!="undefined"&&(e.onselectstart=null),t?e.style[t]="":typeof e.unselectable=="string"&&(e.unselectable=""),e}var e=fabric.document.documentElement.style,t="userSelect"in e?"userSelect":"MozUserSelect"in e?"MozUserSelect":"WebkitUserSelect"in e?"WebkitUserSelect":"KhtmlUserSelect"in e?"KhtmlUserSelect":"";fabric.util.makeElementUnselectable=n,fabric.util.makeElementSelectable=r}(),function(){function e(e,t){var n=fabric.document.getElementsByTagName("head")[0],r=fabric.document.createElement("script"),i=!0;r.onload=r.onreadystatechange=function(e){if(i){if(typeof this.readyState=="string"&&this.readyState!=="loaded"&&this.readyState!=="complete")return;i=!1,t(e||fabric.window.event),r=r.onload=r.onreadystatechange=null}},r.src=e,n.appendChild(r)}fabric.util.getScript=e}(),fabric.util.getById=t,fabric.util.toArray=r,fabric.util.makeElement=s,fabric.util.addClass=o,fabric.util.wrapElement=u,fabric.util.getScrollLeftTop=a,fabric.util.getElementOffset=f,fabric.util.getElementStyle=l}(),function(){function e(e,t){return e+(/\?/.test(e)?"&":"?")+t}function n(){}function r(r,i){i||(i={});var s=i.method?i.method.toUpperCase():"GET",o=i.onComplete||function(){},u=t(),a;return u.onreadystatechange=function(){u.readyState===4&&(o(u),u.onreadystatechange=n)},s==="GET"&&(a=null,typeof i.parameters=="string"&&(r=e(r,i.parameters))),u.open(s,r,!0),(s==="POST"||s==="PUT")&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(a),u}var t=function(){var e=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new XMLHttpRequest}];for(var t=e.length;t--;)try{var n=e[t]();if(n)return e[t]}catch(r){}}();fabric.util.request=r}(),fabric.log=function(){},fabric.warn=function(){},typeof console!="undefined"&&["log","warn"].forEach(function(e){typeof console[e]!="undefined"&&console[e].apply&&(fabric[e]=function(){return console[e].apply(console,arguments)})}),function(){function e(e){n(function(t){e||(e={});var r=t||+(new Date),i=e.duration||500,s=r+i,o,u=e.onChange||function(){},a=e.abort||function(){return!1},f=e.easing||function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},l="startValue"in e?e.startValue:0,c="endValue"in e?e.endValue:100,h=e.byValue||c-l;e.onStart&&e.onStart(),function p(t){o=t||+(new Date);var c=o>s?i:o-r;if(a()){e.onComplete&&e.onComplete();return}u(f(c,l,h,i));if(o>s){e.onComplete&&e.onComplete();return}n(p)}(r)})}function n(){return t.apply(fabric.window,arguments)}var t=fabric.window.requestAnimationFrame||fabric.window.webkitRequestAnimationFrame||fabric.window.mozRequestAnimationFrame||fabric.window.oRequestAnimationFrame||fabric.window.msRequestAnimationFrame||function(e){fabric.window.setTimeout(e,1e3/60)};fabric.util.animate=e,fabric.util.requestAnimFrame=n}(),function(){function e(e,t,n,r){return e<Math.abs(t)?(e=t,r=n/4):r=n/(2*Math.PI)*Math.asin(t/e),{a:e,c:t,p:n,s:r}}function t(e,t,n){return e.a*Math.pow(2,10*(t-=1))*Math.sin((t*n-e.s)*2*Math.PI/e.p)}function n(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function r(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}function i(e,t,n,r){return n*(e/=r)*e*e*e+t}function s(e,t,n,r){return-n*((e=e/r-1)*e*e*e-1)+t}function o(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t}function u(e,t,n,r){return n*(e/=r)*e*e*e*e+t}function a(e,t,n,r){return n*((e=e/r-1)*e*e*e*e+1)+t}function f(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t}function l(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t}function c(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t}function h(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t}function p(e,t,n,r){return e===0?t:n*Math.pow(2,10*(e/r-1))+t}function d(e,t,n,r){return e===r?t+n:n*(-Math.pow(2,-10*e/r)+1)+t}function v(e,t,n,r){return e===0?t:e===r?t+n:(e/=r/2,e<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t)}function m(e,t,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+t}function g(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t}function y(e,t,n,r){return e/=r/2,e<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}function b(n,r,i,s){var o=1.70158,u=0,a=i;if(n===0)return r;n/=s;if(n===1)return r+i;u||(u=s*.3);var f=e(a,i,u,o);return-t(f,n,s)+r}function w(t,n,r,i){var s=1.70158,o=0,u=r;if(t===0)return n;t/=i;if(t===1)return n+r;o||(o=i*.3);var a=e(u,r,o,s);return a.a*Math.pow(2,-10*t)*Math.sin((t*i-a.s)*2*Math.PI/a.p)+a.c+n}function E(n,r,i,s){var o=1.70158,u=0,a=i;if(n===0)return r;n/=s/2;if(n===2)return r+i;u||(u=s*.3*1.5);var f=e(a,i,u,o);return n<1?-0.5*t(f,n,s)+r:f.a*Math.pow(2,-10*(n-=1))*Math.sin((n*s-f.s)*2*Math.PI/f.p)*.5+f.c+r}function S(e,t,n,r,i){return i===undefined&&(i=1.70158),n*(e/=r)*e*((i+1)*e-i)+t}function x(e,t,n,r,i){return i===undefined&&(i=1.70158),n*((e=e/r-1)*e*((i+1)*e+i)+1)+t}function T(e,t,n,r,i){return i===undefined&&(i=1.70158),e/=r/2,e<1?n/2*e*e*(((i*=1.525)+1)*e-i)+t:n/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t}function N(e,t,n,r){return n-C(r-e,0,n,r)+t}function C(e,t,n,r){return(e/=r)<1/2.75?n*7.5625*e*e+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t}function k(e,t,n,r){return e<r/2?N(e*2,0,n,r)*.5+t:C(e*2-r,0,n,r)*.5+n*.5+t}fabric.util.ease={easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){return n*(e/=r)*e*e+t},easeOutCubic:n,easeInOutCubic:r,easeInQuart:i,easeOutQuart:s,easeInOutQuart:o,easeInQuint:u,easeOutQuint:a,easeInOutQuint:f,easeInSine:l,easeOutSine:c,easeInOutSine:h,easeInExpo:p,easeOutExpo:d,easeInOutExpo:v,easeInCirc:m,easeOutCirc:g,easeInOutCirc:y,easeInElastic:b,easeOutElastic:w,easeInOutElastic:E,easeInBack:S,easeOutBack:x,easeInOutBack:T,easeInBounce:N,easeOutBounce:C,easeInOutBounce:k}}(),function(e){"use strict";function l(e){return e in a?a[e]:e}function c(e,n,r,i){var s=Object.prototype.toString.call(n)==="[object Array]",a;return e!=="fill"&&e!=="stroke"||n!=="none"?e==="strokeDashArray"?n=n.replace(/,/g," ").split(/\s+/).map(function(e){return parseFloat(e)}):e==="transformMatrix"?r&&r.transformMatrix?n=u(r.transformMatrix,t.parseTransformAttribute(n)):n=t.parseTransformAttribute(n):e==="visible"?(n=n==="none"||n==="hidden"?!1:!0,r&&r.visible===!1&&(n=!1)):e==="originX"?n=n==="start"?"left":n==="end"?"right":"center":a=s?n.map(o):o(n,i):n="",!s&&isNaN(a)?n:a}function h(e){for(var n in f){if(!e[n]||typeof e[f[n]]=="undefined")continue;if(e[n].indexOf("url(")===0)continue;var r=new t.Color(e[n]);e[n]=r.setAlpha(s(r.getAlpha()*e[f[n]],2)).toRgba()}return e}function p(e,t){var n,r;e.replace(/;$/,"").split(";").forEach(function(e){var i=e.split(":");n=l(i[0].trim().toLowerCase()),r=c(n,i[1].trim()),t[n]=r})}function d(e,t){var n,r;for(var i in e){if(typeof e[i]=="undefined")continue;n=l(i.toLowerCase()),r=c(n,e[i]),t[n]=r}}function v(e,n){var r={};for(var i in t.cssRules[n])if(m(e,i.split(" ")))for(var s in t.cssRules[n][i])r[s]=t.cssRules[n][i][s];return r}function m(e,t){var n,r=!0;return n=y(e,t.pop()),n&&t.length&&(r=g(e,t)),n&&r&&t.length===0}function g(e,t){var n,r=!0;while(e.parentNode&&e.parentNode.nodeType===1&&t.length)r&&(n=t.pop()),e=e.parentNode,r=y(e,n);return t.length===0}function y(e,t){var n=e.nodeName,r=e.getAttribute("class"),i=e.getAttribute("id"),s;s=new RegExp("^"+n,"i"),t=t.replace(s,""),i&&t.length&&(s=new RegExp("#"+i+"(?![a-zA-Z\\-]+)","i"),t=t.replace(s,""));if(r&&t.length){r=r.split(" ");for(var o=r.length;o--;)s=new RegExp("\\."+r[o]+"(?![a-zA-Z\\-]+)","i"),t=t.replace(s,"")}return t.length===0}function b(e){var t=e.getElementsByTagName("use");while(t.length){var n=t[0],r=n.getAttribute("xlink:href").substr(1),i=n.getAttribute("x")||0,s=n.getAttribute("y")||0,o=e.getElementById(r).cloneNode(!0),u=(o.getAttribute("transform")||"")+" translate("+i+", "+s+")",a;for(var f=0,l=n.attributes,c=l.length;f<c;f++){var h=l.item(f);if(h.nodeName==="x"||h.nodeName==="y"||h.nodeName==="xlink:href")continue;h.nodeName==="transform"?u=h.nodeValue+" "+u:o.setAttribute(h.nodeName,h.nodeValue)}o.setAttribute("transform",u),o.setAttribute("instantiated_by_use","1"),o.removeAttribute("id"),a=n.parentNode,a.replaceChild(o,n)}}function w(e,n,r){var i=new RegExp("^\\s*("+t.reNum+"+)\\s*,?"+"\\s*("+t.reNum+"+)\\s*,?"+"\\s*("+t.reNum+"+)\\s*,?"+"\\s*("+t.reNum+"+)\\s*"+"$"),s=e.getAttribute("viewBox"),o=1,u=1,a=0,f=0,l,c,h,p;if(!s||!(s=s.match(i)))return;a=-parseFloat(s[1]),f=-parseFloat(s[2]),l=parseFloat(s[3]),c=parseFloat(s[4]),n&&n!==l&&(o=n/l),r&&r!==c&&(u=r/c),u=o=o>u?u:o;if(o===1&&u===1&&a===0&&f===0)return;h="matrix("+o+" 0"+" 0 "+u+" "+a*o+" "+f*u+")";if(e.tagName==="svg"){p=e.ownerDocument.createElement("g");while(e.firstChild!=null)p.appendChild(e.firstChild);e.appendChild(p)}else p=e,h+=p.getAttribute("transform");p.setAttribute("transform",h)}function S(e){var n=e.objects,i=e.options;return n=n.map(function(e){return t[r(e.type)].fromObject(e)}),{objects:n,options:i}}function x(e,t,n){t[n]&&t[n].toSVG&&e.push('<pattern x="0" y="0" id="',n,'Pattern" ','width="',t[n].source.width,'" height="',t[n].source.height,'" patternUnits="userSpaceOnUse">','<image x="0" y="0" ','width="',t[n].source.width,'" height="',t[n].source.height,'" xlink:href="',t[n].source.src,'"></image></pattern>')}var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.string.capitalize,i=t.util.object.clone,s=t.util.toFixed,o=t.util.parseUnit,u=t.util.multiplyTransformMatrices,a={cx:"left",x:"left",r:"radius",cy:"top",y:"top",display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","stroke-dasharray":"strokeDashArray","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"originX"},f={stroke:"strokeOpacity",fill:"fillOpacity"};t.cssRules={},t.gradientDefs={},t.parseTransformAttribute=function(){function e(e,t){var n=t[0];e[0]=Math.cos(n),e[1]=Math.sin(n),e[2]=-Math.sin(n),e[3]=Math.cos(n)}function n(e,t){var n=t[0],r=t.length===2?t[1]:t[0];e[0]=n,e[3]=r}function r(e,n){e[2]=Math.tan(t.util.degreesToRadians(n[0]))}function i(e,n){e[1]=Math.tan(t.util.degreesToRadians(n[0]))}function s(e,t){e[4]=t[0],t.length===2&&(e[5]=t[1])}var o=[1,0,0,1,0,0],u=t.reNum,a="(?:\\s+,?\\s*|,\\s*)",f="(?:(skewX)\\s*\\(\\s*("+u+")\\s*\\))",l="(?:(skewY)\\s*\\(\\s*("+u+")\\s*\\))",c="(?:(rotate)\\s*\\(\\s*("+u+")(?:"+a+"("+u+")"+a+"("+u+"))?\\s*\\))",h="(?:(scale)\\s*\\(\\s*("+u+")(?:"+a+"("+u+"))?\\s*\\))",p="(?:(translate)\\s*\\(\\s*("+u+")(?:"+a+"("+u+"))?\\s*\\))",d="(?:(matrix)\\s*\\(\\s*("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+a+"("+u+")"+"\\s*\\))",v="(?:"+d+"|"+p+"|"+h+"|"+c+"|"+f+"|"+l+")",m="(?:"+v+"(?:"+a+v+")*"+")",g="^\\s*(?:"+m+"?)\\s*$",y=new RegExp(g),b=new RegExp(v,"g");return function(u){var a=o.concat(),f=[];if(!u||u&&!y.test(u))return a;u.replace(b,function(u){var l=(new RegExp(v)).exec(u).filter(function(e){return e!==""&&e!=null}),c=l[1],h=l.slice(2).map(parseFloat);switch(c){case"translate":s(a,h);break;case"rotate":h[0]=t.util.degreesToRadians(h[0]),e(a,h);break;case"scale":n(a,h);break;case"skewX":r(a,h);break;case"skewY":i(a,h);break;case"matrix":a=h}f.push(a.concat()),a=o.concat()});var l=f[0];while(f.length>1)f.shift(),l=t.util.multiplyTransformMatrices(l,f[0]);return l}}(),t.parseSVGDocument=function(){function r(e,t){while(e&&(e=e.parentNode))if(t.test(e.nodeName)&&!e.getAttribute("instantiated_by_use"))return!0;return!1}var e=/^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/,n=/^(symbol|image|marker|pattern|view)$/;return function(s,u,a){if(!s)return;b(s);var f=new Date,l=t.Object.__uid++,c=o(s.getAttribute("width")||"100%"),h=o(s.getAttribute("height")||"100%");w(s,c,h);var p=t.util.toArray(s.getElementsByTagName("*"));if(p.length===0&&t.isLikelyNode){p=s.selectNodes('//*[name(.)!="svg"]');var d=[];for(var v=0,m=p.length;v<m;v++)d[v]=p[v];p=d}var g=p.filter(function(t){return n.test(t.tagName)&&w(t,0,0),e.test(t.tagName)&&!r(t,/^(?:pattern|defs|symbol)$/)});if(!g||g&&!g.length){u&&u([],{});return}var y={width:c,height:h,widthAttr:c,heightAttr:h,svgUid:l};t.gradientDefs[l]=t.getGradientDefs(s),t.cssRules[l]=t.getCSSRules(s),t.parseElements(g,function(e){t.documentParsingTime=new Date-f,u&&u(e,y)},i(y),a)}}();var E={has:function(e,t){t(!1)},get:function(){},set:function(){}};n(t,{parseFontDeclaration:function(e,n){var r="(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+t.reNum+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+t.reNum+"))?\\s+(.*)",i=e.match(r);if(!i)return;var s=i[1],u=i[3],a=i[4],f=i[5],l=i[6];s&&(n.fontStyle=s),u&&(n.fontWeight=isNaN(parseFloat(u))?u:parseFloat(u)),a&&(n.fontSize=o(a)),l&&(n.fontFamily=l),f&&(n.lineHeight=f==="normal"?1:f)},getGradientDefs:function(e){var t=e.getElementsByTagName("linearGradient"),n=e.getElementsByTagName("radialGradient"),r,i,s=0,o,u,a=[],f={},l={};a.length=t.length+n.length,i=t.length;while(i--)a[s++]=t[i];i=n.length;while(i--)a[s++]=n[i];while(s--)r=a[s],u=r.getAttribute("xlink:href"),o=r.getAttribute("id"),u&&(l[o]=u.substr(1)),f[o]=r;for(o in l){var c=f[l[o]].cloneNode(!0);r=f[o];while(c.firstChild)r.appendChild(c.firstChild)}return f},parseAttributes:function(e,r,i){if(!e)return;var s,o={},u;typeof i=="undefined"&&(i=e.getAttribute("svgUid")),e.parentNode&&/^symbol|[g|a]$/i.test(e.parentNode.nodeName)&&(o=t.parseAttributes(e.parentNode,r,i)),u=o&&o.fontSize||e.getAttribute("font-size")||t.Text.DEFAULT_SVG_FONT_SIZE
;var a=r.reduce(function(t,n){return s=e.getAttribute(n),s&&(n=l(n),s=c(n,s,o,u),t[n]=s),t},{});return a=n(a,n(v(e,i),t.parseStyleAttribute(e))),a.font&&t.parseFontDeclaration(a.font,a),h(n(o,a))},parseElements:function(e,n,r,i){(new t.ElementsParser(e,n,r,i)).parse()},parseStyleAttribute:function(e){var t={},n=e.getAttribute("style");return n?(typeof n=="string"?p(n,t):d(n,t),t):t},parsePointsAttribute:function(e){if(!e)return null;e=e.replace(/,/g," ").trim(),e=e.split(/\s+/);var t=[],n,r;n=0,r=e.length;for(;n<r;n+=2)t.push({x:parseFloat(e[n]),y:parseFloat(e[n+1])});return t},getCSSRules:function(e){var n=e.getElementsByTagName("style"),r={},i;for(var s=0,o=n.length;s<o;s++){var u=n[s].textContent;u=u.replace(/\/\*[\s\S]*?\*\//g,"");if(u.trim()==="")continue;i=u.match(/[^{]*\{[\s\S]*?\}/g),i=i.map(function(e){return e.trim()}),i.forEach(function(e){var n=e.match(/([\s\S]*?)\s*\{([^}]*)\}/),i={},s=n[2].trim(),o=s.replace(/;$/,"").split(/\s*;\s*/);for(var u=0,a=o.length;u<a;u++){var f=o[u].split(/\s*:\s*/),h=l(f[0]),p=c(h,f[1],f[0]);i[h]=p}e=n[1],e.split(",").forEach(function(e){e=e.replace(/^svg/i,"").trim();if(e==="")return;r[e]=t.util.object.clone(i)})})}return r},loadSVGFromURL:function(e,n,r){function i(i){var s=i.responseXML;s&&!s.documentElement&&t.window.ActiveXObject&&i.responseText&&(s=new ActiveXObject("Microsoft.XMLDOM"),s.async="false",s.loadXML(i.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));if(!s||!s.documentElement)return;t.parseSVGDocument(s.documentElement,function(r,i){E.set(e,{objects:t.util.array.invoke(r,"toObject"),options:i}),n(r,i)},r)}e=e.replace(/^\n\s*/,"").trim(),E.has(e,function(r){r?E.get(e,function(e){var t=S(e);n(t.objects,t.options)}):new t.util.request(e,{method:"get",onComplete:i})})},loadSVGFromString:function(e,n,r){e=e.trim();var i;if(typeof DOMParser!="undefined"){var s=new DOMParser;s&&s.parseFromString&&(i=s.parseFromString(e,"text/xml"))}else t.window.ActiveXObject&&(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(e.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,"")));t.parseSVGDocument(i.documentElement,function(e,t){n(e,t)},r)},createSVGFontFacesMarkup:function(e){var t="";for(var n=0,r=e.length;n<r;n++){if(e[n].type!=="text"||!e[n].path)continue;t+=["@font-face {","font-family: ",e[n].fontFamily,"; ","src: url('",e[n].path,"')","}"].join("")}return t&&(t=['<style type="text/css">',"<![CDATA[",t,"]]>","</style>"].join("")),t},createSVGRefElementsMarkup:function(e){var t=[];return x(t,e,"backgroundColor"),x(t,e,"overlayColor"),t.join("")}})}(typeof exports!="undefined"?exports:this),fabric.ElementsParser=function(e,t,n,r){this.elements=e,this.callback=t,this.options=n,this.reviver=r,this.svgUid=n&&n.svgUid||0},fabric.ElementsParser.prototype.parse=function(){this.instances=new Array(this.elements.length),this.numElements=this.elements.length,this.createObjects()},fabric.ElementsParser.prototype.createObjects=function(){for(var e=0,t=this.elements.length;e<t;e++)this.elements[e].setAttribute("svgUid",this.svgUid),function(e,t){setTimeout(function(){e.createObject(e.elements[t],t)},0)}(this,e)},fabric.ElementsParser.prototype.createObject=function(e,t){var n=fabric[fabric.util.string.capitalize(e.tagName)];if(n&&n.fromElement)try{this._createObject(n,e,t)}catch(r){fabric.log(r)}else this.checkIfDone()},fabric.ElementsParser.prototype._createObject=function(e,t,n){if(e.async)e.fromElement(t,this.createCallback(n,t),this.options);else{var r=e.fromElement(t,this.options);this.resolveGradient(r,"fill"),this.resolveGradient(r,"stroke"),this.reviver&&this.reviver(t,r),this.instances[n]=r,this.checkIfDone()}},fabric.ElementsParser.prototype.createCallback=function(e,t){var n=this;return function(r){n.resolveGradient(r,"fill"),n.resolveGradient(r,"stroke"),n.reviver&&n.reviver(t,r),n.instances[e]=r,n.checkIfDone()}},fabric.ElementsParser.prototype.resolveGradient=function(e,t){var n=e.get(t);if(!/^url\(/.test(n))return;var r=n.slice(5,n.length-1);fabric.gradientDefs[this.svgUid][r]&&e.set(t,fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][r],e))},fabric.ElementsParser.prototype.checkIfDone=function(){--this.numElements===0&&(this.instances=this.instances.filter(function(e){return e!=null}),this.callback(this.instances))},function(e){"use strict";function n(e,t){this.x=e,this.y=t}var t=e.fabric||(e.fabric={});if(t.Point){t.warn("fabric.Point is already defined");return}t.Point=n,n.prototype={constructor:n,add:function(e){return new n(this.x+e.x,this.y+e.y)},addEquals:function(e){return this.x+=e.x,this.y+=e.y,this},scalarAdd:function(e){return new n(this.x+e,this.y+e)},scalarAddEquals:function(e){return this.x+=e,this.y+=e,this},subtract:function(e){return new n(this.x-e.x,this.y-e.y)},subtractEquals:function(e){return this.x-=e.x,this.y-=e.y,this},scalarSubtract:function(e){return new n(this.x-e,this.y-e)},scalarSubtractEquals:function(e){return this.x-=e,this.y-=e,this},multiply:function(e){return new n(this.x*e,this.y*e)},multiplyEquals:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return new n(this.x/e,this.y/e)},divideEquals:function(e){return this.x/=e,this.y/=e,this},eq:function(e){return this.x===e.x&&this.y===e.y},lt:function(e){return this.x<e.x&&this.y<e.y},lte:function(e){return this.x<=e.x&&this.y<=e.y},gt:function(e){return this.x>e.x&&this.y>e.y},gte:function(e){return this.x>=e.x&&this.y>=e.y},lerp:function(e,t){return new n(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t)},distanceFrom:function(e){var t=this.x-e.x,n=this.y-e.y;return Math.sqrt(t*t+n*n)},midPointFrom:function(e){return new n(this.x+(e.x-this.x)/2,this.y+(e.y-this.y)/2)},min:function(e){return new n(Math.min(this.x,e.x),Math.min(this.y,e.y))},max:function(e){return new n(Math.max(this.x,e.x),Math.max(this.y,e.y))},toString:function(){return this.x+","+this.y},setXY:function(e,t){this.x=e,this.y=t},setFromPoint:function(e){this.x=e.x,this.y=e.y},swap:function(e){var t=this.x,n=this.y;this.x=e.x,this.y=e.y,e.x=t,e.y=n}}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function n(e){this.status=e,this.points=[]}var t=e.fabric||(e.fabric={});if(t.Intersection){t.warn("fabric.Intersection is already defined");return}t.Intersection=n,t.Intersection.prototype={appendPoint:function(e){this.points.push(e)},appendPoints:function(e){this.points=this.points.concat(e)}},t.Intersection.intersectLineLine=function(e,r,i,s){var o,u=(s.x-i.x)*(e.y-i.y)-(s.y-i.y)*(e.x-i.x),a=(r.x-e.x)*(e.y-i.y)-(r.y-e.y)*(e.x-i.x),f=(s.y-i.y)*(r.x-e.x)-(s.x-i.x)*(r.y-e.y);if(f!==0){var l=u/f,c=a/f;0<=l&&l<=1&&0<=c&&c<=1?(o=new n("Intersection"),o.points.push(new t.Point(e.x+l*(r.x-e.x),e.y+l*(r.y-e.y)))):o=new n}else u===0||a===0?o=new n("Coincident"):o=new n("Parallel");return o},t.Intersection.intersectLinePolygon=function(e,t,r){var i=new n,s=r.length;for(var o=0;o<s;o++){var u=r[o],a=r[(o+1)%s],f=n.intersectLineLine(e,t,u,a);i.appendPoints(f.points)}return i.points.length>0&&(i.status="Intersection"),i},t.Intersection.intersectPolygonPolygon=function(e,t){var r=new n,i=e.length;for(var s=0;s<i;s++){var o=e[s],u=e[(s+1)%i],a=n.intersectLinePolygon(o,u,t);r.appendPoints(a.points)}return r.points.length>0&&(r.status="Intersection"),r},t.Intersection.intersectPolygonRectangle=function(e,r,i){var s=r.min(i),o=r.max(i),u=new t.Point(o.x,s.y),a=new t.Point(s.x,o.y),f=n.intersectLinePolygon(s,u,e),l=n.intersectLinePolygon(u,o,e),c=n.intersectLinePolygon(o,a,e),h=n.intersectLinePolygon(a,s,e),p=new n;return p.appendPoints(f.points),p.appendPoints(l.points),p.appendPoints(c.points),p.appendPoints(h.points),p.points.length>0&&(p.status="Intersection"),p}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function n(e){e?this._tryParsingColor(e):this.setSource([0,0,0,1])}function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var t=e.fabric||(e.fabric={});if(t.Color){t.warn("fabric.Color is already defined.");return}t.Color=n,t.Color.prototype={_tryParsingColor:function(e){var t;e in n.colorNameMap&&(e=n.colorNameMap[e]);if(e==="transparent"){this.setSource([255,255,255,0]);return}t=n.sourceFromHex(e),t||(t=n.sourceFromRgb(e)),t||(t=n.sourceFromHsl(e)),t&&this.setSource(t)},_rgbToHsl:function(e,n,r){e/=255,n/=255,r/=255;var i,s,o,u=t.util.array.max([e,n,r]),a=t.util.array.min([e,n,r]);o=(u+a)/2;if(u===a)i=s=0;else{var f=u-a;s=o>.5?f/(2-u-a):f/(u+a);switch(u){case e:i=(n-r)/f+(n<r?6:0);break;case n:i=(r-e)/f+2;break;case r:i=(e-n)/f+4}i/=6}return[Math.round(i*360),Math.round(s*100),Math.round(o*100)]},getSource:function(){return this._source},setSource:function(e){this._source=e},toRgb:function(){var e=this.getSource();return"rgb("+e[0]+","+e[1]+","+e[2]+")"},toRgba:function(){var e=this.getSource();return"rgba("+e[0]+","+e[1]+","+e[2]+","+e[3]+")"},toHsl:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsl("+t[0]+","+t[1]+"%,"+t[2]+"%)"},toHsla:function(){var e=this.getSource(),t=this._rgbToHsl(e[0],e[1],e[2]);return"hsla("+t[0]+","+t[1]+"%,"+t[2]+"%,"+e[3]+")"},toHex:function(){var e=this.getSource(),t,n,r;return t=e[0].toString(16),t=t.length===1?"0"+t:t,n=e[1].toString(16),n=n.length===1?"0"+n:n,r=e[2].toString(16),r=r.length===1?"0"+r:r,t.toUpperCase()+n.toUpperCase()+r.toUpperCase()},getAlpha:function(){return this.getSource()[3]},setAlpha:function(e){var t=this.getSource();return t[3]=e,this.setSource(t),this},toGrayscale:function(){var e=this.getSource(),t=parseInt((e[0]*.3+e[1]*.59+e[2]*.11).toFixed(0),10),n=e[3];return this.setSource([t,t,t,n]),this},toBlackWhite:function(e){var t=this.getSource(),n=(t[0]*.3+t[1]*.59+t[2]*.11).toFixed(0),r=t[3];return e=e||127,n=Number(n)<Number(e)?0:255,this.setSource([n,n,n,r]),this},overlayWith:function(e){e instanceof n||(e=new n(e));var t=[],r=this.getAlpha(),i=.5,s=this.getSource(),o=e.getSource();for(var u=0;u<3;u++)t.push(Math.round(s[u]*(1-i)+o[u]*i));return t[3]=r,this.setSource(t),this}},t.Color.reRGBa=/^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHSLa=/^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,t.Color.reHex=/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i,t.Color.colorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"},t.Color.fromRgb=function(e){return n.fromSource(n.sourceFromRgb(e))},t.Color.sourceFromRgb=function(e){var t=e.match(n.reRGBa);if(t){var r=parseInt(t[1],10)/(/%$/.test(t[1])?100:1)*(/%$/.test(t[1])?255:1),i=parseInt(t[2],10)/(/%$/.test(t[2])?100:1)*(/%$/.test(t[2])?255:1),s=parseInt(t[3],10)/(/%$/.test(t[3])?100:1)*(/%$/.test(t[3])?255:1);return[parseInt(r,10),parseInt(i,10),parseInt(s,10),t[4]?parseFloat(t[4]):1]}},t.Color.fromRgba=n.fromRgb,t.Color.fromHsl=function(e){return n.fromSource(n.sourceFromHsl(e))},t.Color.sourceFromHsl=function(e){var t=e.match(n.reHSLa);if(!t)return;var i=(parseFloat(t[1])%360+360)%360/360,s=parseFloat(t[2])/(/%$/.test(t[2])?100:1),o=parseFloat(t[3])/(/%$/.test(t[3])?100:1),u,a,f;if(s===0)u=a=f=o;else{var l=o<=.5?o*(s+1):o+s-o*s,c=o*2-l;u=r(c,l,i+1/3),a=r(c,l,i),f=r(c,l,i-1/3)}return[Math.round(u*255),Math.round(a*255),Math.round(f*255),t[4]?parseFloat(t[4]):1]},t.Color.fromHsla=n.fromHsl,t.Color.fromHex=function(e){return n.fromSource(n.sourceFromHex(e))},t.Color.sourceFromHex=function(e){if(e.match(n.reHex)){var t=e.slice(e.indexOf("#")+1),r=t.length===3,i=r?t.charAt(0)+t.charAt(0):t.substring(0,2),s=r?t.charAt(1)+t.charAt(1):t.substring(2,4),o=r?t.charAt(2)+t.charAt(2):t.substring(4,6);return[parseInt(i,16),parseInt(s,16),parseInt(o,16),1]}},t.Color.fromSource=function(e){var t=new n;return t.setSource(e),t}}(typeof exports!="undefined"?exports:this),function(){function e(e){var t=e.getAttribute("style"),n=e.getAttribute("offset"),r,i,s;n=parseFloat(n)/(/%$/.test(n)?100:1),n=n<0?0:n>1?1:n;if(t){var o=t.split(/\s*;\s*/);o[o.length-1]===""&&o.pop();for(var u=o.length;u--;){var a=o[u].split(/\s*:\s*/),f=a[0].trim(),l=a[1].trim();f==="stop-color"?r=l:f==="stop-opacity"&&(s=l)}}return r||(r=e.getAttribute("stop-color")||"rgb(0,0,0)"),s||(s=e.getAttribute("stop-opacity")),r=new fabric.Color(r),i=r.getAlpha(),s=isNaN(parseFloat(s))?1:parseFloat(s),s*=i,{offset:n,color:r.toRgb(),opacity:s}}function t(e){return{x1:e.getAttribute("x1")||0,y1:e.getAttribute("y1")||0,x2:e.getAttribute("x2")||"100%",y2:e.getAttribute("y2")||0}}function n(e){return{x1:e.getAttribute("fx")||e.getAttribute("cx")||"50%",y1:e.getAttribute("fy")||e.getAttribute("cy")||"50%",r1:0,x2:e.getAttribute("cx")||"50%",y2:e.getAttribute("cy")||"50%",r2:e.getAttribute("r")||"50%"}}function r(e,t,n){var r,i=0,s=1,o="";for(var u in t){r=parseFloat(t[u],10),typeof t[u]=="string"&&/^\d+%$/.test(t[u])?s=.01:s=1;if(u==="x1"||u==="x2"||u==="r2")s*=n==="objectBoundingBox"?e.width:1,i=n==="objectBoundingBox"?e.left||0:0;else if(u==="y1"||u==="y2")s*=n==="objectBoundingBox"?e.height:1,i=n==="objectBoundingBox"?e.top||0:0;t[u]=r*s+i}if(e.type==="ellipse"&&t.r2!==null&&n==="objectBoundingBox"&&e.rx!==e.ry){var a=e.ry/e.rx;o=" scale(1, "+a+")",t.y1&&(t.y1/=a),t.y2&&(t.y2/=a)}return o}fabric.Gradient=fabric.util.createClass({offsetX:0,offsetY:0,initialize:function(e){e||(e={});var t={};this.id=fabric.Object.__uid++,this.type=e.type||"linear",t={x1:e.coords.x1||0,y1:e.coords.y1||0,x2:e.coords.x2||0,y2:e.coords.y2||0},this.type==="radial"&&(t.r1=e.coords.r1||0,t.r2=e.coords.r2||0),this.coords=t,this.colorStops=e.colorStops.slice(),e.gradientTransform&&(this.gradientTransform=e.gradientTransform),this.offsetX=e.offsetX||this.offsetX,this.offsetY=e.offsetY||this.offsetY},addColorStop:function(e){for(var t in e){var n=new fabric.Color(e[t]);this.colorStops.push({offset:t,color:n.toRgb(),opacity:n.getAlpha()})}return this},toObject:function(){return{type:this.type,coords:this.coords,colorStops:this.colorStops,offsetX:this.offsetX,offsetY:this.offsetY}},toSVG:function(e){var t=fabric.util.object.clone(this.coords),n,r;this.colorStops.sort(function(e,t){return e.offset-t.offset});if(!e.group||e.group.type!=="path-group")for(var i in t)if(i==="x1"||i==="x2"||i==="r2")t[i]+=this.offsetX-e.width/2;else if(i==="y1"||i==="y2")t[i]+=this.offsetY-e.height/2;r='id="SVGID_'+this.id+'" gradientUnits="userSpaceOnUse"',this.gradientTransform&&(r+=' gradientTransform="matrix('+this.gradientTransform.join(" ")+')" '),this.type==="linear"?n=["<linearGradient ",r,' x1="',t.x1,'" y1="',t.y1,'" x2="',t.x2,'" y2="',t.y2,'">\n']:this.type==="radial"&&(n=["<radialGradient ",r,' cx="',t.x2,'" cy="',t.y2,'" r="',t.r2,'" fx="',t.x1,'" fy="',t.y1,'">\n']);for(var s=0;s<this.colorStops.length;s++)n.push("<stop ",'offset="',this.colorStops[s].offset*100+"%",'" style="stop-color:',this.colorStops[s].color,this.colorStops[s].opacity!=null?";stop-opacity: "+this.colorStops[s].opacity:";",'"/>\n');return n.push(this.type==="linear"?"</linearGradient>\n":"</radialGradient>\n"),n.join("")},toLive:function(e,t){var n,r=fabric.util.object.clone(this.coords);if(!this.type)return;if(t.group&&t.group.type==="path-group")for(var i in r)if(i==="x1"||i==="x2")r[i]+=-this.offsetX+t.width/2;else if(i==="y1"||i==="y2")r[i]+=-this.offsetY+t.height/2;this.type==="linear"?n=e.createLinearGradient(r.x1,r.y1,r.x2,r.y2):this.type==="radial"&&(n=e.createRadialGradient(r.x1,r.y1,r.r1,r.x2,r.y2,r.r2));for(var s=0,o=this.colorStops.length;s<o;s++){var u=this.colorStops[s].color,a=this.colorStops[s].opacity,f=this.colorStops[s].offset;typeof a!="undefined"&&(u=(new fabric.Color(u)).setAlpha(a).toRgba()),n.addColorStop(parseFloat(f),u)}return n}}),fabric.util.object.extend(fabric.Gradient,{fromElement:function(i,s){var o=i.getElementsByTagName("stop"),u=i.nodeName==="linearGradient"?"linear":"radial",a=i.getAttribute("gradientUnits")||"objectBoundingBox",f=i.getAttribute("gradientTransform"),l=[],c={},h;u==="linear"?c=t(i):u==="radial"&&(c=n(i));for(var p=o.length;p--;)l.push(e(o[p]));h=r(s,c,a);var d=new fabric.Gradient({type:u,coords:c,colorStops:l,offsetX:-s.left,offsetY:-s.top});if(f||h!=="")d.gradientTransform=fabric.parseTransformAttribute((f||"")+h);return d},forObject:function(e,t){return t||(t={}),r(e,t.coords,"userSpaceOnUse"),new fabric.Gradient(t)}})}(),fabric.Pattern=fabric.util.createClass({repeat:"repeat",offsetX:0,offsetY:0,initialize:function(e){e||(e={}),this.id=fabric.Object.__uid++;if(e.source)if(typeof e.source=="string")if(typeof fabric.util.getFunctionBody(e.source)!="undefined")this.source=new Function(fabric.util.getFunctionBody(e.source));else{var t=this;this.source=fabric.util.createImage(),fabric.util.loadImage(e.source,function(e){t.source=e})}else this.source=e.source;e.repeat&&(this.repeat=e.repeat),e.offsetX&&(this.offsetX=e.offsetX),e.offsetY&&(this.offsetY=e.offsetY)},toObject:function(){var e;return typeof this.source=="function"?e=String(this.source):typeof this.source.src=="string"&&(e=this.source.src),{source:e,repeat:this.repeat,offsetX:this.offsetX,offsetY:this.offsetY}},toSVG:function(e){var t=typeof this.source=="function"?this.source():this.source,n=t.width/e.getWidth(),r=t.height/e.getHeight(),i=this.offsetX/e.getWidth(),s=this.offsetY/e.getHeight(),o="";if(this.repeat==="repeat-x"||this.repeat==="no-repeat")r=1;if(this.repeat==="repeat-y"||this.repeat==="no-repeat")n=1;return t.src?o=t.src:t.toDataURL&&(o=t.toDataURL()),'<pattern id="SVGID_'+this.id+'" x="'+i+'" y="'+s+'" width="'+n+'" height="'+r+'">\n'+'<image x="0" y="0"'+' width="'+t.width+'" height="'+t.height+'" xlink:href="'+o+'"></image>\n'+"</pattern>\n"},toLive:function(e){var t=typeof this.source=="function"?this.source():this.source;if(!t)return"";if(typeof t.src!="undefined"){if(!t.complete)return"";if(t.naturalWidth===0||t.naturalHeight===0)return""}return e.createPattern(t,this.repeat)}}),function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Shadow){t.warn("fabric.Shadow is already defined.");return}t.Shadow=t.util.createClass({color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,initialize:function(e){typeof e=="string"&&(e=this._parseShadow(e));for(var n in e)this[n]=e[n];this.id=t.Object.__uid++},_parseShadow:function(e){var n=e.trim(),r=t.Shadow.reOffsetsAndBlur.exec(n)||[],i=n.replace(t.Shadow.reOffsetsAndBlur,"")||"rgb(0,0,0)";return{color:i.trim(),offsetX:parseInt(r[1],10)||0,offsetY:parseInt(r[2],10)||0,blur:parseInt(r[3],10)||0}},toString:function(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")},toSVG:function(e){var t="SourceAlpha",n=40,r=40;return e&&(e.fill===this.color||e.stroke===this.color)&&(t="SourceGraphic"),e.width&&e.height&&(n=Math.abs(this.offsetX/e.getWidth())*100+20,r=Math.abs(this.offsetY/e.getHeight())*100+20),'<filter id="SVGID_'+this.id+'" y="-'+r+'%" height="'+(100+2*r)+'%" '+'x="-'+n+'%" width="'+(100+2*n)+'%" '+">\n"+'	<feGaussianBlur in="'+t+'" stdDeviation="'+(this.blur?this.blur/3:0)+'"></feGaussianBlur>\n'+'	<feOffset dx="'+this.offsetX+'" dy="'+this.offsetY+'"></feOffset>\n'+"	<feMerge>\n"+"		<feMergeNode></feMergeNode>\n"+'		<feMergeNode in="SourceGraphic"></feMergeNode>\n'+"	</feMerge>\n"+"</filter>\n"},toObject:function(){if(this.includeDefaultValues)return{color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY};var e={},n=t.Shadow.prototype;return this.color!==n.color&&(e.color=this.color),this.blur!==n.blur&&(e.blur=this.blur),this.offsetX!==n.offsetX&&(e.offsetX=this.offsetX),this.offsetY!==n.offsetY&&(e.offsetY=this.offsetY),e}}),t.Shadow.reOffsetsAndBlur=/(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/}(typeof exports!="undefined"?exports:this),function(){"use strict";if(fabric.StaticCanvas){fabric.warn("fabric.StaticCanvas is already defined.");return}var e=fabric.util.object.extend,t=fabric.util.getElementOffset,n=fabric.util.removeFromArray,r=new Error("Could not initialize `canvas` element");fabric.StaticCanvas=fabric.util.createClass({initialize:function(e,t){t||(t={}),this._initStatic(e,t),fabric.StaticCanvas.activeInstance=this},backgroundColor:"",backgroundImage:null,overlayColor:"",overlayImage:null,includeDefaultValues:!0,stateful:!0,renderOnAddRemove:!0,clipTo:null,controlsAboveOverlay:!1,allowTouchScrolling:!1,imageSmoothingEnabled:!0,preserveObjectStacking:!1,viewportTransform:[1,0,0,1,0,0],onBeforeScaleRotate:function(){},_initStatic:function(e,t){this._objects=[],this._createLowerCanvas(e),this._initOptions(t),this._setImageSmoothing(),t.overlayImage&&this.setOverlayImage(t.overlayImage,this.renderAll.bind(this)),t.backgroundImage&&this.setBackgroundImage(t.backgroundImage,this.renderAll.bind(this)),t.backgroundColor&&this.setBackgroundColor(t.backgroundColor,this.renderAll.bind(this)),t.overlayColor&&this.setOverlayColor(t.overlayColor,this.renderAll.bind(this)),this.calcOffset()},calcOffset:function(){return this._offset=t(this.lowerCanvasEl),this},setOverlayImage:function(e,t,n){return this.__setBgOverlayImage("overlayImage",e,t,n)},setBackgroundImage:function(e,t,n){return this.__setBgOverlayImage("backgroundImage",e,t,n)},setOverlayColor:function(e,t){return this.__setBgOverlayColor("overlayColor",e,t)},setBackgroundColor:function(e,t){return this.__setBgOverlayColor("backgroundColor",e,t)},_setImageSmoothing:function(){var e=this.getContext();e.imageSmoothingEnabled=this.imageSmoothingEnabled,e.webkitImageSmoothingEnabled=this.imageSmoothingEnabled,e.mozImageSmoothingEnabled=this.imageSmoothingEnabled,e.msImageSmoothingEnabled=this.imageSmoothingEnabled,e.oImageSmoothingEnabled=this.imageSmoothingEnabled},__setBgOverlayImage:function(e,t,n,r){return typeof t=="string"?fabric.util.loadImage(t,function(t){this[e]=new fabric.Image(t,r),n&&n()},this,r&&r.crossOrigin):(this[e]=t,n&&n()),this},__setBgOverlayColor:function(e,t,n){if(t&&t.source){var r=this;fabric.util.loadImage(t.source,function(i){r[e]=new fabric.Pattern({source:i,repeat:t.repeat,offsetX:t.offsetX,offsetY:t.offsetY}),n&&n()})}else this[e]=t,n&&n();return this},_createCanvasElement:function(){var e=fabric.document.createElement("canvas");e.style||(e.style={});if(!e)throw r;return this._initCanvasElement(e),e},_initCanvasElement:function(e){fabric.util.createCanvasElement(e);if(typeof e.getContext=="undefined")throw r},_initOptions:function(e){for(var t in e)this[t]=e[t];this.width=this.width||parseInt(this.lowerCanvasEl.width,10)||0,this.height=this.height||parseInt(this.lowerCanvasEl.height,10)||0;if(!this.lowerCanvasEl.style)return;this.lowerCanvasEl.width=this.width,this.lowerCanvasEl.height=this.height,this.lowerCanvasEl.style.width=this.width+"px",this.lowerCanvasEl.style.height=this.height+"px",this.viewportTransform=this.viewportTransform.slice()},_createLowerCanvas:function(e){this.lowerCanvasEl=fabric.util.getById(e)||this._createCanvasElement(),this._initCanvasElement(this.lowerCanvasEl),fabric.util.addClass(this.lowerCanvasEl,"lower-canvas"),this.interactive&&this._applyCanvasStyle(this.lowerCanvasEl),this.contextContainer=this.lowerCanvasEl.getContext("2d")},getWidth:function(){return this.width},getHeight:function(){return this.height},setWidth:function(e,t){return this.setDimensions({width:e},t)},setHeight:function(e,t){return this.setDimensions({height:e},t)},setDimensions:function(e,t){var n;t=t||{};for(var r in e)n=e[r],t.cssOnly||(this._setBackstoreDimension(r,e[r]),n+="px"),t.backstoreOnly||this._setCssDimension(r,n);return t.cssOnly||this.renderAll(),this.calcOffset(),this},_setBackstoreDimension:function(e,t){return this.lowerCanvasEl[e]=t,this.upperCanvasEl&&(this.upperCanvasEl[e]=t),this.cacheCanvasEl&&(this.cacheCanvasEl[e]=t),this[e]=t,this},_setCssDimension:function(e,t){return this.lowerCanvasEl.style[e]=t,this.upperCanvasEl&&(this.upperCanvasEl.style[e]=t),this.wrapperEl&&(this.wrapperEl.style[e]=t),this},getZoom:function(){return Math.sqrt(this.viewportTransform[0]*this.viewportTransform[3])},setViewportTransform:function(e){this.viewportTransform=e,this.renderAll();for(var t=0,n=this._objects.length;t<n;t++)this._objects[t].setCoords();return this},zoomToPoint:function(e,t){var n=e;e=fabric.util.transformPoint(e,fabric.util.invertTransform(this.viewportTransform)),this.viewportTransform[0]=t,this.viewportTransform[3]=t;var r=fabric.util.transformPoint(e,this.viewportTransform);this.viewportTransform[4]+=n.x-r.x,this.viewportTransform[5]+=n.y-r.y,this.renderAll();for(var i=0,s=this._objects.length;i<s;i++)this._objects[i].setCoords();return this},setZoom:function(e){return this.zoomToPoint(new fabric.Point(0,0),e),this},absolutePan:function(e){this.viewportTransform[4]=-e.x,this.viewportTransform[5]=-e.y,this.renderAll();for(var t=0,n=this._objects.length;t<n;t++)this._objects[t].setCoords();return this},relativePan:function(e){return this.absolutePan(new fabric.Point(-e.x-this.viewportTransform[4],-e.y-this.viewportTransform[5]))},getElement:function(){return this.lowerCanvasEl},getActiveObject:function(){return null},getActiveGroup:function(){return null},_draw:function(e,t){if(!t)return;e.save();var n=this.viewportTransform;e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._shouldRenderObject(t)&&t.render(e),e.restore(),this.controlsAboveOverlay||t._renderControls(e)},_shouldRenderObject:function(e){return e?e!==this.getActiveGroup()||!this.preserveObjectStacking:!1},_onObjectAdded:function(e){this.stateful&&e.setupState(),e.canvas=this,e.setCoords(),this.fire("object:added",{target:e}),e.fire("added")},_onObjectRemoved:function(e){this.getActiveObject()===e&&(this.fire("before:selection:cleared",{target:e}),this._discardActiveObject(),this.fire("selection:cleared")),this.fire("object:removed",{target:e}),e.fire("removed")},clearContext:function(e){return e.clearRect(0,0,this.width,this.height),this},getContext:function(){return this.contextContainer},clear:function(){return this._objects.length=0,this.discardActiveGroup&&this.discardActiveGroup(),this.discardActiveObject&&this.discardActiveObject(),this.clearContext(this.contextContainer),this.contextTop&&this.clearContext(this.contextTop),this.fire("canvas:cleared"),this.renderAll(),this},renderAll:function(e){var t=this[e===!0&&this.interactive?"contextTop":"contextContainer"],n=this.getActiveGroup();return this.contextTop&&this.selection&&!this._groupSelector&&this.clearContext(this.contextTop),e||this.clearContext(t),this.fire("before:render"),this.clipTo&&fabric.util.clipContext(this,t),this._renderBackground(t),this._renderObjects(t,n),this._renderActiveGroup(t,n),this.clipTo&&t.restore(),this._renderOverlay(t),this.controlsAboveOverlay&&this.interactive&&this.drawControls(t),this.fire("after:render"),this},_renderObjects:function(e,t){var n,r;if(!t||this.preserveObjectStacking)for(n=0,r=this._objects.length;n<r;++n)this._draw(e,this._objects[n]);else for(n=0,r=this._objects.length;n<r;++n)this._objects[n]&&!t.contains(this._objects[n])&&this._draw(e,this._objects[n])},_renderActiveGroup:function(e,t){if(t){var n=[];this.forEachObject(function(e){t.contains(e)&&n.push(e)}),t._set("objects",n),this._draw(e,t)}},_renderBackground:function(e){this.backgroundColor&&(e.fillStyle=this.backgroundColor.toLive?this.backgroundColor.toLive(e):this.backgroundColor,e.fillRect(this.backgroundColor.offsetX||0,this.backgroundColor.offsetY||0,this.width,this.height)),this.backgroundImage&&this._draw(e,this.backgroundImage)},_renderOverlay:function(e){this.overlayColor&&(e.fillStyle=this.overlayColor.toLive?this.overlayColor.toLive(e):this.overlayColor,e.fillRect(this.overlayColor.offsetX||0,this.overlayColor.offsetY||0,this.width,this.height)),this.overlayImage&&this._draw(e,this.overlayImage)},renderTop:function(){var e=this.contextTop||this.contextContainer;this.clearContext(e),this.selection&&this._groupSelector&&this._drawSelection();var t=this.getActiveGroup();return t&&t.render(e),this._renderOverlay(e),this.fire("after:render"),this},getCenter:function(){return{top:this.getHeight()/2,left:this.getWidth()/2}},centerObjectH:function(e){return this._centerObject(e,new fabric.Point(this.getCenter().left,e.getCenterPoint().y)),this.renderAll(),this},centerObjectV:function(e){return this._centerObject(e,new fabric.Point(e.getCenterPoint().x,this.getCenter().top)),this.renderAll(),this},centerObject:function(e){var t=this.getCenter();return this._centerObject(e,new fabric.Point(t.left,t.top)),this.renderAll(),this},_centerObject:function(e,t){return e.setPositionByOrigin(t,"center","center"),this},toDatalessJSON:function(e){return this.toDatalessObject(e)},toObject:function(e){return this._toObjectMethod("toObject",e)},toDatalessObject:function(e){return this._toObjectMethod("toDatalessObject",e)},_toObjectMethod:function(t,n){var r=this.getActiveGroup();r&&this.discardActiveGroup();var i={objects:this._toObjects(t,n)};return e(i,this.__serializeBgOverlay()),fabric.util.populateWithProperties(this,i,n),r&&(this.setActiveGroup(new fabric.Group(r.getObjects(),{originX:"center",originY:"center"})),r.forEachObject(function(e){e.set("active",!0)}),this._currentTransform&&(this._currentTransform.target=this.getActiveGroup())),i},_toObjects:function(e,t){return this.getObjects().map(function(n){return this._toObject(n,e,t)},this)},_toObject:function(e,t,n){var r;this.includeDefaultValues||(r=e.includeDefaultValues,e.includeDefaultValues=!1);var i=e[t](n);return this.includeDefaultValues||(e.includeDefaultValues=r),i},__serializeBgOverlay:function(){var e={background:this.backgroundColor&&this.backgroundColor.toObject?this.backgroundColor.toObject():this.backgroundColor};return this.overlayColor&&(e.overlay=this.overlayColor.toObject?this.overlayColor.toObject():this.overlayColor),this.backgroundImage&&(e.backgroundImage=this.backgroundImage.toObject()),this.overlayImage&&(e.overlayImage=this.overlayImage.toObject()),e},svgViewportTransformation:!0,toSVG:function(e,t){e||(e={});var n=[];return this._setSVGPreamble(n,e),this._setSVGHeader(n,e),this._setSVGBgOverlayColor(n,"backgroundColor"),this._setSVGBgOverlayImage(n,"backgroundImage"),this._setSVGObjects(n,t),this._setSVGBgOverlayColor(n,"overlayColor"),this._setSVGBgOverlayImage(n,"overlayImage"),n.push("</svg>"),n.join("")},_setSVGPreamble:function(e,t){t.suppressPreamble||e.push('<?xml version="1.0" encoding="',t.encoding||"UTF-8",'" standalone="no" ?>','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')},_setSVGHeader:function(e,t){var n,r,i;t.viewBox?(n=t.viewBox.width,r=t.viewBox.height):(n=this.width,r=this.height,this.svgViewportTransformation||(i=this.viewportTransform,n/=i[0],r/=i[3])),e.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',r,'" ',this.backgroundColor&&!this.backgroundColor.toLive?'style="background-color: '+this.backgroundColor+'" ':null,t.viewBox?'viewBox="'+t.viewBox.x+" "+t.viewBox.y+" "+t.viewBox.width+" "+t.viewBox.height+'" ':null,'xml:space="preserve">',"<desc>Created with Fabric.js ",fabric.version,"</desc>","<defs>",fabric.createSVGFontFacesMarkup(this.getObjects()),fabric.createSVGRefElementsMarkup(this),"</defs>")},_setSVGObjects:function(e,t){var n=this.getActiveGroup();n&&this.discardActiveGroup();for(var r=0,i=this.getObjects(),s=i.length;r<s;r++)e.push(i[r].toSVG(t));n&&(this.setActiveGroup(new fabric.Group(n.getObjects())),n.forEachObject(function(e){e.set("active",!0)}))},_setSVGBgOverlayImage:function(e,t){this[t]&&this[t].toSVG&&e.push(this[t].toSVG())},_setSVGBgOverlayColor:function(e,t){this[t]&&this[t].source?e.push('<rect x="',this[t].offsetX,'" y="',this[t].offsetY,'" ','width="',this[t].repeat==="repeat-y"||this[t].repeat==="no-repeat"?this[t].source.width:this.width,'" height="',this[t].repeat==="repeat-x"||this[t].repeat==="no-repeat"?this[t].source.height:this.height,'" fill="url(#'+t+'Pattern)"',"></rect>"):this[t]&&t==="overlayColor"&&e.push('<rect x="0" y="0" ','width="',this.width,'" height="',this.height,'" fill="',this[t],'"',"></rect>")},sendToBack:function(e){return n(this._objects,e),this._objects.unshift(e),this.renderAll&&this.renderAll()},bringToFront:function(e){return n(this._objects,e),this._objects.push(e),this.renderAll&&this.renderAll()},sendBackwards:function(e,t){var r=this._objects.indexOf(e);if(r!==0){var i=this._findNewLowerIndex(e,r,t);n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},_findNewLowerIndex:function(e,t,n){var r;if(n){r=t;for(var i=t-1;i>=0;--i){var s=e.intersectsWithObject(this._objects[i])||e.isContainedWithinObject(this._objects
[i])||this._objects[i].isContainedWithinObject(e);if(s){r=i;break}}}else r=t-1;return r},bringForward:function(e,t){var r=this._objects.indexOf(e);if(r!==this._objects.length-1){var i=this._findNewUpperIndex(e,r,t);n(this._objects,e),this._objects.splice(i,0,e),this.renderAll&&this.renderAll()}return this},_findNewUpperIndex:function(e,t,n){var r;if(n){r=t;for(var i=t+1;i<this._objects.length;++i){var s=e.intersectsWithObject(this._objects[i])||e.isContainedWithinObject(this._objects[i])||this._objects[i].isContainedWithinObject(e);if(s){r=i;break}}}else r=t+1;return r},moveTo:function(e,t){return n(this._objects,e),this._objects.splice(t,0,e),this.renderAll&&this.renderAll()},dispose:function(){return this.clear(),this.interactive&&this.removeListeners(),this},toString:function(){return"#<fabric.Canvas ("+this.complexity()+"): "+"{ objects: "+this.getObjects().length+" }>"}}),e(fabric.StaticCanvas.prototype,fabric.Observable),e(fabric.StaticCanvas.prototype,fabric.Collection),e(fabric.StaticCanvas.prototype,fabric.DataURLExporter),e(fabric.StaticCanvas,{EMPTY_JSON:'{"objects": [], "background": "white"}',supports:function(e){var t=fabric.util.createCanvasElement();if(!t||!t.getContext)return null;var n=t.getContext("2d");if(!n)return null;switch(e){case"getImageData":return typeof n.getImageData!="undefined";case"setLineDash":return typeof n.setLineDash!="undefined";case"toDataURL":return typeof t.toDataURL!="undefined";case"toDataURLWithQuality":try{return t.toDataURL("image/jpeg",0),!0}catch(r){}return!1;default:return null}}}),fabric.StaticCanvas.prototype.toJSON=fabric.StaticCanvas.prototype.toObject}(),fabric.BaseBrush=fabric.util.createClass({color:"rgb(0, 0, 0)",width:1,shadow:null,strokeLineCap:"round",strokeLineJoin:"round",setShadow:function(e){return this.shadow=new fabric.Shadow(e),this},_setBrushStyles:function(){var e=this.canvas.contextTop;e.strokeStyle=this.color,e.lineWidth=this.width,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin},_setShadow:function(){if(!this.shadow)return;var e=this.canvas.contextTop;e.shadowColor=this.shadow.color,e.shadowBlur=this.shadow.blur,e.shadowOffsetX=this.shadow.offsetX,e.shadowOffsetY=this.shadow.offsetY},_resetShadow:function(){var e=this.canvas.contextTop;e.shadowColor="",e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0}}),function(){fabric.PencilBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(e){this.canvas=e,this._points=[]},onMouseDown:function(e){this._prepareForDrawing(e),this._captureDrawingPath(e),this._render()},onMouseMove:function(e){this._captureDrawingPath(e),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(e){var t=new fabric.Point(e.x,e.y);this._reset(),this._addPoint(t),this.canvas.contextTop.moveTo(t.x,t.y)},_addPoint:function(e){this._points.push(e)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},_captureDrawingPath:function(e){var t=new fabric.Point(e.x,e.y);this._addPoint(t)},_render:function(){var e=this.canvas.contextTop,t=this.canvas.viewportTransform,n=this._points[0],r=this._points[1];e.save(),e.transform(t[0],t[1],t[2],t[3],t[4],t[5]),e.beginPath(),this._points.length===2&&n.x===r.x&&n.y===r.y&&(n.x-=.5,r.x+=.5),e.moveTo(n.x,n.y);for(var i=1,s=this._points.length;i<s;i++){var o=n.midPointFrom(r);e.quadraticCurveTo(n.x,n.y,o.x,o.y),n=this._points[i],r=this._points[i+1]}e.lineTo(n.x,n.y),e.stroke(),e.restore()},convertPointsToSVGPath:function(e){var t=[],n=new fabric.Point(e[0].x,e[0].y),r=new fabric.Point(e[1].x,e[1].y);t.push("M ",e[0].x," ",e[0].y," ");for(var i=1,s=e.length;i<s;i++){var o=n.midPointFrom(r);t.push("Q ",n.x," ",n.y," ",o.x," ",o.y," "),n=new fabric.Point(e[i].x,e[i].y),i+1<e.length&&(r=new fabric.Point(e[i+1].x,e[i+1].y))}return t.push("L ",n.x," ",n.y," "),t},createPath:function(e){var t=new fabric.Path(e,{fill:null,stroke:this.color,strokeWidth:this.width,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,originX:"center",originY:"center"});return this.shadow&&(this.shadow.affectStroke=!0,t.setShadow(this.shadow)),t},_finalizeAndAddPath:function(){var e=this.canvas.contextTop;e.closePath();var t=this.convertPointsToSVGPath(this._points).join("");if(t==="M 0 0 Q 0 0 0 0 L 0 0"){this.canvas.renderAll();return}var n=this.createPath(t);this.canvas.add(n),n.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:n})}})}(),fabric.CircleBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,initialize:function(e){this.canvas=e,this.points=[]},drawDot:function(e){var t=this.addPoint(e),n=this.canvas.contextTop,r=this.canvas.viewportTransform;n.save(),n.transform(r[0],r[1],r[2],r[3],r[4],r[5]),n.fillStyle=t.fill,n.beginPath(),n.arc(t.x,t.y,t.radius,0,Math.PI*2,!1),n.closePath(),n.fill(),n.restore()},onMouseDown:function(e){this.points.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.drawDot(e)},onMouseMove:function(e){this.drawDot(e)},onMouseUp:function(){var e=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var t=[];for(var n=0,r=this.points.length;n<r;n++){var i=this.points[n],s=new fabric.Circle({radius:i.radius,left:i.x,top:i.y,originX:"center",originY:"center",fill:i.fill});this.shadow&&s.setShadow(this.shadow),t.push(s)}var o=new fabric.Group(t,{originX:"center",originY:"center"});o.canvas=this.canvas,this.canvas.add(o),this.canvas.fire("path:created",{path:o}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=e,this.canvas.renderAll()},addPoint:function(e){var t=new fabric.Point(e.x,e.y),n=fabric.util.getRandomInt(Math.max(0,this.width-20),this.width+20)/2,r=(new fabric.Color(this.color)).setAlpha(fabric.util.getRandomInt(0,100)/100).toRgba();return t.radius=n,t.fill=r,this.points.push(t),t}}),fabric.SprayBrush=fabric.util.createClass(fabric.BaseBrush,{width:10,density:20,dotWidth:1,dotWidthVariance:1,randomOpacity:!1,optimizeOverlapping:!0,initialize:function(e){this.canvas=e,this.sprayChunks=[]},onMouseDown:function(e){this.sprayChunks.length=0,this.canvas.clearContext(this.canvas.contextTop),this._setShadow(),this.addSprayChunk(e),this.render()},onMouseMove:function(e){this.addSprayChunk(e),this.render()},onMouseUp:function(){var e=this.canvas.renderOnAddRemove;this.canvas.renderOnAddRemove=!1;var t=[];for(var n=0,r=this.sprayChunks.length;n<r;n++){var i=this.sprayChunks[n];for(var s=0,o=i.length;s<o;s++){var u=new fabric.Rect({width:i[s].width,height:i[s].width,left:i[s].x+1,top:i[s].y+1,originX:"center",originY:"center",fill:this.color});this.shadow&&u.setShadow(this.shadow),t.push(u)}}this.optimizeOverlapping&&(t=this._getOptimizedRects(t));var a=new fabric.Group(t,{originX:"center",originY:"center"});a.canvas=this.canvas,this.canvas.add(a),this.canvas.fire("path:created",{path:a}),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderOnAddRemove=e,this.canvas.renderAll()},_getOptimizedRects:function(e){var t={},n;for(var r=0,i=e.length;r<i;r++)n=e[r].left+""+e[r].top,t[n]||(t[n]=e[r]);var s=[];for(n in t)s.push(t[n]);return s},render:function(){var e=this.canvas.contextTop;e.fillStyle=this.color;var t=this.canvas.viewportTransform;e.save(),e.transform(t[0],t[1],t[2],t[3],t[4],t[5]);for(var n=0,r=this.sprayChunkPoints.length;n<r;n++){var i=this.sprayChunkPoints[n];typeof i.opacity!="undefined"&&(e.globalAlpha=i.opacity),e.fillRect(i.x,i.y,i.width,i.width)}e.restore()},addSprayChunk:function(e){this.sprayChunkPoints=[];var t,n,r,i=this.width/2;for(var s=0;s<this.density;s++){t=fabric.util.getRandomInt(e.x-i,e.x+i),n=fabric.util.getRandomInt(e.y-i,e.y+i),this.dotWidthVariance?r=fabric.util.getRandomInt(Math.max(1,this.dotWidth-this.dotWidthVariance),this.dotWidth+this.dotWidthVariance):r=this.dotWidth;var o=new fabric.Point(t,n);o.width=r,this.randomOpacity&&(o.opacity=fabric.util.getRandomInt(0,100)/100),this.sprayChunkPoints.push(o)}this.sprayChunks.push(this.sprayChunkPoints)}}),fabric.PatternBrush=fabric.util.createClass(fabric.PencilBrush,{getPatternSrc:function(){var e=20,t=5,n=fabric.document.createElement("canvas"),r=n.getContext("2d");return n.width=n.height=e+t,r.fillStyle=this.color,r.beginPath(),r.arc(e/2,e/2,e/2,0,Math.PI*2,!1),r.closePath(),r.fill(),n},getPatternSrcFunction:function(){return String(this.getPatternSrc).replace("this.color",'"'+this.color+'"')},getPattern:function(){return this.canvas.contextTop.createPattern(this.source||this.getPatternSrc(),"repeat")},_setBrushStyles:function(){this.callSuper("_setBrushStyles"),this.canvas.contextTop.strokeStyle=this.getPattern()},createPath:function(e){var t=this.callSuper("createPath",e);return t.stroke=new fabric.Pattern({source:this.source||this.getPatternSrcFunction()}),t}}),function(){var e=fabric.util.getPointer,t=fabric.util.degreesToRadians,n=fabric.util.radiansToDegrees,r=Math.atan2,i=Math.abs,s=.5;fabric.Canvas=fabric.util.createClass(fabric.StaticCanvas,{initialize:function(e,t){t||(t={}),this._initStatic(e,t),this._initInteractive(),this._createCacheCanvas(),fabric.Canvas.activeInstance=this},uniScaleTransform:!1,centeredScaling:!1,centeredRotation:!1,interactive:!0,selection:!0,selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",rotationCursor:"crosshair",containerClass:"canvas-container",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,_initInteractive:function(){this._currentTransform=null,this._groupSelector=null,this._initWrapperElement(),this._createUpperCanvas(),this._initEventListeners(),this.freeDrawingBrush=fabric.PencilBrush&&new fabric.PencilBrush(this),this.calcOffset()},_resetCurrentTransform:function(e){var t=this._currentTransform;t.target.set({scaleX:t.original.scaleX,scaleY:t.original.scaleY,left:t.original.left,top:t.original.top}),this._shouldCenterTransform(e,t.target)?t.action==="rotate"?this._setOriginToCenter(t.target):(t.originX!=="center"&&(t.originX==="right"?t.mouseXSign=-1:t.mouseXSign=1),t.originY!=="center"&&(t.originY==="bottom"?t.mouseYSign=-1:t.mouseYSign=1),t.originX="center",t.originY="center"):(t.originX=t.original.originX,t.originY=t.original.originY)},containsPoint:function(e,t){var n=this.getPointer(e,!0),r=this._normalizePointer(t,n);return t.containsPoint(r)||t._findTargetCorner(n)},_normalizePointer:function(e,t){var n=this.getActiveGroup(),r=t.x,i=t.y,s=n&&e.type!=="group"&&n.contains(e),o;return s&&(o=new fabric.Point(n.left,n.top),o=fabric.util.transformPoint(o,this.viewportTransform,!0),r-=o.x,i-=o.y),{x:r,y:i}},isTargetTransparent:function(e,t,n){var r=e.hasBorders,i=e.transparentCorners;e.hasBorders=e.transparentCorners=!1,this._draw(this.contextCache,e),e.hasBorders=r,e.transparentCorners=i;var s=fabric.util.isTransparent(this.contextCache,t,n,this.targetFindTolerance);return this.clearContext(this.contextCache),s},_shouldClearSelection:function(e,t){var n=this.getActiveGroup(),r=this.getActiveObject();return!t||t&&n&&!n.contains(t)&&n!==t&&!e.shiftKey||t&&!t.evented||t&&!t.selectable&&r&&r!==t},_shouldCenterTransform:function(e,t){if(!t)return;var n=this._currentTransform,r;return n.action==="scale"||n.action==="scaleX"||n.action==="scaleY"?r=this.centeredScaling||t.centeredScaling:n.action==="rotate"&&(r=this.centeredRotation||t.centeredRotation),r?!e.altKey:e.altKey},_getOriginFromCorner:function(e,t){var n={x:e.originX,y:e.originY};if(t==="ml"||t==="tl"||t==="bl")n.x="right";else if(t==="mr"||t==="tr"||t==="br")n.x="left";if(t==="tl"||t==="mt"||t==="tr")n.y="bottom";else if(t==="bl"||t==="mb"||t==="br")n.y="top";return n},_getActionFromCorner:function(e,t){var n="drag";return t&&(n=t==="ml"||t==="mr"?"scaleX":t==="mt"||t==="mb"?"scaleY":t==="mtr"?"rotate":"scale"),n},_setupCurrentTransform:function(e,n){if(!n)return;var r=this.getPointer(e),i=n._findTargetCorner(this.getPointer(e,!0)),s=this._getActionFromCorner(n,i),o=this._getOriginFromCorner(n,i);this._currentTransform={target:n,action:s,scaleX:n.scaleX,scaleY:n.scaleY,offsetX:r.x-n.left,offsetY:r.y-n.top,originX:o.x,originY:o.y,ex:r.x,ey:r.y,left:n.left,top:n.top,theta:t(n.angle),width:n.width*n.scaleX,mouseXSign:1,mouseYSign:1},this._currentTransform.original={left:n.left,top:n.top,scaleX:n.scaleX,scaleY:n.scaleY,originX:o.x,originY:o.y},this._resetCurrentTransform(e)},_translateObject:function(e,t){var n=this._currentTransform.target;n.get("lockMovementX")||n.set("left",e-this._currentTransform.offsetX),n.get("lockMovementY")||n.set("top",t-this._currentTransform.offsetY)},_scaleObject:function(e,t,n){var r=this._currentTransform,i=r.target,s=i.get("lockScalingX"),o=i.get("lockScalingY"),u=i.get("lockScalingFlip");if(s&&o)return;var a=i.translateToOriginPoint(i.getCenterPoint(),r.originX,r.originY),f=i.toLocalPoint(new fabric.Point(e,t),r.originX,r.originY);this._setLocalMouse(f,r),this._setObjectScale(f,r,s,o,n,u),i.setPositionByOrigin(a,r.originX,r.originY)},_setObjectScale:function(e,t,n,r,i,s){var o=t.target,u=!1,a=!1,f=o.stroke?o.strokeWidth:0;t.newScaleX=e.x/(o.width+f/2),t.newScaleY=e.y/(o.height+f/2),s&&t.newScaleX<=0&&t.newScaleX<o.scaleX&&(u=!0),s&&t.newScaleY<=0&&t.newScaleY<o.scaleY&&(a=!0),i==="equally"&&!n&&!r?u||a||this._scaleObjectEqually(e,o,t):i?i==="x"&&!o.get("lockUniScaling")?u||n||o.set("scaleX",t.newScaleX):i==="y"&&!o.get("lockUniScaling")&&(a||r||o.set("scaleY",t.newScaleY)):(u||n||o.set("scaleX",t.newScaleX),a||r||o.set("scaleY",t.newScaleY)),u||a||this._flipObject(t,i)},_scaleObjectEqually:function(e,t,n){var r=e.y+e.x,i=t.stroke?t.strokeWidth:0,s=(t.height+i/2)*n.original.scaleY+(t.width+i/2)*n.original.scaleX;n.newScaleX=n.original.scaleX*r/s,n.newScaleY=n.original.scaleY*r/s,t.set("scaleX",n.newScaleX),t.set("scaleY",n.newScaleY)},_flipObject:function(e,t){e.newScaleX<0&&t!=="y"&&(e.originX==="left"?e.originX="right":e.originX==="right"&&(e.originX="left")),e.newScaleY<0&&t!=="x"&&(e.originY==="top"?e.originY="bottom":e.originY==="bottom"&&(e.originY="top"))},_setLocalMouse:function(e,t){var n=t.target;t.originX==="right"?e.x*=-1:t.originX==="center"&&(e.x*=t.mouseXSign*2,e.x<0&&(t.mouseXSign=-t.mouseXSign)),t.originY==="bottom"?e.y*=-1:t.originY==="center"&&(e.y*=t.mouseYSign*2,e.y<0&&(t.mouseYSign=-t.mouseYSign)),i(e.x)>n.padding?e.x<0?e.x+=n.padding:e.x-=n.padding:e.x=0,i(e.y)>n.padding?e.y<0?e.y+=n.padding:e.y-=n.padding:e.y=0},_rotateObject:function(e,t){var i=this._currentTransform;if(i.target.get("lockRotation"))return;var s=r(i.ey-i.top,i.ex-i.left),o=r(t-i.top,e-i.left),u=n(o-s+i.theta);u<0&&(u=360+u),i.target.angle=u%360},setCursor:function(e){this.upperCanvasEl.style.cursor=e},_resetObjectTransform:function(e){e.scaleX=1,e.scaleY=1,e.setAngle(0)},_drawSelection:function(){var e=this.contextTop,t=this._groupSelector,n=t.left,r=t.top,o=i(n),u=i(r);e.fillStyle=this.selectionColor,e.fillRect(t.ex-(n>0?0:-n),t.ey-(r>0?0:-r),o,u),e.lineWidth=this.selectionLineWidth,e.strokeStyle=this.selectionBorderColor;if(this.selectionDashArray.length>1){var a=t.ex+s-(n>0?0:o),f=t.ey+s-(r>0?0:u);e.beginPath(),fabric.util.drawDashedLine(e,a,f,a+o,f,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f+u-1,a+o,f+u-1,this.selectionDashArray),fabric.util.drawDashedLine(e,a,f,a,f+u,this.selectionDashArray),fabric.util.drawDashedLine(e,a+o-1,f,a+o-1,f+u,this.selectionDashArray),e.closePath(),e.stroke()}else e.strokeRect(t.ex+s-(n>0?0:o),t.ey+s-(r>0?0:u),o,u)},_isLastRenderedObject:function(e){return this.controlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay&&this.lastRenderedObjectWithControlsAboveOverlay.visible&&this.containsPoint(e,this.lastRenderedObjectWithControlsAboveOverlay)&&this.lastRenderedObjectWithControlsAboveOverlay._findTargetCorner(this.getPointer(e,!0))},findTarget:function(e,t){if(this.skipTargetFind)return;if(this._isLastRenderedObject(e))return this.lastRenderedObjectWithControlsAboveOverlay;var n=this.getActiveGroup();if(n&&!t&&this.containsPoint(e,n))return n;var r=this._searchPossibleTargets(e);return this._fireOverOutEvents(r),r},_fireOverOutEvents:function(e){e?this._hoveredTarget!==e&&(this.fire("mouse:over",{target:e}),e.fire("mouseover"),this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget}),this._hoveredTarget.fire("mouseout")),this._hoveredTarget=e):this._hoveredTarget&&(this.fire("mouse:out",{target:this._hoveredTarget}),this._hoveredTarget.fire("mouseout"),this._hoveredTarget=null)},_checkTarget:function(e,t,n){if(t&&t.visible&&t.evented&&this.containsPoint(e,t)){if(!this.perPixelTargetFind&&!t.perPixelTargetFind||!!t.isEditing)return!0;var r=this.isTargetTransparent(t,n.x,n.y);if(!r)return!0}},_searchPossibleTargets:function(e){var t,n=this.getPointer(e,!0),r=this._objects.length;while(r--)if(this._checkTarget(e,this._objects[r],n)){this.relatedTarget=this._objects[r],t=this._objects[r];break}return t},getPointer:function(t,n,r){r||(r=this.upperCanvasEl);var i=e(t,r),s=r.getBoundingClientRect(),o=s.width||0,u=s.height||0,a;if(!o||!u)"top"in s&&"bottom"in s&&(u=Math.abs(s.top-s.bottom)),"right"in s&&"left"in s&&(o=Math.abs(s.right-s.left));return this.calcOffset(),i.x=i.x-this._offset.left,i.y=i.y-this._offset.top,n||(i=fabric.util.transformPoint(i,fabric.util.invertTransform(this.viewportTransform))),o===0||u===0?a={width:1,height:1}:a={width:r.width/o,height:r.height/u},{x:i.x*a.width,y:i.y*a.height}},_createUpperCanvas:function(){var e=this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/,"");this.upperCanvasEl=this._createCanvasElement(),fabric.util.addClass(this.upperCanvasEl,"upper-canvas "+e),this.wrapperEl.appendChild(this.upperCanvasEl),this._copyCanvasStyle(this.lowerCanvasEl,this.upperCanvasEl),this._applyCanvasStyle(this.upperCanvasEl),this.contextTop=this.upperCanvasEl.getContext("2d")},_createCacheCanvas:function(){this.cacheCanvasEl=this._createCanvasElement(),this.cacheCanvasEl.setAttribute("width",this.width),this.cacheCanvasEl.setAttribute("height",this.height),this.contextCache=this.cacheCanvasEl.getContext("2d")},_initWrapperElement:function(){this.wrapperEl=fabric.util.wrapElement(this.lowerCanvasEl,"div",{"class":this.containerClass}),fabric.util.setStyle(this.wrapperEl,{width:this.getWidth()+"px",height:this.getHeight()+"px",position:"relative"}),fabric.util.makeElementUnselectable(this.wrapperEl)},_applyCanvasStyle:function(e){var t=this.getWidth()||e.width,n=this.getHeight()||e.height;fabric.util.setStyle(e,{position:"absolute",width:t+"px",height:n+"px",left:0,top:0}),e.width=t,e.height=n,fabric.util.makeElementUnselectable(e)},_copyCanvasStyle:function(e,t){t.style.cssText=e.style.cssText},getSelectionContext:function(){return this.contextTop},getSelectionElement:function(){return this.upperCanvasEl},_setActiveObject:function(e){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=e,e.set("active",!0)},setActiveObject:function(e,t){return this._setActiveObject(e),this.renderAll(),this.fire("object:selected",{target:e,e:t}),e.fire("selected",{e:t}),this},getActiveObject:function(){return this._activeObject},_discardActiveObject:function(){this._activeObject&&this._activeObject.set("active",!1),this._activeObject=null},discardActiveObject:function(e){return this._discardActiveObject(),this.renderAll(),this.fire("selection:cleared",{e:e}),this},_setActiveGroup:function(e){this._activeGroup=e,e&&e.set("active",!0)},setActiveGroup:function(e,t){return this._setActiveGroup(e),e&&(this.fire("object:selected",{target:e,e:t}),e.fire("selected",{e:t})),this},getActiveGroup:function(){return this._activeGroup},_discardActiveGroup:function(){var e=this.getActiveGroup();e&&e.destroy(),this.setActiveGroup(null)},discardActiveGroup:function(e){return this._discardActiveGroup(),this.fire("selection:cleared",{e:e}),this},deactivateAll:function(){var e=this.getObjects(),t=0,n=e.length;for(;t<n;t++)e[t].set("active",!1);return this._discardActiveGroup(),this._discardActiveObject(),this},deactivateAllWithDispatch:function(e){var t=this.getActiveGroup()||this.getActiveObject();return t&&this.fire("before:selection:cleared",{target:t,e:e}),this.deactivateAll(),t&&this.fire("selection:cleared",{e:e}),this},drawControls:function(e){var t=this.getActiveGroup();t?this._drawGroupControls(e,t):this._drawObjectsControls(e)},_drawGroupControls:function(e,t){t._renderControls(e)},_drawObjectsControls:function(e){for(var t=0,n=this._objects.length;t<n;++t){if(!this._objects[t]||!this._objects[t].active)continue;this._objects[t]._renderControls(e),this.lastRenderedObjectWithControlsAboveOverlay=this._objects[t]}}});for(var o in fabric.StaticCanvas)o!=="prototype"&&(fabric.Canvas[o]=fabric.StaticCanvas[o]);fabric.isTouchSupported&&(fabric.Canvas.prototype._setCursorFromEvent=function(){}),fabric.Element=fabric.Canvas}(),function(){var e={mt:0,tr:1,mr:2,br:3,mb:4,bl:5,ml:6,tl:7},t=fabric.util.addListener,n=fabric.util.removeListener;fabric.util.object.extend(fabric.Canvas.prototype,{cursorMap:["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],_initEventListeners:function(){this._bindEvents(),t(fabric.window,"resize",this._onResize),t(this.upperCanvasEl,"mousedown",this._onMouseDown),t(this.upperCanvasEl,"mousemove",this._onMouseMove),t(this.upperCanvasEl,"mousewheel",this._onMouseWheel),t(this.upperCanvasEl,"touchstart",this._onMouseDown),t(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof Event!="undefined"&&"add"in Event&&(Event.add(this.upperCanvasEl,"gesture",this._onGesture),Event.add(this.upperCanvasEl,"drag",this._onDrag),Event.add(this.upperCanvasEl,"orientation",this._onOrientationChange),Event.add(this.upperCanvasEl,"shake",this._onShake),Event.add(this.upperCanvasEl,"longpress",this._onLongPress))},_bindEvents:function(){this._onMouseDown=this._onMouseDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onResize=this._onResize.bind(this),this._onGesture=this._onGesture.bind(this),this._onDrag=this._onDrag.bind(this),this._onShake=this._onShake.bind(this),this._onLongPress=this._onLongPress.bind(this),this._onOrientationChange=this._onOrientationChange.bind(this),this._onMouseWheel=this._onMouseWheel.bind(this)},removeListeners:function(){n(fabric.window,"resize",this._onResize),n(this.upperCanvasEl,"mousedown",this._onMouseDown),n(this.upperCanvasEl,"mousemove",this._onMouseMove),n(this.upperCanvasEl,"mousewheel",this._onMouseWheel),n(this.upperCanvasEl,"touchstart",this._onMouseDown),n(this.upperCanvasEl,"touchmove",this._onMouseMove),typeof Event!="undefined"&&"remove"in Event&&(Event.remove(this.upperCanvasEl,"gesture",this._onGesture),Event.remove(this.upperCanvasEl,"drag",this._onDrag),Event.remove(this.upperCanvasEl,"orientation",this._onOrientationChange),Event.remove(this.upperCanvasEl,"shake",this._onShake),Event.remove(this.upperCanvasEl,"longpress",this._onLongPress))},_onGesture:function(e,t){this.__onTransformGesture&&this.__onTransformGesture(e,t)},_onDrag:function(e,t){this.__onDrag&&this.__onDrag(e,t)},_onMouseWheel:function(e,t){this.__onMouseWheel&&this.__onMouseWheel(e,t)},_onOrientationChange:function(e,t){this.__onOrientationChange&&this.__onOrientationChange(e,t)},_onShake:function(e,t){this.__onShake&&this.__onShake(e,t)},_onLongPress:function(e,t){this.__onLongPress&&this.__onLongPress(e,t)},_onMouseDown:function(e){this.__onMouseDown(e),t(fabric.document,"touchend",this._onMouseUp),t(fabric.document,"touchmove",this._onMouseMove),n(this.upperCanvasEl,"mousemove",this._onMouseMove),n(this.upperCanvasEl,"touchmove",this._onMouseMove),e.type==="touchstart"?n(this.upperCanvasEl,"mousedown",this._onMouseDown):(t(fabric.document,"mouseup",this._onMouseUp),t(fabric.document,"mousemove",this._onMouseMove))},_onMouseUp:function(e){this.__onMouseUp(e),n(fabric.document,"mouseup",this._onMouseUp),n(fabric.document,"touchend",this._onMouseUp),n(fabric.document,"mousemove",this._onMouseMove),n(fabric.document,"touchmove",this._onMouseMove),t(this.upperCanvasEl,"mousemove",this._onMouseMove),t(this.upperCanvasEl,"touchmove",this._onMouseMove);if(e.type==="touchend"){var r=this;setTimeout(function(){t(r.upperCanvasEl,"mousedown",r._onMouseDown)},400)}},_onMouseMove:function(e){!this.allowTouchScrolling&&e.preventDefault&&e.preventDefault(),this.__onMouseMove(e)},_onResize:function(){this.calcOffset()},_shouldRender:function(e,t){var n=this.getActiveGroup()||this.getActiveObject();return!!(e&&(e.isMoving||e!==n)||!e&&!!n||!e&&!n&&!this._groupSelector||t&&this._previousPointer&&this.selection&&(t.x!==this._previousPointer.x||t.y!==this._previousPointer.y))},__onMouseUp:function(e){var t;if(this.isDrawingMode&&this._isCurrentlyDrawing){this._onMouseUpInDrawingMode(e);return}this._currentTransform?(this._finalizeCurrentTransform(),t=this._currentTransform.target):t=this.findTarget(e,!0);var n=this._shouldRender(t,this.getPointer(e));this._maybeGroupObjects(e),t&&(t.isMoving=!1),n&&this.renderAll(),this._handleCursorAndEvent(e,t)},_handleCursorAndEvent:function(e,t){this._setCursorFromEvent(e,t);var n=this;setTimeout(function(){n._setCursorFromEvent(e,t)},50),this.fire("mouse:up",{target:t,e:e}),t&&t.fire("mouseup",{e:e})},_finalizeCurrentTransform:function(){var e=this._currentTransform,t=e.target;t._scaling&&(t._scaling=!1),t.setCoords(),this.stateful&&t.hasStateChanged()&&(this.fire("object:modified",{target:t}),t.fire("modified")),this._restoreOriginXY(t)},_restoreOriginXY:function(e){if(this._previousOriginX&&this._previousOriginY){var t=e.translateToOriginPoint(e.getCenterPoint(),this._previousOriginX,this._previousOriginY);e.originX=this._previousOriginX,e.originY=this._previousOriginY,e.left=t.x,e.top=t.y,this._previousOriginX=null,this._previousOriginY=null}},_onMouseDownInDrawingMode:function(e){this._isCurrentlyDrawing=!0,this.discardActiveObject(e).renderAll(),this.clipTo&&fabric.util.clipContext(this,this.contextTop);var t=fabric.util.invertTransform(this.viewportTransform),n=fabric.util.transformPoint(this.getPointer(e,!0),t);this.freeDrawingBrush.onMouseDown(n),this.fire("mouse:down",{e:e});var r=this.findTarget(e);typeof r!="undefined"&&r.fire("mousedown",{e:e,target:r})},_onMouseMoveInDrawingMode:function(e){if(this._isCurrentlyDrawing){var t=fabric.util.invertTransform(this.viewportTransform),n=fabric.util.transformPoint(this.getPointer(e,!0),t);this.freeDrawingBrush.onMouseMove(n)}this.setCursor(this.freeDrawingCursor),this.fire("mouse:move",{e:e});var r=this.findTarget(e);typeof r!="undefined"&&r.fire("mousemove",{e:e,target:r})},_onMouseUpInDrawingMode:function(e){this._isCurrentlyDrawing=!1,this.clipTo&&this.contextTop.restore(),this.freeDrawingBrush.onMouseUp(),this.fire("mouse:up",{e:e});var t=this.findTarget(e);typeof t!="undefined"&&t.fire("mouseup",{e:e,target:t})},__onMouseDown:function(e){var t="which"in e?e.which===1:e.button===1;if(!t&&!fabric.isTouchSupported)return;if(this.isDrawingMode){this._onMouseDownInDrawingMode(e);return}if(this._currentTransform)return;var n=this.findTarget(e),r=this.getPointer(e,!0);this._previousPointer=r;var i=this._shouldRender(n,r),s=this._shouldGroup(e,n);this._shouldClearSelection(e,n)?this._clearSelection(e,n,r):s&&(this._handleGrouping(e,n),n=this.getActiveGroup()),n&&n.selectable&&!s&&(this._beforeTransform(e,n),this._setupCurrentTransform(e,n)),i&&this.renderAll(),this.fire("mouse:down",{target:n,e:e}),n&&n.fire("mousedown",{e:e})},_beforeTransform:function(e,t){var n;this.stateful&&t.saveState(),(n=t._findTargetCorner(this.getPointer(e)))&&this.onBeforeScaleRotate(t),t!==this.getActiveGroup()&&t!==this.getActiveObject()&&(this.deactivateAll(),this.setActiveObject(t,e))},_clearSelection:function(e,t,n){this.deactivateAllWithDispatch(e),t&&t.selectable?this.setActiveObject(t,e):this.selection&&(this._groupSelector={ex:n.x,ey:n.y,top:0,left:0})},_setOriginToCenter:function(e){this._previousOriginX=this._currentTransform.target.originX,this._previousOriginY=this._currentTransform.target.originY;var t=e.getCenterPoint();e.originX="center",e.originY="center",e.left=t.x,e.top=t.y,this._currentTransform.left=e.left,this._currentTransform.top=e.top},_setCenterToOrigin:function(e){var t=e.translateToOriginPoint(e.getCenterPoint(),this._previousOriginX,this._previousOriginY);e.originX=this._previousOriginX,e.originY=this._previousOriginY,e.left=t.x,e.top=t.y,this._previousOriginX=null,this._previousOriginY=null},__onMouseMove:function(e){var t,n;if(this.isDrawingMode){this._onMouseMoveInDrawingMode(e);return}if(typeof e.touches!="undefined"&&e.touches.length>1)return;var r=this._groupSelector;r?(n=this.getPointer(e,!0),r.left=n.x-r.ex,r.top=n.y-r.ey,this.renderTop()):this._currentTransform?this._transformObject(e):(t=this.findTarget(e),!t||t&&!t.selectable?this.setCursor(this.defaultCursor):this._setCursorFromEvent(e,t)),this.fire("mouse:move",{target:t,e:e}),t&&t.fire("mousemove",{e:e})},_transformObject:function(e){var t=this.getPointer(e),n=this._currentTransform;n.reset=!1,n.target.isMoving=!0,this._beforeScaleTransform(e,n),this._performTransformAction(e,n,t),this.renderAll()},_performTransformAction:function(e,t,n){var r=n.x,i=n.y,s=t.target,o=t.action;o==="rotate"?(this._rotateObject(r,i),this._fire("rotating",s,e)):o==="scale"?(this._onScale(e,t,r,i),this._fire("scaling",s,e)):o==="scaleX"?(this._scaleObject(r,i,"x"),this._fire("scaling",s,e)):o==="scaleY"?(this._scaleObject(r,i,"y"),this._fire("scaling",s,e)):(this._translateObject(r,i),this._fire("moving",s,e),this.setCursor(this.moveCursor))},_fire:function(e,t,n){this.fire("object:"+e,{target:t,e:n}),t.fire(e,{e:n})},_beforeScaleTransform:function(e,t){if(t.action==="scale"||t.action==="scaleX"||t.action==="scaleY"){var n=this._shouldCenterTransform(e,t.target);if(n&&(t.originX!=="center"||t.originY!=="center")||!n&&t.originX==="center"&&t.originY==="center")this._resetCurrentTransform(e),t.reset=!0}},_onScale:function(e,t,n,r){(e.shiftKey||this.uniScaleTransform)&&!t.target.get("lockUniScaling")?(t.currentAction="scale",this._scaleObject(n,r)):(!t.reset&&t.currentAction==="scale"&&this._resetCurrentTransform(e,t.target),t.currentAction="scaleEqually",this._scaleObject(n,r,"equally"))},_setCursorFromEvent:function(e,t){if(!t||!t.selectable)return this.setCursor(this.defaultCursor),!1;var n=this.getActiveGroup(),r=t._findTargetCorner&&(!n||!n.contains(t))&&t._findTargetCorner(this.getPointer(e,!0));return r?this._setCornerCursor(r,t):this.setCursor(t.hoverCursor||this.hoverCursor),!0},_setCornerCursor:function(t,n){if(t in e)this.setCursor(this._getRotatedCornerCursor(t,n));else{if(t!=="mtr"||!n.hasRotatingPoint)return this.setCursor(this.defaultCursor),!1;this.setCursor(this.rotationCursor)}},_getRotatedCornerCursor:function(t,n){var r=Math.round(n.getAngle()%360/45);return r<0&&(r+=8),r+=e[t],r%=8,this.cursorMap[r]}})}(),function(){var e=Math.min,t=Math.max;fabric.util.object.extend(fabric.Canvas.prototype,{_shouldGroup:function(e,t){var n=this.getActiveObject();return e.shiftKey&&(this.getActiveGroup()||n&&n!==t)&&this.selection},_handleGrouping:function(e,t){if(t===this.getActiveGroup()){t=this.findTarget(e,!0);if(!t||t.isType("group"))return}this.getActiveGroup()?this._updateActiveGroup(t,e):this._createActiveGroup(t,e),this._activeGroup&&this._activeGroup.saveCoords()},_updateActiveGroup:function(e,t){var n=this.getActiveGroup();if(n.contains(e)){n.removeWithUpdate(e),this._resetObjectTransform(n),e.set("active",!1);if(n.size()===1){this.discardActiveGroup(t),this.setActiveObject(n.item(0));return}}else n.addWithUpdate(e),this._resetObjectTransform(n);this.fire("selection:created",{target:n,e:t}),n.set("active",!0)},_createActiveGroup:function(e,t){if(this._activeObject&&e!==this._activeObject){var n=this._createGroup(e);n.addWithUpdate(),this.setActiveGroup(n),this._activeObject=null,this.fire("selection:created",{target:n,e:t})}e.set("active",!0)},_createGroup:function(e){var t=this.getObjects(),n=t.indexOf(this._activeObject)<t.indexOf(e),r=n?[this._activeObject,e]:[e,this._activeObject];return new fabric.Group(r,{canvas:this})},_groupSelectedObjects:function(e){var t=this._collectObjects();t.length===1?this.setActiveObject(t[0],e):t.length>1&&(t=new fabric.Group(t.reverse(),{canvas:this}),t.addWithUpdate(),this.setActiveGroup(t,e),t.saveCoords(),this.fire("selection:created",{target:t}),this.renderAll())},_collectObjects:function(){var n=[],r,i=this._groupSelector.ex,s=this._groupSelector.ey,o=i+this._groupSelector.left,u=s+this._groupSelector.top,a=new fabric.Point(e(i,o),e(s,u)),f=new fabric.Point(t(i,o),t(s,u)),l=i===o&&s===u
;for(var c=this._objects.length;c--;){r=this._objects[c];if(!r||!r.selectable||!r.visible)continue;if(r.intersectsWithRect(a,f)||r.isContainedWithinRect(a,f)||r.containsPoint(a)||r.containsPoint(f)){r.set("active",!0),n.push(r);if(l)break}}return n},_maybeGroupObjects:function(e){this.selection&&this._groupSelector&&this._groupSelectedObjects(e);var t=this.getActiveGroup();t&&(t.setObjectsCoords().setCoords(),t.isMoving=!1,this.setCursor(this.defaultCursor)),this._groupSelector=null,this._currentTransform=null}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{toDataURL:function(e){e||(e={});var t=e.format||"png",n=e.quality||1,r=e.multiplier||1,i={left:e.left,top:e.top,width:e.width,height:e.height};return r!==1?this.__toDataURLWithMultiplier(t,n,i,r):this.__toDataURL(t,n,i)},__toDataURL:function(e,t,n){this.renderAll(!0);var r=this.upperCanvasEl||this.lowerCanvasEl,i=this.__getCroppedCanvas(r,n);e==="jpg"&&(e="jpeg");var s=fabric.StaticCanvas.supports("toDataURLWithQuality")?(i||r).toDataURL("image/"+e,t):(i||r).toDataURL("image/"+e);return this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),i&&(i=null),s},__getCroppedCanvas:function(e,t){var n,r,i="left"in t||"top"in t||"width"in t||"height"in t;return i&&(n=fabric.util.createCanvasElement(),r=n.getContext("2d"),n.width=t.width||this.width,n.height=t.height||this.height,r.drawImage(e,-t.left||0,-t.top||0)),n},__toDataURLWithMultiplier:function(e,t,n,r){var i=this.getWidth(),s=this.getHeight(),o=i*r,u=s*r,a=this.getActiveObject(),f=this.getActiveGroup(),l=this.contextTop||this.contextContainer;r>1&&this.setWidth(o).setHeight(u),l.scale(r,r),n.left&&(n.left*=r),n.top&&(n.top*=r),n.width?n.width*=r:r<1&&(n.width=o),n.height?n.height*=r:r<1&&(n.height=u),f?this._tempRemoveBordersControlsFromGroup(f):a&&this.deactivateAll&&this.deactivateAll(),this.renderAll(!0);var c=this.__toDataURL(e,t,n);return this.width=i,this.height=s,l.scale(1/r,1/r),this.setWidth(i).setHeight(s),f?this._restoreBordersControlsOnGroup(f):a&&this.setActiveObject&&this.setActiveObject(a),this.contextTop&&this.clearContext(this.contextTop),this.renderAll(),c},toDataURLWithMultiplier:function(e,t,n){return this.toDataURL({format:e,multiplier:t,quality:n})},_tempRemoveBordersControlsFromGroup:function(e){e.origHasControls=e.hasControls,e.origBorderColor=e.borderColor,e.hasControls=!0,e.borderColor="rgba(0,0,0,0)",e.forEachObject(function(e){e.origBorderColor=e.borderColor,e.borderColor="rgba(0,0,0,0)"})},_restoreBordersControlsOnGroup:function(e){e.hideControls=e.origHideControls,e.borderColor=e.origBorderColor,e.forEachObject(function(e){e.borderColor=e.origBorderColor,delete e.origBorderColor})}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{loadFromDatalessJSON:function(e,t,n){return this.loadFromJSON(e,t,n)},loadFromJSON:function(e,t,n){if(!e)return;var r=typeof e=="string"?JSON.parse(e):e;this.clear();var i=this;return this._enlivenObjects(r.objects,function(){i._setBgOverlay(r,t)},n),this},_setBgOverlay:function(e,t){var n=this,r={backgroundColor:!1,overlayColor:!1,backgroundImage:!1,overlayImage:!1};if(!e.backgroundImage&&!e.overlayImage&&!e.background&&!e.overlay){t&&t();return}var i=function(){r.backgroundImage&&r.overlayImage&&r.backgroundColor&&r.overlayColor&&(n.renderAll(),t&&t())};this.__setBgOverlay("backgroundImage",e.backgroundImage,r,i),this.__setBgOverlay("overlayImage",e.overlayImage,r,i),this.__setBgOverlay("backgroundColor",e.background,r,i),this.__setBgOverlay("overlayColor",e.overlay,r,i),i()},__setBgOverlay:function(e,t,n,r){var i=this;if(!t){n[e]=!0;return}e==="backgroundImage"||e==="overlayImage"?fabric.Image.fromObject(t,function(t){i[e]=t,n[e]=!0,r&&r()}):this["set"+fabric.util.string.capitalize(e,!0)](t,function(){n[e]=!0,r&&r()})},_enlivenObjects:function(e,t,n){var r=this;if(!e||e.length===0){t&&t();return}var i=this.renderOnAddRemove;this.renderOnAddRemove=!1,fabric.util.enlivenObjects(e,function(e){e.forEach(function(e,t){r.insertAt(e,t,!0)}),r.renderOnAddRemove=i,t&&t()},null,n)},_toDataURL:function(e,t){this.clone(function(n){t(n.toDataURL(e))})},_toDataURLWithMultiplier:function(e,t,n){this.clone(function(r){n(r.toDataURLWithMultiplier(e,t))})},clone:function(e,t){var n=JSON.stringify(this.toJSON(t));this.cloneWithoutData(function(t){t.loadFromJSON(n,function(){e&&e(t)})})},cloneWithoutData:function(e){var t=fabric.document.createElement("canvas");t.width=this.getWidth(),t.height=this.getHeight();var n=new fabric.Canvas(t);n.clipTo=this.clipTo,this.backgroundImage?(n.setBackgroundImage(this.backgroundImage.src,function(){n.renderAll(),e&&e(n)}),n.backgroundImageOpacity=this.backgroundImageOpacity,n.backgroundImageStretch=this.backgroundImageStretch):e&&e(n)}}),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.toFixed,i=t.util.string.capitalize,s=t.util.degreesToRadians,o=t.StaticCanvas.supports("setLineDash");if(t.Object)return;t.Object=t.util.createClass({type:"object",originX:"left",originY:"top",top:0,left:0,width:0,height:0,scaleX:1,scaleY:1,flipX:!1,flipY:!1,opacity:1,angle:0,cornerSize:12,transparentCorners:!0,hoverCursor:null,padding:0,borderColor:"rgba(102,153,255,0.75)",cornerColor:"rgba(102,153,255,0.5)",centeredScaling:!1,centeredRotation:!0,fill:"rgb(0,0,0)",fillRule:"nonzero",globalCompositeOperation:"source-over",backgroundColor:"",stroke:null,strokeWidth:1,strokeDashArray:null,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:10,shadow:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,transformMatrix:null,minScaleLimit:.01,selectable:!0,evented:!0,visible:!0,hasControls:!0,hasBorders:!0,hasRotatingPoint:!0,rotatingPointOffset:40,perPixelTargetFind:!1,includeDefaultValues:!0,clipTo:null,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockUniScaling:!1,lockScalingFlip:!1,stateProperties:"top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor".split(" "),initialize:function(e){e&&this.setOptions(e)},_initGradient:function(e){e.fill&&e.fill.colorStops&&!(e.fill instanceof t.Gradient)&&this.set("fill",new t.Gradient(e.fill))},_initPattern:function(e){e.fill&&e.fill.source&&!(e.fill instanceof t.Pattern)&&this.set("fill",new t.Pattern(e.fill)),e.stroke&&e.stroke.source&&!(e.stroke instanceof t.Pattern)&&this.set("stroke",new t.Pattern(e.stroke))},_initClipping:function(e){if(!e.clipTo||typeof e.clipTo!="string")return;var n=t.util.getFunctionBody(e.clipTo);typeof n!="undefined"&&(this.clipTo=new Function("ctx",n))},setOptions:function(e){for(var t in e)this.set(t,e[t]);this._initGradient(e),this._initPattern(e),this._initClipping(e)},transform:function(e,t){this.group&&this.group.transform(e,t);var n=t?this._getLeftTopCoords():this.getCenterPoint();e.translate(n.x,n.y),e.rotate(s(this.angle)),e.scale(this.scaleX*(this.flipX?-1:1),this.scaleY*(this.flipY?-1:1))},toObject:function(e){var n=t.Object.NUM_FRACTION_DIGITS,i={type:this.type,originX:this.originX,originY:this.originY,left:r(this.left,n),top:r(this.top,n),width:r(this.width,n),height:r(this.height,n),fill:this.fill&&this.fill.toObject?this.fill.toObject():this.fill,stroke:this.stroke&&this.stroke.toObject?this.stroke.toObject():this.stroke,strokeWidth:r(this.strokeWidth,n),strokeDashArray:this.strokeDashArray,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:r(this.strokeMiterLimit,n),scaleX:r(this.scaleX,n),scaleY:r(this.scaleY,n),angle:r(this.getAngle(),n),flipX:this.flipX,flipY:this.flipY,opacity:r(this.opacity,n),shadow:this.shadow&&this.shadow.toObject?this.shadow.toObject():this.shadow,visible:this.visible,clipTo:this.clipTo&&String(this.clipTo),backgroundColor:this.backgroundColor,fillRule:this.fillRule,globalCompositeOperation:this.globalCompositeOperation};return this.includeDefaultValues||(i=this._removeDefaultValues(i)),t.util.populateWithProperties(this,i,e),i},toDatalessObject:function(e){return this.toObject(e)},_removeDefaultValues:function(e){var n=t.util.getKlass(e.type).prototype,r=n.stateProperties;return r.forEach(function(t){e[t]===n[t]&&delete e[t]}),e},toString:function(){return"#<fabric."+i(this.type)+">"},get:function(e){return this[e]},_setObject:function(e){for(var t in e)this._set(t,e[t])},set:function(e,t){return typeof e=="object"?this._setObject(e):typeof t=="function"&&e!=="clipTo"?this._set(e,t(this.get(e))):this._set(e,t),this},_set:function(e,n){var i=e==="scaleX"||e==="scaleY";return i&&(n=this._constrainScale(n)),e==="scaleX"&&n<0?(this.flipX=!this.flipX,n*=-1):e==="scaleY"&&n<0?(this.flipY=!this.flipY,n*=-1):e==="width"||e==="height"?this.minScaleLimit=r(Math.min(.1,1/Math.max(this.width,this.height)),2):e==="shadow"&&n&&!(n instanceof t.Shadow)&&(n=new t.Shadow(n)),this[e]=n,this},toggle:function(e){var t=this.get(e);return typeof t=="boolean"&&this.set(e,!t),this},setSourcePath:function(e){return this.sourcePath=e,this},getViewportTransform:function(){return this.canvas&&this.canvas.viewportTransform?this.canvas.viewportTransform:[1,0,0,1,0,0]},render:function(e,n){if(this.width===0&&this.height===0||!this.visible)return;e.save(),this._setupCompositeOperation(e),n||this.transform(e),this._setStrokeStyles(e),this._setFillStyles(e),this.group&&this.group.type==="path-group"&&e.translate(-this.group.width/2,-this.group.height/2),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this._setOpacity(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e),this._render(e,n),this.clipTo&&e.restore(),this._removeShadow(e),this._restoreCompositeOperation(e),e.restore()},_setOpacity:function(e){this.group&&this.group._setOpacity(e),e.globalAlpha*=this.opacity},_setStrokeStyles:function(e){this.stroke&&(e.lineWidth=this.strokeWidth,e.lineCap=this.strokeLineCap,e.lineJoin=this.strokeLineJoin,e.miterLimit=this.strokeMiterLimit,e.strokeStyle=this.stroke.toLive?this.stroke.toLive(e,this):this.stroke)},_setFillStyles:function(e){this.fill&&(e.fillStyle=this.fill.toLive?this.fill.toLive(e,this):this.fill)},_renderControls:function(e,n){var r=this.getViewportTransform();e.save();if(this.active&&!n){var i;this.group&&(i=t.util.transformPoint(this.group.getCenterPoint(),r),e.translate(i.x,i.y),e.rotate(s(this.group.angle))),i=t.util.transformPoint(this.getCenterPoint(),r,null!=this.group),this.group&&(i.x*=this.group.scaleX,i.y*=this.group.scaleY),e.translate(i.x,i.y),e.rotate(s(this.angle)),this.drawBorders(e),this.drawControls(e)}e.restore()},_setShadow:function(e){if(!this.shadow)return;var t=this.canvas&&this.canvas._currentMultiplier||1;e.shadowColor=this.shadow.color,e.shadowBlur=this.shadow.blur*t*(this.scaleX+this.scaleY)/2,e.shadowOffsetX=this.shadow.offsetX*t*this.scaleX,e.shadowOffsetY=this.shadow.offsetY*t*this.scaleY},_removeShadow:function(e){if(!this.shadow)return;e.shadowColor="",e.shadowBlur=e.shadowOffsetX=e.shadowOffsetY=0},_renderFill:function(e){if(!this.fill)return;e.save();if(this.fill.gradientTransform){var t=this.fill.gradientTransform;e.transform.apply(e,t)}this.fill.toLive&&e.translate(-this.width/2+this.fill.offsetX||0,-this.height/2+this.fill.offsetY||0),this.fillRule==="evenodd"?e.fill("evenodd"):e.fill(),e.restore(),this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e)},_renderStroke:function(e){if(!this.stroke||this.strokeWidth===0)return;e.save();if(this.strokeDashArray)1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),o?(e.setLineDash(this.strokeDashArray),this._stroke&&this._stroke(e)):this._renderDashedStroke&&this._renderDashedStroke(e),e.stroke();else{if(this.stroke.gradientTransform){var t=this.stroke.gradientTransform;e.transform.apply(e,t)}this._stroke?this._stroke(e):e.stroke()}this._removeShadow(e),e.restore()},clone:function(e,n){return this.constructor.fromObject?this.constructor.fromObject(this.toObject(n),e):new t.Object(this.toObject(n))},cloneAsImage:function(e){var n=this.toDataURL();return t.util.loadImage(n,function(n){e&&e(new t.Image(n))}),this},toDataURL:function(e){e||(e={});var n=t.util.createCanvasElement(),r=this.getBoundingRect();n.width=r.width,n.height=r.height,t.util.wrapElement(n,"div");var i=new t.Canvas(n);e.format==="jpg"&&(e.format="jpeg"),e.format==="jpeg"&&(i.backgroundColor="#fff");var s={active:this.get("active"),left:this.getLeft(),top:this.getTop()};this.set("active",!1),this.setPositionByOrigin(new t.Point(n.width/2,n.height/2),"center","center");var o=this.canvas;i.add(this);var u=i.toDataURL(e);return this.set(s).setCoords(),this.canvas=o,i.dispose(),i=null,u},isType:function(e){return this.type===e},complexity:function(){return 0},toJSON:function(e){return this.toObject(e)},setGradient:function(e,n){n||(n={});var r={colorStops:[]};r.type=n.type||(n.r1||n.r2?"radial":"linear"),r.coords={x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2};if(n.r1||n.r2)r.coords.r1=n.r1,r.coords.r2=n.r2;for(var i in n.colorStops){var s=new t.Color(n.colorStops[i]);r.colorStops.push({offset:i,color:s.toRgb(),opacity:s.getAlpha()})}return this.set(e,t.Gradient.forObject(this,r))},setPatternFill:function(e){return this.set("fill",new t.Pattern(e))},setShadow:function(e){return this.set("shadow",e?new t.Shadow(e):null)},setColor:function(e){return this.set("fill",e),this},setAngle:function(e){var t=(this.originX!=="center"||this.originY!=="center")&&this.centeredRotation;return t&&this._setOriginToCenter(),this.set("angle",e),t&&this._resetOrigin(),this},centerH:function(){return this.canvas.centerObjectH(this),this},centerV:function(){return this.canvas.centerObjectV(this),this},center:function(){return this.canvas.centerObject(this),this},remove:function(){return this.canvas.remove(this),this},getLocalPointer:function(e,t){t=t||this.canvas.getPointer(e);var n=this.translateToOriginPoint(this.getCenterPoint(),"left","top");return{x:t.x-n.x,y:t.y-n.y}},_setupCompositeOperation:function(e){this.globalCompositeOperation&&(this._prevGlobalCompositeOperation=e.globalCompositeOperation,e.globalCompositeOperation=this.globalCompositeOperation)},_restoreCompositeOperation:function(e){this.globalCompositeOperation&&this._prevGlobalCompositeOperation&&(e.globalCompositeOperation=this._prevGlobalCompositeOperation)}}),t.util.createAccessors(t.Object),t.Object.prototype.rotate=t.Object.prototype.setAngle,n(t.Object.prototype,t.Observable),t.Object.NUM_FRACTION_DIGITS=2,t.Object.__uid=0}(typeof exports!="undefined"?exports:this),function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{translateToCenterPoint:function(t,n,r){var i=t.x,s=t.y,o=this.stroke?this.strokeWidth:0;return n==="left"?i=t.x+(this.getWidth()+o*this.scaleX)/2:n==="right"&&(i=t.x-(this.getWidth()+o*this.scaleX)/2),r==="top"?s=t.y+(this.getHeight()+o*this.scaleY)/2:r==="bottom"&&(s=t.y-(this.getHeight()+o*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},translateToOriginPoint:function(t,n,r){var i=t.x,s=t.y,o=this.stroke?this.strokeWidth:0;return n==="left"?i=t.x-(this.getWidth()+o*this.scaleX)/2:n==="right"&&(i=t.x+(this.getWidth()+o*this.scaleX)/2),r==="top"?s=t.y-(this.getHeight()+o*this.scaleY)/2:r==="bottom"&&(s=t.y+(this.getHeight()+o*this.scaleY)/2),fabric.util.rotatePoint(new fabric.Point(i,s),t,e(this.angle))},getCenterPoint:function(){var e=new fabric.Point(this.left,this.top);return this.translateToCenterPoint(e,this.originX,this.originY)},getPointByOrigin:function(e,t){var n=this.getCenterPoint();return this.translateToOriginPoint(n,e,t)},toLocalPoint:function(t,n,r){var i=this.getCenterPoint(),s=this.stroke?this.strokeWidth:0,o,u;return n&&r?(n==="left"?o=i.x-(this.getWidth()+s*this.scaleX)/2:n==="right"?o=i.x+(this.getWidth()+s*this.scaleX)/2:o=i.x,r==="top"?u=i.y-(this.getHeight()+s*this.scaleY)/2:r==="bottom"?u=i.y+(this.getHeight()+s*this.scaleY)/2:u=i.y):(o=this.left,u=this.top),fabric.util.rotatePoint(new fabric.Point(t.x,t.y),i,-e(this.angle)).subtractEquals(new fabric.Point(o,u))},setPositionByOrigin:function(e,t,n){var r=this.translateToCenterPoint(e,t,n),i=this.translateToOriginPoint(r,this.originX,this.originY);this.set("left",i.x),this.set("top",i.y)},adjustPosition:function(t){var n=e(this.angle),r=this.getWidth()/2,i=Math.cos(n)*r,s=Math.sin(n)*r,o=this.getWidth(),u=Math.cos(n)*o,a=Math.sin(n)*o;this.originX==="center"&&t==="left"||this.originX==="right"&&t==="center"?(this.left-=i,this.top-=s):this.originX==="left"&&t==="center"||this.originX==="center"&&t==="right"?(this.left+=i,this.top+=s):this.originX==="left"&&t==="right"?(this.left+=u,this.top+=a):this.originX==="right"&&t==="left"&&(this.left-=u,this.top-=a),this.setCoords(),this.originX=t},_setOriginToCenter:function(){this._originalOriginX=this.originX,this._originalOriginY=this.originY;var e=this.getCenterPoint();this.originX="center",this.originY="center",this.left=e.x,this.top=e.y},_resetOrigin:function(){var e=this.translateToOriginPoint(this.getCenterPoint(),this._originalOriginX,this._originalOriginY);this.originX=this._originalOriginX,this.originY=this._originalOriginY,this.left=e.x,this.top=e.y,this._originalOriginX=null,this._originalOriginY=null},_getLeftTopCoords:function(){return this.translateToOriginPoint(this.getCenterPoint(),"left","center")}})}(),function(){var e=fabric.util.degreesToRadians;fabric.util.object.extend(fabric.Object.prototype,{oCoords:null,intersectsWithRect:function(e,t){var n=this.oCoords,r=new fabric.Point(n.tl.x,n.tl.y),i=new fabric.Point(n.tr.x,n.tr.y),s=new fabric.Point(n.bl.x,n.bl.y),o=new fabric.Point(n.br.x,n.br.y),u=fabric.Intersection.intersectPolygonRectangle([r,i,o,s],e,t);return u.status==="Intersection"},intersectsWithObject:function(e){function t(e){return{tl:new fabric.Point(e.tl.x,e.tl.y),tr:new fabric.Point(e.tr.x,e.tr.y),bl:new fabric.Point(e.bl.x,e.bl.y),br:new fabric.Point(e.br.x,e.br.y)}}var n=t(this.oCoords),r=t(e.oCoords),i=fabric.Intersection.intersectPolygonPolygon([n.tl,n.tr,n.br,n.bl],[r.tl,r.tr,r.br,r.bl]);return i.status==="Intersection"},isContainedWithinObject:function(e){var t=e.getBoundingRect(),n=new fabric.Point(t.left,t.top),r=new fabric.Point(t.left+t.width,t.top+t.height);return this.isContainedWithinRect(n,r)},isContainedWithinRect:function(e,t){var n=this.getBoundingRect();return n.left>=e.x&&n.left+n.width<=t.x&&n.top>=e.y&&n.top+n.height<=t.y},containsPoint:function(e){var t=this._getImageLines(this.oCoords),n=this._findCrossPoints(e,t);return n!==0&&n%2===1},_getImageLines:function(e){return{topline:{o:e.tl,d:e.tr},rightline:{o:e.tr,d:e.br},bottomline:{o:e.br,d:e.bl},leftline:{o:e.bl,d:e.tl}}},_findCrossPoints:function(e,t){var n,r,i,s,o,u,a=0,f;for(var l in t){f=t[l];if(f.o.y<e.y&&f.d.y<e.y)continue;if(f.o.y>=e.y&&f.d.y>=e.y)continue;f.o.x===f.d.x&&f.o.x>=e.x?(o=f.o.x,u=e.y):(n=0,r=(f.d.y-f.o.y)/(f.d.x-f.o.x),i=e.y-n*e.x,s=f.o.y-r*f.o.x,o=-(i-s)/(n-r),u=i+n*o),o>=e.x&&(a+=1);if(a===2)break}return a},getBoundingRectWidth:function(){return this.getBoundingRect().width},getBoundingRectHeight:function(){return this.getBoundingRect().height},getBoundingRect:function(){this.oCoords||this.setCoords();var e=[this.oCoords.tl.x,this.oCoords.tr.x,this.oCoords.br.x,this.oCoords.bl.x],t=fabric.util.array.min(e),n=fabric.util.array.max(e),r=Math.abs(t-n),i=[this.oCoords.tl.y,this.oCoords.tr.y,this.oCoords.br.y,this.oCoords.bl.y],s=fabric.util.array.min(i),o=fabric.util.array.max(i),u=Math.abs(s-o);return{left:t,top:s,width:r,height:u}},getWidth:function(){return this.width*this.scaleX},getHeight:function(){return this.height*this.scaleY},_constrainScale:function(e){return Math.abs(e)<this.minScaleLimit?e<0?-this.minScaleLimit:this.minScaleLimit:e},scale:function(e){return e=this._constrainScale(e),e<0&&(this.flipX=!this.flipX,this.flipY=!this.flipY,e*=-1),this.scaleX=e,this.scaleY=e,this.setCoords(),this},scaleToWidth:function(e){var t=this.getBoundingRectWidth()/this.getWidth();return this.scale(e/this.width/t)},scaleToHeight:function(e){var t=this.getBoundingRectHeight()/this.getHeight();return this.scale(e/this.height/t)},setCoords:function(){var t=this.strokeWidth,n=e(this.angle),r=this.getViewportTransform(),i=function(e){return fabric.util.transformPoint(e,r)},s=this.width,o=this.height,u=this.strokeLineCap==="round"||this.strokeLineCap==="square",a=this.type==="line"&&this.width===0,f=this.type==="line"&&this.height===0,l=a||f,c=u&&f||!l,h=u&&a||!l;a?s=t:f&&(o=t),c&&(s+=s>0?t:-t),h&&(o+=o>0?t:-t),this.currentWidth=s*this.scaleX,this.currentHeight=o*this.scaleY,this.currentWidth<0&&(this.currentWidth=Math.abs(this.currentWidth));var p=Math.sqrt(Math.pow(this.currentWidth/2,2)+Math.pow(this.currentHeight/2,2)),d=Math.atan(isFinite(this.currentHeight/this.currentWidth)?this.currentHeight/this.currentWidth:0),v=Math.cos(d+n)*p,m=Math.sin(d+n)*p,g=Math.sin(n),y=Math.cos(n),b=this.getCenterPoint(),w=new fabric.Point(this.currentWidth,this.currentHeight),E=new fabric.Point(b.x-v,b.y-m),S=new fabric.Point(E.x+w.x*y,E.y+w.x*g),x=new fabric.Point(E.x-w.y*g,E.y+w.y*y),T=new fabric.Point(E.x+w.x/2*y,E.y+w.x/2*g),N=i(E),C=i(S),k=i(new fabric.Point(S.x-w.y*g,S.y+w.y*y)),L=i(x),A=i(new fabric.Point(E.x-w.y/2*g,E.y+w.y/2*y)),O=i(T),M=i(new fabric.Point(S.x-w.y/2*g,S.y+w.y/2*y)),_=i(new fabric.Point(x.x+w.x/2*y,x.y+w.x/2*g)),D=i(new fabric.Point(T.x,T.y)),P=Math.cos(d+n)*this.padding*Math.sqrt(2),H=Math.sin(d+n)*this.padding*Math.sqrt(2);return N=N.add(new fabric.Point(-P,-H)),C=C.add(new fabric.Point(H,-P)),k=k.add(new fabric.Point(P,H)),L=L.add(new fabric.Point(-H,P)),A=A.add(new fabric.Point((-P-H)/2,(-H+P)/2)),O=O.add(new fabric.Point((H-P)/2,-(H+P)/2)),M=M.add(new fabric.Point((H+P)/2,(H-P)/2)),_=_.add(new fabric.Point((P-H)/2,(P+H)/2)),D=D.add(new fabric.Point((H-P)/2,-(H+P)/2)),this.oCoords={tl:N,tr:C,br:k,bl:L,ml:A,mt:O,mr:M,mb:_,mtr:D},this._setCornerCoords&&this._setCornerCoords(),this}})}(),fabric.util.object.extend(fabric.Object.prototype,{sendToBack:function(){return this.group?fabric.StaticCanvas.prototype.sendToBack.call(this.group,this):this.canvas.sendToBack(this),this},bringToFront:function(){return this.group?fabric.StaticCanvas.prototype.bringToFront.call(this.group,this):this.canvas.bringToFront(this),this},sendBackwards:function(e){return this.group?fabric.StaticCanvas.prototype.sendBackwards.call(this.group,this,e):this.canvas.sendBackwards(this,e),this},bringForward:function(e){return this.group?fabric.StaticCanvas.prototype.bringForward.call(this.group,this,e):this.canvas.bringForward(this,e),this},moveTo:function(e){return this.group?fabric.StaticCanvas.prototype.moveTo.call(this.group,this,e):this.canvas.moveTo(this,e),this}}),fabric.util.object.extend(fabric.Object.prototype,{getSvgStyles:function(){var e=this.fill?this.fill.toLive?"url(#SVGID_"+this.fill.id+")":this.fill:"none",t=this.fillRule,n=this.stroke?this.stroke.toLive?"url(#SVGID_"+this.stroke.id+")":this.stroke:"none",r=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):"",s=this.strokeLineCap?this.strokeLineCap:"butt",o=this.strokeLineJoin?this.strokeLineJoin:"miter",u=this.strokeMiterLimit?this.strokeMiterLimit:"4",a=typeof this.opacity!="undefined"?this.opacity:"1",f=this.visible?"":" visibility: hidden;",l=this.shadow&&this.type!=="text"?"filter: url(#SVGID_"+this.shadow.id+");":"";return["stroke: ",n,"; ","stroke-width: ",r,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",s,"; ","stroke-linejoin: ",o,"; ","stroke-miterlimit: ",u,"; ","fill: ",e,"; ","fill-rule: ",t,"; ","opacity: ",a,";",l,f].join("")},getSvgTransform:function(){if(this.group&&this.group.type==="path-group")return"";var e=fabric.util.toFixed,t=this.getAngle(),n=!this.canvas||this.canvas.svgViewportTransformation?this.getViewportTransform():[1,0,0,1,0,0],r=fabric.util.transformPoint(this.getCenterPoint(),n),i=fabric.Object.NUM_FRACTION_DIGITS,s=this.type==="path-group"?"":"translate("+e(r.x,i)+" "+e(r.y,i)+")",o=t!==0?" rotate("+e(t,i)+")":"",u=this.scaleX===1&&this.scaleY===1&&n[0]===1&&n[3]===1?"":" scale("+e(this.scaleX*n[0],i)+" "+e(this.scaleY*n[3],i)+")",a=this.type==="path-group"?this.width*n[0]:0,f=this.flipX?" matrix(-1 0 0 1 "+a+" 0) ":"",l=this.type==="path-group"?this.height*n[3]:0,c=this.flipY?" matrix(1 0 0 -1 0 "+l+")":"";return[s,o,u,f,c].join("")},getSvgTransformMatrix:function(){return this.transformMatrix?" matrix("+this.transformMatrix.join(" ")+")":""},_createBaseSVGMarkup:function(){var e=[];return this.fill&&this.fill.toLive&&e.push(this.fill.toSVG(this,!1)),this.stroke&&this.stroke.toLive&&e.push(this.stroke.toSVG(this,!1)),this.shadow&&e.push(this.shadow.toSVG(this)),e}}),fabric.util.object.extend(fabric.Object.prototype,{hasStateChanged:function(){return this.stateProperties.some(function(e){return this.get(e)!==this.originalState[e]},this)},saveState:function(e){return this.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),e&&e.stateProperties&&e.stateProperties.forEach(function(e){this.originalState[e]=this.get(e)},this),this},setupState:function(){return this.originalState={},this.saveState(),this}}),function(){var e=fabric.util.degreesToRadians,t=function(){return typeof G_vmlCanvasManager!="undefined"};fabric.util.object.extend(fabric.Object.prototype,{_controlsVisibility:null,_findTargetCorner:function(e){if(!this.hasControls||!this.active)return!1;var t=e.x,n=e.y,r,i;for(var s in this.oCoords){if(!this.isControlVisible(s))continue;if(s==="mtr"&&!this.hasRotatingPoint)continue;if(!(!this.get("lockUniScaling")||s!=="mt"&&s!=="mr"&&s!=="mb"&&s!=="ml"))continue;i=this._getImageLines(this.oCoords[s].corner),r=this._findCrossPoints({x:t,y:n},i);if(r!==0&&r%2===1)return this.__corner=s,s}return!1},_setCornerCoords:function(){var t=this.oCoords,n=e(this.angle),r=e(45-this.angle),i=Math.sqrt(2*Math.pow(this.cornerSize,2))/2,s=i*Math.cos(r),o=i*Math.sin(r),u=Math.sin(n),a=Math.cos(n);t.tl.corner={tl:{x:t.tl.x-o,y:t.tl.y-s},tr:{x:t.tl.x+s,y:t.tl.y-o},bl:{x:t.tl.x-s,y:t.tl.y+o},br:{x:t.tl.x+o,y:t.tl.y+s}},t.tr.corner={tl:{x:t.tr.x-o,y:t.tr.y-s},tr:{x:t.tr.x+s,y:t.tr.y-o},br:{x:t.tr.x+o,y:t.tr.y+s},bl:{x:t.tr.x-s,y:t.tr.y+o}},t.bl.corner={tl:{x:t.bl.x-o,y:t.bl.y-s},bl:{x:t.bl.x-s,y:t.bl.y+o},br:{x:t.bl.x+o,y:t.bl.y+s},tr:{x:t.bl.x+s,y:t.bl.y-o}},t.br.corner={tr:{x:t.br.x+s,y:t.br.y-o},bl:{x:t.br.x-s,y:t.br.y+o},br:{x:t.br.x+o,y:t.br.y+s},tl:{x:t.br.x-o,y:t.br.y-s}},t.ml.corner={tl:{x:t.ml.x-o,y:t.ml.y-s},tr:{x:t.ml.x+s,y:t.ml.y-o},bl:{x:t.ml.x-s,y:t.ml.y+o},br:{x:t.ml.x+o,y:t.ml.y+s}},t.mt.corner={tl:{x:t.mt.x-o,y:t.mt.y-s},tr:{x:t.mt.x+s,y:t.mt.y-o},bl:{x:t.mt.x-s,y:t.mt.y+o},br:{x:t.mt.x+o,y:t.mt.y+s}},t.mr.corner={tl:{x:t.mr.x-o,y:t.mr.y-s},tr:{x:t.mr.x+s,y:t.mr.y-o},bl:{x:t.mr.x-s,y:t.mr.y+o},br:{x:t.mr.x+o,y:t.mr.y+s}},t.mb.corner={tl:{x:t.mb.x-o,y:t.mb.y-s},tr:{x:t.mb.x+s,y:t.mb.y-o},bl:{x:t.mb.x-s,y:t.mb.y+o},br:{x:t.mb.x+o,y:t.mb.y+s}},t.mtr.corner={tl:{x:t.mtr.x-o+u*this.rotatingPointOffset,y:t.mtr.y-s-a*this.rotatingPointOffset},tr:{x:t.mtr.x+s+u*this.rotatingPointOffset,y:t.mtr.y-o-a*this.rotatingPointOffset},bl:{x:t.mtr.x-s+u*this.rotatingPointOffset,y:t.mtr.y+o-a*this.rotatingPointOffset},br:{x:t.mtr.x+o+u*this.rotatingPointOffset,y:t.mtr.y+s-a*this.rotatingPointOffset}}},drawBorders:function(e){if(!this.hasBorders)return this;var t=this.padding,n=t*2,r=this.getViewportTransform();e.save(),e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=this.borderColor;var i=1/this._constrainScale(this.scaleX),s=1/this._constrainScale(this.scaleY);e.lineWidth=1/this.borderScaleFactor;var o=this.getWidth(),u=this.getHeight(),a=this.strokeWidth,f=this.strokeLineCap==="round"||this.strokeLineCap==="square",l=this.type==="line"&&this.width===0,c=this.type==="line"&&this.height===0,h=l||c,p=f&&c||!h,d=f&&l||!h;l?o=a/i:c&&(u=a/s),p&&(o+=a/i),d&&(u+=a/s);var v=fabric.util.transformPoint(new fabric.Point(o,u),r,!0),m=v.x,g=v.y;this.group&&(m*=this.group.scaleX,g*=this.group.scaleY),e.strokeRect(~~(-(m/2)-t)-.5,~~(-(g/2)-t)-.5,~~(m+n)+1,~~(g+n)+1);if(this.hasRotatingPoint&&this.isControlVisible("mtr")&&!this.get("lockRotation")&&this.hasControls){var y=(-g-t*2)/2;e.beginPath(),e.moveTo(0,y),e.lineTo(0,y-this.rotatingPointOffset),e.closePath(),e.stroke()}return e.restore(),this},drawControls:function(e){if(!this.hasControls)return this;var t=this.cornerSize,n=t/2,r=this.getViewportTransform(),i=this.strokeWidth,s=this.width,o=this.height,u=this.strokeLineCap==="round"||this.strokeLineCap==="square",a=this.type==="line"&&this.width===0,f=this.type==="line"&&this.height===0,l=a||f,c=u&&f||!l,h=u&&a||!l;a?s=i:f&&(o=i),c&&(s+=i),h&&(o+=i),s*=this.scaleX,o*=this.scaleY;var p=fabric.util.transformPoint(new fabric.Point(s,o),r,!0),d=p.x,v=p.y,m=-(d/2),g=-(v/2),y=this.padding,b=n,w=n-t,E=this.transparentCorners?"strokeRect":"fillRect";return e.save(),e.lineWidth=1,e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1,e.strokeStyle=e.fillStyle=this.cornerColor,this._drawControl("tl",e,E,m-b-y,g-b-y),this._drawControl("tr",e,E,m+d-b+y,g-b-y),this._drawControl("bl",e,E,m-b-y,g+v+w+y),this._drawControl("br",e,E,m+d+w+y,g+v+w+y),this.get("lockUniScaling")||(this._drawControl("mt",e,E,m+d/2-b,g-b-y),this._drawControl("mb",e,E,m+d/2-b,g+v+w+y),this._drawControl("mr",e,E,m+d+w+y,g+v/2-b),this._drawControl("ml",e,E,m-b-y,g+v/2-b)),this.hasRotatingPoint&&this._drawControl("mtr",e,E,m+d/2-b,g-this.rotatingPointOffset-this.cornerSize/2-y),e.restore(),this},_drawControl:function(e,n,r,i,s){var o=this.cornerSize;this.isControlVisible(e)&&(t()||this.transparentCorners||n.clearRect(i,s,o,o),n[r](i,s,o,o))},isControlVisible:function(e){return this._getControlsVisibility()[e]},setControlVisible:function(e,t){return this._getControlsVisibility()[e]=t,this},setControlsVisibility:function(e){e||(e={});for(var t in e)this.setControlVisible(t,e[t]);return this},_getControlsVisibility:function(){return this._controlsVisibility||(this._controlsVisibility={tl:!0,tr:!0,br:!0,bl:!0,ml:!0,mt:!0,mr:!0,mb:!0,mtr:!0}),this._controlsVisibility}})}(),fabric.util.object.extend(fabric.StaticCanvas.prototype,{FX_DURATION:500,fxCenterObjectH:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("left"),endValue:this.getCenter().left,duration:this.FX_DURATION,onChange:function(t){e.set("left",t),s.renderAll(),i()},onComplete:function(){e.setCoords(),r()}}),this},fxCenterObjectV:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("top"),endValue:this.getCenter().top,duration:this.FX_DURATION,onChange:function(t){e.set("top",t),s.renderAll(),i()},onComplete:function(){e.setCoords(),r()}}),this},fxRemove:function(e,t){t=t||{};var n=function(){},r=t.onComplete||n,i=t.onChange||n,s=this;return fabric.util.animate({startValue:e.get("opacity"),endValue:0,duration:this.FX_DURATION,onStart:function(){e.set("active",!1)},onChange:function(t){e.set("opacity",t),s.renderAll(),i()},onComplete:function(){s.remove(e),r()}}),this}}),fabric.util.object.extend(fabric.Object.prototype,{animate:function(){if(arguments[0]&&typeof arguments[0]=="object"){var e=[],t,n;for(t in arguments[0])e.push(t);for(var r=0,i=e.length;r<i;r++)t=e[r],n=r!==i-1,this._animate(t,arguments[0][t],arguments[1],n)}else this._animate.apply(this,arguments);return this},_animate:function(e,t,n,r){var i=this,s;t=t.toString(),n?n=fabric.util.object.clone(n):n={},~e.indexOf(".")&&(s=e.split("."));var o=s?this.get(s[0])[s[1]]:this.get(e);"from"in n||(n.from=o),~t.indexOf("=")?t=o+parseFloat(t.replace("=","")):t=parseFloat(t),fabric.util.animate({startValue:n.from,endValue:t,byValue:n.by,easing:n.easing,duration:n.duration,abort:n.abort&&function(){return n.abort.call(i)},onChange:function(t){s?i[s[0]][s[1]]=t:i.set(e,t);if(r)return;n.onChange&&n.onChange()},onComplete:function(){if(r)return;i.setCoords(),n.onComplete&&n.onComplete()}})}}),function(e){"use strict";function s(e,t){var n=e.origin,r=e.axis1,i=e.axis2,s=e.dimension,o=t.nearest,u=t.center,a=t.farthest;return function(){switch(this.get(n)){case o:return Math.min(this.get(r),this.get(i));case u:return Math.min(this.get(r),this.get(i))+.5*this.get(s);case a:return Math.max(this.get(r),this.get(i))}}}var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r={x1:1,x2:1,y1:1,y2:1},i=t.StaticCanvas.supports("setLineDash");if(t.Line){t.warn("fabric.Line is already defined");return}t.Line=t.util.createClass(t.Object,{type:"line",x1:0,y1:0,x2:0,y2:0,initialize:function(e,t){t=t||{},e||(e=[0,0,0,0]),this.callSuper("initialize",t),this.set("x1",e[0]),this.set("y1",e[1]),this.set("x2",e[2]),this.set("y2",e[3]
),this._setWidthHeight(t)},_setWidthHeight:function(e){e||(e={}),this.width=Math.abs(this.x2-this.x1),this.height=Math.abs(this.y2-this.y1),this.left="left"in e?e.left:this._getLeftToOriginX(),this.top="top"in e?e.top:this._getTopToOriginY()},_set:function(e,t){return this.callSuper("_set",e,t),typeof r[e]!="undefined"&&this._setWidthHeight(),this},_getLeftToOriginX:s({origin:"originX",axis1:"x1",axis2:"x2",dimension:"width"},{nearest:"left",center:"center",farthest:"right"}),_getTopToOriginY:s({origin:"originY",axis1:"y1",axis2:"y2",dimension:"height"},{nearest:"top",center:"center",farthest:"bottom"}),_render:function(e,t){e.beginPath();if(t){var n=this.getCenterPoint();e.translate(n.x-this.strokeWidth/2,n.y-this.strokeWidth/2)}if(!this.strokeDashArray||this.strokeDashArray&&i){var r=this.calcLinePoints();e.moveTo(r.x1,r.y1),e.lineTo(r.x2,r.y2)}e.lineWidth=this.strokeWidth;var s=e.strokeStyle;e.strokeStyle=this.stroke||e.fillStyle,this.stroke&&this._renderStroke(e),e.strokeStyle=s},_renderDashedStroke:function(e){var n=this.calcLinePoints();e.beginPath(),t.util.drawDashedLine(e,n.x1,n.y1,n.x2,n.y2,this.strokeDashArray),e.closePath()},toObject:function(e){return n(this.callSuper("toObject",e),this.calcLinePoints())},calcLinePoints:function(){var e=this.x1<=this.x2?-1:1,t=this.y1<=this.y2?-1:1,n=e*this.width*.5,r=t*this.height*.5,i=e*this.width*-0.5,s=t*this.height*-0.5;return{x1:n,x2:i,y1:r,y2:s}},toSVG:function(e){var t=this._createBaseSVGMarkup(),n={x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2};if(!this.group||this.group.type!=="path-group")n=this.calcLinePoints();return t.push("<line ",'x1="',n.x1,'" y1="',n.y1,'" x2="',n.x2,'" y2="',n.y2,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Line.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),t.Line.fromElement=function(e,r){var i=t.parseAttributes(e,t.Line.ATTRIBUTE_NAMES),s=[i.x1||0,i.y1||0,i.x2||0,i.y2||0];return new t.Line(s,n(i,r))},t.Line.fromObject=function(e){var n=[e.x1,e.y1,e.x2,e.y2];return new t.Line(n,e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";function i(e){return"radius"in e&&e.radius>0}var t=e.fabric||(e.fabric={}),n=Math.PI,r=t.util.object.extend;if(t.Circle){t.warn("fabric.Circle is already defined.");return}t.Circle=t.util.createClass(t.Object,{type:"circle",radius:0,startAngle:0,endAngle:n*2,initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("radius",e.radius||0),this.startAngle=e.startAngle||this.startAngle,this.endAngle=e.endAngle||this.endAngle},_set:function(e,t){return this.callSuper("_set",e,t),e==="radius"&&this.setRadius(t),this},toObject:function(e){return r(this.callSuper("toObject",e),{radius:this.get("radius"),startAngle:this.startAngle,endAngle:this.endAngle})},toSVG:function(e){var t=this._createBaseSVGMarkup(),r=0,i=0,s=(this.endAngle-this.startAngle)%(2*n);if(s===0)this.group&&this.group.type==="path-group"&&(r=this.left+this.radius,i=this.top+this.radius),t.push("<circle ",'cx="'+r+'" cy="'+i+'" ','r="',this.radius,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n');else{var o=Math.cos(this.startAngle)*this.radius,u=Math.sin(this.startAngle)*this.radius,a=Math.cos(this.endAngle)*this.radius,f=Math.sin(this.endAngle)*this.radius,l=s>n?"1":"0";t.push('<path d="M '+o+" "+u," A "+this.radius+" "+this.radius," 0 ",+l+" 1"," "+a+" "+f,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n')}return e?e(t.join("")):t.join("")},_render:function(e,t){e.beginPath(),e.arc(t?this.left+this.radius:0,t?this.top+this.radius:0,this.radius,this.startAngle,this.endAngle,!1),this._renderFill(e),this._renderStroke(e)},getRadiusX:function(){return this.get("radius")*this.get("scaleX")},getRadiusY:function(){return this.get("radius")*this.get("scaleY")},setRadius:function(e){this.radius=e,this.set("width",e*2).set("height",e*2)},complexity:function(){return 1}}),t.Circle.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),t.Circle.fromElement=function(e,n){n||(n={});var s=t.parseAttributes(e,t.Circle.ATTRIBUTE_NAMES);if(!i(s))throw new Error("value of `r` attribute is required and can not be negative");s.left=s.left||0,s.top=s.top||0;var o=new t.Circle(r(s,n));return o.left-=o.radius,o.top-=o.radius,o},t.Circle.fromObject=function(e){return new t.Circle(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Triangle){t.warn("fabric.Triangle is already defined");return}t.Triangle=t.util.createClass(t.Object,{type:"triangle",initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("width",e.width||100).set("height",e.height||100)},_render:function(e){var t=this.width/2,n=this.height/2;e.beginPath(),e.moveTo(-t,n),e.lineTo(0,-n),e.lineTo(t,n),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=this.width/2,r=this.height/2;e.beginPath(),t.util.drawDashedLine(e,-n,r,0,-r,this.strokeDashArray),t.util.drawDashedLine(e,0,-r,n,r,this.strokeDashArray),t.util.drawDashedLine(e,n,r,-n,r,this.strokeDashArray),e.closePath()},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=this.width/2,r=this.height/2,i=[-n+" "+r,"0 "+ -r,n+" "+r].join(",");return t.push("<polygon ",'points="',i,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),'"/>'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Triangle.fromObject=function(e){return new t.Triangle(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=Math.PI*2,r=t.util.object.extend;if(t.Ellipse){t.warn("fabric.Ellipse is already defined.");return}t.Ellipse=t.util.createClass(t.Object,{type:"ellipse",rx:0,ry:0,initialize:function(e){e=e||{},this.callSuper("initialize",e),this.set("rx",e.rx||0),this.set("ry",e.ry||0)},_set:function(e,t){this.callSuper("_set",e,t);switch(e){case"rx":this.rx=t,this.set("width",t*2);break;case"ry":this.ry=t,this.set("height",t*2)}return this},getRx:function(){return this.get("rx")*this.get("scaleX")},getRy:function(){return this.get("ry")*this.get("scaleY")},toObject:function(e){return r(this.callSuper("toObject",e),{rx:this.get("rx"),ry:this.get("ry")})},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=0,r=0;return this.group&&this.group.type==="path-group"&&(n=this.left+this.rx,r=this.top+this.ry),t.push("<ellipse ",'cx="',n,'" cy="',r,'" ','rx="',this.rx,'" ry="',this.ry,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},_render:function(e,t){e.beginPath(),e.save(),e.transform(1,0,0,this.ry/this.rx,0,0),e.arc(t?this.left+this.rx:0,t?(this.top+this.ry)*this.rx/this.ry:0,this.rx,0,n,!1),e.restore(),this._renderFill(e),this._renderStroke(e)},complexity:function(){return 1}}),t.Ellipse.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),t.Ellipse.fromElement=function(e,n){n||(n={});var i=t.parseAttributes(e,t.Ellipse.ATTRIBUTE_NAMES);i.left=i.left||0,i.top=i.top||0;var s=new t.Ellipse(r(i,n));return s.top-=s.ry,s.left-=s.rx,s},t.Ellipse.fromObject=function(e){return new t.Ellipse(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;if(t.Rect){console.warn("fabric.Rect is already defined");return}var r=t.Object.prototype.stateProperties.concat();r.push("rx","ry","x","y"),t.Rect=t.util.createClass(t.Object,{stateProperties:r,type:"rect",rx:0,ry:0,strokeDashArray:null,initialize:function(e){e=e||{},this.callSuper("initialize",e),this._initRxRy()},_initRxRy:function(){this.rx&&!this.ry?this.ry=this.rx:this.ry&&!this.rx&&(this.rx=this.ry)},_render:function(e,t){if(this.width===1&&this.height===1){e.fillRect(0,0,1,1);return}var n=this.rx?Math.min(this.rx,this.width/2):0,r=this.ry?Math.min(this.ry,this.height/2):0,i=this.width,s=this.height,o=t?this.left:-this.width/2,u=t?this.top:-this.height/2,a=n!==0||r!==0,f=.4477152502;e.beginPath(),e.moveTo(o+n,u),e.lineTo(o+i-n,u),a&&e.bezierCurveTo(o+i-f*n,u,o+i,u+f*r,o+i,u+r),e.lineTo(o+i,u+s-r),a&&e.bezierCurveTo(o+i,u+s-f*r,o+i-f*n,u+s,o+i-n,u+s),e.lineTo(o+n,u+s),a&&e.bezierCurveTo(o+f*n,u+s,o,u+s-f*r,o,u+s-r),e.lineTo(o,u+r),a&&e.bezierCurveTo(o,u+f*r,o+f*n,u,o+n,u),e.closePath(),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n=-this.width/2,r=-this.height/2,i=this.width,s=this.height;e.beginPath(),t.util.drawDashedLine(e,n,r,n+i,r,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r,n+i,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n+i,r+s,n,r+s,this.strokeDashArray),t.util.drawDashedLine(e,n,r+s,n,r,this.strokeDashArray),e.closePath()},toObject:function(e){var t=n(this.callSuper("toObject",e),{rx:this.get("rx")||0,ry:this.get("ry")||0});return this.includeDefaultValues||this._removeDefaultValues(t),t},toSVG:function(e){var t=this._createBaseSVGMarkup(),n=this.left,r=this.top;if(!this.group||this.group.type!=="path-group")n=-this.width/2,r=-this.height/2;return t.push("<rect ",'x="',n,'" y="',r,'" rx="',this.get("rx"),'" ry="',this.get("ry"),'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'"/>\n'),e?e(t.join("")):t.join("")},complexity:function(){return 1}}),t.Rect.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),t.Rect.fromElement=function(e,r){if(!e)return null;r=r||{};var i=t.parseAttributes(e,t.Rect.ATTRIBUTE_NAMES);return i.left=i.left||0,i.top=i.top||0,new t.Rect(n(r?t.util.object.clone(r):{},i))},t.Rect.fromObject=function(e){return new t.Rect(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});if(t.Polyline){t.warn("fabric.Polyline is already defined");return}t.Polyline=t.util.createClass(t.Object,{type:"polyline",points:null,minX:0,minY:0,initialize:function(e,n){return t.Polygon.prototype.initialize.call(this,e,n)},_calcDimensions:function(){return t.Polygon.prototype._calcDimensions.call(this)},_applyPointOffset:function(){return t.Polygon.prototype._applyPointOffset.call(this)},toObject:function(e){return t.Polygon.prototype.toObject.call(this,e)},toSVG:function(e){return t.Polygon.prototype.toSVG.call(this,e)},_render:function(e){t.Polygon.prototype.commonRender.call(this,e),this._renderFill(e),this._renderStroke(e)},_renderDashedStroke:function(e){var n,r;e.beginPath();for(var i=0,s=this.points.length;i<s;i++)n=this.points[i],r=this.points[i+1]||n,t.util.drawDashedLine(e,n.x,n.y,r.x,r.y,this.strokeDashArray)},complexity:function(){return this.get("points").length}}),t.Polyline.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polyline.fromElement=function(e,n){if(!e)return null;n||(n={});var r=t.parsePointsAttribute(e.getAttribute("points")),i=t.parseAttributes(e,t.Polyline.ATTRIBUTE_NAMES);return r===null?null:new t.Polyline(r,t.util.object.extend(i,n))},t.Polyline.fromObject=function(e){var n=e.points;return new t.Polyline(n,e,!0)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.toFixed;if(t.Polygon){t.warn("fabric.Polygon is already defined");return}t.Polygon=t.util.createClass(t.Object,{type:"polygon",points:null,minX:0,minY:0,initialize:function(e,t){t=t||{},this.points=e,this.callSuper("initialize",t),this._calcDimensions(),"top"in t||(this.top=this.minY),"left"in t||(this.left=this.minX)},_calcDimensions:function(){var e=this.points,t=r(e,"x"),n=r(e,"y"),s=i(e,"x"),o=i(e,"y");this.width=s-t||1,this.height=o-n||1,this.minX=t,this.minY=n},_applyPointOffset:function(){this.points.forEach(function(e){e.x-=this.minX+this.width/2,e.y-=this.minY+this.height/2},this)},toObject:function(e){return n(this.callSuper("toObject",e),{points:this.points.concat()})},toSVG:function(e){var t=[],n=this._createBaseSVGMarkup();for(var r=0,i=this.points.length;r<i;r++)t.push(s(this.points[r].x,2),",",s(this.points[r].y,2)," ");return n.push("<",this.type," ",'points="',t.join(""),'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform()," ",this.getSvgTransformMatrix(),'"/>\n'),e?e(n.join("")):n.join("")},_render:function(e){this.commonRender(e),this._renderFill(e);if(this.stroke||this.strokeDashArray)e.closePath(),this._renderStroke(e)},commonRender:function(e){var t;e.beginPath(),this._applyPointOffset&&((!this.group||this.group.type!=="path-group")&&this._applyPointOffset(),this._applyPointOffset=null),e.moveTo(this.points[0].x,this.points[0].y);for(var n=0,r=this.points.length;n<r;n++)t=this.points[n],e.lineTo(t.x,t.y)},_renderDashedStroke:function(e){t.Polyline.prototype._renderDashedStroke.call(this,e),e.closePath()},complexity:function(){return this.points.length}}),t.Polygon.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(),t.Polygon.fromElement=function(e,r){if(!e)return null;r||(r={});var i=t.parsePointsAttribute(e.getAttribute("points")),s=t.parseAttributes(e,t.Polygon.ATTRIBUTE_NAMES);return i===null?null:new t.Polygon(i,n(s,r))},t.Polygon.fromObject=function(e){return new t.Polygon(e.points,e,!0)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.array.min,r=t.util.array.max,i=t.util.object.extend,s=Object.prototype.toString,o=t.util.drawArc,u={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},a={m:"l",M:"L"};if(t.Path){t.warn("fabric.Path is already defined");return}t.Path=t.util.createClass(t.Object,{type:"path",path:null,minX:0,minY:0,initialize:function(e,t){t=t||{},this.setOptions(t);if(!e)throw new Error("`path` argument is required");var n=s.call(e)==="[object Array]";this.path=n?e:e.match&&e.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);if(!this.path)return;n||(this.path=this._parsePath());var r=this._parseDimensions();this.minX=r.left,this.minY=r.top,this.width=r.width,this.height=r.height,r.left+=this.originX==="center"?this.width/2:this.originX==="right"?this.width:0,r.top+=this.originY==="center"?this.height/2:this.originY==="bottom"?this.height:0,this.top=this.top||r.top,this.left=this.left||r.left,this.pathOffset=this.pathOffset||{x:this.minX+this.width/2,y:this.minY+this.height/2},t.sourcePath&&this.setSourcePath(t.sourcePath)},_render:function(e){var t,n=null,r=0,i=0,s=0,u=0,a=0,f=0,l,c,h,p,d=-this.pathOffset.x,v=-this.pathOffset.y;this.group&&this.group.type==="path-group"&&(d=0,v=0),e.beginPath();for(var m=0,g=this.path.length;m<g;++m){t=this.path[m];switch(t[0]){case"l":s+=t[1],u+=t[2],e.lineTo(s+d,u+v);break;case"L":s=t[1],u=t[2],e.lineTo(s+d,u+v);break;case"h":s+=t[1],e.lineTo(s+d,u+v);break;case"H":s=t[1],e.lineTo(s+d,u+v);break;case"v":u+=t[1],e.lineTo(s+d,u+v);break;case"V":u=t[1],e.lineTo(s+d,u+v);break;case"m":s+=t[1],u+=t[2],r=s,i=u,e.moveTo(s+d,u+v);break;case"M":s=t[1],u=t[2],r=s,i=u,e.moveTo(s+d,u+v);break;case"c":l=s+t[5],c=u+t[6],a=s+t[3],f=u+t[4],e.bezierCurveTo(s+t[1]+d,u+t[2]+v,a+d,f+v,l+d,c+v),s=l,u=c;break;case"C":s=t[5],u=t[6],a=t[3],f=t[4],e.bezierCurveTo(t[1]+d,t[2]+v,a+d,f+v,s+d,u+v);break;case"s":l=s+t[3],c=u+t[4],a=a?2*s-a:s,f=f?2*u-f:u,e.bezierCurveTo(a+d,f+v,s+t[1]+d,u+t[2]+v,l+d,c+v),a=s+t[1],f=u+t[2],s=l,u=c;break;case"S":l=t[3],c=t[4],a=2*s-a,f=2*u-f,e.bezierCurveTo(a+d,f+v,t[1]+d,t[2]+v,l+d,c+v),s=l,u=c,a=t[1],f=t[2];break;case"q":l=s+t[3],c=u+t[4],a=s+t[1],f=u+t[2],e.quadraticCurveTo(a+d,f+v,l+d,c+v),s=l,u=c;break;case"Q":l=t[3],c=t[4],e.quadraticCurveTo(t[1]+d,t[2]+v,l+d,c+v),s=l,u=c,a=t[1],f=t[2];break;case"t":l=s+t[1],c=u+t[2],n[0].match(/[QqTt]/)===null?(a=s,f=u):n[0]==="t"?(a=2*s-h,f=2*u-p):n[0]==="q"&&(a=2*s-a,f=2*u-f),h=a,p=f,e.quadraticCurveTo(a+d,f+v,l+d,c+v),s=l,u=c,a=s+t[1],f=u+t[2];break;case"T":l=t[1],c=t[2],a=2*s-a,f=2*u-f,e.quadraticCurveTo(a+d,f+v,l+d,c+v),s=l,u=c;break;case"a":o(e,s+d,u+v,[t[1],t[2],t[3],t[4],t[5],t[6]+s+d,t[7]+u+v]),s+=t[6],u+=t[7];break;case"A":o(e,s+d,u+v,[t[1],t[2],t[3],t[4],t[5],t[6]+d,t[7]+v]),s=t[6],u=t[7];break;case"z":case"Z":s=r,u=i,e.closePath()}n=t}this._renderFill(e),this._renderStroke(e)},render:function(e,n){if(!this.visible)return;e.save(),this._setupCompositeOperation(e),n||this.transform(e),this._setStrokeStyles(e),this._setFillStyles(e),this.group&&this.group.type==="path-group"&&e.translate(-this.group.width/2,-this.group.height/2),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),this._setOpacity(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e),this._render(e,n),this.clipTo&&e.restore(),this._removeShadow(e),this._restoreCompositeOperation(e),e.restore()},toString:function(){return"#<fabric.Path ("+this.complexity()+'): { "top": '+this.top+', "left": '+this.left+" }>"},toObject:function(e){var t=i(this.callSuper("toObject",e),{path:this.path.map(function(e){return e.slice()}),pathOffset:this.pathOffset});return this.sourcePath&&(t.sourcePath=this.sourcePath),this.transformMatrix&&(t.transformMatrix=this.transformMatrix),t},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.path=this.sourcePath),delete t.sourcePath,t},toSVG:function(e){var t=[],n=this._createBaseSVGMarkup(),r="";for(var i=0,s=this.path.length;i<s;i++)t.push(this.path[i].join(" "));var o=t.join(" ");if(!this.group||this.group.type!=="path-group")r="translate("+ -this.pathOffset.x+", "+ -this.pathOffset.y+")";return n.push("<path ",'d="',o,'" style="',this.getSvgStyles(),'" transform="',this.getSvgTransform(),r,this.getSvgTransformMatrix(),'" stroke-linecap="round" ',"/>\n"),e?e(n.join("")):n.join("")},complexity:function(){return this.path.length},_parsePath:function(){var e=[],t=[],n,r,i=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/ig,s,o;for(var f=0,l,c=this.path.length;f<c;f++){n=this.path[f],o=n.slice(1).trim(),t.length=0;while(s=i.exec(o))t.push(s[0]);l=[n.charAt(0)];for(var h=0,p=t.length;h<p;h++)r=parseFloat(t[h]),isNaN(r)||l.push(r);var d=l[0],v=u[d.toLowerCase()],m=a[d]||d;if(l.length-1>v)for(var g=1,y=l.length;g<y;g+=v)e.push([d].concat(l.slice(g,g+v))),d=m;else e.push(l)}return e},_parseDimensions:function(){var e=[],i=[],s,o=null,u=0,a=0,f=0,l=0,c=0,h=0,p,d,v,m,g;for(var y=0,b=this.path.length;y<b;++y){s=this.path[y];switch(s[0]){case"l":f+=s[1],l+=s[2],g=[];break;case"L":f=s[1],l=s[2],g=[];break;case"h":f+=s[1],g=[];break;case"H":f=s[1],g=[];break;case"v":l+=s[1],g=[];break;case"V":l=s[1],g=[];break;case"m":f+=s[1],l+=s[2],u=f,a=l,g=[];break;case"M":f=s[1],l=s[2],u=f,a=l,g=[];break;case"c":p=f+s[5],d=l+s[6],c=f+s[3],h=l+s[4],g=t.util.getBoundsOfCurve(f,l,f+s[1],l+s[2],c,h,p,d),f=p,l=d;break;case"C":f=s[5],l=s[6],c=s[3],h=s[4],g=t.util.getBoundsOfCurve(f,l,s[1],s[2],c,h,f,l);break;case"s":p=f+s[3],d=l+s[4],c=c?2*f-c:f,h=h?2*l-h:l,g=t.util.getBoundsOfCurve(f,l,c,h,f+s[1],l+s[2],p,d),c=f+s[1],h=l+s[2],f=p,l=d;break;case"S":p=s[3],d=s[4],c=2*f-c,h=2*l-h,g=t.util.getBoundsOfCurve(f,l,c,h,s[1],s[2],p,d),f=p,l=d,c=s[1],h=s[2];break;case"q":p=f+s[3],d=l+s[4],c=f+s[1],h=l+s[2],g=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d;break;case"Q":c=s[1],h=s[2],g=t.util.getBoundsOfCurve(f,l,c,h,c,h,s[3],s[4]),f=s[3],l=s[4];break;case"t":p=f+s[1],d=l+s[2],o[0].match(/[QqTt]/)===null?(c=f,h=l):o[0]==="t"?(c=2*f-v,h=2*l-m):o[0]==="q"&&(c=2*f-c,h=2*l-h),v=c,m=h,g=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d,c=f+s[1],h=l+s[2];break;case"T":p=s[1],d=s[2],c=2*f-c,h=2*l-h,g=t.util.getBoundsOfCurve(f,l,c,h,c,h,p,d),f=p,l=d;break;case"a":g=t.util.getBoundsOfArc(f,l,s[1],s[2],s[3],s[4],s[5],s[6]+f,s[7]+l),f+=s[6],l+=s[7];break;case"A":g=t.util.getBoundsOfArc(f,l,s[1],s[2],s[3],s[4],s[5],s[6],s[7]),f=s[6],l=s[7];break;case"z":case"Z":f=u,l=a}o=s,g.forEach(function(t){e.push(t.x),i.push(t.y)}),e.push(f),i.push(l)}var w=n(e),E=n(i),S=r(e),x=r(i),T=S-w,N=x-E,C={left:w,top:E,width:T,height:N};return C}}),t.Path.fromObject=function(e,n){typeof e.path=="string"?t.loadSVGFromURL(e.path,function(r){var i=r[0],s=e.path;delete e.path,t.util.object.extend(i,e),i.setSourcePath(s),n(i)}):n(new t.Path(e.path,e))},t.Path.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat(["d"]),t.Path.fromElement=function(e,n,r){var s=t.parseAttributes(e,t.Path.ATTRIBUTE_NAMES);n&&n(new t.Path(s.d,i(s,r)))},t.Path.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.invoke,i=t.Object.prototype.toObject;if(t.PathGroup){t.warn("fabric.PathGroup is already defined");return}t.PathGroup=t.util.createClass(t.Path,{type:"path-group",fill:"",initialize:function(e,t){t=t||{},this.paths=e||[];for(var n=this.paths.length;n--;)this.paths[n].group=this;this.setOptions(t),t.widthAttr&&(this.scaleX=t.widthAttr/t.width),t.heightAttr&&(this.scaleY=t.heightAttr/t.height),this.setCoords(),t.sourcePath&&this.setSourcePath(t.sourcePath)},render:function(e){if(!this.visible)return;e.save();var n=this.transformMatrix;n&&e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e),this._setShadow(e),this.clipTo&&t.util.clipContext(this,e);for(var r=0,i=this.paths.length;r<i;++r)this.paths[r].render(e,!0);this.clipTo&&e.restore(),this._removeShadow(e),e.restore()},_set:function(e,t){if(e==="fill"&&t&&this.isSameColor()){var n=this.paths.length;while(n--)this.paths[n]._set(e,t)}return this.callSuper("_set",e,t)},toObject:function(e){var t=n(i.call(this,e),{paths:r(this.getObjects(),"toObject",e)});return this.sourcePath&&(t.sourcePath=this.sourcePath),t},toDatalessObject:function(e){var t=this.toObject(e);return this.sourcePath&&(t.paths=this.sourcePath),t},toSVG:function(e){var t=this.getObjects(),n="translate("+this.left+" "+this.top+")",r=["<g ",'style="',this.getSvgStyles(),'" ','transform="',n,this.getSvgTransform(),'" ',">\n"];for(var i=0,s=t.length;i<s;i++)r.push(t[i].toSVG(e));return r.push("</g>\n"),e?e(r.join("")):r.join("")},toString:function(){return"#<fabric.PathGroup ("+this.complexity()+"): { top: "+this.top+", left: "+this.left+" }>"},isSameColor:function(){var e=(this.getObjects()[0].get("fill")||"").toLowerCase();return this.getObjects().every(function(t){return(t.get("fill")||"").toLowerCase()===e})},complexity:function(){return this.paths.reduce(function(e,t){return e+(t&&t.complexity?t.complexity():0)},0)},getObjects:function(){return this.paths}}),t.PathGroup.fromObject=function(e,n){typeof e.paths=="string"?t.loadSVGFromURL(e.paths,function(r){var i=e.paths;delete e.paths;var s=t.util.groupSVGElements(r,e,i);n(s)}):t.util.enlivenObjects(e.paths,function(r){delete e.paths,n(new t.PathGroup(r,e))})},t.PathGroup.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.array.min,i=t.util.array.max,s=t.util.array.invoke;if(t.Group)return;var o={lockMovementX:!0,lockMovementY:!0,lockRotation:!0,lockScalingX:!0,lockScalingY:!0,lockUniScaling:!0};t.Group=t.util.createClass(t.Object,t.Collection,{type:"group",initialize:function(e,t){t=t||{},this._objects=e||[];for(var r=this._objects.length;r--;)this._objects[r].group=this;this.originalState={},this.callSuper("initialize"),t.originX&&(this.originX=t.originX),t.originY&&(this.originY=t.originY),this._calcBounds(),this._updateObjectsCoords(),t&&n(this,t),this.setCoords(),this.saveCoords()},_updateObjectsCoords:function(){this.forEachObject(this._updateObjectCoords,this)},_updateObjectCoords:function(e){var t=e.getLeft(),n=e.getTop(),r=this.getCenterPoint();e.set({originalLeft:t,originalTop:n,left:t-r.x,top:n-r.y}),e.setCoords(),e.__origHasControls=e.hasControls,e.hasControls=!1},toString:function(){return"#<fabric.Group: ("+this.complexity()+")>"},addWithUpdate:function(e){return this._restoreObjectsState(),e&&(this._objects.push(e),e.group=this),this.forEachObject(this._setObjectActive,this),this._calcBounds(),this._updateObjectsCoords(),this},_setObjectActive:function(e){e.set("active",!0),e.group=this},removeWithUpdate:function(e){return this._moveFlippedObject(e),this._restoreObjectsState(),this.forEachObject(this._setObjectActive,this),this.remove(e),this._calcBounds(),this._updateObjectsCoords(),this},_onObjectAdded:function(e){e.group=this},_onObjectRemoved:function(e){delete e.group,e.set("active",!1)},delegatedProperties:{fill:!0,opacity:!0,fontFamily:!0,fontWeight:!0,fontSize:!0,fontStyle:!0,lineHeight:!0,textDecoration:!0,textAlign:!0,backgroundColor:!0},_set:function(e,t){if(e in this.delegatedProperties){var n=this._objects.length;this[e]=t;while(n--)this._objects[n].set(e,t)}else this[e]=t},toObject:function(e){return n(this.callSuper("toObject",e),{objects:s(this._objects,"toObject",e)})},render:function(e){if(!this.visible)return;e.save(),this.clipTo&&t.util.clipContext(this,e);for(var n=0,r=this._objects.length;n<r;n++)this._renderObject(this._objects[n],e);this.clipTo&&e.restore(),e.restore()},_renderControls:function(e,t){this.callSuper("_renderControls",e,t);for(var n=0,r=this._objects.length;n<r;n++)this._objects[n]._renderControls(e)},_renderObject:function(e,t){var n=e.hasRotatingPoint;if(!e.visible)return;e.hasRotatingPoint=!1,e.render(t),e.hasRotatingPoint=n},_restoreObjectsState:function(){return this._objects.forEach(this._restoreObjectState,this),this},_moveFlippedObject:function(e){var t=e.get("originX"),n=e.get("originY"),r=e.getCenterPoint();e.set({originX:"center",originY:"center",left:r.x,top:r.y}),this._toggleFlipping(e);var i=e.getPointByOrigin(t,n);return e.set({originX:t,originY:n,left:i.x,top:i.y}),this},_toggleFlipping:function(e){this.flipX&&(e.toggle("flipX"),e.set("left",-e.get("left")),e.setAngle(-e.getAngle())),this.flipY&&(e.toggle("flipY"),e.set("top",-e.get("top")),e.setAngle(-e.getAngle()))},_restoreObjectState:function(e){return this._setObjectPosition(e),e.setCoords(),e.hasControls=e.__origHasControls,delete e.__origHasControls,e.set("active",!1),e.setCoords(),delete e.group,this},_setObjectPosition:function(e){var t=this.getCenterPoint(),n=this._getRotatedLeftTop(e);e.set({angle:e.getAngle()+this.getAngle(),left:t.x+n.left,top:t.y+n.top,scaleX:e.get("scaleX")*this.get("scaleX"),scaleY:e.get("scaleY")*this.get("scaleY")})},_getRotatedLeftTop:function(e){var t=this.getAngle()*(Math.PI/180);return{left:-Math.sin(t)*e.getTop()*this.get("scaleY")+Math.cos(t)*e.getLeft()*this.get("scaleX"),top:Math.cos(t)*e.getTop()*this.get("scaleY")+Math.sin(t)*e.getLeft()*this.get("scaleX")}},destroy:function(){return this._objects.forEach(this._moveFlippedObject,this),this._restoreObjectsState()},saveCoords:function(){return this._originalLeft=this.get("left"),this._originalTop=this.get("top"),this},hasMoved:function(){return this._originalLeft!==this.get("left")||this._originalTop!==this.get("top")},setObjectsCoords:function(){return this.forEachObject(function(e){e.setCoords()}),this},_calcBounds:function(e){var t=[],n=[],r;for(var i=0,s=this._objects.length;i<s;++i){r=this._objects[i],r.setCoords();for(var o in r.oCoords)t.push(r.oCoords[o].x),n.push(r.oCoords[o].y)}this.set(this._getBounds(t,n,e))},_getBounds:function(e,n,s){var o=t.util.invertTransform(this.getViewportTransform()),u=t.util.transformPoint(new t.Point(r(e),r(n)),o),a=t.util.transformPoint(new t.Point(i(e),i(n)),o),f={width:a.x-u.x||0,height:a.y-u.y||0};return s||(f.left=u.x||0,f.top=u.y||0,this.originX==="center"&&(f.left+=f.width/2),this.originX==="right"&&(f.left+=f.width),this.originY==="center"&&(f.top+=f.height/2),this.originY==="bottom"&&(f.top+=f.height)),f},toSVG:function(e){var t=["<g ",'transform="',this.getSvgTransform(),'">\n'];for(var n=0,r=this._objects.length;n<r;n++)t.push(this._objects[n].toSVG(e));return t.push("</g>\n"),e?e(t.join("")):t.join("")},get:function(e){if(e in o){if(this[e])return this[e];for(var t=0,n=this._objects.length;t<n;t++)if(this._objects[t][e])return!0;return!1}return e in this.delegatedProperties?this._objects[0]&&this._objects[0].get(e):this[e]}}),t.Group.fromObject=function(e,n){t.util.enlivenObjects(e.objects,function(r){delete e.objects,n&&n(new t.Group(r,e))})},t.Group.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=fabric.util.object.extend;e.fabric||(e.fabric={});if(e.fabric.Image){fabric.warn("fabric.Image is already defined.");return}fabric.Image=fabric.util.createClass(fabric.Object,{type:"image",crossOrigin:"",alignX:"none",alignY:"none",meetOrSlice:"meet",_lastScaleX:1,_lastScaleY:1,initialize:function(e,t){t||(t={}),this.filters=[],this.resizeFilters=[],this.callSuper("initialize",t),this._initElement(e,t),this._initConfig(t),t.filters&&(this.filters=t.filters,this.applyFilters())},getElement:function(){return this._element},setElement:function(e,t,n){return this._element=e,this._originalElement=e,this._initConfig(n),this.filters.length!==0?this.applyFilters(t):t&&t(),this},setCrossOrigin:function(e){return this.crossOrigin=e,this._element.crossOrigin=e,this},getOriginalSize:function(){var e=this.getElement();return{width:e.width,height:e.height}},_stroke:function(e){e.save(),this._setStrokeStyles(e),e.beginPath(),e.strokeRect(-this.width/2,-this.height/2,this.width,this.height),e.closePath(),e.restore()},_renderDashedStroke:function(e){var t=-this.width/2,n=-this.height/2,r=this.width,i=this.height;e.save(),this._setStrokeStyles(e),e.beginPath(),fabric.util.drawDashedLine(e,t,n,t+r,n,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n,t+r,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t+r,n+i,t,n+i,this.strokeDashArray),fabric.util.drawDashedLine(e,t,n+i,t,n,this.strokeDashArray),e.closePath(),e.restore()},toObject:function(e){return t(this.callSuper("toObject",e),{src:this._originalElement.src||this._originalElement._src,filters:this.filters.map(function(e){return e&&e.toObject()}),crossOrigin:this.crossOrigin,alignX:this.alignX,alignY:this.alignY,meetOrSlice:this.meetOrSlice})},toSVG:function(e){var t=[],n=-this.width/2,r=-this.height/2,i="none";this.group&&this.group.type==="path-group"&&(n=this.left,r=this.top),this.alignX!=="none"&&this.alignY!=="none"&&(i="x"+this.alignX+"Y"+this.alignY+" "+this.meetOrSlice),t.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n','<image xlink:href="',this.getSvgSrc(),'" x="',n,'" y="',r,'" style="',this.getSvgStyles(),'" width="',this.width,'" height="',this.height,'" preserveAspectRatio="',i,'"',"></image>\n");if(this.stroke||this.strokeDashArray){var s=this.fill;this.fill=null,t.push("<rect ",'x="',n,'" y="',r,'" width="',this.width,'" height="',this.height,'" style="',this.getSvgStyles(),'"/>\n'),this.fill=s}return t.push("</g>\n"),e?e(t.join("")):t.join("")},getSrc:function(){if(this.getElement())return this.getElement().src||this.getElement()._src},setSrc:function(e,t,n){fabric.util.loadImage(e,function(e){return this.setElement(e,t,n)},this,n&&n.crossOrigin)},toString:function(){return'#<fabric.Image: { src: "'+this.getSrc()+'" }>'},clone:function(e,t){this.constructor.fromObject(this.toObject(t),e)},applyFilters:function(e,t,n,r){t=t||this.filters,n=n||this._originalElement;if(!n)return;var i=n,s=fabric.util.createCanvasElement(),o=fabric.util.createImage(),u=this;return s.width=i.width,s.height=i.height,s.getContext("2d").drawImage(i,0,0,i.width,i.height),t.length===0?(this._element=n,e&&e(),s):(t.forEach(function(e){e&&e.applyTo(s,e.scaleX||u.scaleX,e.scaleY||u.scaleY),!r&&e.type==="Resize"&&(u.width*=e.scaleX,u.height*=e.scaleY)}),o.width=s.width,o.height=s.height,fabric.isLikelyNode?(o.src=s.toBuffer(undefined,fabric.Image.pngCompression),u._element=o,!r&&(u._filteredEl=o),e&&e()):(o.onload=function(){u._element=o,!r&&(u._filteredEl=o),e&&e(),o.onload=s=i=null},o.src=s.toDataURL("image/png")),s)},_render:function(e,t){var n,r,i=this._findMargins(),s;n=t?this.left:-this.width/2,r=t?this.top:-this.height/2,this.meetOrSlice==="slice"&&(e.beginPath(),e.rect(n,r,this.width,this.height),e.clip()),this.isMoving===!1&&this.resizeFilters.length&&this._needsResize()?(this._lastScaleX=this.scaleX,this._lastScaleY=this.scaleY,s=this.applyFilters(null,this.resizeFilters,this._filteredEl||this._originalElement,!1)):s=this._element,s&&e.drawImage(s,n+i.marginX,r+i.marginY,i.width,i.height),this._renderStroke(e)},_needsResize:function(){return this.scaleX!==this._lastScaleX||this.scaleY!==this._lastScaleY},_findMargins:function(){var e=this.width,t=this.height,n,r,i=0,s=0;if(this.alignX!=="none"||this.alignY!=="none")n=[this.width/this._element.width,this.height/this._element.height],r=this.meetOrSlice==="meet"?Math.min.apply(null,n):Math.max.apply(null,n),e=this._element.width*r,t=this._element.height*r,this.alignX==="Mid"&&(i=(this.width-e)/2),this.alignX==="Max"&&(i=this.width-e),this.alignY==="Mid"&&(s=(this.height-t)/2),this.alignY==="Max"&&(s=this.height-
t);return{width:e,height:t,marginX:i,marginY:s}},_resetWidthHeight:function(){var e=this.getElement();this.set("width",e.width),this.set("height",e.height)},_initElement:function(e){this.setElement(fabric.util.getById(e)),fabric.util.addClass(this.getElement(),fabric.Image.CSS_CANVAS)},_initConfig:function(e){e||(e={}),this.setOptions(e),this._setWidthHeight(e),this._element&&this.crossOrigin&&(this._element.crossOrigin=this.crossOrigin)},_initFilters:function(e,t){e.filters&&e.filters.length?fabric.util.enlivenObjects(e.filters,function(e){t&&t(e)},"fabric.Image.filters"):t&&t()},_setWidthHeight:function(e){this.width="width"in e?e.width:this.getElement()?this.getElement().width||0:0,this.height="height"in e?e.height:this.getElement()?this.getElement().height||0:0},complexity:function(){return 1}}),fabric.Image.CSS_CANVAS="canvas-img",fabric.Image.prototype.getSvgSrc=fabric.Image.prototype.getSrc,fabric.Image.fromObject=function(e,t){fabric.util.loadImage(e.src,function(n){fabric.Image.prototype._initFilters.call(e,e,function(r){e.filters=r||[];var i=new fabric.Image(n,e);t&&t(i)})},null,e.crossOrigin)},fabric.Image.fromURL=function(e,t,n){fabric.util.loadImage(e,function(e){t(new fabric.Image(e,n))},null,n&&n.crossOrigin)},fabric.Image.ATTRIBUTE_NAMES=fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href".split(" ")),fabric.Image.fromElement=function(e,n,r){var i=fabric.parseAttributes(e,fabric.Image.ATTRIBUTE_NAMES),s="xMidYMid",o="meet",u,a,f;i.preserveAspectRatio&&(f=i.preserveAspectRatio.split(" ")),f&&f.length&&(o=f.pop(),o!=="meet"&&o!=="slice"?(s=o,o="meet"):f.length&&(s=f.pop())),u=s!=="none"?s.slice(1,4):"none",a=s!=="none"?s.slice(5,8):"none",i.alignX=u,i.alignY=a,i.meetOrSlice=o,fabric.Image.fromURL(i["xlink:href"],n,t(r?fabric.util.object.clone(r):{},i))},fabric.Image.async=!0,fabric.Image.pngCompression=1}(typeof exports!="undefined"?exports:this),fabric.util.object.extend(fabric.Object.prototype,{_getAngleValueForStraighten:function(){var e=this.getAngle()%360;return e>0?Math.round((e-1)/90)*90:Math.round(e/90)*90},straighten:function(){return this.setAngle(this._getAngleValueForStraighten()),this},fxStraighten:function(e){e=e||{};var t=function(){},n=e.onComplete||t,r=e.onChange||t,i=this;return fabric.util.animate({startValue:this.get("angle"),endValue:this._getAngleValueForStraighten(),duration:this.FX_DURATION,onChange:function(e){i.setAngle(e),r()},onComplete:function(){i.setCoords(),n()},onStart:function(){i.set("active",!1)}}),this}}),fabric.util.object.extend(fabric.StaticCanvas.prototype,{straightenObject:function(e){return e.straighten(),this.renderAll(),this},fxStraightenObject:function(e){return e.fxStraighten({onChange:this.renderAll.bind(this)}),this}}),fabric.Image.filters=fabric.Image.filters||{},fabric.Image.filters.BaseFilter=fabric.util.createClass({type:"BaseFilter",initialize:function(e){e&&this.setOptions(e)},setOptions:function(e){for(var t in e)this[t]=e[t]},toObject:function(){return{type:this.type}},toJSON:function(){return this.toObject()}}),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Brightness=t.util.createClass(t.Image.filters.BaseFilter,{type:"Brightness",initialize:function(e){e=e||{},this.brightness=e.brightness||0},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.brightness;for(var s=0,o=r.length;s<o;s+=4)r[s]+=i,r[s+1]+=i,r[s+2]+=i;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{brightness:this.brightness})}}),t.Image.filters.Brightness.fromObject=function(e){return new t.Image.filters.Brightness(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Convolute=t.util.createClass(t.Image.filters.BaseFilter,{type:"Convolute",initialize:function(e){e=e||{},this.opaque=e.opaque,this.matrix=e.matrix||[0,0,0,0,1,0,0,0,0];var n=t.util.createCanvasElement();this.tmpCtx=n.getContext("2d")},_createImageData:function(e,t){return this.tmpCtx.createImageData(e,t)},applyTo:function(e){var t=this.matrix,n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=Math.round(Math.sqrt(t.length)),s=Math.floor(i/2),o=r.data,u=r.width,a=r.height,f=u,l=a,c=this._createImageData(f,l),h=c.data,p=this.opaque?1:0;for(var d=0;d<l;d++)for(var v=0;v<f;v++){var m=d,g=v,y=(d*f+v)*4,b=0,w=0,E=0,S=0;for(var x=0;x<i;x++)for(var T=0;T<i;T++){var N=m+x-s,C=g+T-s;if(N<0||N>a||C<0||C>u)continue;var k=(N*u+C)*4,L=t[x*i+T];b+=o[k]*L,w+=o[k+1]*L,E+=o[k+2]*L,S+=o[k+3]*L}h[y]=b,h[y+1]=w,h[y+2]=E,h[y+3]=S+p*(255-S)}n.putImageData(c,0,0)},toObject:function(){return n(this.callSuper("toObject"),{opaque:this.opaque,matrix:this.matrix})}}),t.Image.filters.Convolute.fromObject=function(e){return new t.Image.filters.Convolute(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.GradientTransparency=t.util.createClass(t.Image.filters.BaseFilter,{type:"GradientTransparency",initialize:function(e){e=e||{},this.threshold=e.threshold||100},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.threshold,s=r.length;for(var o=0,u=r.length;o<u;o+=4)r[o+3]=i+255*(s-o)/s;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{threshold:this.threshold})}}),t.Image.filters.GradientTransparency.fromObject=function(e){return new t.Image.filters.GradientTransparency(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Grayscale=t.util.createClass(t.Image.filters.BaseFilter,{type:"Grayscale",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=n.width*n.height*4,s=0,o;while(s<i)o=(r[s]+r[s+1]+r[s+2])/3,r[s]=o,r[s+1]=o,r[s+2]=o,s+=4;t.putImageData(n,0,0)}}),t.Image.filters.Grayscale.fromObject=function(){return new t.Image.filters.Grayscale}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Invert=t.util.createClass(t.Image.filters.BaseFilter,{type:"Invert",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s;for(s=0;s<i;s+=4)r[s]=255-r[s],r[s+1]=255-r[s+1],r[s+2]=255-r[s+2];t.putImageData(n,0,0)}}),t.Image.filters.Invert.fromObject=function(){return new t.Image.filters.Invert}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Mask=t.util.createClass(t.Image.filters.BaseFilter,{type:"Mask",initialize:function(e){e=e||{},this.mask=e.mask,this.channel=[0,1,2,3].indexOf(e.channel)>-1?e.channel:0},applyTo:function(e){if(!this.mask)return;var n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=r.data,s=this.mask.getElement(),o=t.util.createCanvasElement(),u=this.channel,a,f=r.width*r.height*4;o.width=s.width,o.height=s.height,o.getContext("2d").drawImage(s,0,0,s.width,s.height);var l=o.getContext("2d").getImageData(0,0,s.width,s.height),c=l.data;for(a=0;a<f;a+=4)i[a+3]=c[a+u];n.putImageData(r,0,0)},toObject:function(){return n(this.callSuper("toObject"),{mask:this.mask.toObject(),channel:this.channel})}}),t.Image.filters.Mask.fromObject=function(e,n){t.util.loadImage(e.mask.src,function(r){e.mask=new t.Image(r,e.mask),n&&n(new t.Image.filters.Mask(e))})},t.Image.filters.Mask.async=!0}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Noise=t.util.createClass(t.Image.filters.BaseFilter,{type:"Noise",initialize:function(e){e=e||{},this.noise=e.noise||0},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.noise,s;for(var o=0,u=r.length;o<u;o+=4)s=(.5-Math.random())*i,r[o]+=s,r[o+1]+=s,r[o+2]+=s;t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{noise:this.noise})}}),t.Image.filters.Noise.fromObject=function(e){return new t.Image.filters.Noise(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Pixelate=t.util.createClass(t.Image.filters.BaseFilter,{type:"Pixelate",initialize:function(e){e=e||{},this.blocksize=e.blocksize||4},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=n.height,s=n.width,o,u,a,f,l,c,h;for(u=0;u<i;u+=this.blocksize)for(a=0;a<s;a+=this.blocksize){o=u*4*s+a*4,f=r[o],l=r[o+1],c=r[o+2],h=r[o+3];for(var p=u,d=u+this.blocksize;p<d;p++)for(var v=a,m=a+this.blocksize;v<m;v++)o=p*4*s+v*4,r[o]=f,r[o+1]=l,r[o+2]=c,r[o+3]=h}t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{blocksize:this.blocksize})}}),t.Image.filters.Pixelate.fromObject=function(e){return new t.Image.filters.Pixelate(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.RemoveWhite=t.util.createClass(t.Image.filters.BaseFilter,{type:"RemoveWhite",initialize:function(e){e=e||{},this.threshold=e.threshold||30,this.distance=e.distance||20},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.threshold,s=this.distance,o=255-i,u=Math.abs,a,f,l;for(var c=0,h=r.length;c<h;c+=4)a=r[c],f=r[c+1],l=r[c+2],a>o&&f>o&&l>o&&u(a-f)<s&&u(a-l)<s&&u(f-l)<s&&(r[c+3]=1);t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{threshold:this.threshold,distance:this.distance})}}),t.Image.filters.RemoveWhite.fromObject=function(e){return new t.Image.filters.RemoveWhite(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Sepia=t.util.createClass(t.Image.filters.BaseFilter,{type:"Sepia",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s,o;for(s=0;s<i;s+=4)o=.3*r[s]+.59*r[s+1]+.11*r[s+2],r[s]=o+100,r[s+1]=o+50,r[s+2]=o+255;t.putImageData(n,0,0)}}),t.Image.filters.Sepia.fromObject=function(){return new t.Image.filters.Sepia}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Sepia2=t.util.createClass(t.Image.filters.BaseFilter,{type:"Sepia2",applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=r.length,s,o,u,a;for(s=0;s<i;s+=4)o=r[s],u=r[s+1],a=r[s+2],r[s]=(o*.393+u*.769+a*.189)/1.351,r[s+1]=(o*.349+u*.686+a*.168)/1.203,r[s+2]=(o*.272+u*.534+a*.131)/2.14;t.putImageData(n,0,0)}}),t.Image.filters.Sepia2.fromObject=function(){return new t.Image.filters.Sepia2}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Tint=t.util.createClass(t.Image.filters.BaseFilter,{type:"Tint",initialize:function(e){e=e||{},this.color=e.color||"#000000",this.opacity=typeof e.opacity!="undefined"?e.opacity:(new t.Color(this.color)).getAlpha()},applyTo:function(e){var n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=r.data,s=i.length,o,u,a,f,l,c,h,p,d;d=(new t.Color(this.color)).getSource(),u=d[0]*this.opacity,a=d[1]*this.opacity,f=d[2]*this.opacity,p=1-this.opacity;for(o=0;o<s;o+=4)l=i[o],c=i[o+1],h=i[o+2],i[o]=u+l*p,i[o+1]=a+c*p,i[o+2]=f+h*p;n.putImageData(r,0,0)},toObject:function(){return n(this.callSuper("toObject"),{color:this.color,opacity:this.opacity})}}),t.Image.filters.Tint.fromObject=function(e){return new t.Image.filters.Tint(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Multiply=t.util.createClass(t.Image.filters.BaseFilter,{type:"Multiply",initialize:function(e){e=e||{},this.color=e.color||"#000000"},applyTo:function(e){var n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=r.data,s=i.length,o,u;u=(new t.Color(this.color)).getSource();for(o=0;o<s;o+=4)i[o]*=u[0]/255,i[o+1]*=u[1]/255,i[o+2]*=u[2]/255;n.putImageData(r,0,0)},toObject:function(){return n(this.callSuper("toObject"),{color:this.color})}}),t.Image.filters.Multiply.fromObject=function(e){return new t.Image.filters.Multiply(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric;t.Image.filters.Blend=t.util.createClass({type:"Blend",initialize:function(e){e=e||{},this.color=e.color||"#000",this.image=e.image||!1,this.mode=e.mode||"multiply",this.alpha=e.alpha||1},applyTo:function(e){var n=e.getContext("2d"),r=n.getImageData(0,0,e.width,e.height),i=r.data,s,o,u,a,f,l,c,h=!1;if(this.image){h=!0;var p=t.util.createCanvasElement();p.width=this.image.width,p.height=this.image.height;var d=new t.StaticCanvas(p);d.add(this.image);var v=d.getContext("2d");c=v.getImageData(0,0,d.width,d.height).data}else c=(new t.Color(this.color)).getSource(),s=c[0]*this.alpha,o=c[1]*this.alpha,u=c[2]*this.alpha;for(var m=0,g=i.length;m<g;m+=4){a=i[m],f=i[m+1],l=i[m+2],h&&(s=c[m]*this.alpha,o=c[m+1]*this.alpha,u=c[m+2]*this.alpha);switch(this.mode){case"multiply":i[m]=a*s/255,i[m+1]=f*o/255,i[m+2]=l*u/255;break;case"screen":i[m]=1-(1-a)*(1-s),i[m+1]=1-(1-f)*(1-o),i[m+2]=1-(1-l)*(1-u);break;case"add":i[m]=Math.min(255,a+s),i[m+1]=Math.min(255,f+o),i[m+2]=Math.min(255,l+u);break;case"diff":case"difference":i[m]=Math.abs(a-s),i[m+1]=Math.abs(f-o),i[m+2]=Math.abs(l-u);break;case"subtract":var y=a-s,b=f-o,w=l-u;i[m]=y<0?0:y,i[m+1]=b<0?0:b,i[m+2]=w<0?0:w;break;case"darken":i[m]=Math.min(a,s),i[m+1]=Math.min(f,o),i[m+2]=Math.min(l,u);break;case"lighten":i[m]=Math.max(a,s),i[m+1]=Math.max(f,o),i[m+2]=Math.max(l,u)}}n.putImageData(r,0,0)},toObject:function(){return{color:this.color,image:this.image,mode:this.mode,alpha:this.alpha}}}),t.Image.filters.Blend.fromObject=function(e){return new t.Image.filters.Blend(e)}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=Math.pow,r=Math.floor,i=Math.sqrt,s=Math.abs,o=Math.max,u=Math.round,a=Math.sin,f=Math.ceil;t.Image.filters.Resize=t.util.createClass(t.Image.filters.BaseFilter,{type:"Resize",resizeType:"hermite",scaleX:0,scaleY:0,lanczosLobes:3,applyTo:function(e,t,n){this.rcpScaleX=1/t,this.rcpScaleY=1/n;var r=e.width,i=e.height,s=u(r*t),o=u(i*n),a;this.resizeType==="sliceHack"&&(a=this.sliceByTwo(e,r,i,s,o)),this.resizeType==="hermite"&&(a=this.hermiteFastResize(e,r,i,s,o)),this.resizeType==="bilinear"&&(a=this.bilinearFiltering(e,r,i,s,o)),this.resizeType==="lanczos"&&(a=this.lanczosResize(e,r,i,s,o)),e.width=s,e.height=o,e.getContext("2d").putImageData(a,0,0)},sliceByTwo:function(e,n,i,s,u){var a=e.getContext("2d"),f,l=.5,c=.5,h=1,p=1,d=!1,v=!1,m=n,g=i,y=t.util.createCanvasElement(),b=y.getContext("2d");s=r(s),u=r(u),y.width=o(s,n),y.height=o(u,i),s>n&&(l=2,h=-1),u>i&&(c=2,p=-1),f=a.getImageData(0,0,n,i),e.width=o(s,n),e.height=o(u,i),a.putImageData(f,0,0);while(!d||!v)n=m,i=g,s*h<r(m*l*h)?m=r(m*l):(m=s,d=!0),u*p<r(g*c*p)?g=r(g*c):(g=u,v=!0),f=a.getImageData(0,0,n,i),b.putImageData(f,0,0),a.clearRect(0,0,m,g),a.drawImage(y,0,0,n,i,0,0,m,g);return a.getImageData(0,0,s,u)},lanczosResize:function(e,t,o,u,l){function c(e){return function(t){if(t>e)return 0;t*=Math.PI;if(s(t)<1e-16)return 1;var n=t/e;return a(t)*a(n)/t/n}}function h(e){var a,f,c,p,d,L,A,O,M,_,D;C.x=(e+.5)*b,k.x=r(C.x);for(a=0;a<l;a++){C.y=(a+.5)*w,k.y=r(C.y),d=0,L=0,A=0,O=0,M=0;for(f=k.x-x;f<=k.x+x;f++){if(f<0||f>=t)continue;_=r(1e3*s(f-C.x)),N[_]||(N[_]={});for(var P=k.y-T;P<=k.y+T;P++){if(P<0||P>=o)continue;D=r(1e3*s(P-C.y)),N[_][D]||(N[_][D]=y(i(n(_*E,2)+n(D*S,2))/1e3)),c=N[_][D],c>0&&(p=(P*t+f)*4,d+=c,L+=c*m[p],A+=c*m[p+1],O+=c*m[p+2],M+=c*m[p+3])}}p=(a*u+e)*4,g[p]=L/d,g[p+1]=A/d,g[p+2]=O/d,g[p+3]=M/d}return++e<u?h(e):v}var p=e.getContext("2d"),d=p.getImageData(0,0,t,o),v=p.getImageData(0,0,u,l),m=d.data,g=v.data,y=c(this.lanczosLobes),b=this.rcpScaleX,w=this.rcpScaleY,E=2/this.rcpScaleX,S=2/this.rcpScaleY,x=f(b*this.lanczosLobes/2),T=f(w*this.lanczosLobes/2),N={},C={},k={};return h(0)},bilinearFiltering:function(e,t,n,i,s){var o,u,a,f,l,c,h,p,d,v,m,g,y=0,b,w=this.rcpScaleX,E=this.rcpScaleY,S=e.getContext("2d"),x=4*(t-1),T=S.getImageData(0,0,t,n),N=T.data,C=S.getImageData(0,0,i,s),k=C.data;for(h=0;h<s;h++)for(p=0;p<i;p++){l=r(w*p),c=r(E*h),d=w*p-l,v=E*h-c,b=4*(c*t+l);for(m=0;m<4;m++)o=N[b+m],u=N[b+4+m],a=N[b+x+m],f=N[b+x+4+m],g=o*(1-d)*(1-v)+u*d*(1-v)+a*v*(1-d)+f*d*v,k[y++]=g}return C},hermiteFastResize:function(e,t,n,o,u){var a=this.rcpScaleX,l=this.rcpScaleY,c=f(a/2),h=f(l/2),p=e.getContext("2d"),d=p.getImageData(0,0,t,n),v=d.data,m=p.getImageData(0,0,o,u),g=m.data;for(var y=0;y<u;y++)for(var b=0;b<o;b++){var w=(b+y*o)*4,E=0,S=0,x=0,T=0,N=0,C=0,k=0,L=(y+.5)*l;for(var A=r(y*l);A<(y+1)*l;A++){var O=s(L-(A+.5))/h,M=(b+.5)*a,_=O*O;for(var D=r(b*a);D<(b+1)*a;D++){var P=s(M-(D+.5))/c,H=i(_+P*P);if(H>1&&H<-1)continue;E=2*H*H*H-3*H*H+1,E>0&&(P=4*(D+A*t),k+=E*v[P+3],x+=E,v[P+3]<255&&(E=E*v[P+3]/250),T+=E*v[P],N+=E*v[P+1],C+=E*v[P+2],S+=E)}}g[w]=T/S,g[w+1]=N/S,g[w+2]=C/S,g[w+3]=k/x}return m}}),t.Image.filters.Resize.fromObject=function(){return new t.Image.filters.Resize}}(typeof exports!="undefined"?exports:this),function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend,r=t.util.object.clone,i=t.util.toFixed,s=t.StaticCanvas.supports("setLineDash");if(t.Text){t.warn("fabric.Text is already defined");return}var o=t.Object.prototype.stateProperties.concat();o.push("fontFamily","fontWeight","fontSize","text","textDecoration","textAlign","fontStyle","lineHeight","textBackgroundColor","useNative","path"),t.Text=t.util.createClass(t.Object,{_dimensionAffectingProps:{fontSize:!0,fontWeight:!0,fontFamily:!0,textDecoration:!0,fontStyle:!0,lineHeight:!0,stroke:!0,strokeWidth:!0,text:!0},_reNewline:/\r?\n/,type:"text",fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",textDecoration:"",textAlign:"left",fontStyle:"",lineHeight:1.3,textBackgroundColor:"",path:null,useNative:!0,stateProperties:o,stroke:null,shadow:null,initialize:function(e,t){t=t||{},this.text=e,this.__skipDimension=!0,this.setOptions(t),this.__skipDimension=!1,this._initDimensions()},_initDimensions:function(){if(this.__skipDimension)return;var e=t.util.createCanvasElement();this._render(e.getContext("2d"))},toString:function(){return"#<fabric.Text ("+this.complexity()+'): { "text": "'+this.text+'", "fontFamily": "'+this.fontFamily+'" }>'},_render:function(e){typeof Cufon=="undefined"||this.useNative===!0?this._renderViaNative(e):this._renderViaCufon(e)},_renderViaNative:function(e){var n=this.text.split(this._reNewline);this._setTextStyles(e),this.width=this._getTextWidth(e,n),this.height=this._getTextHeight(e,n),this.clipTo&&t.util.clipContext(this,e),this._renderTextBackground(e,n),this._translateForTextAlign(e),this._renderText(e,n),this.textAlign!=="left"&&this.textAlign!=="justify"&&e.restore(),this._renderTextDecoration(e,n),this.clipTo&&e.restore(),this._setBoundaries(e,n),this._totalLineHeight=0},_renderText:function(e,t){e.save(),this._setOpacity(e),this._setShadow(e),this._setupCompositeOperation(e),this._renderTextFill(e,t),this._renderTextStroke(e,t),this._restoreCompositeOperation(e),this._removeShadow(e),e.restore()},_translateForTextAlign:function(e){this.textAlign!=="left"&&this.textAlign!=="justify"&&(e.save(),e.translate(this.textAlign==="center"?this.width/2:this.width,0))},_setBoundaries:function(e,t){this._boundaries=[];for(var n=0,r=t.length;n<r;n++){var i=this._getLineWidth(e,t[n]),s=this._getLineLeftOffset(i);this._boundaries.push({height:this.fontSize*this.lineHeight,width:i,left:s})}},_setTextStyles:function(e){this._setFillStyles(e),this._setStrokeStyles(e),e.textBaseline="alphabetic",this.skipTextAlign||(e.textAlign=this.textAlign),e.font=this._getFontDeclaration()},_getTextHeight:function(e,t){return this.fontSize*t.length*this.lineHeight},_getTextWidth:function(e,t){var n=e.measureText(t[0]||"|").width;for(var r=1,i=t.length;r<i;r++){var s=e.measureText(t[r]).width;s>n&&(n=s)}return n},_renderChars:function(e,t,n,r,i){t[e](n,r,i)},_renderTextLine:function(e,t,n,r,i,s){i-=this.fontSize/4;if(this.textAlign!=="justify"){this._renderChars(e,t,n,r,i,s);return}var o=t.measureText(n).width,u=this.width;if(u>o){var a=n.split(/\s+/),f=t.measureText(n.replace(/\s+/g,"")).width,l=u-f,c=a.length-1,h=l/c,p=0;for(var d=0,v=a.length;d<v;d++)this._renderChars(e,t,a[d],r+p,i,s),p+=t.measureText(a[d]).width+h}else this._renderChars(e,t,n,r,i,s)},_getLeftOffset:function(){return-this.width/2},_getTopOffset:function(){return-this.height/2},_renderTextFill:function(e,t){if(!this.fill&&!this._skipFillStrokeCheck)return;this._boundaries=[];var n=0;for(var r=0,i=t.length;r<i;r++){var s=this._getHeightOfLine(e,r,t);n+=s,this._renderTextLine("fillText",e,t[r],this._getLeftOffset(),this._getTopOffset()+n,r)}this.shadow&&!this.shadow.affectStroke&&this._removeShadow(e)},_renderTextStroke:function(e,t){if((!this.stroke||this.strokeWidth===0)&&!this._skipFillStrokeCheck)return;var n=0;e.save(),this.strokeDashArray&&(1&this.strokeDashArray.length&&this.strokeDashArray.push.apply(this.strokeDashArray,this.strokeDashArray),s&&e.setLineDash(this.strokeDashArray)),e.beginPath();for(var r=0,i=t.length;r<i;r++){var o=this._getHeightOfLine(e,r,t);n+=o,this._renderTextLine("strokeText",e,t[r],this._getLeftOffset(),this._getTopOffset()+n,r)}e.closePath(),e.restore()},_getHeightOfLine:function(){return this.fontSize*this.lineHeight},_renderTextBackground:function(e,t){this._renderTextBoxBackground(e),this._renderTextLinesBackground(e,t)},_renderTextBoxBackground:function(e){if(!this.backgroundColor)return;e.save(),e.fillStyle=this.backgroundColor,e.fillRect(this._getLeftOffset(),this._getTopOffset(),this.width,this.height),e.restore()},_renderTextLinesBackground:function(e,t){if(!this.textBackgroundColor)return;e.save(),e.fillStyle=this.textBackgroundColor;for(var n=0,r=t.length;n<r;n++)if(t[n]!==""){var i=this._getLineWidth(e,t[n]),s=this._getLineLeftOffset(i);e.fillRect(this._getLeftOffset()+s,this._getTopOffset()+n*this.fontSize*this.lineHeight,i,this.fontSize*this.lineHeight)}e.restore()},_getLineLeftOffset:function(e){return this.textAlign==="center"?(this.width-e)/2:this.textAlign==="right"?this.width-e:0},_getLineWidth:function(e,t){return this.textAlign==="justify"?this.width:e.measureText(t).width},_renderTextDecoration:function(e,t){function i(i){for(var s=0,o=t.length;s<o;s++){var u=r._getLineWidth(e,t[s]),a=r._getLineLeftOffset(u);e.fillRect(r._getLeftOffset()+a,~~(i+s*r._getHeightOfLine(e,s,t)-n),u,1)}}if(!this.textDecoration)return;var n=this._getTextHeight(e,t)/2,r=this;this.textDecoration.indexOf("underline")>-1&&i(this.fontSize*this.lineHeight),this.textDecoration.indexOf("line-through")>-1&&i(this.fontSize*this.lineHeight-this.fontSize/2),this.textDecoration.indexOf("overline")>-1&&i(this.fontSize*this.lineHeight-this.fontSize)},_getFontDeclaration:function(){return[t.isLikelyNode?this.fontWeight:this.fontStyle,t.isLikelyNode?this.fontStyle:this.fontWeight,this.fontSize+"px",t.isLikelyNode?'"'+this.fontFamily+'"':this.fontFamily].join(" ")},render:function(e,t){if(!this.visible)return;e.save(),t||this.transform(e);var n=this.group&&this.group.type==="path-group";n&&e.translate(-this.group.width/2,-this.group.height/2),this.transformMatrix&&e.transform.apply(e,this.transformMatrix),n&&e.translate(this.left,this.top),this._render(e),e.restore()},toObject:function(e){var t=n(this.callSuper("toObject",e),{text:this.text,fontSize:this.fontSize,fontWeight:this.fontWeight,fontFamily:this.fontFamily,fontStyle:this.fontStyle,lineHeight:this.lineHeight,textDecoration:this.textDecoration,textAlign:this.textAlign,path:this.path,textBackgroundColor:this.textBackgroundColor,useNative:this.useNative});return this.includeDefaultValues||this._removeDefaultValues(t),t},toSVG:function(e){var t=[],n=this.text.split(this._reNewline),r=this._getSVGLeftTopOffsets(n),i=this._getSVGTextAndBg(r.lineTop,r.textLeft,n),s=this._getSVGShadows(r.lineTop,n);return r.textTop+=this._fontAscent?this._fontAscent/5*this.lineHeight:0,this._wrapSVGTextAndBg(t,i,s,r),e?e(t.join("")):t.join("")},_getSVGLeftTopOffsets:function(e){var t=this.useNative?this.fontSize*this.lineHeight:-this._fontAscent-this._fontAscent/5*this.lineHeight,n=-(this.width/2),r=this.useNative?this.fontSize*this.lineHeight-.25*this.fontSize:this.height/2-e.length*this.fontSize-this._totalLineHeight;return{textLeft:n+(this.group&&this.group.type==="path-group"?this.left:0),textTop:r+(this.group&&this.group.type==="path-group"?this.top:0),lineTop:t}},_wrapSVGTextAndBg:function(e,t,n,r){e.push('<g transform="',this.getSvgTransform(),this.getSvgTransformMatrix(),'">\n',t.textBgRects.join(""),"<text ",this.fontFamily?'font-family="'+this.fontFamily.replace(/"/g,"'")+'" ':"",this.fontSize?'font-size="'+this.fontSize+'" ':"",this.fontStyle?'font-style="'+this.fontStyle+'" ':"",this.fontWeight?'font-weight="'+this.fontWeight+'" ':"",this.textDecoration?'text-decoration="'+this.textDecoration+'" ':"",'style="',this.getSvgStyles(),'" ','transform="translate(',i(r.textLeft,2)," ",i(r.textTop,2),')">',n.join(""),t.textSpans.join(""),"</text>\n","</g>\n")},_getSVGShadows:function(e,n){var r=[],s,o,u=1;if(!this.shadow||!this._boundaries)return r;for(s=0,o=n.length;s<o;s++)if(n[s]!==""){var a=this._boundaries&&this._boundaries[s]?this._boundaries[s].left:0;r.push('<tspan x="',i(a+u+this.shadow.offsetX,2),s===0||this.useNative?'" y':'" dy','="',i(this.useNative?e*s-this.height/2+this.shadow.offsetY:e+(s===0?this.shadow.offsetY:0),2),'" ',this._getFillAttributes(this.shadow.color),">",t.util.string.escapeXml(n[s]),"</tspan>"),u=1}else u++;return r},_getSVGTextAndBg:function(e,t,n){var r=[],i=[],s=1;this._setSVGBg(i);for(var o=0,u=n.length;o<u;o++){n[o]!==""?(this._setSVGTextLineText(n[o],o,r,e,s,i),s=1):s++;if(!this.textBackgroundColor||!this._boundaries)continue;this._setSVGTextLineBg(i,o,t,e)}return{textSpans:r,textBgRects:i}},_setSVGTextLineText:function(e,n,r,s,o){var u=this._boundaries&&this._boundaries[n]?i(this._boundaries[n].left,2):0;r.push('<tspan x="',u,'" ',n===0||this.useNative?"y":"dy",'="',i(this.useNative?s*n-this.height/2:s*o,2),'" ',this._getFillAttributes(this.fill),">",t.util.string.escapeXml(e),"</tspan>")},_setSVGTextLineBg:function(e,t,n,r){e.push("<rect ",this._getFillAttributes(this.textBackgroundColor),' x="',i(n+this._boundaries[t].left,2),'" y="',i(r*t-this.height/2,2),'" width="',i(this._boundaries[t].width,2),'" height="',i(this._boundaries[t].height,2),'"></rect>\n')},_setSVGBg:function(e){this.backgroundColor&&this._boundaries&&e.push("<rect ",this._getFillAttributes(this.backgroundColor),' x="',i(-this.width/2,2),'" y="',i(-this.height/2,2),'" width="',i(this.width,2),'" height="',i(this.height,2),'"></rect>')},_getFillAttributes:function(e){var n=e&&typeof e=="string"?new t.Color(e):"";return!n||!n.getSource()||n.getAlpha()===1?'fill="'+e+'"':'opacity="'+n.getAlpha()+'" fill="'+n.setAlpha(1).toRgb()+'"'},_set:function(e,t){e==="fontFamily"&&this.path&&(this.path=this.path.replace(/(.*?)([^\/]*)(\.font\.js)/,"$1"+t+"$3")),this.callSuper("_set",e,t),e in this._dimensionAffectingProps&&(this._initDimensions(),this.setCoords())},complexity:function(){return 1}}),t.Text.ATTRIBUTE_NAMES=t.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),t.Text.DEFAULT_SVG_FONT_SIZE=16,t.Text.fromElement=function(e,n){if(!e)return null;var r=t.parseAttributes(e,t.Text.ATTRIBUTE_NAMES);n=t.util.object.extend(n?t.util.object.clone(n):{},r),n.top=n.top||0,n.left=n.left||0,"dx"in r&&(n.left+=r.dx),"dy"in r&&(n.top+=r.dy),"fontSize"in n||(n.fontSize=t.Text.DEFAULT_SVG_FONT_SIZE),n.originX||(n.originX="left"),n.top+=n.fontSize/4;var i=new t.Text(e.textContent,n),s=0;return i.originX==="left"&&(s=i.getWidth()/2),i.originX==="right"&&(s=-i.getWidth()/2),i.set({left:i.getLeft()+s,top:i.getTop()-i.getHeight()/2}),i},t.Text.fromObject=function(e){return new t.Text(e.text,r(e))},t.util.createAccessors(t.Text)}(typeof exports!="undefined"?exports:this),function(){var e=fabric.util.object.clone;fabric.IText=fabric.util.createClass(fabric.Text,fabric.Observable,{type:"i-text",selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"#333",cursorDelay:1e3,cursorDuration:600,styles:null,caching:!0,_skipFillStrokeCheck:!0,_reSpace:/\s|\n/,_fontSizeFraction:4,_currentCursorOpacity:0,_selectionDirection:null,_abortCursorAnimation:!1,_charWidthsCache:{},initialize:function(e,t){this.styles=t?t.styles||{}:{},this.callSuper("initialize",e,t),this.initBehavior(),fabric.IText.instances.push(this),this.__lineWidths={},this.__lineHeights={},this.__lineOffsets={}},isEmptyStyles:function(){if(!this.styles)return!0;var e=this.styles;for(var t in e)for(var n in e[t])for(var r in e[t][n])return!1;return!0},setSelectionStart:function(e){this.selectionStart!==e&&(this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})),this.selectionStart=e,this.hiddenTextarea&&(this.hiddenTextarea.selectionStart=e)},setSelectionEnd:function(e){this.selectionEnd!==e&&(this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})),this.selectionEnd=e,this.hiddenTextarea&&(this.hiddenTextarea.selectionEnd=e)},getSelectionStyles:function(e,t){if(arguments.length===2){var n=[];for(var r=e;r<t;r++)n.push(this.getSelectionStyles(r));return n}var i=this.get2DCursorLocation(e);return this.styles[i.lineIndex]?this.styles[i.lineIndex][i.charIndex]||{}:{}},setSelectionStyles:function(e){if(this.selectionStart===this.selectionEnd)this._extendStyles(this.selectionStart,e);else for(var t=this.selectionStart;t<this.selectionEnd;t++)this._extendStyles(t,e);return this},_extendStyles:function(e,t){var n=this.get2DCursorLocation(e);this.styles[n.lineIndex]||(this.styles[n.lineIndex]={}),this.styles[n.lineIndex][n.charIndex]||(this.styles[n.lineIndex][n.charIndex]={}),fabric.util.object.extend(this.styles[n.lineIndex][n.charIndex],t)},_render:function(e){this.callSuper("_render",e),this.ctx=e,this.isEditing&&this.renderCursorOrSelection()},renderCursorOrSelection:function(){if(!this.active)return;var e=this.text.split(""),t;this.selectionStart===this.selectionEnd?(t=this._getCursorBoundaries(e,"cursor"),this.renderCursor(t)):(t=this._getCursorBoundaries(e,"selection"),this.renderSelection(e,t))},get2DCursorLocation:function(e){typeof e=="undefined"&&(e=this.selectionStart);var t=this.text.slice(0,e),n=t.split(this._reNewline);return{lineIndex:n.length-1,charIndex:n[n.length-1].length}},getCurrentCharStyle:function(e,t){var n=this.styles[e]&&this.styles[e][t===0?0:t-1];return{fontSize:n&&n.fontSize||this.fontSize,fill:n&&n.fill||this.fill,textBackgroundColor:n&&n.textBackgroundColor||this.textBackgroundColor,textDecoration:n&&n.textDecoration||this.textDecoration,fontFamily:n&&n.fontFamily||this.fontFamily,fontWeight:n&&n.fontWeight||this.fontWeight,fontStyle:n&&n.fontStyle||this.fontStyle,stroke:n&&n.stroke||this.stroke,strokeWidth:n&&n.strokeWidth||this.strokeWidth}},getCurrentCharFontSize:function(e,t){return this.styles[e]&&this.styles[e][t===0?0:t-1]&&this.styles[e][t===0?0:t-1].fontSize||this.fontSize},getCurrentCharColor:function(e,t){return this.styles[e]&&this.styles[e][t===0?0:t-1]&&this.styles[e][t===0?0:t-1].fill||this.cursorColor},_getCursorBoundaries:function(e,t){var n=this.get2DCursorLocation(),r=this.text.split(this._reNewline),i=Math.round(this._getLeftOffset()),s=this._getTopOffset(),o=this._getCursorBoundariesOffsets(e,t,n,r);return{left:i,top:s,leftOffset:o.left+o.lineLeft,topOffset:o.top}},_getCursorBoundariesOffsets:function(e,t,n,r){var i=0,s=0,o=0,u=0,a=t==="cursor"?this._getHeightOfLine(this.ctx,0)-this.getCurrentCharFontSize(n.lineIndex,n.charIndex):0;for(var f=0;f<this.selectionStart;f++){if(e[f]==="\n"){u=0;var l=s+(t==="cursor"?1:0);a+=this._getCachedLineHeight(l),s++,o=0}else u+=this._getWidthOfChar(this.ctx,e[f],s,o),o++;i=this._getCachedLineOffset(s,r)}return this._clearCache(),{top:a,left:u,lineLeft:i}},_clearCache:function(){this.__lineWidths={},this.__lineHeights={},this.__lineOffsets={}},_getCachedLineHeight:function(e){return this.__lineHeights[e]||(this.__lineHeights[e]=this._getHeightOfLine(this.ctx,e))},_getCachedLineWidth:function(e,t){return this.__lineWidths[e]||(this.__lineWidths[e]=this._getWidthOfLine(this.ctx,e,t))},_getCachedLineOffset:function(e,t){var n=this._getCachedLineWidth(e,t);return this.__lineOffsets[e]||(this.__lineOffsets[e]=this.
_getLineLeftOffset(n))},renderCursor:function(e){var t=this.ctx;t.save();var n=this.get2DCursorLocation(),r=n.lineIndex,i=n.charIndex,s=this.getCurrentCharFontSize(r,i),o=r===0&&i===0?this._getCachedLineOffset(r,this.text.split(this._reNewline)):e.leftOffset;t.fillStyle=this.getCurrentCharColor(r,i),t.globalAlpha=this.__isMousedown?1:this._currentCursorOpacity,t.fillRect(e.left+o,e.top+e.topOffset,this.cursorWidth/this.scaleX,s),t.restore()},renderSelection:function(e,t){var n=this.ctx;n.save(),n.fillStyle=this.selectionColor;var r=this.get2DCursorLocation(this.selectionStart),i=this.get2DCursorLocation(this.selectionEnd),s=r.lineIndex,o=i.lineIndex,u=this.text.split(this._reNewline);for(var a=s;a<=o;a++){var f=this._getCachedLineOffset(a,u)||0,l=this._getCachedLineHeight(a),c=0;if(a===s)for(var h=0,p=u[a].length;h<p;h++)h>=r.charIndex&&(a!==o||h<i.charIndex)&&(c+=this._getWidthOfChar(n,u[a][h],a,h)),h<r.charIndex&&(f+=this._getWidthOfChar(n,u[a][h],a,h));else if(a>s&&a<o)c+=this._getCachedLineWidth(a,u)||5;else if(a===o)for(var d=0,v=i.charIndex;d<v;d++)c+=this._getWidthOfChar(n,u[a][d],a,d);n.fillRect(t.left+f,t.top+t.topOffset,c,l),t.topOffset+=l}n.restore()},_renderChars:function(e,t,n,r,i,s){if(this.isEmptyStyles())return this._renderCharsFast(e,t,n,r,i);this.skipTextAlign=!0,r-=this.textAlign==="center"?this.width/2:this.textAlign==="right"?this.width:0;var o=this.text.split(this._reNewline),u=this._getWidthOfLine(t,s,o),a=this._getHeightOfLine(t,s,o),f=this._getLineLeftOffset(u),l=n.split(""),c,h="";r+=f||0,t.save();for(var p=0,d=l.length;p<=d;p++){c=c||this.getCurrentCharStyle(s,p);var v=this.getCurrentCharStyle(s,p+1);if(this._hasStyleChanged(c,v)||p===d)this._renderChar(e,t,s,p-1,h,r,i,a),h="",c=v;h+=l[p]}t.restore()},_renderCharsFast:function(e,t,n,r,i){this.skipTextAlign=!1,e==="fillText"&&this.fill&&this.callSuper("_renderChars",e,t,n,r,i),e==="strokeText"&&this.stroke&&this.callSuper("_renderChars",e,t,n,r,i)},_renderChar:function(e,t,n,r,i,s,o,u){var a,f,l;if(this.styles&&this.styles[n]&&(a=this.styles[n][r])){var c=a.stroke||this.stroke,h=a.fill||this.fill;t.save(),f=this._applyCharStylesGetWidth(t,i,n,r,a),l=this._getHeightOfChar(t,i,n,r),h&&t.fillText(i,s,o),c&&t.strokeText(i,s,o),this._renderCharDecoration(t,a,s,o,f,u,l),t.restore(),t.translate(f,0)}else e==="strokeText"&&this.stroke&&t[e](i,s,o),e==="fillText"&&this.fill&&t[e](i,s,o),f=this._applyCharStylesGetWidth(t,i,n,r),this._renderCharDecoration(t,null,s,o,f,u),t.translate(t.measureText(i).width,0)},_hasStyleChanged:function(e,t){return e.fill!==t.fill||e.fontSize!==t.fontSize||e.textBackgroundColor!==t.textBackgroundColor||e.textDecoration!==t.textDecoration||e.fontFamily!==t.fontFamily||e.fontWeight!==t.fontWeight||e.fontStyle!==t.fontStyle||e.stroke!==t.stroke||e.strokeWidth!==t.strokeWidth},_renderCharDecoration:function(e,t,n,r,i,s,o){var u=t?t.textDecoration||this.textDecoration:this.textDecoration,a=(t?t.fontSize:null)||this.fontSize;if(!u)return;u.indexOf("underline")>-1&&this._renderCharDecorationAtOffset(e,n,r+this.fontSize/this._fontSizeFraction,i,0,this.fontSize/20),u.indexOf("line-through")>-1&&this._renderCharDecorationAtOffset(e,n,r+this.fontSize/this._fontSizeFraction,i,o/2,a/20),u.indexOf("overline")>-1&&this._renderCharDecorationAtOffset(e,n,r,i,s-this.fontSize/this._fontSizeFraction,this.fontSize/20)},_renderCharDecorationAtOffset:function(e,t,n,r,i,s){e.fillRect(t,n-i,r,s)},_renderTextLine:function(e,t,n,r,i,s){i+=this.fontSize/4,this.callSuper("_renderTextLine",e,t,n,r,i,s)},_renderTextDecoration:function(e,t){if(this.isEmptyStyles())return this.callSuper("_renderTextDecoration",e,t)},_renderTextLinesBackground:function(e,t){if(!this.textBackgroundColor&&!this.styles)return;e.save(),this.textBackgroundColor&&(e.fillStyle=this.textBackgroundColor);var n=0,r=this.fontSize/this._fontSizeFraction;for(var i=0,s=t.length;i<s;i++){var o=this._getHeightOfLine(e,i,t);if(t[i]===""){n+=o;continue}var u=this._getWidthOfLine(e,i,t),a=this._getLineLeftOffset(u);this.textBackgroundColor&&(e.fillStyle=this.textBackgroundColor,e.fillRect(this._getLeftOffset()+a,this._getTopOffset()+n+r,u,o));if(this.styles[i])for(var f=0,l=t[i].length;f<l;f++)if(this.styles[i]&&this.styles[i][f]&&this.styles[i][f].textBackgroundColor){var c=t[i][f];e.fillStyle=this.styles[i][f].textBackgroundColor,e.fillRect(this._getLeftOffset()+a+this._getWidthOfCharsAt(e,i,f,t),this._getTopOffset()+n+r,this._getWidthOfChar(e,c,i,f,t)+1,o)}n+=o}e.restore()},_getCacheProp:function(e,t){return e+t.fontFamily+t.fontSize+t.fontWeight+t.fontStyle+t.shadow},_applyCharStylesGetWidth:function(t,n,r,i,s){var o=s||this.styles[r]&&this.styles[r][i];o?o=e(o):o={},this._applyFontStyles(o);var u=this._getCacheProp(n,o);if(this.isEmptyStyles()&&this._charWidthsCache[u]&&this.caching)return this._charWidthsCache[u];typeof o.shadow=="string"&&(o.shadow=new fabric.Shadow(o.shadow));var a=o.fill||this.fill;return t.fillStyle=a.toLive?a.toLive(t):a,o.stroke&&(t.strokeStyle=o.stroke&&o.stroke.toLive?o.stroke.toLive(t):o.stroke),t.lineWidth=o.strokeWidth||this.strokeWidth,t.font=this._getFontDeclaration.call(o),this._setShadow.call(o,t),this.caching?(this._charWidthsCache[u]||(this._charWidthsCache[u]=t.measureText(n).width),this._charWidthsCache[u]):t.measureText(n).width},_applyFontStyles:function(e){e.fontFamily||(e.fontFamily=this.fontFamily),e.fontSize||(e.fontSize=this.fontSize),e.fontWeight||(e.fontWeight=this.fontWeight),e.fontStyle||(e.fontStyle=this.fontStyle)},_getStyleDeclaration:function(t,n){return this.styles[t]&&this.styles[t][n]?e(this.styles[t][n]):{}},_getWidthOfChar:function(e,t,n,r){if(this.textAlign==="justify"&&/\s/.test(t))return this._getWidthOfSpace(e,n);var i=this._getStyleDeclaration(n,r);this._applyFontStyles(i);var s=this._getCacheProp(t,i);if(this._charWidthsCache[s]&&this.caching)return this._charWidthsCache[s];if(e){e.save();var o=this._applyCharStylesGetWidth(e,t,n,r);return e.restore(),o}},_getHeightOfChar:function(e,t,n,r){return this.styles[n]&&this.styles[n][r]?this.styles[n][r].fontSize||this.fontSize:this.fontSize},_getWidthOfCharAt:function(e,t,n,r){r=r||this.text.split(this._reNewline);var i=r[t].split("")[n];return this._getWidthOfChar(e,i,t,n)},_getHeightOfCharAt:function(e,t,n,r){r=r||this.text.split(this._reNewline);var i=r[t].split("")[n];return this._getHeightOfChar(e,i,t,n)},_getWidthOfCharsAt:function(e,t,n,r){var i=0;for(var s=0;s<n;s++)i+=this._getWidthOfCharAt(e,t,s,r);return i},_getWidthOfLine:function(e,t,n){return this._getWidthOfCharsAt(e,t,n[t].length,n)},_getWidthOfSpace:function(e,t){var n=this.text.split(this._reNewline),r=n[t],i=r.split(/\s+/),s=this._getWidthOfWords(e,r,t),o=this.width-s,u=i.length-1,a=o/u;return a},_getWidthOfWords:function(e,t,n){var r=0;for(var i=0;i<t.length;i++){var s=t[i];s.match(/\s/)||(r+=this._getWidthOfChar(e,s,n,i))}return r},_getTextWidth:function(e,t){if(this.isEmptyStyles())return this.callSuper("_getTextWidth",e,t);var n=this._getWidthOfLine(e,0,t);for(var r=1,i=t.length;r<i;r++){var s=this._getWidthOfLine(e,r,t);s>n&&(n=s)}return n},_getHeightOfLine:function(e,t,n){n=n||this.text.split(this._reNewline);var r=this._getHeightOfChar(e,n[t][0],t,0),i=n[t],s=i.split("");for(var o=1,u=s.length;o<u;o++){var a=this._getHeightOfChar(e,s[o],t,o);a>r&&(r=a)}return r*this.lineHeight},_getTextHeight:function(e,t){var n=0;for(var r=0,i=t.length;r<i;r++)n+=this._getHeightOfLine(e,r,t);return n},_getTopOffset:function(){var e=fabric.Text.prototype._getTopOffset.call(this);return e-this.fontSize/this._fontSizeFraction},_renderTextBoxBackground:function(e){if(!this.backgroundColor)return;e.save(),e.fillStyle=this.backgroundColor,e.fillRect(this._getLeftOffset(),this._getTopOffset()+this.fontSize/this._fontSizeFraction,this.width,this.height),e.restore()},toObject:function(t){return fabric.util.object.extend(this.callSuper("toObject",t),{styles:e(this.styles)})}}),fabric.IText.fromObject=function(t){return new fabric.IText(t.text,e(t))},fabric.IText.instances=[]}(),function(){var e=fabric.util.object.clone;fabric.util.object.extend(fabric.IText.prototype,{initBehavior:function(){this.initAddedHandler(),this.initCursorSelectionHandlers(),this.initDoubleClickSimulation()},initSelectedHandler:function(){this.on("selected",function(){var e=this;setTimeout(function(){e.selected=!0},100)})},initAddedHandler:function(){this.on("added",function(){this.canvas&&!this.canvas._hasITextHandlers&&(this.canvas._hasITextHandlers=!0,this._initCanvasHandlers())})},_initCanvasHandlers:function(){this.canvas.on("selection:cleared",function(){fabric.IText.prototype.exitEditingOnOthers.call()}),this.canvas.on("mouse:up",function(){fabric.IText.instances.forEach(function(e){e.__isMousedown=!1})}),this.canvas.on("object:selected",function(e){fabric.IText.prototype.exitEditingOnOthers.call(e.target)})},_tick:function(){if(this._abortCursorAnimation)return;var e=this;this.animate("_currentCursorOpacity",1,{duration:this.cursorDuration,onComplete:function(){e._onTickComplete()},onChange:function(){e.canvas&&e.canvas.renderAll()},abort:function(){return e._abortCursorAnimation}})},_onTickComplete:function(){if(this._abortCursorAnimation)return;var e=this;this._cursorTimeout1&&clearTimeout(this._cursorTimeout1),this._cursorTimeout1=setTimeout(function(){e.animate("_currentCursorOpacity",0,{duration:this.cursorDuration/2,onComplete:function(){e._tick()},onChange:function(){e.canvas&&e.canvas.renderAll()},abort:function(){return e._abortCursorAnimation}})},100)},initDelayedCursor:function(e){var t=this,n=e?0:this.cursorDelay;e&&(this._abortCursorAnimation=!0,clearTimeout(this._cursorTimeout1),this._currentCursorOpacity=1,this.canvas&&this.canvas.renderAll()),this._cursorTimeout2&&clearTimeout(this._cursorTimeout2),this._cursorTimeout2=setTimeout(function(){t._abortCursorAnimation=!1,t._tick()},n)},abortCursorAnimation:function(){this._abortCursorAnimation=!0,clearTimeout(this._cursorTimeout1),clearTimeout(this._cursorTimeout2),this._currentCursorOpacity=0,this.canvas&&this.canvas.renderAll();var e=this;setTimeout(function(){e._abortCursorAnimation=!1},10)},selectAll:function(){this.selectionStart=0,this.selectionEnd=this.text.length,this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},getSelectedText:function(){return this.text.slice(this.selectionStart,this.selectionEnd)},findWordBoundaryLeft:function(e){var t=0,n=e-1;if(this._reSpace.test(this.text.charAt(n)))while(this._reSpace.test(this.text.charAt(n)))t++,n--;while(/\S/.test(this.text.charAt(n))&&n>-1)t++,n--;return e-t},findWordBoundaryRight:function(e){var t=0,n=e;if(this._reSpace.test(this.text.charAt(n)))while(this._reSpace.test(this.text.charAt(n)))t++,n++;while(/\S/.test(this.text.charAt(n))&&n<this.text.length)t++,n++;return e+t},findLineBoundaryLeft:function(e){var t=0,n=e-1;while(!/\n/.test(this.text.charAt(n))&&n>-1)t++,n--;return e-t},findLineBoundaryRight:function(e){var t=0,n=e;while(!/\n/.test(this.text.charAt(n))&&n<this.text.length)t++,n++;return e+t},getNumNewLinesInSelectedText:function(){var e=this.getSelectedText(),t=0;for(var n=0,r=e.split(""),i=r.length;n<i;n++)r[n]==="\n"&&t++;return t},searchWordBoundary:function(e,t){var n=this._reSpace.test(this.text.charAt(e))?e-1:e,r=this.text.charAt(n),i=/[ \n\.,;!\?\-]/;while(!i.test(r)&&n>0&&n<this.text.length)n+=t,r=this.text.charAt(n);return i.test(r)&&r!=="\n"&&(n+=t===1?0:1),n},selectWord:function(e){var t=this.searchWordBoundary(e,-1),n=this.searchWordBoundary(e,1);this.setSelectionStart(t),this.setSelectionEnd(n),this.initDelayedCursor(!0)},selectLine:function(e){var t=this.findLineBoundaryLeft(e),n=this.findLineBoundaryRight(e);this.setSelectionStart(t),this.setSelectionEnd(n),this.initDelayedCursor(!0)},enterEditing:function(){if(this.isEditing||!this.editable)return;return this.exitEditingOnOthers(),this.isEditing=!0,this.initHiddenTextarea(),this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._tick(),this.canvas&&this.canvas.renderAll(),this.fire("editing:entered"),this.canvas&&this.canvas.fire("text:editing:entered",{target:this}),this},exitEditingOnOthers:function(){fabric.IText.instances.forEach(function(e){e.selected=!1,e.isEditing&&e.exitEditing()},this)},_setEditingProps:function(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0},_updateTextarea:function(){if(!this.hiddenTextarea)return;this.hiddenTextarea.value=this.text,this.hiddenTextarea.selectionStart=this.selectionStart},_saveEditingProps:function(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}},_restoreEditingProps:function(){if(!this._savedProps)return;this.hoverCursor=this._savedProps.overCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor)},exitEditing:function(){return this.selected=!1,this.isEditing=!1,this.selectable=!0,this.selectionEnd=this.selectionStart,this.hiddenTextarea&&this.canvas&&this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea),this.hiddenTextarea=null,this.abortCursorAnimation(),this._restoreEditingProps(),this._currentCursorOpacity=0,this.fire("editing:exited"),this.canvas&&this.canvas.fire("text:editing:exited",{target:this}),this},_removeExtraneousStyles:function(){var e=this.text.split(this._reNewline);for(var t in this.styles)e[t]||delete this.styles[t]},_removeCharsFromTo:function(e,t){var n=t;while(n!==e){var r=this.get2DCursorLocation(n).charIndex;n--;var i=this.get2DCursorLocation(n).charIndex,s=i>r;s?this.removeStyleObject(s,n+1):this.removeStyleObject(this.get2DCursorLocation(n).charIndex===0,n)}this.text=this.text.slice(0,e)+this.text.slice(t)},insertChars:function(e){var t=this.text.slice(this.selectionStart,this.selectionStart+1)==="\n";this.text=this.text.slice(0,this.selectionStart)+e+this.text.slice(this.selectionEnd),this.selectionStart===this.selectionEnd&&this.insertStyleObjects(e,t,this.copiedStyles),this.selectionStart+=e.length,this.selectionEnd=this.selectionStart,this.canvas&&this.canvas.renderAll().renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this})},insertNewlineStyleObject:function(t,n,r){this.shiftLineStyles(t,1),this.styles[t+1]||(this.styles[t+1]={});var i=this.styles[t][n-1],s={};if(r)s[0]=e(i),this.styles[t+1]=s;else{for(var o in this.styles[t])parseInt(o,10)>=n&&(s[parseInt(o,10)-n]=this.styles[t][o],delete this.styles[t][o]);this.styles[t+1]=s}},insertCharStyleObject:function(t,n,r){var i=this.styles[t],s=e(i);n===0&&!r&&(n=1);for(var o in s){var u=parseInt(o,10);u>=n&&(i[u+1]=s[u])}this.styles[t][n]=r||e(i[n-1])},insertStyleObjects:function(e,t,n){var r=this.get2DCursorLocation(),i=r.lineIndex,s=r.charIndex;this.styles[i]||(this.styles[i]={}),e==="\n"?this.insertNewlineStyleObject(i,s,t):n?this._insertStyles(n):this.insertCharStyleObject(i,s)},_insertStyles:function(e){for(var t=0,n=e.length;t<n;t++){var r=this.get2DCursorLocation(this.selectionStart+t),i=r.lineIndex,s=r.charIndex;this.insertCharStyleObject(i,s,e[t])}},shiftLineStyles:function(t,n){var r=e(this.styles);for(var i in this.styles){var s=parseInt(i,10);s>t&&(this.styles[s+n]=r[s])}},removeStyleObject:function(t,n){var r=this.get2DCursorLocation(n),i=r.lineIndex,s=r.charIndex;if(t){var o=this.text.split(this._reNewline),u=o[i-1],a=u?u.length:0;this.styles[i-1]||(this.styles[i-1]={});for(s in this.styles[i])this.styles[i-1][parseInt(s,10)+a]=this.styles[i][s];this.shiftLineStyles(i,-1)}else{var f=this.styles[i];if(f){var l=this.selectionStart===this.selectionEnd?-1:0;delete f[s+l]}var c=e(f);for(var h in c){var p=parseInt(h,10);p>=s&&p!==0&&(f[p-1]=c[p],delete f[p])}}},insertNewline:function(){this.insertChars("\n")}})}(),fabric.util.object.extend(fabric.IText.prototype,{initDoubleClickSimulation:function(){this.__lastClickTime=+(new Date),this.__lastLastClickTime=+(new Date),this.__lastPointer={},this.on("mousedown",this.onMouseDown.bind(this))},onMouseDown:function(e){this.__newClickTime=+(new Date);var t=this.canvas.getPointer(e.e);this.isTripleClick(t)?(this.fire("tripleclick",e),this._stopEvent(e.e)):this.isDoubleClick(t)&&(this.fire("dblclick",e),this._stopEvent(e.e)),this.__lastLastClickTime=this.__lastClickTime,this.__lastClickTime=this.__newClickTime,this.__lastPointer=t,this.__lastIsEditing=this.isEditing,this.__lastSelected=this.selected},isDoubleClick:function(e){return this.__newClickTime-this.__lastClickTime<500&&this.__lastPointer.x===e.x&&this.__lastPointer.y===e.y&&this.__lastIsEditing},isTripleClick:function(e){return this.__newClickTime-this.__lastClickTime<500&&this.__lastClickTime-this.__lastLastClickTime<500&&this.__lastPointer.x===e.x&&this.__lastPointer.y===e.y},_stopEvent:function(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()},initCursorSelectionHandlers:function(){this.initSelectedHandler(),this.initMousedownHandler(),this.initMousemoveHandler(),this.initMouseupHandler(),this.initClicks()},initClicks:function(){this.on("dblclick",function(e){this.selectWord(this.getSelectionStartFromPointer(e.e))}),this.on("tripleclick",function(e){this.selectLine(this.getSelectionStartFromPointer(e.e))})},initMousedownHandler:function(){this.on("mousedown",function(e){var t=this.canvas.getPointer(e.e);this.__mousedownX=t.x,this.__mousedownY=t.y,this.__isMousedown=!0,this.hiddenTextarea&&this.canvas&&this.canvas.wrapperEl.appendChild(this.hiddenTextarea),this.selected&&this.setCursorByClick(e.e),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.initDelayedCursor(!0))})},initMousemoveHandler:function(){this.on("mousemove",function(e){if(!this.__isMousedown||!this.isEditing)return;var t=this.getSelectionStartFromPointer(e.e);t>=this.__selectionStartOnMouseDown?(this.setSelectionStart(this.__selectionStartOnMouseDown),this.setSelectionEnd(t)):(this.setSelectionStart(t),this.setSelectionEnd(this.__selectionStartOnMouseDown))})},_isObjectMoved:function(e){var t=this.canvas.getPointer(e);return this.__mousedownX!==t.x||this.__mousedownY!==t.y},initMouseupHandler:function(){this.on("mouseup",function(e){this.__isMousedown=!1;if(this._isObjectMoved(e.e))return;this.__lastSelected&&(this.enterEditing(),this.initDelayedCursor(!0)),this.selected=!0})},setCursorByClick:function(e){var t=this.getSelectionStartFromPointer(e);e.shiftKey?t<this.selectionStart?(this.setSelectionEnd(this.selectionStart),this.setSelectionStart(t)):this.setSelectionEnd(t):(this.setSelectionStart(t),this.setSelectionEnd(t))},_getLocalRotatedPointer:function(e){var t=this.canvas.getPointer(e),n=new fabric.Point(t.x,t.y),r=new fabric.Point(this.left,this.top),i=fabric.util.rotatePoint(n,r,fabric.util.degreesToRadians(-this.angle));return this.getLocalPointer(e,i)},getSelectionStartFromPointer:function(e){var t=this._getLocalRotatedPointer(e),n=this.text.split(this._reNewline),r=0,i=0,s=0,o=0,u;for(var a=0,f=n.length;a<f;a++){s+=this._getHeightOfLine(this.ctx,a)*this.scaleY;var l=this._getWidthOfLine(this.ctx,a,n),c=this._getLineLeftOffset(l);i=c*this.scaleX,this.flipX&&(n[a]=n[a].split("").reverse().join(""));for(var h=0,p=n[a].length;h<p;h++){var d=n[a][h];r=i,i+=this._getWidthOfChar(this.ctx,d,a,this.flipX?p-h:h)*this.scaleX;if(s<=t.y||i<=t.x){o++;continue}return this._getNewSelectionStartFromOffset(t,r,i,o+a,p)}if(t.y<s)return this._getNewSelectionStartFromOffset(t,r,i,o+a,p)}if(typeof u=="undefined")return this.text.length},_getNewSelectionStartFromOffset:function(e,t,n,r,i){var s=e.x-t,o=n-e.x,u=o>s?0:1,a=r+u;return this.flipX&&(a=i-a),a>this.text.length&&(a=this.text.length),a}}),fabric.util.object.extend(fabric.IText.prototype,{initHiddenTextarea:function(){this.hiddenTextarea=fabric.document.createElement("textarea"),this.hiddenTextarea.setAttribute("autocapitalize","off"),this.hiddenTextarea.style.cssText="position: fixed; bottom: 20px; left: 0px; opacity: 0; width: 0px; height: 0px; z-index: -999;",fabric.document.body.appendChild(this.hiddenTextarea),fabric.util.addListener(this.hiddenTextarea,"keydown",this.onKeyDown.bind(this)),fabric.util.addListener(this.hiddenTextarea,"keypress",this.onKeyPress.bind(this)),fabric.util.addListener(this.hiddenTextarea,"copy",this.copy.bind(this)),fabric.util.addListener(this.hiddenTextarea,"paste",this.paste.bind(this)),!this._clickHandlerInitialized&&this.canvas&&(fabric.util.addListener(this.canvas.upperCanvasEl,"click",this.onClick.bind(this)),this._clickHandlerInitialized=!0)},_keysMap:{8:"removeChars",9:"exitEditing",27:"exitEditing",13:"insertNewline",33:"moveCursorUp",34:"moveCursorDown",35:"moveCursorRight",36:"moveCursorLeft",37:"moveCursorLeft",38:"moveCursorUp",39:"moveCursorRight",40:"moveCursorDown",46:"forwardDelete"},_ctrlKeysMap:{65:"selectAll",88:"cut"},onClick:function(){this.hiddenTextarea&&this.hiddenTextarea.focus()},onKeyDown:function(e){if(!this.isEditing)return;if(e.keyCode in this._keysMap)this[this._keysMap[e.keyCode]](e);else{if(!(e.keyCode in this._ctrlKeysMap&&(e.ctrlKey||e.metaKey)))return;this[this._ctrlKeysMap[e.keyCode]](e)}e.stopImmediatePropagation(),e.preventDefault(),this.canvas&&this.canvas.renderAll()},forwardDelete:function(e){this.selectionStart===this.selectionEnd&&this.moveCursorRight(e),this.removeChars(e)},copy:function(e){var t=this.getSelectedText(),n=this._getClipboardData(e);n&&n.setData("text",t),this.copiedText=t,this.copiedStyles=this.getSelectionStyles(this.selectionStart,this.selectionEnd)},paste:function(e){var t=null,n=this._getClipboardData(e);n?t=n.getData("text"):t=this.copiedText,t&&this.insertChars(t)},cut:function(e){if(this.selectionStart===this.selectionEnd)return;this.copy(),this.removeChars(e)},_getClipboardData:function(e){return e&&(e.clipboardData||fabric.window.clipboardData)},onKeyPress:function(e){if(!this.isEditing||e.metaKey||e.ctrlKey)return;e.which!==0&&this.insertChars(String.fromCharCode(e.which)),e.stopPropagation()},getDownCursorOffset:function(e,t){var n=t?this.selectionEnd:this.selectionStart,r=this.text.split(this._reNewline),i,s,o=this.text.slice(0,n),u=this.text.slice(n),a=o.slice(o.lastIndexOf("\n")+1),f=u.match(/(.*)\n?/)[1],l=(u.match(/.*\n(.*)\n?/)||{})[1]||"",c=this.get2DCursorLocation(n);if(c.lineIndex===r.length-1||e.metaKey||e.keyCode===34)return this.text.length-n;var h=this._getWidthOfLine(this.ctx,c.lineIndex,r);s=this._getLineLeftOffset(h);var p=s,d=c.lineIndex;for(var v=0,m=a.length;v<m;v++)i=a[v],p+=this._getWidthOfChar(this.ctx,i,d,v);var g=this._getIndexOnNextLine(c,l,p,r);return f.length+1+g},_getIndexOnNextLine:function(e,t,n,r){var i=e.lineIndex+1,s=this._getWidthOfLine(this.ctx,i,r),o=this._getLineLeftOffset(s),u=o,a=0,f;for(var l=0,c=t.length;l<c;l++){var h=t[l],p=this._getWidthOfChar(this.ctx,h,i,l);u+=p;if(u>n){f=!0;var d=u-p,v=u,m=Math.abs(d-n),g=Math.abs(v-n);a=g<m?l+1:l;break}}return f||(a=t.length),a},moveCursorDown:function(e){this.abortCursorAnimation(),this._currentCursorOpacity=1;var t=this.getDownCursorOffset(e,this._selectionDirection==="right");e.shiftKey?this.moveCursorDownWithShift(t):this.moveCursorDownWithoutShift(t),this.initDelayedCursor()},moveCursorDownWithoutShift:function(e){this._selectionDirection="right",this.selectionStart+=e,this.selectionStart>this.text.length&&(this.selectionStart=this.text.length),this.selectionEnd=this.selectionStart,this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},swapSelectionPoints:function(){var e=this.selectionEnd;this.selectionEnd=this.selectionStart,this.selectionStart=e},moveCursorDownWithShift:function(e){this.selectionEnd===this.selectionStart&&(this._selectionDirection="right");var t=this._selectionDirection==="right"?"selectionEnd":"selectionStart";this[t]+=e,this.selectionEnd<this.selectionStart&&this._selectionDirection==="left"&&(this.swapSelectionPoints(),this._selectionDirection="right"),this.selectionEnd>this.text.length&&(this.selectionEnd=this.text.length),this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},getUpCursorOffset:function(e,t){var n=t?this.selectionEnd:this.selectionStart,r=this.get2DCursorLocation(n);if(r.lineIndex===0||e.metaKey||e.keyCode===33)return n;var i=this.text.slice(0,n),s=i.slice(i.lastIndexOf("\n")+1),o=(i.match(/\n?(.*)\n.*$/)||{})[1]||"",u=this.text.split(this._reNewline),a,f=this._getWidthOfLine(this.ctx,r.lineIndex,u),l=this._getLineLeftOffset(f),c=l,h=r.lineIndex;for(var p=0,d=s.length;p<d;p++)a=s[p],c+=this._getWidthOfChar(this.ctx,a,h,p);var v=this._getIndexOnPrevLine(r,o,c,u);return o.length-v+s.length},_getIndexOnPrevLine:function(e,t,n,r){var i=e.lineIndex-1,s=this._getWidthOfLine(this.ctx,i,r),o=this._getLineLeftOffset(s),u=o,a=0,f;for(var l=0,c=t.length;l<c;l++){var h=t[l],p=this._getWidthOfChar(this.ctx,h,i,l);u+=p;if(u>n){f=!0;var d=u-p,v=u,m=Math.abs(d-n),g=Math.abs(v-n);a=g<m?l:l-1;break}}return f||(a=t.length-1),a},moveCursorUp:function(e){this.abortCursorAnimation(),this._currentCursorOpacity=1;var t=this.getUpCursorOffset(e,this._selectionDirection==="right");e.shiftKey?this.moveCursorUpWithShift(t):this.moveCursorUpWithoutShift(t),this.initDelayedCursor()},moveCursorUpWithShift:function(e){this.selectionEnd===this.selectionStart&&(this._selectionDirection="left");var t=this._selectionDirection==="right"?"selectionEnd":"selectionStart";this[t]-=e,this.selectionEnd<this.selectionStart&&this._selectionDirection==="right"&&(this.swapSelectionPoints(),this._selectionDirection="left"),this.selectionStart<0&&(this.selectionStart=0),this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},moveCursorUpWithoutShift:function(e){this.selectionStart===this.selectionEnd&&(this.selectionStart-=e),this.selectionStart<0&&(this.selectionStart=0),this.selectionEnd=this.selectionStart,this._selectionDirection="left",this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},moveCursorLeft:function(e){if(this.selectionStart===0&&this.selectionEnd===0)return;this.abortCursorAnimation(),this._currentCursorOpacity=1,e.shiftKey?this.moveCursorLeftWithShift(e):this.moveCursorLeftWithoutShift(e),this.initDelayedCursor()},_move:function(e,t,n){e.altKey?this[t]=this["findWordBoundary"+n](this[t]):e.metaKey||e.keyCode===35||e.keyCode===36?this[t]=this["findLineBoundary"+n](this[t]):this[t]+=n==="Left"?-1:1},_moveLeft:function(e,t){this._move(e,t,"Left")},_moveRight:function(e,t){this._move(e,t,"Right")},moveCursorLeftWithoutShift:function(e){this._selectionDirection="left",this.selectionEnd===this.selectionStart&&this._moveLeft(e,"selectionStart"),this.selectionEnd=this.selectionStart,this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},moveCursorLeftWithShift:function(e){this._selectionDirection==="right"&&this.selectionStart!==this.selectionEnd?this._moveLeft(e,"selectionEnd"):(this._selectionDirection="left",this._moveLeft(e,"selectionStart"),this.text.charAt(this.selectionStart)==="\n"&&this.selectionStart--,this.selectionStart<0&&(this.selectionStart=0)),this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},moveCursorRight:function(e){if(this.selectionStart>=this.text.length&&this.selectionEnd>=this.text.length)return;this.abortCursorAnimation(),this._currentCursorOpacity=1,e.shiftKey?this.moveCursorRightWithShift(e):this.moveCursorRightWithoutShift(e),this.initDelayedCursor()},moveCursorRightWithShift:function(e){this._selectionDirection==="left"&&this.selectionStart!==this.selectionEnd?this._moveRight(e,"selectionStart"):(this._selectionDirection="right",this._moveRight(e,"selectionEnd"),this.text.charAt(this.selectionEnd-1)==="\n"&&this.selectionEnd++,this.selectionEnd>this.text.length&&(this.selectionEnd=this.text.length)),this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},moveCursorRightWithoutShift:function(e){this._selectionDirection="right",this.selectionStart===this.selectionEnd?(this._moveRight(e,"selectionStart"),this.selectionEnd=this.selectionStart):(this.selectionEnd+=this.getNumNewLinesInSelectedText(),this.selectionEnd>this.text.length&&(this.selectionEnd=this.text.length),this.selectionStart=this.selectionEnd),this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})},removeChars:function(e){this.selectionStart===this.selectionEnd?this._removeCharsNearCursor(e):this._removeCharsFromTo(this.selectionStart,this.selectionEnd),this.selectionEnd=this.selectionStart,this._removeExtraneousStyles(),this.canvas&&this.canvas.renderAll().renderAll(),this.setCoords(),this.fire("changed"),this.canvas&&this.canvas.fire("text:changed",{target:this})},_removeCharsNearCursor:function(e){if(this.selectionStart!==0)if(e.metaKey){var t=this.findLineBoundaryLeft(this.selectionStart);this._removeCharsFromTo(t,this.selectionStart),this.selectionStart=t}else if(e.altKey){var n=this.findWordBoundaryLeft(this.selectionStart);this._removeCharsFromTo(n,this.selectionStart),this.selectionStart=n}else{var r=this.text.slice(this.selectionStart-1,this.selectionStart)==="\n";this.removeStyleObject(r),this.selectionStart--,this.text=this.text.slice(0,this.selectionStart)+this.text.slice(this.selectionStart+1)}}}),fabric.util.object.extend(fabric.IText.prototype,{_setSVGTextLineText:function(e,t,n,r,i,s){this.styles[t]?this._setSVGTextLineChars(e,t,n,r,i,s):this.callSuper("_setSVGTextLineText",e,t,n,r,i)},_setSVGTextLineChars:function(e,t,n,r,i,s){var o=t===0||this.useNative?"y":"dy",u=e.split(""),a=0,f=this._getSVGLineLeftOffset(t),l=this._getSVGLineTopOffset(t),c=this._getHeightOfLine(this.ctx,t);for(var h=0,p=u.length;h<p;h++){var d=this.styles[t][h]||{};n.push(this._createTextCharSpan(u[h],d,f,l,o,a));var v=this._getWidthOfChar(this.ctx,u[h],t,h);d.textBackgroundColor&&s.push(this._createTextCharBg(d,f,l,c,v,a)),a+=v}},_getSVGLineLeftOffset:function(e){return this._boundaries&&this._boundaries[e]?fabric.util.toFixed(this._boundaries[e].left,2):0},_getSVGLineTopOffset:function(e){var t=0;for(var n=0;n<=e;n++)t+=this._getHeightOfLine(this.ctx,n);return t-this.height/2},_createTextCharBg:function(e,t,n,r,i,s){return['<rect fill="',e.textBackgroundColor,'" transform="translate(',-this.width/2," ",-this.height+r,")",'" x="',t+s,'" y="',n+r,'" width="',i,'" height="',r,'"></rect>'].join("")},_createTextCharSpan:function(e,t,n,r,i,s){var o=this.getSvgStyles.call(fabric.util.object.extend({visible:!0,fill:this.fill,stroke:this.stroke,type:"text"},t));return['<tspan x="',n+s,'" ',i,'="',r,'" ',t.fontFamily?'font-family="'+t.fontFamily.replace(/"/g,"'")+'" ':"",t.fontSize?'font-size="'+t.fontSize+'" ':"",t.fontStyle?'font-style="'+t.fontStyle+'" ':"",t.fontWeight?'font-weight="'+t.fontWeight+'" ':"",t.textDecoration?'text-decoration="'+t.textDecoration+'" ':"",'style="',o,'">',fabric.util.string.escapeXml(e),"</tspan>"].join("")}}),function(){function request(e,t,n){var r=URL.parse(e);r.port||(r.port=r.protocol.indexOf("https:")===0?443:80);var i=r.port===443?HTTPS:HTTP,s=i.request({hostname:r.hostname,port:r.port,path:r.path,method:"GET"},function(e){var r="";t&&e.setEncoding(t),e.on("end",function(){n(r)}),e.on("data",function(t){e.statusCode===200&&(r+=t)})});s.on("error",function(e){e.errno===process.ECONNREFUSED?fabric.log("ECONNREFUSED: connection refused to "+r.hostname+":"+r.port):fabric.log(e.message)}),s.end()}function requestFs(e,t){var n=require("fs");n.readFile(e,function(e,n){if(e)throw fabric.log(e),e;t(n)})}if(typeof document!="undefined"&&typeof window!="undefined")return;var DOMParser=require("xmldom").DOMParser,URL=require("url"),HTTP=require("http"),HTTPS=require("https"),Canvas=require("canvas"),Image=require("canvas").Image;fabric.util.loadImage=function(e,t,n){function r(r){i.src=new Buffer(r,"binary"),i._src=e,t&&t.call(n,i)}var i=new Image;e&&(e instanceof Buffer||e.indexOf("data")===0)?(i.src=i._src=e,t&&t.call(n,i)):e&&e.indexOf("http")!==0?requestFs(e,r):e?request(e,"binary",r):t&&t.call(n,e)},fabric.loadSVGFromURL=function(e,t,n){e=e.replace(/^\n\s*/,"").replace(/\?.*$/,"").trim(),e.indexOf("http")!==0?requestFs(e,function(
e){fabric.loadSVGFromString(e.toString(),t,n)}):request(e,"",function(e){fabric.loadSVGFromString(e,t,n)})},fabric.loadSVGFromString=function(e,t,n){var r=(new DOMParser).parseFromString(e);fabric.parseSVGDocument(r.documentElement,function(e,n){t&&t(e,n)},n)},fabric.util.getScript=function(url,callback){request(url,"",function(body){eval(body),callback&&callback()})},fabric.Image.fromObject=function(e,t){fabric.util.loadImage(e.src,function(n){var r=new fabric.Image(n);r._initConfig(e),r._initFilters(e,function(e){r.filters=e||[],t&&t(r)})})},fabric.createCanvasForNode=function(e,t,n,r){r=r||n;var i=fabric.document.createElement("canvas"),s=new Canvas(e||600,t||600,r);i.style={},i.width=s.width,i.height=s.height;var o=fabric.Canvas||fabric.StaticCanvas,u=new o(i,n);return u.contextContainer=s.getContext("2d"),u.nodeCanvas=s,u.Font=Canvas.Font,u},fabric.StaticCanvas.prototype.createPNGStream=function(){return this.nodeCanvas.createPNGStream()},fabric.StaticCanvas.prototype.createJPEGStream=function(e){return this.nodeCanvas.createJPEGStream(e)};var origSetWidth=fabric.StaticCanvas.prototype.setWidth;fabric.StaticCanvas.prototype.setWidth=function(e,t){return origSetWidth.call(this,e,t),this.nodeCanvas.width=e,this},fabric.Canvas&&(fabric.Canvas.prototype.setWidth=fabric.StaticCanvas.prototype.setWidth);var origSetHeight=fabric.StaticCanvas.prototype.setHeight;fabric.StaticCanvas.prototype.setHeight=function(e,t){return origSetHeight.call(this,e,t),this.nodeCanvas.height=e,this},fabric.Canvas&&(fabric.Canvas.prototype.setHeight=fabric.StaticCanvas.prototype.setHeight)}();

// CUSTOM FILTER
// !function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Custom=t.util.createClass(t.Image.filters.BaseFilter,{type:"Custom",colorEffectSettings:{colorEffects:[{effectName:"Vivid",aliasName:"vivid",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,13,13,13,14,14,15,15,16,16,17,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,27,27,28,29,30,31,31,32,33,34,35,36,37,38,38,39,41,42,43,45,46,48,50,52,54,56,59,61,64,66,69,72,75,77,80,83,86,89,92,95,98,101,104,107,109,112,115,117,120,122,124,126,128,130,132,134,136,138,140,142,144,145,147,149,151,152,154,156,157,159,161,162,164,165,167,168,169,171,172,173,175,176,177,178,179,180,181,182,183,183,184,185,186,187,188,188,189,190,191,191,192,193,194,194,195,196,196,197,198,198,199,200,200,201,202,202,203,204,204,205,205,206,207,207,208,208,209,210,210,211,211,212,212,213,213,214,215,215,216,216,217,217,218,218,219,219,220,220,221,221,222,222,223,223,223,224,224,225,225,226,226,227,227,228,228,229,229,229,230,230,231,231,232,232,233,233,233,234,234,235],g:[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,11,11,12,12,13,13,14,14,15,16,16,17,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,26,27,28,28,29,30,30,31,32,32,33,34,35,35,36,37,37,38,39,40,40,41,42,43,44,44,45,46,47,48,49,49,50,51,52,53,54,55,56,56,57,58,59,60,61,62,63,64,65,67,68,69,71,72,74,76,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,108,110,112,114,116,118,120,122,124,125,128,130,131,133,135,137,139,141,143,144,146,148,150,152,154,156,158,160,162,164,166,167,169,171,173,175,176,178,180,182,183,185,186,188,190,191,192,194,195,196,198,199,200,201,202,203,204,205,206,207,208,209,210,210,211,212,213,214,215,216,216,217,218,219,219,220,221,222,222,223,224,225,225,226,227,227,228,229,229,230,231,231,232,233,233,234,234,235,236,236,237,237,238,238,239,239,240,241,241,242,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,250,251,251,252,252,253,253,254,254,255,255],b:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,18,18,19,20,20,21,22,22,23,24,25,25,26,27,28,29,30,31,31,32,33,34,35,36,38,39,42,44,46,49,52,55,59,62,66,69,73,77,81,85,89,93,97,101,104,108,112,115,119,122,125,128,131,134,136,139,142,144,147,150,152,155,157,160,162,165,167,169,172,174,176,178,180,182,184,186,187,189,191,192,193,195,196,196,197,198,199,200,201,202,203,204,205,206,207,208,208,209,210,211,212,213,213,214,215,216,216,217,218,219,219,220,221,222,222,223,224,224,225,226,226,227,227,228,229,229,230,230,231,232,232,233,233,234,234,235,236,236,237,237,238,238,239,239,240,240,241,241,242,242,243,243,244,244,244,245,245,246,246,247,247,248,248,249,249,249,250,250,251,251,252,252,252,253,253,254,254,255,255]}}}]},{effectName:"Laguna",aliasName:"laguna",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,25,26,27,27,28,28,29,30,30,31,32,32,33,34,34,35,36,36,37,38,39,39,40,41,42,42,43,44,45,45,46,47,48,49,50,50,51,52,53,54,55,56,57,58,58,59,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,81,82,83,84,85,87,88,89,90,92,93,94,96,97,99,100,102,103,105,107,108,110,112,114,116,118,120,122,124,126,128,130,132,135,137,139,142,144,146,149,151,154,156,159,162,164,167,170,172,175,178,181,184,186,189,192,195,198,201,204,207,210,213,216,219,222,225,228,231,234,237,240,243,246,249,252,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,0,1,1,2,2,3,3,4,4,5,5,6,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,21,21,22,22,23,23,24,25,25,26,26,27,28,28,29,29,30,31,31,32,33,33,34,35,35,36,37,37,38,39,40,40,41,42,43,43,44,45,46,47,47,48,49,50,51,52,53,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,84,85,86,87,88,90,91,92,94,95,97,98,100,101,103,104,106,108,110,111,113,115,117,119,121,123,125,127,130,132,134,136,139,141,144,146,148,151,154,156,159,161,164,167,169,172,175,178,180,183,186,189,192,195,198,201,203,206,209,212,215,218,221,224,227,231,234,237,240,243,246,249,252,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],b:[47,49,51,53,55,57,58,60,62,64,66,67,69,71,73,75,76,78,80,82,84,85,87,89,91,92,94,96,98,100,101,103,105,106,108,110,112,113,115,117,118,120,122,123,125,127,128,130,132,133,135,137,138,140,141,143,144,146,148,149,151,152,154,155,157,158,160,161,162,164,165,167,168,169,171,172,174,175,176,177,179,180,181,183,184,185,186,187,189,190,191,192,193,194,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,215,216,217,218,219,219,220,221,222,222,223,224,224,225,226,226,227,228,228,229,230,230,231,231,232,233,233,234,234,235,235,236,236,237,237,238,239,239,239,240,240,241,241,242,242,243,243,244,244,245,245,245,246,246,247,247,247,248,248,249,249,249,250,250,251,251,251,252,252,252,253,253,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]}}}]},{effectName:"Sepia",aliasName:"sepia",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"fixvalue",entries:[.393,.769,.189,0,.349,.686,.168,0,.272,.534,.131,0],gain:1}]}}]},{effectName:"B&W",aliasName:"grayscale",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"saturation",value:1}]}}]},{effectName:"Lucky",aliasName:"lucky",effectsCombination:[{subeffectName:"vignette",params:{color:{a:89,r:0,g:0,b:0},vignetteScale:.2,blendMode:"overlay"}},{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,26,26,27,28,28,29,30,31,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,63,64,65,66,67,69,70,71,73,74,75,77,78,79,81,82,84,85,86,88,89,91,92,94,95,97,98,100,101,103,104,106,108,109,111,112,114,116,117,119,121,122,124,126,127,129,131,132,134,136,138,139,141,143,145,146,148,150,152,154,155,157,159,161,163,165,166,168,170,172,174,176,178,179,181,183,185,187,189,191,193,195,197,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,229,231,233,235,237,239,241,243,245,247,249,251,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,93,94,95,96,97,98,100,101,102,103,104,105,107,108,109,110,111,113,114,115,116,117,119,120,121,122,123,125,126,127,128,129,131,132,133,134,135,137,138,139,140,141,143,144,145,146,147,149,150,151,152,153,154,156,157,158,159,160,161,163,164,165,166,167,168,169,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,216,216,217,218,219,220,221,221,222,223,224,225,225,226,227,228,228,229,230,231,232,232,233,234,234,235,236,237,237,238,239,240,240,241,242,242,243,244,245,245,246,247,247,248,249,249,250,251,252,252,253,254,254,255],b:[28,29,30,30,31,32,33,34,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,46,47,48,49,49,50,51,52,53,53,54,55,56,57,57,58,59,60,61,61,62,63,64,65,65,66,67,68,69,69,70,71,72,73,73,74,75,76,77,77,78,79,80,81,81,82,83,84,85,85,86,87,88,89,89,90,91,92,92,93,94,95,96,96,97,98,99,100,100,101,102,103,104,104,105,106,107,108,108,109,110,111,112,112,113,114,115,116,116,117,118,119,120,120,121,122,123,124,124,125,126,127,128,128,129,130,131,131,132,133,134,135,135,136,137,138,139,139,140,141,142,143,143,144,145,146,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,159,159,160,161,162,163,163,164,165,166,167,167,168,169,170,170,171,172,173,174,174,175,176,177,178,178,179,180,181,182,182,183,184,185,186,186,187,188,189,190,190,191,192,193,194,194,195,196,197,198,198,199,200,201,202,202,203,204,205,206,206,207,208,209,210,210,211,212,213,213,214,215,216,217,217,218,219,220,221,221,222,223,224,225,225,226,227,228,229,229,230,231]}}}]},{effectName:"Cruz",aliasName:"cruz",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,1,1,2,3,3,4,5,6,6,7,8,8,9,10,10,11,12,13,13,14,15,15,16,17,18,18,19,20,21,21,22,23,23,24,25,26,27,27,28,29,30,30,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,83,84,85,86,87,89,90,91,92,94,95,96,97,99,100,101,102,104,105,106,107,109,110,111,113,114,115,116,118,119,120,122,123,124,126,127,128,130,131,132,134,135,136,137,139,140,141,143,144,145,147,148,149,151,152,153,154,156,157,158,160,161,162,163,165,166,167,168,170,171,172,173,175,176,177,178,180,181,182,183,184,185,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,218,219,220,221,222,223,224,225,225,226,227,228,229,230,230,231,232,233,234,235,235,236,237,238,238,239,240,241,242,242,243,244,245,245,246,247,248,248,249,250,251,251,252,253,254,254,255],g:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,4,5,6,8,9,10,11,13,14,15,16,18,19,20,21,23,24,25,26,28,29,30,31,33,34,35,36,38,39,40,41,43,44,45,46,48,49,50,52,53,54,55,57,58,59,60,62,63,64,65,67,68,69,70,72,73,74,75,77,78,79,80,82,83,84,85,87,88,89,90,92,93,94,95,97,98,99,100,102,103,104,106,107,108,109,111,112,113,114,116,117,118,119,121,122,123,124,126,127,128,129,131,132,133,134,136,137,138,139,141,142,143,144,146,147,148,149,151,152,153,155,156,157,158,160,161,162,163,165,166,167,168,170,171,172,173,175,176,177,178,180,181,182,183,185,186,187,188,190,191,192,193,195,196,197,198,200,201,202,203,205,206,207,209,210,211,212,214,215,216,217,219,220,221,222,224,225,226,227,229,230,231,232,234,235,236,237,239,240,241,242,244,245,246,247,249,250,251,252,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],b:[0,1,2,3,3,4,5,6,7,8,8,9,10,11,12,13,13,14,15,16,17,18,18,19,20,21,22,23,23,24,25,26,27,28,28,29,30,31,32,33,33,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,47,47,48,49,50,51,51,52,53,54,55,56,56,57,58,59,60,60,61,62,63,64,64,65,66,67,67,68,69,70,71,71,72,73,74,75,75,76,77,78,78,79,80,81,81,82,83,84,85,85,86,87,88,88,89,90,91,91,92,93,94,94,95,96,97,97,98,99,100,100,101,102,103,103,104,105,106,107,107,108,109,110,111,111,112,113,114,115,115,116,117,118,119,120,120,121,122,123,124,125,126,126,127,128,129,130,131,132,133,134,135,136,137,137,138,139,140,141,142,143,144,145,147,148,149,150,151,152,153,154,155,156,157,159,160,161,162,163,164,166,167,168,169,171,172,173,174,176,177,178,180,181,182,184,185,187,188,189,191,192,194,195,197,198,200,201,203,204,206,207,209,210,212,213,215,216,218,219,221,223,224,226,227,229,231,232,234,235,237,239,240,242,244,245,247,248,250,252,253,255]}}},{subeffectName:"blendWithColor",params:{color:{a:255,r:248,g:86,b:204},blendMode:"overlay",alpha:.2}},{subeffectName:"contrast",params:{value:1.1954554506}},{subeffectName:"gamma",params:{value:.9503692}}]},{effectName:"Marie",aliasName:"marie",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,26,26,27,28,28,29,30,31,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,63,64,65,66,67,69,70,71,73,74,75,77,78,79,81,82,84,85,86,88,89,91,92,94,95,97,98,100,101,103,104,106,108,109,111,112,114,116,117,119,121,122,124,126,127,129,131,132,134,136,138,139,141,143,145,146,148,150,152,154,155,157,159,161,163,165,166,168,170,172,174,176,178,179,181,183,185,187,189,191,193,195,197,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,229,231,233,235,237,239,241,243,245,247,249,251,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,93,94,95,96,97,98,100,101,102,103,104,105,107,108,109,110,111,113,114,115,116,117,119,120,121,122,123,125,126,127,128,129,131,132,133,134,135,137,138,139,140,141,143,144,145,146,147,149,150,151,152,153,154,156,157,158,159,160,161,163,164,165,166,167,168,169,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,216,216,217,218,219,220,221,221,222,223,224,225,225,226,227,228,228,229,230,231,232,232,233,234,234,235,236,237,237,238,239,240,240,241,242,242,243,244,245,245,246,247,247,248,249,249,250,251,252,252,253,254,254,255],b:[28,29,30,30,31,32,33,34,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,46,47,48,49,49,50,51,52,53,53,54,55,56,57,57,58,59,60,61,61,62,63,64,65,65,66,67,68,69,69,70,71,72,73,73,74,75,76,77,77,78,79,80,81,81,82,83,84,85,85,86,87,88,89,89,90,91,92,92,93,94,95,96,96,97,98,99,100,100,101,102,103,104,104,105,106,107,108,108,109,110,111,112,112,113,114,115,116,116,117,118,119,120,120,121,122,123,124,124,125,126,127,128,128,129,130,131,131,132,133,134,135,135,136,137,138,139,139,140,141,142,143,143,144,145,146,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,159,159,160,161,162,163,163,164,165,166,167,167,168,169,170,170,171,172,173,174,174,175,176,177,178,178,179,180,181,182,182,183,184,185,186,186,187,188,189,190,190,191,192,193,194,194,195,196,197,198,198,199,200,201,202,202,203,204,205,206,206,207,208,209,210,210,211,212,213,213,214,215,216,217,217,218,219,220,221,221,222,223,224,225,225,226,227,228,229,229,230,231]}}},{subeffectName:"vignette",params:{color:{a:102,r:0,g:0,b:0},vignetteScale:.3,blendMode:"overlay"}},{subeffectName:"blendWithColor",params:{color:{a:255,r:0,g:0,b:0},blendMode:"overlay",alpha:.27}},{subeffectName:"blendWithColor",params:{color:{a:255,r:66,g:0,b:255},blendMode:"overlay",alpha:.2}},{subeffectName:"blendWithColor",params:{color:{a:255,r:255,g:255,b:255},blendMode:"overlay",alpha:.55}}]},{effectName:"Soft Focus",aliasName:"softfocus",effectsCombination:[{subeffectName:"softfocus",params:{value:5}}]},{effectName:"Boardwalk",aliasName:"boardwalk",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"saturation",value:.45}]}},{subeffectName:"vignette",params:{color:{a:255,r:0,g:0,b:0},vignetteScale:.6,blendMode:"overlay"}},{subeffectName:"blendWithColor",params:{color:{a:255,r:178,g:144,b:111},blendMode:"overlay",alpha:.89}},{subeffectName:"gamma",params:{value:.98}},{subeffectName:"contrast",params:{value:1}}]}]},effectObject:{},mul_table:[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],shg_table:[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],initialize:function(e){e=e||{},this.custom=e.filtername||0},returnEffectSettingObject:function(e){var t=this.colorEffectSettings.colorEffects.length,a={};a.blending=[],a.vignette={};for(var r=0;t>r;r++)if(this.colorEffectSettings.colorEffects[r]&&this.colorEffectSettings.colorEffects[r].aliasName==e)for(var s=this.colorEffectSettings.colorEffects[r].effectsCombination.length,o=0;s>o;o++)if(this.colorEffectSettings.colorEffects[r].effectsCombination[o])switch(this.colorEffectSettings.colorEffects[r].effectsCombination[o].subeffectName){case"histogramMapping":a.curves=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.hMap;break;case"colorMatrixTransform":for(var i=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.operations.length,f=0;i>f;f++)switch(this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.operations[f].operation){case"fixvalue":a.sepia={},a.sepia.entries=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.operations[f].entries;break;case"saturation":a.desaturate=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.operations[f].value;break;case"contrast":a.contrast=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.operations[f].value}break;case"vignette":var c=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params;a.vignette={},a.vignette.scale=c.vignetteScale,a.vignette.blendMode=c.blendMode,a.screen={r:c.color.r,g:c.color.g,b:c.color.b,a:c.color.a};break;case"blendWithColor":var c=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params,n={};n.alpha=c.alpha,n.blendMode=c.blendMode,n.blendModeRGB={r:c.color.r,g:c.color.g,b:c.color.b,a:c.color.a},a.blending.push(n);break;case"softfocus":a.softfocus=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.value;break;case"gamma":a.gamma=this.colorEffectSettings.colorEffects[r].effectsCombination[o].params.value}return a},applyTo:function(e){var t=e.getContext("2d"),a=t.getImageData(0,0,e.width,e.height),r=a.data,s=r.length;switch(this.custom){case"original":this.effectObject={};break;case"grayscale":this.effectObject=this.returnEffectSettingObject("grayscale");break;case"sepia":this.effectObject=this.returnEffectSettingObject("sepia");break;case"vivid":this.effectObject=this.returnEffectSettingObject("vivid");break;case"lucky":this.effectObject=this.returnEffectSettingObject("lucky");break;case"laguna":this.effectObject=this.returnEffectSettingObject("laguna");break;case"marie":this.effectObject=this.returnEffectSettingObject("marie");break;case"cruz":this.effectObject=this.returnEffectSettingObject("cruz");break;case"softfocus":this.effectObject=this.returnEffectSettingObject("softfocus");break;case"boardwalk":this.effectObject=this.returnEffectSettingObject("boardwalk")}this.effectObject&&this.applyActualFilter(e,t,a,r,s,this.effectObject)},applyActualFilter:function(e,t,a,r,s,o){var i,f,c,n,l,b,g,m,u,p,h,d={curves:!1,screen:!1,desaturate:!1,vignette:!1,lighten:!1,noise:!1,viewFinder:!1,sepia:!1,brightness:!1,contrast:!1,blending:!1,softfocus:!1,gamma:!1},v={},C=a.data,S=e.width,E=e.height;for(var N in d)v[N]=o[N]||d[N];if((v.vignette||v.lighten)&&(i=Math.sqrt(Math.pow(S/2,2)+Math.pow(E/2,2))),v.vignette.scale){t.globalCompositeOperation=v.vignette.blendMode;var M=t.createRadialGradient(S/2,E/2,0,S/2,E/2,i);M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(.5,"rgba(0,0,0,0)"),M.addColorStop(1,["rgba(0,0,0,",v.vignette.scale,")"].join("")),t.fillStyle=M,t.fillRect(0,0,S,E)}if(v.lighten){t.globalCompositeOperation="lighter";var M=t.createRadialGradient(S/2,E/2,0,S/2,E/2,i);M.addColorStop(0,["rgba(255,255,255,",v.lighten,")"].join("")),M.addColorStop(.5,"rgba(255,255,255,0)"),M.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=M,t.fillRect(0,0,S,E)}v.softfocus&&this.stackBlurImage(a,t,S,E),v.contrast&&(p=259*(v.contrast+255)/(255*(259-v.contrast))),v.viewFinder&&(u=window.vjsImageCache[[S,E,v.viewFinder].join("-")]);for(var k=S*E;k>=0;--k){for(f=k<<2,v.curves&&(C[f]=v.curves.r[C[f]],C[f+1]=v.curves.g[C[f+1]],C[f+2]=v.curves.b[C[f+2]]),v.contrast&&(C[f]=p*(C[f]-128)+128,C[f+1]=p*(C[f+1]-128)+128,C[f+2]=p*(C[f+2]-128)+128),v.brightness&&(C[f]+=v.brightness,C[f+1]+=v.brightness,C[f+2]+=v.brightness),v.screen&&(C[f]=255-(255-C[f])*(255-v.screen.r*v.screen.a)/255,C[f+1]=255-(255-C[f+1])*(255-v.screen.g*v.screen.a)/255,C[f+2]=255-(255-C[f+2])*(255-v.screen.b*v.screen.a)/255),v.noise&&(m=v.noise-Math.random()*v.noise/2,C[f]+=m,C[f+1]+=m,C[f+2]+=m),v.viewFinder&&(C[f]=C[f]*u[f]/255,C[f+1]=C[f+1]*u[f+1]/255,C[f+2]=C[f+2]*u[f+2]/255),v.sepia.entries&&(n=C[f],l=C[f+1],b=C[f+2],C[f]=n*v.sepia.entries[0]+l*v.sepia.entries[1]+b*v.sepia.entries[2],C[f+1]=n*v.sepia.entries[4]+l*v.sepia.entries[5]+b*v.sepia.entries[6],C[f+2]=n*v.sepia.entries[8]+l*v.sepia.entries[9]+b*v.sepia.entries[10]),v.desaturate&&(g=(C[f]+C[f+1]+C[f+2])/3,C[f]+=(g-C[f])*v.desaturate,C[f+1]+=(g-C[f+1])*v.desaturate,C[f+2]+=(g-C[f+2])*v.desaturate),c=2;c>=0;--c)C[f+c]=~~(C[f+c]>255?255:C[f+c]<0?0:C[f+c]);if(v.gamma){h||(h=1/v.gamma);var j={r:C[f],g:C[f+1],b:C[f+2]},O=Math.pow(255*(j.r/255),h),w=Math.pow(255*(j.g/255),h),y=Math.pow(255*(j.b/255),h);C[f]=O,C[f+1]=w,C[f+2]=y}}if(t.putImageData(a,0,0),v.blending&&v.blending.length>0)for(var x=v.blending.length,k=0;x>k;k++){var B=v.blending[k];t.globalCompositeOperation=B.blendMode,t.fillStyle="rgba("+B.blendModeRGB.r+", "+B.blendModeRGB.g+", "+B.blendModeRGB.b+", "+B.alpha+")",t.fillRect(0,0,S,E)}},BlurStack:function(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null},stackBlurImage:function(e,t,a,r){var s=1,o=!1;o?this.stackBlurCanvasRGBA(e,0,0,a,r,s):this.stackBlurCanvasRGB(e,t,a,r,s)},stackBlurCanvasRGB:function(e,t,a,r,s){if(!(isNaN(s)||1>s)){s|=0;var o,i,f,c,n,l,b,g,m,u,p,h,d,v,C,S,E,N,M,k,j=e.data,O=s+s+1,w=a-1,y=r-1,x=s+1,B=x*(x+1)/2,R=new this.BlurStack,I=R;for(f=1;O>f;f++)if(I=I.next=new this.BlurStack,f==x)var G=I;I.next=R;var F=null,W=null;b=l=0;var z=this.mul_table[s],T=this.shg_table[s];for(i=0;r>i;i++){for(v=C=S=g=m=u=0,p=x*(E=j[l]),h=x*(N=j[l+1]),d=x*(M=j[l+2]),g+=B*E,m+=B*N,u+=B*M,I=R,f=0;x>f;f++)I.r=E,I.g=N,I.b=M,I=I.next;for(f=1;x>f;f++)c=l+((f>w?w:f)<<2),g+=(I.r=E=j[c])*(k=x-f),m+=(I.g=N=j[c+1])*k,u+=(I.b=M=j[c+2])*k,v+=E,C+=N,S+=M,I=I.next;for(F=R,W=G,o=0;a>o;o++)j[l]=g*z>>T,j[l+1]=m*z>>T,j[l+2]=u*z>>T,g-=p,m-=h,u-=d,p-=F.r,h-=F.g,d-=F.b,c=b+((c=o+s+1)<w?c:w)<<2,v+=F.r=j[c],C+=F.g=j[c+1],S+=F.b=j[c+2],g+=v,m+=C,u+=S,F=F.next,p+=E=W.r,h+=N=W.g,d+=M=W.b,v-=E,C-=N,S-=M,W=W.next,l+=4;b+=a}for(o=0;a>o;o++){for(C=S=v=m=u=g=0,l=o<<2,p=x*(E=j[l]),h=x*(N=j[l+1]),d=x*(M=j[l+2]),g+=B*E,m+=B*N,u+=B*M,I=R,f=0;x>f;f++)I.r=E,I.g=N,I.b=M,I=I.next;for(n=a,f=1;s>=f;f++)l=n+o<<2,g+=(I.r=E=j[l])*(k=x-f),m+=(I.g=N=j[l+1])*k,u+=(I.b=M=j[l+2])*k,v+=E,C+=N,S+=M,I=I.next,y>f&&(n+=a);for(l=o,F=R,W=G,i=0;r>i;i++)c=l<<2,j[c]=g*z>>T,j[c+1]=m*z>>T,j[c+2]=u*z>>T,g-=p,m-=h,u-=d,p-=F.r,h-=F.g,d-=F.b,c=o+((c=i+x)<y?c:y)*a<<2,g+=v+=F.r=j[c],m+=C+=F.g=j[c+1],u+=S+=F.b=j[c+2],F=F.next,p+=E=W.r,h+=N=W.g,d+=M=W.b,v-=E,C-=N,S-=M,W=W.next,l+=a}t.putImageData(e,0,0)}}}),t.Image.filters.Custom.fromObject=function(){return new t.Image.filters.Custom}}("undefined"!=typeof exports?exports:this);
!function(e){"use strict";var t=e.fabric||(e.fabric={});t.Image.filters.Custom=t.util.createClass(t.Image.filters.BaseFilter,{type:"Custom",colorEffectSettings:{colorEffects:[{effectName:"Vivid",aliasName:"vivid",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,13,13,13,14,14,15,15,16,16,17,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,27,27,28,29,30,31,31,32,33,34,35,36,37,38,38,39,41,42,43,45,46,48,50,52,54,56,59,61,64,66,69,72,75,77,80,83,86,89,92,95,98,101,104,107,109,112,115,117,120,122,124,126,128,130,132,134,136,138,140,142,144,145,147,149,151,152,154,156,157,159,161,162,164,165,167,168,169,171,172,173,175,176,177,178,179,180,181,182,183,183,184,185,186,187,188,188,189,190,191,191,192,193,194,194,195,196,196,197,198,198,199,200,200,201,202,202,203,204,204,205,205,206,207,207,208,208,209,210,210,211,211,212,212,213,213,214,215,215,216,216,217,217,218,218,219,219,220,220,221,221,222,222,223,223,223,224,224,225,225,226,226,227,227,228,228,229,229,229,230,230,231,231,232,232,233,233,233,234,234,235],g:[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,11,11,12,12,13,13,14,14,15,16,16,17,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,26,27,28,28,29,30,30,31,32,32,33,34,35,35,36,37,37,38,39,40,40,41,42,43,44,44,45,46,47,48,49,49,50,51,52,53,54,55,56,56,57,58,59,60,61,62,63,64,65,67,68,69,71,72,74,76,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,108,110,112,114,116,118,120,122,124,125,128,130,131,133,135,137,139,141,143,144,146,148,150,152,154,156,158,160,162,164,166,167,169,171,173,175,176,178,180,182,183,185,186,188,190,191,192,194,195,196,198,199,200,201,202,203,204,205,206,207,208,209,210,210,211,212,213,214,215,216,216,217,218,219,219,220,221,222,222,223,224,225,225,226,227,227,228,229,229,230,231,231,232,233,233,234,234,235,236,236,237,237,238,238,239,239,240,241,241,242,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,250,251,251,252,252,253,253,254,254,255,255],b:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,18,18,19,20,20,21,22,22,23,24,25,25,26,27,28,29,30,31,31,32,33,34,35,36,38,39,42,44,46,49,52,55,59,62,66,69,73,77,81,85,89,93,97,101,104,108,112,115,119,122,125,128,131,134,136,139,142,144,147,150,152,155,157,160,162,165,167,169,172,174,176,178,180,182,184,186,187,189,191,192,193,195,196,196,197,198,199,200,201,202,203,204,205,206,207,208,208,209,210,211,212,213,213,214,215,216,216,217,218,219,219,220,221,222,222,223,224,224,225,226,226,227,227,228,229,229,230,230,231,232,232,233,233,234,234,235,236,236,237,237,238,238,239,239,240,240,241,241,242,242,243,243,244,244,244,245,245,246,246,247,247,248,248,249,249,249,250,250,251,251,252,252,252,253,253,254,254,255,255]}}}]},{effectName:"Laguna",aliasName:"laguna",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,25,26,27,27,28,28,29,30,30,31,32,32,33,34,34,35,36,36,37,38,39,39,40,41,42,42,43,44,45,45,46,47,48,49,50,50,51,52,53,54,55,56,57,58,58,59,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,81,82,83,84,85,87,88,89,90,92,93,94,96,97,99,100,102,103,105,107,108,110,112,114,116,118,120,122,124,126,128,130,132,135,137,139,142,144,146,149,151,154,156,159,162,164,167,170,172,175,178,181,184,186,189,192,195,198,201,204,207,210,213,216,219,222,225,228,231,234,237,240,243,246,249,252,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,0,1,1,2,2,3,3,4,4,5,5,6,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,21,21,22,22,23,23,24,25,25,26,26,27,28,28,29,29,30,31,31,32,33,33,34,35,35,36,37,37,38,39,40,40,41,42,43,43,44,45,46,47,47,48,49,50,51,52,53,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,84,85,86,87,88,90,91,92,94,95,97,98,100,101,103,104,106,108,110,111,113,115,117,119,121,123,125,127,130,132,134,136,139,141,144,146,148,151,154,156,159,161,164,167,169,172,175,178,180,183,186,189,192,195,198,201,203,206,209,212,215,218,221,224,227,231,234,237,240,243,246,249,252,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],b:[47,49,51,53,55,57,58,60,62,64,66,67,69,71,73,75,76,78,80,82,84,85,87,89,91,92,94,96,98,100,101,103,105,106,108,110,112,113,115,117,118,120,122,123,125,127,128,130,132,133,135,137,138,140,141,143,144,146,148,149,151,152,154,155,157,158,160,161,162,164,165,167,168,169,171,172,174,175,176,177,179,180,181,183,184,185,186,187,189,190,191,192,193,194,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,215,216,217,218,219,219,220,221,222,222,223,224,224,225,226,226,227,228,228,229,230,230,231,231,232,233,233,234,234,235,235,236,236,237,237,238,239,239,239,240,240,241,241,242,242,243,243,244,244,245,245,245,246,246,247,247,247,248,248,249,249,249,250,250,251,251,251,252,252,252,253,253,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]}}}]},{effectName:"Sepia",aliasName:"sepia",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"fixvalue",entries:[.393,.769,.189,0,.349,.686,.168,0,.272,.534,.131,0],gain:1}]}}]},{effectName:"B&W",aliasName:"grayscale",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"saturation",value:1}]}}]},{effectName:"Lucky",aliasName:"lucky",effectsCombination:[{subeffectName:"vignette",params:{color:{a:89,r:0,g:0,b:0},vignetteScale:.2,blendMode:"overlay"}},{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,26,26,27,28,28,29,30,31,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,63,64,65,66,67,69,70,71,73,74,75,77,78,79,81,82,84,85,86,88,89,91,92,94,95,97,98,100,101,103,104,106,108,109,111,112,114,116,117,119,121,122,124,126,127,129,131,132,134,136,138,139,141,143,145,146,148,150,152,154,155,157,159,161,163,165,166,168,170,172,174,176,178,179,181,183,185,187,189,191,193,195,197,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,229,231,233,235,237,239,241,243,245,247,249,251,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,93,94,95,96,97,98,100,101,102,103,104,105,107,108,109,110,111,113,114,115,116,117,119,120,121,122,123,125,126,127,128,129,131,132,133,134,135,137,138,139,140,141,143,144,145,146,147,149,150,151,152,153,154,156,157,158,159,160,161,163,164,165,166,167,168,169,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,216,216,217,218,219,220,221,221,222,223,224,225,225,226,227,228,228,229,230,231,232,232,233,234,234,235,236,237,237,238,239,240,240,241,242,242,243,244,245,245,246,247,247,248,249,249,250,251,252,252,253,254,254,255],b:[28,29,30,30,31,32,33,34,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,46,47,48,49,49,50,51,52,53,53,54,55,56,57,57,58,59,60,61,61,62,63,64,65,65,66,67,68,69,69,70,71,72,73,73,74,75,76,77,77,78,79,80,81,81,82,83,84,85,85,86,87,88,89,89,90,91,92,92,93,94,95,96,96,97,98,99,100,100,101,102,103,104,104,105,106,107,108,108,109,110,111,112,112,113,114,115,116,116,117,118,119,120,120,121,122,123,124,124,125,126,127,128,128,129,130,131,131,132,133,134,135,135,136,137,138,139,139,140,141,142,143,143,144,145,146,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,159,159,160,161,162,163,163,164,165,166,167,167,168,169,170,170,171,172,173,174,174,175,176,177,178,178,179,180,181,182,182,183,184,185,186,186,187,188,189,190,190,191,192,193,194,194,195,196,197,198,198,199,200,201,202,202,203,204,205,206,206,207,208,209,210,210,211,212,213,213,214,215,216,217,217,218,219,220,221,221,222,223,224,225,225,226,227,228,229,229,230,231]}}}]},{effectName:"Cruz",aliasName:"cruz",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,1,1,2,3,3,4,5,6,6,7,8,8,9,10,10,11,12,13,13,14,15,15,16,17,18,18,19,20,21,21,22,23,23,24,25,26,27,27,28,29,30,30,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,83,84,85,86,87,89,90,91,92,94,95,96,97,99,100,101,102,104,105,106,107,109,110,111,113,114,115,116,118,119,120,122,123,124,126,127,128,130,131,132,134,135,136,137,139,140,141,143,144,145,147,148,149,151,152,153,154,156,157,158,160,161,162,163,165,166,167,168,170,171,172,173,175,176,177,178,180,181,182,183,184,185,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,218,219,220,221,222,223,224,225,225,226,227,228,229,230,230,231,232,233,234,235,235,236,237,238,238,239,240,241,242,242,243,244,245,245,246,247,248,248,249,250,251,251,252,253,254,254,255],g:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,4,5,6,8,9,10,11,13,14,15,16,18,19,20,21,23,24,25,26,28,29,30,31,33,34,35,36,38,39,40,41,43,44,45,46,48,49,50,52,53,54,55,57,58,59,60,62,63,64,65,67,68,69,70,72,73,74,75,77,78,79,80,82,83,84,85,87,88,89,90,92,93,94,95,97,98,99,100,102,103,104,106,107,108,109,111,112,113,114,116,117,118,119,121,122,123,124,126,127,128,129,131,132,133,134,136,137,138,139,141,142,143,144,146,147,148,149,151,152,153,155,156,157,158,160,161,162,163,165,166,167,168,170,171,172,173,175,176,177,178,180,181,182,183,185,186,187,188,190,191,192,193,195,196,197,198,200,201,202,203,205,206,207,209,210,211,212,214,215,216,217,219,220,221,222,224,225,226,227,229,230,231,232,234,235,236,237,239,240,241,242,244,245,246,247,249,250,251,252,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],b:[0,1,2,3,3,4,5,6,7,8,8,9,10,11,12,13,13,14,15,16,17,18,18,19,20,21,22,23,23,24,25,26,27,28,28,29,30,31,32,33,33,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,47,47,48,49,50,51,51,52,53,54,55,56,56,57,58,59,60,60,61,62,63,64,64,65,66,67,67,68,69,70,71,71,72,73,74,75,75,76,77,78,78,79,80,81,81,82,83,84,85,85,86,87,88,88,89,90,91,91,92,93,94,94,95,96,97,97,98,99,100,100,101,102,103,103,104,105,106,107,107,108,109,110,111,111,112,113,114,115,115,116,117,118,119,120,120,121,122,123,124,125,126,126,127,128,129,130,131,132,133,134,135,136,137,137,138,139,140,141,142,143,144,145,147,148,149,150,151,152,153,154,155,156,157,159,160,161,162,163,164,166,167,168,169,171,172,173,174,176,177,178,180,181,182,184,185,187,188,189,191,192,194,195,197,198,200,201,203,204,206,207,209,210,212,213,215,216,218,219,221,223,224,226,227,229,231,232,234,235,237,239,240,242,244,245,247,248,250,252,253,255]}}},{subeffectName:"blendWithColor",params:{color:{a:255,r:248,g:86,b:204},blendMode:"overlay",alpha:.2}},{subeffectName:"contrast",params:{value:1.1954554506}},{subeffectName:"gamma",params:{value:.9503692}}]},{effectName:"Marie",aliasName:"marie",effectsCombination:[{subeffectName:"histogramMapping",params:{hMap:{r:[0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,23,23,24,24,25,26,26,27,28,28,29,30,31,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,63,64,65,66,67,69,70,71,73,74,75,77,78,79,81,82,84,85,86,88,89,91,92,94,95,97,98,100,101,103,104,106,108,109,111,112,114,116,117,119,121,122,124,126,127,129,131,132,134,136,138,139,141,143,145,146,148,150,152,154,155,157,159,161,163,165,166,168,170,172,174,176,178,179,181,183,185,187,189,191,193,195,197,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,229,231,233,235,237,239,241,243,245,247,249,251,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],g:[0,1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,93,94,95,96,97,98,100,101,102,103,104,105,107,108,109,110,111,113,114,115,116,117,119,120,121,122,123,125,126,127,128,129,131,132,133,134,135,137,138,139,140,141,143,144,145,146,147,149,150,151,152,153,154,156,157,158,159,160,161,163,164,165,166,167,168,169,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,209,210,211,212,213,214,215,216,216,217,218,219,220,221,221,222,223,224,225,225,226,227,228,228,229,230,231,232,232,233,234,234,235,236,237,237,238,239,240,240,241,242,242,243,244,245,245,246,247,247,248,249,249,250,251,252,252,253,254,254,255],b:[28,29,30,30,31,32,33,34,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,46,47,48,49,49,50,51,52,53,53,54,55,56,57,57,58,59,60,61,61,62,63,64,65,65,66,67,68,69,69,70,71,72,73,73,74,75,76,77,77,78,79,80,81,81,82,83,84,85,85,86,87,88,89,89,90,91,92,92,93,94,95,96,96,97,98,99,100,100,101,102,103,104,104,105,106,107,108,108,109,110,111,112,112,113,114,115,116,116,117,118,119,120,120,121,122,123,124,124,125,126,127,128,128,129,130,131,131,132,133,134,135,135,136,137,138,139,139,140,141,142,143,143,144,145,146,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,159,159,160,161,162,163,163,164,165,166,167,167,168,169,170,170,171,172,173,174,174,175,176,177,178,178,179,180,181,182,182,183,184,185,186,186,187,188,189,190,190,191,192,193,194,194,195,196,197,198,198,199,200,201,202,202,203,204,205,206,206,207,208,209,210,210,211,212,213,213,214,215,216,217,217,218,219,220,221,221,222,223,224,225,225,226,227,228,229,229,230,231]}}},{subeffectName:"vignette",params:{color:{a:102,r:0,g:0,b:1},vignetteScale:1,blendMode:"overlay"}},{subeffectName:"contrast",params:{value:1.1954554506}},{subeffectName:"gamma",params:{value:.98}}]},{effectName:"Soft Focus",aliasName:"softfocus",effectsCombination:[{subeffectName:"softfocus",params:{value:5}}]},{effectName:"Boardwalk",aliasName:"boardwalk",effectsCombination:[{subeffectName:"colorMatrixTransform",params:{operations:[{operation:"saturation",value:.45}]}},{subeffectName:"vignette",params:{color:{a:255,r:0,g:0,b:0},vignetteScale:.6,blendMode:"overlay"}},{subeffectName:"blendWithColor",params:{color:{a:255,r:178,g:144,b:111},blendMode:"overlay",alpha:.89}},{subeffectName:"gamma",params:{value:.98}},{subeffectName:"contrast",params:{value:1}}]}]},effectObject:{},mul_table:[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],shg_table:[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],initialize:function(e){e=e||{},this.custom=e.filtername||0},returnEffectSettingObject:function(e){var t=this.colorEffectSettings.colorEffects.length,a={};a.blending=[],a.vignette={};for(var s=0;t>s;s++)if(this.colorEffectSettings.colorEffects[s]&&this.colorEffectSettings.colorEffects[s].aliasName==e)for(var r=this.colorEffectSettings.colorEffects[s].effectsCombination.length,i=0;r>i;i++)if(this.colorEffectSettings.colorEffects[s].effectsCombination[i])switch(this.colorEffectSettings.colorEffects[s].effectsCombination[i].subeffectName){case"histogramMapping":a.curves=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.hMap;break;case"colorMatrixTransform":for(var o=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.operations.length,c=0;o>c;c++)switch(this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.operations[c].operation){case"fixvalue":a.sepia={},a.sepia.entries=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.operations[c].entries;break;case"saturation":a.desaturate=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.operations[c].value;break;case"contrast":a.contrast=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.operations[c].value}break;case"vignette":var f=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params;a.vignette={},a.vignette.scale=f.vignetteScale,a.vignette.blendMode=f.blendMode,a.screen={r:f.color.r,g:f.color.g,b:f.color.b,a:f.color.a};break;case"blendWithColor":var f=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params,n={};n.alpha=f.alpha,n.blendMode=f.blendMode,n.blendModeRGB={r:f.color.r,g:f.color.g,b:f.color.b,a:f.color.a},a.blending.push(n);break;case"softfocus":a.softfocus=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.value;break;case"gamma":a.gamma=this.colorEffectSettings.colorEffects[s].effectsCombination[i].params.value}return a},applyTo:function(e){var t=e.getContext("2d"),a=t.getImageData(0,0,e.width,e.height),s=a.data,r=s.length;switch(this.custom){case"original":this.effectObject={};break;case"grayscale":this.effectObject=this.returnEffectSettingObject("grayscale");break;case"sepia":this.effectObject=this.returnEffectSettingObject("sepia");break;case"vivid":this.effectObject=this.returnEffectSettingObject("vivid");break;case"lucky":this.effectObject=this.returnEffectSettingObject("lucky");break;case"laguna":this.effectObject=this.returnEffectSettingObject("laguna");break;case"marie":this.effectObject=this.returnEffectSettingObject("marie");break;case"cruz":this.effectObject=this.returnEffectSettingObject("cruz");break;case"softfocus":this.effectObject=this.returnEffectSettingObject("softfocus");break;case"boardwalk":this.effectObject=this.returnEffectSettingObject("boardwalk")}this.effectObject&&this.applyActualFilter(e,t,a,s,r,this.effectObject)},applyActualFilter:function(e,t,a,s,r,i){var o,c,f,n,l,b,m,g,u,p,h,v={curves:!1,screen:!1,desaturate:!1,vignette:!1,lighten:!1,noise:!1,viewFinder:!1,sepia:!1,brightness:!1,contrast:!1,blending:!1,softfocus:!1,gamma:!1},d={},C=a.data,E=e.width,S=e.height;for(var N in v)d[N]=i[N]||v[N];if((d.vignette||d.lighten)&&(o=Math.sqrt(Math.pow(E/2,2)+Math.pow(S/2,2))),d.vignette.scale){t.globalCompositeOperation=d.vignette.blendMode;var M=t.createRadialGradient(E/2,S/2,0,E/2,S/2,o);M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(.5,"rgba(0,0,0,0)"),M.addColorStop(1,["rgba(0,0,0,",d.vignette.scale,")"].join("")),t.fillStyle=M,t.fillRect(0,0,E,S)}if(d.lighten){t.globalCompositeOperation="lighter";var M=t.createRadialGradient(E/2,S/2,0,E/2,S/2,o);M.addColorStop(0,["rgba(255,255,255,",d.lighten,")"].join("")),M.addColorStop(.5,"rgba(255,255,255,0)"),M.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=M,t.fillRect(0,0,E,S)}d.softfocus&&this.stackBlurImage(a,t,E,S),d.contrast&&(p=259*(d.contrast+255)/(255*(259-d.contrast))),d.viewFinder&&(u=window.vjsImageCache[[E,S,d.viewFinder].join("-")]);for(var k=E*S;k>=0;--k){for(c=k<<2,d.curves&&(C[c]=d.curves.r[C[c]],C[c+1]=d.curves.g[C[c+1]],C[c+2]=d.curves.b[C[c+2]]),d.contrast&&(C[c]=p*(C[c]-128)+128,C[c+1]=p*(C[c+1]-128)+128,C[c+2]=p*(C[c+2]-128)+128),d.brightness&&(C[c]+=d.brightness,C[c+1]+=d.brightness,C[c+2]+=d.brightness),d.screen&&(C[c]=255-(255-C[c])*(255-d.screen.r*d.screen.a)/255,C[c+1]=255-(255-C[c+1])*(255-d.screen.g*d.screen.a)/255,C[c+2]=255-(255-C[c+2])*(255-d.screen.b*d.screen.a)/255),d.noise&&(g=d.noise-Math.random()*d.noise/2,C[c]+=g,C[c+1]+=g,C[c+2]+=g),d.viewFinder&&(C[c]=C[c]*u[c]/255,C[c+1]=C[c+1]*u[c+1]/255,C[c+2]=C[c+2]*u[c+2]/255),d.sepia.entries&&(n=C[c],l=C[c+1],b=C[c+2],C[c]=n*d.sepia.entries[0]+l*d.sepia.entries[1]+b*d.sepia.entries[2],C[c+1]=n*d.sepia.entries[4]+l*d.sepia.entries[5]+b*d.sepia.entries[6],C[c+2]=n*d.sepia.entries[8]+l*d.sepia.entries[9]+b*d.sepia.entries[10]),d.desaturate&&(m=(C[c]+C[c+1]+C[c+2])/3,C[c]+=(m-C[c])*d.desaturate,C[c+1]+=(m-C[c+1])*d.desaturate,C[c+2]+=(m-C[c+2])*d.desaturate),f=2;f>=0;--f)C[c+f]=~~(C[c+f]>255?255:C[c+f]<0?0:C[c+f]);if(d.gamma){h||(h=1/d.gamma);var j={r:C[c],g:C[c+1],b:C[c+2]},O=Math.pow(255*(j.r/255),h),w=Math.pow(255*(j.g/255),h),x=Math.pow(255*(j.b/255),h);C[c]=O,C[c+1]=w,C[c+2]=x}}t.putImageData(a,0,0)},BlurStack:function(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null},stackBlurImage:function(e,t,a,s){var r=1,i=!1;i?this.stackBlurCanvasRGBA(e,0,0,a,s,r):this.stackBlurCanvasRGB(e,t,a,s,r)},stackBlurCanvasRGB:function(e,t,a,s,r){if(!(isNaN(r)||1>r)){r|=0;var i,o,c,f,n,l,b,m,g,u,p,h,v,d,C,E,S,N,M,k,j=e.data,O=r+r+1,w=a-1,x=s-1,y=r+1,B=y*(y+1)/2,I=new this.BlurStack,F=I;for(c=1;O>c;c++)if(F=F.next=new this.BlurStack,c==y)var R=F;F.next=I;var G=null,z=null;b=l=0;var T=this.mul_table[r],W=this.shg_table[r];for(o=0;s>o;o++){for(d=C=E=m=g=u=0,p=y*(S=j[l]),h=y*(N=j[l+1]),v=y*(M=j[l+2]),m+=B*S,g+=B*N,u+=B*M,F=I,c=0;y>c;c++)F.r=S,F.g=N,F.b=M,F=F.next;for(c=1;y>c;c++)f=l+((c>w?w:c)<<2),m+=(F.r=S=j[f])*(k=y-c),g+=(F.g=N=j[f+1])*k,u+=(F.b=M=j[f+2])*k,d+=S,C+=N,E+=M,F=F.next;for(G=I,z=R,i=0;a>i;i++)j[l]=m*T>>W,j[l+1]=g*T>>W,j[l+2]=u*T>>W,m-=p,g-=h,u-=v,p-=G.r,h-=G.g,v-=G.b,f=b+((f=i+r+1)<w?f:w)<<2,d+=G.r=j[f],C+=G.g=j[f+1],E+=G.b=j[f+2],m+=d,g+=C,u+=E,G=G.next,p+=S=z.r,h+=N=z.g,v+=M=z.b,d-=S,C-=N,E-=M,z=z.next,l+=4;b+=a}for(i=0;a>i;i++){for(C=E=d=g=u=m=0,l=i<<2,p=y*(S=j[l]),h=y*(N=j[l+1]),v=y*(M=j[l+2]),m+=B*S,g+=B*N,u+=B*M,F=I,c=0;y>c;c++)F.r=S,F.g=N,F.b=M,F=F.next;for(n=a,c=1;r>=c;c++)l=n+i<<2,m+=(F.r=S=j[l])*(k=y-c),g+=(F.g=N=j[l+1])*k,u+=(F.b=M=j[l+2])*k,d+=S,C+=N,E+=M,F=F.next,x>c&&(n+=a);for(l=i,G=I,z=R,o=0;s>o;o++)f=l<<2,j[f]=m*T>>W,j[f+1]=g*T>>W,j[f+2]=u*T>>W,m-=p,g-=h,u-=v,p-=G.r,h-=G.g,v-=G.b,f=i+((f=o+y)<x?f:x)*a<<2,m+=d+=G.r=j[f],g+=C+=G.g=j[f+1],u+=E+=G.b=j[f+2],G=G.next,p+=S=z.r,h+=N=z.g,v+=M=z.b,d-=S,C-=N,E-=M,z=z.next,l+=a}t.putImageData(e,0,0)}}}),t.Image.filters.Custom.fromObject=function(){return new t.Image.filters.Custom}}("undefined"!=typeof exports?exports:this);

// CONTRAST FILTER
(function(e){"use strict";var t=e.fabric||(e.fabric={}),n=t.util.object.extend;t.Image.filters.Contrast=t.util.createClass(t.Image.filters.BaseFilter,{type:"Contrast",initialize:function(e){e=e||{};this.contrast=e.contrast||0},applyTo:function(e){var t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,i=this.contrast;var s=259*(i+255)/(255*(259-i));for(var o=0;o<r.length;o+=4){r[o]=s*(r[o]-128)+128;r[o+1]=s*(r[o+1]-128)+128;r[o+2]=s*(r[o+2]-128)+128}t.putImageData(n,0,0)},toObject:function(){return n(this.callSuper("toObject"),{contrast:this.contrast})}});t.Image.filters.Contrast.fromObject=function(e){return new t.Image.filters.Contrast(e)}})(typeof exports!=="undefined"?exports:this);

// OVERWRITE ROTATE CONTROLS
fabric.Object.prototype.drawControls=function(e){var t="http://stage.virtry.net/images/pcws/";if(!this.hasControls){return this}var n=this.cornerSize,r=n/2,i=this.getViewportTransform(),s=this.strokeWidth,o=this.width,u=this.height,a=this.strokeLineCap==="round"||this.strokeLineCap==="square",f=this.type==="line"&&this.width===0,l=this.type==="line"&&this.height===0,c=f||l,h=a&&l||!c,p=a&&f||!c;if(f){o=s}else if(l){u=s}if(h){o+=s}if(p){u+=s}o*=this.scaleX;u*=this.scaleY;var d=fabric.util.transformPoint(new fabric.Point(o,u),i,true),v=d.x,m=d.y,g=-(v/2),y=-(m/2),b=this.padding,w=r,E=r-n,S=this.transparentCorners?"strokeRect":"fillRect";e.save();e.lineWidth=1;e.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;e.strokeStyle=e.fillStyle=this.cornerColor;this._drawControl("tl",e,S,g-w-b,y-w-b);this._drawControl("tr",e,S,g+v-w+b,y-w-b);this._drawControl("bl",e,S,g-w-b,y+m+E+b);this._drawControl("br",e,S,g+v+E+b,y+m+E+b);if(!this.get("lockUniScaling")){this._drawControl("mt",e,S,g+v/2-w,y-w-b);this._drawControl("mb",e,S,g+v/2-w,y+m+E+b);this._drawControl("mr",e,S,g+v+E+b,y+m/2-w);this._drawControl("ml",e,S,g-w-b,y+m/2-w)}if(this.hasRotatingPoint){var x=new Image,T,N;x.crossOrigin=true;x.src=t+"rotate.png";x.width=20;x.height=20;T=g+v/2-w;N=y-this.rotatingPointOffset-this.cornerSize/2-b;N=N-5;e.drawImage(x,T,N,20,20)}e.restore();return this};

// Virtry Brush
!function(){var t=fabric.util.array.min,i=fabric.util.array.max;fabric.VertryBrush=fabric.util.createClass(fabric.BaseBrush,{initialize:function(t){this.canvas=t,this._points=[]},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this.canvas.clearContext(this.canvas.contextTop),this._render()},onMouseUp:function(){this._finalizeAndAddPath()},_prepareForDrawing:function(t){var i=new fabric.Point(t.x,t.y);this._reset(),this._addPoint(i),this.canvas.contextTop.moveTo(i.x,i.y)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},removePathDataObject:function(t){this.canvas.remove(t)},_captureDrawingPath:function(t){var i=new fabric.Point(t.x,t.y);this._addPoint(i)},_render:function(){var t=this.canvas.contextTop,i=this.canvas.viewportTransform,n=this._points[0],a=this._points[1];t.save(),t.transform(i[0],i[1],i[2],i[3],i[4],i[5]),t.beginPath(),2===this._points.length&&n.x===a.x&&n.y===a.y&&(n.x-=.5,a.x+=.5),t.moveTo(n.x,n.y);for(var s=1,o=this._points.length;o>s;s++){var r=n.midPointFrom(a);t.quadraticCurveTo(n.x,n.y,r.x,r.y),n=this._points[s],a=this._points[s+1]}t.lineTo(n.x,n.y),t.stroke(),t.restore()},_getSVGPathData:function(){return this.box=this.getPathBoundingBox(this._points),this.convertPointsToSVGPath(this._points,this.box.minX,this.box.minY)},getPathBoundingBox:function(n){for(var a=[],s=[],o=n[0],r=n[1],e=o,h=1,c=n.length;c>h;h++){var u=o.midPointFrom(r);a.push(e.x),a.push(u.x),s.push(e.y),s.push(u.y),o=n[h],r=n[h+1],e=u}return a.push(o.x),s.push(o.y),{minX:t(a),minY:t(s),maxX:i(a),maxY:i(s)}},convertPointsToSVGPath:function(t,i,n){var a=[],s=new fabric.Point(t[0].x-i,t[0].y-n),o=new fabric.Point(t[1].x-i,t[1].y-n);a.push("M ",t[0].x-i," ",t[0].y-n," ");for(var r=1,e=t.length;e>r;r++){var h=s.midPointFrom(o);a.push("Q ",s.x," ",s.y," ",h.x," ",h.y," "),s=new fabric.Point(t[r].x-i,t[r].y-n),r+1<t.length&&(o=new fabric.Point(t[r+1].x-i,t[r+1].y-n))}return a.push("L ",s.x," ",s.y," "),a},createPath:function(t){var i=new fabric.Path(t);return i.fill=null,i.stroke=this.color,i.strokeWidth=this.width,i.strokeLineCap=this.strokeLineCap,i.strokeLineJoin=this.strokeLineJoin,this.shadow&&(this.shadow.affectStroke=!0,i.setShadow(this.shadow)),i},_finalizeAndAddPath:function(){var t=this.canvas.contextTop;t.closePath();var i=this._getSVGPathData().join("");if("M 0 0 Q 0 0 0 0 L 0 0"===i)return void this.canvas.renderAll();var n=this.box.minX+(this.box.maxX-this.box.minX)/2,a=this.box.minY+(this.box.maxY-this.box.minY)/2;this.canvas.contextTop.arc(n,a,3,0,2*Math.PI,!1);var s=this.createPath(i);s.set({left:n,top:a,originX:"center",originY:"center"}),this.canvas.add(s),s.setCoords(),this.canvas.clearContext(this.canvas.contextTop),this._resetShadow(),this.canvas.renderAll(),this.canvas.fire("path:created",{path:s})}})}();

// Virtry Eraser Brush
// !function(){fabric.util.array.min,fabric.util.array.max;fabric.VertryEraseBrush=fabric.util.createClass(fabric.BaseBrush,{canvasElemntId:"",eraseImageId:"",updateCanvasCallback:function(){},initialize:function(t){this.canvas=t,this._points=[]},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this._render()},onMouseUp:function(){this._finalizeAndReplaceRectPattern()},_prepareForDrawing:function(t){var i=new fabric.Point(t.x,t.y);this._addPoint(i)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},removePathDataObject:function(){},_captureDrawingPath:function(t){var i=new fabric.Point(t.x,t.y);this._addPoint(i)},_render:function(){for(var t=this._points[0],i=this._points[1],n=this.canvas.getContext("2d"),a=1,e=this._points.length;e>a;a++){{t.midPointFrom(i)}t=this._points[a],i=this._points[a+1]}n.clearRect(t.x,t.y,this.width,this.width)},_finalizeAndReplaceRectPattern:function(){var t=document.getElementById(this.canvasElemntId),i=t.toDataURL();document.getElementById(this.eraseImageId).src=i,this.updateCanvasCallback()}})}();
!function(){fabric.util.array.min,fabric.util.array.max;fabric.VertryEraseBrush=fabric.util.createClass(fabric.BaseBrush,{canvasElemntId:"",eraseImageId:"",updateCanvasCallback:function(){},radius:10,isErased:!1,context:null,initialize:function(t){this.canvas=t,this._points=[],this.isErased=!1},onMouseDown:function(t){this._prepareForDrawing(t),this._captureDrawingPath(t),this._render()},onMouseMove:function(t){this._captureDrawingPath(t),this._render()},onMouseUp:function(){this._finalizeAndReplaceRectPattern()},_prepareForDrawing:function(t){var i=new fabric.Point(t.x,t.y);this._addPoint(i)},_addPoint:function(t){this._points.push(t)},_reset:function(){this._points.length=0,this._setBrushStyles(),this._setShadow()},removePathDataObject:function(){},_captureDrawingPath:function(t){var i=new fabric.Point(t.x,t.y);this._addPoint(i)},_clearCircle:function(t,i){this.context=null==this.context?this.canvas.getContext("2d"):this.context,this.context.save(),this.context.globalCompositeOperation="destination-out",this.context.beginPath(),this.context.arc(t,i,this.radius,0,2*Math.PI,!1),this.context.fill(),this.context.restore()},_render:function(){for(var t=this._points[0],i=this._points[1],e=(this.canvas.getContext("2d"),1),n=this._points.length;n>e;e++)t=this._points[e],i=this._points[e+1];this._clearCircle(t.x,t.y),this.isErased=!0},_finalizeAndReplaceRectPattern:function(){var t=document.getElementById(this.canvasElemntId),i=t.toDataURL();document.getElementById(this.eraseImageId).src=i,this.updateCanvasCallback()},saveImageWithoutEmptySpace:function(t,i,e,n){var a=this.canvas.toDataURL({left:t,top:i,width:e,height:n});document.getElementById(this.eraseImageId).src=a},isEraserApplied:function(){return this.isErased}})}();

/**
 * virTry v0.1
 * http://virtry.com
 * Copyright 2015
 */
;(function($){
    var plugin = {};
    var defaults = {
        defaultFontSize: 60,
        defaultFontColor: '#7f7f7f',

        client_path: '',
        userimagepath: '',
        userimagetemppath: '',
        productimagepath: '',
        redirectPath: '',

        productImageArr: {},
        userImageArr: {}, 
        lengthUnit: ['cm','inch'],
        savedImage :{'serverType':0,'serverLocation':''},

        // call back functions regarding final image save functionality
        beforeSaveImage: function(){},
        afterSaveImage: function(){},
        onErrorInSaveImage: function(error){ alert(JSON.stringify(error)); },
        onErrorLogin: function(){},
        // call back functions regarding user image updations
        beforeUpdateUserImage: function(){},
        afterUpdateUserImage: function(){},
        onErrorInUpdateUserImage: function(){},
        // call back functions regarding change the product image
        beforeChangeProductImage: function(){},
        afterChangeProductImage: function(){},
        onErrorInChangeProductImage: function(){},
    };

    $.fn.virTry = function(options){
        if(this.length == 0) return this;

        // support multiple elements
        if(this.length > 1){
            this.each(function(){$(this).virTry(options)});
            return this;
        }
        if(! $(this).hasClass('pcws-main-element')){
    		$(this).addClass('pcws-main-element');
    	}
    	$(this).wrap("<div class='pcws-editor-container'><div class='pcws-cover'></div></div>");

        // CREATE A NAMESPACE TO BE USED THROUGHOUT THE PLUGIN
        var vE = {};

        // SOME GLOBAL VARIABLES
        var DEBUG_MODE = false;
        var cCanvas = null, ctx = null;
        var frame_canvas = eraser_canvas = canvas = __canvas = null;
        var firstControls = null;
        var lastObject = null;
        var f = fabric.Image.filters;
    	var txtStickerInc = 0;
    	var defaultProductObj = '';
        var SELECTEDOBJ = 0;

        var userImageId = 'VirtryUserImage';
        var productImageId = 'VirtryProductImage';
        var finalImageId = 'VirtryFinalImage';
        var imageFrameId = 'VirtryFrame';

        var drawPrdImage = '';
        var drawDivInput = false;
        var sizeGridPosition = {'grid-left':0,'grid-top':0};  // this object mention the gap between the product and size grid when it is created

        var filters = ['pcws-brightness','pcws-contrast','pcws-color-effect','pcws-draw'];
        var filtersApplied = [false,false,false,false,false,false,false,false,false,false];
        var lastFilterIndex = [0];

        var drawObjects = [];
        var textObject = [];
        var textObjectLenght = [];
        var stickerObject = [];
        var stickerObjectLenght = [];
        var frameObject = [];
        var sizeGridAvailable = 0;
        var sizeGridVisible = 0;
        
        var objectArr = {'user':'','product':'','finalimage':''};
        var objectPropertyArr = {'user':{'brightness':0,'contrast':0,'color_effect':1},'product':{'brightness':0,'contrast':0,'color_effect':1},'finalimage':{'brightness':0,'contrast':0,'color_effect':1}};

        var isChangeNavigation = 0;
        var clickLeftNavType = '';
        var filterValueIndex = ['original','grayscale','sepia','vivid','marie','lucky','laguna','cruz','softfocus','boardwalk'];
        
        var lastColorEffectSelect = 0;
        var isAllLayerMerged = false;
        var disableAllLeftFunc = 0;
        var pcwsProductSizeRatio = {'width':0,'height':0};
        var messageWithImage = '';
        
        // SOME GLOBAL VARAIBLES
        var DISABLE_ALL_OPERATION = false;
        var OPERATION_APPLIED = 0;
        var OPERATION_CANCELED = 0;
        var LAST_OPERATION = 0; // 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
        var LAST_SELECTED_OBJECT = null;
        var CURRENT_SELECTED_OBJECT = null;

        // TO LOAD ALL MESSAGE AND BUTTONS LABLES ACCORDING TO LANGUAGE
		var allMessages = virTrylang.allMessages;
		var buttonAndLabels = virTrylang.buttonAndLabels;
		var dropzoneMessages = virTrylang.dropzoneMessages;
		var fonts = virTrylang.fonts;

		// SOME GLOBAL VARIABLES FOR ERASER
		var EraseImgBoundingData = null;
        var EraseImage = null;
        var eraserCursor = 'erasepointer.cur';

        // SOME GLOBAL VARIABLES FOR FRAMES AND STICKERS
        var AllStickers = virTryStickers; // stickerulArr
        var AllFrames = virTryFrames; // frameulArr
		var LastFrameObj = '';
		var FrameBorderContainer = virTryFrameBorders; 
		
		// SET A REFERENCE TO OUR EDITOR ELEMENT
        var el = this;
        plugin.el = this;
        var container_id = el.attr('id');


        /**
         * Makes editor responsive
         */
        // first get the original window dimens (thanks a lot IE)
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var isMobileView = false;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || windowWidth<=640) {
			isMobileView = true;
		}

        var SizeGridZone = fabric.util.createClass(fabric.Rect, {
	    	_render: function(ctx) {
	        	this.callSuper("_render", ctx);
	          	var dashWidth = (ctx.canvas, 7),
	            	flipX = this.flipX ? -1 : 1,
	              	flipY = this.flipY ? -1 : 1,
	              	scaleX = flipX / this.scaleX,
	              	scaleY = flipY / this.scaleY;
	              
	          	ctx.scale(scaleX, scaleY), ctx.fillStyle = "rgba(0, 0, 0, 0.5)",  this._renderHeight(ctx),void 0 !== ctx.setLineDash ? ctx.setLineDash([dashWidth, dashWidth]) : void 0 !== ctx.mozDash && (ctx.mozDash = [dashWidth, dashWidth]), ctx.strokeStyle = "rgba(0, 0, 0, 0.2)", this._renderBorders(ctx), this._renderGrid(ctx), ctx.lineDashOffset = dashWidth, ctx.strokeStyle = "rgba(255, 255, 255, 0.4)", this._renderBorders(ctx), this._renderGrid(ctx), ctx.scale(1 / scaleX, 1 / scaleY);
	      	},
	      	_renderOverlay: function(ctx) {
	          	var canvas = ctx.canvas,
	            	borderOffset = 0,
	              	x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft()),
	              	x1 = Math.ceil(-this.getWidth() / 2),
	              	x2 = Math.ceil(this.getWidth() / 2),
	              	x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft())),
	              	y0 = Math.ceil(-this.getHeight() / 2 - this.getTop()),
	              	y1 = Math.ceil(-this.getHeight() / 2),
	              	y2 = Math.ceil(this.getHeight() / 2),
	              	y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));
	          	ctx.fillRect(x0, y0, x3 - x0, y1 - y0 + borderOffset),ctx.fillRect(x0, y1, x1 - x0, y2 - y1 + borderOffset), ctx.fillRect(x2, y1, x3 - x2, y2 - y1 + borderOffset), ctx.fillRect(x0, y2, x3 - x0, y3 - y2);
	      	},
	      	_renderBorders: function(ctx) {
	          	ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2), ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2), ctx.lineTo(this.getWidth() / 2, this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2, this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2, -this.getHeight() / 2), ctx.stroke();
	      	},
	      	_renderGrid: function(ctx) {
	      		// ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2),
	          	// ctx.lineTo(-this.getWidth() / 2 + 1 / divisions3 * this.getWidth(), this.getHeight() / 2), ctx.stroke(), 
	          	// ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2), 
	          	// ctx.lineTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2), ctx.stroke(), 
	          	
	          	// ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), 
	          	// ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), ctx.stroke(), 
	          	// ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), 
	          	// ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), ctx.stroke()
	          	
	          	var numberOfLine = 7,divisions = 8;
	      		// FOR HORIZONTAL LINES
	      		for (var i = 1; i <= numberOfLine; i++) {
	      			ctx.beginPath(); ctx.moveTo(-this.getWidth() / 2 + i / divisions * this.getWidth(), -this.getHeight() / 2);
	          		ctx.lineTo(-this.getWidth() / 2 + i / divisions * this.getWidth(), this.getHeight() / 2); ctx.stroke();
	      		};
	          	// FOR VERTICAL LINES
	          	for (var i = 1; i <= numberOfLine; i++) {
	      			ctx.beginPath(); ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + i / divisions * this.getHeight());
	          		ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + i / divisions * this.getHeight()); ctx.stroke(); 
	      		};
	      	},
	      	_renderHeight:function(ctx){
	      		var canvas = ctx.canvas,
	            	borderOffset = 0,
	              	x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft()),
	              	x1 = Math.ceil(-this.getWidth() / 2),
	              	x2 = Math.ceil(this.getWidth() / 2),
	              	x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft())),
	              	y0 = Math.ceil(-this.getHeight() / 2 - this.getTop()),
	              	y1 = Math.ceil(-this.getHeight() / 2),
	              	y2 = Math.ceil(this.getHeight() / 2),
	              	y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

	        	ctx.beginPath();
	        	ctx.fillStyle = "black";
	        	ctx.font = "20pt sans-serif";
	        
	        	var object = findObject(objectArr.product);
	        	if(defaultProductObj.sg_width && parseFloat(defaultProductObj.sg_width)  && defaultProductObj.sg_height && parseFloat(defaultProductObj.sg_height)){
	          		// COMMENTED BECAUSE WE DON'T WANT TO UPDATE THE SIZE GRID VALUE WHILE SCALING PRODUCT IMAGE
	          		// ctx.fillText(parseInt(object.getWidth() / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']], (x1/4), y1-20);
	          		ctx.fillText(defaultProductObj.sg_width+vE.settings.lengthUnit[defaultProductObj['length-unit']], (x1/4), y1-20);
	        	} else {
	          		ctx.fillText(parseInt(object.getWidth())+'px', (x1/4), y1-20);
	        	}

	        	ctx.fillRect(x1, y1-15, this.getWidth(), 3);
	        	ctx.fillRect(x2+15, -(this.getHeight()/2), 3, this.getHeight());

	        	if(defaultProductObj.sg_width && parseFloat(defaultProductObj.sg_width)  && defaultProductObj.sg_height && parseFloat(defaultProductObj.sg_height)){
	          		// COMMENTED BECAUSE WE DON'T WANT TO UPDATE THE SIZE GRID VALUE WHILE SCALING PRODUCT IMAGE
	          		// ctx.fillText(parseInt(object.getHeight() / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']], x2+30, -(this.getHeight()/16));
	          		ctx.fillText(defaultProductObj.sg_height+vE.settings.lengthUnit[defaultProductObj['length-unit']], x2+30, -(this.getHeight()/16));
	        	} else {
	          		ctx.fillText(parseInt(object.getHeight())+'px', x2+30, -(this.getHeight()/16));
	        	}	
	        	// ctx.fillRect(x1, y2,  this.getWidth(), 3);
	        	// ctx.fillText(parseInt(canvas.getActiveObject().getWidth() / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']], (x1/4), (this.getHeight() /2)+20);
	        	// $(el).find('#pcws-product-image-size').innerHTML = parseInt(productWidth / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']]+' X '+parseInt(productHeight / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']];
	      	}
	    });

	    var CropZone = fabric.util.createClass(fabric.Rect, {
	    	_render: function(ctx) {
	        	this.callSuper("_render", ctx);
	        	var dashWidth = (ctx.canvas, 7),
	            	flipX = this.flipX ? -1 : 1,
	            	flipY = this.flipY ? -1 : 1,
	            	scaleX = flipX / this.scaleX,
	            	scaleY = flipY / this.scaleY;
	            ctx.scale(scaleX, scaleY), ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this._renderOverlay(ctx), void 0 !== ctx.setLineDash ? ctx.setLineDash([dashWidth, dashWidth]) : void 0 !== ctx.mozDash && (ctx.mozDash = [dashWidth, dashWidth])
	      	},
	      	_renderOverlay: function(ctx) {
	          	var canvas = ctx.canvas,
	              	borderOffset = 0,
	              	x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft()),
	              	x1 = Math.ceil(-this.getWidth() / 2),
	              	x2 = Math.ceil(this.getWidth() / 2),
	              	x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft())),
	              	y0 = Math.ceil(-this.getHeight() / 2 - this.getTop()),
	              	y1 = Math.ceil(-this.getHeight() / 2),
	              	y2 = Math.ceil(this.getHeight() / 2),
	              	y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));
	          	ctx.fillRect(x0, y0, x3 - x0, y1 - y0 + borderOffset), ctx.fillRect(x0, y1, x1 - x0, y2 - y1 + borderOffset), ctx.fillRect(x2, y1, x3 - x2, y2 - y1 + borderOffset), ctx.fillRect(x0, y2, x3 - x0, y3 - y2)
	      	},
	      	_renderBorders: function(ctx) {
	        	ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2), ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2), ctx.lineTo(this.getWidth() / 2, this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2, this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2, -this.getHeight() / 2), ctx.stroke()
	      	},
	      	_renderGrid: function(ctx) {
	        	ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), this.getHeight() / 2), ctx.stroke(), ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2), ctx.lineTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2), ctx.stroke(), ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), ctx.stroke(), ctx.beginPath(), ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), ctx.stroke()
	      	}
	    });

		var sizeGridZone = new SizeGridZone({
	        fill: "transparent",
	        hasBorders: !1,
	        originX: "left",
	        originY: "top",
	        cornerColor: "#444",
	        cornerSize: 8,
	        transparentCorners: !1,
	        lockRotation: !0,
	        hasRotatingPoint: !1,
	        originalState:{}
	    });

		var cropZone = '';

        /**
         * ===================================================================================
         * = PRIVATE FUNCTIONS
         * ===================================================================================
         */

        /**
         * Initializes namespace settings to be used throughout plugin
         */
        var init = function(){
            // MERGE USER-SUPPLIED OPTIONS WITH THE DEFAUTLS
            vE.settings = $.extend({}, defaults, options);

            // SOME DEPENDENT SETTINGS 
            vE.settings.server_path = 'http://stage.virtry.net/',
            // vE.settings.server_path = 'http://192.168.1.173/pcws/',
            vE.settings.canvas_div = 'virtryc_'+Math.random();
            vE.settings.image_path_prefix = 'pcws/';
            vE.settings.assets_path = 'images/'+vE.settings.image_path_prefix;

            vE.settings.client_path = (options.clientDomain)? options.clientDomain : vE.settings.server_path;
            vE.settings.userimagepath = (options.userImagePath)? vE.settings.client_path+options.userImagePath : vE.settings.client_path+'userimage/saveimage';
            vE.settings.userimagetemppath = (options.userImageTempPath)? vE.settings.client_path+options.userImageTempPath : vE.settings.client_path+'storage/temp_storage/';
            vE.settings.productimagepath = (options.productImagePath)? vE.settings.client_path+options.productImagePath : vE.settings.client_path+'userimage/savecanvasimage';
            vE.settings.redirectPath = (options.redirectPath)? vE.settings.client_path+options.redirectPath : vE.settings.client_path+'userimage/index';

            // FOR ERASER FUNCTIONALITY 
            var randno = Math.random();
            vE.settings.eraser_canvas_id = 'virtryec_'+randno; 
            vE.settings.eraser_image = 'virtryeimg_'+randno;

            // FOR FRAME FUNCTIONALITY 
            vE.settings.frame_canvas_id = 'virtryfc_'+Math.random(); 

            // SET WATERMARK IMAGE
            vE.settings.virTrywaterMark = vE.settings.server_path+vE.settings.assets_path+'VirTryWatermark.png';

            // SETUP EDITOR UI AND BIND EVENTS AS WELL AS INITIALIZE OBJECTS
            setup();
            preLoader();
            initCropZoneObject();
        }

        /**
         * Preload all the images
         */
        var preLoader = function(){
        	var allImages = Array(100),index = 0;
			// ALL EXTRA IMAGES
        	var extraImages = ['rotate.png','slider-down-arrow.png','slider-up-arrow.png'];
            for(x in extraImages){
            	allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+extraImages[x];
				index++;
            }
            // LEFT MENU IMAGES
            var leftMenuArr = ['text','frame','sticker','draw','crop','color-effect','brightness','contrast'];
            for(x in leftMenuArr){
                // leftMenu+='<li id="pcws-'+leftMenuArr[x]+'-Li"><img src="'+vE.settings.server_path+vE.settings.assets_path+leftMenuArr[x]+'.png" /><div>'+buttonAndLabels['bt-'+leftMenuArr[x]]+'</div></li>';
                allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+leftMenuArr[x]+'.png';
				index++;
            }
            // FRAME THUMB IMAGES
            /*var frameulArr = ['f_1','f_2','f_3','f_4','f_5','f_6','f_7','f_8','f_9','f_10'];
	      	for(x in frameulArr){
	        	allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+'frame/thumb/'+frameulArr[x]+'.png';
				index++;
	      	}*/
	      	for(x in AllFrames){
	        	allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+'frame/thumb/'+AllFrames[x].frame_thumb;
				index++;
	      	}
	      	// STICKER THUMB IMAGES
	      	/*var stickerulArr = ['sticker_1','sticker_2','sticker_3','sticker_4','sticker_5','sticker_6','sticker_7','sticker_8'];
	      	for(x in stickerulArr){
	        	allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+'sticker/'+stickerulArr[x]+'.png';
				index++;
	      	}*/
	      	for(x in AllStickers){
	        	allImages[index] = new Image()
				allImages[index].src = vE.settings.server_path+vE.settings.assets_path+'sticker/thumb/'+AllStickers[x].sticker_thumb;
				index++;
	      	}
        }
        /**
         * Performs all DOM and CSS modifications
         */
        var setup = function(){
        	var tmpimg = new Image();
        	tmpimg.src = vE.settings.virTrywaterMark;

            Dropzone.autoDiscover = false;

            pcwsInitObjects();
            createEditorBody();
            initCanvas();
            setupUserProductImages();
            bindEvents();
            // To adjust the canvas size
		    // resizePcwsCanvas();

		    // TO DIABLE MULTIPLE OBJECT SELECTION OR GROUP SELECTION
		    canvas.selection = false;

            canvas.freeDrawingBrush = new fabric['VertryBrush'](canvas);
            if (canvas.freeDrawingBrush) {
		      	canvas.freeDrawingBrush.color = $(el).find('#pcws-drawing-color').val();
		      	canvas.freeDrawingBrush.width = parseInt($(el).find('#pcws-drawing-line-width').val(), 10) || 10;
		      	canvas.freeDrawingBrush.shadowBlur = 0;
		    }
		    eraser_canvas.freeDrawingBrush = new fabric['VertryEraseBrush'](eraser_canvas);
            if (eraser_canvas.freeDrawingBrush) {
		      	eraser_canvas.freeDrawingBrush.color = '#FFFFFF';
		      	eraser_canvas.freeDrawingBrush.radius = parseInt($(el).find('#pcws-erase-line-width').val(), 10) || 10;
		      	eraser_canvas.freeDrawingBrush.shadowBlur = 0;
		    }
        }
        /**
         * Initialize the crop zone Object
         */
        var initCropZoneObject = function(){
        	if(typeof cropZone === 'object'){
        		cropZone.fill = "transparent";
        		cropZone.hasBorders = !1;
        		cropZone.originX = "left";
        		cropZone.originY = "top";
        		cropZone.cornerColor = "#ff0000";
        		cropZone.cornerSize = 8;
        		cropZone.transparentCorners = !1;
        		cropZone.lockRotation = !0;
        		cropZone.hasRotatingPoint = !1;
        		cropZone.originalState = false;
        	}else{
        		cropZone = new CropZone({
			        fill: "transparent",
			        hasBorders: !1,
			        originX: "left",
			        originY: "top",
			        cornerColor: "#ff0000",
			        cornerSize: 8,
			        transparentCorners: !1,
			        lockRotation: !0,
			        hasRotatingPoint: !1,
			        lockUniScaling: false,
			        originalState:{}
			    });
        	}
        }

        /**
         * ===================================================================================
         * = USER INTERFACE CREATION USING HTML AND CSS
         * ===================================================================================
         */
        
        /**
         * initialize the canvas object and set size according to window size.
         */
        var pcwsInitObjects = function(){
			fabric.Object.prototype.transparentCorners = false;
		    fabric.Object.prototype.padding = 5;
		    // REGARDING SELECTED OBJECT ROTATE ICON AS WELL AS TO MAINTAIN THE RATIO SIZE
		    fabric.Object.prototype.lockUniScaling = true;
		    fabric.Object.prototype.lockScalingFlip = true;
		    fabric.Object.prototype.rotatingPointOffset = 5;

            fabric.util.addListener(fabric.window, 'load', function() {
                canvas = __canvas || canvas;
                canvas && canvas.calcOffset && canvas.calcOffset();
            });
        }
        /**
         * make the complete editor body
         */
        var createEditorBody = function(classname){
            var leftHtml='<div class="pcws-leftmainDiv jcl-demo"></div>';
            leftHtml+='<div class="pcws-centermainDiv"></div>';
            leftHtml+='<div class="pcws-rightmainDiv"></div>';
            el.html(leftHtml);
            pcwsLeftSideHtml('pcws-leftmainDiv');
            pcwsCenterCanvasHtml('pcws-centermainDiv');
            pcwsRightSideHtml('pcws-rightmainDiv');
            
            pcwsDropZone();
            pcwsPopUp();
            pcwsSaveImageForm();
            pcwsInputCheck();
            setTimeout(pcwsInitSlider(),150);
        };
        /**
         * = to initialize the canvas with fabric js
         */
        var initCanvas = function(classname){
        	canvas = new fabric.Canvas(vE.settings.canvas_div, {
				isDrawingMode: false
			});
			eraser_canvas = new fabric.Canvas(vE.settings.eraser_canvas_id, {
				isDrawingMode: true
			});
			frame_canvas = new fabric.StaticCanvas(vE.settings.frame_canvas_id);
        };
        /**
         * make the left panel html
         */
        var pcwsLeftSideHtml = function(classname){ 
            var leftHtml='<div class="custom-container vertical"><a href="#" class="prev"><img src="'+vE.settings.server_path+vE.settings.assets_path+'slider-up-arrow.png"></a><div class="pcws-carousel" id="pcws-carousel"></div><a href="javascript:void(0)" class="next"><img src="'+vE.settings.server_path+vE.settings.assets_path+'slider-down-arrow.png"></a></div>';
            $(el).find('.'+classname).html(leftHtml);
            setTimeout(leftSideMenu(),10);
        }
        var leftSideMenu = function(){ 
            var leftMenuArr = ['text','frame','sticker','draw','erase','crop','color-effect','brightness','contrast'];
            var leftMenu = '<ul id="pcws-mainUl">';
            for(x in leftMenuArr){
                leftMenu+='<li id="pcws-'+leftMenuArr[x]+'-Li"><img src="'+vE.settings.server_path+vE.settings.assets_path+leftMenuArr[x]+'.png" /><div>'+buttonAndLabels['bt-'+leftMenuArr[x]]+'</div></li>';
            }
            leftMenu+='</ul>';
            $(el).find('#pcws-carousel').html(leftMenu);
        }
        /**
         * make the center area of editor UI
         */
        var pcwsCenterCanvasHtml = function(classname){
	      	var funcHtml ='<div class="pcws-canvas-upper-div">';
		      		funcHtml+='<canvas id="'+vE.settings.canvas_div+'" width="600" height="600"></canvas>';
		      		funcHtml+='<div id="eraser_canvas_container">';
			      		funcHtml+='<canvas id="'+vE.settings.eraser_canvas_id+'" width="0" height="0"></canvas>';
			      		funcHtml+='<img crossOrigin="Anonymous" id="'+vE.settings.eraser_image+'" />';
		      		funcHtml+='</div>';
		      		funcHtml+='<div id="frame_canvas_container">';
			      		funcHtml+='<canvas id="'+vE.settings.frame_canvas_id+'" width="0" height="0"></canvas>';
		      		funcHtml+='</div>';
	      		funcHtml+='</div>';
	      	funcHtml+='<div class="pcws-bottom-canvas"><div class="pcws-bottom-canvas-left-panel"></div></div>';

	      	$(el).find('.'+classname).html(funcHtml);
	      	
	      	brightnessHtml();
	      	contrastHtml();
	      	drawHtml();
	      	eraseHtml();
	      	frameHtml();
	      	stickerHtml();
	      	colorEffectHtml();
	      	pcwsTextfectHtml();
	      	pcwsCropHtml();
	      	setTimeout(applyCancelBtn(),10);
	      	setTimeout(pcwsSizeGridHtml(),10);
	    }
	    /**
         * TO DRAW BRIGHTNESS CONTROL AND HIDDEN VARIABLES ALSO
         */
	    var brightnessHtml = function(){
	      	var html= '<div id="pcws-brightness-control-div" class="pcws-bottom-option"><span class="pcws-info">10</span><input type="range" id="pcws-brightness-value" value="10" min="0" max="255" class="filtersink pcws-option-class" disabled></div>'
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);
	    }
	    /**
         * TO DRAW CONTRAST CONTROL AND HIDDEN VARIABLES ALSO
         */
	    var contrastHtml = function(){
	      	var html ='<div id="pcws-contrast-control-div" class="pcws-bottom-option"><span class="pcws-info">10</span><input type="range" id="pcws-contrast-value" value="10" min="0" max="255" class="filtersink" disabled></div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);   
	    }
	    /**
         * TO DRAW DRAWING CONTROL AND HIDDEN VARIABLES ALSO
         */
	    var drawHtml = function(){
	      	var html ='<div id="pcws-draw-control-div" class="pcws-bottom-option">';
	          	html +='<div class="pcws-drawing-clor"><label for="pcws-drawing-color">'+buttonAndLabels['lb-line-color']+':</label><input type="color" value="#005E7A" id="pcws-drawing-color">&nbsp;<br></div>';
	          	html+='<div class="pcws-drawing-line-width"><label for="pcws-drawing-line-width">'+buttonAndLabels['lb-line-width']+':</label><span class="pcws-info">10</span><input type="range" value="10" min="0" max="100" id="pcws-drawing-line-width" class="filtersink" disabled></div></div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);      
	    }
	    /**
         * TO DRAW ERASE CONTROL AND HIDDEN VARIABLES ALSO
         */
	    var eraseHtml = function(){
	      	var html ='<div id="pcws-erase-control-div" class="pcws-bottom-option">';
		          	// html +='<div class="pcws-erase-clor"><label for="pcws-erase-color">'+buttonAndLabels['lb-line-color']+':</label><input type="color" value="#005E7A" id="pcws-erase-color">&nbsp;<br></div>';
		          	html+='<div class="pcws-erase-line-width"><label for="pcws-erase-line-width">'+buttonAndLabels['lb-erase-width']+':</label><span class="pcws-info">10</span><input type="range" value="10" min="5" max="100" id="pcws-erase-line-width" class="filtersink" disabled></div>';
		          	html+='<div class="pcws-erase-line-width"><label for="pcws-erase-line-width-box">'+buttonAndLabels['lb-erase-circle']+':</label>&nbsp;<div id="pcws-erase-line-width-box">&nbsp;</div></div>';
	          	html+='</div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);      
	    }
	    /**
         * TO DRAW FRAME HTML AND HIDDEN VARIABLES ALSO
         */
	    var frameHtml = function(){
	      	var html ='<div id="pcws-frame-control-div" class="pcws-bottom-option"></div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html); 
	      	setTimeout(frameUlHtml(),10);        
	    }

	    var frameUlHtml = function(){
	      	var frameUlDiv ='<ul>';
	      	// var frameulArr = ['f_1','f_2','f_3','f_4','f_5','f_6','f_7','f_8','f_9','f_10'];
	      	// for(x in frameulArr){
		    	// frameUlDiv +='<li id="'+frameulArr[x]+'" class="pcws-inner-frame"><img src="'+vE.settings.server_path+vE.settings.assets_path+'frame/thumb/'+frameulArr[x]+'.png"></li>'
		    // }
		    for(x in AllFrames){
	        	frameUlDiv +='<li id="'+AllFrames[x].frame_id+'" class="pcws-inner-frame"><img src="'+vE.settings.server_path+vE.settings.assets_path+'frame/thumb/'+AllFrames[x].frame_thumb+'"></li>'
	      	}
	      	frameUlDiv+='</ul>';
	      	var ulhtml = '<div class="jcl-demo">';
	            	ulhtml +='<div class="custom-container fraction">';
	              	ulhtml +='<a href="javascript:void(0)" class="prev">&lsaquo;</a>';
	              	ulhtml +='<div class="pcws-carousel pcws-fcarousel " style="visibility:hidden; left:-5000px;" >'+frameUlDiv+'</div>';
	              	ulhtml +='<a href="javascript:void(0)" class="next">&rsaquo;</a>';
	            	ulhtml +='</div>';
	          	ulhtml +='</div>';
	      	$(el).find('#pcws-frame-control-div').html(ulhtml); 
	    } 
	    /**
         * TO DRAW STICKER HTML AND HIDDEN VARIABLES ALSO
         */
	    var stickerHtml = function(){
	      	var html ='<div id="pcws-sticker-control-div" class="pcws-bottom-option"></div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);
	      	setTimeout(stickerUlHtml(),10);        
	    }

	    var stickerUlHtml = function(){
	      	var stickerUlDiv ='<ul>';
	      	// var stickerulArr = ['sticker_1','sticker_2','sticker_3','sticker_4','sticker_5','sticker_6','sticker_7','sticker_8'];
	      	// for(x in stickerulArr){
	        	// stickerUlDiv +='<li id="'+stickerulArr[x]+'" class="pcws-inner-sticker"><img src="'+vE.settings.server_path+vE.settings.assets_path+'sticker/'+stickerulArr[x]+'.png"></li>'
	      	// } 
	      	for(x in AllStickers){
	        	stickerUlDiv +='<li id="'+AllStickers[x].sticker_id+'" class="pcws-inner-sticker"><img src="'+vE.settings.server_path+vE.settings.assets_path+'sticker/thumb/'+AllStickers[x].sticker_thumb+'"></li>'
	      	}
	      	stickerUlDiv+='</ul>';
	      	var ulhtml = '<div class="jcl-demo">';
	        	    ulhtml +='<div class="custom-container sticker_fraction">';
	            		ulhtml +='<a href="javascript:void(0)" class="prev">&lsaquo;</a>';
	                  	ulhtml +='<div class="pcws-carousel pcws-fcarousel " style="visibility:hidden; left:-5000px;" >'+stickerUlDiv+'</div>';
	                  	ulhtml +='<a href="javascript:void(0)" class="next">&rsaquo;</a>';
	              	ulhtml +='</div>';
	          	ulhtml +='</div>';
	      	$(el).find('#pcws-sticker-control-div').append(ulhtml); 
	    }
	    /**
         * TO DRAW COLOR EFFECTS HTML AND HIDDEN VARIABLES ALSO
         */
	    var colorEffectHtml = function(){
	    	var assests_url = vE.settings.server_path+vE.settings.assets_path;
	    	var ceHtml = '<div id="pcws-color-effect-control-div" class="pcws-bottom-option">';
	        		ceHtml+='<div class="jcl-demo">';
	                	ceHtml+='<div class="custom-container color-fraction">';
	                    	ceHtml+='<a href="javascript:void(0)" class="prev">&lsaquo;</a>';
		                      	ceHtml+='<div class="pcws-carousel pcws-fcarousel" style="visibility:hidden; left:-5000px;">';
			                        ceHtml+='<ul><li id="pcws-original-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/original.jpg"><div>'+buttonAndLabels['lb-original']+'</div></li>';
			                        ceHtml+='<li id="pcws-grayscale-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/grayscale.jpg"><div>'+buttonAndLabels['lb-b-&-w']+'</div></li>';
			                        ceHtml+='<li id="pcws-sepia-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/sepia.jpg"><div>'+buttonAndLabels['lb-sepia']+'</div></li>';
			                        ceHtml+='<li id="pcws-softfocus-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/softfocus.jpg"><div>'+buttonAndLabels['lb-soft-focus']+'</div></li>';
			                        ceHtml+='<li id="pcws-vivid-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/vivid.jpg"><div>'+buttonAndLabels['lb-vivid']+'</div></li>';
			                        ceHtml+='<li id="pcws-marie-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/marie.jpg"><div>'+buttonAndLabels['lb-marie']+'</div></li>';
			                        ceHtml+='<li id="pcws-cruz-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/cruz.jpg"><div>'+buttonAndLabels['lb-cruz']+'</div></li>';
			                        ceHtml+='<li id="pcws-lucky-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/lucky.jpg"><div>'+buttonAndLabels['lb-lucky']+'</div></li>';
			                        ceHtml+='<li id="pcws-boardwalk-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/boardwalk.jpg"><div>'+buttonAndLabels['lb-boardwalk']+'</div></li>';
			                        ceHtml+='<li id="pcws-laguna-div" class="pcws-inner-color-effect"><img src="'+assests_url+'color_effect/laguna.jpg"><div>'+buttonAndLabels['lb-laguna']+'</div></li>';
			                        ceHtml+='</ul>';
		                    	ceHtml+='</div>';
		                    ceHtml+='<a href="javascript:void(0)" class="next">&rsaquo;</a>';
		                ceHtml+='</div>';
		            ceHtml+'</div>';
		        ceHtml+='</div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(ceHtml);         
	    }
	    /**
         * TO DRAW TEXT CONTROLS HTML AND HIDDEN VARIABLES ALSO
         */
	    var pcwsTextfectHtml = function(){
	    	var html='<div id="pcws-text-control-div" class="pcws-bottom-option">';
	            	html+='<div class="pcws-text-first-div">';
	                	html+='<div class="pcws-font-family"><div class="pcws-font-family-color-input"><label for="color">'+buttonAndLabels['lb-color']+': </label><input type="color" style="width:40px" id="pcws-text-font-color" value="'+vE.settings.defaultFontColor+'"></div>';
	                  		html+='<div class="pcws-font-family-buttons"><button type="button" class="pcws-btn" id="pcws-text-cmd-bold">'+buttonAndLabels['lb-bold']+'</button><button type="button" class="pcws-btn" id="pcws-text-cmd-italic">'+buttonAndLabels['lb-italic']+'</button><button type="button" class="pcws-btn" id="pcws-text-cmd-underline">'+buttonAndLabels['lb-underline']+'</button>';
	                  		html+='<button type="button" class="pcws-btn" id="pcws-text-cmd-linethrough">'+buttonAndLabels['lb-linethrough']+'</button><button type="button" class="pcws-btn" id="pcws-text-cmd-overline">'+buttonAndLabels['lb-overline']+'</button></div>';
	                	html+='</div>';
	                	html+='<div class="pcws-font-family"><label for="pcws-font-family" style="display:inline-block">'+buttonAndLabels['lb-font-family']+':</label>';
	                		// html+='<select id="pcws-font-family"><option value="arial">Arial</option><option value="helvetica" selected>Helvetica</option><option value="myriad pro">Myriad Pro</option><option value="delicious">Delicious</option><option value="verdana">Verdana</option><option value="georgia">Georgia</option><option value="courier">Courier</option><option value="comic sans ms">Comic Sans MS</option><option value="impact">Impact</option><option value="monaco">Monaco</option><option value="optima">Optima</option><option value="hoefler text">Hoefler Text</option><option value="plaster">Plaster</option><option value="engagement">Engagement</option></select>';
	                		// // font_names:'メイリオ;Meiryo;ヒラギノ角ゴ Pro W3;Hiragino Kaku Gothic Pro;ＭＳ Ｐゴシック;sans-serif',
	                    	// html+='<select id="pcws-font-family"><option value="メイリオ">メイリオ</option><option value="Meiryo" selected>Meiryo</option><option value="ヒラギノ角ゴ Pro W3">ヒラギノ角ゴ Pro W3</option><option value="Hiragino Kaku Gothic Pro">Hiragino Kaku Gothic Pro</option><option value="ＭＳ Ｐゴシック">ＭＳ Ｐゴシック</option><option value="sans-serif">sans-serif</option></select>';
	                		html+='<select id="pcws-font-family">';
	                		for (var prop in fonts) {
							    html+='<option value="'+prop+'">'+fonts[prop]+'</option>';
							}
							html+='</select>';
		                html+='</div>';
		                html+='<div class="pcws-text-bg-color"><label for="pcws-text-bg-color">'+buttonAndLabels['lb-background-color']+':</label><input type="color" value="" id="pcws-text-bg-color" size="10"></div>';
		                html+='<div class="pcws-text-lines-bg-color"><label for="pcws-text-lines-bg-color">'+buttonAndLabels['lb-background-text-color']+':</label><input type="color" value="" id="pcws-text-lines-bg-color" size="10"></div>';
		                html+='<div class="pcws-text-width"><label for="pcws-text-font-size">'+buttonAndLabels['lb-font-size']+':</label><span class="pcws-info">'+vE.settings.defaultFontSize+'</span><input type="range" value="'+vE.settings.defaultFontSize+'" min="1" max="120" step="1" id="pcws-text-font-size"></div>';
	              	html+='</div>';
	            html+='</div>';
	      	$(el).find('.pcws-bottom-canvas-left-panel').append(html);
	    }
	    /**
         * TO DRAW CROP HTML AND HIDDEN VARIABLES ALSO
         */
	    var pcwsCropHtml = function(){
	    	var html ='<div id="pcws-crop-grid-control-div"><div class="pcws-apply-save-maindiv"><div id="pcws-crop-image">'+buttonAndLabels['bt-apply']+'</div><div id="pcws-crop-cancel">'+buttonAndLabels['bt-cancel']+'</div></div></div>';
	      	$(el).find('.pcws-centermainDiv').append(html);
	    }
	    /**
         * TO DRAW CANCEL AND APPLY BUTTON HTML
         */
	    var applyCancelBtn = function(){
	      	var html ='<div class="pcws-apply-save-maindiv"><div id="pcws-apply-btn">'+buttonAndLabels['bt-apply']+'</div><div id="pcws-cancel-btn">'+buttonAndLabels['bt-cancel']+'</div></div>'; 
	      	$(el).find('.pcws-bottom-canvas').append(html);
	    }
	    /**
         * TO DRAW SIZE GRID HTML CONTROLS HTML
         */
	    var pcwsSizeGridHtml = function(){
	      	var html ='<div class="pcws-size-grid-control-div"><span>'+buttonAndLabels['lb-width-x-height']+' :</span><span id="pcws-product-image-size"></span></div>';
	      	$(el).find('.pcws-centermainDiv').append(html);
	    }
	    /**
         * TO DRAW RIGHT SIDE PANEL HTML
         */
        var pcwsRightSideHtml = function(classname){
	      	var html ='<div class="pcws-right-img" id="pcws-right-top-product-image"><img src="" /></div>';
	          	html+='<div class="pcws-right-btn" id="pcws-change-angle">'+buttonAndLabels['bt-change-angle']+'</div>';
	          	html+='<div class="pcws-right-btn" id="pcws-show-hide-grid">'+buttonAndLabels['bt-show-hide-grid']+'</div>';
	          	html+='<div class="pcws-right-btn" id="pcws-send-backwards">'+buttonAndLabels['bt-send-to-back']+'</div>';
	          	html+='<div class="pcws-right-btn" id="pcws-bring-forward">'+buttonAndLabels['bt-move-front']+'</div>';
	          	html+='<div class="pcws-right-img" id="pcws-right-user-image"><img src="" /></div>';
	          	html+='<div class="pcws-right-btn" id="pcws-change-image">'+buttonAndLabels['bt-change-image']+'</div>';
	          	html+='<div class="pcws-right-btn" id="pcws-merge-layer">'+buttonAndLabels['bt-merge-layers']+'</div>';
	          	html+='<div class="pcws-right-btn pcws-finishsave" ><a href="javascript:void(0)" id="pcws-finish-editing">'+buttonAndLabels['bt-save']+'</a></div>';
	      	$(el).find('.'+classname).append(html);  
	    }

	    var pcwsDropZone = function(){
	    	var assests_url = vE.settings.server_path+vE.settings.assets_path;
	     	var html ='<div id="pcws-dropzone-main-div">';
	        		html+='<div class="pcws-dropzone-fisrt-div">';
	                	html+='<div id="pcws-close-btn" class="pcws-close-scheme"><img src="'+assests_url+'crosse.png"></div>';
	              	html+='</div>';
	              	html+='<div class="pcws-dropzone-second-div">';
	                	html+='<form action="/dropzone/downloads/file-upload" class="dropzone uploadform">';
	                    	html+='<div class="fallback"><input name="file" type="file" /></div>';
	                  	html+='</form>';
	              	html+='</div>';
	          	html+='</div>';
	      	$(el).append(html);
	    }

	    var pcwsPopUp = function(){
	    	var assests_url = vE.settings.server_path+vE.settings.assets_path;
	      	var html='<div id="pcws-mask"></div>';
        		html+='<div id="pcws-loading-div"><img src="'+assests_url+'ajax-loader.gif"></div>';
          		html+='<div id="pcws-product-draw-img">';
              		html+='<div id="pcws-product-close" class="pcws-product-close"><img src="'+assests_url+'crosse.png"></div><div id="pcws-inner-product-draw"></div>';
          		html+='</div>';
	        $(el).append(html);
	        pcwsDescriptionPopUp();
	    }

	    var pcwsDescriptionPopUp = function(){
	    	var assests_url = vE.settings.server_path+vE.settings.assets_path;
	      	var html ='<div id="pcws-description-form">';
              		html+='<div id="pcws-description-close" class="pcws-description-close"><img src="'+assests_url+'crosse.png"></div>';
              		html+='<div id="pcws-inner-description-form">';
              			html+='<label for="pcws_description_text">'+buttonAndLabels['lb-image-description']+'</label>';
              			html+='<textarea id="pcws_description_text" name="pcws_description_text" rows="5" cols="40"></textarea><br/>';
              			html+='<div id="pcws_description_save">'+buttonAndLabels['bt-save']+'</div>';
              		html+='</div>';
          		html+='</div>';
	        $(el).append(html);
	    }

	    var pcwsSaveImageForm = function(){ 
	      	var formAction = vE.settings.server_path+'save.php';
	      	if(vE.settings.savedImage.serverType && vE.settings.savedImage.serverLocation!=''){
	        	formAction = vE.settings.savedImage.serverLocation;
	      	}
	      	var html ='<form id="pcws-image-form" name="pcws-image-form" method="post" action="'+formAction+'">';
	      			html +='<input type="hidden" id="pcws_description" name="pcws_description"><input type="hidden" id="pcws_image_name" name="pcws_image_name"><input type="hidden" id="return_url" name="return_url" value="'+vE.settings.client_path+'">';
	      		html+='</form>';
	      	$(el).append(html);
	    }

	    var pcwsInputCheck = function(){
	      	$(el).append('<div id="pcws-firstControls"></div>');
	      	var checkInputArr = ['brightness','contrast','draw','erase','frame','sticker','color-effect'];
	      	for(x in checkInputArr){
	        	var cb = document.createElement('input');
	          	cb.type = 'checkbox';
	          	cb.id  = 'pcws-'+checkInputArr[x];
	          	cb.class = 'pcws-filtersink';
	          	$(el).find('#pcws-firstControls').append(cb);
	      	}
	    }

	    /**
         * initialize the all slider used in our editor (left panel slider and bottom slider for frames,sticker and color effects.)
         */
        var pcwsInitSlider = function(){
        	var topSliderVertical = true,topSliderVisible = 6,otherSliderVisible = 6;
        	if(isMobileView){
        		topSliderVertical = false;
        		topSliderVisible = 2;
        		otherSliderVisible = 3;
        	}
            $(el).find(".vertical .pcws-carousel").jCarouselLite({
                btnNext: ".vertical .next",
                btnPrev: ".vertical .prev",
                vertical: topSliderVertical,
                circular: false,
                visible: topSliderVisible
            });

            $(el).find(".fraction .pcws-carousel").jCarouselLite({
                btnNext: ".fraction .next",
                btnPrev: ".fraction .prev",
                circular: false,
                visible: otherSliderVisible
            });
            
            $(el).find(".sticker_fraction .pcws-carousel").jCarouselLite({
                btnNext: ".sticker_fraction .next",
                btnPrev: ".sticker_fraction .prev",
                circular: false,
                visible: otherSliderVisible
            });
            
            $(el).find(".color-fraction .pcws-carousel").jCarouselLite({
                btnNext: ".color-fraction .next",
                btnPrev: ".color-fraction .prev",
                circular: false,
                visible: otherSliderVisible
            });
        }

	    /**
         * ===================================================================================
         * = FINISHED USER INTERFACE CREATION USING HTML AND CSS
         * ===================================================================================
         */
        
        /**
         * ===================================================================================
         * = INITIALIZE EVENTS
         * ===================================================================================
         */
        
        var bindEvents = function(){
        	var assests_url = vE.settings.server_path+vE.settings.assets_path;
        	firstControls = document.getElementById('pcws-firstControls');

        	$(el).find('.pcws-inner-frame').click(function(){ 
		    	var frameId = this.id; 
		      	/*fabric.Image.fromURL(assests_url+'frame/'+frameId+'.png', function(img) {
		        	var oImg = img.set({ left: 0, top: 0, width: 600, height: 600, angle: 0, crossOrigin: "Anonymous" });
		        	oImg.crossOrigin = "Anonymous";
		        	frameObject =[];
		        	frameObject.push(oImg);
		        	canvas.add(oImg).renderAll();
		        	oImg.selectable = oImg.hasControls = oImg.hasBorders = false;
		        	// canvas.item((canvas.getObjects().length-1)).selectable =canvas.item((canvas.getObjects().length-1)).hasControls = canvas.item((canvas.getObjects().length-1)).hasBorders = false;
		        	canvas.bringToFront(oImg);
		        	// canvas.getObjects();
		      	},{id: imageFrameId,crossOrigin: 'Anonymous'});*/

        		
        		// canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
				//   opacity: 0.5,
				//   angle: 45,
				//   left: 400,
				//   top: 400,
				//   originX: 'left',
				//   originY: 'top',
				//   crossOrigin: 'anonymous'
				// });
				
				// NEW CODE TO APPLY STATIC BORDERS
				var frame = findFrames(frameId);
				applyFrame(frame);

				// OLD CODE TO APPLY STATIC BORDERS
				// canvas.setOverlayImage(assests_url+'frame/'+frameId+'.png', canvas.renderAll.bind(canvas),{
				// 	originX: 'left',originY: 'top',crossOrigin: 'Anonymous'
				// });
				
        		// TO REMOVE OVERLAY
        		// canvas.setOverlayImage(null, canvas.renderAll.bind(canvas),{originX: 'left',originY: 'top',crossOrigin: 'Anonymous'});
        		// canvas.overlayImage = null;
				// canvas.renderAll.bind(canvas);
		    });

		    $(el).find('.pcws-inner-sticker').click(function(){ 
		    	addStickers(this.id);
		      	/*txtStickerInc+=1;
		      	var stickerId = this.id; 
		      	fabric.Image.fromURL(assests_url+'sticker/'+stickerId+'.png', function(img) {
		        	var oImg = img.set({ left: 100+(txtStickerInc*10), top: 50+(txtStickerInc*10), width: 100, height: 100, angle: 0, crossOrigin: "Anonymous"  });
		        	oImg.crossOrigin = "Anonymous";
		        	stickerObject.push(oImg); 
		        	canvas.add(oImg).renderAll();
		        	stickerObjectLenght.push(canvas.getObjects().length-1);
		        	canvas.setActiveObject(canvas.item((canvas.getObjects().length-1)));
		      	},{id: 'sticker_type',crossOrigin: 'Anonymous'});*/
		    });

		    $(el).find('#pcws-apply-btn').click(function() {
		      	applyOperation();
		    });

		    $(el).find('#pcws-cancel-btn').click(function() { 
		    	cancelOperation();
		    });

		    $(el).find('#pcws-crop-image').click(function(){
				applyOperation();
		    });
			
			$(el).find('#pcws-crop-cancel').click(function(){
				cancelOperation();
		    });

		    $(el).find('#pcws-change-angle').click(function(){ 
		      	if(isAllLayerMerged){
		        	alert(allMessages['nt-after-merge']);
		      	} else {
		      		// TODO: REMOVE UNECESSARY CODE
		        	// $('pcws-mask').style.display = 'block';
		        	$(el).find('#pcws-mask').show()
		        	// $(el).find('#pcws-mask').css('display','block');
		        	$(el).find('#pcws-product-draw-img').show();   
		      	}
		    });

		    $(el).find('#pcws-font-family').change(function() {
		      	var value = $(el).find('#pcws-font-family').val().toLowerCase();
		      	setActiveProp('fontFamily', value);
		    });

		    $(el).find('#pcws-frame-Li').click(function() { 
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(2);
		    	/*if(!DISABLE_ALL_OPERATION){
		        	var a = pcwsGetIsAddanotherTypeObject('frame'); 
		        	if(!a){
		          		pcwsSetallcheckboxuncheck();
		          		// TODO: REMOVE UNECESSARY CODE
		          		// document.getElementById('pcws-frame').checked=true;
		          		$(el).find('#pcws-frame').prop('checked', true);
		          		$(el).find('.pcws-bottom-canvas').show();
		          		// TODO: REMOVE UNECESSARY CODE
		          		// $(el).find('#pcws-frame-control-div').style.display='block';
		          		$(el).find('#pcws-frame-control-div').css('display','block');
		          		selectLeftNav('frame');
		          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
		          		setGetGlobalProperties('LAST_OPERATION',false,2); // 2 for frame
		        	} else {
		          		clickLeftNavType = 'pcws-frame-Li';
		          		$(el).find('#pcws-cancel-btn').click();
		        	}
		      	}else {
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('#pcws-product-close').click(function(){
		        $(el).find('#pcws-mask').hide();
		        $(el).find('#pcws-product-draw-img').hide();
		    });

		    $(el).find('#pcws-sticker-Li').click(function() {
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(3);
		      	/*if(!DISABLE_ALL_OPERATION){
		        	var a = pcwsGetIsAddanotherTypeObject('sticker');  
		        	if(!a){
		          		pcwsSetallcheckboxuncheck();
		          		// TODO: REMOVE UNECESSARY CODE
		          		// document.getElementById('pcws-sticker').checked=true;  
		          		$(el).find('#pcws-sticker').prop('checked', true);
		          		$(el).find('.pcws-bottom-canvas').show();
		          		// TODO: REMOVE UNECESSARY CODE
		          		// $(el).find('#pcws-sticker-control-div').style.display='block';
		          		$(el).find('#pcws-sticker-control-div').css('display','block');
		          		selectLeftNav('sticker');

		          		changeSelectablePropery(false);
		          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
		          		setGetGlobalProperties('LAST_OPERATION',false,3); // 3 for sticker
		        	} else {
		          		clickLeftNavType = 'pcws-sticker-Li';
		          		$(el).find('#pcws-cancel-btn').click();
		        	} 
		      	}else {
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('#pcws-color-effect-Li').click(function(){
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(6);
		    	/*if(!DISABLE_ALL_OPERATION){
			      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
				        clickLeftNavType = 'pcws-color-effect-Li';
			        	$(el).find('.pcws-bottom-canvas').show();
			        	$(el).find('.pcws-bottom-option').hide();
			        	// TODO: REMOVE UNECESSARY CODE
			        	// $(el).find('#pcws-color-effect-control-div').style.display = 'block';
			        	$(el).find('#pcws-color-effect-control-div').css('display','block'); 
			        	selectLeftNav('color-effect');

			        	changeSelectablePropery(false,canvas.getActiveObject());
			        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			        	setGetGlobalProperties('LAST_OPERATION',false,6); // 6 for color effect
			      	}else {
			        	alert(allMessages['nt-color-effect-msg']);
			      	}
		      	}else {
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('.pcws-inner-color-effect').click(function(){
		        var color_effect_id = this.id.split('-');
		        pcwsColorEffect(color_effect_id[1]);
		    });

		    $(el).find('#pcws-show-hide-grid').click(function(){ 
		    	var activeObject  = findObject(objectArr.product);
		    	if(sizeGridAvailable){
		    		if(sizeGridZone.getVisible()){
		    			sizeGridVisible = 0;
		    			sizeGridZone.setVisible(false).canvas.renderAll();	
		    		}else{
		    			sizeGridVisible = 1;
		    			// var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      				// canvas.moveTo(sizeGridZone,finalindex);
		    			sizeGridZone.setVisible(true).canvas.renderAll();
		    		}
		    	}else{
		    		if(activeObject && activeObject.id === productImageId && !sizeGridAvailable){
			        	renderSizeGridZone(activeObject.getLeft(),activeObject.getTop(), (activeObject.getLeft() + activeObject.getWidth()), (activeObject.getTop() + activeObject.getHeight())); 
			        	sizeGridZone.setAngle(activeObject.getAngle());
			        	canvas.renderAll();
			      	} else {
			        	if(sizeGridAvailable){
			          		removeSizeGridZone();
			        	} else {
			          		alert(allMessages['nt-size-grid-msg']);
			        	}
			      	}	
		    	}
		    });

		    $(el).find('#pcws-text-bg-color').change(function() {
		      	setActiveProp('backgroundColor', $(this).val());
		    });

		    $(el).find('#pcws-text-lines-bg-color').change(function() {
		      	setActiveProp('textBackgroundColor', $(this).val());
		    });

		    $(el).find('#pcws-text-font-color').change(function() {
		      	setActiveStyle('fill', $(this).val());
		    });
		    
		    $(el).find('#pcws-text-font-size').change(function(){
		      	this.previousSibling.innerHTML = parseInt($(this).val(), 10);
		      	setActiveStyle('fontSize', parseFloat($(this).val(), 10));
		    });

		    $(el).find('#pcws-text-cmd-bold').click(function() {
		      	setActiveStyle('fontWeight',getActiveStyle('fontWeight') === 'bold' ? '' : 'bold');
		    });

		    $(el).find('#pcws-text-cmd-italic').click(function() {
		      	setActiveStyle('fontStyle',getActiveStyle('fontStyle') === 'italic' ? '' : 'italic');
		    });

		    $(el).find('#pcws-text-cmd-underline').click(function() {
		      	var value = isUnderline() ? getActiveStyle('textDecoration').replace('underline', '') : (getActiveStyle('textDecoration') + ' underline');
		      	setActiveStyle('textDecoration', value);
		    });

		    $(el).find('#pcws-change-image').click(function(){
		      	if(isAllLayerMerged){
		        	alert(allMessages['nt-after-merge']);
		      	}else {
		      		// TODO: REMOVE UNECESSARY CODE
		        	// $(el).find('#pcws-mask').style.display = 'block';
		        	// $(el).find('#pcws-dropzone-main-div').style.display = 'block';   
		        	$(el).find('#pcws-mask').css('display','block'); 
		        	$(el).find('#pcws-dropzone-main-div').css('display','block'); 
		      	}
		    });

		    $(el).find('#pcws-close-btn').click(function(){
		    	// TODO: REMOVE UNECESSARY CODE
		      	// $(el).find('#pcws-mask').style.display = 'none';
		      	// $(el).find('#pcws-dropzone-main-div').style.display = 'none';
		      	$(el).find('#pcws-mask').css('display','none');
		      	$(el).find('#pcws-dropzone-main-div').css('display','none');
		    });

		    $(el).find('#pcws-text-cmd-linethrough').click(function() {
		      	var value = isLinethrough() ? getActiveStyle('textDecoration').replace('line-through', '') : (getActiveStyle('textDecoration') + ' line-through');
		      	setActiveStyle('textDecoration', value);
		    });
		    
		    $(el).find('#pcws-text-cmd-overline').click(function() {
		      	var value = isOverline()? getActiveStyle('textDecoration').replace('overlin', '') : (getActiveStyle('textDecoration') + ' overline');
		      	setActiveStyle('textDecoration', value);
		    });

		    $(el).find('#pcws-merge-layer').click(function(){
		    	if(!DISABLE_ALL_OPERATION){
		    		if(confirm(allMessages['cn-before-mergelayer']))
		    			mergeAllLayer(true);
		    	}else{
		    		// alert(allMessages['nt-after-apply-cancel']);
		    		confirmRemove(true);
		    	}
		    });

		    $(el).find('#pcws-text-Li').click(function(){
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(1);
		      	/*if(!DISABLE_ALL_OPERATION){
		        	var a = pcwsGetIsAddanotherTypeObject('text'); 
		        	if(!a){
		          		pcwsSetallcheckboxuncheck();
		          		$(el).find('.pcws-bottom-canvas').show();
		          		// TODO: REMOVE UNECESSARY CODE
		          		// $(el).find('#pcws-text-control-div').style.display = 'block';
		          		$(el).find('#pcws-text-control-div').css('display','block');
		          		changeSelectablePropery(false,'text_id');

		          		addTexts();
		          		selectLeftNav('text');
		          		setActiveStyle('fill', vE.settings.defaultFontColor);
		          		
		          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
		          		setGetGlobalProperties('LAST_OPERATION',false,1); // 1 for text
		        	}else {
		          		clickLeftNavType = 'pcws-text-Li';
		          		$(el).find('#pcws-cancel-btn').click();
		        	}
		      	}else {
		        	// alert(allMessages['nt-after-apply-frame']);
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('#pcws-brightness-Li').click(function() {
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(7);
		    	/*if(!DISABLE_ALL_OPERATION){
			      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
			        	var a = pcwsGetIsAddanotherTypeObject('brightness');
			        	var mainobj = $(el).find('#pcws-brightness');
			        	if(!a){ 
			          		$(el).find('#pcws-brightness').prop('checked', true);
			          		clickLeftNavType = 'pcws-brightness-Li';
			          		changeSelectablePropery(false,canvas.getActiveObject());
			          		enableBrightness(mainobj);
			        	}else {
			          		clickLeftNavType = 'pcws-brightness-Li';
			          		enableBrightness(mainobj);
			        	}
			        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			        	setGetGlobalProperties('LAST_OPERATION',false,7); // 7 for brightness
			      	}else if(!canvas.isDrawingMode){
			        	alert(allMessages['nt-brightness-msg']);
			      	}
			    }else{
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('#pcws-brightness-value').change(function() {
		      	this.previousSibling.innerHTML = parseInt($(this).val(), 10);
		      	applyFilterValue(0, 'brightness', parseInt($(this).val(), 10));
		    });

		    $(el).find('#pcws-contrast-Li').click(function() {
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(8);
		      	/*if(!DISABLE_ALL_OPERATION){
			      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
			        	var a = pcwsGetIsAddanotherTypeObject('contrast');
			        	var mainobj = $(el).find('#pcws-contrast');
			        	if(!a){
			          		$(el).find('#pcws-contrast').prop('checked', true);
			          		clickLeftNavType = 'pcws-contrast-Li';
			          		changeSelectablePropery(false,canvas.getActiveObject());
			          		enableContrast(mainobj);
			        	}else {
			          		clickLeftNavType = 'pcws-contrast-Li';
			          		enableContrast(mainobj);
			        	}
			        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			        	setGetGlobalProperties('LAST_OPERATION',false,8); // 8 for contrast
			      	}else if(!canvas.isDrawingMode){
			        	alert(allMessages['nt-contrast-msg']);
			      	}
			    }else{
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('#pcws-contrast-value').change(function() {
		      	this.previousSibling.innerHTML = parseInt($(this).val(), 10);
		      	applyFilterValue(1, 'contrast', parseInt($(this).val(), 10));
		    });

		    $(el).find('#pcws-send-backwards').click(function () {
		      	/*var activeObject = canvas.getActiveObject();
		      	var activeObjectIndex = canvas.getObjects().indexOf(activeObject);
		      	if (activeObject && !(activeObjectIndex ==1 && canvas._objects[0].id === imageFrameId)) {
		        	canvas.sendBackwards(activeObject);
		      	}else{
		        	alert(allMessages['nt-before-send-backward']);
		      	}*/ 
		      	updateIndex(0);
		    });

		    $(el).find('#pcws-bring-forward').click(function () {
		      	/*var activeObject = canvas.getActiveObject();
		      	if (activeObject) {
		        	canvas.bringForward(activeObject);
		      	}else{
		        	alert(allMessages['nt-before-send-forward']);
		      	}*/ 
		      	updateIndex(1);
		    });

		    $(el).find('#pcws-draw-Li').click(function(){ 
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(4);
		    	/*if(!DISABLE_ALL_OPERATION){
			      	$(el).find('#pcws-draw').checked = false; 
			      	pcwsDraw();

			      	changeSelectablePropery(false);
			      	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			      	setGetGlobalProperties('LAST_OPERATION',false,4); // 4 for draw
		      	}else{
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });
		    $(el).find('#pcws-erase-Li').click(function(){ 
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE, 10 FOR ERASE
		    	triggerAction(10);
		    });

		    $(el).find('#pcws-crop-Li').click(function(){ 
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(5);
		      	/*if(!DISABLE_ALL_OPERATION){
		        	var r = confirm(allMessages['cn-before-crop']);
		        	if(r){
		        		changeSelectablePropery(false);

		        		initCropZoneObject();
		          		mergeAllLayer(false);
		          		renderCropZone(10,10,200,200);
		          		selectLeftNav('crop');
		          		// TODO: REMOVE UNECESSARY CODE
		          		// $(el).find('#pcws-crop-grid-control-div').style.display="block";
		          		$(el).find('#pcws-crop-grid-control-div').css('display','block');

		          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
		          		setGetGlobalProperties('LAST_OPERATION',false,5); // 5 for crop
		        	}
		      	} else {
		        	// alert(allMessages['nt-after-apply-frame']);
		        	// alert(allMessages['nt-after-apply-cancel']);
		        	confirmRemove(true);
		      	}*/
		    });

		    $(el).find('.pcws-close-paint').click(function(){
		      	drawDivInput = false;
		      	canvas.isDrawingMode = drawDivInput;
		      	$(el).find('#pcws-draw-control-div').hide();
		      	$(el).find('#pcws-drawing-line-width').disabled = true;
		    });

		    // CANVAS EVENT BINDING
		    canvas.on({
		    	'path:created': function(obj){
		    		if(DEBUG_MODE)
		        		console.log('path:created '+obj);

		          	drawObjects.push(obj.path);
		      	},
		      	'after:render': function(obj){
		        	if(DEBUG_MODE)
		        		console.log('after:render '+obj);
		          	// this.calcOffset();
		      	},
		      	'before:selection:cleared': function(obj){ 
		      		if(DEBUG_MODE)
		      			console.log('before:selection:cleared '+obj.target.canvas._activeObject.id);
		      	},
		      	/*'object:added'; function(obj){
		      		if(DEBUG_MODE)
		          		console.log('object:added'+obj);
		      	},
		      	'object:removed': function(obj){
		      		if(DEBUG_MODE)
		          		console.log('object:removed'+obj);
		      	},
		      	'selection:created': function(obj){
		      		if(DEBUG_MODE)
		          		console.log('selection:created'+obj.target.canvas._activeObject.id);
		      	},*/
		      	'object:scaling':function(obj){
		      		if(DEBUG_MODE)
		      			console.log('object:scaling '+obj);
		        	if(obj.target===objectArr.product && sizeGridAvailable){
		          		var prdImageW = obj.target.getWidth();
		          		var prdImageH = obj.target.getHeight();
		          		$(el).find('#ws-product-image-size').html(parseInt(prdImageW / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']]+' X '+parseInt(prdImageH / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']]);
		          		// RESET SIZE GRID SIZE AND SCALING ACCORDING TO PRODUCT IMAGE
		          		resetSizeGridSize(prdImageW,prdImageH,obj.target.getLeft(),obj.target.getTop());
		        	}
		      	},
		      	'object:rotating':function(obj){ 
		      		if(DEBUG_MODE)
		      			console.log('object:rotating '+obj);
		        	if(obj.target===objectArr.product && sizeGridAvailable){
		        		// RESET SIZE GRID ANGLE ACCORDING TO PRODUCT IMAGE
		            	sizeGridZone.setAngle(this.getActiveObject().getAngle());
		        	}
		      	},
		      	'object:moving':function(obj){ 
		      		if(DEBUG_MODE)
		      			console.log('object:moving '+obj);
		        	if(obj.target===objectArr.product && sizeGridAvailable){
		          		var prdImageW = obj.target.getWidth();
		          		var prdImageH = obj.target.getHeight();
		          		$(el).find('#pcws-product-image-size').html(parseInt(prdImageW / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']]+' X '+parseInt(prdImageH / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']]);
		          		// RESET SIZE GRID SIZE AND SCALING ACCORDING TO PRODUCT IMAGE
		          		resetSizeGridSize(prdImageW,prdImageH,obj.target.getLeft(),obj.target.getTop());
		        	}
		      	},
		      	'object:selected': function(obj) { 
		      		if(DEBUG_MODE)
		      			console.log('object:selected '+obj);
		        	
		        	CURRENT_SELECTED_OBJECT = obj.target; //canvas.getActiveObject(); 
		        	// console.log(CURRENT_SELECTED_OBJECT); console.log(obj);
		        	if(LAST_SELECTED_OBJECT==null){
		        		LAST_SELECTED_OBJECT = CURRENT_SELECTED_OBJECT;
		        	}
		        	if(CURRENT_SELECTED_OBJECT!=LAST_SELECTED_OBJECT){
		        		// confirmRemove(false);
		        	}else{
		        		LAST_SELECTED_OBJECT = CURRENT_SELECTED_OBJECT;	
		        	}

		        	// TO ENABLE THE TEXT PROPERTIES WHEN TEXT TYPE OBJECT SELECTED
	        		/*if(obj.target.canvas && obj.target.canvas._activeObject.id && (obj.target.canvas._activeObject.id.indexOf('text_id') >=0)){
		          		$(el).find('.pcws-bottom-canvas').show();
		          		$(el).find('#pcws-text-control-div').show();
		          		$(el).find('ul li').removeClass('active'); 
		          		$(el).find('#pcws-text-Li').addClass('active');
		          		// removeType = 1; // 1 for text and 2 for sticker
		        	}*/

		        	if(obj.target.canvas._activeObject.id && (obj.target.canvas._activeObject.id === userImageId || obj.target.canvas._activeObject.id === productImageId) || obj.target.id===finalImageId){
		          		SELECTEDOBJ = 1;
		        	}else{
		        		SELECTEDOBJ = 0;
		        	}
		      	},
		      	'selection:cleared': function(obj) {
		      		if(DEBUG_MODE)
		        		console.log('selection:cleared '+obj);

		        	// Not applied for some operations like: 1 text operation, 3 sticker operation, 4 draw operation, 5 crop operation
		        	if(DISABLE_ALL_OPERATION && LAST_OPERATION!=1 && LAST_OPERATION!=3 && LAST_OPERATION!=4 && LAST_OPERATION!=5){ 
	        			confirmRemove(true);
	        		}
		      	}
		    });

			// window.addEventListener('resize', resizePcwsCanvas, false);
			$( window ).resize(function() {
				resizePcwsCanvas();
			});

			// BIND EVENT WITH DRAWING OBJECTS (DRAWING COLOR AND LINE)
			// TODO: REMOVE UNECESSARY CODE
			/*var drawingColorEl = $('pcws-drawing-color'),drawingLineWidthEl = $('pcws-drawing-line-width');
		    drawingColorEl.onchange = function() {
		      canvas.freeDrawingBrush.color = this.value;
		    };
		    drawingLineWidthEl.onchange = function() {
		      canvas.freeDrawingBrush.width = parseInt($(this).val(), 10) || 1;
		      this.previousSibling.innerHTML = this.value;
		      resetCreatedModels();
		    };*/
		    $(el).find('#pcws-drawing-color').change(function() {
				canvas.freeDrawingBrush.color = $(this).val();	
			});
			$(el).find('#pcws-drawing-line-width').change(function() {
				canvas.freeDrawingBrush.width = parseInt($(this).val(), 10) || 1;
			    this.previousSibling.innerHTML = $(this).val();
			    // resetCreatedModels();
			});
			// BIND EVENT WITH ERASE OBJECTS (ERASE COLOR AND LINE)
			$(el).find('#pcws-erase-color').change(function() {
				// eraser_canvas.freeDrawingBrush.color = $(this).val();	
			});
			$(el).find('#pcws-erase-line-width').change(function() {
				$(el).find('#pcws-erase-line-width').prev().html($(el).find('#pcws-erase-line-width').val());
		      	eraser_canvas.freeDrawingBrush.radius = $(el).find('#pcws-erase-line-width').val();
		      	var wh = parseInt(eraser_canvas.freeDrawingBrush.radius)*2;
		      	$(el).find('#pcws-erase-line-width-box').css('width',wh+'px').css('height',wh+'px');
		    });

			// INITIALIZE THE DROPZONE TO UPLOAD USER IMAGE BY AJAX
			$(el).find('.uploadform').dropzone({
				dictDefaultMessage: dropzoneMessages["dictDefaultMessage"],
			    dictFallbackMessage: dropzoneMessages["dictFallbackMessage"],
			    dictFallbackText: dropzoneMessages["dictFallbackText"],
			    dictFileTooBig: dropzoneMessages["dictFileTooBig"],
			    dictInvalidFileType: dropzoneMessages["dictInvalidFileType"],
			    dictResponseError: dropzoneMessages["dictResponseError"],
			    dictCancelUpload: dropzoneMessages["dictCancelUpload"],
			    dictCancelUploadConfirmation: dropzoneMessages["dictCancelUploadConfirmation"],
			    dictRemoveFile: dropzoneMessages["dictRemoveFile"],
			    dictMaxFilesExceeded: dropzoneMessages["dictMaxFilesExceeded"],
			    dictAllowedFileMsg: dropzoneMessages["dictAllowedFileMsg"],

		        acceptedFiles: "image/jpeg,image/png",
		        url: vE.settings.userimagepath,
		        maxFiles: 1, // Number of files at a time
		        maxFilesize: 1, //in MB
		        maxfilesexceeded: function(file) {
		          alert(allMessages['nt-file-upload-msg']);
		        },
		        success: function (response) {
		         var x = JSON.parse(response.xhr.response);
		         // console.log(response.xhr.response);
		         $('.icon').hide();
		         this.removeAllFiles();
		         updateUserImage(x.img);
		        },        
		        addRemoveLinks: true,
		        removedfile: function(file) {
		          var _ref;
		           return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;  
		        }   
		    });
			// BIND CLICK EVENT ON PRODUCT IMAGES
		    $(el).find('.pcws-inner-product-image img').click(function(){
		      	updateProductImage($(this,'img').attr('src'),$(this,'img').attr('data-title'));
		    });

		    // TO SAVE THE FINAL IMAGE
		    // TODO: REMOVE UNECESSARY CODE
		    // var button = document.getElementById('pcws-finish-editing');
		    // button.addEventListener('click', function (e) { 
		    $(el).find('#pcws-finish-editing').click(function(){
		    	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
		    	triggerAction(9);
		    	/*if(!DISABLE_ALL_OPERATION){
			      	var confirmation = confirm(allMessages['cn-finish-editing']);
			      	if(confirmation){
			      		showDescriptionDialog();
			      		// el.saveFinalImage();
			      	}
		    	}else{
		    		// alert(allMessages['nt-after-apply-cancel']);
		    		confirmRemove(true);
		    	}*/
		    });

		    $(el).find('#pcws_description_save').click(function(){
		    	messageWithImage = $.trim($(el).find('#pcws_description_text').val());
		    	el.saveFinalImage();
		    	// TODO: Client don't want to make required Image description
		    	// if(messageWithImage!=''){ el.saveFinalImage(); }else{ alert(allMessages['er-enter-description']); }
		    });

		    $(el).find('#pcws-description-close').click(function(){
		    	$(el).find('#pcws-mask').hide();
	    		$(el).find('#pcws-description-form').hide();
		    });
        }

        // TO GET THE OBJECT CURRENT INDEX
        var getCurrentIndex = function(allobjects,searchobj){
        	for (var i = allobjects.length - 1; i >= 0; i--) {
				if(allobjects[i]==searchobj){
					return i;
				}
			}
			return false;
        }

        // TO MOVE OBJECT IN FORWARD AND BACKWARD
        var updateIndex = function(updown){
        	/*var allobjects = canvas.getObjects();
        	var proindex = getCurrentIndex(allobjects,objectArr.product);
        	var usrindex = getCurrentIndex(allobjects,objectArr.user);
        	if(sizeGridVisible){
	        	var sizegridindex = getCurrentIndex(allobjects,sizeGridZone);
	        	console.log(proindex,usrindex,sizegridindex, findIndexOfObject(objectArr.product));
	        }else{
	        	console.log(proindex,usrindex, findIndexOfObject(objectArr.product));
	        }*/

        	// 0 = sendBackwards, 1 = bringForward, 2 = sendToBack, 3=bringToFront
        	var activeObject = canvas.getActiveObject();
        	if(activeObject){
        		/*
        		switch(updown){
        			case 0:
        				if(objectArr.product==activeObject){
		        			var allobjects = canvas.getObjects();
		        			var proindex = getCurrentIndex(allobjects,activeObject);
		        			if(sizeGridAvailable){
			        			var gridindex = getCurrentIndex(allobjects,sizeGridZone);
			        			console.log('0 if typeof sizeGridZone',proindex,gridindex);
			        			if(proindex>2){
			        				console.log('0 if proindex > 2');
			        				canvas.sendBackwards(activeObject);
			        				// canvas.sendBackwards(sizeGridZone);
			        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      							canvas.moveTo(sizeGridZone,finalindex);
			        			}
		        			}else{
		        				console.log('0 else back ward');
		        				canvas.sendBackwards(activeObject);
		        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      						canvas.moveTo(sizeGridZone,finalindex);
		        			}
		        		}else if(objectArr.user==activeObject || (sizeGridAvailable && activeObject==sizeGridZone)){
							// SIMPLE RETURN IN CASE SELECTED OBJECT IS USER IMAGE OBJECT OR GRID OBJECT
		        			return false;
		        		}else{
		        			canvas.sendBackwards(activeObject);
		        		}
        			break;
        			case 1:
        				if(objectArr.product==activeObject){
        					var allobjects = canvas.getObjects();
		        			var proindex = getCurrentIndex(activeObject);
		        			if(sizeGridAvailable){
		        				console.log('1 if typeof sizeGridZone');
		        				canvas.bringForward(sizeGridZone);
		        				// canvas.bringForward(activeObject);
		        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      						canvas.moveTo(sizeGridZone,finalindex);
		        			}else{
		        				canvas.bringForward(activeObject);
		        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      						canvas.moveTo(sizeGridZone,finalindex);
		        			}
		        		}else if(objectArr.user==activeObject || (sizeGridAvailable && activeObject==sizeGridZone)){
							// SIMPLE RETURN IN CASE SELECTED OBJECT IS USER IMAGE OBJECT OR GRID OBJECT
		        			return false;
		        		}else{
		        			canvas.bringForward(activeObject);
		        		}
        			break;
        			case 2:
        				
        			break;
        			case 3:
        				
        			break;
        		}
        		*/
        		
        		switch(updown){
        			case 0:
        				if(objectArr.user==activeObject || (sizeGridAvailable && activeObject==sizeGridZone)){
							// SIMPLE RETURN IN CASE SELECTED OBJECT IS USER IMAGE OBJECT OR GRID OBJECT
		        			return false;
		        		}else{
		        			canvas.sendBackwards(activeObject);
		        			if(objectArr.product==activeObject && sizeGridAvailable && sizeGridZone){
		        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      						canvas.moveTo(sizeGridZone,finalindex);
		        			}
		        		}
        			break;
        			case 1:
        				if(objectArr.user==activeObject || (sizeGridAvailable && activeObject==sizeGridZone)){
							// SIMPLE RETURN IN CASE SELECTED OBJECT IS USER IMAGE OBJECT OR GRID OBJECT
		        			return false;
		        		}else{
		        			canvas.bringForward(activeObject);
		        			if(objectArr.product==activeObject && sizeGridAvailable && sizeGridZone){
		        				var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      						canvas.moveTo(sizeGridZone,finalindex);
		        			}
		        		}
        			break;
        		}
        		canvas.sendToBack(objectArr.user);
        	}else{
	        	alert(allMessages['nt-before-send-backward']);
	      	}
        }

        // TO TRIGGER PARTICUAL ACTION OR OPERATION FROM LEFT SIDE MENU AND SAVE IMAGE AS WELL
        var triggerAction = function(action){
        	// 1 FOR TEXT, 2 FOR FRAME, 3 FOR STICKER, 4 FOR DRAW, 5 FOR CROP, 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST, 9 FOR SAVE IMAGE
        	switch(action){
        		case 1:
        			// TEXT OPERATION
        			if(!DISABLE_ALL_OPERATION){
			        	var a = pcwsGetIsAddanotherTypeObject('text'); 
			        	if(!a){
			          		pcwsSetallcheckboxuncheck();
			          		$(el).find('.pcws-bottom-canvas').show();
			          		// TODO: REMOVE UNECESSARY CODE
			          		// $(el).find('#pcws-text-control-div').style.display = 'block';
			          		$(el).find('#pcws-text-control-div').css('display','block');
			          		changeSelectablePropery(false,'text_id');

			          		addTexts();
			          		selectLeftNav('text');
			          		setActiveStyle('fill', vE.settings.defaultFontColor);
			          		
			          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			          		setGetGlobalProperties('LAST_OPERATION',false,1); // 1 for text
			        	}else {
			          		clickLeftNavType = 'pcws-text-Li';
			          		$(el).find('#pcws-cancel-btn').click();
			        	}
			      	}else {
			        	// alert(allMessages['nt-after-apply-frame']);
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=1){
			    			confirmRemove(true,1);
			    		}
			      	}
        		break;
        		case 2:
        			// FRAME OPERATION
        			if(!DISABLE_ALL_OPERATION){
			        	var a = pcwsGetIsAddanotherTypeObject('frame'); 
			        	if(!a){
			          		pcwsSetallcheckboxuncheck();
			          		// TODO: REMOVE UNECESSARY CODE
			          		// document.getElementById('pcws-frame').checked=true;
			          		$(el).find('#pcws-frame').prop('checked', true);
			          		$(el).find('.pcws-bottom-canvas').show();
			          		// TODO: REMOVE UNECESSARY CODE
			          		// $(el).find('#pcws-frame-control-div').style.display='block';
			          		$(el).find('#pcws-frame-control-div').css('display','block');
			          		selectLeftNav('frame');
			          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			          		setGetGlobalProperties('LAST_OPERATION',false,2); // 2 for frame
			        	} else {
			          		clickLeftNavType = 'pcws-frame-Li';
			          		$(el).find('#pcws-cancel-btn').click();
			        	}
			      	}else {
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=2){
			    			confirmRemove(true,2);
			    		}
			      	}
        		break;
        		case 3:
        			// STICKER OPERATION
        			if(!DISABLE_ALL_OPERATION){
			        	var a = pcwsGetIsAddanotherTypeObject('sticker');  
			        	if(!a){
			          		pcwsSetallcheckboxuncheck();
			          		// TODO: REMOVE UNECESSARY CODE
			          		// document.getElementById('pcws-sticker').checked=true;  
			          		$(el).find('#pcws-sticker').prop('checked', true);
			          		$(el).find('.pcws-bottom-canvas').show();
			          		// TODO: REMOVE UNECESSARY CODE
			          		// $(el).find('#pcws-sticker-control-div').style.display='block';
			          		$(el).find('#pcws-sticker-control-div').css('display','block');
			          		selectLeftNav('sticker');

			          		changeSelectablePropery(false);
			          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			          		setGetGlobalProperties('LAST_OPERATION',false,3); // 3 for sticker
			        	} else {
			          		clickLeftNavType = 'pcws-sticker-Li';
			          		$(el).find('#pcws-cancel-btn').click();
			        	} 
			      	}else {
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=3){
			    			confirmRemove(true,3);
			    		}
			      	}
        		break;
        		case 4:
        			// DRAW OPERATION
        			if(!DISABLE_ALL_OPERATION){
				      	$(el).find('#pcws-draw').checked = false; 
				      	pcwsDraw();

				      	changeSelectablePropery(false);
				      	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
				      	setGetGlobalProperties('LAST_OPERATION',false,4); // 4 for draw
			      	}else{
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=4){
			    			confirmRemove(true,4);
			    		}
			      	}
        		break;
        		case 5:
        			// CROP OPERATION
        			if(!DISABLE_ALL_OPERATION){
			        	var r = confirm(allMessages['cn-before-crop']);
			        	if(r){
			        		changeSelectablePropery(false);

			        		initCropZoneObject();
			          		mergeAllLayer(false);
			          		renderCropZone(10,10,200,200);
			          		selectLeftNav('crop');
			          		// TODO: REMOVE UNECESSARY CODE
			          		// $(el).find('#pcws-crop-grid-control-div').style.display="block";
			          		$(el).find('#pcws-crop-grid-control-div').css('display','block');

			          		setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
			          		setGetGlobalProperties('LAST_OPERATION',false,5); // 5 for crop
			        	}
			      	} else {
			        	// alert(allMessages['nt-after-apply-frame']);
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=5){
			    			confirmRemove(true,5);
			    		}
			      	}
        		break;
        		case 6:
        			// COLOR EFFECT OPERATION
        			if(!DISABLE_ALL_OPERATION){
				      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
					        clickLeftNavType = 'pcws-color-effect-Li';
				        	$(el).find('.pcws-bottom-canvas').show();
				        	$(el).find('.pcws-bottom-option').hide();
				        	// TODO: REMOVE UNECESSARY CODE
				        	// $(el).find('#pcws-color-effect-control-div').style.display = 'block';
				        	$(el).find('#pcws-color-effect-control-div').css('display','block'); 
				        	selectLeftNav('color-effect');

				        	changeSelectablePropery(false,canvas.getActiveObject());
				        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
				        	setGetGlobalProperties('LAST_OPERATION',false,6); // 6 for color effect
				      	}else {
				        	alert(allMessages['nt-color-effect-msg']);
				      	}
			      	}else {
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=6){
			    			confirmRemove(true,6);
			    		}
			      	}
        		break;
        		case 7:
        			// BRIGHTNESS OPERATION
        			if(!DISABLE_ALL_OPERATION){
				      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
				        	var a = pcwsGetIsAddanotherTypeObject('brightness');
				        	var mainobj = $(el).find('#pcws-brightness');
				        	if(!a){ 
				          		$(el).find('#pcws-brightness').prop('checked', true);
				          		clickLeftNavType = 'pcws-brightness-Li';
				          		changeSelectablePropery(false,canvas.getActiveObject());
				          		enableBrightness(mainobj);
				        	}else {
				          		clickLeftNavType = 'pcws-brightness-Li';
				          		enableBrightness(mainobj);
				        	}
				        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
				        	setGetGlobalProperties('LAST_OPERATION',false,7); // 7 for brightness
				      	}else if(!canvas.isDrawingMode){
				        	alert(allMessages['nt-brightness-msg']);
				      	}
				    }else{
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=7){
			    			confirmRemove(true,7);
			    		}
			      	}
        		break;
        		case 8:
        			// CONTRAST OPERATION
        			if(!DISABLE_ALL_OPERATION){
				      	if(findObjectType(canvas.getActiveObject())!=''){ // SELECTEDOBJ
				        	var a = pcwsGetIsAddanotherTypeObject('contrast');
				        	var mainobj = $(el).find('#pcws-contrast');
				        	if(!a){
				          		$(el).find('#pcws-contrast').prop('checked', true);
				          		clickLeftNavType = 'pcws-contrast-Li';
				          		changeSelectablePropery(false,canvas.getActiveObject());
				          		enableContrast(mainobj);
				        	}else {
				          		clickLeftNavType = 'pcws-contrast-Li';
				          		enableContrast(mainobj);
				        	}
				        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
				        	setGetGlobalProperties('LAST_OPERATION',false,8); // 8 for contrast
				      	}else if(!canvas.isDrawingMode){
				        	alert(allMessages['nt-contrast-msg']);
				      	}
				    }else{
			        	// alert(allMessages['nt-after-apply-cancel']);
			        	if(LAST_OPERATION!=8){
			    			confirmRemove(true,8);
			    		}
			      	}
        		break;
        		case 9:
        			// SAVE OPERATION
        			if(!DISABLE_ALL_OPERATION){
				      	var confirmation = confirm(allMessages['cn-finish-editing']);
				      	if(confirmation){
				      		showDescriptionDialog();
				      		// el.saveFinalImage();
				      	}
			    	}else{
			    		// alert(allMessages['nt-after-apply-cancel']);
			    		if(LAST_OPERATION!=9){
			    			confirmRemove(true,9);
			    		}
			    	}
        		break;
        		case 10:
        			// ERASE OPERATION
        			if(!DISABLE_ALL_OPERATION){
        				if(findObjectType(canvas.getActiveObject())=='product'){ // SELECTEDOBJ
    						$(el).find('#pcws-erase').checked = false; 
					      	pcwsErase();
					      	changeSelectablePropery(false);
					      	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,true);
					      	setGetGlobalProperties('LAST_OPERATION',false,10); // 10 for erase
				      	}else{
				      		alert(allMessages['nt-erase-msg']);
				      	}
			      	}else{
			      		if(LAST_OPERATION!=10){
			      			confirmRemove(true,10);
			      		}
			        	// alert(allMessages['nt-after-apply-cancel']);
			      	}
        		break;
        	}
        }

        var applyOperation = function(){
        	switch(LAST_OPERATION){
	      		case 1:
		        	for (var i = textObjectLenght.length - 1; i >= 0; i--) {
		          		canvas.item(textObjectLenght[i]).selectable = false;
		        	};
		        	textObjectLenght = [];
		        	textObject=[];
	      		break;
	      		case 2:
	      			disableAllLeftFunc =1;
		        	isAllLayerMerged = false;
		        	// mergeAllLayer(true);
		        	// frameObject = [];
	      		break;
	      		case 3:
		        	for (var i = stickerObjectLenght.length - 1; i >= 0; i--) {
		         		canvas.item(stickerObjectLenght[i]).selectable = false;
		        	};
		        	stickerObjectLenght = [];
		        	stickerObject = [];
	      		break;
	      		case 4:
	      			drawObjects = [];
	        		canvas.isDrawingMode =false;
	      		break;
	      		case 5:
	      			// TODO: clear border and selection box before fetch area for crop
			    	var tmpCropZone = findObject(cropZone);
			        if(tmpCropZone){
			        	tmpCropZone.hasBorders = false;
			        	tmpCropZone.cornerSize = 0;
			        	tmpCropZone.cornerColor = "transparent";
			        	canvas.setActiveObject(tmpCropZone);
			        }
			        // TO RESOLVE SIDE BORDER LINE ISSUE (LEFT BOTTOM BORDER SHOWN WHEN APPLY CROP)
			    	var l = cropZone.getLeft()+1,t = cropZone.getTop()+1,w = cropZone.getWidth()-1,h = cropZone.getHeight()-1;
			    	// ---------------
		    		fabric.Image.fromURL(canvas.toDataURL({left: l, top: t, width: w, height: h, crossOrigin: "Anonymous" }), function(img) {
			        	var oImg = img.set({left: 0,top: 0, width: (img.width-10), height: (img.height-10), angle: 0, crossOrigin: "Anonymous", hasRotatingPoint:false, lockMovementX:true, lockMovementY:true });
			        	oImg.crossOrigin = "Anonymous";
			        	objectArr.finalimage = oImg;
			        	canvas.clear(); /// this function is used to remove all the objects from canvas
			        	canvas.add(oImg).renderAll();
			        	$(el).find('#pcws-crop-grid-control-div').hide();
			        	resizePcwsInnerCanvas((img.width-10),(img.height-10));
			      	},{id: finalImageId,crossOrigin: 'Anonymous'});
			      	isAllLayerMerged = true;
	      		break;
	      		case 6:
	      		case 7:
	      		case 8:
	      			// addLastFilter(LAST_SELECTED_OBJECT);
	      			addLastFilter(CURRENT_SELECTED_OBJECT);
	      		break;
	      		case 10:
	      			// addLastFilter(LAST_SELECTED_OBJECT);
	      			commitEraserChanges();
	      		break;
	      	}
	      	$(el).find('.pcws-bottom-option').hide();
	      	$(el).find('.pcws-bottom-canvas').hide();
	      	$(el).find('ul li').removeClass('active');	
	      	clickLeftNavType = ''; 
	      	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,false);
	      	changeSelectablePropery(true);
        }

        var cancelOperation = function(){
        	var r = confirm(allMessages['cn-cancel-btn']);
	      	if(r===true){
		        confirmRemove(0);
		    }
        }

        var confirmRemove = function(confirmmsg,action){
	    	if(DEBUG_MODE)
	    		console.log('confirmRemove '+confirmmsg+' -- '+LAST_OPERATION);

	      	action = (action)? action : 0;
	      	if((LAST_OPERATION>=1 && LAST_OPERATION<=8) || LAST_OPERATION==10){
	      		var performCancel = true;
	      		if(confirmmsg){
	      			if(!confirm(allMessages['cn-cancel-btn'])){
	      				performCancel = false;
	      			}
	      		}
	      		if(performCancel){
	      			switch(LAST_OPERATION){
			      		case 1:
			      			for (var i = textObject.length - 1; i >= 0; i--) {
				          		canvas.remove(textObject[i]);
				        	};  
				        	textObject = [];
				        	textObjectLenght = []; 
			      		break;
			      		case 2:
				      		if(document.getElementById('pcws-frame').checked || frameObject.length > 0){
					        	// for (var i = frameObject.length - 1; i >= 0; i--) {
					          		// if(frameObject[i]) { canvas.remove(frameObject[i]) };
					        	// };
					        	// $(el).find('#pcws-frame').checked = false;
					        	// frameObject =[];
					        	LastFrameObj = '';
					        	removeFrame();
					      	}
			      		break;
			      		case 3:
			      			if(document.getElementById('pcws-sticker').checked){ //  && selectObj!=2
					        	for (var i = stickerObject.length - 1; i >= 0; i--) {
					            	canvas.remove(stickerObject[i]);
					        	};  
					        	$(el).find('#pcws-sticker').checked = false; 
					        	stickerObject = [];   
					        	stickerObjectLenght = [];
					      	}
			      		break;
			      		case 4:
			      			if(canvas.isDrawingMode){
					        	for (var i = drawObjects.length - 1; i >= 0; i--) {
					          		canvas.freeDrawingBrush.removePathDataObject(drawObjects[i]);
					        	};
					        	canvas.isDrawingMode =false;
					        	drawObjects = [];
					      	}
			      		break;
			      		case 5:
			      			removeCropZone();
			      		break;
			      		case 6:
			      		case 7:
			      		case 8:
			      			// removeLastFilter(LAST_SELECTED_OBJECT);
			      			removeLastFilter(CURRENT_SELECTED_OBJECT);
			      		break;
			      		case 10:
			      			if(eraser_canvas.isDrawingMode){
					        	eraser_canvas.isDrawingMode =false;
					        	removeEraser();
					      	}
			      		break;
			      	}
			      	$(el).find('#pcws-contrast').attr('checked',false);
		        	$(el).find('#pcws-brightness').attr('checked',false);
		        	$(el).find('.pcws-bottom-canvas').hide();  
		        	$(el).find('ul li').removeClass('active'); 
		        	$(el).find('.pcws-bottom-option').hide();

		        	clickLeftNavType = '';
		        	setGetGlobalProperties('DISABLE_ALL_OPERATION',false,false);
		        	setTimeout(function(){ changeSelectablePropery(true);},350);
		        	if(action>0)
		        		setTimeout(function(){ triggerAction(action);},500);
		        	
		        	return true;
      			}else{
      				// canvas.discardActiveObject();
      				canvas.setActiveObject(findObject(CURRENT_SELECTED_OBJECT));
      				return false;
      			}
	      	}else{
	      		return false;
	      	}
	    }

	    var applyFrame = function(frame){
    		LastFrameObj = frame;
			var imgsrc = createFrame(LastFrameObj);
			if(imgsrc){
				canvas.setOverlayImage(imgsrc, canvas.renderAll.bind(canvas),{
					originX: 'left',originY: 'top',crossOrigin: 'Anonymous'
				});	
			}
		}
	    var removeFrame = function(){
	    	canvas.setOverlayImage(null, canvas.renderAll.bind(canvas),{originX: 'left',originY: 'top',crossOrigin: 'Anonymous'});
			canvas.overlayImage = null;
			// canvas.renderAll();
	    }

        var enableBrightness = function(obj){
        	var objType = findObjectType(canvas.getActiveObject());
        	
	      	if(objType!=''){ 
	      		$(el).find('#pcws-brightness-control-div .pcws-info').html(objectPropertyArr[objType].brightness);
	        	$(el).find('#pcws-brightness-value').val(objectPropertyArr[objType].brightness);
	      	}
	      	applyFilter(canvas.getActiveObject(),0, $(obj).is(':checked') && new f.Brightness({
	        	brightness: parseInt($(el).find('#pcws-brightness-value').val(), 10)
	      	})); 

	      	if($(obj).is(':checked')){
	        	$(el).find('.pcws-bottom-canvas').show();
	        	$(el).find('.pcws-bottom-option').hide();
	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-brightness-control-div').style.display = 'block';
	        	// $(el).find('#pcws-brightness-value').removeAttribute("disabled");
	        	$(el).find('#pcws-brightness-control-div').css('display','block');
	        	$(el).find('#pcws-brightness-value').removeAttr('disabled');
	        	selectLeftNav('brightness');
	      	}
	      	$(obj).is(':checked')? $(obj).prop('checked',false) : $(obj).prop('checked',true);
        }

        var enableContrast = function(obj){
        	var objType = findObjectType(canvas.getActiveObject());
	      	if(objType && objType!=''){
	      		$(el).find('#pcws-contrast-control-div .pcws-info').html(objectPropertyArr[objType].contrast);
	        	$(el).find('#pcws-contrast-value').val(objectPropertyArr[objType].contrast);
	      	}
	      	applyFilter(canvas.getActiveObject(),1, $(obj).is(':checked') && new f.Contrast({
	        	contrast: parseInt($(el).find('#pcws-contrast-value').val(), 10)
	      	}));
	      	if($(obj).is(':checked')){
	        	$(el).find('.pcws-bottom-canvas').show();
	        	$(el).find('.pcws-bottom-option').hide();
	        	$(el).find('#pcws-contrast-control-div').show();
	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-contrast-value').removeAttribute("disabled");
	        	$(el).find('#pcws-contrast-value').removeAttr('disabled');
	        	selectLeftNav('contrast');
	      	} 
	      	$(obj).is(':checked')? $(obj).prop('checked',false) : $(obj).prop('checked',true);
        }

	    var setupUserProductImages = function(){
	    	for(x in vE.settings.productImageArr){
		      	drawPrdImage+='<div class="pcws-inner-product-image"><img src="'+vE.settings.productImageArr[x].src+'" title="'+vE.settings.productImageArr[x].title+'" data-title="'+x+'"></div>';
		      	if(vE.settings.productImageArr[x].default){
		        	defaultProductObj = vE.settings.productImageArr[x];
		      	}
		    } 
		    if(defaultProductObj=='' && vE.settings.productImageArr[0]){
		        defaultProductObj = vE.settings.productImageArr[0];
		    }
		    if(!defaultProductObj['length-unit'] || !parseInt(defaultProductObj['length-unit'])){
		      	defaultProductObj['length-unit'] =0;
		    }
		    $(el).find('#pcws-inner-product-draw').html(drawPrdImage);
		    $(el).find('#pcws-right-top-product-image').children('img').attr('src',defaultProductObj.src);
		    $(el).find('#pcws-right-user-image').children('img').attr('src',vE.settings.userImageArr.src);

		    
		    fabric.Image.fromURL(vE.settings.userImageArr.src, function(img) {
		    	var imgsize = resizePcwsInnerCanvas(img.width,img.height);
		    	//.scale(0.9); left: 150, top: 100, width: 400, height: 400, hasControls:false, 
		      	var oImg = img.set({ left: 0, top: 0, width: imgsize.width, height: imgsize.height, angle: 0, crossOrigin: "Anonymous", hasRotatingPoint:false, lockMovementX:true, lockMovementY:true }); 
		      	oImg.crossOrigin = "Anonymous";
		      	objectArr.user = oImg;
		      	canvas.add(oImg);
		      	// canvas.sendBackwards(oImg);
			    canvas.sendToBack(oImg);
		      	canvas.renderAll();
		    },{id: userImageId,crossOrigin: 'Anonymous'});

		    fabric.Image.fromURL(defaultProductObj.src, function(img) {
		      	var oImg = img.set({ angle: 0, crossOrigin: "Anonymous" }); //.scale(0.9); // width: 370, height: 300, left: 140, top: 80,
		      	oImg.crossOrigin = "Anonymous"; 
		      	objectArr.product = oImg;
		      	canvas.add(oImg).renderAll();

		      	canvas.moveTo(oImg,2);
		      	// setTimeout(setProductSizeRatio(),2000);
		      	//canvas.setActiveObject(oImg);
		    },{id: productImageId,crossOrigin: 'Anonymous'});
	    }

	    var setGetGlobalProperties = function(prop,setget,propval){
	    	switch(prop){
	    		case 'DISABLE_ALL_OPERATION':
	    			if(setget){ return DISABLE_ALL_OPERATION; }else{ DISABLE_ALL_OPERATION = propval; }
	    		break;
	    		case 'OPERATION_APPLIED':
	    			if(setget){ return OPERATION_APPLIED; }else{ OPERATION_APPLIED = propval; }
	    		break;
	    		case 'LAST_OPERATION':
	    			if(setget){ return LAST_OPERATION; }else{ LAST_OPERATION = propval; }
	    		break;
	    		case 'LAST_SELECTED_OBJECT':
	    			if(setget){ return LAST_SELECTED_OBJECT; }else{ LAST_SELECTED_OBJECT = propval; }
	    		break;
	    		case 'CURRENT_SELECTED_OBJECT':
	    			if(setget){ return CURRENT_SELECTED_OBJECT; }else{ CURRENT_SELECTED_OBJECT = propval; }
	    		break;
	    	}
	    }

	    var findFrames = function(frameId){
	    	for (var i = AllFrames.length - 1; i >= 0; i--) {
	    		if(AllFrames[i].frame_id==frameId)
	    		return AllFrames[i];
	    	};
	    	return false;
	    }
	    var findFrameBorderIndex = function(frame){
	    	for (var i = FrameBorderContainer.length - 1; i >= 0; i--) {
	    		if(FrameBorderContainer[i].frame_id==frame.frame_id)
	    		return i;
	    	};
	    	return false;
	    }
	    var findStickers = function(stickerId){
	    	for (var i = AllStickers.length - 1; i >= 0; i--) {
	    		if(AllStickers[i].sticker_id==stickerId)
	    		return AllStickers[i];
	    	};
	    	return false;
	    }
	    var addStickers = function(stickerId){
	    	// TODO: need to show hide loading, that should come until images loaded
	    	// virtryLoading(1);
	    	var sticker = findStickers(stickerId);
	    	if(sticker){
	    		txtStickerInc+=1;
		      	var stickerId = this.id; 
		      	fabric.Image.fromURL(vE.settings.server_path+vE.settings.assets_path+'sticker/'+sticker.sticker_img, function(img) {
		        	var oImg = img.set({ left: 50+(txtStickerInc*10), top: 25+(txtStickerInc*10), width: 100, height: 100, angle: 0, crossOrigin: "Anonymous"  });
		        	oImg.crossOrigin = "Anonymous";
		        	stickerObject.push(oImg); 
		        	canvas.add(oImg).renderAll();
		        	stickerObjectLenght.push(canvas.getObjects().length-1);
		        	canvas.setActiveObject(canvas.item((canvas.getObjects().length-1)));
		        	// virtryLoading(0);
		      	},{id: 'sticker_type',crossOrigin: 'Anonymous'});
	    	}
	    }

        /**
         * ===================================================================================
         * = FINISHED INITIALIZE EVENTS
         * ===================================================================================
         */
        
        /**
         * ===================================================================================
         * = FUNCTIONAL PRIVATE FUNCTIONS
         * ===================================================================================
         */
        
        var virtryLoading = function(showhide){
	    	showhide = (showhide)? showhide : false;
	      	if(showhide){
	        	$(el).find('#pcws-mask').show();
	        	$(el).find('#pcws-loading-div').show();
	      	}else{
	        	$(el).find('#pcws-mask').hide();
	        	$(el).find('#pcws-loading-div').hide();
	      	}
	    }

        var resizePcwsCanvas = function() {
        	windowWidth = $(window).width();
        	windowHeight = $(window).height();
        	if(windowWidth<=320){
	      		canvas.setWidth(296);
	      		canvas.setHeight(316);
        	}else if(windowWidth>=320 && windowWidth<=480){
	      		canvas.setWidth(480);
	      		canvas.setHeight(500);
        	}else{
        		//if(windowWidth>=320 && windowWidth<=780 || true)
        		var uperdiv = $(el).find(".pcws-canvas-upper-div");
        		canvas.setHeight(uperdiv.height());
	      		canvas.setWidth(uperdiv.width());
        	}
        	resizePcwsInnerCanvas();
	    }
	    var resizePcwsInnerCanvas = function(imgw,imgh){
	    	var _upper_container = $(el).find(".pcws-canvas-upper-div");
	      	var _upper_container_next = _upper_container.children(".canvas-container");
	      	var _erase_canvas_container = _upper_container.children("#eraser_canvas_container");
	      	var _erase_inner_canvas_container = _erase_canvas_container.children(".canvas-container");
	      	var availableW = _upper_container.width();
			var availableH = _upper_container.height();

	    	if(imgw && imgh){
				var imgW = imgw+10; // PLUS 10 BECAUSE USING 5 PIXCEL PADDING
				var imgH = imgh+10; // PLUS 10 BECAUSE USING 5 PIXCEL PADDING
	    	}else{
	    		/*var bound = findObject(objectArr.user).getBoundingRect();
	        	var imgW = bound.width;
	        	var imgH = bound.height;*/
	        	var bound = findObject(objectArr.user).getOriginalSize();
	        	var imgW = bound.width+10;
	        	var imgH = bound.height+10;
	    	}
	    	// CALCULATE ASPECT RATIO
	    	imgW = parseFloat(imgW);
	    	imgH = parseFloat(imgH);
	    	availableW = parseFloat(availableW);
	    	availableH = parseFloat(availableH);
	    	if(imgW > availableW || imgH > availableH){
				if(imgW > availableW){
					ratio = availableW / imgW;   // get ratio for scaling image
		            imgW = availableW;
		            imgH = imgH * ratio;
		            if(imgH > availableH){
						ratio = availableH / imgH; // get ratio for scaling image
			            imgH = availableH;
			            imgW = imgW * ratio;
					}
				}else if(imgH > availableH){
					ratio = availableH / imgH; // get ratio for scaling image
		            imgH = availableH;
		            imgW = imgW * ratio;
		            if(imgW > availableW){
						ratio = availableW / imgW;   // get ratio for scaling image
			            imgW = availableW;
			            imgH = imgH * ratio;
			        }
				}
			}
	    	canvas.setWidth(imgW);
	      	canvas.setHeight(imgH);
	      	
	      	// _upper_container_next.css('margin',((_upper_container.height()/2) - (imgH/2))+'px auto');
	      	var margin = {left: ((_upper_container.width()/2) - (imgW/2)), top: ((_upper_container.height()/2) - (imgH/2)), width: _upper_container_next.css('width'), height: _upper_container_next.css('height') };
	      	_upper_container_next.css('margin-left',margin.left);
	      	_upper_container_next.css('margin-top',margin.top);

	      	// NO NEED TO RESET ERASE ELEMENTS ON WINDOW RESIZE
	      	// TO SET THE ERASE CONTAINER AND INNER CANVAS CONTAINER
	      	// _erase_canvas_container.css('margin-left',margin.left);
	      	// _erase_canvas_container.css('margin-top',margin.top);
	      	// _erase_inner_canvas_container.css('margin-left',margin.left);
	      	// _erase_inner_canvas_container.css('margin-top',-margin.top);
	      	
	      	// _erase_canvas_container.css('width',margin.width);
	      	// _erase_canvas_container.css('height',margin.height);
	      	// _erase_inner_canvas_container.css('width',margin.width);
	      	// _erase_inner_canvas_container.css('height',margin.height);

	      	setTimeout(function(){ 
	        	canvas.renderAll(); 
	        	canvas.calcOffset(); 
	        	if(LastFrameObj!=''){
		    		applyFrame(LastFrameObj);
		    	}
	      	},100);
	      	return {"width":imgW,"height":imgH}
	    }
	    var findIndexOfObject = function(object){
	    	return canvas.getObjects().indexOf(object);
	    }
	    var findObject = function(object){
	    	var indexofProductObj = canvas.getObjects().indexOf(object);
	    	return (indexofProductObj > -1) ? canvas.item(indexofProductObj) : false;
	    }
	    var isSelectableObject = function(object){
	    	var indexofProductObj = canvas.getObjects().indexOf(object);
	    	if(indexofProductObj > -1){ 
	    		// var textobj = canvas.item(indexofProductObj).id.indexOf('text_id'); 
	    		var stickerobj = canvas.item(indexofProductObj).id.indexOf('sticker_type'); 
	    		if(stickerobj>=0){
	    			return false;
	    		}
	    	}
	    	return true;
	    }
	    var changeSelectablePropery = function(slct,exceptobj){
	    	exceptobj = (exceptobj)? exceptobj : false;
	    	var objects = canvas.getObjects();
	      	for (var i = objects.length - 1; i >= 0; i--) {
	      		if(exceptobj){
	      			if(exceptobj instanceof String){
	      				if(! (objects[i].id.indexOf('text_id')>=0)){
		      				objects[i].selectable = slct;
		      			}
	      			}else{
	      				if(exceptobj!= objects[i]){
		      				objects[i].selectable = slct;
		      			}
	      			}
	      		}else{
	      			if(slct){
		      			if(isSelectableObject(objects[i]))
		      				objects[i].selectable = slct;
	      			}else{
	      				objects[i].selectable = slct;
	      			}
	      		}
	      	}
	    }

	    var renderCropZone = function(fromX, fromY, toX, toY) { 
	    	if(DEBUG_MODE)
	    		console.log('renderCropZone '+fromX+' -- '+fromY+' -- '+toX+' -- '+toY);
	        var isRight = toX > fromX,
	        isLeft = !isRight,
	        isDown = toY > fromY,
	        isUp = !isDown,
	        productWidth = 300,
	        productHeight = 300,
	        productRatio =  productWidth/ productHeight,
	        minWidth = Math.min(productWidth, canvas.getWidth()), 
	        minHeight = Math.min(productHeight, canvas.getHeight()),
	        leftX = Math.min(fromX, toX),
	        rightX = Math.max(fromX, toX),
	        topY = Math.min(fromY, toY),
	        bottomY = Math.max(fromY, toY);
	        leftX = Math.max(0, leftX), rightX = Math.min(canvas.getWidth(), rightX), 
	        topY = Math.max(0, topY), 
	        bottomY = Math.min(canvas.getHeight(), bottomY), 
	        minWidth > rightX - leftX && (isRight ? rightX = leftX + minWidth : leftX = rightX - minWidth), 
	        minHeight > bottomY - topY && (isDown ? bottomY = topY + minHeight : topY = bottomY - minHeight), 0 > leftX && (rightX += Math.abs(leftX), leftX = 0), 
	        rightX > canvas.getWidth() && (leftX -= rightX - canvas.getWidth(), rightX = canvas.getWidth()), 0 > topY && (bottomY += Math.abs(topY), topY = 0), 
	        bottomY > canvas.getHeight() && (topY -= bottomY - canvas.getHeight(), bottomY = canvas.getHeight());

	        var width = rightX - leftX,
	            height = bottomY - topY,
	            currentRatio = width / height;
	        if (productRatio !== currentRatio) {
	            var ratio = +productRatio;
	            if (this.isKeyCroping && (isLeft = isKeyLeft, isUp = isKeyUp), ratio > currentRatio) {
	                var newWidth = height * ratio;
	                isLeft && (leftX -= newWidth - width), width = newWidth
	            } else if (currentRatio > ratio) {
	                var newHeight = height / (ratio * height / width);
	                isUp && (topY -= newHeight - height), height = newHeight
	            }
	            if (0 > leftX && (leftX = 0), 0 > topY && (topY = 0), leftX + width > canvas.getWidth()) {
	                var newWidth = canvas.getWidth() - leftX;
	                height = newWidth * height / width, width = newWidth, isUp && (topY = fromY - height)
	            }
	            if (topY + height > canvas.getHeight()) {
	                var newHeight = canvas.getHeight() - topY;
	                width = width * newHeight / height, height = newHeight, isLeft && (leftX = fromX - width)
	            }
	        }

	        cropZone.id ='cropZone',
	        cropZone.left = leftX,
	        cropZone.top = topY,
	        cropZone.width = width,
	        cropZone.height = height;
	        cropZone.padding = 0;
	        // cropZone.scaleX = 0.9;
	        // cropZone.scaleY = 0.9;
	        cropZone.lockRotation = false;
	        cropZone.hasRotatingPoint = false;
	        cropZone.selectable = true;
	        canvas.add(cropZone);
	        canvas.defaultCursor = "crosshair";
	        cropZone.setCoords(),canvas.calcOffset();
	        var tmpobj = findObject(cropZone);
	        if(tmpobj){
	        	canvas.bringToFront(tmpobj),canvas.setActiveObject(tmpobj);
	        }
	    }

	    var updateProductImage = function(imagepath,data_title){ 
	    	if(DEBUG_MODE)
	    		console.log('updateProductImage '+imagepath+' -- '+data_title);
	    	// OLD CODE TO UPDATE THE PRODUCT IMAGE 
	      	// var productIndex = canvas.getObjects().indexOf(objectArr.product);
	      	// canvas._objects[productIndex]._element.src = imagepath;
	      	// canvas._objects[productIndex]._originalElement.src = imagepath;
	      	var tmpimg = new Image();
	      	tmpimg.src = imagepath;
	      	$(el).find('#pcws-product-draw-img').hide();
	      	virtryLoading(1);

	      	tmpimg.onload = function(){
	      		// NEW CODE TO UPDATE THE PRODUCT IMAGE 
	      		defaultProductObj = vE.settings.productImageArr[data_title];
	      		canvas.remove(findObject(objectArr.product));
	      		fabric.Image.fromURL(tmpimg.src, function(img) {
	      			//.scale(0.9); // width: 370, height: 300, left: 140, top: 80,
			      	var oImg = img.set({ left: 5, top: 5, angle: 0, crossOrigin: "Anonymous"}); 
			      	oImg.crossOrigin = "Anonymous"; 
			      	objectArr.product = oImg;
			      	canvas.add(oImg).renderAll();

			      	canvas.sendToBack(oImg);
				    canvas.bringForward(oImg);
				    canvas.bringForward(oImg);

			      	virtryLoading(0);
			      	$(el).find('#pcws-right-top-product-image').children('img').attr('src',tmpimg.src);
			      	// canvas.setActiveObject(oImg);
			    },{id: productImageId,crossOrigin: 'Anonymous'});

	      		// OLD CODE TO UPDATE THE PRODUCT IMAGE 
	      		// defaultProductObj = vE.settings.productImageArr[data_title];
	          	// defaultProductObj = vE.settings.productImageArr[data_title];
	          	// $(el).find('#pcws-right-top-product-image').children('img').attr('src',vE.settings.productImageArr[data_title].src);
	          	// setTimeout(function(){ 
	           	//  	canvas.renderAll(); 
	           	//		virtryLoading(0);
	          	// },500);
	      	}
	    }

	    var updateUserImage = function(imagename){
	    	if(DEBUG_MODE)
	    		console.log('updateUserImage '+imagename);

	      	var usertempimage = vE.settings.userimagetemppath+imagename; // server_path+'storage/temp_storage/'+imagename;
	      	// OLD CODE TO UPDATE THE USER IMAGE 
	      	// var userIndex = canvas.getObjects().indexOf(objectArr.user);
	      	// canvas._objects[userIndex]._element.src = usertempimage; 
	      	// canvas._objects[userIndex]._originalElement.src = usertempimage;

	      	var tmpimg = new Image();
	      	tmpimg.src = vE.settings.userimagetemppath+imagename; //server_path+'storage/temp_storage/'+imagename;
	      	$(el).find('#pcws-dropzone-main-div').hide();
	      	virtryLoading(1);

	      	tmpimg.onload = function(){
	      		// NEW CODE TO UPDATE THE USER IMAGE 
	      		canvas.remove(findObject(objectArr.user));
	      		fabric.Image.fromURL(tmpimg.src, function(img) {
	      			var imgsize = resizePcwsInnerCanvas(img.width,img.height);
	      			//.scale(0.9); left: 150, top: 100, width: 400, height: 400, hasControls:false
			      	var oImg = img.set({ left: 0, top: 0, width: imgsize.width, height: imgsize.height, angle: 0, crossOrigin: "Anonymous", hasRotatingPoint:false, lockMovementX:true, lockMovementY:true }); 
			      	oImg.crossOrigin = "Anonymous";
			      	objectArr.user = oImg;
			      	canvas.add(oImg).renderAll();
			      	// canvas.centerObject(oImg);
			      	// canvas.sendBackwards(oImg);
			      	canvas.sendToBack(oImg);
			      	canvas.renderAll();
			      	virtryLoading(0);
			      	$(el).find('#pcws-right-user-image').children('img').attr('src',tmpimg.src);
			    },{id: userImageId,crossOrigin: 'Anonymous'});

	      		// OLD CODE TO UPDATE THE USER IMAGE 
	        	/*var newimageheight = tmpimg.height;
	        	var newimagewidth = tmpimg.width;
	        	if(newimagewidth > canvas.getWidth()){
	          		newimageheight = parseInt(tmpimg.height / tmpimg.width * canvas.getWidth()); 
	          		newimagewidth = canvas.getWidth();
	        	}

	        	if(newimageheight > canvas.getHeight()){
	          		newimagewidth =  parseInt(newimagewidth / newimageheight * canvas.getHeight());
	          		newimageheight = canvas.getHeight(); 
	        	}
	        
	        	canvas._objects[userIndex].set({ left: parseInt((canvas.getWidth() - newimagewidth)/2), top: parseInt((canvas.getHeight() - newimageheight)/2), width: newimagewidth, height: newimageheight, angle: 0 }).scale(0.9);
	        	vE.settings.userImageArr.src = usertempimage;
	        	setTimeout(function(){ 
	          		canvas.renderAll(); 
	          		virtryLoading(0);
	          		$(el).find('#pcws-right-user-image').children('img').attr('src',vE.settings.userImageArr.src);
	        	},500);*/
	      	}
	    }

	    var findObjectType = function(obj){
	      	var is_select ='';
	      	if(obj===objectArr.user){
	        	is_select = 'user'; 
	      	}else if(obj===objectArr.product){
	        	is_select = 'product'; 
	      	}else if(obj===objectArr.finalimage){
	        	is_select = 'finalimage'; 
	      	}
	      	return is_select; 
	    }

	    var addLastFilter = function(obj){
	    	if(DEBUG_MODE)
	    		console.log('addLastFilter');
	      	// var obj = canvas.getActiveObject(); 
	      	if(obj && obj.filters && typeof(obj.filters) != "undefined" && obj.filters !== null && obj.filters.length > 0){

		       	var filterValueBeforeChange = {'brightness':0,'contrast':0,'color_effect':1};
		       	var is_select = findObjectType(obj);

		      	if(is_select!=''){
	      			// BRIGHTNESS
	      			if(typeof(obj.filters[0]) != "undefined" && obj.filters[0] !== null && obj.filters[0].brightness != "undefined"){
	      				filterValueBeforeChange['brightness'] = obj.filters[0].brightness;
	      			}
	      			// CONTRAST
	      			if(typeof(obj.filters[1]) != "undefined" && obj.filters[1] !== null && obj.filters[1].contrast != "undefined"){
	              		filterValueBeforeChange['contrast'] = obj.filters[1].contrast;
	            	}
	            	// COLOR EFFECT
	      			if(typeof(obj.filters[2]) != "undefined" && obj.filters[2] !== null && obj.filters[2].custom != "undefined"){
	              		var filterType = obj.filters[2].custom;
						var tempval=1;
	              		if(filterType == 'original'){
	                		tempval = 1;
	              		}else if(filterType == 'grayscale'){
	                		tempval = 2;
	              		} else if(filterType == 'sepia'){
	                		tempval = 3;
	              		} else if(filterType == 'vivid'){
	                		tempval = 4;
	              		} else if(filterType == 'lucky'){
	                		tempval = 5;
	              		} else if(filterType == 'laguna'){
	                		tempval = 6;
	              		} else if(filterType == 'marie'){
	                		tempval = 7;
	              		} else if(filterType == 'cruz'){
	                		tempval = 8;
	              		} else if(filterType == 'softfocus'){
	                		tempval = 9;
	              		} else if(filterType == 'boardwalk'){
	                		tempval = 10;
	              		}
	              		filterValueBeforeChange['color_effect'] = tempval;
	            	}

			      	if(obj===objectArr.user){
			          	objectPropertyArr.user = filterValueBeforeChange;
			        }else if(obj===objectArr.product){
			          	objectPropertyArr.product = filterValueBeforeChange;
			        }else if(obj===objectArr.finalimage){
			          	objectPropertyArr.finalimage = filterValueBeforeChange;
			        }
		    	}
	      	} 
	    }

	    var removeLastFilter = function(obj){
	    	if(DEBUG_MODE)
	    		console.log('removeLastFilter '+obj);

	      	var is_select = findObjectType(obj);
	      	if(is_select!=''){
				
				// 6 COLOR EFFECT, 7 BRIGHTNESS, 8 FOR CONTRAST
				switch(LAST_OPERATION){
		      		case 6:
		      			// COLOR EFFECT
		      			var val = objectPropertyArr[is_select].color_effect;
		      			// console.log('removeLastFilter '+val);
		      			if(typeof(obj.filters[2]) != "undefined" && obj.filters[2] !== null && obj.filters[2] !== false && val){
		              		obj.filters[2] = true;
		              		var filtername = '';
		              		if(val == 1){
		                		filtername = 'original';
		              		} else if(val == 2){
		                		filtername = 'grayscale';
		              		} else if(val == 3){
		                		filtername = 'sepia';
		              		} else if(val == 4){
		                		filtername = 'vivid';
		              		} else if(val == 5){
		                		filtername = 'lucky';
		              		} else if(val == 6){
		                		filtername = 'laguna';
		              		} else if(val == 7){
		                		filtername = 'marie';
		              		} else if(val == 8){
		                		filtername = 'cruz';
		              		} else if(val == 9){
		                		filtername = 'softfocus';
		              		} else if(val == 10){
		                		filtername = 'boardwalk';
		              		}
		              		if(filtername!=''){
		                		applyFilter(obj,2, true && new f.Custom({
		                    		filtername: filtername
		                		}));
		              		}
		            	}
		      		break;
		      		case 7:
		      			// BRIGHTNESS
		      			if(typeof(obj.filters[0]) != "undefined" && obj.filters[0] !== null){
		              		obj.filters[0] = true;
		              		applyFilter(obj,0, true && new f.Brightness({
		                  		brightness: parseInt(objectPropertyArr[is_select].brightness,10)
		              		}));
		              		$(el).find('#pcws-brightness-value').val(objectPropertyArr[is_select].brightness);
		            	}
		      		break;
		      		case 8:
		      			// CONTRAST
		      			if(typeof(obj.filters[1]) != "undefined" && obj.filters[1] !== null){
		              		obj.filters[1] = true;
		              		applyFilter(obj,1, true && new f.Contrast({
		                  		contrast: parseInt(objectPropertyArr[is_select].contrast,10)
		              		}));
		              		$(el).find('#pcws-contrast-value').val(objectPropertyArr[is_select].contrast);
		            	}
		      		break;
		      	}
	      	}
	    }

	    var applyFilter = function(obj,index,filter) {
	      	obj.filters[index] = filter;
	      	obj.applyFilters(canvas.renderAll.bind(canvas));
	    }

	    var applyFilterValue = function(index, prop, value) {
	      	var obj = canvas.getActiveObject();
	      	if (obj.filters[index]) {
	        	obj.filters[index][prop] = value;
	        	obj.applyFilters(canvas.renderAll.bind(canvas));
	      	}
	    }

	    var setActiveProp = function(name, value) {
	      	var obj = canvas.getActiveObject(); 
	      	if (!obj) return; 
	      	obj.set(name, value).setCoords();
	      	canvas.renderAll();
	    }

	    var setActiveStyle = function(styleName, value, object) {
	      	object = object || canvas.getActiveObject();
	      	if (!object) return;
	  
	      	if (object.setSelectionStyles && object.isEditing) {
	        	var style = { };
	        	style[styleName] = value;
	        	object.setSelectionStyles(style);
	        	object.setCoords();
	      	}else {
	        	object[styleName] = value;
	      	}
	      	object.setCoords();
	      	canvas.renderAll();
	      	canvas.setActiveObject(object);
	    }

	    var getActiveStyle = function(styleName, object) {
	      	object = object || canvas.getActiveObject();
	      	if (!object) return '';
	      	return (object.getSelectionStyles && object.isEditing)? (object.getSelectionStyles()[styleName] || '') : (object[styleName] || '');
	    }

	    var isUnderline = function(){
	      	return getActiveStyle('textDecoration').indexOf('underline') > -1;
	    }

	    var isLinethrough = function() {
	      	return getActiveStyle('textDecoration').indexOf('line-through') > -1;
	    }

	    var isOverline = function() {
	      	return getActiveStyle('textDecoration').indexOf('overline') > -1;
	    }

	    var addTexts = function(){
	      	txtStickerInc+=1;
	      	var iText = new fabric.IText('New Text', {
	          	left: (txtStickerInc*10),
	          	top: (txtStickerInc*10),
	          	fontFamily: 'Helvetica',
	          	fill: '#333',
	          	fontWeight:'',
	          	id:'text_id_'+txtStickerInc
	      	});
	      	textObject.push(iText);
	      	textObjectLenght.push(canvas.getObjects().length);
	      	canvas.add(iText);
	      	canvas.setActiveObject(iText);
	      	canvas.bringToFront(iText);
	    }

	    var pcwsDraw = function() { 
	      	var a = pcwsGetIsAddanotherTypeObject('draw');
	      	if(!a){
	        	canvas.discardActiveObject();
	        	pcwsSetallcheckboxuncheck();
	        	drawDivInput =true;
	        	canvas.isDrawingMode = drawDivInput;
	        	canvas.freeDrawingBrush._reset();
	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-drawing-line-width').removeAttribute("disabled");
	        	$(el).find('#pcws-drawing-line-width').removeAttr('disabled');
	        	$(el).find('.pcws-bottom-canvas').show();
	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-draw-control-div').style.display = 'block';
	        	$(el).find('#pcws-draw-control-div').css('display','block');
	        	selectLeftNav('draw');
	      	} else {
	        	clickLeftNavType = 'pcws-draw-Li';
	        	$(el).find('#pcws-cancel-btn').click();
	      	}
	    }

	    var pcwsErase = function() { 
	      	var a = pcwsGetIsAddanotherTypeObject('erase');
	      	if(!a){
	        	/*canvas.discardActiveObject();
	        	pcwsSetallcheckboxuncheck();
	        	drawDivInput =true;
	        	canvas.isDrawingMode = drawDivInput;
	        	canvas.freeDrawingBrush._reset();*/

	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-drawing-line-width').removeAttribute("disabled");
	        	$(el).find('#pcws-erase-line-width').removeAttr('disabled');
	        	$(el).find('.pcws-bottom-canvas').show();
	        	// TODO: REMOVE UNECESSARY CODE
	        	// $(el).find('#pcws-draw-control-div').style.display = 'block';
	        	$(el).find('#pcws-erase-control-div').css('display','block');
	        	selectLeftNav('erase');
	        	createEraser();
	      	} else {
	        	clickLeftNavType = 'pcws-erase-Li';
	        	$(el).find('#pcws-cancel-btn').click();
	      	}
	    }

	    var pcwsGetIsAddanotherTypeObject = function(types){ 
	      	var returnvar =0; 
	      	if($(el).find('#pcws-brightness').checked && types!='brightness'){
	        	returnvar =1;
	      	}
	      	if($(el).find('#pcws-contrast').checked && types!='contrast'){
	        	returnvar =1;
	      	}
	      	if($(el).find('#pcws-frame').checked && frameObject.length >0 && types!='frame'){
	        	returnvar =1;
	      	} 
	      	if($(el).find('#pcws-sticker').checked && stickerObject.length >0 && types!='sticker'){
	        	returnvar =1;
	      	} 
	      	if(canvas.isDrawingMode && drawObjects.length >0 && types!='draw'){ 
	        	returnvar =1;
	      	}
	      	// if(eraser_canvas.isDrawingMode && types!='erase' && ){ 
	       	//  	returnvar =1;
	      	// }
	      	if(textObject.length > 0 && types!='text'){
	        	returnvar =1;
	      	} 
	      	// TODO: remove unwanted code
	      	// brighisChangeNavigation = returnvar;
	      	return returnvar;
	    }

	    var pcwsReturnPreviousNav = function(){
	      	if($(el).find('#pcws-frame').checked && frameObject.length >0){ 
	        	$(el).find('#pcws-frame-Li').click();
	      	} 
	      	if($(el).find('#pcws-sticker').checked && stickerObject.length >0){ 
	        	$(el).find('#pcws-sticker-Li').click(); 
	      	}
	      	if(canvas.isDrawingMode && drawObjects.length >0){ 
	        	$(el).find('#pcws-draw-Li').click();
	      	}
	      	if(textObject.length >0){ 
	        	$(el).find('#pcws-text-Li').click();
	      	} 
	    }

	    // this var is used to uncheck the all checked checkbox
	    var pcwsSetallcheckboxuncheck = function(){
	      	fabric.util.toArray(firstControls.getElementsByTagName('input')).forEach(function(el){ el.checked = false; });
	      	$(el).find('.pcws-bottom-option').hide();
	    }

	    var removeSizeGridZone = function(){
	      	sizeGridAvailable = 0; sizeGridVisible = 0;
	      	canvas.remove(sizeGridZone);
	      	$(el).find('.pcws-size-grid-control-div').hide();
	    }

	    var removeCropZone = function(){
	    	var tmpObj = findObject(objectArr.finalimage);
	     	if(tmpObj){
	     		tmpObj.selectable = true;
	     	}
	     	canvas.remove(cropZone);
	      	$(el).find('#pcws-crop-grid-control-div').hide();
	    }

	    var pcwsColorEffect = function(color_effect_id){ 
	      	/*if(lastColorEffectSelect){
	        	if(lastColorEffectSelect>=1 && lastColorEffectSelect<=10){
	          		applyFilter(canvas.getActiveObject(),2, false && new f.Custom({ filtername: filterValueIndex[lastColorEffectSelect-1] }));
	        	}
	      	}*/

	      	var checkedValue = false;
	      	if(color_effect_id === 'original'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'original'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =1;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	}else if(color_effect_id === 'grayscale'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'grayscale'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =2;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'sepia'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'sepia'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =3;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'vivid'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'vivid'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =4;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'marie'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'marie'){
		            checkedValue=true; 
	        	}
	        	lastColorEffectSelect =5;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'lucky'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'lucky'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =6;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'laguna'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'laguna'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =7;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'cruz'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'cruz'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =8;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'softfocus'){
		        if(filterValueIndex[lastColorEffectSelect-1] !== 'softfocus'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =9;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	} else if(color_effect_id === 'boardwalk'){
	        	if(filterValueIndex[lastColorEffectSelect-1] !== 'boardwalk'){
	            	checkedValue=true; 
	        	}
	        	lastColorEffectSelect =10;
	        	applyFilter(canvas.getActiveObject(),2, true && new f.Custom({ filtername: color_effect_id }));
	      	}
	    }

	    var setProductSizeRatio = function(){
	      	pcwsProductSizeRatio.height = (objectArr.product.getHeight() / defaultProductObj.sg_height).toFixed(2);
	      	pcwsProductSizeRatio.width = (objectArr.product.getWidth() / defaultProductObj.sg_width).toFixed(2);

	      	//$(el).find('#pcws-product-image-size').innerHTML = parseInt(objectArr.product.getWidth() / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']]+' X '+parseInt(objectArr.product.getHeight() / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']];
	    }

	    var selectLeftNav = function(leftNav){
	      	$(el).find('ul li').removeClass('active'); 
	      	$(el).find('#pcws-'+leftNav+'-Li').addClass('active');
	    }

	    var renderSizeGridZone = function(fromX, fromY, toX, toY) {
	      	var isRight = toX > fromX,
	      	isLeft = !isRight,
	      	isDown = toY > fromY,
	      	isUp = !isDown,
	      	productWidth = objectArr.product.getWidth(),
	      	productHeight = objectArr.product.getHeight(),
	      	productRatio = productWidth/ productHeight,

	      	minWidth = Math.min(productWidth, canvas.getWidth()), 
	      	minHeight = Math.min(productHeight, canvas.getHeight()),
	      	leftX = Math.min(fromX, toX),
	      	rightX = Math.max(fromX, toX),
	      	topY = Math.min(fromY, toY),
	      	bottomY = Math.max(fromY, toY);
	      	leftX = Math.max(0, leftX), rightX = Math.min(canvas.getWidth(), rightX), 
	      	topY = Math.max(0, topY), 
	      	bottomY = Math.min(canvas.getHeight(), bottomY), 
	      	minWidth > rightX - leftX && (isRight ? rightX = leftX + minWidth : leftX = rightX - minWidth), 
	      	minHeight > bottomY - topY && (isDown ? bottomY = topY + minHeight : topY = bottomY - minHeight), 0 > leftX && (rightX += Math.abs(leftX), leftX = 0), 
	      	rightX > canvas.getWidth() && (leftX -= rightX - canvas.getWidth(), rightX = canvas.getWidth()), 0 > topY && (bottomY += Math.abs(topY), topY = 0), 
	      	bottomY > canvas.getHeight() && (topY -= bottomY - canvas.getHeight(), bottomY = canvas.getHeight());
	      
	      	var width = rightX - leftX,
	        	height = bottomY - topY,
	          	currentRatio = width / height;
	      	if (productRatio !== currentRatio) {
	        	var ratio = +productRatio;
	        	if (this.isKeyCroping && (isLeft = isKeyLeft, isUp = isKeyUp), ratio > currentRatio) {
	          		var newWidth = height * ratio;
	          		isLeft && (leftX -= newWidth - width), width = newWidth
	        	} else if (currentRatio > ratio) {
	          		var newHeight = height / (ratio * height / width);
	          		isUp && (topY -= newHeight - height), height = newHeight
	        	}
	        	if (0 > leftX && (leftX = 0), 0 > topY && (topY = 0), leftX + width > canvas.getWidth()) {
	          		var newWidth = canvas.getWidth() - leftX;
	          		height = newWidth * height / width, width = newWidth, isUp && (topY = fromY - height)
	        	}
	        	if (topY + height > canvas.getHeight()) {
	          		var newHeight = canvas.getHeight() - topY;
	          		width = width * newHeight / height, height = newHeight, isLeft && (leftX = fromX - width)
	        	}
	      	}
	      
	      	sizeGridZone.id ='sizegridzone',
	      	// TODO: remove unwanted code
	      	// sizeGridZone.left = leftX-5,
	      	// sizeGridZone.top = topY-10,
	      	// sizeGridZone.width = width+50,
	      	// sizeGridZone.height = height+50;
	      	resetSizeGridSize(width,height,leftX,topY);

	      	sizeGridZone.scaleX = 0.9;
	      	sizeGridZone.padding = 0;
	      	sizeGridZone.scaleY = 0.9;
	      	sizeGridZone.lockRotation = false;
	      	sizeGridZone.hasRotatingPoint =false;
	      	sizeGridZone.selectable = false;

	      	canvas.add(sizeGridZone);
	      	// console.log(findIndexOfObject(objectArr.product),getCurrentIndex(objectArr.product));

	      	// sizeGridZone.moveTo((findIndexOfObject(objectArr.product)-1)); 
	      	// TODO: remove unwanted code
	      	// setTimeout(function(){
	      	//   findObject(sizeGridZone).setWidth(canvas.getActiveObject().getWidth());
	      	//   findObject(sizeGridZone).setHeight(canvas.getActiveObject().getHeight());
	      	// },100)
	      	//$(el).find('#pcws-product-image-size').innerHTML = parseInt(productWidth / pcwsProductSizeRatio.width)+vE.settings.lengthUnit[defaultProductObj['length-unit']]+' X '+parseInt(productHeight / pcwsProductSizeRatio.height)+vE.settings.lengthUnit[defaultProductObj['length-unit']];
	      	//$(el).find('.pcws-bottom-canvas').hide();
	      	//$(el).find('.pcws-size-grid-control-div').show();
	      	sizeGridAvailable=1;
	      	sizeGridVisible = 1;
	      	sizeGridZone.setCoords(),canvas.calcOffset();
	      	var finalindex = (findIndexOfObject(objectArr.product)==1)? findIndexOfObject(objectArr.product) : (findIndexOfObject(objectArr.product)-1)
	      	canvas.moveTo(sizeGridZone,finalindex);

	      	// TODO: remove unwanted code
	      	// var object = findObject(objectArr.product);
	      	// console.log('productWidth '+productWidth+' productHeight '+productHeight+' width '+width+' height '+height+' object.getTop() '+object.getTop()+' sizeGridZone.getTop() '+sizeGridZone.getTop());
	      	// console.log(' object.getTop() '+object.getTop()+' sizeGridZone.getTop() '+(sizeGridZone.getTop()-15)+' object.getLeft() '+object.getLeft()+' sizeGridZone.getLeft() '+(sizeGridZone.getLeft()-15));
	      	// canvas.setActiveObject(sizeGridZone);
	      	// sizeGridPosition['grid-top'] = object.getTop() - sizeGridZone.getTop()-30;
	      	// sizeGridPosition['grid-left'] = object.getLeft() - sizeGridZone.getLeft()+30;
	      	// sizeGridPosition['grid-top'] = object.getTop() - 5;
	      	// sizeGridPosition['grid-left'] = object.getLeft() - 10;
	    }

	    var resetSizeGridSize = function(width,height,leftX,topY) {
	    	// TO SET WIDTH AND HEIGHT
	    	var w_percent = 11.5; // 17.64
	    	width = (width >0)? (width + (width*w_percent)/100) : 0;
	     	height = (height >0)? (height + (height*w_percent)/100): 0;

		    sizeGridZone.setWidth(width);
		    sizeGridZone.setHeight(height);

		    // TO SET LEFT AND TOP	      	
	      	// leftX = (leftX>0)? (leftX - (leftX*3)/100): 0;
	      	// topY = (topY>0)? (topY - (topY*3)/100): 0;
	      	sizeGridZone.setLeft(leftX);
		    sizeGridZone.setTop(topY);
	    };

	    var mergeAllLayer = function(isSelectable){
	    	isSelectable = (!isSelectable)? isSelectable : true;
	      	if(isAllLayerMerged){ 
	      		canvas.discardActiveObject();
	      		if(!isSelectable){
	      			var tmpObj = findObject(objectArr.finalimage);
			     	if(tmpObj){
			     		tmpObj.selectable = false;
			     	}
	      		}
	      		return true;
	      	}
	      	
	      	var objects = canvas.getObjects();
	      	var tempObjectArr =[];
	      	// if(canvas.getObjects().length && canvas._objects[1].id && (canvas._objects[1].id ===imageFrameId)){
	       //  	canvas._objects[1].bringToFront();
	      	// }
	      	while(objects.length){
	        	var shiftObj = objects.shift();
	        	if(shiftObj===sizeGridZone){
	          		removeSizeGridZone();
        		} else if(shiftObj===cropZone){
	          		removeCropZone();
	        	} else {
	          		tempObjectArr.push(shiftObj);
	        	}
	      	}
	      	canvas.discardActiveObject();
	      	var group = new fabric.Group(tempObjectArr, {
	          	// left: 0,
	          	// top: 0,
	          	// right: 0,
	          	// bottom: 0
	      	});
	      	canvas.add(group);
	      	fabric.Image.fromURL(canvas.toDataURL('image/png'), function(img) {
	        	var oImg = img.set({ angle: 0, crossOrigin: "Anonymous", hasRotatingPoint:false, lockMovementX:true, lockMovementY:true });
	        	oImg.crossOrigin = "Anonymous";
	        	objectArr.finalimage = oImg;
	        	canvas.add(oImg).renderAll();
	        	canvas.sendToBack(oImg);
	        	oImg.selectable = isSelectable;
	      	},{id: finalImageId});
	      	removeFrame();
	      	canvas.remove(group);
	      	isAllLayerMerged = true;
	    }

	    var showDescriptionDialog = function(){
	    	var frmw  = $(el).find('#pcws-description-form').width();
	    	var w  = $(window).width();
	    	var leftpos = (w/2) - (frmw/2);
	    	$(el).find('#pcws-description-form').css('left',leftpos+'px');
	    	$(el).find('#pcws-description-form').css('top','25%');

	    	$(el).find('#pcws-mask').show();
	    	$(el).find('#pcws-description-form').show();
	    }

	    /**
         * ===================================================================================
         * = FUNCTION REGARDING ERASER
         * ===================================================================================
         */
	    var loadPattern = function(l,t,w,h,a,imagedata) {
	    	fabric.Image.fromURL(imagedata, function(img) {
	    		// ,hasControls: true, hasRotatingPoint:true
	        	EraseImage = img.set({ left: l, top: t, width: w, height: h, angle: a, crossOrigin: "Anonymous" });
	        	EraseImage.crossOrigin = "Anonymous";
				eraser_canvas.add(EraseImage);
		    	eraser_canvas.renderAll();
	      	},{crossOrigin: 'Anonymous'});
		}
		var loadUpdatedPattern = function(){
			// $(el).find("#"+vE.settings.eraser_image).show();
			var EraseHtmlImage = new Image();
		    EraseHtmlImage.onload = function() {
		    	// EraseImage = img.set({ angle: 0});
		    	// console.log(EraseHtmlImage);
		    	EraseImage.setElement(EraseHtmlImage);
		    	EraseImage.set('angle',0);
		    	EraseImage.set('left',0);
		    	EraseImage.set('top',0);
		    	// eraser_canvas.setActiveObject(EraseImage)
		    	eraser_canvas.renderAll();
		    	// TESTING CODE
		    	// window.open(EraseImage.toDataURL());
		    	// var cropl = (EraseImgBoundingData.imgw - EraseImgBoundingData.w)/2;
				// var cropt = (EraseImgBoundingData.imgh - EraseImgBoundingData.h)/2;
				// eraser_canvas.freeDrawingBrush.saveImageWithoutEmptySpace(cropl,cropt,EraseImgBoundingData.w,EraseImgBoundingData.h);
		    }
		    EraseHtmlImage.src = document.getElementById(vE.settings.eraser_image).src;
		    // document.getElementById('tmpImage1').src = document.getElementById(vE.settings.eraser_image).src;
		}
		var commitEraserChanges = function(){
			// EraseImage.set({'angle':-EraseImgBoundingData.a});
			if(eraser_canvas.freeDrawingBrush.isEraserApplied()){
				$(el).find("#eraser_canvas_container").hide();
				EraseImage.set('angle',-EraseImgBoundingData.a);
				eraser_canvas.renderAll();
				// document.getElementById('tmpImage2').src = EraseImage.toDataURL();
				// document.getElementById(vE.settings.eraser_image).src = document.getElementById('tmpImage2').src;
				document.getElementById(vE.settings.eraser_image).src = EraseImage.toDataURL();

				loadUpdatedPattern();
				eraser_canvas.renderAll();

				setTimeout(function(){
					var tmpt = Math.round((eraser_canvas.height - EraseImgBoundingData.h)/2);
					var tmpl = Math.round((eraser_canvas.width - EraseImgBoundingData.w)/2);
					
					// document.getElementById(vE.settings.eraser_image).src = document.getElementById('tmpImage1').src = eraser_canvas.toDataURL(sizejson);
					document.getElementById(vE.settings.eraser_image).src = eraser_canvas.toDataURL({left: tmpl, top: tmpt, width: Math.round(EraseImgBoundingData.w), height: Math.round(EraseImgBoundingData.h)});

					updateMainCanvasImage(EraseImgBoundingData.l,EraseImgBoundingData.t,EraseImgBoundingData.a);
					removeEraser();
				},100);
			}else{
				removeEraser();
			}
			// OLD CODE FOR COMMITING CHANGES
			// var cropl = (EraseImgBoundingData.imgw - EraseImgBoundingData.w)/2;
			// var cropt = (EraseImgBoundingData.imgh - EraseImgBoundingData.h)/2;
			
			// SET ONLY THE IMAGE AREA EXCLUDE THE EMPTY OR EXTRA SPACE CREATED BY ROTATION
			// eraser_canvas.freeDrawingBrush.saveImageWithoutEmptySpace(cropl,cropt,EraseImgBoundingData.w,EraseImgBoundingData.h);
			
			// REST CANVAS SIZE AFTER REDUCING THE EXTRA SPACE
			// eraser_canvas.setWidth(EraseImgBoundingData.w+EraseImgBoundingData.sX);
			// eraser_canvas.setHeight(EraseImgBoundingData.h+EraseImgBoundingData.sY);
			
			// AGAIN LOAD OPTIMIZED IMAGE (EXCLUDED EXTRA SPACE) INTO CANVAS IMAGE OBJECT
			// loadUpdatedPattern();
		  	// updateMainCanvasImage(EraseImgBoundingData.imgRl-EraseImgBoundingData.sX+(cropl),EraseImgBoundingData.imgRt-EraseImgBoundingData.sY+(cropt));
		  	// removeEraser();
		}
		var updateMainCanvasImage = function(l,t,a){
		  	var image = new Image();
		    image.onload = function() {
	            canvas.remove(findObject(objectArr.product));
	            fabric.Image.fromURL(image.src, function(img) {
			      	var oImg = img.set({left: l, top: t,width: EraseImgBoundingData.w, height: EraseImgBoundingData.h, angle: a, crossOrigin: "Anonymous" }); //.scale(0.9); // width: 370, height: 300,
			      	// var oImg = img.set({ crossOrigin: "Anonymous" }); //.scale(0.9); // width: 370, height: 300,
			      	oImg.crossOrigin = "Anonymous"; 
			      	objectArr.product = oImg;
			      	canvas.add(oImg).renderAll();
			      	// canvas.setActiveObject(oImg);
			    },{id: productImageId,crossOrigin: 'Anonymous'});
		    }
		    image.src = document.getElementById(vE.settings.eraser_image).src;
		}
		var createEraser = function(){
			var cImage = CURRENT_SELECTED_OBJECT; // canvas.getActiveObject();
			if(cImage){
			  	var l = cImage.getLeft(),t = cImage.getTop(),w = cImage.getWidth(),h = cImage.getHeight(),a = cImage.getAngle(),sX = cImage.getScaleX(),sY = cImage.getScaleY();
			  	var imagedata = cImage.getSrc();
			  	var bounds = cImage.getBoundingRect();
			  	
			  	EraseImgBoundingData = {cw:(w+sX),ch:(h+sY),w:w,h:h,l:l,t:t,sX:sX,sY:sY,a:a};
			  	EraseImgBoundingData.imga = (a>0)? 0 : a;
			  	// console.log(EraseImgBoundingData);
			  	
			  	// var l = bounds.left,t = bounds.top;
			  	// EraseImgBoundingData.imgRl = bounds.left+5;
			  	// EraseImgBoundingData.imgRt = bounds.top+5;
			  	EraseImgBoundingData.imgRl = bounds.left+sX;
			  	EraseImgBoundingData.imgRt = bounds.top+sY;

			  	var imgl = (EraseImgBoundingData.imgRl>EraseImgBoundingData.l)? EraseImgBoundingData.imgRl-EraseImgBoundingData.l : EraseImgBoundingData.l - EraseImgBoundingData.imgRl;
			  	var imgt = (EraseImgBoundingData.imgRt>EraseImgBoundingData.t)? EraseImgBoundingData.imgRt-EraseImgBoundingData.t : EraseImgBoundingData.t - EraseImgBoundingData.imgRt;

			  	EraseImgBoundingData.imgl = imgl;
			  	EraseImgBoundingData.imgt = imgt;
			  	
			  	EraseImgBoundingData.imgw = bounds.width;
			  	EraseImgBoundingData.imgh = bounds.height;
				// console.log(EraseImgBoundingData);
			  	// canvas.discardActiveObject();
			  	// var imagedata2 = canvas.toDataURL({left: l, top: t, width: w, height: h, crossOrigin: "Anonymous" });
			  	// document.getElementById(vE.settings.eraser_image).src = imagedata2;

			  	// eraser_canvas.setWidth(EraseImgBoundingData.w);
			  	// eraser_canvas.setHeight(EraseImgBoundingData.h);
			  	eraser_canvas.setWidth(EraseImgBoundingData.imgw);
			  	eraser_canvas.setHeight(EraseImgBoundingData.imgh);
			  	eraser_canvas.calcOffset();
			  	// eraser_canvas.backgroundColor = 'red';
			  	
			  	// console.log(EraseImgBoundingData);
			  	// console.log(l+' -- '+t+' -- '+w+' -- '+h+' -- '+a);
			  	
			  	// TO SET THE CURRENT SELECTED IMAGE INTO ERASER CANVAS
			  	// loadPattern(l,t,w,h,a,imagedata);
			  	
			  	// var cropl = (EraseImgBoundingData.imgw - EraseImgBoundingData.w)/2;
				// var cropt = (EraseImgBoundingData.imgh - EraseImgBoundingData.h)/2;
				// var lll = EraseImgBoundingData.imgRl+(cropl);
				// var ttt = EraseImgBoundingData.imgRt+(cropt);
				// loadPattern(lll,ttt,EraseImgBoundingData.w,EraseImgBoundingData.h,a,imagedata);
				
			  	loadPattern(EraseImgBoundingData.imgl,EraseImgBoundingData.imgt,EraseImgBoundingData.w,EraseImgBoundingData.h,EraseImgBoundingData.a,imagedata);

			  	eraser_canvas.freeDrawingBrush = new fabric['VertryEraseBrush'](eraser_canvas);
			  	eraser_canvas.freeDrawingBrush._reset();
			  	eraser_canvas.freeDrawingBrush.radius = parseInt($(el).find('#pcws-erase-line-width').val(), 10) || 10;
			  	eraser_canvas.freeDrawingCursor = 'url('+vE.settings.server_path+vE.settings.assets_path+eraserCursor+') 10 10,crosshair';
			  	// console.log('url('+vE.settings.server_path+vE.settings.assets_path+eraserCursor+'),crosshair');

			  	eraser_canvas.freeDrawingBrush.canvasElemntId = vE.settings.eraser_canvas_id;
			  	eraser_canvas.freeDrawingBrush.eraseImageId = vE.settings.eraser_image;
			  	eraser_canvas.freeDrawingBrush.updateCanvasCallback = loadUpdatedPattern;

			  	eraser_canvas.isDrawingMode = true;
			  	// eraser_canvas.backgroundColor = 'red';

		  		var eraser_canvas_container = $(el).find("#eraser_canvas_container").find('.canvas-container');

		  		// TO KEEP CANVAS INTO MAIN CONTAINER BODY
		  		// top-left  corner
		  		/*if(l < 0){ l = 0; }
		  		if(t < 0){ t = 0; }
		        // bot-right corner
		        if(t+h  > cImage.canvas.height){
		        	t = cImage.canvas.height-h;
		        }
		        if(l+w  > cImage.canvas.width){
					l = cImage.canvas.width-w;
		        }*/
		        
		        // SET THE POSITION AND SIZE OF CANVAS UPPER DIV IN ERASER CONTAINER DIV AREA
		        // eraser_canvas_container.css('width',canvas.width).css('height',canvas.height);
		        var cwidth = (EraseImgBoundingData.imgw>canvas.width)? EraseImgBoundingData.imgw : canvas.width;
		        var cheight = (EraseImgBoundingData.imgh>canvas.height)? EraseImgBoundingData.imgh : canvas.height;
		        eraser_canvas_container.css('width',cwidth).css('height',cheight);
		        var _u_c_canvas_container = $(el).find(".pcws-canvas-upper-div").children(".canvas-container");
		        var bounds = {'left': parseFloat(_u_c_canvas_container.css('margin-left').replace('px','')),'top':parseFloat(_u_c_canvas_container.css('margin-top').replace('px',''))};
		  		eraser_canvas_container.css('left',(EraseImgBoundingData.imgRl+bounds.left)).css('top',(EraseImgBoundingData.imgRt+bounds.top));

			  	showHideEraser(1);
		  	}else{
		  		alert(allMessages['nt-erase-msg']);
			}
		}

		var removeEraser = function(){
			EraseImage.remove();
		  	eraser_canvas.clear();
		  	showHideEraser(0);
		}
		var showHideEraser = function(showhide){
			if(showhide){
				findObject(objectArr.product).setVisible(false);
				canvas.renderAll();

				$(el).find("#eraser_canvas_container").show();
				$(el).find("#eraser_canvas_container").find('.canvas-container').show();
			}else{
				findObject(objectArr.product).setVisible(true);
				canvas.renderAll();
				canvas.setActiveObject(objectArr.product);

				$(el).find("#eraser_canvas_container").hide();
			}
		}
		/**
         * ===================================================================================
         * = FINISHED FUNCTION REGARDING ERASER
         * ===================================================================================
         */
        
        /**
         * ===================================================================================
         * = FUNCTION REGARDING DYNAMIC FRAMES
         * ===================================================================================
         */
        var createFrame = function(frame){
			if(frame){
				removeFrameBorder();
			  	frame_canvas.setWidth(canvas.width);
			  	frame_canvas.setHeight(canvas.height);
			  	frame_canvas.calcOffset();

			  	createFrameBorder(frame);
			  	return frame_canvas.toDataURL('image/png');
		  	}else{
		  		alert(allMessages['nt-erase-msg']);
		  		return false;
			}
		}

		var createFrameBorder = function(frame){
			if(FrameBorderContainer.length >= 0){
			    var borderIndex = findFrameBorderIndex(frame);
			    var canvasW = Math.round(frame_canvas.width);
				var canvasH = Math.round(frame_canvas.height);
				var ctx = frame_canvas.getContext("2d");

			    // TOP LEFT CORNER
			    var tl_img = new Image();
			    tl_img.src = FrameBorderContainer[borderIndex].images.tl.src;

			    var newWidth = Math.round( (tl_img.width/780)*canvasW );
				var newHeight = Math.round( (tl_img.height/600)*canvasH );
				/*var newWidth = (tl_img.width*canvasW)/780;
				var newHeight = (tl_img.height*canvasH)/600;*/

				var topmidw = canvasW-(newWidth*2); // top middle width
			    var topmidh = newHeight; // top middle height

			    var midleftw = newWidth; // middle left width
			    var midlefth = canvasH-(newHeight*2); // middle left height
			    
			    var midrightLeft = Math.round(newWidth+topmidw); // left position of middle left side
			    var bottomTop = Math.round(canvasH - newHeight); // top position for bottom border elements
				var moz_correction = 0;
				// TOP LEFT IMAGE
			    ctx.drawImage(tl_img,0,0,newWidth,newHeight);
			    
			    // console.log(tl_img.width+' -- '+tl_img.height+' -- '+canvasW+' -- '+canvasH+' -- '+topmidw+' -- '+topmidh+' -- '+newWidth+' -- '+newHeight);
			    // console.log(tl_img.width+' -- '+canvasW+' -- '+newWidth+' -- '+topmidw);
			    
			    // TOP CENTER
			    var t_img = new Image();
			    t_img.src = FrameBorderContainer[borderIndex].images.tm.src;
				// TOP CENTER IMAGE
			    ctx.drawImage(t_img,newWidth,0,topmidw,topmidh);
			    
			    // TOP RIGHT CORNER
			    var tr_img = new Image();
			    tr_img.src = FrameBorderContainer[borderIndex].images.tr.src;
				// TOP RIGHT CORNER
				ctx.drawImage(tr_img,midrightLeft,0,newWidth,newHeight);

			    
			    // LEFT SIDE CENTER BORDER
			    var l_img = new Image();
			    l_img.src = FrameBorderContainer[borderIndex].images.ml.src;
			    ctx.drawImage(l_img,0,newHeight,midleftw,midlefth);

			    // RIGHT SIDE CENTER BORDER
			    var r_img = new Image();
			    r_img.src = FrameBorderContainer[borderIndex].images.mr.src;
			    ctx.drawImage(r_img,midrightLeft,newHeight,midleftw,midlefth);

			    
			    // BOTTOM LEFT CORNER
			    var bl_img = new Image();
			    bl_img.src = FrameBorderContainer[borderIndex].images.bl.src;
			    ctx.drawImage(bl_img,0,bottomTop,newWidth,newHeight);

			    // BOTTOM CENTER
			    var bm_img = new Image();
			    bm_img.src = FrameBorderContainer[borderIndex].images.bm.src;
				// BOTTOM CENTER IMAGE
			    ctx.drawImage(bm_img,newWidth,bottomTop,topmidw,topmidh);

			    // BOTTOM RIGHT CORNER
			    var br_img = new Image();
			    br_img.src = FrameBorderContainer[borderIndex].images.br.src;
				// BOTTOM RIGHT CORNER
			    ctx.drawImage(br_img,midrightLeft,bottomTop,newWidth,newHeight);
			}else{
				// TODO: Need to handle frames border script loaded or not
				alert('Frames are not loaded please wait....');
			}
		}

		var removeFrameBorder = function(){
		  	frame_canvas.clear();
		}

		var addWaterMark = function(){
		  	/*var text = "www.VirTry.com";
		  	var fontsetting = {
	          	fontSize: 35,
	          	fontWeight: 'bold',
	          	fontFamily: 'sans-serif',
	          	opacity: 0.15
		  	};
		  	fontsetting.left = canvas.width/2-140;
		  	fontsetting.top = canvas.height/2-30;
		  	fontsetting.fill = 'rgba(0, 0, 0)';

	      	var iText = new fabric.IText(text, fontsetting);
	      	iText.setShadow('2px 2px rgba(255,255,255,0.50)');
	      	canvas.add(iText);
	      	canvas.bringToFront(iText);*/

	      	var tmpimg = new Image();
	      	tmpimg.onload = function(){
	      		var w = canvas.width;
	      		var h = canvas.height;
	      		fabric.Image.fromURL(vE.settings.virTrywaterMark, function(img) {
	      			var imgw = img.width;
	      			if(img.width>w){
	      				imgw = w;
	      			}
	      			// height: img.height,
			      	var oImg = img.set({ left: 0, top: 0, width: imgw,  angle: 0, crossOrigin: "Anonymous", hasRotatingPoint:false, lockMovementX:true, lockMovementY:true }); 
			      	oImg.crossOrigin = "Anonymous";

			      	// TO POSITION WATERMARK IN CENTER
			      	var imgh = oImg.getHeight();
			      	var top = h/2 - (imgh/2);
			      	oImg.set('top',top);
			      	var left = w/2 - (imgw/2);
			      	oImg.set('left',left);

			      	canvas.add(oImg);
			      	canvas.renderAll();
			      	setTimeout(function(){ el.saveFinalImage(1); },150);
			    },{id: 'VirTryWatermark',crossOrigin: 'Anonymous'});
	      	};
	      	tmpimg.src = vE.settings.virTrywaterMark;

			// var ctx = canvas.getContext("2d");
			// ctx.shadowColor = "#ddd";
			// ctx.shadowOffsetX = 1;
			// ctx.shadowOffsetY = 1;

			// ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
			// ctx.font = 'bold 30px sans-serif';
			// ctx.fillText(text, canvas.width-(text.length*18),canvas.height-30);
			// ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
			// ctx.fillText(text, canvas.width-(text.length*18)-2,canvas.height-32);
		}

        /**
         * ===================================================================================
         * = FINISHED FUNCTION REGARDING DYNAMIC FRAMES
         * ===================================================================================
         */

        /**
         * ===================================================================================
         * = FINISHED FUNCTIONAL PRIVATE FUNCTIONS
         * ===================================================================================
         */


        /**
         * ===================================================================================
         * = PUBLIC FUNCTIONS
         * ===================================================================================
         */

        /**
         * = To save the final images
         */
        el.saveFinalImage = function(checksubsription){
        	// addWaterMark(); virtryLoading(0); return false;
        	checksubsription = (checksubsription)? 0 : 1;
        	$(el).find('#pcws-mask').hide();
	    	$(el).find('#pcws-description-form').hide();

            canvas.discardActiveObject();
        	var objects = canvas.getObjects();
        	if(canvas._objects[0].id && (canvas._objects[0].id === imageFrameId)){
          		canvas._objects[0].bringToFront();
        	}
        	var dataURL = canvas.toDataURL('image/png');
        	document.getElementById('pcws_image_name').value = dataURL;
        	// document.forms["pcws-image-form"].submit();
        	
        	dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        	var formAction = vE.settings.productimagepath;
        	if(vE.settings.savedImage.serverType && vE.settings.savedImage.serverLocation!=''){
          		formAction = vE.settings.savedImage.serverLocation;
        	}

        	if($.isFunction(vE.settings.beforeSaveImage) )
         		vE.settings.beforeSaveImage();
         	
        	virtryLoading(1);

        	jQuery.ajax({
          		type: 'POST',
          		url: formAction,
          		data: { "imageData" : dataURL, "pro_id":vE.settings.productImageArr[0].pro_id, 'desc':messageWithImage, 'wt': checksubsription},
          		dataType: 'json',
          		//crossDomain: true,
          		//contentType:"application/json",
          		error: function (error) { 
            		virtryLoading(0);
            		if($.isFunction(vE.settings.onErrorInSaveImage))
            			vE.settings.onErrorInSaveImage(error);
          		},
          		success: function (returnval) {
            		if(returnval.error==0){ 
            			virtryLoading(0);
            			messageWithImage = '';
            			if($.isFunction(vE.settings.afterSaveImage))
            				vE.settings.afterSaveImage(returnval);
            			window.location = vE.settings.redirectPath;
            		}else{
            			if(returnval.error_code==101){
            				virtryLoading(0);
            				if($.isFunction(vE.settings.onErrorLogin))
            					vE.settings.onErrorLogin(returnval);
            			}else if(returnval.error_code==106){
            				addWaterMark();
            			}else{
            				virtryLoading(0);
            				messageWithImage = '';
            				if($.isFunction(vE.settings.afterSaveImage))
            					vE.settings.afterSaveImage(returnval);
            				alert(returnval.msg); 
            			}
            		}
          		}
        	});
        }
        init();
        // returns the current jQuery object
        return this;
    }
})(jQuery);