import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { AppState, Color } from '../../types'

export default function Chart() {
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries
  )
  const visitedCountries = useSelector(
    (state: AppState) => state.visited.countriesInVisitedList
  )

  const countriesInRegion = (i: number) => {
    const regionsArr = [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania',
      'Polar',
    ]

    const region = visitedCountries
      .filter((c) => c.region === regionsArr[i])
      .map((c) => c.region).length
    return region
  }
  const dataVisited = {
    labels: ['% visited', '% remaining'],
    datasets: [
      {
        label: 'percentage',
        data: [
          (visitedCountries.length / allCountries.length).toFixed(2),
          (100 - visitedCountries.length / allCountries.length).toFixed(2),
        ],
        backgroundColor: [Color.BLUE, 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  }
  const visited = {
    labels: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'],
    datasets: [
      {
        label: 'number',
        data: [
          countriesInRegion(0),
          countriesInRegion(1),
          countriesInRegion(2),
          countriesInRegion(3),
          countriesInRegion(4),
          countriesInRegion(5),
        ],
        backgroundColor: [
          Color.ORANGE,
          Color.RED,
          Color.GREEN,
          Color.VIOLET,
          Color.BLUE,
          Color.GRAY,
        ],

        borderWidth: 1,
      },
    ],
  }
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: 'Countries In Percentage',
      fontSize: 20,
    },
    legend: {
      position: 'bottom',
      labels: {
        padding: 15,
      },
    },
  }

  return (
    <div
      className="chart-container"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '30px 0',
      }}
    >
      <div className="chart" style={{ width: '40%', height: '200px' }}>
        <Doughnut data={dataVisited} options={options} />
      </div>
      <div className="chart" style={{ width: '40%', height: '200px' }}>
        <Doughnut
          data={visited}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: 'Countries By Region (The Visited List)',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    </div>
  )
}
