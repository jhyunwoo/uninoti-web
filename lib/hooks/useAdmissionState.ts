import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { useUpdate } from "@/lib/stores/update";

export default function useAdmissionState(url: string) {
  const { setUpdate } = useUpdate((state) => state);
  const { data, error, isLoading, mutate } = useSWR<{
    title: string;
    state: boolean | string;
  }>(url, fetcher, {
    refreshInterval: 100,
    onSuccess: () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("ko-KR", {
        hour12: false,
        hour: "numeric", // 시간 표시 (두 자리)
        minute: "numeric", // 분 표시 (두 자리)
        second: "numeric", // 초 표시 (두 자리)
      }).format(now);
      setUpdate(formattedTime);
    },
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
