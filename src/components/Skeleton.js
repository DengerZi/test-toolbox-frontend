import React from 'react'
import { Placeholder } from 'react-bootstrap'

export default function SkeletonComponent() {
  return (
    <Placeholder as="p" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>
  )
}
