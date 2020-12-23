// this is packages that will emmit to compilled code
var M = Module;
var NN = 'number';

var initTesselator, 
    deleteTesselator, 
    addContour,
    runTesselator,
    getVertexCount,
    getVertices,
    getElementCount,
    getElements,
    getVertexIndices;

function _wrap () {
    var _w = M['cwrap'];
    initTesselator = _w('tessNewTess', NN, [NN]);
    deleteTesselator = _w('tessDeleteTess', null, [NN]);
    addContour = _w('tessAddContour', NN, [NN, NN, NN, NN, NN]);
    runTesselator = _w('tessTesselate', NN, [NN, NN, NN, NN, NN, NN]);
    getVertexCount = _w('tessGetVertexCount', NN, [NN]);
    getVertices = _w('tessGetVertices', NN, [NN]);
    getElementCount = _w('tessGetElementCount', NN, [NN]);
    getElements = _w('tessGetElements', NN, [NN]);
    getVertexIndices = _w('tessGetVertexIndices', NN, [NN]);
}

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
    if(!initTesselator) {
        _wrap();
    }
    // ptr to tess M
    this.ptr = initTesselator(0);
    this.lastContours = [];

    if (!this.ptr) throw "Unknown error, tesselator wasn't init!";
};

Object.assign(Tess.prototype, {
    "dispose": function() {
        if (!this.ptr) 
            return;

        deleteTesselator(this.ptr);
        this.lastContours.forEach( function(e) { e.free && e.free() });
        this.lastContours = [];
        this.ptr = 0;

    },
    "addContours": function(contours, size) {
        if (!this.ptr) {
            throw 'Tessealtor wasn\'t be inited!';
        }

        size = size || 2;
        var cBuff = this.lastContours = [];
        var malloc = _bufferMalloc;

        if (typeof contours[0] === 'number') contours = [contours];

        for (var i = 0; i < contours.length; i ++) {
            var data = contours[i];
            var buff = malloc(data.length, Float32Array);

            buff.set(data, 0);
            cBuff.push(buff);
            addContour(
                this.ptr, 
                size, 
                buff.ptr, 
                size * Float32Array.BYTES_PER_ELEMENT, 
                data.length / size);
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

        var status = runTesselator(this.ptr,
            options["windingRule"] | 0 || 0,
            options["elementType"] | 0 || 0,
            options["polySize"] | 0 || 3,
            options["vertexSize"] | 0 || 2,
            0 // normal not allowed
        );

        if (!status) {
            return null;
        }

        var vc = getVertexCount(this.ptr);
        var ec = getElementCount(this.ptr); 
        var bv = _bufferView;

        var result = {
            "elementCount": ec, "vertexCount": vc 
        };

        result["vertices"] = bv(
            getVertices(this.ptr), 
            vc * options["vertexSize"], Float32Array);

        result["elements"] = bv(
            getElements(this.ptr), 
            ec * options["polySize"], Uint32Array);
        
        if (options["fillVertexIndices"]) {
            result["vertexIndices"] = bv(
                getVertexIndices(this.ptr), 
                vc, Uint32Array);
        }

        return result;
    }
});