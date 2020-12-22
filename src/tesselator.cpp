#include <emscripten/bind.h>

#include "tesselator.h"
#include "tess.h"

using namespace emscripten;

intPtr_t initTesselator() {

    TESSalloc ma = {0};
    // realloc not provided, allow 256 extra vertices.
	ma.extraVertices = 256; 

    return reinterpret_cast<intPtr_t> (tessNewTess(&ma));
}

void addContour (intPtr_t tessPtr, intPtr_t contour, int size) {
    TESStesselator* tess = reinterpret_cast<TESStesselator*>(tessPtr);
    const float* ptr = reinterpret_cast<const float*>(contour);
	tessAddContour(tess, 2, ptr, sizeof(float) * 2, size);
}

TessResultMeta runTesselator(intPtr_t tessPtr, TessOptions options) {
    TESStesselator* tess = reinterpret_cast<TESStesselator*>(tessPtr);
    TessResultMeta res = {0};

    if (!tessTesselate(tess, &options)) {
        return res;
    }
    
    res.elementCount = tess->elementCount;
    res.vertexCount = tess->vertexCount;

    const float* verts = tess->vertices;
    const int* vinds = tess->vertexIndices;
    const int* elems = tess->elements;

    res.elementsPtr = reinterpret_cast<int>(elems);
    res.verticesPtr = reinterpret_cast<int>(verts);
    res.vertexIndicesPtr = reinterpret_cast<int>(vinds);
       
    return res;
}

void deleteTesselator(intPtr_t tessPtr) {
    
    if (tessPtr) {
        tessDeleteTess(reinterpret_cast<TESStesselator*>(tessPtr));
    }
}

EMSCRIPTEN_BINDINGS(tess) {
    value_object<TessOptions>("TessOptions")
        .field("windingRule",&TessOptions::windingRule)
        .field("elementType",&TessOptions::elementType)
        .field("polySize",&TessOptions::polySize)
        .field("vertexSize",&TessOptions::vertexSize)
    ;
        
    value_object<TessResultMeta>("TessResultMeta")
        .field("elementCount", &TessResultMeta::elementCount)
        .field("vertexCount", &TessResultMeta::vertexCount)
        .field("elementsPtr", &TessResultMeta::elementsPtr)
        .field("verticesPtr", &TessResultMeta::verticesPtr)
        .field("vertexIndicesPtr", &TessResultMeta::vertexIndicesPtr)
        ;

    function("initTesselator", &initTesselator, allow_raw_pointers());
    function("addContour", &addContour, allow_raw_pointers());
    function("runTesselator", &runTesselator, allow_raw_pointers());
    function("deleteTesselator", &deleteTesselator, allow_raw_pointers());
}
