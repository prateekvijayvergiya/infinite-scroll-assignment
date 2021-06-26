import { useState, useEffect } from 'react'
import axios from 'axios'

import UserDetailsType from './../types/userDetails'

const BASE_URL = 'https://dummyapi.io/data/api'

const useUsersData = (page: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [usersData, setUsersData] = useState<Array<UserDetailsType>>([])
  const [hasMore, setHasMore] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    axios
      .get(`${BASE_URL}/user?page=${page}&limit=12`, {
        headers: { 'app-id': process.env.REACT_APP_API_ID },
      })
      .then(({ data }) => {
        const { data: users, total } = data
        setUsersData((prev) => {
          return [...prev, ...users]
        })
        setHasMore(page * 12 < total)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
      })
  }, [page])

  return { isLoading, error, usersData, hasMore }
}

export default useUsersData
