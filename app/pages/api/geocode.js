export default async function handler(req, res) {
  const { address } = req.query;
  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID; // 환경 변수에서 가져옴
  const clientSecret = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET;

  if (!address) {
    return res.status(400).json({ error: "주소기 필요합니다!!" });
  }

  if (!clientId || !clientSecret) {
    console.error("환경 변수 설정 오류");
    return res.status(500).json({
      error: "서버 환경 변수 설정이 필요.",
    });
  }

  const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
        "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET,
      },
    });

    if (!response.ok) {
      throw new Error(`Geocode API 요청실패: ${response.status}`);
    }
    const data = await response.json();
    return res.status(200).json(data); // 클라이언트로 데이터 반환
  } catch (error) {
    console.error("Geocode 요청 실패:", error.message || error);
    return res.status(500).json({ error: "Geocoding 요청 실패" });
  }
}
