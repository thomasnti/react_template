/* eslint-disable no-promise-executor-return */
export default function fakeApi<TResponse>(
  response: TResponse
): Promise<TResponse> {
  return new Promise((res) => setTimeout(() => res(response), 450));
}
