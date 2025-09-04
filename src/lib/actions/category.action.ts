export async function updateCategoryRatesAction(
  id: string,
  ratesData: CategoryRatesData
): Promise<APIResponse<Category>> {
  const response = await fetch(`${process.env.API}/admin/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${""}`,
    },
    body: JSON.stringify(ratesData),
  });
  const payload: APIResponse<Category> = await response.json();
  return payload;
}
