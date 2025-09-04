/**
 * Executes an asynchronous callback function and catches any errors.
 * If successful, returns the payload with a `null` error.
 * If there's an error, returns `null` payload and the error message.
 *
 * @template T - The type of data expected in the API response payload.
 * @param callback - An async function that returns a Promise of type `APIResponse<T>`.
 * @returns A tuple containing either the successful payload and `null`, or `null` and the error message.
 */
export default async function catchError<T>(
  callback: () => Promise<APIResponse<T>>
): Promise<[SuccessfulResponse<T>, null] | [null, string]> {
  try {
    // Execute the callback function to get the payload
    const payload = await callback();

    // Check if the payload is an ErrorResponse by checking for status property
    if (payload && typeof payload === "object" && "status" in payload) {
      // It's an ErrorResponse, throw an error with the message
      const errorResponse = payload as ErrorResponse;
      throw new Error(errorResponse.message || "An error occurred");
    }

    // Return the payload with `null` error
    return [payload as SuccessfulResponse<T>, null];
  } catch (error) {
    // If an error occurs during execution, return `null` payload and the error message
    return [null, (error as Error).message];
  }
}
