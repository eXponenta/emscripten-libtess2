// this is packages that will emmit to compilled code
var M = Module;

function _bufferView (ptr, size, typeCtrl) {
    if (!size || size < 0) throw 'Size should be a greater 0';
    if (!ptr) throw 'Invalid pointer!';

    typeCtrl = typeCtrl || Uint8Array;

    var view = new typeCtrl(M["HEAP8"]["buffer"], ptr, size);
    view.ptr = ptr;
    view.free = function() {
        M["_free"](ptr);
    };
    return view;
}

function _bufferMalloc(size, typeCtrl) {        
    var ptr = M["_malloc"](size * typeCtrl.BYTES_PER_ELEMENT);
    
    if(!ptr) throw 'Can\'t allocate a ' + size;
    
    return _bufferView(ptr, size, typeCtrl);
};

var Tess = M["Tess"] = function () {
    // ptr to tess M
    this.ptr = M["initTesselator"]();
    this.lastContours = [];

    if (!this.ptr) throw "Unknown error, tesselator wasn't init!";
};

Object.assign(Tess.prototype, {
    "dispose": function() {
        if (!this.ptr) 
            return;

        M["deleteTesselator"](this.ptr);
        this.lastContours.forEach( function(e) { e.free && e.free() });
        this.lastContours = [];
        this.ptr = 0;

    },
    "addContours": function(contours) {
        if (!this.ptr) {
            throw 'Tessealtor wasn\'t be inited!';
        }

        var cBuff = this.lastContours = [];
        var malloc = _bufferMalloc;

        if (typeof contours[0] === 'number') contours = [contours];

        for (var i = 0; i < contours.length; i ++) {
            var data = contours[i];
            var buff = malloc(data.length, Float32Array);

            buff.set(data, 0);
            cBuff.push(buff);
            M["addContour"](this.ptr, buff.ptr, data.length / 2);
        }
    },

    "tesselate": function (options) {        
        if (this.lastContours.length === 0)
            throw 'Contours data is required!';

        options = Object.assign({
            "windingRule": 0, 
            "elementType": 0, 
            "polySize": 3, 
            "vertexSize": 2,
            "fillVertexIndices": false 
        }, options || {});

        var result = M["runTesselator"](this.ptr, options);

        if (result["elementCount"] === 0) {
            return null;
        }

        var bv = _bufferView;
        result["vertices"] = bv(
            result["verticesPtr"], 
            result["vertexCount"] * options["vertexSize"], Float32Array);

        result["elements"] = bv(
            result["elementsPtr"], 
            result["elementCount"] * options["polySize"], Uint32Array);
        
        if (options["fillVertexIndices"]) {
            result["vertexIndices"] = bv(
                result["vertexIndicesPtr"], 
                result["vertexCount"], Uint32Array);
        }

        return result;
    }
});