// Admin - Create Rush Hour Action
export async function createRushHourAction(
  rushHourData: RushHourData
): Promise<APIResponse<RushHour>> {
  const response = await fetch(`${process.env.API}/admin/rush-hours`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(rushHourData),
  });
  const payload: APIResponse<RushHour> = await response.json();
  return payload;
}
