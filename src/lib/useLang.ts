import { useSelector } from "react-redux"
import { RootState } from "../store/reducer"
function useLang() {
  return useSelector((state: RootState) => state.Language.lang)
}

export default useLang
