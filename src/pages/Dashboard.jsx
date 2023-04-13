import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'

const Dashboard = () => {
    const data = [
        {
            "id": "java",
            "label": "java",
            "value": 10,
            "color": "hsl(0, 70%, 50%)"
        },
        {
            "id": "c",
            "label": "c",
            "value": 10,
            "color": "hsl(0, 70%, 50%)"
        },
        {
            "id": "python",
            "label": "python",
            "value": 10,
            "color": "hsl(0, 70%, 50%)"
        },
        {
            "id": "javascript",
            "label": "javascript",
            "value": 10,
        },
    ]
    return (
        <div className='md:flex justify-center items-center xl:space-x-36 pl-2 mt-10'>
            <div className='flex flex-col'>
                <div className='w-80 h-80 md:w-[26rem] md:h-[26rem] -mb-10'>
                    <h1>Dashboard</h1>
                    <ResponsivePie
                        data={data}
                        margin={{ right: 80, bottom: 100, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor='#333333'
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor='#333333'
                    />
                </div>
                <div className='w-80 h-80 md:w-[26rem] md:h-[26rem] -mb-20'>
                    <h1>Dashboard</h1>
                    <ResponsivePie
                        data={data}
                        margin={{  right: 80, bottom: 100, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'nivo' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextColor='#333333'
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor='#333333'
                    />
                </div>
            </div>
            <div className='w-80  h-52 md:w-[26rem] md:h-[26rem] -mb-20' >
                <h1>Dashboard</h1>
                <ResponsiveBar
                    data={data}
                    keys={['value']}
                    indexBy='label'
                    margin={{ top: 20 ,right: 80, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                />
            </div>
        </div>
    )
}

export default Dashboard