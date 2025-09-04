// Gates - Public
export async function getAllGates(): Promise<APIResponse<Gate[]>> {
  const response = await fetch(`${process.env.API}/master/gates`);

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Gate[]> = await response.json();

  return payload;
}
