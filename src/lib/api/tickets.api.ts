export async function getTicketById(id: string): Promise<APIResponse<Ticket>> {
  const response = await fetch(`${process.env.API}/tickets/${id}`);

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Ticket> = await response.json();

  return payload;
}
