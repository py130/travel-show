import { ref } from "vue";

export const useFetchPoem = () => {
  let timer: ReturnType<typeof setInterval>;
  const apiResponse = ref("...");

  const fetchPoem = async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseUrl}/amorous-poem`);
    if (response.status === 200) {
      const data = await response.text();
      apiResponse.value = data;
    }
  };

  const initFetchPoem = () => {
    fetchPoem();
    timer = setInterval(fetchPoem, 4000);
  };

  const destroyFetchPoem = () => {
    clearInterval(timer);
  };

  return {
    apiResponse,
    fetchPoem,
    initFetchPoem,
    destroyFetchPoem,
  };
};
