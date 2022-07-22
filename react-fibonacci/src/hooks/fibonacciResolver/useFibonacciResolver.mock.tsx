const resolveByIndexStub: number[] = [];

const resolveByIndexMocked = jest.fn(() => resolveByIndexStub);

export const useFibonacciResolverMock = () => ({
    resolveByIndex: resolveByIndexMocked,
});
