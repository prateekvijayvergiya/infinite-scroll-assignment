import React, { useState, useRef, useCallback } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useUsersData from './../../../hooks/useUsersData'
import UserCard from './userCard'
import LoadingSkeleton from '../../skeleton'
import Spacer from '../../common/spacer'

const UsersList: React.FC = () => {
  const [page, setPage] = useState<number>(0)
  const { isLoading, error, usersData, hasMore } = useUsersData(page)

  const observer = useRef<IntersectionObserver>()
  const lastUserElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )

  return (
    <Grid container spacing={3}>
      {usersData.map((user, index) => (
        <Grid item xs={12} md={4} lg={2} key={index} ref={lastUserElementRef}>
          <UserCard {...user} />
        </Grid>
      ))}
      <Spacer />
      {isLoading && <LoadingSkeleton />}
      {error && <Typography>{error}</Typography>}
    </Grid>
  )
}

export default UsersList
