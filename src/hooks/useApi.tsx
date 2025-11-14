import { Api } from "../api/api"

export function useApi() {
  return {
    data: (async() => await Api.fetchData()),
  }
}