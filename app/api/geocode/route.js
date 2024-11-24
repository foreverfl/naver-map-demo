export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET;

  if (!address) {
    return new Response(JSON.stringify({ error: "주소가 필요합니다!!" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!clientId || !clientSecret) {
    console.error("환경 변수 설정 오류");
    return new Response(
      JSON.stringify({ error: "서버 환경 변수 설정이 필요." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(
    address
  )}`;

  try {
    const apiResponse = await fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": clientId,
        "X-NCP-APIGW-API-KEY": clientSecret,
      },
    });

    if (!apiResponse.ok) {
      throw new Error(`Geocode API 요청 실패: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Geocode 요청 실패:", error.message || error);
    return new Response(
      JSON.stringify({ error: "Geocoding 요청 실패" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}