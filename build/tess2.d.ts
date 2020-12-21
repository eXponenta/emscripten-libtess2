export interface IWasmResult {
	allocated: number;
	elements: Uint32Array & {free: () => void};
	elementsCount: number;
	vertexCount: number;
	vertices: Float32Array & {free: () => void};
}

export interface ITess {
	init(): boolean;
	addContours(contours: ArrayLike<number> | ArrayLike<ArrayLike<number>>): void;
	tesselate(): IWasmResult | null;
	dispose(): void;
}

export interface IModule {
	tess: ITess;
}

export function createTess2Wasm(): Promise<IModule>;