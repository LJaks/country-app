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

  const regionsArr = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Polar',
  ]

  const data = regionsArr.reduce<{ label: string; count: number }[]>(
    (acc, curr) => {
      acc.push({
        label: curr,
        count: visitedCountries.filter((c) => c.region === curr).length,
      })
      return acc
    },
    []
  )

  const dataVisited = {
    labels: ['% visited', '% remaining'],
    datasets: [
      {
        label: 'percentage',
        data: [
          ((visitedCountries.length * 100) / allCountries.length).toFixed(0),
          (100 - (visitedCountries.length * 100) / allCountries.length).toFixed(
            0
          ),
        ],
        backgroundColor: [Color.BLUE, 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  }
  const visited = {
    labels: [...data.map((x) => x.label)],
    datasets: [
      {
        label: 'number',
        data: [
          ...data.map((x) => x.count),
          data.find((x) => x.count > 0) ? 0 : 1,
        ],
        backgroundColor: [
          Color.ORANGE,
          Color.RED,
          Color.GREEN,
          Color.VIOLET,
          Color.BLUE,
          Color.GRAY,
          'rgba(255, 6, 86, 1)',
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
      fontColor: 'black',
    },
    legend: {
      display: true,
      position: 'left',
      labels: {
        padding: 15,
        fontSize: 18,
        fontColor: 'black',
        fillStyle: 'white',
      },
    },
  }

  return (
    <div
      className="chart-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '10px 0',
      }}
    >
      <div
        className="chart"
        style={{ width: '35%', height: '350px', marginRight: '20px' }}
      >
        <Doughnut data={dataVisited} options={options} />
      </div>
      <div className="chart" style={{ width: '35%', height: '350px' }}>
        <Doughnut
          data={visited}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: 'Visited Countries By Region',
              fontSize: 20,
              fontColor: 'black',
            },
            legend: {
              display: true,
              position: 'right',
              labels: { fontSize: 18, fontColor: 'black' },
            },
          }}
        />
      </div>
    </div>
  )
}
