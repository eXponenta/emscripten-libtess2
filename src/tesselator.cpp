#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <emscripten/bind.h>

#include "tesselator.h"

using namespace emscripten;

typedef int intPtr_t;

struct TessResultMeta {
    int elementsCount;
    int vertexCount;
    int allocated;
    intPtr_t elementsPtr;
    intPtr_t vertexPtr;
};


TESSalloc ma;
TessResultMeta res;
TESStesselator* tess = 0;

int allocated = 0;

void* stdAlloc(void* userData, unsigned int size)
{
	int* allocated = (int*) userData;
	*allocated += (int) size;
	return malloc(size);
}

void stdFree(void* userData, void* ptr)
{
	free(ptr);
}

bool initTesselator() {
    
	memset(&ma, 0, sizeof(ma));
	ma.memalloc = stdAlloc;
	ma.memfree = stdFree;
	ma.userData = (void*)&allocated;
	ma.extraVertices = 256; // realloc not provided, allow 256 extra vertices.

	tess = tessNewTess(&ma);

    return (bool) tess;
}

void addContour (intPtr_t contour, int size) {
    const float* ptr = reinterpret_cast<const float*>(contour);
	tessAddContour(tess, 2, ptr, sizeof(float) * 2, size);
}

TessResultMeta runTesselator() {

	memset(&res, 0, sizeof(res));

    if (!tessTesselate(tess, TESS_WINDING_POSITIVE, TESS_POLYGONS, 3, 2, 0)) {
        return res;
    }

    res.elementsCount = tessGetElementCount(tess);
    res.vertexCount = tessGetVertexCount(tess);
    res.allocated = allocated;

    const float* verts = tessGetVertices(tess);
//    const int* vinds = tessGetVertexIndices(tess);
    const int* elems = tessGetElements(tess);

    res.elementsPtr = reinterpret_cast<int>(elems);
    res.vertexPtr = reinterpret_cast<int>(verts);
    
    return res;
}

void deleteTesselator() {
    if (tess) {
        tessDeleteTess(tess);
    }
}

EMSCRIPTEN_BINDINGS(tess) {
    value_object<TessResultMeta>("TessResultMeta")
        .field("elementsCount", &TessResultMeta::elementsCount)
        .field("vertexCount", &TessResultMeta::vertexCount)
        .field("allocated", &TessResultMeta::allocated)
        .field("elementsPtr", &TessResultMeta::elementsPtr)
        .field("vertexPtr", &TessResultMeta::vertexPtr)
        ;

    function("initTesselator", &initTesselator);
    function("addContour", &addContour, allow_raw_pointers());
    function("runTesselator", &runTesselator);
    function("deleteTesselator", &deleteTesselator);
}
