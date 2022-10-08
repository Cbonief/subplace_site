import { useEffect, useState} from "react";

export default function LeavingWindowAlert(props){
    useEffect(() => {
      window.addEventListener('beforeunload', alertUser)
      window.addEventListener('unload', handleEndConcert)
      return () => {
        window.removeEventListener('beforeunload', alertUser)
        window.removeEventListener('unload', handleEndConcert)
        handleEndConcert()
      }
    }, [])
    const alertUser = e => {
      e.preventDefault()
      e.returnValue = ''
    }
    const handleEndConcert = async () => {
        await fetcher({
            url: endConcert(concert.id),
            method: 'PUT'
        })
    }
    return (
      <>
      </>
    );
}