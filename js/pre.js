// this is packages that will emmit to compilled code

var tess = Module["tess"] = {    
    __tessWasInited: false,
    __lastContours:  []
};

tess.bufferView = function (ptr, size, typeCtrl) {
    if (!size || size < 0) throw 'Size should be a greater 0';
    if (!ptr) throw 'Invalid pointer!';

    typeCtrl = typeCtrl || Uint8Array;

    var view = new typeCtrl(Module.HEAP8.buffer, ptr, size);
    view.ptr = ptr;
    view.free = function() {
        Module._free(ptr);
    };
    return view;
}.bind(tess);

tess.bufferMalloc = function (size, typeCtrl) {        
    var ptr = Module._malloc(size * typeCtrl.BYTES_PER_ELEMENT);
    
    if(!ptr) throw 'Can\'t allocate a ' + size;
    
    return this.bufferView(ptr, size, typeCtrl);
}.bind(tess);


tess.dispose = function() {
    if (this.__tessWasInited) {
        return;
    }

    this.__lastContours.forEach((e) => e.free && e.free());
    this.__lastContours = [];
    this.__tessWasInited = false;
    Module.deleteTesselator();
}.bind(tess);

tess.init = function() {
    this.__tessWasInited =  Module.initTesselator();
    return this.__tessWasInited;
}.bind(tess);

tess.addContour = function(contours) {
    if (!Module.__tessWasInited && ! this.init()) {
        throw 'Tessealtor wasn\'t be inited!';
    }

    var cBuff = this.__lastContours = [];
    var malloc = this.bufferMalloc;

    if (typeof contours[0] === 'number') contours = [contours];

    for (var i = 0; i < contours.length; i ++) {
        var data = contours[i];
        var buff = malloc(data.length, Float32Array);

        buff.set(data, 0);
        cBuff.push(buff);
        Module.addContour(buff.ptr, data.length / 2);
    }
}.bind(tess);

tess.tesselate = function () {
    if (this.__lastContours.length === 0)
        throw 'Сontours data is required!';

    var result = Module.runTesselator();

    if (result.elementsCount === 0) {
        return null;
    }

    var bv = this.bufferView;
    Object.assign(result, {
        vertices: bv(result.vertexPtr, result.vertexCount * 2, Float32Array),
        elements: bv(result.elementsPtr, result.elementsCount * 3, Uint32Array)
    })

    return result;
}.bind(tess);
