interface IRovingIndexOptions {
    cyclic: boolean;
    index: number;
    pausable: boolean;
    total: number;
}

interface IRovingIndexCallback {
    (oldIndex: number, newIndex: number): void;
}

export default class RovingIndex {
    constructor(config: IRovingIndexOptions);
    resetIndex(): void;
    getIndex(): void;
    getTotal(): number;
    prev(callback: IRovingIndexCallback): void;
    next(callback: IRovingIndexCallback): void;
    setIndex(index: number, total: number): void;
    setTotal(total: number): void;
    static validateIndex(index: number, total: number, options: IRovingIndexOptions): number;
    static validateFiniteIndex(index: number, total: number): number;
    static validateCyclicIndex(index: number, total: number): number;
    static validatePausableIndex(index: number, total: number): number;
}
