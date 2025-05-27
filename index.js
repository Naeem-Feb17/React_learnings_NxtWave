const element = (
  <div style={{backgroundColor: '#0f172a'}}>
    <div>
      <h1
        style={{
          color: '#f8fafc',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'Roboto',
        }}
      >
        Super Over League
      </h1>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        alt='RCB Logo'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        alt='CSK Logo'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
