import ReactApexChart from 'react-apexcharts'
import React from 'react';


  class GaugeChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -10,
            
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#fff",
                strokeWidth: '97%',
                margin: 1, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                }, 
               
                value: {
                  offsetY: -2,
                  fontSize: '22px',
                  color: 'white',
                  formatter: function (value) {
                    return  Math.round(value)/10
                },
                }
              }
            }
          },
          fill: {
            colors: "#ff7f00",
            type: 'solid',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
        },
      
      
      };
    }

  

    render() {
        const wrapper = [this.props.score];
      return (
         

<ReactApexChart options={this.state.options} series={wrapper} type="radialBar" />

      );
    }
  }

  export default GaugeChart;