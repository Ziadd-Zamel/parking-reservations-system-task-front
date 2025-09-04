// Zones - Public
export async function getAllZones(): Promise<APIResponse<zone[]>> {
  const response = await fetch(`${process.env.API}/master/zones`);

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<zone[]> = await response.json();

  return payload;
}
