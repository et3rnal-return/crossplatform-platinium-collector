export const exchangeNpssoForCode = async (
  npssoToken: string
): Promise<string> => {
  const queryString = new URLSearchParams({
    access_type: "offline",
    client_id: "ac8d161a-d966-4728-b0ea-ffec22f69edc",
    redirect_uri: "com.playstation.PlayStationApp://redirect",
    response_type: "code",
    scope: "psn:mobile.v1 psn:clientapp",
  }).toString();

  const requestUrl = `https://ca.account.sony.com/api/authz/v3/oauth/authorize?${queryString}`;
  console.log(requestUrl);
  // This never returns a 200. As of Oct 10 2021, it seems to return a 302.
  const { headers: responseHeaders } = await fetch(requestUrl, {
    headers: {
      Cookie: `npsso=${npssoToken}`,
    },
    redirect: "manual",
  });

  console.log(responseHeaders);
  // The access code itself is stored in a header on the response.
  // We'll perform a few validations to ensure it's actually there.
  if (
    !responseHeaders.has("location") ||
    !responseHeaders.get("location")?.includes("?code=")
  ) {
    throw new Error(`
      There was a problem retrieving your PSN access code. Is your NPSSO code valid?
      To get a new NPSSO code, visit https://ca.account.sony.com/api/v1/ssocookie.
    `);
  }

  const redirectLocation = responseHeaders.get("location") as string;
  const redirectParams = new URLSearchParams(
    redirectLocation.split("redirect/")[1]
  );

  return redirectParams.get("code") as string;
};
