import { EndpointDefinition, EndpointFunction, EndpointFunctionArgs } from './types';

/**
 * A very simple transformer that will transform the response from a fetch call into a JSON object
 * and cast it to the specified type. Intended for use with `defineEndpoint`.
 * @param response The response from a fetch call.
 * @returns The transformed JSON object.
 * @example
 * const endpoint = defineEndpoint({
 *   function: async (): Response => {
 *     return fetch('https://example.com/api/users');
 *   },
 *   transform: transformFetchJson<User[]>,
 */
export async function transformFetchJson<TResult>(response: Response): Promise<TResult> {
  const json = await response.json();
  return json as TResult;
}

/**
 * A helper function to create an endpoint definition in a type-safe way.
 * @param definition The endpoint definition.
 * @returns The endpoint definition.
 */
export function defineEndpoint<
  TArgs extends EndpointFunctionArgs = void,
  TFunction extends EndpointFunction<TArgs> = EndpointFunction<TArgs>,
  TTransformedResult = Awaited<ReturnType<TFunction>>,
>(
  definition: EndpointDefinition<TArgs, TFunction, TTransformedResult>,
): EndpointDefinition<TArgs, TFunction, TTransformedResult> {
  return definition;
}
