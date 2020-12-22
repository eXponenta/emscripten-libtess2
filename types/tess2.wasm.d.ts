export interface IWasmResult {
	elements: Uint32Array & {free: () => void};
	elementsCount: number;
	vertexCount: number;
	vertices: Float32Array & {free: () => void};
}
export const enum WINDONG_RULE
{
	TESS_WINDING_ODD,
	TESS_WINDING_NONZERO,
	TESS_WINDING_POSITIVE,
	TESS_WINDING_NEGATIVE,
	TESS_WINDING_ABS_GEQ_TWO,
}

export const enum ELEMENT_TYPE
{
	TESS_POLYGONS,
	TESS_CONNECTED_POLYGONS,
	TESS_BOUNDARY_CONTOURS,
}
export interface ITessOptions {
	windingRule: WINDONG_RULE;
	elementType: ELEMENT_TYPE;
	polySize: 3;
	vertexSize: 2 | 3;
}

export interface ITess {
	new(): ITess;
	addContours(contours: ArrayLike<number> | ArrayLike<ArrayLike<number>>): void;
	tesselate(option?: ITessOptions): IWasmResult | null;
	dispose(): void;
}

export interface IModule {
	Tess: ITess;
}

export function createTess2Wasm(): Promise<IModule>;