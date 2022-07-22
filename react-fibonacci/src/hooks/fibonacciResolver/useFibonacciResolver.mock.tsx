const resolveOutputStub: number[] = [];

const resolveMocked = jest.fn(() => resolveOutputStub);

export const useFibonacciResolverMock = () => ({
    resolve: resolveMocked,
});
