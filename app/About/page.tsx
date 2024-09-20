import React from 'react'
import TeamAndMission from "../../components/TeamAndMission";
import { TimelineComp } from '../../components/TimeLineComp'

export default function page() {
  return (
    <div className='px-4 md:px-10'>
    <TimelineComp />
    <TeamAndMission />
    </div>
  )
}
 