import { useRouter } from "next/router";
import { useEffect } from 'react'
function Redirect({ to }) {
    const router = useRouter();
    useEffect(() => { 
        router.push(to)
    }, [to])

    return null
}

const Apply = () => { 
    return <Redirect to="https://forms.gle/WyzZ99XBtZjVLPdH7" />
}
export default Apply;