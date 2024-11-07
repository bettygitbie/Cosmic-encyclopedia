import { useNavigate } from "react-router-dom"


export default function NavigateBack() {
    const location = useNavigate();
  return (
    <button className="button" onClick={()=>location(-1)}>Back</button>
  )
}
