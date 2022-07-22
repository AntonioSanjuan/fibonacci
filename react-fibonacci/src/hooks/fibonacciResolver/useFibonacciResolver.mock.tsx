const resolveOutputStub: number[] = [];

const resolveMocked = jest.fn(() => resolveOutputStub);

export const useFibonacciResolverMock = () => ({
    error: false,
    resolve: resolveMocked,
});
