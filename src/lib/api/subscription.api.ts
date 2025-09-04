// Subscriptions - Verify by ID
export async function getSubscriptionById(
  id: string
): Promise<APIResponse<Subscription>> {
  const response = await fetch(`${process.env.API}/subscriptions/${id}`);

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Subscription> = await response.json();

  return payload;
}

// Admin - Get All Subscriptions
export async function getAllSubscriptions(): Promise<
  APIResponse<Subscription[]>
> {
  const response = await fetch(`${process.env.API}/admin/subscriptions`, {
    headers: {
      Authorization: `Bearer ${"ss"}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error in getting Data");
  }

  const payload: APIResponse<Subscription[]> = await response.json();

  return payload;
}
