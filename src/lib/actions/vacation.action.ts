// Admin - Create Vacation Action
export async function createVacationAction(
  vacationData: VacationData
): Promise<APIResponse<Vacation>> {
  const response = await fetch(`${process.env.API}/admin/vacations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(vacationData),
  });
  const payload: APIResponse<Vacation> = await response.json();
  return payload;
}
