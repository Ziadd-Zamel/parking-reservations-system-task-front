// Tickets - Check in Action
export async function checkinTicketAction(
  ticketData: CheckinData
): Promise<APIResponse<Ticket>> {
  const response = await fetch(`${process.env.API}/tickets/checkin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  });
  const payload: APIResponse<Ticket> = await response.json();
  return payload;
}

// Tickets - Check out Action
export async function checkoutTicketAction(
  ticketData: CheckoutData
): Promise<APIResponse<Ticket>> {
  const response = await fetch(`${process.env.API}/tickets/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  });
  const payload: APIResponse<Ticket> = await response.json();
  return payload;
}
