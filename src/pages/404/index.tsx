import React from 'react'
import './style.less'
import bgSVG from '@/assets/undraw_page_not_found_su7k.svg'

const NoMatch: React.FC = props => {
  return <div className="no-match" style={{ background: `url(${bgSVG}) no-repeat center / 30%` }} />
}

export default NoMatch
