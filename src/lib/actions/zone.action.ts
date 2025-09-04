// Admin - Open/Close Zone Action
export async function toggleZoneStatusAction(
  id: string,
  statusData: ZoneStatusData
): Promise<APIResponse<zone>> {
  const response = await fetch(`${process.env.API}/admin/zones/${id}/open`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${""}`,
    },
    body: JSON.stringify(statusData),
  });
  const payload: APIResponse<zone> = await response.json();
  return payload;
}
