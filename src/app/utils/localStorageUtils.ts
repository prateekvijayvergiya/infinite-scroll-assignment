import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = (key: string) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const valueInStorage = window.localStorage.getItem(key)
    if (valueInStorage !== null) {
      try {
        setIsUserLoggedIn(JSON.parse(valueInStorage))
      } catch (error) {
        window.localStorage.removeItem(key)
      }
    }
  }, [key])

  const setItemInLocalStorage = useCallback((value: boolean) => {
    setIsUserLoggedIn(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  },[key])

  return {
    isUserLoggedIn,
    setItemInLocalStorage,
  }
}

export default useLocalStorage
