import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useSNU() {
  const { data, error, isLoading, mutate } = useSWR<{ result: boolean }>(
    "https://api.uninoti.moveto.kr/snu",
    fetcher,
    { refreshInterval: 100 },
  );

  return {
    snuData: data,
    snuError: error,
    snuIsLoading: isLoading,
    mutateSnu: mutate,
  };
}
