export const useEnvConfig = () => {
    const config = useRuntimeConfig()
  
    return {
      baseUrl: config.public.REQ_BASE_URL,
    }
  }
  