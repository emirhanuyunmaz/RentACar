import { useState } from "react"
import SendEmail from "../components/ResetPassword/SendEmail"
import ResetPasswordAndCode from "../components/ResetPassword/ResetPasswordAndCode"


export default function ResetPassword(){
    const [stage,setStage] = useState(0)
    
    return (<div className="max-w-7xl min-h-[70vh] mx-auto flex justify-center items-center">
        {
            stage == 0 && <SendEmail/>
        }
        
        {
            stage == 1 && <ResetPasswordAndCode/>
        }
        
    </div>)
}