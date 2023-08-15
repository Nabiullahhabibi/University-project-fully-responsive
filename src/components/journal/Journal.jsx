
import React from 'react'
import { Heros } from '../common/heros/Heros'
import { Blog } from '../home/blog/Blog'

export const Journal = () => {
  return (
    <>
    <Heros title="Blog Posts" section="HOME / JOURNAL"/>
    <Blog page="Journal"/>
    </>
    )
}
