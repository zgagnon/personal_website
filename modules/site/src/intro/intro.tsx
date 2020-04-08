/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from 'react'

const PageTitle: React.FC = ({children}) => {
    return (
      <h2 css={{
          fontSize: '32pt',
          fontFamily: 'Manjari',
          height: '48px',
          lineHeight: '48px',
      }}>{children}</h2>
    )
}

const intro = ()  => {
    return <div css={{
        paddingBottom: '16px'
    }}>
        <PageTitle>Who Am I</PageTitle>
        I'm passionate about helping teams become better versions of themselves.
        I am driven by giving people the skills, the freedom, and the safety to succeed.
        I believe that when we come together we are stronger than any one of us individually.
    </div>
}

export default intro