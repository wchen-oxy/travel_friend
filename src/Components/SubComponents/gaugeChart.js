import ReactApexChart from 'react-apexcharts'
import React from 'react';

  class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
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
                  formatter: function (value) {
                    return  Math.round(value)/10
                },
                }
              }
            }
          },
          fill: {
            colors: "#5db0fe",
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
        console.log(this.props.score);
        const wrapper = [this.props.score];
      return (
        
        

<div id="chart">
<ReactApexChart options={this.state.options} series={wrapper} type="radialBar" />
</div>

      );
    }
  }

  export default ApexChart;