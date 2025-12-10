import React, { useEffect, useState } from 'react'
import Style from './Dashboard.module.css'
import StatsGrid from '../StatsGrid/StatsGrid'
import ChartSection from '../ChartSection/ChartSection'
import TableSection from '../TableSection/TableSection'
import ActivityFeed from '../ActivityFeed/ActivityFeed'

export default function Dashboard() {

    return (
        <>
            <div className='space-y-6'>
                {/* Stats Grid */}
                <StatsGrid />
                {/* Charts Sections */}
                <ChartSection />

                <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
                    <div className='xl:col-span-2'>
                        <TableSection />
                    </div>
                    <div>
                        <ActivityFeed />
                    </div>
                </div>
            </div>
        </>
    )
}
