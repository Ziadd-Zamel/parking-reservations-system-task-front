// Gates - Public
export async function getAllGates(): Promise<APIResponse<Gate[]>> {
  const response = await fetch(`${process.env.API}/master/gatess`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Gate[]> = await response.json();

  return payload;
}
