
import {useEffect} from 'react'

const useDocumentTitle = (count) => {
      
    useEffect(() => {
        document.title = `React - ${count}`
     
    }, [count])
}

export default useDocumentTitle;
