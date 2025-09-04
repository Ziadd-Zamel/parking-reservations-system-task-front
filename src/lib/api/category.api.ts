// Categories - Public

export async function getAllCategory(): Promise<APIResponse<Category[]>> {
  const response = await fetch(`${process.env.API}/master/categories`);

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Category[]> = await response.json();

  return payload;
}
